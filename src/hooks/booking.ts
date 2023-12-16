import React from "react";
import { BookingContext } from "@/components/booking-context";

export function useBookingContext() {
  const context = React.useContext(BookingContext);
  if (!context) {
    throw new Error(
      "useBookingContext must be used within a ThemeBookingProvider"
    );
  }
  return context;
}
