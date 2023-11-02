import news from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import parse from "html-react-parser";
import ImageCarousel from "../../components/imageCarousel";

export default function page({ params }: { params: { id: String } }) {
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
          <ImageCarousel listPhotos={listPhotos} />
        </div>
      </div>
    </div>
  );
}

const dynamicParams = false;
export { dynamicParams };
