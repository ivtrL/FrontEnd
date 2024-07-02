import { Search } from "lucide-react";
import { BannerComponent, BannerProgress } from "./Banner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cardArr } from "./cardImport";
import { ShoppingCard } from "./ShoppingCard";

export default function MainPage() {
  return (
    <main className="w-3/4 mx-auto top-24 flex flex-col">
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
      <div className="mt-20 group">
        <Carousel opts={{ loop: true }}>
          <BannerComponent />
          <BannerProgress />
          <CarouselNext className="right-0 h-full bg-neutral-950/40 border-0 text-white opacity-0 group-hover:opacity-100 hover:bg-neutral-950/70 transition-all rounded-r-xl" />
          <CarouselPrevious className="h-full bg-neutral-950/40 border-0 text-white opacity-0 group-hover:opacity-100 hover:bg-neutral-950/70 transition-all rounded-l-xl" />
        </Carousel>
      </div>
      <div className="my-32">
        <h2 className="mb-6 text-xl font-medium text-gray-950">
          Aventuras para a família
        </h2>
        <Carousel opts={{ loop: false, align: "start" }}>
          <CarouselContent>
            {cardArr.map((card, index) => (
              <CarouselItem
                key={index}
                className={`pl-6 md:basis-1/3 lg:basis-1/4`}
              >
                <ShoppingCard
                  title={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
                  }
                  image={card}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0 top-1/3 translate-x-1/2 rounded-full border-2 text-black hover:bg-gray-200 disabled:invisible transition-all" />
          <CarouselPrevious className="top-1/3 -translate-x-1/2 rounded-full border-2 text-black hover:bg-gray-200 disabled:invisible transition-all" />
        </Carousel>
      </div>
    </main>
  );
}
