import Image from "next/image";
import { cn } from "@/lib/utils";

interface CatoLogoProps {
  className?: string;
}

export function CatoLogo({ className }: CatoLogoProps) {
  return (
    <Image
      src="/images/cato-logo.png"
      alt="Cato Labs"
      width={454}
      height={449}
      priority
      className={cn("h-full w-auto object-contain", className)}
    />
  );
}
