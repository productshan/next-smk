import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const dummyEvent = [
    {
        id: 1,
        title: "Lorem, ipsum dolor.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perferendis?",
        time: "07.00 - 07.30"
    },
    {
        id: 2,
        title: "Lorem, ipsum dolor.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perferendis?",
        time: "07.00 - 07.30"
    },
    {
        id: 3,
        title: "Lorem, ipsum dolor.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perferendis?",
        time: "07.00 - 07.30"
    }
];

function EventCalendar() {
    const [value, setValue] = useState<Value>(new Date());

    return (
        <div className="bg-white w-full p-4 2xl:p-2 rounded-md">
            <Calendar value={value} onChange={setValue} />
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Kegiatan</h1>
                    <span className="text-xs text-gray-400 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md ease-in-out duration-150">Lihat Semua</span>
                </div>
                {dummyEvent.map((event) => {
                    return (
                        <div className="flex flex-col p-6 w-full shadow-md rounded-md border-t-2 odd:border-t-purple-300 even:border-t-yellow-300 hover:-translate-y-1 ease-in-out duration-300">
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between w-full">
                                <h1 className="font-semibold text-black">{event.title}</h1>
                                <p className="text-sm text-gray-300">{event.time}</p>
                            </div>
                            <h2 className="text-base text-gray-500">{event.desc}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default EventCalendar;
