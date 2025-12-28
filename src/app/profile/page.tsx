import { berakhlak, carousel_banner, merdeka_belajar, smk_bisa_hebat, vokasi_indonesia } from "@/assets";
import Image from "next/image";
import React from "react";
import ProfileHero from "./components/ProfileHero";

export default function PageProfile() {
  const logos = [
    { src: merdeka_belajar, alt: "Merdeka Belajar" },
    { src: vokasi_indonesia, alt: "Vokasi Indonesia" },
    { src: berakhlak, alt: "Berakhlak" },
    { src: smk_bisa_hebat, alt: "SMK Bisa Hebat" },
  ];

  return (
    <div className="w-full flex flex-col space-y-12">
      <ProfileHero
        title="SMK Negeri 1 Banyuasin III"
        subtitle="Mewujudkan lulusan yang kompeten, berkarakter, dan siap bersaing di era global melalui pendidikan vokasi berkualitas."
        bgImage={carousel_banner}
      />


      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-primary-300 mb-6 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Selayang Pandang
        </h2>
        <div className="space-y-6 text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          <p>
            SMKN 1 Banyuasin III saat ini memiliki 28 orang tenaga pendidik yang berdedikasi tinggi.
            Dari jajaran tersebut, 16 orang telah berstatus ASN (3 PNS dan 13 PPPK) serta 12 orang tenaga honorer.
            Seluruh tenaga pendidik kami memiliki kualifikasi pendidikan minimal Strata-1, menjamin kualitas pengajaran yang standar dan profesional.
          </p>
          <p>
            Selain itu, terdapat delapan orang tenaga kependidikan yang mendukung operasional sekolah.
            Hingga tahun pelajaran 2023/2024, SMKN 1 Banyuasin III mendidik 320 siswa yang tersebar di lima konsentrasi keahlian unggulan:
            Teknik Sepeda Motor, Teknik Komputer dan Jaringan, Manajemen Perkantoran, Teknik Instalasi Tenaga Listrik,
            serta Teknik Energi Surya, Hidro, dan Angin.
          </p>
          <p>
            Sebuah tonggak sejarah dicapai pada tahun 2023, di mana SMKN 1 Banyuasin III ditetapkan sebagai <strong>SMK Pusat Keunggulan</strong> melalui keputusan Dirjen Pendidikan Vokasi.
            Status ini memotivasi kami untuk terus menerapkan Kurikulum Merdeka yang inovatif dan berorientasi pada masa depan peserta didik.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-8 text-center uppercase tracking-widest">
          Sinergi & Komitmen
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0 transition-all">
              <Image src={logo.src} alt={logo.alt} className="h-16 sm:h-20 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

