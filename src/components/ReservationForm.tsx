"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    destination: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Ime i Prezime": form.name,
          Telefon: form.phone,
          "Datum Putovanja": form.date,
          Destinacija: form.destination,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", date: "", destination: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="rezervacija"
      className="bg-gradient-to-r from-primary to-primary-dark py-16"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Brza Online Rezervacija
          </h2>
          <p className="text-blue-200 mb-6">Rezervišite svoje mesto lako!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ime i Prezime"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/95 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                placeholder="Telefon"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/95 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="date"
                placeholder="Datum Putovanja"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/95 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select
                required
                value={form.destination}
                onChange={(e) =>
                  setForm({ ...form, destination: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-white/95 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Destinacija</option>
                <option value="Rijeka">Rijeka</option>
                <option value="Pula">Pula</option>
                <option value="Rovinj">Rovinj</option>
                <option value="Poreč">Poreč</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-md text-lg hover:bg-accent-hover transition shadow-lg disabled:opacity-50"
            >
              {status === "sending" ? "ŠALJEM..." : "POŠALJI UPIT"}
            </button>

            {status === "success" && (
              <p className="text-green-300 font-medium">
                Vaša rezervacija je uspešno poslata! Kontaktiraćemo vas uskoro.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-300 font-medium">
                Došlo je do greške. Pokušajte ponovo ili nas pozovite telefonom.
              </p>
            )}
          </form>
        </div>

        {/* Contact info */}
        <div id="kontakt" className="text-white">
          <h2 className="text-3xl font-bold mb-6">Kontaktirajte Nas</h2>

          <div className="space-y-4 mb-8">
            <a
              href="tel:+381621234567"
              className="flex items-center gap-3 text-lg hover:text-accent transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              +381 62 123 4567
            </a>
            <a
              href="mailto:info@novisad-istra-prevoz.com"
              className="flex items-center gap-3 text-lg hover:text-accent transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@novisad-istra-prevoz.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {["facebook", "instagram", "twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition"
              >
                {social === "facebook" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                )}
                {social === "instagram" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                )}
                {social === "twitter" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
