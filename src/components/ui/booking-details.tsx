import { DetailsList } from "./details-list";

export const BookingDetails = () => {
  return (
    <section className="mt-4 mb-24 border-t divide-slate-100 border-slate-100">
      <h2 className="mt-4 font-semibold text-indigo-500 dark:text-indigo-400">
        Management
      </h2>
      <p className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-slate-50">
        Booking Details
      </p>
      <div className="mt-6 lg:mt-8">
        <DetailsList />
      </div>
    </section>
  );
};
