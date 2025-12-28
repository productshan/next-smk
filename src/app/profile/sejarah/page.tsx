import { berakhlak, carousel_banner, merdeka_belajar, smk_bisa_hebat, vokasi_indonesia } from "@/assets";
import Image from "next/image";
import React from "react";
import ProfileHero from "../components/ProfileHero";

export default function PageSejarah() {
  const logos = [
    { src: merdeka_belajar, alt: "Merdeka Belajar" },
    { src: vokasi_indonesia, alt: "Vokasi Indonesia" },
    { src: berakhlak, alt: "Berakhlak" },
    { src: smk_bisa_hebat, alt: "SMK Bisa Hebat" },
  ];

  return (
    <div className="w-full flex flex-col space-y-12">
      <ProfileHero
        title="Sejarah Perjalanan"
        subtitle="Menelusuri jejak langkah SMK Negeri 1 Banyuasin III dari awal berdiri hingga menjadi pusat keunggulan."
        bgImage={carousel_banner}
      />


      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-primary-300 mb-6 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Awal Berdiri
        </h2>
        <p className="text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          Sejak berdiri pada tahun 2014, SMKN 1 Banyuasin III terus berbenah baik secara fisik maupun non fisik.
          Komitmen kami terhadap kualitas pendidikan vokasi diwujudkan melalui Program Link and Match yang dicanangkan oleh Dirjen Vokasi.
          Hal ini memacu kami untuk menjalin kemitraan strategis dengan DUDIKA ternama seperti PT. Astra Honda Motor, PTBA, BMKG, PT. Telkom Indonesia,
          Multi Data Palembang, Schneider Electric, Politeknik Negeri Sriwijaya, dan Fasilkom UNSRI.
        </p>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-primary-300 mb-6 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Perkembangan Program
        </h2>
        <div className="space-y-6 text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          <p>
            Pada masa rintisan tahun 2014, sekolah kami memulai dengan tiga kompetensi keahlian: Teknik Komputer dan Jaringan,
            Administrasi Perkantoran, dan Teknik Sepeda Motor. Seiring waktu, kami terus beradaptasi dengan kebutuhan industri.
          </p>
          <p>
            Memasuki tahun pelajaran 2021/2022, SMKN 1 Banyuasin III melakukan terobosan dengan membuka dua program keahlian baru:
            Teknik Energi Terbarukan dan Teknik Ketenagalistrikan. Langkah ini diambil untuk menjawab tantangan krisis energi fosil
            dan memenuhi kebutuhan tenaga ahli kelistrikan yang masih minim di wilayah Kabupaten Banyuasin.
            Hal ini menjadikan kami pelopor pendidikan energi terbarukan di Sumatera Selatan.
          </p>
          <p>
            Kini, SMKN 1 Banyuasin III dengan bangga mengelola lima konsentrasi keahlian yang relevan dan futuristik,
            siap mencetak generasi muda yang mengisi pembangunan menuju Indonesia Emas 2045.
          </p>
        </div>
      </section>

      <section>
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

