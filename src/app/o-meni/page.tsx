import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "O meni" };

const PARAGRAPHS = [
  "Zovem se Dunja Joksić i diplomirani sam logoped.",
  "Diplomirala sam na Fakultetu za specijalnu edukaciju i rehabilitaciju Univerziteta u Beogradu, gde sam stekla stručna znanja iz oblasti govorno-jezičkog razvoja i komunikacionih poremećaja.",
  "Tokom studija svoje znanje sam dodatno razvijala kroz praksu van obaveznih fakultetskih aktivnosti, uz mentorski rad i neposredno praćenje iskusnih logopeda.",
  "Profesionalno iskustvo nastavila sam da gradim kroz rad u privatnoj praksi, kontinuirano stručno usavršavanje i svakodnevni rad sa decom različitih razvojnih profila.",
  "Zaposlena sam u Osnovnoj školi „Živojin Perić”, gde svakodnevni rad sa decom dodatno oblikuje moj pristup i produbljuje razumevanje njihovih razvojnih i obrazovnih potreba.",
  "Verujem da se najbolji rezultati postižu kada stručnost, poverenje i saradnja sa porodicom čine jedinstvenu celinu.",
];

export default function OMeniPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/portrait-dunja.jpg"
              alt="Dunja Joksić"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-5">
          <Eyebrow>O meni</Eyebrow>
          <h1 className="font-display text-4xl font-semibold text-ink-700">
            Upoznajte svog logopeda
          </h1>
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-500/90">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
