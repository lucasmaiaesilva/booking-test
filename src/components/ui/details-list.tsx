import { format } from "date-fns";
import { CalendarCheck2, CalendarX2 } from "lucide-react";
import { BookingType } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import { useBookingContext } from "@/hooks/booking";

import { EmptyState } from "@/components/ui/empty-state";

export const DetailsList = () => {
  const { booking, setBooking } = useBookingContext();

  const handleEditItem = () => {};
  const handleRemoveItem = (id: string) => {
    setBooking((prev: BookingType[]) => prev.filter((item) => item.id !== id));
  };

  if (booking?.length === 0) {
    return <EmptyState text="No booking data" />;
  }

  return (
    <>
      <ul>
        {booking?.map((item: BookingType) => (
          <li
            key={item.id}
            className="p-6 my-4 bg-white border-2 lg:flex lg:items-center lg:justify-between rounded-xl border-slate-200"
          >
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold leading-7 text-slate-600 sm:truncate sm:text-xl sm:tracking-tight">
                {item.destination}
              </h2>
              <div className="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="flex justify-between gap-2 mt-2 text-sm text-slate-500">
                  <div className="flex flex-row">
                    <CalendarCheck2 className="mr-1.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                    check-in
                  </div>
                  {item.startDate ? (
                    <span className="px-1.5 bg-slate-200 text-slate-500 rounded font-semibold w-fit flex-1">
                      {format(new Date(item.startDate), "PPP")}
                    </span>
                  ) : null}
                </div>

                <div className="flex justify-between gap-2 mt-2 text-sm text-slate-500">
                  <div className="flex flex-row">
                    <CalendarX2 className="mr-1.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                    check-out
                  </div>
                  {item.endDate ? (
                    <span className="px-1.5 bg-slate-200 text-slate-500 rounded font-semibold w-fit flex-1">
                      {format(new Date(item.endDate), "PPP")}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5 lg:ml-4 lg:mt-0">
              <span className="sm:block">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleEditItem()}
                  className="flex items-center gap-1 px-2"
                >
                  <Pencil className="w-4 h-4" />
                  Edit
                </Button>
              </span>

              <span>
                <Button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  className="flex items-center gap-1 px-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </Button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
