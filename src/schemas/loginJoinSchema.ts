import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const JoinFormSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    company: z.string().min(1),
    password: z.string().min(6),
    passwordConfirm: z.string().min(6),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });
