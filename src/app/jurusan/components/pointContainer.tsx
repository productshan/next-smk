import React from "react";

export default function PointContainer({ number, text, color }: { number: number; text: String; color: String }) {
  return (
    <div className="w-full flex flex-row p-2 bg-white rounded-md shadow-xl items-center">
      <div className={`min-w-[64px] min-h-[64px] ${color ? color : "bg-primary-100"} h-full rounded-md flex items-center justify-center mr-4`}>
        <b className="text-2xl text-white">{number ? number : 0}</b>
      </div>
      <p className="font-semibold text-lg text-black leading-loose">{text ? text : "Def"}</p>
    </div>
  );
}
