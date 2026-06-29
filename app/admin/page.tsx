const stats = [
  ["24", "Total Clients"],
  ["12", "Active Projects"],
  ["$84K", "Revenue"],
  ["8", "Team Members"],
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-24">
      <section className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-3">
          HDYNIX Systems Admin
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Administrator Login
        </h1>

        <p className="text-gray-400 max-w-3xl mb-10 text-lg">
          Secure internal access for managing clients, projects, finance,
          support, team operations and enterprise system settings.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-cyan-500/20 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Admin email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <button className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black hover:bg-white transition">
                Sign In
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Protected by RBAC, 2FA, audit logs and encrypted sessions.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-black/40 p-8">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard Preview</h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="text-3xl font-bold">{value}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
