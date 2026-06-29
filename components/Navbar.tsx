"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/contacte", label: "Contact" },
  { href: "/client-portal", label: "Portal" },
  { href: "/client-portal", label: "Client Portal" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0B0D10]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-black tracking-wide md:text-2xl">
          HDYNIX{" "}
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            SYSTEMS
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contacte"
            className="rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-black transition hover:bg-white"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0B0D10]/95 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium text-gray-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contacte"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gray-100 px-5 py-3 text-center font-black text-black transition hover:bg-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
