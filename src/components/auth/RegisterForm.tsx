"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";

import {
  registerSchema,
  RegisterSchema,
} from "@/lib/validations/registerSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const [showPassword, setShowPassword] =
  useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (
    data: RegisterSchema
  ) => {
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
      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Nombre
        </Label>

        <Input
          id="name"
          placeholder="Juan Pérez"
          autoComplete="name"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

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
          {...register("password")}
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
      autoComplete="new-password"
      {...register("password")}
    />

    <button
      type="button"
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
      {showPassword
        ? <EyeOff size={18} />
        : <Eye size={18} />}
    </button>

  </div>

  {errors.password && (
    <p className="text-sm text-red-500">
      {errors.password.message}
    </p>
  )}
</div>

      {/* Confirm Password */}
      <div className="space-y-2">
  <Label htmlFor="confirmPassword">
    Confirmar contraseña
  </Label>

  <div className="relative">

    <Input
      id="confirmPassword"
      type={
        showConfirmPassword
          ? "text"
          : "password"
      }
      autoComplete="new-password"
      {...register("confirmPassword")}
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirmPassword(
          !showConfirmPassword
        )
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
      {showConfirmPassword
        ? <EyeOff size={18} />
        : <Eye size={18} />}
    </button>

  </div>

  {errors.confirmPassword && (
    <p className="text-sm text-red-500">
      {errors.confirmPassword.message}
    </p>
  )}
</div>

      {/* Submit */}
      <Button
  type="submit"
  disabled={isSubmitting}
  className="w-full"
>
  {isSubmitting
    ? "Creando cuenta..."
    : "Crear Cuenta"}
</Button>
    </form>
  );
}