import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { v4 as uuid } from "uuid";
import { Form, FormField } from "@/components/ui/form";
// import { toast } from "@/components/ui/use-toast";
import { InputCalendar } from "@/components/ui/input-calendar";
import { Button } from "@/components/ui/button";
import { InputSelect } from "@/components/ui/input-select";
import { BookingDetails } from "./components/ui/booking-details";

const FormSchema = z.object({
  id: z.string(),
  destination: z.string(),
  startDate: z.date().nullable(),
  endDate: z.date().nullable(),
});

function App() {
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
    const payload = {
      ...data,
      id: uuid(),
    };
    console.log("SUBMIT", payload);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <section className="relative bg-[url('hero-background.jpeg')] bg-no-repeat bg-cover bg-left h-[70dvh]">
        <header className="container absolute inset-0 left-0 right-0 z-20 flex items-center h-16 mx-auto font-semibold">
          <span className="text-xl text-white">easyBooking</span>
        </header>

        <div className="bg-[#ca4d66] absolute inset-0 opacity-50" />

        <div className="absolute inset-0 bottom-0 left-0 right-0 z-20 mx-auto">
          <div className="container items-center h-full lg:grid lg:grid-cols-2 lg:gap-4">
            <div />
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Your next dream destination
              </h1>
              <p className="mt-4 text-xl font-normal text-white">
                Discover your next trip, by booking your destination and dates,
                it's simple!
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <BookingDetails />
        </div>
      </main>
    </div>
  );
}

export default App;
