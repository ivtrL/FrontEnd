"use client";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const imgs = ["/praia.jpg", "/rio.jpg", "/SP.jpg"];

const DRAG_BUFFER = 100;

export default function MainPage() {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (x) => {
    if (typeof x === "number" && dragging) {
      dragXProgress.set(x);
    } else {
      dragXProgress.set(0);
    }
  });
  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      setImgIndex((prev) => (prev + 1) % imgs.length);
    } else if (x >= DRAG_BUFFER) {
      setImgIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
    }
  };

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === imgs.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, 10000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <main className="relative w-3/4 mx-auto top-24 flex flex-col">
      <div className="w-3/4 mx-auto gap-6 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-black">
            Você procura, nos encontramos.
          </h1>
          <p className="text-lg text-gray-500">
            Encontre o lugar perfeito para sua viagem.
          </p>
        </div>
        <label className="input input-bordered input-lg bg-white flex items-center gap-2 w-3/4 rounded-full shadow-lg">
          <input
            type="text"
            placeholder="Aonde você quer ir? Hotéis, Pousadas, Cidades..."
            className="grow"
          />
          <div className="btn btn-circle btn-ghost">
            <SearchIcon />
          </div>
        </label>
      </div>
      <div className="flex overflow-hidden rounded-xl mt-16">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={{
            type: "spring",
            bounce: 0,
          }}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          className="flex cursor-grab items-center active:cursor-grabbing w-full"
        >
          {imgs.map((img, index) => (
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={index}
              className="aspect-video w-full shrink-0 h-[460px] object-cover"
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
