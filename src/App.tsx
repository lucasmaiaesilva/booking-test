import { InputCalendar } from "@/components/ui/input-calendar";
import { Button } from "@/components/ui/button";
import { InputSelect } from "@/components/ui/input-select";
import { BookingDetails } from "./components/ui/booking-details";

function App() {
  return (
    <body className="min-h-[100dvh] flex flex-col">
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
          <form className="relative flex items-center w-full h-full bg-white shadow-2xl -mt-60 px-7 lg:-mt-28 lg:h-28 lg:rounded-3xl rounded-xl">
            <div className="flex flex-col w-full gap-6 pb-8 mt-10 lg:mt-0 lg:flex-row lg:p-0">
              <InputSelect />
              <InputCalendar />
              <InputCalendar />
              <Button size="lg" className="py-7">
                Add Destination
              </Button>
            </div>
          </form>
        </div>

        <div className="container mt-8">
          <BookingDetails />
        </div>
      </main>
    </body>
  );
}

export default App;
