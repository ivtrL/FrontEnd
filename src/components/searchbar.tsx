"use client";
import * as React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearch } from "./SearchContext";

export default function SearchBar() {
  const { search, handleSearch, handleSubmit } = useSearch();

  return (
    <form
      onSubmit={handleSubmit}
      className="input input-bordered input-lg bg-white flex items-center gap-2 max-w-7xl w-full rounded-full shadow-lg min-w-96 pr-0"
    >
      <Input
        type="text"
        placeholder="Aonde você quer ir? Hotéis, Pousadas, Cidades..."
        className="grow"
        value={search}
        onChange={handleSearch}
      />
      <Button className="rounded-full h-full gap-2" type="submit">
        <Search />
        <div>BUSCAR</div>
      </Button>
    </form>
  );
}
