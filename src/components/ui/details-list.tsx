import { format } from "date-fns";
import { CalendarCheck2, CalendarX2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { BookingType } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import { useBookingContext } from "@/hooks/booking";
import { BookingRenderProps } from "@/components/ui/booking-details";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

export const DetailsList = ({
  onEditItem,
  indexEdited,
}: BookingRenderProps) => {
  const { booking, setBooking } = useBookingContext();
  const { toast } = useToast();

  const handleEditItem = (item: BookingType) => {
    onEditItem(item);
  };
  const handleRemoveItem = (id: string) => {
    setBooking((prev: BookingType[]) => prev.filter((item) => item.id !== id));
    toast({
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
      variant: "destructive",
      title: `Booking deleted succesfully`,
    });
  };

  if (booking?.length === 0) {
    return <EmptyState text="No booking data" />;
  }

  return (
    <>
      <ul aria-label="Booking List">
        {booking?.map((item: BookingType, index) => (
          <li
            key={item.id}
            className={cn(
              "relative p-6 my-4 overflow-hidden bg-white border-2 lg:flex lg:items-center lg:justify-between rounded-xl",
              indexEdited === index
                ? "border-dashed border-slate-400/70"
                : "border-slate-200"
            )}
          >
            {indexEdited === index ? (
              <div className="absolute inset-0 bg-white/80" />
            ) : null}
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
                  onClick={() => handleEditItem(item)}
                  className="flex items-center gap-1 px-2"
                  aria-label="Edit Booking Button"
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
