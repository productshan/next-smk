import { berakhlak, carousel_banner, merdeka_belajar, smk_bisa_hebat, vokasi_indonesia } from "@/assets";
import Image from "next/image";
import React from "react";

export default function PageProfile() {
  return (
    <div className="page-wrapper flex flex-col">
      <div className="mt-4 w-full">
        <Image src={carousel_banner} alt="smkn1-baIII" />
      </div>
      <b className="text-black font-semibold text-4xl mt-4">Profile SMK Negeri 1 Banyuasin III</b>
      <p className="text-black text-lg mt-8 leading-loose text-justify">
        SMKN 1 Banyuasin III saat ini memiliki 29 orang tenaga pendidik. Dari 29 orang tersebut, 10 orang berstatus ASN terdiri dari tiga orang PNS dan tujuh
        orang PPPK, serta 19 orang tenaga honorer dengan kualifikasi pendidikan semuanya Strata-1. Tenaga kependidikan berjumlah delapan orang terdiri dari satu
        orang PNS dan tujuh orang tenaga honorer. Peserta didik pada tahun pelajaran 2023/2024 ini berjumlah 320 orang yang tersebar pada lima konsentrasi
        keahlian.
      </p>
      <p className="text-black text-lg mt-4 leading-loose text-justify">
        Pada tahun 2022, SMKN 1 Banyuasin III ditetapkan menjadi SMK Pusat Keunggulan Skema Lanjutan Sektor Energi dan Pertambangan sesuai dengan SK Dirjen
        Pendidikan Vokasi Nomor 29/D/O/2022. Proses pembelajaran menerapkan Kurikulum Merdeka yang berpusat pada kebutuhan peserta didik. Pembelajaran yang
        dilakukan harus memfasilitasi keragaman potensi, karakteristik, kebutuhan perkembangan dan tahapan belajar, serta kepentingan peserta didik. Untuk itu,
        diperlukan asesmen diagnostik. Sebagai langkah awal untuk mendiagnosis kebutuhan peserta didik tersebut, SMK Negeri 1 Banyuasin III menggunakan Asesmen
        Kebutuhan Peserta Didik. Hasil Asesmen Kebutuhan Peserta Didik ini dapat diklasifikasikan ke dalam tiga kategori, yaitu: tinggi, sedang, dan rendah
        seperti terlihat pada table berikut.
      </p>
      <div className="flex flex-grow flex-row justify-between items-center mt-16 mb-8">
        <Image src={merdeka_belajar} alt="icon" className="h-[96px] w-auto" />
        <Image src={vokasi_indonesia} alt="icon" className="h-[96px] w-auto" />
        <Image src={berakhlak} alt="icon" className="h-[96px] w-auto" />
        <Image src={smk_bisa_hebat} alt="icon" className="h-[96px] w-auto" />
      </div>
    </div>
  );
}
