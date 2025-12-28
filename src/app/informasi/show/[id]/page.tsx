import { fetchData } from "@/helpers";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import parse from "html-react-parser";
import ImageCarousel from "../../components/imageCarousel";

export async function generateStaticParams() {
  try {
    const rawData = await fetchData("https://admin.smkn1ba3.sch.id/api/front/news");
    const news = rawData.data || [];
    return news.map((item: any) => ({
      id: item.id.toString()
    }));
  } catch (error) {
    console.error("Error fetching news for static params:", error);
    return [];
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  let usedContent = null;
  let listPhotos = [];

  try {
    const rawData = await fetchData("https://admin.smkn1ba3.sch.id/api/front/news");
    const news = rawData.data || [];
    usedContent = news.find((item: any) => item.id.toString() === id);
  } catch (error) {
    console.error("Error fetching news detail:", error);
  }

  if (!usedContent) {
    return notFound();
  }

  // Parse images
  try {
    listPhotos = JSON.parse(usedContent.gambar || "[]");
  } catch (e) {
    listPhotos = [];
  }

  // Map to full URLs
  listPhotos = listPhotos.map((path: string) => `https://admin.smkn1ba3.sch.id${path}`);
  const headlineImage = listPhotos.length > 0 ? listPhotos[0] : "/assets/images/placeholder.jpg";

  return (
    <div className="w-full bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 lg:px-0">

        {/* Header / Meta */}
        <div className="mb-6 space-y-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            Berita
          </span>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {usedContent.judul}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-1">
              <i className="fa fa-calendar-alt"></i>
              <span>
                {new Date(usedContent.tanggal).toLocaleDateString("id-ID", {
                  weekday: 'long',
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa fa-user-circle"></i>
              <span>{usedContent.penulis}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-lg mb-8 bg-gray-200">
          <Image
            src={headlineImage}
            alt={usedContent.judul}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed bg-white p-6 lg:p-10 rounded-2xl shadow-sm mb-8 space-y-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5">
          {parse(usedContent.konten)}
        </article>

        {/* Gallery Section */}
        {listPhotos.length > 0 && (
          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
              Galeri Foto ({listPhotos.length})
            </h3>
            <p className="text-gray-500 text-sm mb-4">Klik gambar untuk melihat dalam tampilan penuh.</p>
            <div className="rounded-xl overflow-hidden">
              <ImageCarousel listPhotos={listPhotos} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
