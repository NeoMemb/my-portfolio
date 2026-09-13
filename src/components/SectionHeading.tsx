export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="mb-8 flex items-center gap-4 text-2xl font-bold text-lightest-slate whitespace-nowrap">
      <span className="font-mono text-lg text-green">{number}.</span>
      {title}
      <span className="h-px flex-1 bg-lightest-navy" aria-hidden="true" />
    </h2>
  );
}
