import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { v4 as uuid } from "uuid";
import { Form, FormField } from "@/components/ui/form";
import { Header } from "@/components/ui/header";
// import { toast } from "@/components/ui/use-toast";
import { InputCalendar } from "@/components/ui/input-calendar";
import { Button } from "@/components/ui/button";
import { InputSelect } from "@/components/ui/input-select";
import { BookingDetails } from "@/components/ui/booking-details";
import { useBookingContext } from "@/hooks/booking";
import { BookingType, FormSchema } from "@/types/booking";

function App() {
  const { setBooking } = useBookingContext();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      destination: "",
      startDate: null,
      endDate: null,
    },
  });

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

        // remove item by index
        const bookingListWithoutEditedItem = prev.filter((_, i) => i !== index);

        //update list
        return [...bookingListWithoutEditedItem, payload];
      });
    }

    const { reset } = form;
    reset();

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  function onEditItem(item: BookingType) {
    // fill the form with the data to be edited
    const { setValue } = form;
    setValue("id", item.id);
    setValue("destination", item.destination);
    setValue("startDate", item.startDate);
    setValue("endDate", item.endDate);
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-100 pt-14">
        <div className="container">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative z-20 flex items-center w-full h-full bg-white shadow-2xl -mt-60 px-7 lg:-mt-28 lg:h-28 lg:rounded-3xl rounded-xl"
            >
              <div className="flex flex-col w-full gap-6 pb-8 mt-10 lg:mt-0 lg:flex-row lg:p-0">
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <InputSelect
                      value={field.value}
                      onChange={field.onChange}
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
                    />
                  )}
                />

                <Button size="lg" className="py-7" type="submit">
                  Add Destination
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="container mt-8">
          <BookingDetails onEditItem={onEditItem} />
        </div>
      </main>
    </div>
  );
}

export default App;
