"use client";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import ShowImage from "./showImage";

export default function ImageCarousel({ listPhotos }: { listPhotos: any }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCenterSlidePercentage(33.33);
      } else {
        setCenterSlidePercentage(100);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Carousel
        className="relative bg-locate w-full"
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
        showIndicators={false} // Optional: hide indicators if cluttered
      >
        {listPhotos.map((link: any, key: number) => {
          return (
            <div
              className="relative flex items-center justify-center hover:cursor-pointer h-64 px-1" // Added padding for spacing, fixed height
              key={key}
              onClick={() => {
                setActiveImage(link);
                setModalOpen(true);
              }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={link}
                  alt={"photos"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
      <ShowImage link={activeImage} onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
    </>
  );
}
