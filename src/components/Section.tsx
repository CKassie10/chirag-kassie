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
        "relative scroll-mt-24 py-24 md:py-32",
        className,
      )}
    >
      <div className="container">
        {(eyebrow || title || description) && (
          <header className="mb-12 max-w-2xl md:mb-16">
            {eyebrow && (
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-pretty text-base text-muted md:text-lg">
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
