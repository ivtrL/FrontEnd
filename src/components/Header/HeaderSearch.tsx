"use client";
import Link from "next/link";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ListItem } from "./ListItem";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSearch } from "../SearchContext";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export const HeaderSearch = () => {
  const { search, handleSearch, handleSubmit } = useSearch();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="sticky top-0 w-full transition-all duration-300 shadow-md bg-white"
    >
      <div className="transition-all duration-300 z-10 navbar max-md:w-full md:w-5/6 max-sm:p-4 lg:w-3/4 mx-auto p-0 bg-white">
        <div className="navbar-start lg:hidden">
          {/* <div className="flex-none">
              <DrawerTrigger asChild>
                <Button variant="secondary">
                  <List />
                </Button>
              </DrawerTrigger>
            </div> */}
        </div>
        <div className="lg:navbar-start max-lg:navbar-center">
          <a className="text-xl text-black">LOGO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black">
                  Viagens
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Melhores Lugares
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Os lugares mais bonitos e mais bem avaliados para
                            você conhecer e se divertir com a família.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Internacionais">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum molestias, eos expedita veniam reiciendis a esse
                    </ListItem>
                    <ListItem href="/" title="Nacionais">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum molestias, eos expedita veniam reiciendis a esse
                    </ListItem>
                    <ListItem href="/" title="Promoções">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum molestias, eos expedita veniam reiciendis a esse
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black">
                  Hoteis
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Melhores Hoteis
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Os hotéis mais bem avaliados para você relaxar e
                            curtir a viagem da melhor forma.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Pousadas">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum molestias, eos expedita veniam reiciendis a esse
                    </ListItem>
                    <ListItem href="/" title="Pacotes">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum molestias, eos expedita veniam reiciendis a esse
                    </ListItem>
                    <ListItem href="/" title="Promoções">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum molestias, eos expedita veniam reiciendis a esse
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(navigationMenuTriggerStyle(), "text-black")}
                  >
                    Pacotes para Familia
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(navigationMenuTriggerStyle(), "text-black")}
                  >
                    Ajuda
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <form
            onSubmit={handleSubmit}
            className="ml-4 input input-bordered bg-white input-md h-10 flex items-center gap-2 w-3/6 mx-auto rounded-full shadow-lg min-w-64 pr-0"
          >
            <Input
              type="text"
              placeholder="Aonde você quer ir?"
              className="grow"
              onChange={handleSearch}
              value={search}
            />
            <Button
              className="rounded-full h-4/5 p-2 bg-transparent text-gray-500 hover:bg-gray-100 mr-2"
              type="submit"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>
        </div>
        <div className="navbar-end">
          <div>
            <button className="btn btn-ghost btn-circle hover:bg-gray-200/70 active:bg-gray-200 group text-black">
              <div>
                <UserRound />
              </div>
            </button>
          </div>
          <button className="btn btn-ghost btn-circle hover:bg-gray-200/70 active:bg-gray-200 group text-black">
            <div>
              <ShoppingCart />
            </div>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
