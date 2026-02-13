import { cn } from "@/lib/utils";
import { MicroLabel } from "@/components/micro-label";
import { Lightbulb } from "lucide-react";

interface AnswerBlockProps {
  title?: string;
  items: string[];
  className?: string;
}

/**
 * AnswerBlock: A visually distinct summary box optimized for
 * AI search extraction. Renders key points in a structured format.
 */
export function AnswerBlock({
  title = "Key Takeaways",
  items,
  className,
}: AnswerBlockProps) {
  return (
    <aside
      className={cn(
        "glass-surface frost-gradient relative overflow-hidden p-6 lg:p-8",
        className
      )}
      aria-label="Summary"
    >
      {/* Subtle halo accent */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-steel-blue/10 blur-3xl" />

      <div className="relative">
        <div className="mb-4 flex items-center gap-2.5">
          <Lightbulb className="h-4 w-4 text-steel-blue" />
          <MicroLabel>{title}</MicroLabel>
        </div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-steel-blue/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
