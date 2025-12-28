import { NewsItem } from "@/components";
import { fetchData } from "@/helpers";
import React from "react";

export async function generateStaticParams() {
  return [{ type: "berita" }, { type: "prestasi" }];
}

export default async function page({ params }: { params: { type: string } }) {
  const { type } = params;
  const pageTitle = type === "berita" ? "Berita Terbaru" : "Prestasi Siswa";
  const pageSubtitle = type === "berita" ? "Informasi terkini seputar kegiatan SMK N 1 Banyuasin III" : "Daftar prestasi membanggakan dari siswa-siswi kami";

  const rawData = await fetchData(
    "https://admin.smkn1ba3.sch.id/api/front/news"
  );

  let data = rawData.data || [];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Informasi Sekolah</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">{pageTitle}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">{pageSubtitle}</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((news: any, key: number) => {
            // Basic filtering if needed, though API returns all? 
            // Ideally api should support filtering by type if strict
            // For now just mapping all as per original logic
            return <NewsItem key={key} news={news} />;
          })}
        </div>

        {/* Empty State */}
        {data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Belum ada informasi yang tersedia saat ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
