"use client";
import { Novita, berakhlak, carousel_banner, engineer, merdeka_belajar, smk_bisa_hebat, teacher, teamwork, vokasi_indonesia } from "@/assets";
import { NewsItem } from "@/components";
import news from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageHome() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Star Section Home Header */}
      <Image src={carousel_banner} alt="carousel" className="sm:hidden" />
      <div className="hidden bg-home-info sm:block">
        <div className="flex w-3/5 mx-auto h-full flex-col">
          <div className="flex flex-col mt-8 w-full">
            <b className="mx-auto text-white mt-4 text-4xl uppercase">SMK Negeri 1 Banyuasin III</b>
          </div>
          <div className="hidden sm:flex flex-grow flex-col items-center justify-center">
            <div className="flex w-full p-4 border-8 border-white flex-row justify-around items-center">
              <div className="flex w-fit h-fit flex-row">
                <Image src={engineer} alt="carousel-icon" className="w-auto h-[108px]" />
                <div className="flex flex-col justify-between ml-2">
                  <p className="text-white font-semibold text-xs xl:text-sm">Program Keahlian</p>
                  <b className="text-white font-bold text-8xl">5</b>
                </div>
              </div>
              <div className="flex w-fit h-fit flex-row">
                <Image src={teamwork} alt="carousel-icon" className="w-auto h-[108px]" />
                <div className="flex flex-col justify-between ml-2">
                  <p className="text-white font-semibold text-xs xl:text-sm">Partner</p>
                  <b className="text-white font-bold text-8xl">17</b>
                </div>
              </div>
              <div className="flex w-fit h-fit flex-row">
                <Image src={teacher} alt="carousel-icon" className="w-auto h-[108px]" />
                <div className="flex flex-col justify-between ml-2">
                  <p className="text-white font-semibold text-xs xl:text-sm">Pegawai</p>
                  <b className="text-white font-bold text-8xl">28</b>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-around p-4 mb-2 bg-075-white h-fit">
              <Image src={merdeka_belajar} alt="icon" className="h-[64px] w-auto" />
              <Image src={vokasi_indonesia} alt="icon" className="h-[64px] w-auto" />
              <Image src={berakhlak} alt="icon" className="h-[64px] w-auto" />
              <Image src={smk_bisa_hebat} alt="icon" className="h-[64px] w-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* End Seciton Home Header */}
      <div className="mobile-wrapper w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] sm:page-wrapper">
        <div className="flex grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="rounded-md flex-grow">
            <b className="text-2xl sm:text-3xl font-bold text-black">Selamat Datang di SMK N1 BA III</b>
            <p className="mt-2 sm:mt-4 text-black text-sm leading-relaxed text-justify">
              SMK Negeri 1 Banyuasin III terletak 13 KM dari ibu kota Kabupaten Banyuasin, berada di Jalan Sahri Mahasir, Desa Galang Tinggi Kecamatan Banyuasin
              III. SMK Negeri 1 Banyuasin III didirikan pada tahun 2014 di atas lahan seluas 1.5210 M². Perkebunan karet, sawah dan sungai merupakan sumber daya
              alam yang menjadi sumber mata pencaharian sebagian besar masyarakat di sekitar SMK Negeri 1 Banyuasin III. Potensi UMKM dari desa-desa sekitar
              sangat banyak namun belum cukup berkembang. Melalui program SMK Membangun Desa, SMKN 1 Banyuasin III mencoba merangkul potensi masyarakat tersebut
              dengan membantu mempromosikan produk-produk hasil kerajinan dan pangan yang dihasilkan oleh masyarakat pada kegiatan-kegiatan pameran dan
              marketplace.
            </p>
          </div>
          <div className="flex flex-col rounded-md flex-grow">
            <b className="text-2xl sm:text-3xl text-black">Sambutan Kepala Sekolah</b>
            <div className="mt-2 sm:mt-4 sm:grid-cols-2 gap-2">
              <div className="w-[96px] sm:w-[128px] h-fit bg-white rounded-md shadow-lg float-right ml-4">
                <Image src={Novita} alt="profile-home" className="w-full h-auto" />
                <p className="text-sm text-center">Novita Sari</p>
                <p className="text-xs text-center font-bold">Kepala SMK N 1</p>
              </div>
              <p className="text-black text-sm leading-relaxed text-justify">
                Kami sampaikan termakasih kepada orang tua yang telah mempercayakan anak-nya untuk menempuh pendidikan di SMK Negeri 1 Banyuasin III. Kami
                berkomitmen untuk terus berkembang dan menjadi yang terbaik sehingga bisa menjaga kepercayaan orang tua untuk memilih SMK Negeri 1 Banyuasin III
                sebagai lembaga pendidikan nomor satu bagi putra-putri anda.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row w-full justify-between items-center">
            <b className="text-2xl sm:text-3xl">Informasi Terkini</b>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="relative max-h-[512px] shadow group/news w-full h-auto bg-locate overflow-hidden hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
                <Link href={`/informasi/show/${encodeURIComponent(news[0].id)}`}>
                  <Image fill alt="news-picture" src={news[0].image.headline.link} />
                  <div className="bottom-4 p-2 bg-05-primary-300 absolute">
                    <p className="text-white font-semibold">{news[0].date}</p>
                    <b className="text-xl text-white news-desc-overflow">{news[0].title}</b>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden max-h-[512px] flex grid grid-row-1 gap-2 news-items-scrollbar hover:overflow-y-scroll">
                {news.map((news, key) => {
                  if (key >= 1 && key < 6) {
                    return (
                      <div key={key}>
                        <NewsItem news={news} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
