const stats = [
    ["12", "Active Projects"],
    ["8", "Invoices"],
    ["24", "Messages"],
    ["5", "Support Tickets"],
  ];
  
  const sidebar = [
    "Dashboard",
    "Projects",
    "Invoices",
    "Files",
    "Messages",
    "Support",
    "Profile",
    "Security",
  ];
  
  const features = [
    ["Project Timeline", "Track planning, design, development, testing and delivery."],
    ["Contracts & Files", "Access proposals, contracts, invoices, reports and deliverables."],
    ["Payments", "View invoices, due dates, payment status and online payment options."],
    ["Messages", "Communicate directly with the HDYNIX team from one secure place."],
    ["Support Tickets", "Open requests, follow status, priority, assigned agent and response history."],
    ["Notifications", "New messages, project updates, invoices, payments, files and meetings."],
    ["Profile Management", "Edit company name, contact person, email, phone, country and website."],
    ["Activity History", "Recent logins, payments, downloads, uploads, messages and updates."],
    ["Enterprise Security", "RBAC, secure sessions, 2FA, audit logs, device history and IP logging."],
  ];
  
  const timeline = [
    ["Planning", "Completed"],
    ["Design", "Completed"],
    ["Development", "In Progress"],
    ["Testing", "Pending"],
    ["Delivery", "Pending"],
  ];
  
  export default function ClientPortalPage() {
    return (
      <main className="min-h-screen bg-[#020617] text-white px-6 py-24">
        <section className="max-w-7xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-3">
            Phase 4 · Secure Client Portal
          </p>
  
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Client Portal
          </h1>
  
          <p className="text-gray-400 max-w-4xl text-lg md:text-xl leading-8 mb-12">
            A secure, private and enterprise-grade client dashboard where every
            client can track project progress, communicate with the team, view
            invoices, manage payments, download files, open support tickets and
            receive real-time updates.
          </p>
  
          <div className="rounded-[2rem] border border-cyan-500/20 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <aside className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-cyan-500/20 bg-black/40 p-6">
                <h2 className="text-xl font-bold mb-6">Client Area</h2>
  
                <div className="space-y-3">
                  {sidebar.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 hover:border-cyan-400/60 hover:text-cyan-300 transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
  
              <div className="lg:col-span-4 p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-cyan-500/20 bg-black/40 p-5"
                    >
                      <h3 className="text-3xl font-bold">{value}</h3>
                      <p className="text-gray-400 mt-2 text-sm">{label}</p>
                    </div>
                  ))}
                </div>
  
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                  <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-2xl font-bold mb-6">
                      Project Timeline
                    </h3>
  
                    <div className="space-y-4">
                      {timeline.map(([step, status]) => (
                        <div
                          key={step}
                          className="flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-white/[0.03] p-4"
                        >
                          <span>{step}</span>
                          <span className="text-cyan-300 text-sm">{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Security Status
                    </h3>
  
                    <ul className="space-y-4 text-sm text-gray-400">
                      <li>✓ Client-only data access</li>
                      <li>✓ Secure sessions</li>
                      <li>✓ Optional 2FA</li>
                      <li>✓ Device management</li>
                      <li>✓ Login history</li>
                      <li>✓ Audit logs</li>
                    </ul>
                  </div>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {features.map(([title, desc]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-cyan-500/20 bg-black/40 p-6 hover:border-cyan-400/70 hover:bg-cyan-500/5 transition"
                    >
                      <h3 className="text-lg font-semibold mb-3">{title}</h3>
                      <p className="text-gray-400 text-sm leading-6">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  