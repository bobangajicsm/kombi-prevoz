"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg
            className="w-10 h-8 text-primary"
            fill="currentColor"
            viewBox="0 0 64 40"
          >
            <rect x="2" y="12" width="48" height="20" rx="4" />
            <rect x="50" y="16" width="12" height="16" rx="2" />
            <circle cx="16" cy="34" r="5" fill="#333" />
            <circle cx="42" cy="34" r="5" fill="#333" />
            <rect x="6" y="15" width="10" height="8" rx="1" fill="#87CEEB" />
            <rect x="18" y="15" width="10" height="8" rx="1" fill="#87CEEB" />
            <rect x="30" y="15" width="10" height="8" rx="1" fill="#87CEEB" />
            <rect x="52" y="18" width="8" height="6" rx="1" fill="#87CEEB" />
          </svg>
          <span className="font-bold text-lg text-primary">
            Novi Sad - Istra Prevoz
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#pocetna" className="hover:text-primary transition">
            Početna
          </a>
          <a href="#o-nama" className="hover:text-primary transition">
            O Nama
          </a>
          <a href="#rute" className="hover:text-primary transition">
            Rute i Cene
          </a>
          <a href="#kontakt" className="hover:text-primary transition">
            Kontakt
          </a>
          <a
            href="tel:+381621234567"
            className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary-dark transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-sm font-medium">
          <a href="#pocetna" className="block py-2" onClick={() => setMenuOpen(false)}>Početna</a>
          <a href="#o-nama" className="block py-2" onClick={() => setMenuOpen(false)}>O Nama</a>
          <a href="#rute" className="block py-2" onClick={() => setMenuOpen(false)}>Rute i Cene</a>
          <a href="#kontakt" className="block py-2" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </div>
      )}
    </nav>
  );
}
