import { cn } from "@/lib/utils";
import { MicroLabel } from "@/components/micro-label";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function PageHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative pt-32 pb-16 lg:pt-40 lg:pb-24",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Halo glow behind header */}
      <div className="halo-bg pointer-events-none absolute inset-0" />

      <div className="container-site relative">
        {label && (
          <MicroLabel className="mb-4 block">{label}</MicroLabel>
        )}
        <h1
          className={cn(
            "heading-hero font-heading text-balance text-foreground",
            align === "center" && "mx-auto max-w-4xl"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "body-large mt-6 text-pretty text-muted-foreground",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
