"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };
  return (
    <form onSubmit={handleSubmit} className="sm:w-[40%] w-full h-10">
      <input
        type="text"
        className="rounded-lg ring-1 ring-gray-500 p-2 w-full"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
