import { z } from "zod";

export const createEventSchema = z.object({
  title: z.string().min(1),
  datetime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format"
  }),
  location: z.string().min(1),
  capacity: z.number().int().min(1).max(1000)
});

export const registerUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email()
}); 