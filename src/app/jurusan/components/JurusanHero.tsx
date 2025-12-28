import React from "react";

interface JurusanHeroProps {
    title: string;
    subtitle?: string;
    themeColor?: "blue" | "red" | "yellow" | "green" | "purple";
}

export default function JurusanHero({ title, subtitle, themeColor = "blue" }: JurusanHeroProps) {
    const themes = {
        blue: "from-blue-600 via-blue-700 to-indigo-800",
        red: "from-red-600 via-red-700 to-orange-800",
        yellow: "from-amber-500 via-amber-600 to-yellow-700",
        green: "from-emerald-600 via-emerald-700 to-teal-800",
        purple: "from-indigo-600 via-purple-700 to-indigo-800",
    };

    const accents = {
        blue: "bg-blue-400/20",
        red: "bg-red-400/20",
        yellow: "bg-amber-400/20",
        green: "bg-emerald-400/20",
        purple: "bg-indigo-400/20",
    };

    return (
        <div className={`relative w-full rounded-2xl overflow-hidden mb-8 shadow-xl bg-gradient-to-br ${themes[themeColor]}`}>
            {/* Decorative elements */}
            <div className={`absolute top-0 right-0 w-64 h-64 ${accents[themeColor]} rounded-full -mr-20 -mt-20 blur-3xl opacity-50`}></div>
            <div className={`absolute bottom-0 right-0 w-48 h-48 ${accents[themeColor]} rounded-full -mr-10 -mb-10 blur-2xl opacity-50`}></div>

            <div className="relative z-20 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
                    Program Keahlian
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl drop-shadow-sm">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-medium">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}

