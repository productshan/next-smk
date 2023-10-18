"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItem = [
  {
    title: "Teknik Instalasi Tenaga Listrik",
    path: "/jurusan/titl"
  },
  {
    title: "Teknik Sepeda Motor",
    path: "/jurusan/tbsm"
  },
  {
    title: "Teknik Komputer dan Jaringan",
    path: "/jurusan/tkj"
  },
  {
    title: "Manajemen Perkantoran",
    path: "/jurusan/otkp"
  },
  {
    title: "Teknik Energi Surya, Hidro dan Angin",
    path: "/jurusan/tebt"
  }
];
export default function SidebarContent() {
  const activePathname = usePathname();
  return (
    <div className="w-full shadow-lg rounded-md overflow-hidden">
      <div className="w-full bg-secondary-300 p-2 rounded-sm">
        <b className="text-white text-center text-lg">PROGRAM KEAHLIAN</b>
      </div>
      <div className="w-full bg-white p-2 rounded-sm">
        {navItem.map(({ path, title }, key) => {
          return (
            <div key={key} className={`w-full py-2 border-b-2 border-slate-100 ${key !== navItem.length - 1 ? "mb-2" : ""}`}>
              <Link href={path} className={`text-sm font-semibold ${activePathname === path ? "text-black" : "text-gray"} hover:text-black`}>
                {title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
