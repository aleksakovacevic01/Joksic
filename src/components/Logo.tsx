import Image from "next/image";

const Mark = ({ className }: { className?: string }) => (
  <Image
    src="/logo-mark.png"
    alt="Logopedski kabinet Dunje Joksić"
    width={1456}
    height={1600}
    className={`w-auto object-contain ${className ?? ""}`}
    priority
  />
);

const Wordmark = ({ className }: { className?: string }) => (
  <p className={`font-display font-semibold uppercase tracking-[0.08em] ${className ?? ""}`}>
    <span className="text-sage-600">Govor</span>
    <span className="text-ink-500/50"> · </span>
    <span className="text-ink-500">Jezik</span>
    <span className="text-ink-500/50"> · </span>
    <span className="text-terracotta-600">Razvoj</span>
  </p>
);

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  className?: string;
};

export default function Logo({ variant = "horizontal", className }: LogoProps) {
  if (variant === "mark") {
    return <Mark className={className ?? "h-10"} />;
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-3 ${className ?? ""}`}>
        <Mark className="h-24" />
        <Wordmark className="text-center text-sm" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <Mark className="h-10 shrink-0" />
      <Wordmark className="text-[13px] leading-none" />
    </div>
  );
}
