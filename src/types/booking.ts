export type BookingType = {
  id?: number;
  destination?: string;
  startDate: Date;
  endDate: Date;
};

export type BookingState = {
  booking: BookingType[];
  currentBooking: BookingType;
};
