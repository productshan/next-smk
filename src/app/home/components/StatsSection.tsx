import { engineer, teacher, teamwork } from "@/assets";
import Image from "next/image";
import React from "react";

const stats = [
    {
        icon: engineer,
        label: "Program Keahlian",
        value: "5",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: teamwork,
        label: "Partner Industri",
        value: "17",
        color: "from-emerald-500 to-teal-600",
    },
    {
        icon: teacher,
        label: "Tenaga Pendidik",
        value: "28",
        color: "from-amber-500 to-orange-600",
    },
];

export default function StatsSection() {
    return (
        <div className="relative z-20 w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto -mt-20 lg:-mt-24 px-4 lg:px-0 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="group relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white hover:border-secondary-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>

                        <div className="relative flex items-center gap-6">
                            <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                                <Image src={stat.icon} alt={stat.label} className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl lg:text-5xl font-black text-primary-300 leading-none">
                                    {stat.value}
                                </span>
                                <span className="text-gray-500 font-bold text-sm lg:text-base mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
