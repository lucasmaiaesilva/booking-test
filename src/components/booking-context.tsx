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
  const [booking, setBooking] = useState<BookingType[]>([
    // {
    //   id: 1,
    //   destination: "Paris",
    //   startDate: new Date(),
    //   endDate: new Date(),
    // },
    // {
    //   id: 2,
    //   destination: "Aparecida do Norte",
    //   startDate: new Date(),
    //   endDate: new Date(),
    // },
    // {
    //   id: 3,
    //   destination: "Aparecida do Norte",
    //   startDate: new Date(),
    //   endDate: new Date(),
    // },
  ]);

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
