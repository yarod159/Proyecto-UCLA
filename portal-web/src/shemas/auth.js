import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un correo válido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener minimo 6 caracteres",
  }),
});

export const registerSchema = z
  .object({
  
    email: z.string().email({
      message: "Por favor ingresa un correo valido",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener minimo 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe tener minimo 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });