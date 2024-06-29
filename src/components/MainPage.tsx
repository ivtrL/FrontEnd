import * as React from "react";
import { Search } from "lucide-react";
import BannerComponent from "./ui/BannerComponent";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function MainPage() {
  return (
    <main className="relative w-3/4 mx-auto top-24 flex flex-col">
      <div className="w-3/4 mx-auto gap-6 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-center font-bold text-black tracking-tighter">
            Você procura, nós encontramos.
          </h1>
          <p className="text-lg text-center text-gray-500">
            Encontre o lugar perfeito para sua próxima viagem.
          </p>
        </div>
        <label className="input input-bordered input-lg bg-white flex items-center gap-2 max-w-7xl w-full rounded-full shadow-lg min-w-96 pr-0">
          <Input
            type="text"
            placeholder="Aonde você quer ir? Hotéis, Pousadas, Cidades..."
            className="grow"
          />
          <Button className="rounded-full h-full gap-2">
            <Search />
            <div>BUSCAR</div>
          </Button>
        </label>
      </div>
      <BannerComponent />
    </main>
  );
}
