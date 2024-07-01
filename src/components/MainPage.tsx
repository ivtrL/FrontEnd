import * as React from "react";
import { Search } from "lucide-react";
import { BannerComponent, BannerProgress } from "./Banner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Carousel, CarouselContent } from "./ui/carousel";
import CardItem from "./ui/carditem";
import Image from "next/image";

const imagens = [
  "/card1.jpg",
  "/card2.jpg",
  "/card3.jpg",
  "/card4.jpg",
  "/card5.jpg",
  "/card6.jpg",
];

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
      <Carousel>
        <BannerComponent className="mt-16" />
        <BannerProgress />
      </Carousel>
      <div>
        <Carousel>
          <CarouselContent>
            {imagens.map((imagem, index) => {
              return (
                <CardItem key={index} size="lg">
                  <Image
                    src={imagem}
                    fill
                    alt={`imagem ${index + 1}`}
                    className="w-full h-full"
                  />
                </CardItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
}
