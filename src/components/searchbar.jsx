"use client";

import debounce from "@/utils/forms/debounce";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const onChange = debounce((e) => {
    router.push(`?page=1&search=${e.target.value}`);
  }, 500);

  return (
    <input
      id="search_word"
      type="text"
      placeholder="Find a movie..."
      className="bg-gray-300 dark:bg-gray-800 rounded-full p-5 w-full max-w-3xl text-1xl text-black dark:text-white"
      defaultValue={search}
      onChange={onChange}
    />
  );
};

export default SearchBar;
