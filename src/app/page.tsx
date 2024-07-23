import MainPage from "@/components/MainPage";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPortal,
} from "@/components/ui/drawer";
import { HeaderComponent } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Drawer direction="left">
        <HeaderComponent />
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
