export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Novi Sad - Istra Prevoz. Sva prava
          zadržana.
        </p>
      </div>
    </footer>
  );
}
