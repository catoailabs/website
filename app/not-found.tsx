import { PillButton } from "@/components/pill-button";
import { MicroLabel } from "@/components/micro-label";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="halo-bg pointer-events-none absolute inset-0" />
      <div className="relative">
        <MicroLabel className="mb-4 block">Error 404</MicroLabel>
        <h1 className="heading-hero font-heading text-foreground">
          Not Found
        </h1>
        <p className="body-large mt-4 max-w-md text-muted-foreground">
          The page you{"'"}re looking for doesn{"'"}t exist or has been moved.
        </p>
        <div className="mt-8">
          <PillButton href="/" variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </PillButton>
        </div>
      </div>
    </div>
  );
}
