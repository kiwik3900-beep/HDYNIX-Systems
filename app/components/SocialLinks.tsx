"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,FaEnvelope, } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const whatsappNumber = "447455687701";

const whatsappText = encodeURIComponent(
  "Hello HDYNIX Systems, I want to discuss a project."
);

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/hdynixsystems",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/hdynixsystems",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/hdynixsystems",
    icon: FaLinkedinIn,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@hdynixsystems",
    icon: SiTiktok,
  },
  {
    name: "Email",
    href: "mailto:hdynixsystems.off@gmail.com",
    icon: FaEnvelope,
  },
];

export default function SocialLinks() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-3 rounded-full border border-cyan-400/20 bg-black/50 px-4 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,180,255,0.18)]">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,180,255,0.35)]"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact HDYNIX Systems on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_35px_rgba(16,185,129,0.55)] transition hover:scale-110 hover:bg-emerald-400"
      >
        <FaWhatsapp size={34} />
      </a>
    </>
  );
}

