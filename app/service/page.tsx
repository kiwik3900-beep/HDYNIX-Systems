export default function ServicesPage() {
  const services = [
    {
      title: "AI Systems",
      description:
        "Custom AI solutions, intelligent assistants, workflow automation, and business intelligence systems.",
    },
    {
      title: "Web Development",
      description:
        "Modern websites, web applications, portals, and enterprise platforms built for performance.",
    },
    {
      title: "Mobile Applications",
      description:
        "iOS and Android applications designed for growth, engagement, and scalability.",
    },
    {
      title: "Automation Systems",
      description:
        "Automate repetitive processes and improve operational efficiency across your business.",
    },
    {
      title: "SaaS Platforms",
      description:
        "Build subscription-based software products and cloud platforms for modern businesses.",
    },
    {
      title: "Dashboards",
      description:
        "Advanced analytics dashboards, reporting systems, and management portals.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Cloud deployment, DevOps pipelines, server management, and scalable architecture.",
    },
    {
      title: "Cyber Security",
      description:
        "Security audits, monitoring, infrastructure protection, and risk assessment solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-cyan-400 font-bold tracking-widest mb-4">
          OUR SERVICES
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8">
          Digital Solutions Built For Growth
        </h1>

        <p className="text-xl text-gray-300 max-w-4xl">
          We help businesses modernize operations through AI,
          automation, cloud infrastructure, software platforms,
          and enterprise-grade digital systems.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h2 className="text-2xl font-black text-cyan-400 mb-4">
                {service.title}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold hover:bg-cyan-300 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#030b18] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Why Choose HDynix Systems?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "Enterprise Quality",
              "AI-Powered Solutions",
              "Modern Technologies",
              "Long-Term Support",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6"
              >
                <h3 className="font-bold text-cyan-400">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Ready To Start Your Project?
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Let's build your next digital system together.
        </p>

        <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-black hover:bg-cyan-300 transition">
          Start Project
        </button>
      </section>
    </main>
  );
}
