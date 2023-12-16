import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
// import { FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, subDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

type InputCalendar = {
  placeholderText: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
};

export const InputCalendar = ({
  value,
  placeholderText,
  onChange,
}: InputCalendar) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={cn(
            "w-full pl-3 text-left font-normal py-7",
            !value && "text-muted-foreground"
          )}
        >
          {value ? format(value, "PPP") : <span>{placeholderText}</span>}
          <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          onSelect={(e) => onChange(e as Date)}
          disabled={(date) => date < subDays(new Date(), 1)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
