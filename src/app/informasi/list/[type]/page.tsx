import news from "@/data/news";
import { notFound } from "next/navigation";
import React from "react";
import NewsItem from "../../components/newsItem";

export async function generateStaticParams() {
  return [{ type: "berita" }, { type: "prestasi" }];
}

export default function page({ params }: { params: { type: String } }) {
  var type = params.type;

  var isNotFound = type === "berita" ? false : type === "prestasi" ? false : true;
  const pageTitle = type === "berita" ? "Informasi Berita SMK N 1  Banyuasin III" : "Informasi Prestasi SMK N 1 Banyuasin III";

  if (isNotFound) {
    return notFound();
  }
  return (
    <div>
      <div className="mb-4">
        <b className="text-base lg:text-xl">{pageTitle}</b>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {news.map((news, key) => {
          if (type === news.category) {
            return <NewsItem key={key} news={news} />;
          }
        })}
      </div>
    </div>
  );
}
