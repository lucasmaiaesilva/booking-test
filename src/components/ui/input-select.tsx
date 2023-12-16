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

export const InputSelect = () => {
  return (
    <Select>
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
