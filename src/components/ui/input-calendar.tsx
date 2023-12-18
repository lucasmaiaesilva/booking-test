import { useState } from "react";
import { format, subDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

type InputCalendar = {
  placeholderText: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  errorMessage?: string;
};

export const InputCalendar = ({
  value,
  placeholderText,
  onChange,
  errorMessage,
}: InputCalendar) => {
  const [isClosedCalendarDropdown, setIsClosedCalendarDropdown] =
    useState<boolean>(true);
  return (
    <div className="flex flex-col w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsClosedCalendarDropdown(false)}
            className={cn(
              "w-full pl-3 text-left font-normal py-7",
              !value && "text-muted-foreground",
              errorMessage ? "border-red-400" : ""
            )}
          >
            {value ? format(value, "PPP") : <span>{placeholderText}</span>}
            <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="center"
          closed={isClosedCalendarDropdown}
        >
          <Calendar
            mode="single"
            onSelect={(e) => {
              onChange(e as Date);
              setIsClosedCalendarDropdown(true);
            }}
            disabled={(date) => date < subDays(new Date(), 1)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errorMessage ? (
        <span className="text-sm text-red-400">{errorMessage}</span>
      ) : null}
    </div>
  );
};
