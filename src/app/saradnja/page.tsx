import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Saradnja" };

export default function SaradnjaPage() {
  return (
    <>
      <section className="bg-sage-50 py-20 lg:py-24">
        <Container className="max-w-3xl text-center">
          <Eyebrow>Stručna saradnja</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink-700">
            Stručna saradnja
          </h1>
          <p className="mt-5 leading-relaxed text-ink-500/90">
            Verujemo da kvalitetna podrška detetu podrazumeva timski rad. Po
            potrebi sarađujemo sa logopedima, psiholozima, defektolozima,
            pedijatrima i drugim stručnim saradnicima kako bismo što
            potpunije sagledali potrebe deteta i pružili mu najbolju moguću
            podršku.
          </p>
          <p className="mt-4 leading-relaxed text-ink-500/90">
            Roditelji su važan deo terapijskog procesa. Redovna komunikacija,
            savetovanje i zajedničko postavljanje ciljeva značajno doprinose
            napretku deteta.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/portrait-danica.jpg"
              alt="Danica Joksić"
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Pedagoška podrška</Eyebrow>
            <h2 className="font-display text-3xl font-semibold text-ink-700">
              Pedagoška podrška
            </h2>
            <p className="leading-relaxed text-ink-500/90">
              U radu kabineta učestvuje Danica Joksić, student četvrte
              godine Učiteljskog fakulteta.
            </p>
            <p className="leading-relaxed text-ink-500/90">
              Kroz iskustvo stečeno u školskoj praksi i radu u obrazovnoj
              ustanovi pruža dodatnu podršku deci i roditeljima.
            </p>
            <p className="leading-relaxed text-ink-500/90">
              Pored angažovanja u radu kabineta, Danica pruža pomoć deci u
              učenju kroz razvijanje radnih navika, savladavanje školskog
              gradiva, organizaciju učenja i razvoj veština potrebnih za
              uspešno školovanje.
            </p>
            <p className="leading-relaxed text-ink-500/90">
              Na taj način kabinet objedinjuje logopedsku i pedagošku
              podršku, pružajući detetu i porodici celovit pristup razvoju.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
