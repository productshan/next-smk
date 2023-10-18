import React from "react";
import ContactItem from "./contactItem";
import Image from "next/image";
import { footer_icon, footer_icon_48, logo_smk } from "@/assets";

export default function Footer() {
  return (
    <div className="bottom-0 w-full bg-primary-300">
      <div className="flex w-3/5 mx-auto py-8 flex-col justify-between">
        <div className="flex flex-row justify-between">
          <div className="w-[180px] h-[120px] flex justify-center items-center">
            <Image src={logo_smk} alt="footer-icon" className="h-[120px] w-auto" />
          </div>
          <div className="flex flex-grow flex-col items-center">
            <p className="text-base font-bold text-white">INFO KONTAK</p>
            <div className="flex w-5/6 h-full grid grid-cols-2 gap-4 mt-2">
              <ContactItem icon="fa-map" text="Jalan Sahri Mahasir, Desa Galang Tinggi Kecamatan Banyuasin III" />
              <ContactItem icon="fa-calendar" text="Senin - Jumat, Pukul 06:30 - 15:30" />
              <ContactItem icon="fa-phone" text="0822-2222-2222" />
              <ContactItem icon="fa-envelope" text="smkn1banyuasin3@gmail.com" />
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-base font-bold text-white">FOLLOW US ON:</p>
            <div className="flex flex-row mt-2 justify-between flex-grow items-center">
              <div className="w-[48px] h-[48px] bg-blue-500 flex justify-center items-center mx-2">
                <Image src={footer_icon_48} alt="footer-icon-48" />
              </div>
              <div className="w-[48px] h-[48px] bg-blue-500 flex justify-center items-center mx-2">
                <Image src={footer_icon_48} alt="footer-icon-48" />
              </div>
              <div className="w-[48px] h-[48px] bg-blue-500 flex justify-center items-center mx-2">
                <Image src={footer_icon_48} alt="footer-icon-48" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white my-4" />
        <p className="text-xs text-gray m-auto">
          Copyright © 2023 All Right Reserved. <b>SANS TECH</b>
        </p>
      </div>
    </div>
  );
}
