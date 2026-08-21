import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Button } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Usluge" };

const SERVICES = [
  "Logopedska procena",
  "Individualni logopedski tretmani",
  "Savetovanje roditelja",
];

const CHALLENGES = [
  "Poremećaji izgovora glasova",
  "Kašnjenje u razvoju govora i jezika",
  "Govorno-jezički poremećaji",
  "Teškoće u komunikaciji",
  "Teškoće u čitanju i pisanju",
  "Neurorazvojni poremećaji",
];

export default function UslugePage() {
  return (
    <>
      <section className="bg-sage-50 py-20 lg:py-24">
        <Container>
          <Eyebrow>Usluge</Eyebrow>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink-700">
            Usluge
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-500/90">
            U okviru logopedskog rada pružaju se:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-sage-100"
              >
                <p className="font-display text-lg font-semibold text-sage-700">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink-700">
              Rad je namenjen deci sa:
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CHALLENGES.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-cream-200 px-5 py-4"
                >
                  <span className="mt-0.5 text-terracotta-500">●</span>
                  <span className="text-ink-500/90">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Naš pristup</Eyebrow>
            <h2 className="font-display text-3xl font-semibold text-ink-700">
              Svako dete razvija se svojim tempom
            </h2>
            <p className="leading-relaxed text-ink-500/90">
              Nakon stručne procene izrađuje se individualni plan rada koji
              odgovara potrebama, sposobnostima i interesovanjima deteta.
            </p>
            <p className="leading-relaxed text-ink-500/90">
              Kroz igru, razgovor i pažljivo osmišljene aktivnosti podstičemo
              razvoj govora, jezika i komunikacije u prijatnom i podsticajnom
              okruženju.
            </p>
            <div className="pt-2">
              <Button href="/kontakt">Zakažite termin</Button>
            </div>
          </Reveal>
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/usluge.jpg"
              alt="Dete uči kroz igru"
              fill
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
