interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  
  return (
    <div className={`flex flex-col ${alignClass} mb-12 max-w-2xl`}>
      {eyebrow && (
        <span className="eyebrow-tag mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="display-md mb-4 text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-brand-brown-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
