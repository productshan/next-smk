import employee from "@/data/employee";
import React from "react";
import Card from "../components/card";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ type: "guru" }, { type: "staff" }];
}

export default function Index({ params }: { params: any }) {
  const { type } = params;
  var isNotFound = type === "guru" ? false : type === "staff" ? false : true;

  if (isNotFound) {
    return notFound();
  }

  return (
    <div className="w-full">
      <p className="text-center text-2xl my-4 font-semibold">{`Daftar ${
        type === "guru" ? "Guru" : "Tenaga Pendidik"
      } SMK Negeri 1 Banyuasin III Tahun 2023/2024`}</p>
      <div className="flex grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        {employee.map((profiles, key) => {
          if (profiles.status === type) {
            return (
              <div key={key} className="w-full h-full flex items-center justify-center">
                <Card profile={profiles} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
