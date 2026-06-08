import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">

      <AuthCard>

        <h1 className="text-2xl font-bold mb-6">
          Crear Cuenta
        </h1>

        <RegisterForm />

      </AuthCard>

    </main>
  );
}