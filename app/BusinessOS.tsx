const highlights = [
    "Secure Operations",
    "Role-Based Access",
    "AI-Ready",
    "Enterprise Scale",
  ];
  
  const stats = [
    ["360°", "Company Control"],
    ["24/7", "Operations"],
    ["99.9%", "Reliability"],
    ["AI", "Automation Ready"],
  ];
  
  const modules = [
    ["Team Management", "Unlimited departments, roles, employees, permissions and internal structure."],
    ["Client Management", "Company profiles, contacts, countries, websites, notes, statuses, search and filters."],
    ["Project Management", "Projects, teams, deadlines, priorities, progress, attachments and delivery tracking."],
    ["Task Management", "Kanban boards, checklists, comments, priorities, deadlines and assignees."],
    ["Calendar & Deadlines", "Meetings, milestones, events, employee leave and project timelines."],
    ["File Manager", "Folders, uploads, downloads, previews, permissions and version history."],
    ["Notifications", "Real-time alerts for projects, tasks, deadlines, meetings and system events."],
    ["Internal Messaging", "Private chat, team chat, project chat, file sharing and message search."],
    ["Reports & Exports", "Reports for projects, employees, clients, tasks, performance and activity in PDF, Excel and CSV."],
    ["HR Module", "Profiles, attendance, leave requests, reviews, bonuses, warnings and employee documents."],
    ["Sales CRM", "Leads, deals, pipeline, follow-ups, calls, emails, meetings and opportunity tracking."],
    ["Marketing CRM", "Campaigns, content calendar, social media, email campaigns, analytics and lead sources."],
    ["Customer Support", "Tickets, priorities, agents, notes, attachments, response history and client requests."],
    ["Company Settings", "Brand, emails, phones, addresses, languages, timezone, currency, date format and theme."],
    ["Security Center", "RBAC, 2FA, audit logs, IP logs, devices, login history, password policies and encryption."],
    ["API Integrations", "Stripe, PayPal, Wise, Payoneer, banks, email, SMS, cloud storage and future AI integrations."],
  ];
  
  export default function BusinessOS() {
    return (
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.14),transparent_35%)]" />
  
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-12 max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
  
            <p className="text-cyan-400 font-semibold mb-3">
              Enterprise Operations Platform
            </p>
  
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Powering the Future of Digital Enterprises
            </h2>
  
            <p className="text-gray-400 text-lg md:text-xl leading-8">
              A secure, scalable and AI-ready platform designed to unify clients,
              projects, teams, finance, HR, sales, support, analytics, security
              and integrations into one intelligent enterprise ecosystem.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-cyan-500/20 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {value}
                </h3>
                <p className="text-gray-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
  
          <div className="rounded-[2rem] border border-cyan-500/20 bg-white/[0.035] p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {modules.map(([title, desc]) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-cyan-400/70 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <div className="mb-5 h-11 w-11 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-300">
                    ✦
                  </div>
  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-300 transition">
                    {title}
                  </h3>
  
                  <p className="text-gray-400 text-sm leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  