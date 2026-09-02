"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    childAge: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
      formData.append("subject", `Zakazivanje termina — ${values.name || "novi upit"}`);
      formData.append("from_name", "Sajt — Logopedski kabinet Dunje Joksić");
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("Uzrast deteta", values.childAge);
      formData.append("message", values.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setValues({ name: "", phone: "", email: "", childAge: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-sage-50 px-5 py-6 text-center">
        <p className="font-display text-lg font-semibold text-sage-700">
          Poruka je poslata!
        </p>
        <p className="mt-1 text-sm text-ink-500/80">
          Javićemo se u najkraćem mogućem roku.
        </p>
      </div>
    );
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
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Šalje se…" : "Pošalji"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600">
          Došlo je do greške. Pokušajte ponovo ili nas pozovite direktno.
        </p>
      )}
      <p className="text-xs text-ink-500/60">
        Popunjavanjem forme šaljete nam poruku direktno — javićemo se u
        najkraćem mogućem roku.
      </p>
    </form>
  );
}
