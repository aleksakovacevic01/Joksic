type PlaceholderImageProps = {
  label: string;
  className?: string;
  aspect?: string;
};

export default function PlaceholderImage({
  label,
  className,
  aspect = "aspect-[4/3]",
}: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-box relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-sage-300 ${className ?? ""}`}
    >
      <div className="mx-6 rounded-full bg-cream-50/90 px-4 py-2 text-center text-xs font-medium text-ink-500 shadow-sm">
        📷 {label}
      </div>
    </div>
  );
}
