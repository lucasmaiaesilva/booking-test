import { BookingType } from "@/types/booking";
import { isBefore, isAfter, isEqual } from "date-fns";

export function hasDuplicateBooking(
  booklist: BookingType[],
  item: BookingType
) {
  if (booklist.length === 0) return false;

  return booklist.some((booking) => {
    // validate range date has already been choosen
    // startDate from payload is between start and end dates from the list
    if (
      isAfter(item.startDate as Date, booking.startDate as Date) &&
      isBefore(item.startDate as Date, booking.endDate as Date)
    ) {
      return true;
    }
    // endDate from payload is between start and end dates from the list
    if (
      isAfter(item.endDate as Date, booking.startDate as Date) &&
      isBefore(item.endDate as Date, booking.endDate as Date)
    ) {
      return true;
    }
    // startDate and EndDates as wrapper of other dates
    if (
      isBefore(item.startDate as Date, booking.startDate as Date) &&
      isAfter(item.endDate as Date, booking.endDate as Date)
    ) {
      return true;
    }
    // Start and End dates duplicated
    if (
      isEqual(item.startDate as Date, booking.startDate as Date) ||
      isEqual(item.endDate as Date, booking.endDate as Date)
    ) {
      return true;
    }

    return false;
  });
}
