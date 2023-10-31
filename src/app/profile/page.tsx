import { berakhlak, carousel_banner, merdeka_belajar, smk_bisa_hebat, vokasi_indonesia } from "@/assets";
import Image from "next/image";
import React from "react";

export default function PageProfile() {
  return (
    <div className="mobile-wrapper sm:page-wrapper w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%]">
      <div className="mt-4 w-full">
        <Image src={carousel_banner} alt="smkn1-baIII" />
      </div>
      <b className="text-black font-semibold text-2xl sm:text-4xl mt-4">Profile SMK Negeri 1 Banyuasin III</b>
      <p className="text-black sm:text-lg mt-4 sm:mt-8 leading-loose text-justify">
        SMKN 1 Banyuasin III saat ini memiliki 28 orang tenaga pendidik. Dari 28 orang tersebut, 16 orang berstatus ASN terdiri dari tiga orang PNS dan 13 orang
        PPPK, serta 12 orang tenaga honorer dengan kualifikasi pendidikan semuanya Strata-1. Tenaga kependidikan berjumlah delapan orang terdiri dari satu orang
        PNS dan tujuh orang tenaga honorer. Peserta didik pada tahun pelajaran 2023/2024 ini berjumlah 320 orang yang tersebar pada lima konsentrasi keahlian
        yaitu: Teknik Sepeda Motor, Teknik Komputer dan Jaringan, Manajemen Perkantoran, Teknik Instalasi Tenaga Listrik dan Teknik Energi Surya, Hidro dan
        Angin.
      </p>
      <p className="text-black sm:text-lg mt-4 sm:mt-8 leading-loose text-justify">
        Pada tahun 2023, SMKN 1 Banyuasin III ditetapkan menjadi SMK Pusat Keunggulan berdasarkan keputusan Dirjen Pendidikan Vokasi Kemdikbudristek No.
        29/D/DM/2021 tentang penetapan SMK Pelaksana Program SMK PK Tahun 2021 Tahap II. Proses pembelajaran menerapkan Kurikulum Merdeka yang berpusat pada
        kebutuhan peserta didik.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-16 mb-4 sm:mb-8">
        <Image src={merdeka_belajar} alt="icon" className="h-[72px] sm:h-[96px] w-auto m-auto" />
        <Image src={vokasi_indonesia} alt="icon" className="h-[72px] sm:h-[96px] w-auto m-auto" />
        <Image src={berakhlak} alt="icon" className="h-[72px] sm:h-[96px] w-auto m-auto" />
        <Image src={smk_bisa_hebat} alt="icon" className="h-[72px] sm:h-[96px] w-auto m-auto" />
      </div>
    </div>
  );
}
