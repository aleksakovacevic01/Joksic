"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Od kog uzrasta se radi logopedska procena?",
    answer:
      "Procena je moguća od najranijeg uzrasta, čim roditelji primete odstupanje u razvoju govora i jezika. Što se ranije krene, lakše se prati i podstiče napredak deteta.",
  },
  {
    question: "Da li je potrebna uputnica ili preporuka pedijatra?",
    answer:
      "Nije neophodna. Za zakazivanje procene dovoljno je da nas kontaktirate — dodatnu medicinsku dokumentaciju, ako postoji, možete poneti na prvi susret.",
  },
  {
    question: "Koliko traje logopedska procena?",
    answer:
      "Inicijalna procena obično traje između 45 i 60 minuta. Na osnovu nje se dogovara dalji plan rada, prilagođen potrebama i tempu deteta.",
  },
  {
    question: "Koliko često se odvijaju tretmani?",
    answer:
      "Dinamika se određuje individualno, najčešće jednom do dva puta nedeljno. Redovnost dolazaka značajno utiče na tempo napretka.",
  },
  {
    question: "Da li roditelji prisustvuju tretmanima?",
    answer:
      "Da, uključenost roditelja je važan deo procesa. U zavisnosti od uzrasta i cilja tretmana, roditelji mogu prisustvovati seansama ili dobijati redovne smernice za rad kod kuće.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {FAQ_ITEMS.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl bg-white ring-1 ring-sage-100"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-medium text-ink-700">{item.question}</span>
              <span
                className={`shrink-0 text-xl text-terracotta-500 transition-transform ${open ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {open && (
              <p className="px-6 pb-5 leading-relaxed text-ink-500/85">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
