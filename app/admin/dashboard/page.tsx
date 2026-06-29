import { UserButton } from "@clerk/nextjs";

const stats = [
  ["24", "Total Clients"],
  ["12", "Active Projects"],
  ["$84K", "Revenue"],
  ["8", "Team Members"],
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-24">
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-cyan-400 font-semibold mb-2">
              HDYNIX Admin Dashboard
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">Control Center</h1>
          </div>

          <UserButton />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-cyan-500/20 bg-white/[0.04] p-6"
            >
              <h2 className="text-3xl font-bold">{value}</h2>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}