import { carousel_banner } from "@/assets";
import Image from "next/image";
import React from "react";

export default function HomeHero() {
    return (
        <div className="relative w-full min-h-[550px] lg:min-h-[700px] flex lg:items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={carousel_banner}
                    alt="SMKN 1 Banyuasin III"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Mobile Gradient (Bottom to Top) and Desktop Gradient (Left to Right) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-400 via-primary-400/60 to-transparent lg:bg-gradient-to-r lg:from-primary-400 lg:via-primary-400/80 lg:to-transparent"></div>
            </div>

            {/* Decorative Particles (Abstract) */}
            <div className="absolute top-20 right-[10%] w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
            <div className="absolute bottom-20 right-[20%] w-48 h-48 bg-primary-100/10 rounded-full blur-2xl animate-bounce duration-[5000ms] hidden lg:block"></div>

            {/* Content Container */}
            <div className="relative z-10 w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto px-4 lg:px-0 pt-10 lg:pt-0">
                <div className="max-w-3xl space-y-4 lg:space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 border border-secondary-500/30 text-secondary-500 text-[10px] sm:text-xs lg:text-sm font-bold tracking-[0.2em] lg:tracking-widest uppercase backdrop-blur-sm animate-fade-in shadow-sm">
                        Unggul di Bidang IPTEK, Cerdas & Berkarakter
                    </span>

                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.2] lg:leading-[1.1] drop-shadow-lg">
                        SMK Negeri 1 <br />
                        <span className="text-secondary-500 italic">Banyuasin III</span>
                    </h1>

                    <p className="text-white/90 text-base sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
                        Mencetak talenta digital dan ahli teknologi masa depan melalui pendidikan vokasi yang modern dan berorientasi industri.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                        <a
                            href="#about"
                            className="w-full sm:w-auto px-10 py-4 bg-secondary-500 hover:bg-secondary-600 text-primary-300 font-extrabold text-lg rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center uppercase tracking-wider"
                        >
                            Jelajahi Sekarang
                        </a>
                        <a
                            href="/profile"
                            className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:shadow-xl text-center"
                        >
                            Tentang Kami
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
