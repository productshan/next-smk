import Image from "next/image";
import React from "react";
import { carousel_banner, logo_smk } from "@/assets";
import ProfileHero from "../components/ProfileHero";
import PointContainer from "@/app/jurusan/components/pointContainer";

export default function PageVisiMisi() {
  const missions = [
    "Menambah kerjasama dengan DUDIKA yang kredibel",
    "Menyiapkan lulusan yang kompeten dan berkarakter",
    "Menyusun kurikulum operasional sekolah dan penyelarasan dengan DUDIKA",
    "Menyelenggarakan proses pembelajaran yang efektif, menyenangkan dan merdeka berbasis TIK dan kearifan lokal (local wisdom)",
    "Meningkatkan profesionalisme PTK yang berkarakter Pancasila",
    "Melaksanakan budaya kerja yang kondusif dengan manajemen berbasis data dan pelayanan prima",
    "Meningkatkan sarana prasarana berstandar DUDIKA untuk pembelajaran yang memerdekakan",
    "Melaksanakan asesmen yang berpusat pada peserta didik",
    "Mengelola keuangan yang akuntabel dan berbasis digital"
  ];

  const goals = [
    "Terjalinnya kerjasama dengan lima DUDIKA yang memuat 8 link and match dalam waktu tiga tahun",
    "Peserta didik dibekali dengan pengetahuan, keterampilan dan sikap profil pelajar Pancasila dalam tiga tahun",
    "Proses pembelajaran dilaksanakan secara efektif, menyenangkan, dan memerdekakan berbasis teknologi informasi dan komunikasi serta kearifan lokal dalam selama tiga tahun",
    "Pembiasaan praktik profil pelajar pancasila dalam proses pembelajaran sehari-hari",
    "Tersedianya sarana dan prasarana pembelajaran yang berstandar DUDIKA selama tiga tahun",
    "Proses asesmen dilaksanakan setiap akhir semester",
    "Keuangan sekolah dikelola secara akuntabel berbasis digital setiap tiga bulan",
    "Meningkatnya citra sekolah melalui keterserapan lulusan oleh DUDIKA dalam waktu satu tahun"
  ];

  return (
    <div className="w-full flex flex-col space-y-12">
      <ProfileHero
        title="Visi, Misi & Tujuan"
        subtitle="Komitmen luhur SMK Negeri 1 Banyuasin III dalam membentuk masa depan generasi bangsa."
        bgImage={carousel_banner}
      />


      {/* Vision Section */}
      <section className="relative overflow-hidden bg-primary-300 rounded-3xl p-8 sm:p-12 text-center shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <h2 className="text-secondary-500 font-bold uppercase tracking-widest text-sm mb-6">Visi Sekolah</h2>
        <p className="text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-4xl mx-auto italic">
          "Mencetak lulusan yang unggul di bidang IPTEK, cerdas dan berkarakter"
        </p>
      </section>

      {/* Logo Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <h2 className="text-xl font-bold text-primary-300 mb-8 flex items-center self-start">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Identitas Sekolah
        </h2>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary-100 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <Image src={logo_smk} alt="logo" className="relative w-48 sm:w-64 h-auto mx-auto drop-shadow-md transform group-hover:scale-105 transition-transform duration-500" />
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-8 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Misi Sekolah
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {missions.map((text, index) => (
            <PointContainer key={index} number={index + 1} text={text} />
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-8 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Tujuan Strategis
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {goals.map((text, index) => (
            <PointContainer key={index} number={index + 1} text={text} />
          ))}
        </div>
      </section>
    </div>
  );
}

