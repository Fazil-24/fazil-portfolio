import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <RevealOnScroll>
      <div className={align === "center" ? "text-center mb-14" : "text-left mb-14"}>
        <p className="kicker">{kicker}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-muted text-base sm:text-lg ${
              align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
}
