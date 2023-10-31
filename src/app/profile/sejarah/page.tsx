import { berakhlak, merdeka_belajar, smk_bisa_hebat, vokasi_indonesia } from "@/assets";
import Image from "next/image";
import React from "react";

export default function PageSejarah() {
  return (
    <div className="w-[90%]  mobile-wrapper lg:w-[90%] xl:w-[80%] 2xl:w-[60%] sm:page-wrapper">
      <b className="text-black font-semibold text-2xl sm:text-4xl mt-4">Sejarah Awal</b>
      <p className="text-black sm:text-lg mt-2 sm:mt-4 leading-loose text-justify">
        Sejak berdiri pada tahun 2014, SMKN 1 Banyuasin III terus berbenah baik secara fisik maupun non fisik, termasuk dalam menjalin kerjasama dengan DUDIKA.
        Program Link and Match yang dicanangkan oleh Dirjen Vokasi terus memacu SMKN 1 Banyuasin III untuk terus meningkatkan kerjasama dengan DUDIKA yang
        selaras dengan Program Keahlian yang ada di SMKN 1 Banyuasin III, di antaranya dengan PT. Astra Honda Motor, PTBA, BMKG, PT. Telkom Indonesia, Multi
        Data Palembang, Schneider Electric, Politeknik Negeri Sriwijaya dan Fasilkom UNSRI.
      </p>

      <b className="text-black font-semibold text-2xl sm:text-4xl mt-4 sm:mt-8">Perkembangan Masa Awal</b>
      <p className="text-black sm:text-lg mt-2 sm:mt-4 leading-loose text-justify">
        Pada awal berdiri tahun 2014, SMKN 1 Banyuasin III memiliki 3 kompetensi keahlian, yaitu: Teknik Komputer dan Jaringan, Administrasi Perkantoran, dan
        Teknik Sepeda Motor. Pada tahun pelajaran 2021/2022, SMKN 1 Banyuasin III membuka 2 program keahlian baru, yaitu: Teknik Energi Terbarukan dan Teknik
        Ketenagalistrikan. Latar belakang penambahan dua program keahlian baru ini adalah: (1) kebutuhan akan tenaga kelistrikan yang masih minim di Kabupaten
        Banyuasin, terutama di Kecamatan Banyuasin III, (2) menjawab tantangan masa depan terkait krisis energi fosil. Dengan dibukanya kedua program keahlian
        baru ini, maka SMKN 1 Banyuasin III menjadi pelopor SMK yang membuka program keahlian Teknik Energi Terbarukan (di Sumatera Selatan) dan Teknik
        Ketenagalistrikan (di Kabupaten Banyuasin).
      </p>

      <b className="text-black font-semibold text-2xl sm:text-4xl mt-4 sm:mt-8">Perkembangan Masa Kini</b>
      <p className="text-black sm:text-lg mt-2 sm:mt-4 leading-loose text-justify">
        Jadi, saat ini, SMKN 1 Banyuasin III memiliki 5 program keahlian, yaitu: (1) Manajemen Perkantoran dan Layanan Bisnis dengan konsentrasi Manajemen
        Perkantoran, (2) Teknik Jaringan Komputer dan Telekomunikasi dengan konsentrasi keahlian Teknik Komputer dan Jaringan, (3) Teknik Otomotif dengan
        konsentrasi keahlian Teknik Sepeda Motor, (4) Teknik Ketenagalistrikan dengan konsentrasi keahlian Teknik Instalasi Tenaga Listrik, dan (5) Teknik
        Energi Terbarukan dengan konsentrasi keahlian Teknik Energi Surya, Hidro, dan Angin. Kelima konsentrasi keahlian ini, memiliki keunggulan masing-masing.
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
