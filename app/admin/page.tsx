import { SignIn } from "@clerk/nextjs";

export default function AdminPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617]">
      <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-white/5 p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          HDYNIX Admin
        </h1>

        <SignIn
          routing="path"
          path="/admin"
          fallbackRedirectUrl="/admin/dashboard"
        />
      </div>
    </main>
  );
}
