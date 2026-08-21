import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Kontakt" };

const INFO = [
  { icon: "📞", label: "Telefon", value: CONTACT.phone },
  { icon: "📧", label: "E-mail", value: CONTACT.email },
  { icon: "📍", label: "Adresa", value: CONTACT.address },
  { icon: "🕒", label: "Radno vreme", value: CONTACT.hours },
];

export default function KontaktPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Kontakt</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink-700">
            Kontakt i zakazivanje
          </h1>
          <p className="mt-4 leading-relaxed text-ink-500/90">
            Za sve informacije i zakazivanje termina možete nas kontaktirati.
            Rad sa decom odvija se isključivo uz prethodno zakazivanje
            termina.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-sage-50 px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage-700">
                    {item.icon} {item.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-500/90">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="placeholder-box flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-sage-300">
              <div className="mx-6 rounded-full bg-cream-50/90 px-4 py-2 text-center text-xs font-medium text-ink-500 shadow-sm">
                🗺️ Mapa lokacije
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sage-100">
            <h2 className="font-display text-2xl font-semibold text-ink-700">
              Zakažite termin
            </h2>
            <p className="mt-2 text-sm text-ink-500/80">
              Popunite formu i javićemo se u najkraćem mogućem roku.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-20 max-w-3xl">
          <Eyebrow>Pitanja i odgovori</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-700">
            Često postavljana pitanja
          </h2>
          <div className="mt-8">
            <Faq />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
