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
    <div className="w-full bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
      <div className="w-full bg-primary-300 px-6 py-4">
        <h3 className="text-white font-bold text-sm uppercase tracking-wider">Program Keahlian</h3>
      </div>
      <div className="w-full p-2">
        {navItem.map(({ path, title }, key) => {
          const isActive = activePathname === path;
          return (
            <Link
              key={key}
              href={path}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${isActive
                  ? "bg-primary-100/30 text-primary-300"
                  : "text-gray-500 hover:bg-gray-50 hover:text-primary-300"
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-200 ${isActive ? "bg-secondary-500" : "bg-gray-200 group-hover:bg-primary-300"
                }`}></span>
              {title}
            </Link>
          );
        })}
      </div>
    </div>

  );
}
