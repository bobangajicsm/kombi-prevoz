export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Brz i Siguran Prevoz
          <br />
          Novi Sad – Istra
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Kombi prevoz od vrata do vrata
        </p>
        <a
          href="#rezervacija"
          className="inline-block bg-accent text-primary-dark font-bold px-8 py-3 rounded-md text-lg hover:bg-accent-hover transition shadow-lg"
        >
          REZERVIŠI VOŽNJU
        </a>
      </div>
    </section>
  );
}
