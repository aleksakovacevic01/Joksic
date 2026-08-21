import Link from "next/link";
import Logo from "./Logo";
import { CONTACT, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-sage-100 bg-sage-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-ink-500/80">
            Podrška deci u razvoju govora, jezika, komunikacije, čitanja i
            pisanja — u sigurnom i podsticajnom okruženju.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
            Navigacija
          </p>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-500/80 transition-colors hover:text-sage-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
            Kontakt
          </p>
          <p className="text-sm text-ink-500/80">📞 {CONTACT.phone}</p>
          <p className="text-sm text-ink-500/80">📧 {CONTACT.email}</p>
          <p className="text-sm text-ink-500/80">📍 {CONTACT.address}</p>
          <p className="text-sm text-ink-500/80">🕒 {CONTACT.hours}</p>
        </div>
      </div>

      <div className="border-t border-sage-100 px-6 py-5 text-center text-xs text-ink-500/60 lg:px-8">
        © {new Date().getFullYear()} {`Logopedski kabinet Dunje Joksić. Sva prava zadržana.`}
      </div>
    </footer>
  );
}
