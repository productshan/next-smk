"use client";
import { user_man, user_woman } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import Detail from "./detail";
import { formatString } from "@/helpers";

export default function Card({ profile }: { profile: any }) {
  const [isActive, setActive] = useState(false);
  const [imgSrc, setImgSrc] = useState(profile.picture ? profile.picture : profile.jk === "P" ? user_woman : user_man);
  let status = profile.posisi === "Guru" ? "Pendidik" : "T. Pendidik";
  let textColor = profile.posisi === "Guru" ? "text-[#50B7EA]" : "text-[#6C74C6]";

  return (
    <>
      <Detail isActive={isActive} onClose={() => setActive(false)} profile={profile} />
      <div
        className="group relative flex flex-col w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
        onClick={() => setActive(true)}
      >
        {/* Image Container 3:4 Aspect Ratio */}
        <div className="relative w-full pt-[133%] bg-gray-100 overflow-hidden">
          <Image
            src={imgSrc}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt={profile.nama}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={() => setImgSrc(profile.jk === "P" ? user_woman : user_man)}
          />
          <div className={`absolute bg-white px-2 py-1 z-10 top-0 right-0 text-lg font-medium ${textColor} rounded-bl-2xl`}>{status}</div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Text Content Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 text-white transform translate-y-[4.5rem] sm:translate-y-[56px] group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-bold text-base sm:text-lg leading-tight mb-1 truncate">
              {profile ? formatString(profile.nama) : "Nama"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-medium truncate">
              {profile ? formatString(profile.posisi) : "Jabatan"}
            </p>
            <div className="mt-3 flex flex-col text-[10px] sm:text-xs font-semibold uppercase tracking-wide gap-y-1">
              <p className="break-words line-clamp-2">
                <span className="opacity-70">Alamat:</span> {profile ? formatString(profile.alamat) : "Alamat"}
              </p>
              <p className="break-all line-clamp-2">
                <span className="opacity-70">Email:</span> {profile ? formatString(profile.email) : "Email"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
