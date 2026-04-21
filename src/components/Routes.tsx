export default function Routes() {
  return (
    <section id="rute" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-1">
          Termini i Rute
        </h2>
        <p className="text-gray-600 mb-8">
          Red vožnje Novi Sad - Istra
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Schedule table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="bg-primary text-white text-center py-3 font-bold text-sm uppercase">
                Polazak iz Novog Sada
              </div>
              <div className="bg-primary text-white text-center py-3 font-bold text-sm uppercase">
                Povratak iz Istre
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x">
              <div className="p-6">
                <p className="font-bold mb-3">Petkom u 20:00h</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Rijeka
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Pula
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Rovinj
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Poreč
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <p className="font-bold mb-3">Nedeljom u 15:00h</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Rijeka
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Pula
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Rovinj
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Poreč
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <a
                href="#rezervacija"
                className="inline-block bg-accent text-primary-dark font-bold px-6 py-2.5 rounded-md hover:bg-accent-hover transition"
              >
                REZERVIŠITE MESTO
              </a>
            </div>
          </div>

          {/* Real map */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.5%2C44.5%2C20.5%2C45.8&layer=mapnik&marker=45.2671%2C19.8335"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              title="Mapa rute Novi Sad - Istra"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
