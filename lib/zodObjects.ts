import { z } from "zod";

export const emailPassSchema = z.object({
  userEmail: z
    .string()
    .email("Please enter a valid email address.")
    .min(1, "Email is required!!")
    .max(50, "Please enter a valid email fffaddress."),
  userPassword: z
    .string()
    .min(6, "Password should be between 6 and 20 characters long.")
    .max(20, "Password should be between 6 and 20 characters long."),
});
