import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favot ingresa una dirección de correo valida recuerda que debe tener un @",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener minimo 6 caracteres",
  }),
});
export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: "El nombre usuario es requerido",
      })
      .min(3, {
        message: "El nombre de usuario debe tener minimo 3 caracteres",
      }),
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