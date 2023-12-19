import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { places } from "@/utils/places";

type InputSelect = {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
};

export const InputSelect = ({ value, onChange, errorMessage }: InputSelect) => {
  return (
    <div className="flex flex-col w-full">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cn("py-7", errorMessage ? "border-red-400" : "")}
          aria-label="select-place-trigger"
        >
          <SelectValue placeholder="Where are you going?" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>choose a place</SelectLabel>
            {places.map((place, index) => (
              <SelectItem
                key={place}
                value={place}
                aria-label={`select-place-option-${index + 1}`}
              >
                {place}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errorMessage ? (
        <span className="text-sm text-red-400" aria-label={errorMessage}>
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};
