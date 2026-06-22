export default function AboutPage() {
    return (
      <main className="min-h-screen bg-[#020617] text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-cyan-400 font-bold tracking-widest mb-4">
            ABOUT HDYNIX SYSTEMS
          </p>
  
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Building The Future Of Digital Systems
          </h1>
  
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            HDynix Systems is a technology company focused on helping
            businesses modernize their operations through AI systems,
            web platforms, mobile applications, automation, cloud
            infrastructure, and enterprise software solutions.
          </p>
        </section>
  
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-3xl font-black text-cyan-400 mb-4">
              Our Vision
            </h2>
  
            <p className="text-gray-300">
              To become a globally recognized technology partner that
              transforms businesses into intelligent digital systems.
            </p>
          </div>
  
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-3xl font-black text-cyan-400 mb-4">
              Our Mission
            </h2>
  
            <p className="text-gray-300">
              Deliver innovative software, AI, automation and cloud
              solutions that help companies scale faster and operate
              more efficiently.
            </p>
          </div>
        </section>
  
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-black mb-10">
            Core Values
          </h2>
  
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Innovation",
              "Trust",
              "Quality",
              "Long-Term Growth",
            ].map((value) => (
              <div
                key={value}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6"
              >
                <h3 className="font-bold text-xl text-cyan-400">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </section>
  
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-black mb-10">
            Our Team
          </h2>
  
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
            <p className="text-gray-300 text-lg">
              Our team combines expertise in software engineering,
              artificial intelligence, cloud infrastructure, security,
              design, and automation to create modern digital systems
              for ambitious businesses.
            </p>
          </div>
        </section>
      </main>
    );
  }