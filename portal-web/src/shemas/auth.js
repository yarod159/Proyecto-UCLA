import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingrese un correo válido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
});

export const registerSchema = z
  .object({
  
    email: z.string().email({
      message: "Por favor ingrese un correo válido.",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });