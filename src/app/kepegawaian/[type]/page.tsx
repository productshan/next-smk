import React from "react";
import { notFound } from "next/navigation";
import { fetchData } from "@/helpers";
import Card from "../components/card";

export async function generateStaticParams() {
  return [{ type: "guru" }, { type: "staff" }];
}

interface Teacher {
  id: number;
  nama: string;
  alamat: string;
  email: string;
  jabatan: string;
  gambar: string;
  ponsel: string;
  createdAt: string;
  updatedAt: string;
}

export default async function Index({ params }: { params: { type: string } }) {
  const { type } = params;
  const isGuru = type === "guru";
  const isStaff = type === "staff";

  if (!isGuru && !isStaff) {
    return notFound();
  }

  const rawData: Teacher[] = await fetchData(
    "https://admin.smkn1ba3.sch.id/api/front/teachers"
  );

  const data = rawData
    .filter(
      (item) => item.jabatan.toLowerCase() === (isGuru ? "guru" : "staff")
    )
    .map((item) => ({
      ...item,
      picture: item.gambar
        ? `https://admin.smkn1ba3.sch.id/${item.gambar}`
        : null, // Prepend domain to image path
      posisi: item.jabatan, // Map 'jabatan' to 'posisi' for Card component
    }));

  const pageTitle = isGuru ? "Guru Pengajar" : "Tenaga Pendidik";
  const pageSubtitle = isGuru
    ? "Daftar guru yang berdedikasi mendidik siswa-siswi SMK N 1 Banyuasin III"
    : "Daftar staff dan tenaga kependidikan SMK N 1 Banyuasin III";

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Kepegawaian</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">{pageTitle}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">{pageSubtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.map((profile, key) => (
            <Card key={key} profile={profile} />
          ))}
        </div>

        {/* Empty State */}
        {data.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Data belum tersedia.
          </div>
        )}
      </div>
    </div>
  );
}
