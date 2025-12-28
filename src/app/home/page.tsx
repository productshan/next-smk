import { Novita } from "@/assets";
import { NewsItem } from "@/components";
import { fetchData } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeHero from "./components/HomeHero";
import StatsSection from "./components/StatsSection";
import BrandSection from "./components/BrandSection";

export default async function PageHome() {
  const rawData = await fetchData("https://admin.smkn1ba3.sch.id/api/front/news");
  const data = rawData.data || [];

  const getFirstImage = (gambar: string) => {
    try {
      const images = JSON.parse(gambar || "[]");
      if (images.length > 0) {
        return `https://admin.smkn1ba3.sch.id${images[0]}`;
      }
    } catch (e) {
      // fallback
    }
    return "/assets/images/placeholder.jpg";
  };

  const mainNews = data[0];

  return (
    <div className="flex flex-col w-full bg-gray-50/50">
      {/* Hero Section */}
      <HomeHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Brand Section */}
      <BrandSection />

      {/* Main Content Area */}
      <div id="about" className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto px-4 lg:px-0 space-y-24 mb-24">

        {/* Welcome & Greeting Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Welcome Text */}
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-4xl font-black text-primary-300 mb-6 flex flex-col">
              <span className="text-secondary-500 text-sm uppercase tracking-widest mb-2 font-bold">Selamat Datang</span>
              SMK Negeri 1 Banyuasin III
            </h2>
            <div className="space-y-4 text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
              <p>
                Terletak strategis di Desa Galang Tinggi, SMKN 1 Banyuasin III hadir sebagai pilar pendidikan vokasi yang berkomitmen membangun masa depan bangsa melalui integrasi pendidikan dan pemberdayaan masyarakat desa.
              </p>
              <p>
                Lahan seluas 15.210 m² bukan sekadar fasilitas fisik, melainkan wahana inovasi bagi siswa untuk mengeksplorasi potensi daerah. Melalui program <strong>SMK Membangun Desa</strong>, kami aktif mempromosikan produk lokal dan mendorong pertumbuhan UMKM di sekitar sekolah.
              </p>
            </div>
            <Link
              href="/profile"
              className="mt-8 text-primary-300 font-bold flex items-center group gap-2 hover:text-secondary-500 transition-colors"
            >
              Baca Selengkapnya
              <span className="w-8 h-8 rounded-full bg-primary-100/20 flex items-center justify-center group-hover:bg-secondary-500 group-hover:text-white transition-all transform group-hover:translate-x-1">
                <i className="fa fa-arrow-right"></i>
              </span>
            </Link>
          </div>

          {/* Principal Greeting */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary-300 rounded-[2.5rem] transform rotate-3 scale-95 opacity-5 group-hover:rotate-1 group-hover:scale-100 transition-all duration-500"></div>
            <div className="relative bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-50 relative z-10">
                    <Image src={Novita} alt="Novita Sari" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full mix-blend-multiply opacity-20 animate-pulse blur-xl"></div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-primary-300 mb-1">Sambutan Kepala Sekolah</h3>
                  <p className="text-secondary-600 font-bold text-sm uppercase tracking-tight mb-4">Novita Sari, S.T., M.Pd.</p>
                  <p className="text-gray-600 italic leading-relaxed text-sm lg:text-base mb-6">
                    "Kami berkomitmen untuk terus berkembang dan menjadi yang terbaik, menjaga kepercayaan orang tua dalam mendidik putra-putri menjadi insan mandiri dan profesional."
                  </p>
                  <div className="flex justify-center sm:justify-start">
                    <div className="w-12 h-1 bg-secondary-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4 border-b border-gray-100 pb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-primary-300 mb-2">Informasi Terkini</h2>
              <p className="text-gray-500 font-medium">Berita dan kegiatan terbaru dari civitas akademika</p>
            </div>
            <Link href="/informasi/list/berita" className="px-6 py-2 border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white rounded-xl font-bold transition-all duration-300 text-sm">
              Lihat Semua Berita
            </Link>
          </div>

          {data.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Highlighted News */}
              <div className="lg:col-span-12 xl:col-span-7">
                <Link href={`/informasi/show/${encodeURIComponent(mainNews.id)}`} className="group">
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image
                      fill
                      alt={mainNews.judul}
                      src={getFirstImage(mainNews.gambar)}
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-400 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest mb-4">
                        {new Date(mainNews.tanggal).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 line-clamp-2 leading-tight">
                        {mainNews.judul}
                      </h3>
                      <div className="flex items-center text-white/70 font-bold group-hover:text-secondary-500 transition-colors">
                        Baca Selengkapnya
                        <i className="fa fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Other News Items */}
              <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4 max-h-[500px] xl:max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {data.slice(1, 6).map((item: any, key: number) => (
                  <div key={key} className="flex-shrink-0">
                    <NewsItem news={item} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-gray-100">
              <p className="text-gray-500">Belum ada informasi terbaru saat ini.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

