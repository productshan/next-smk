"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
    {
        title: "Profil Singkat",
        path: "/profile"
    },
    {
        title: "Sejarah",
        path: "/profile/sejarah"
    },
    {
        title: "Visi, Misi dan Tujuan",
        path: "/profile/visi-misi"
    }
];

export default function ProfileSidebar() {
    const activePathname = usePathname();

    return (
        <div className="w-full bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
            <div className="w-full bg-primary-300 px-6 py-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Navigasi Profil</h3>
            </div>
            <div className="w-full p-2">
                {navItems.map(({ path, title }, key) => {
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
