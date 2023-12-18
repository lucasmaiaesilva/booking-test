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
import { FieldError } from "react-hook-form";

type InputSelect = {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: FieldError;
};

export const InputSelect = ({ value, onChange, errorMessage }: InputSelect) => {
  return (
    <div className="flex flex-col w-full">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cn("py-7", errorMessage ? "border-red-400" : "")}
        >
          <SelectValue placeholder="Where are you going?" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>choose a place</SelectLabel>
            {places.map((place) => (
              <SelectItem key={place} value={place}>
                {place}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errorMessage ? (
        <span className="text-sm text-red-400">{`${errorMessage.message}`}</span>
      ) : null}
    </div>
  );
};
