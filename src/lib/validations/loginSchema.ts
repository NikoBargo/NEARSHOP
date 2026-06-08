import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio")
    .email("Correo inválido"),

  password: z
    .string()
    .min(
      8,
      "La contraseña debe tener mínimo 8 caracteres"
    ),
});

export type LoginSchema = z.infer<
  typeof loginSchema
>;