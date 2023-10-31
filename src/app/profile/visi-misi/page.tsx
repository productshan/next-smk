import Image from "next/image";
import React from "react";
import { logo_smk } from "@/assets";

const Point = ({ text }: { text: string }) => {
  return (
    <div className="my-2">
      <p className="text-md text-black">{text ? text : "def"}</p>
    </div>
  );
};

export default function PageVisiMisi() {
  return (
    <div className="mobile-wrapper sm:page-wrapper w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%]">
      <div className="my-4">
        <b className="text-black font-semibold text-xl">Logo Sekolah</b>
        <Image src={logo_smk} alt="logo" className="w-[70%] sm:w-[256px] h-auto mx-auto mb-4" />
      </div>
      <b className="text-black font-semibold text-xl">Visi Sekolah</b>
      <p className="text-black mt-4 text-center text-2xl sm:text-4xl font-bold">Mencetak lulusan yang unggul di bidang IPTEK, cerdas dan berkarakter</p>
      <b className="text-black font-semibold text-xl mt-5 sm:mt-10 mb-2 sm:mb-4">Misi Sekolah</b>
      <Point text="1. Menambah kerjasama dengan DUDIKA yang kredibel" />
      <Point text="2. Menyiapkan lulusan yang kompeten dan berkarakter" />
      <Point text="3. Menyusun kurikulum operasional sekolah  dan penyelarasan dengan DUDIKA" />
      <Point text="4. Menyelenggarakan proses pembelajaran yang efektif, menyenagkan dan merdeka berbasis TIK dan kearifan lokal (local wisdom)" />
      <Point text="5. Meningkatkan profesionalisme PTK yang berkarakter Pancasila" />
      <Point text="6. Melaksanakan  budaya kerja yang kondusif dengan manajemen berbasis data  dan pelayanan prima" />
      <Point text="7. Meningkatkan sarana prasarana berstandar DUDIKA untuk pembelajaran yang  memerdekakan" />
      <Point text="8. Melaksanakan asesmen yang berpusat pada peserta didik" />
      <Point text="9. Mengelola keuangan yang akuntabel dan berbasis digital" />
      <b className="text-black font-semibold text-xl mt-5 sm:mt-10 mb-2 sm:mb-4">Tujuan Sekolah</b>
      <Point text="1. Terjalinnya  kerjasama dengan lima DUDIKA  yang memuat 8 link and match dalam waktu tiga tahun" />
      <Point text="2. Peserta didik dibekali dengan pengetahuan, keterampilan dan sikap profil pelajar Pancasila dalam tiga tahun" />
      <Point text="3. Proses pembelajaran  dilaksanakan secara efektif, menyenangkan, dan memerdekakan berbasis teknologi informasi dan komunikasi serta kearifan lokal dalam selama tiga tahun" />
      <Point text="4. Pembiasaan praktik profil pelajar pancasila dalam proses pembelajaran sehari-hari" />
      <Point text="5. Tersedianya sarana dan prasarana pembelajaran yang berstandar DUDIKA selama tiga tahun" />
      <Point text="6. Proses  asesmen  dilaksanakan setiap akhir semester" />
      <Point text="7. Keuangan sekolah dikelola secara akuntabel berbasis digital setiap tiga bulan" />
      <Point text="8. Meningkatnya citra sekolah melalui keterserapan lulusan oleh DUDIKA dalam waktu satu tahun" />
    </div>
  );
}
