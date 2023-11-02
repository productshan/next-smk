"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import ShowImage from "./showImage";

export default function ImageCarousel({ listPhotos }: { listPhotos: any }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  return (
    <Carousel className="relative bg-locate flex h-[256px] w-full" autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000}>
      {listPhotos.map((link: any, key: number) => {
        return (
          <div
            className="relative flex items-center justify-center hover:cursor-pointer"
            key={key}
            onClick={() => {
              setActiveImage(link);
              setModalOpen(true);
            }}
          >
            <Image width={0} height={0} sizes="(max-width: 1023px) 90vw, 60vw" style={{ width: "auto", height: 256 }} src={link} alt={"photos"} />;
          </div>
        );
      })}
      <ShowImage link={activeImage} onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
    </Carousel>
  );
}
