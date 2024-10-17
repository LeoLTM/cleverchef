"use client";

import { ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchText: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({
  searchText,
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        placeholder={searchText}
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 pl-10 border border-gray-300 rounded"
      />
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
}
