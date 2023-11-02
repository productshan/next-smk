"use client";
import news from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import parse from "html-react-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ShowImage from "../../components/showImage";

export default function page({ params }: { params: { id: String } }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  var content_id = params.id;
  var isNotFound = true;
  var pointer = 0;

  for (let index = 0; index < news.length; index++) {
    if (news[index].id === content_id) {
      isNotFound = false;
      pointer = index;
      break;
    }
  }

  if (isNotFound) {
    return notFound();
  }

  var usedContent = news[pointer];
  var listPhotos = news[pointer].image.photos;
  console.log(activeImage);

  return (
    <div className="flex flex flex-col h-auto w-full">
      <div className="relative flex">
        <Image
          width={0}
          height={0}
          sizes="(max-width: 1023px) 90vw, 60vw"
          style={{ width: "100%", height: "auto" }}
          src={usedContent.image.headline.link}
          alt={usedContent.image.headline.alt}
        />
      </div>
      <div className="w-full">
        <div className="flex flex-row my-4 w-full">
          <div className="flex flex-row">
            <i className="fa fa-solid fa-calendar min-w-[12px] text-gray"></i>
            <p className="text-xs text-gray ml-1">{usedContent.date}</p>
          </div>
          <div className="flex flex-row ml-4">
            <i className="fa fa-solid fa-user min-w-[12px] text-gray"></i>
            <p className="text-xs text-gray ml-1">{usedContent.author}</p>
          </div>
        </div>
        <div className="my-4">
          <b className="text-xl">{usedContent.title}</b>
        </div>
        <div className="text-gray text-sm text-justify leading-loose mb-4">{parse(usedContent.content)}</div>
        <div>
          <p className="text-gray text-xs">Klik gambar untuk memperbesar.</p>
        </div>
        <Carousel className="relative bg-locate flex h-[256px] w-full" autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000}>
          {listPhotos.map((link, key) => {
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
        </Carousel>
      </div>
      <ShowImage link={activeImage} onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
    </div>
  );
}
