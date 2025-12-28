import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProfileHeroProps {
    title: string;
    subtitle?: string;
    bgImage?: StaticImageData;
}

export default function ProfileHero({ title, subtitle, bgImage }: ProfileHeroProps) {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-xl bg-primary-300 min-h-[300px] flex items-center">
            {/* Background Image with Overlay */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-300 via-primary-300/80 to-transparent"></div>
                </div>
            )}

            {!bgImage && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300 via-primary-300 to-indigo-900 z-0"></div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl opacity-50 z-10"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary-500/10 rounded-full -mr-10 -mb-10 blur-2xl opacity-50 z-10"></div>

            <div className="relative z-20 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-secondary-500 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                    Tentang Sekolah
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl drop-shadow-sm">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-medium drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}

