"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";

import { loginSchema, LoginSchema } from "@/lib/validations/loginSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log("Formulario válido");
    console.log(data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Correo electrónico
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
          {...register("email")}
          disabled={isSubmitting}
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
  <Label htmlFor="password">
    Contraseña
  </Label>
      <div className="relative">

        <Input
          id="password"
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Tu contraseña"
          autoComplete="current-password"
          {...register("password")}
        />

        <button
          type="button"
          aria-label={
            showPassword
              ? "Ocultar contraseña"
              : "Mostrar contraseña"
          }
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-500
            hover:text-slate-700
            transition
            cursor-pointer
          "
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

      {errors.password && (
        <p className="text-sm text-red-500">
          {errors.password.message}
        </p>
      )}
    </div>

      {/* Submit */}
      <Button
  type="submit"
  disabled={isSubmitting}
  className={`
    w-full
    ${isSubmitting
      ? "cursor-wait"
      : ""}
  `}
>
  {isSubmitting
    ? "Iniciando sesión..."
    : "Iniciar Sesión"}
</Button>
    </form>
  );
}