import React from "react";
import NewsItem from "../components/newsItem";

export default function Page() {
  return (
    <div>
      <b className="text-2xl font-semibold text-gray">Berita Sekolah</b>
      <div className="flex flex-grow grid grid-cols-2 gap-4">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
}
