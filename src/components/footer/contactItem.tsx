import { footer_icon_24 } from "@/assets";
import Image from "next/image";
import React from "react";

export default function ContactItem({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex w-full flex-row items-start justify-start group">
      <div className="flex-shrink-0 w-5 mt-1">
        <i className={`fa ${icon ? icon : "fa-phone"} text-secondary-500 text-sm transition-transform duration-300 group-hover:scale-110`}></i>
      </div>
      <p className="ml-3 text-gray-300 text-sm leading-snug hover:text-white transition-colors duration-200">
        {text ? text : "default"}
      </p>
    </div>
  );
}


