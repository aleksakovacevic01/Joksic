import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-terracotta-600">
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onSage";
  className?: string;
}) {
  const styles = {
    primary: "bg-terracotta-500 text-white hover:bg-terracotta-600",
    secondary:
      "bg-white text-sage-700 border border-sage-300 hover:bg-sage-50",
    onSage: "bg-white text-sage-700 hover:bg-cream-50",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide shadow-sm transition-colors ${styles} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
