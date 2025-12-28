import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Index({ news }: { news: any }) {
  let imgStr = "[]";
  try {
    imgStr = news.gambar || "[]";
  } catch (e) {
    imgStr = "[]";
  }

  let images = [];
  try {
    images = JSON.parse(imgStr);
  } catch (e) {
    images = [];
  }

  const firstImage = images.length > 0 ? images[0] : null;
  const imageUrl = firstImage ? `https://admin.smkn1ba3.sch.id${firstImage}` : "/assets/images/placeholder.jpg";

  return (
    <Link href={`/informasi/show/${encodeURIComponent(news.id)}`} className="group">
      <div className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 group-hover:-translate-y-1">

        {/* Image Container - Aspect Ratio 16:9 */}
        <div className="relative w-full pt-[56.25%] overflow-hidden bg-gray-200">
          <Image
            src={imageUrl}
            alt={news.judul}
            fill
            className="object-cover absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay gradient for text readability if needed, or date badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
            Berita
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
            <div className="flex items-center">
              <i className="fa fa-calendar-alt mr-1.5 text-blue-500"></i>
              <span>
                {new Date(news.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                })}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <div className="flex items-center">
              <i className="fa fa-user mr-1.5 text-blue-500"></i>
              <span className="truncate max-w-[100px]">{news.penulis}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
            {news.judul}
          </h3>

          {/* Optional: Short excerpt if available, or just keeping title focused */}

          <div className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
            Baca Selengkapnya
            <i className="fa fa-arrow-right ml-2"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
