import { InputCalendar } from "@/components/ui/input-calendar";
import { Button } from "@/components/ui/button";
import { InputSelect } from "@/components/ui/input-select";

function App() {
  return (
    <body className="min-h-[100dvh] flex flex-col">
      <header className="relative bg-[url('hero-background.jpeg')] bg-no-repeat bg-cover bg-left">
        <div className="bg-[#ca4d66] absolute inset-0 opacity-50" />

        <div className="container grid items-center grid-cols-2 gap-4">
          <div />
          <div className="my-64">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Your next dream destination
            </h1>
            <p className="mt-4 text-xl font-normal text-white">
              Discover your next trip, by booking your destination and dates,
              it's simple!
            </p>
          </div>
        </div>

        <form className="container absolute left-0 right-0 z-40 flex items-center w-full mx-auto bg-white shadow-2xl h-28 rounded-3xl -bottom-14">
          <div className="flex w-full gap-6">
            <InputSelect />
            <InputCalendar />
            <InputCalendar />
            <Button size="lg" className="py-7">
              Add Destination
            </Button>
          </div>
        </form>
      </header>

      <main className="flex-1 bg-slate-100"></main>
    </body>
  );
}

export default App;
