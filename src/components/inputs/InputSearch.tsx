import { useDebounce } from "@uidotdev/usehooks";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const InputSearch = (props: {
  placeholder?: string;
  onChange: (value: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 300);
  const onChange = props.onChange;

  useEffect(() => {
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onChange]);

  return (
    <div className="flex flex-row items-center justify-between border border-gray-200 rounded-2xl bg-white w-full relative">
      <input
        type="text"
        placeholder={props.placeholder ?? "Search"}
        v-model="value"
        className="text-sm py-2 pl-10 pr-2 w-full rounded-2xl outline-primary-modern"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="absolute left-4 text-gray-400 w-4 h-4" />
    </div>
  );
};

export default InputSearch;
