"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#horarios", label: "Horarios" },
  { href: "#lideres", label: "Líderes" },
  { href: "#eventos", label: "Eventos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
  { href: "#ofrendar", label: "Ofrendar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm
      bg-white/90 border-black/5
      dark:bg-black/90 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-horizontal.png"
              alt="Casa de Fuego y Liberacion"
              style={{ height: "44px", width: "auto" }}
              className="dark:brightness-150"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors
                  text-black/60 hover:text-coral
                  dark:text-white/60 dark:hover:text-coral-light"
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="text-black dark:text-white"
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-black dark:border-white/10 border-black/5">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-black/60 hover:text-coral dark:text-white/60 dark:hover:text-coral-light transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
