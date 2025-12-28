import { berakhlak, merdeka_belajar, smk_bisa_hebat, vokasi_indonesia } from "@/assets";
import Image from "next/image";
import React from "react";

const logos = [
    { src: merdeka_belajar, alt: "Merdeka Belajar" },
    { src: vokasi_indonesia, alt: "Vokasi Indonesia" },
    { src: berakhlak, alt: "Berakhlak" },
    { src: smk_bisa_hebat, alt: "SMK Bisa Hebat" },
];

export default function BrandSection() {
    return (
        <div className="w-full py-12 bg-white/50 backdrop-blur-sm border-y border-gray-100 mb-16">
            <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto overflow-hidden px-4">
                <div className="flex items-center justify-center lg:justify-between gap-12 lg:gap-8 flex-wrap">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 transform hover:scale-110"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
