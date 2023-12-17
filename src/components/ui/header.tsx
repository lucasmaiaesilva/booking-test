export function Header() {
  return (
    <section className="relative bg-[url('../../../public/hero-background.jpeg')] bg-no-repeat bg-cover bg-left h-[70dvh]">
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
  );
}
