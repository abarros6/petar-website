export default function SectionHeader({
  label,
  heading,
  center,
  light,
  headingClassName,
}: {
  label: string;
  heading: React.ReactNode;
  center?: boolean;
  light?: boolean;
  headingClassName?: string;
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${light ? "text-[#b39f79]" : "text-[#153243]"}`}>
        {label}
      </p>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-[#153243]"
        } ${headingClassName ?? ""}`}
      >
        {heading}
      </h2>
    </div>
  );
}
