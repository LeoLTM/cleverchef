"use client";

import { ChangeEvent } from "react";

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
    <input
      type="text"
      placeholder={searchText}
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
    />
  );
}
