import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/toaster";
import App from "./App.tsx";
import BookingContextProvider from "@/components/booking-context.tsx";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookingContextProvider>
      <>
        <App />
        <Toaster />
      </>
    </BookingContextProvider>
  </React.StrictMode>
);
