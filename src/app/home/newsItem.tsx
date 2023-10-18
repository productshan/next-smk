import { news_picture_home_item } from "@/assets";
import Image from "next/image";
import React from "react";

export default function NewsItem() {
  return (
    <div className="group/news-item w-full h-[128px] bg-white border rounded-md flex flex-col">
      <div className="w-full h-full flex p-2 rounded-md group-hover/news-item:bg-gray-100 duration-300">
        <div className="w-[192px] h-full flex">
          <Image src={news_picture_home_item} alt="news-items" className="w-[192px]" />
        </div>
        <div className="ml-4 h-full flex flex-col w-3/4 justify-between">
          <b>Lorem, ipsum dolor.</b>
          <p className="news-desc-overflow">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam earum architecto nostrum corrupti sit autem suscipit minus magnam fugit quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, culpa explicabo debitis similique, maiores sunt eos quod perferendis dolore
            necessitatibus, repellendus sint.
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-slate">Author</p>
            <p className="text-xs text-slate">28 September 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
