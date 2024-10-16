import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

function RadialChart() {
    const data = [
        {
            name: "Total",
            count: 175,
            fill: "white"
        },
        {
            name: "Perempuan",
            count: 75,
            fill: "#facc15"
        },
        {
            name: "Pria",
            count: 100,
            fill: "#60a5fa"
        }
    ];

    return (
        <div className="flex flex-col w-full h-full bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold text-black">Jumlah Siswa</h1>
                <img src="./moreDark.png" className="w-4 h-4 hover:cursor-pointer" alt="" />
            </div>
            <div className="relative w-full flex-grow">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={35} data={data}>
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <img src="./maleFemale.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-auto" />
            </div>
            <div className="flex gap-16 justify-center h-fit">
                <div className="flex flex-col gap-1 items-center">
                    <div className="bg-blue-400 rounded-full w-5 h-5"></div>
                    <h1 className="font-bold">100</h1>
                    <h2 className="text-sm text-gray-400">Pria</h2>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div className="bg-yellow-400 rounded-full w-5 h-5"></div>
                    <h1 className="font-bold">75</h1>
                    <h2 className="text-sm text-gray-400">Wanita</h2>
                </div>
            </div>
        </div>
    );
}

export default RadialChart;
