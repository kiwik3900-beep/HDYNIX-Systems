export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#020617] text-white">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-cyan-400 font-bold tracking-widest mb-4">
            CONTACT US
          </p>
  
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Let's Build Something Amazing
          </h1>
  
          <p className="text-xl text-gray-300 max-w-4xl">
            Tell us about your project and we'll help you transform
            your business into a modern digital system.
          </p>
        </section>
  
        {/* Contact Form */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-10">
            
            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
              <h2 className="text-3xl font-black mb-8">
                Project Request
              </h2>
  
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl px-4 py-4 outline-none"
                />
  
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl px-4 py-4 outline-none"
                />
  
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl px-4 py-4 outline-none"
                />
  
                <select className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl px-4 py-4 outline-none">
                  <option>Select Project Type</option>
                  <option>AI System</option>
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>Automation</option>
                  <option>SaaS Platform</option>
                  <option>Cloud Infrastructure</option>
                </select>
  
                <select className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl px-4 py-4 outline-none">
                  <option>Select Budget Range</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
  
                <textarea
                  rows={5}
                  placeholder="Project Details"
                  className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl px-4 py-4 outline-none"
                />
  
                <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-black hover:bg-cyan-300 transition">
                  Send Request
                </button>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-cyan-400 mb-4">
                  WhatsApp
                </h3>
  
                <p className="text-gray-300 mb-4">
                  Chat directly with our team.
                </p>
  
                <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold">
                  Contact on WhatsApp
                </button>
              </div>
  
              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-cyan-400 mb-4">
                  Email
                </h3>
  
                <p className="text-gray-300">
                  contact@hdynixsystems.com
                </p>
              </div>
  
              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-cyan-400 mb-4">
                  Social Media
                </h3>
  
                <div className="space-y-2 text-gray-300">
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>LinkedIn</p>
                  <p>X (Twitter)</p>
                </div>
              </div>
  
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-3xl font-black mb-4">
                  Free Consultation
                </h3>
  
                <p className="text-gray-300 mb-6">
                  Schedule a consultation and discuss your project with our team.
                </p>
  
                <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold">
                  Book Consultation
                </button>
              </div>
            </div>
  
          </div>
        </section>
      </main>
    );
  }