import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novi Sad - Istra Prevoz | Kombi prevoz od vrata do vrata",
  description:
    "Brz i siguran kombi prevoz na relaciji Novi Sad - Istra. Rijeka, Pula, Rovinj, Poreč. Polasci petkom i nedeljom. Rezervišite mesto online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
