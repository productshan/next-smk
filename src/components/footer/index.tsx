import React from "react";
import ContactItem from "./contactItem";
import Image from "next/image";
import { footer_icon_48, icon_fb, icon_ig, icon_yt, logo_smk } from "@/assets";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-0 w-full bg-primary-300 pb-4">
      <div className="flex w-3/5 lg:w-[95%] xl:w-[80%] 2xl:w-[60%] mx-auto py-4 flex-col justify-between">
        <div className="w-full flex flex-grow grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Image src={logo_smk} alt="footer-icon" className="h-[120px] w-min m-auto" />
          <div className="flex w-full flex-col sm:col-span-2 items-center">
            <p className="text-base font-bold text-white">INFO KONTAK</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <ContactItem icon="fa-map" text="Jalan Sahri Mahasir, Desa Galang Tinggi Kecamatan Banyuasin III" />
              <ContactItem icon="fa-calendar" text="Senin - Jumat, Pukul 06:30 - 15:30" />
              <ContactItem icon="fa-phone" text="0822-2222-2222" />
              <ContactItem icon="fa-envelope" text="smkn1banyuasin3@gmail.com" />
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-base font-bold text-white">FOLLOW US ON:</p>
            <div className="grid w-full sm:w-auto grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <Link className="flex items-center flex-row" href={"https://www.youtube.com/@smkn1banyuasiniii159"} target="blank" rel="noopener noreferrer">
                <Image src={icon_yt} alt="footer-icon-48" className="w-[48px] sm:min-w-[64px] h-auto" />
                <p className="text-sm font-semibold text-white ml-4 sm:hidden">SMKN 1 BANYUASIN III</p>
              </Link>
              <Link className="flex items-center flex-row" href={"https://www.instagram.com/smkn1banyuasin3/"} target="blank" rel="noopener noreferrer">
                <Image src={icon_ig} alt="footer-icon-48" className="w-[48px] sm:min-w-[64px] h-auto" />
                <p className="text-sm font-semibold text-white ml-4 sm:hidden">@smkn1banyuasin3</p>
              </Link>
              <Link
                className="flex items-center flex-row"
                href={"https://www.facebook.com/people/Smknsatu-Banyuasintiga/pfbid0YrRU271PtYwy7GVMLzvS6vZiUboU2aEyDo687DcwDFHbxNKsdC2ySKywKqUJKELvl/"}
                target="blank"
                rel="noopener noreferrer"
              >
                <Image src={icon_fb} alt="footer-icon-48" className="w-[48px] sm:min-w-[64px] h-auto" />
                <p className="text-sm font-semibold text-white ml-4 sm:hidden">Smknsatu Banyuasintiga</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 lg:w-[95%] xl:w-[80%] 2xl:w-[60%] mx-auto h-[1px] bg-white mb-2" />
      <p className="text-xs text-gray text-center">
        Copyright © 2023 All Right Reserved. <b>SANS TECH</b>
      </p>
    </div>
  );
}
