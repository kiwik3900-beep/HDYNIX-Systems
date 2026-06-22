export default function PortfolioPage() {
  const projects = [
    {
      title: "AI Business Assistant",
      category: "Artificial Intelligence",
      description:
        "Intelligent AI assistant designed to automate customer support and business operations.",
      technologies: "Next.js • OpenAI • Node.js",
      result: "+70% productivity improvement",
    },
    {
      title: "Enterprise CRM",
      category: "Business Platform",
      description:
        "Complete customer management platform with automation and analytics.",
      technologies: "React • PostgreSQL • Tailwind",
      result: "+50% sales efficiency",
    },
    {
      title: "Client Portal",
      category: "Dashboard System",
      description:
        "Secure portal where clients can track projects, files, messages, and invoices.",
      technologies: "Next.js • TypeScript",
      result: "+90% client transparency",
    },
    {
      title: "Mobile Application",
      category: "Mobile Development",
      description:
        "Cross-platform mobile application for business management and communication.",
      technologies: "React Native • Firebase",
      result: "10,000+ active users",
    },
    {
      title: "Automation Workflow",
      category: "Automation",
      description:
        "Automated workflows that eliminate repetitive tasks and improve operations.",
      technologies: "Node.js • APIs • Automation",
      result: "40+ hours saved weekly",
    },
    {
      title: "Cloud Dashboard",
      category: "Cloud Infrastructure",
      description:
        "Real-time monitoring dashboard for cloud servers and business systems.",
      technologies: "AWS • Docker • Monitoring",
      result: "99.9% uptime",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-cyan-400 font-bold tracking-widest mb-4">
          OUR PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8">
          Building Digital Systems That Deliver Results
        </h1>

        <p className="text-xl text-gray-300 max-w-4xl">
          Explore a selection of modern digital solutions, enterprise
          platforms, AI systems, automation tools, and cloud projects.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-lg">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-black text-cyan-400 mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">
                    Technologies
                  </p>

                  <p className="font-medium">
                    {project.technologies}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">
                    Result
                  </p>

                  <p className="text-cyan-400 font-bold">
                    {project.result}
                  </p>
                </div>

                <button className="w-full bg-cyan-400 text-black py-3 rounded-xl font-bold hover:bg-cyan-300 transition">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#030b18] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Results That Matter
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["100+", "Projects Delivered"],
              ["50+", "Business Systems"],
              ["20+", "Countries Served"],
              ["99%", "Client Satisfaction"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-center"
              >
                <h3 className="text-5xl font-black text-cyan-400 mb-3">
                  {number}
                </h3>

                <p className="text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Let's Build Your Next Project
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          From AI systems to enterprise platforms, we create
          solutions that help businesses grow faster.
        </p>

        <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-black hover:bg-cyan-300 transition">
          Start Your Project
        </button>
      </section>
    </main>
  );
}
