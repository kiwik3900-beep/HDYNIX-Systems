const roles = [
    "Owner / CEO",
    "General Manager",
    "Project Manager",
    "Finance Manager",
    "HR Manager",
    "Sales Manager",
    "Marketing Manager",
    "Developer",
    "Designer",
    "Support Agent",
    "Client",
  ];
  
  const modules = [
    "Users & Roles",
    "Clients",
    "Projects",
    "Tasks",
    "Finance & Invoices",
    "Payments",
    "HR & Employees",
    "Sales CRM",
    "Marketing",
    "Support Tickets",
    "Reports",
    "Settings",
  ];
  
  export default function AdminDashboard() {
    return (
      <main className="min-h-screen bg-[#05070d] text-white p-8">
        <h1 className="text-4xl font-bold mb-3">
          HDYNIX Systems Admin Dashboard
        </h1>
  
        <p className="text-gray-400 mb-10">
          Secure internal management system for company operations.
        </p>
  
        <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
          {["Clients", "Projects", "Revenue", "Employees"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
            >
              <p className="text-gray-400">{item}</p>
              <h2 className="text-3xl font-bold mt-2">0</h2>
            </div>
          ))}
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">User Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role) => (
              <div
                key={role}
                className="rounded-xl border border-cyan-500/20 bg-white/5 p-5"
              >
                {role}
              </div>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-5">Admin Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {modules.map((module) => (
              <div
                key={module}
                className="rounded-xl border border-cyan-500/20 bg-white/5 p-5"
              >
                {module}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  