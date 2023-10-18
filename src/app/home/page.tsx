import {
  berakhlak,
  carousel_banner,
  merdeka_belajar,
  news_picture_home,
  news_picture_home_item,
  profile_home,
  smk_bisa_hebat,
  vokasi_indonesia
} from "@/assets";
import Image from "next/image";
import React from "react";
import NewsItem from "./newsItem";
export default function PageHome() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="bg-home-info">
        <div className="flex w-3/5 mx-auto h-full flex-col">
          <div className="flex flex-col mt-8 w-full">
            <b className="mx-auto text-white mt-4 text-4xl uppercase">SMK Negeri 1 Banyuasin III</b>
          </div>
          <div className="flex flex-grow flex-col items-center justify-center">
            <div className="flex w-full p-4 border-8 border-white flex-row justify-around items-center">
              <div className="flex w-fit h-fit flex-row">
                <div className="w-[72px] h-[108px] bg-white" />
                <div className="flex flex-col justify-between ml-2">
                  <p className="text-white font-semibold text-sm">Program Keahlian</p>
                  <b className="text-white font-bold text-8xl">5</b>
                </div>
              </div>
              <div className="flex w-fit h-fit flex-row">
                <div className="w-[72px] h-[108px] bg-white" />
                <div className="flex flex-col justify-between ml-2">
                  <p className="text-white font-semibold text-sm">Partner</p>
                  <b className="text-white font-bold text-8xl">17</b>
                </div>
              </div>
              <div className="flex w-fit h-fit flex-row">
                <div className="w-[72px] h-[108px] bg-white" />
                <div className="flex flex-col justify-between ml-2">
                  <p className="text-white font-semibold text-sm">Siswa</p>
                  <b className="text-white font-bold text-8xl">112</b>
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
      <div className="page-wrapper">
        <div className="flex grid grid-cols-2 gap-8">
          <div className="rounded-md flex-grow">
            <b className="text-3xl font-bold text-black">Selamat Datang di SMK N1 BA III</b>
            <p className="mt-4 text-black text-sm leading-relaxed">
              SMK Negeri 1 Banyuasin III terletak 13 KM dari ibu kota Kabupaten Banyuasin, berada di Jalan Sahri Mahasir, Desa Galang Tinggi Kecamatan Banyuasin
              III. SMK Negeri 1 Banyuasin III didirikan pada tahun 2014 di atas lahan seluas 1.5210 M². Perkebunan karet, sawah dan sungai merupakan sumber daya
              alam yang menjadi sumber mata pencaharian sebagian besar masyarakat di sekitar SMK Negeri 1 Banyuasin III. Potensi UMKM dari desa-desa sekitar
              sangat banyak namun belum cukup berkembang. Melalui program SMK Membangun Desa, SMKN 1 Banyuasin III mencoba merangkul potensi masyarakat tersebut
              dengan membantu mempromosikan produk-produk hasil kerajinan dan pangan yang dihasilkan oleh masyarakat pada kegiatan-kegiatan pameran dan
              marketplace.
            </p>
          </div>
          <div className="flex flex-col rounded-md flex-grow">
            <b className="text-3xl text-black">Sambutan Kepala Sekolah</b>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <p className="text-black text-sm leading-relaxed">
                Kami sampaikan termakasih kepada orang tua yang telah mempercayakan anak-nya untuk menempuh pendidikan di SMK Negeri 1 Banyuasin III. Kami
                berkomitmen untuk terus berkembang dan menjadi yang terbaik sehingga bisa menjaga kepercayaan orang tua untuk memilih SMK Negeri 1 Banyuasin III
                sebagai lembaga pendidikan nomor satu bagi putra-putri anda.
              </p>
              <div className="justify-center items-center bg-locate w-[256px] h-[256px]">
                <Image src={profile_home} alt="profile-home" className="w-[256px] h-[256px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row w-full justify-between items-center">
            <b className="text-4xl">Informasi Terkini</b>
            <div className="flex flex-row">
              <b className="mr-4 hover:cursor-pointer">Berita</b>
              <b className="hover:cursor-pointer">Prestasi</b>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="group/news w-[512px] h-[512px] flex bg-locate items-center justify-center overflow-hidden hover:cursor-pointer">
                <Image
                  alt="news-picture"
                  src={news_picture_home}
                  className="scale-[1.25] w-[512px] h-[512px] group-hover/news:scale-[1.5] ease-in duration-500"
                />
                <div className="z-100 w-[512px] h-[512px] absolute">
                  <div className="left-8 bottom-8 absolute">
                    <p>28 September 2023</p>
                    <b className="text-xl">Lorem ipsum dolor sit amet.</b>
                  </div>
                </div>
              </div>
              <div className="h-[512px] overflow-hidden flex grid grid-row-1 gap-2 news-items-scrollbar hover:overflow-y-scroll">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
