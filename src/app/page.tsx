import { ShoppingCart, List, UserRound } from "lucide-react";
import MainPage from "@/components/MainPage";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Drawer direction="left">
        <header className="navbar max-md:w-full md:w-5/6 max-sm:p-4 lg:w-3/4 mx-auto">
          <div className="navbar-start lg:hidden">
            <div className="flex-none">
              <DrawerTrigger asChild>
                <Button>
                  <List />
                </Button>
              </DrawerTrigger>
            </div>
          </div>
          <div className="lg:navbar-start max-lg:navbar-center">
            <a className="text-xl text-black">LOGO</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Viagens</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink asChild>
                      <Link href="/">Internacionais</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <Link href="/">Nacionais</Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Hoteis
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Pacotes para Familia
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Ajuda
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="navbar-end">
            <div>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator text-black">
                  <UserRound />
                </div>
              </button>
            </div>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator text-black">
                <ShoppingCart />
              </div>
            </button>
          </div>
        </header>
        <DrawerPortal>
          <DrawerContent className="w-96 h-full">
            <DrawerHeader>Olá! Seja bem-vindo!</DrawerHeader>
          </DrawerContent>
        </DrawerPortal>
        <MainPage />
      </Drawer>
    </>
  );
}
