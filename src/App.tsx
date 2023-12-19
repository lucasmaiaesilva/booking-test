import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isBefore, isValid } from "date-fns";
import * as z from "zod";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { Form, FormField } from "@/components/ui/form";
import { Header } from "@/components/ui/header";
import { useToast } from "@/components/ui/use-toast";
import { InputCalendar } from "@/components/ui/input-calendar";
import { Button } from "@/components/ui/button";
import { InputSelect } from "@/components/ui/input-select";
import { BookingDetails } from "@/components/ui/booking-details";
import { useBookingContext } from "@/hooks/booking";
import { BookingType, FormSchema } from "@/types/booking";
import { cn } from "@/lib/utils";
import { hasDuplicateBooking } from "@/utils/booking";

function App() {
  const { toast } = useToast();
  const { booking: bookings, setBooking } = useBookingContext();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      destination: "",
      startDate: null,
      endDate: null,
    },
  });

  const { formState, watch } = form;
  const { isSubmitting, errors } = formState;
  const id = watch("id");
  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const index = bookings.findIndex((booking) => booking.id === id);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const isEditMode = data.id !== ""; // false: new booking, true: edit booking
    const payload = {
      ...data,
      id: isEditMode ? data.id : uuid(),
    };

    // ignore item that is being edited in the list to be validated
    const bookingList = !isEditMode
      ? bookings
      : bookings.filter((booking) => booking.id !== data.id);

    if (hasDuplicateBooking(bookingList, payload)) {
      return toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        variant: "destructive",
        title: `You already have a trip in this same range of dates.`,
      });
    }

    if (!isEditMode) {
      // create new booking
      setBooking((prev) => {
        return [...prev, payload];
      });
    } else {
      // edit existing booking
      setBooking((prev) => {
        // get the index of the item in the list of bookings
        const index = prev.findIndex((booking) => booking.id === data.id);

        const updatedList: BookingType[] = prev;
        updatedList.splice(index, 1, payload);

        return updatedList;
      });
    }

    const { reset } = form;
    reset();

    toast({
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
      title: `Booking ${isEditMode ? "updated" : "created"} succesfully`,
      description: (
        <div
          className="flex flex-col gap-1"
          aria-label="Booking Created Succesfully"
        >
          <span>
            {`Congratulations you've scheduled an unforgetable trip to ${data.destination}`}
          </span>
          <div className="flex flex-col">
            <span className="font-bold">{`From - ${format(
              data.startDate as Date,
              "PPPP"
            )}`}</span>
            <span className="font-bold">{`To - ${format(
              data.endDate as Date,
              "PPPP"
            )}`}</span>
          </div>
        </div>
      ),
    });
  }

  function onEditItem(item: BookingType) {
    // fill the form with the data to be edited
    const { setValue } = form;
    setValue("id", item.id);
    setValue("destination", item.destination);
    setValue("startDate", item.startDate);
    setValue("endDate", item.endDate);
  }

  // validation start-date > end-date
  const errorDatesHandler = (key: "startDate" | "endDate") => {
    if (isValid(startDate) && isValid(endDate)) {
      if (isBefore(endDate as Date, startDate as Date)) {
        return "Check-in date cannot be after the Check-out date.";
      } else {
        return errors[key]?.message;
      }
    }
    return errors[key]?.message;
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-100 pt-14">
        <div className="container">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative z-20 flex items-center w-full h-full py-6 bg-white shadow-2xl -mt-60 px-7 lg:-mt-28 lg:rounded-3xl rounded-xl"
            >
              <div className="flex flex-col w-full gap-6 pb-8 mt-10 lg:mt-0 lg:flex-row lg:p-0">
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <InputSelect
                      value={field.value}
                      onChange={field.onChange}
                      errorMessage={errors?.destination?.message}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <InputCalendar
                      value={field.value}
                      onChange={field.onChange}
                      placeholderText="Check-in Date"
                      errorMessage={errorDatesHandler("startDate")}
                      cyLabel="select-start-date"
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <InputCalendar
                      value={field.value}
                      onChange={field.onChange}
                      placeholderText="Check-out Date"
                      errorMessage={errorDatesHandler("endDate")}
                      cyLabel="select-end-date"
                    />
                  )}
                />

                <Button
                  size="lg"
                  className="py-7"
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit Booking Info"
                >
                  {id !== "" ? "Update Destination" : "Add Destination"}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="container mt-8">
          <BookingDetails onEditItem={onEditItem} indexEdited={index} />
        </div>
      </main>
    </div>
  );
}

export default App;
