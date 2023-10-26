import React from "react";

export default function PointContainer({ number, text, color }: { number: number; text: String; color: String }) {
  return (
    <div className="w-full p-2 bg-white rounded-md shadow-xl sm:flex sm:flex-row">
      <div
        className={`min-w-[48px] min-h-[48px] sm:min-w-[64px] sm:min-h-[64px] ${
          color ? color : "bg-primary-100"
        } h-full rounded-md flex items-center justify-center mr-4 float-left sm:float-none`}
      >
        <b className="text-2xl text-white">{number ? number : 0}</b>
      </div>
      <p className="font-semibold sm:text-lg text-black leading-loose">{text ? text : "Def"}</p>
    </div>
  );
}
