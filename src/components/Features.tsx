const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Polasci Svakog",
    subtitle: "Petka i Nedelje",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
    title: "Prevoz od",
    subtitle: "Vrata do Vrata",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Komfor i",
    subtitle: "Pouzdanost",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4 justify-center">
            <div className="text-primary">{f.icon}</div>
            <div>
              <p className="font-bold text-lg leading-tight">{f.title}</p>
              <p className="font-bold text-lg leading-tight">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
