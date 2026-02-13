"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

/* ── Shared scroll + cursor state ── */
const state = { scroll: 0, cx: 0, cy: 0 };
export function updateSceneState(s: number, cx: number, cy: number) {
  state.scroll = s;
  state.cx = cx;
  state.cy = cy;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ════════════════════════════════════════════════════════════
   CATO LOGO PLANE
   Loads catoDark.svg as a texture, starts far/small, scrolls
   forward until it's perfectly beside the hero statement.
   ════════════════════════════════════════════════════════════ */

function CatoLogoPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/images/cato-logo.png");

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const sp = state.scroll;
    const time = clock.elapsedTime;

    // Position: starts at Z=-10 (far), moves to Z=2 (close, beside hero)
    const tz = lerp(-10, 2, Math.min(sp * 3, 1));
    meshRef.current.position.z = tz;

    // Scale: starts tiny (0.3), grows to full size (3.5)
    const scale = lerp(0.3, 3.5, Math.min(sp * 3, 1));
    meshRef.current.scale.setScalar(scale);

    // X position: centers at first, then moves right to align beside hero
    const tx = lerp(0, 4.5, Math.min(sp * 2.5, 1));
    meshRef.current.position.x = tx + state.cx * 0.15;

    // Y position: slight cursor follow
    const ty = state.cy * 0.1 + Math.sin(time * 0.3) * 0.05;
    meshRef.current.position.y = ty;

    // Gentle rotation
    meshRef.current.rotation.z = Math.sin(time * 0.15) * 0.03 + state.cx * 0.02;

    // Opacity: fade in as it approaches
    const mat = meshRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = Math.min(sp * 4, 1) * 0.85;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ════════════════════════════════════════════════════════════
   FLOATING FACT ANNOTATIONS
   HTML overlays that appear at scroll milestones, sharing
   key facts about Cato Labs.
   ════════════════════════════════════════════════════════════ */

function FloatingFact({
  position,
  fact,
  scrollTrigger,
}: {
  position: [number, number, number];
  fact: string;
  scrollTrigger: number;
}) {
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    const shouldShow = state.scroll > scrollTrigger && state.scroll < scrollTrigger + 0.15;
    if (shouldShow !== visible) setVisible(shouldShow);
  });

  if (!visible) return null;

  return (
    <Html position={position} center distanceFactor={8}>
      <div
        className="pointer-events-none whitespace-nowrap rounded-lg border border-steel-blue/20 bg-deep-navy/90 px-4 py-2 font-mono text-xs text-steel-blue backdrop-blur-sm"
        style={{
          animation: "fade-in 0.4s ease-out forwards",
        }}
      >
        {fact}
      </div>
    </Html>
  );
}

function FactAnnotations() {
  const facts = useMemo(
    () => [
      { pos: [-3, 1.5, 0] as [number, number, number], text: "50K+ daily agent interactions", trigger: 0.12 },
      { pos: [3, -1, 1] as [number, number, number], text: "12-week avg. deployment", trigger: 0.22 },
      { pos: [-2.5, -1.5, 0.5] as [number, number, number], text: "98.5% RAG accuracy", trigger: 0.35 },
      { pos: [2, 1, -0.5] as [number, number, number], text: "200+ clinics served", trigger: 0.48 },
    ],
    []
  );

  return (
    <>
      {facts.map((f, i) => (
        <FloatingFact key={i} position={f.pos} fact={f.text} scrollTrigger={f.trigger} />
      ))}
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   AMBIENT DUST
   Sparse background particles for depth.
   ════════════════════════════════════════════════════════════ */

function AmbientDust({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 25;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.002;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6EA9FF"
        size={0.012}
        transparent
        opacity={0.12}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ════════════════════════════════════════════════════════════
   CAMERA CONTROLLER
   Smooth drift responding to scroll and cursor.
   ════════════════════════════════════════════════════════════ */

function CameraRig() {
  const posRef = useRef(new THREE.Vector3(0, 0, 8));

  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    const sp = state.scroll;

    // Gentle Z pull as user scrolls
    const tz = lerp(8, 6, sp * 0.3);

    // Cursor-driven orbit
    const tx = state.cx * 0.2 + Math.sin(t * 0.06) * 0.12;
    const ty = state.cy * 0.15 + Math.cos(t * 0.05) * 0.08;

    posRef.current.set(tx, ty, tz);
    camera.position.lerp(posRef.current, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ════════════════════════════════════════════════════════════
   MAIN SCENE EXPORT
   ════════════════════════════════════════════════════════════ */

export function CatoScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.NoToneMapping,
      }}
      style={{ position: "absolute", inset: 0 }}
    >
      <CameraRig />
      <CatoLogoPlane />
      <FactAnnotations />
      <AmbientDust count={80} />
      <ambientLight intensity={0.2} />
      <pointLight position={[8, 8, 8]} intensity={0.4} color="#6EA9FF" />
      <fog attach="fog" args={["#05070D", 8, 24]} />
    </Canvas>
  );
}
