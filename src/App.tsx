import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const index = bookings.findIndex((booking) => booking.id === id);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const isEditMode = data.id !== ""; // false: new booking, true: edit booking
    const payload = {
      ...data,
      id: isEditMode ? data.id : uuid(),
    };

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
      title: "Booking Created Succesfully",
      description: (
        <div className="flex flex-col gap-1">
          <span>
            {`Congratulations you've scheduled a unforgivable trip to ${data.destination}`}
          </span>
          <div>
            <span className="font-bold">{`from - ${format(
              data.startDate as Date,
              "PPPP"
            )}`}</span>
            <span className="font-bold">{`to - ${format(
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

  console.log({ errors });

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
                      errorMessage={errors?.destination}
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
                      // error
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
                      // error
                    />
                  )}
                />

                <Button
                  size="lg"
                  className="py-7"
                  type="submit"
                  disabled={isSubmitting}
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
