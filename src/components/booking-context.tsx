import { BookingType } from "@/types/booking";
import { createContext, useState } from "react";

type BookingContext = {
  booking: BookingType[];
  setBooking: React.Dispatch<React.SetStateAction<BookingType[]>>;
};

export const BookingContext = createContext<BookingContext | null>(null);

export default function BookingContextProvider({
  children,
}: React.PropsWithChildren) {
  const [booking, setBooking] = useState<BookingType[]>([]);

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
