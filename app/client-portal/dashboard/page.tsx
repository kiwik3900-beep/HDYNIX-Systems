const stats = [
    ["12", "Active Projects"],
    ["8", "Invoices"],
    ["24", "Messages"],
    ["5", "Support Tickets"],
  ];
  
  export default function ClientDashboardPage() {
    return (
      <main className="min-h-screen bg-[#020617] px-6 py-24 text-white">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="mb-2 font-semibold text-cyan-400">
                HDYNIX Client Portal
              </p>
              <h1 className="text-4xl font-black md:text-6xl">
                Client Dashboard
              </h1>
              <p className="mt-4 max-w-2xl text-gray-400">
                Track your projects, invoices, files, messages, meetings and support requests from one secure space.
              </p>
            </div>
  
            <a
              href="/"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Logout
            </a>
          </div>
  
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-cyan-500/20 bg-white/[0.04] p-6"
              >
                <h2 className="text-3xl font-black">{value}</h2>
                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
  
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-cyan-500/20 bg-black/40 p-6">
              <h2 className="mb-5 text-2xl font-bold">Navigation</h2>
  
              {["Projects", "Invoices", "Files", "Messages", "Support", "Meetings"].map((item) => (
                <button
                  key={item}
                  className="mb-3 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left hover:border-cyan-400/60"
                >
                  {item}
                </button>
              ))}
            </div>
  
            <div className="rounded-3xl border border-cyan-500/20 bg-black/40 p-6 lg:col-span-2">
              <h2 className="mb-5 text-2xl font-bold">Project Timeline</h2>
  
              {["Planning", "Design", "Development", "Testing", "Delivery"].map((step, i) => (
                <div
                  key={step}
                  className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span>{step}</span>
                  <span className={i < 2 ? "text-cyan-300" : "text-gray-500"}>
                    {i < 2 ? "Completed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
  