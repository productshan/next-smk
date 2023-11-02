import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsItem({ news }: { news: any }) {
  const img = news.image.headline;
  return (
    <Link href={`/informasi/show/${encodeURIComponent(news.id)}`}>
      <div className="relative bg-white shadow w-full h-[128px] overflow-hidden flex flex-row rounded hover:shadow-xl hover:cursor-pointer hover:-translate-y-0.5 hover:duration-300">
        <div className="min-w-[128px] max-w-[128px] overflow-hidden flex items-center justify-center">
          <Image src={img.link} alt={img.alt} width={0} height={0} sizes="(max-width: 1023px) 90vw, 60vw" style={{ width: "auto", height: 128 }} />
        </div>
        <div className="flex flex-grow flex-col justify-between p-4">
          <b className="text-black font-semibold news-desc-overflow">{news.title}</b>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row">
              <i className="fa fa-solid fa-calendar min-w-[12px] text-gray"></i>
              <p className="text-xs text-gray ml-1">{news.date}</p>
            </div>
            <div className="flex flex-row">
              <i className="fa fa-solid fa-user min-w-[12px] text-gray"></i>
              <p className="text-xs text-gray ml-1">{news.author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
