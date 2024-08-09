"use client";
import { useRouter } from "next/navigation";
import * as React from "react";

type SearchContextProps = {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchContext = React.createContext<SearchContextProps | null>(null);

const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    const formattedSearch = search.replace(/\s/g, "-");
    router.push(`/busca/${formattedSearch}`);
  };

  return (
    <SearchContext.Provider value={{ search, handleSearch, handleSubmit }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearch };
