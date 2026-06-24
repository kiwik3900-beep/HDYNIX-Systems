import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Systems", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Automation", href: "#services" },
    { label: "Cloud Infrastructure", href: "#services" },
  ],
  Company: [
    { label: "Featured Projects", href: "#projects" },
    { label: "Our Process", href: "#process" },
    { label: "Client Portal", href: "#portal" },
    { label: "Get Started", href: "#cta" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="text-2xl font-black mb-4">
              HDYNIX <span className="text-cyan-400">SYSTEMS</span>
            </p>
            <p className="text-gray-500 leading-relaxed max-w-md mb-6">
              Enterprise digital transformation partner. We build AI systems,
              platforms, and automation that help serious businesses compete
              globally.
            </p>
            <a
              href="mailto:hdynixsystems.off@gmail.com"
              className="inline-flex items-center gap-1 text-cyan-400 font-semibold hover:underline"
            >
              contact@hdynixsystems.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-black tracking-widest uppercase text-gray-500 mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-gray-600">
          <p>© 2026 HDynix Systems. All rights reserved.</p>
          <p>AI • Web • Mobile • Automation • Cloud • UI/UX</p>
        </div>
      </div>
    </footer>
  );
}

