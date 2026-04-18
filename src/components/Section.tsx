import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-16 sm:py-20 md:scroll-mt-24 md:py-28 lg:py-32",
        className,
      )}
    >
      <div className="container">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl md:mb-14 lg:mb-16">
            {eyebrow && (
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:mb-4 md:text-xs">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-[clamp(1.75rem,5vw,3rem)] font-semibold tracking-tight md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-pretty text-base text-muted md:mt-4 md:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
