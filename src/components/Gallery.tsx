const images = [
  {
    src: "https://images.pexels.com/photos/35831389/pexels-photo-35831389/free-photo-of-white-passenger-van-in-suburban-setting.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Moderan putnički kombi",
  },
  {
    src: "https://images.pexels.com/photos/9354755/pexels-photo-9354755.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Kombi spolja",
  },
  {
    src: "https://images.pexels.com/photos/36377055/pexels-photo-36377055/free-photo-of-interior-of-spacious-black-leather-minivan.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Enterijer kombija",
  },
  {
    src: "https://images.pexels.com/photos/19871522/pexels-photo-19871522/free-photo-of-a-black-2023-mercedes-benz-sprinter-cargo-van.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Mercedes Sprinter kombi",
  },
];

export default function Gallery() {
  return (
    <section id="o-nama" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">Galerija</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-md group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
