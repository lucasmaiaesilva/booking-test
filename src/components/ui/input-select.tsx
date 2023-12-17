import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { places } from "@/utils/places";

type InputSelect = {
  value: string;
  onChange: (value: string) => void;
};

export const InputSelect = ({ value, onChange }: InputSelect) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="py-7">
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
  );
};
