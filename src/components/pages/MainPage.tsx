import { BannerComponent, BannerProgress } from "../Banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cardArr } from "../cardImport";
import { ShoppingCard } from "../ShoppingCard";
import SearchBar from "../searchbar";

export default function MainPage() {
  return (
    <main>
      <Carousel opts={{ loop: true }} className="group">
        <BannerComponent />
        <BannerProgress />
        <CarouselNext className="h-full w-16 bg-transparent border-0 text-white rounded-none" />
        <CarouselPrevious className="h-full w-16 bg-transparent border-0 text-white rounded-none" />
      </Carousel>
      <div className="flex flex-col mt-20">
        <div className="w-3/4 mx-auto gap-6 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4 text-center font-bold text-black tracking-tighter">
              Você procura, nós encontramos.
            </h1>
            <p className="text-lg text-center text-gray-500">
              Encontre o lugar perfeito para sua próxima viagem.
            </p>
          </div>
          <SearchBar />
        </div>
        <div className="my-32 w-3/4 mx-auto">
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
                    image={card.image}
                    reviews={card.reviews}
                    stars={card.stars}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="translate-x-1/2 rounded-full border-2 text-black hover:bg-gray-200 disabled:invisible transition-all" />
            <CarouselPrevious className="-translate-x-1/2 rounded-full border-2 text-black hover:bg-gray-200 disabled:invisible transition-all" />
          </Carousel>
        </div>
        <div className="bg-gray-100">
          <div className="mt-16 mb-32 w-3/4 mx-auto">
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
                      image={card.image}
                      reviews={card.reviews}
                      stars={card.stars}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="translate-x-1/2 rounded-full border-2 text-black hover:bg-gray-200 disabled:invisible transition-all" />
              <CarouselPrevious className="-translate-x-1/2 rounded-full border-2 text-black hover:bg-gray-200 disabled:invisible transition-all" />
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}
