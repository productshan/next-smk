"use client";
import React from "react";
interface Card {
    date?: Date;
    label: string;
    count?: number;
    more?: () => void;
}

function Card(props: Card) {
    return (
        <div className="rounded-md flex gap-4 flex-col p-2 odd:bg-blue-200 even:bg-yellow-200 flex-1 min-w-[10rem] min-h-20 hover:-translate-y-1 ease-in-out duration-300">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-xs bg-slate-100 rounded-full p-1">2024/05/01</p>
                <div onClick={props.more}>
                    <img src="./more.png" className="w-4 h-4 hover:cursor-pointer" alt="" />
                </div>
            </div>
            <h1 className="font-semibold text-gray-700">1.100</h1>
            <h3 className="font-bold text-gray-500 text-sm">{props.label}</h3>
        </div>
    );
}

export default Card;
