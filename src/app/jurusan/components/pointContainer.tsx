import React from "react";

export default function PointContainer({ number, text }: { number: number; text: string }) {
  return (
    <div className="group w-full p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100/50 flex items-center justify-center mr-6 mb-4 sm:mb-0 group-hover:bg-primary-300 transition-colors duration-300">
        <span className="text-xl font-bold text-primary-300 group-hover:text-white transition-colors duration-300">
          {number < 10 ? `0${number}` : number}
        </span>
      </div>
      <p className="text-gray-700 font-medium leading-relaxed sm:text-base">
        {text ? text : "Loading content..."}
      </p>
    </div>
  );
}

