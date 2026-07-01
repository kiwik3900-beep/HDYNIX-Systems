import { SignIn } from "@clerk/nextjs";

export default function ClientPortalLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] px-6 py-24">
      <section className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-white/[0.04] p-8 shadow-2xl">
        <p className="mb-2 font-semibold text-cyan-400">HDYNIX Client Portal</p>
        <h1 className="mb-3 text-4xl font-black text-white">Client Login</h1>
        <p className="mb-8 text-gray-400">
          Secure access for clients to track projects, invoices, files and support.
        </p>

        <SignIn
          routing="path"
          path="/client-portal"
          forceRedirectUrl="/client-portal/dashboard"
          signUpForceRedirectUrl="/client-portal/dashboard"
        />
      </section>
    </main>
  );
}