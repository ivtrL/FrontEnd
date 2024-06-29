"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import SearchIcon from "@mui/icons-material/Search";

const imgs = [
  { src: "/praia.jpg", title: "Praias de Maceió" },
  { src: "/rio.jpg", title: "Rio de Janeiro" },
  { src: "/SP.jpg", title: "São Paulo" },
];

const DRAG_BUFFER = 100;
const ONE_SECOND = 1000;
const INTERVAL = 10 * ONE_SECOND;

export default function MainPage() {
  const [_dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const [ref, { width }] = useMeasure();

  const dragX = useMotionValue(0);

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
      setImgIndex((prev) => {
        if (prev === imgs.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, INTERVAL);

    return () => {
      clearInterval(intervalRef);
    };
  }, [imgIndex]);

  return (
    <main className="relative w-3/4 mx-auto top-24 flex flex-col">
      <div className="w-3/4 mx-auto gap-6 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold text-black">
            Você procura, nos encontramos.
          </h1>
          <p className="text-lg text-center text-gray-500">
            Encontre o lugar perfeito para sua viagem.
          </p>
        </div>
        <label className="input input-bordered input-lg bg-white flex items-center gap-2 max-w-7xl w-full rounded-full shadow-lg min-w-96">
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
              key={index}
              className="aspect-video w-full shrink-0 h-[460px] relative text-center"
            >
              <h1 className="absolute bottom-6 left-8 text-white text-4xl font-bold">
                {img.title}
              </h1>
              <div
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-full object-cover shadow-vignette"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
