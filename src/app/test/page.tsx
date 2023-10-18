"use client";
import { carousel_banner } from "@/assets";
import { Sidebar } from "@/components";
import Image from "next/image";
import React, { useState } from "react";

const NewsItem = () => {
  return (
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
  );
};

const SidebarContent = () => {
  return (
    <div className="w-full shadow-lg rounded-md overflow-hidden">
      <div className="p-2 w-full bg-accent-200">
        <b className="text-white font-semibold">Arsip</b>
      </div>
      <div className="bg-white p-2 flex flex-col">
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">Oktober 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">September 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">Agustus 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">Juli 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer">Juni 2023</b>
      </div>
    </div>
  );
};

export default function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="layout-wrapper">
      <div className="page-wrapper">
        <b className="text-2xl font-semibold mb-4 text-gray">Berita Sekolah</b>
        <div className="flex w-full flex-row">
          <div className="flex flex-grow grid grid-cols-2 gap-4">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
          <Sidebar>
            <SidebarContent />
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
