import Image from "next/image";
import { Container, Eyebrow, Button } from "@/components/ui";
import Reveal from "@/components/Reveal";

const TRUST_POINTS = [
  "Individualni pristup svakom detetu",
  "Stručna procena i praćenje napretka",
  "Saradnja sa roditeljima i školom",
  "Podsticajno i sigurno okruženje",
];

const CARDS = [
  {
    title: "Logopedska procena",
    text: "Prvi korak ka razumevanju potreba deteta i planiranju individualnog rada.",
  },
  {
    title: "Individualni tretmani",
    text: "Terapija prilagođena uzrastu, mogućnostima i tempu razvoja svakog deteta.",
  },
  {
    title: "Podrška roditeljima",
    text: "Savetovanje i zajedničko planiranje aktivnosti koje podstiču napredak deteta.",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex min-h-[calc(100dvh-69px)] flex-col sm:min-h-0">
        <section className="relative isolate flex flex-1 items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/70 to-cream-50/10 sm:via-cream-50/45 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream-50/70 via-transparent to-transparent sm:from-cream-50/50" />
          </div>
          <Container className="py-16 lg:py-36">
            <div className="flex max-w-xl flex-col gap-6">
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink-700 sm:text-5xl">
                Logopedski kabinet Dunje Joksić
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-ink-500/90">
                Podrška deci u razvoju govora, jezika, komunikacije, čitanja i
                pisanja.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Button href="/kontakt" className="w-full sm:w-auto">
                  Zakažite termin
                </Button>
                <Button href="/o-meni" variant="secondary" className="w-full sm:w-auto">
                  Upoznajte logopeda
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-sage-100 bg-white py-10 sm:py-8">
          <Container className="grid grid-cols-2 gap-y-5 gap-x-6 lg:grid-cols-4">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-sage-600" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm font-medium text-ink-500/90">
                  {point}
                </span>
              </div>
            ))}
          </Container>
        </section>
      </div>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-3xl lg:order-1">
            <Image
              src="/images/welcome.jpg"
              alt="Dete uči kroz igru"
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal className="order-1 flex flex-col gap-5 lg:order-2">
            <h2 className="font-display text-3xl font-semibold text-ink-700">
              Dobro došli!
            </h2>
            <p className="leading-relaxed text-ink-500/90">
              Logopedski kabinet Dunje Joksić nastao je sa željom da bude
              mesto u kome će se svako dete osećati sigurno, prihvaćeno i
              podstaknuto da napreduje svojim tempom.
            </p>
            <p className="leading-relaxed text-ink-500/90">
              Kroz stručan rad, individualni pristup i podsticajno okruženje
              zajedno razvijamo govorne, jezičke i komunikacione veštine koje
              detetu olakšavaju svakodnevni život, učenje i odrastanje.
            </p>
            <p className="leading-relaxed text-ink-500/90">
              Roditelji su važan deo ovog procesa, zato negujemo otvorenu
              komunikaciju i partnerski odnos kako bismo zajedno pružili
              najbolju podršku detetu.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-200 py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>Kako pomažemo</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-700">
              Podrška u svakom koraku
            </h2>
          </Reveal>
          <Reveal className="grid gap-6 sm:grid-cols-3">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-sage-100"
              >
                <h3 className="font-display text-xl font-semibold text-sage-700">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500/85">
                  {card.text}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Reveal>
          <Container className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-sage-600 px-8 py-16 text-center text-white">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Napravimo prvi korak zajedno
            </h2>
            <p className="max-w-xl text-sage-50/90">
              Zakažite termin za logopedsku procenu i saznajte kako možemo
              podržati razvoj vašeg deteta.
            </p>
            <Button href="/kontakt" variant="onSage">
              Zakažite termin
            </Button>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
