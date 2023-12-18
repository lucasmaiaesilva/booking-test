import { z } from "zod";

export const FormSchema = z.object({
  id: z.string(),
  destination: z.string().refine((val) => val.length !== 0, {
    message: "You must choose a place first",
  }),
  startDate: z.date().nullable(),
  endDate: z.date().nullable(),
});

export type BookingType = z.infer<typeof FormSchema>;
