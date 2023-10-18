import { carousel_banner } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsItem() {
  return (
    <Link href="/informasi/showInfo">
      <div className="bg-white shadow w-full h-[128px] overflow-hidden flex flex-row rounded hover:shadow-xl hover:cursor-pointer hover:-translate-y-0.5 hover:duration-300">
        <div className="bg-locate min-h-[128px] min-w-[128px] overflow-hidden">
          <Image src={carousel_banner} alt="img-pict" className="h-[128px] w-[128px]" />
        </div>
        <div className="flex flex-grow flex-col justify-between p-4">
          <b className="text-black font-semibold news-desc-overflow">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, sequi!</b>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row">
              <i className="fa fa-solid fa-calendar min-w-[12px] text-gray"></i>
              <p className="text-xs text-gray ml-1">21 Oktober 2023</p>
            </div>
            <div className="flex flex-row">
              <i className="fa fa-solid fa-user min-w-[12px] text-gray"></i>
              <p className="text-xs text-gray ml-1">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
