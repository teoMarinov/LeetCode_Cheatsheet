import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(3, {
    message: "Minimun 3 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const FormSchema = z.object({
  name: z.string().min(1),
  urlTo: z.string().url({
    message: "Invalid URL",
  }),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  code: z.string().min(1, {
    message: "Can't be empty",
  }),
  description: z.string().min(1, {
    message: "Can't be empty",
  }),
});
