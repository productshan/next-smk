"use client";
import { card_picture, user_man, user_woman } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import Detail from "./detail";
import { formatString } from "@/helpers";

export default function Card({ profile }: { profile: any }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <Detail isActive={isActive} onClose={() => setActive(false)} profile={profile} />
      <div
        className={`flex w-fit h-fit rounded-md border-slate-500 border shadow flex-col hover:-translate-y-0.5 hover:shadow-xl hover:cursor-pointer duration-300 ${
          isActive ? "-z-10" : ""
        }`}
        onClick={() => setActive(!isActive)}
      >
        <div className="flex py-2 w-48 h-64 bg-white items-center rounded-t-md overflow-hidden">
          <Image src={profile.picture ? profile.picture : profile.jk === "P" ? user_woman : user_man} className="w-full h-auto" alt="user" />
        </div>
        <div className="flex flex-col p-2 w-48 items-center justify-center bottom-0  ">
          <b className="text-sm font-bold text-black">{profile ? formatString(profile.nama) : "Default"}</b>
          <div className="w-full h-0.5 bg-black my-1 rounded"></div>
          <p className="text-xs text-black">{profile ? formatString(profile.posisi) : "Default"}</p>
        </div>
      </div>
    </>
  );
}
