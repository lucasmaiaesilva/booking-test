import { z } from "zod";
import { isBefore } from "date-fns";

export const FormSchema = z
  .object({
    id: z.string(),
    destination: z.string().refine((val) => val.length !== 0, {
      message: "You must choose a place first",
    }),
    startDate: z
      .date()
      .nullable()
      .refine((val) => val !== null, {
        message: "Please input a Check-in date",
      }),
    endDate: z
      .date()
      .nullable()
      .refine((val) => val !== null, {
        message: "Please input a Check-out date",
      }),
  })
  .refine((val) => {
    if (val.startDate === null || val.endDate === null) return false;
    return isBefore(val.startDate as Date, val.endDate as Date);
  });

export type BookingType = z.infer<typeof FormSchema>;
