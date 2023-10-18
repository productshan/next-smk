import React from "react";
import PointContainer from "../components/pointContainer";

const points = [
  { text: "Terjalinnya kerjasama dengan satu DUDIKA di bidang Teknik Komputer dan Jaringan yang memuat 8 link and match waktu tiga tahun" },
  { text: "Peserta didik dibekali dengan hard skill dan soft skill setiap semester" },
  { text: "Terlaksananya proses pembelajaran berbasis TIK dalam tiap semester" },
  { text: "Penjadwalan guru tamu sesuai dengan konsentrasi keahlian Teknik Komputer dan Jaringan setiap satu semester" },
  { text: "Menghasilkan lulusan yang siap berkontribusi di konsentrasi keahlian Teknik Komputer dan Jaringan dalam jangka waktu tiga tahun" },
  { text: "Meningkatnya citra sekolah melalui keterserapan lulusan oleh DUDIKA" }
];

export default function Page() {
  return (
    <div className="w-full mt-4 flex flex-col">
      <b className="text-left text-2xl text-black mb-4">Program Keahlian Teknik Komputer dan Jaringan</b>
      <p className="text-black leading-loose text-justify">
        Konsentrasi keahlian Teknik Komputer dan Jaringan diselenggarakan untuk memenuhi tuntutan zaman. Komputer dan internet telah menjadi bagian tak
        terpisahkan di era digital ini. Konsentrasi keahlian Teknik Komputer dan Jaringan membekali peserta didik agar mampu melakukan instalasi jaringan
        komputer dalam rumah/kantor, antar kantor, antar kota, antar provinsi bahkan antar negara. Dengan dukungan fasilitas belajar dan dukungan ruang praktik
        yang memadai dan berstandar industri (PT. Telkom Indonesia), diharapkan konsentrasi keahlian ini mampu melahirkan tenaga-tenaga profesional di bidang
        Teknik Komputer dan Jaringan akan sangat dibutuhkan di masa sekarang dan akan datang.
      </p>
      <b className="text-left text-2xl text-black my-4">Tujuan Konsentrasi Keahlian Teknik Jaringan dan Komputer</b>
      <div>
        {points.map((data, key) => {
          return (
            <div key={key} className={`${key === points.length - 1 ? "mb-8" : "mb-4"}`}>
              <PointContainer text={data.text} number={key + 1} color={`bg-random-color-${key + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
