import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">

      <AuthCard>

        <h1 className="text-2xl font-bold mb-6">
          Iniciar Sesión
        </h1>

        <LoginForm />

      </AuthCard>

    </main>
  );
}