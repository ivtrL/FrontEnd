"use client";
import * as React from "react";
import { DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { List, ShoppingCart, UserRound } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeaderComponent = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: {
          backgroundColor: "white",
        },
        transparent: {
          backgroundColor: "transparent",
        },
      }}
      animate={hidden ? "visible" : "transparent"}
      className={`fixed w-full z-10 transition-colors ${
        hidden ? "shadow-md" : ""
      }`}
    >
      <div className="navbar max-md:w-full md:w-5/6 max-sm:p-4 lg:w-3/4 mx-auto my-4">
        <div className="navbar-start lg:hidden">
          <div className="flex-none">
            <DrawerTrigger asChild>
              <Button variant="secondary">
                <List />
              </Button>
            </DrawerTrigger>
          </div>
        </div>
        <div className="lg:navbar-start max-lg:navbar-center">
          <a className={`text-xl ${hidden ? "text-black" : "text-white"}`}>
            LOGO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${hidden ? "text-black" : "text-white"}`}
                >
                  Viagens
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link href="/">Internacionais</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/">Nacionais</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      `${hidden ? "text-black" : "text-white"}`
                    )}
                  >
                    Hoteis
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      `${hidden ? "text-black" : "text-white"}`
                    )}
                  >
                    Pacotes para Familia
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      `${hidden ? "text-black" : "text-white"}`
                    )}
                  >
                    Ajuda
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="navbar-end">
          <div>
            <button className="btn btn-ghost btn-circle hover:bg-gray-200/70 active:bg-gray-200 group">
              <div
                className={`indicator ${
                  hidden ? "text-black" : "text-white"
                } group-hover:text-black`}
              >
                <UserRound />
              </div>
            </button>
          </div>
          <button className="btn btn-ghost btn-circle hover:bg-gray-200/70 active:bg-gray-200 group">
            <div
              className={`indicator ${
                hidden ? "text-black" : "text-white"
              } group-hover:text-black`}
            >
              <ShoppingCart />
            </div>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
