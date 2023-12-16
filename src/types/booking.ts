import { z } from "zod";

export const FormSchema = z.object({
  id: z.string(),
  destination: z.string(),
  startDate: z.date().nullable(),
  endDate: z.date().nullable(),
});

export type BookingType = z.infer<typeof FormSchema>;
