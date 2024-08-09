import MainPage from "@/components/pages/MainPage";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPortal,
} from "@/components/ui/drawer";
import { HeaderHome } from "@/components/Header";
import { FooterComponent } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Drawer direction="left">
        <HeaderHome />
        <DrawerPortal>
          <DrawerContent className="w-96 h-full">
            <DrawerHeader>Olá! Seja bem-vindo!</DrawerHeader>
          </DrawerContent>
        </DrawerPortal>
        <MainPage />
      </Drawer>
      <FooterComponent />
    </>
  );
}
