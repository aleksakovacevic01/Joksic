"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/site";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    childAge: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Zakazivanje termina — ${values.name || "novi upit"}`;
    const body = [
      `Ime: ${values.name}`,
      `Telefon: ${values.phone}`,
      `Email: ${values.email}`,
      `Uzrast deteta: ${values.childAge}`,
      "",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-500">
          Ime i prezime
          <input
            required
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="rounded-xl border border-sage-100 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none ring-sage-300 focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-500">
          Telefon
          <input
            required
            type="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className="rounded-xl border border-sage-100 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none ring-sage-300 focus:ring-2"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-500">
          E-mail
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className="rounded-xl border border-sage-100 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none ring-sage-300 focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-500">
          Uzrast deteta
          <input
            type="text"
            placeholder="npr. 4 godine"
            value={values.childAge}
            onChange={(e) => setValues((v) => ({ ...v, childAge: e.target.value }))}
            className="rounded-xl border border-sage-100 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none ring-sage-300 focus:ring-2"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-500">
        Poruka
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className="rounded-xl border border-sage-100 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none ring-sage-300 focus:ring-2"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-600"
      >
        Pošalji
      </button>
      <p className="text-xs text-ink-500/60">
        Klikom na „Pošalji” otvoriće se vaš email program sa popunjenom
        porukom.
      </p>
    </form>
  );
}
