import { footer_icon_24 } from "@/assets";
import Image from "next/image";
import React from "react";

export default function ContactItem({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <i className={`fa text-white fa-solid ${icon ? icon : "fa-phone"} w-auto`}></i>
      <p className="w-5/6 ml-4 text-white text-xs">{text ? text : "default"}</p>
    </div>
  );
}
