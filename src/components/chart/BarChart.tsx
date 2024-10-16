import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function BarCharts() {
    const data = [
        {
            name: "Sen",
            hadir: 56,
            absent: 75
        },
        {
            name: "Sel",
            hadir: 56,
            absent: 75
        },
        {
            name: "Rab",
            hadir: 75,
            absent: 65
        },
        {
            name: "Kam",
            hadir: 56,
            absent: 71
        },
        {
            name: "Jum",
            hadir: 52,
            absent: 75
        }
    ];
    return (
        <div className="flex flex-col flex-1 rounded-lg bg-white p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold text-black">Kehadiran</h1>
                <img src="./moreDark.png" className="w-4 h-4 hover:cursor-pointer" alt="" />
            </div>
            <div className="w-full flex flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={300} data={data} barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} />
                        <Tooltip />
                        <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                        <Bar legendType="circle" dataKey="absent" fill="#facc15" radius={[10, 10, 0, 0]} />
                        <Bar legendType="circle" dataKey="hadir" fill="#60a5fa" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default BarCharts;
