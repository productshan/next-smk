import React from "react";
import PointContainer from "../components/pointContainer";
const points = [
  { text: "Peserta didik dibekali dengan hard skill dan soft skill setiap semester" },
  { text: "Terjalinnya kerjasama dengan satu DUDIKA di bidang Manajemen Perkantoran yang memuat 8 link and match dalam waktu tiga tahun" },
  { text: "Penjadwalan guru tamu dan alumni yang sudah bekerja sesuai dengan konsentrasi keahlian dalam lima belas kali pertemuan selama satu semester" },
  { text: "Menghasilkan lulusan yang siap berkontribusi pada konsentrasi keahlian Manajemen Perkantoran setiap tahun" },
  { text: "Meningkatnya citra sekolah melalui keterserapan lulusan oleh DUDIKA" }
];
export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <b className="text-left text-2xl text-black mb-4">Program Keahlian Manajemen Perkantoran</b>
      <p className="text-black leading-loose text-justify">
        Konsentrasi keahlian Manajemen Perkantoran bertujuan untuk membekali peserta didik karakter, sikap dan moral, etos kerja, pengetahuan, keterampilan, dan
        teknologi dengan lingkup cakupan Dasar-Dasar Manajemen Perkantoran, Teknologi Perkantoran, Korespondensi, Kearsipan, Otomatisasi Tata Kelola
        Kepegawaian, Otomatisasi Tata Kelola Keuangan, Otomatisasi Tata Kelola Sarana dan Prasarana, Otomatisasi Tata Kelola Humas dan Keprotokolan, dan Produk
        Kreatif dan Kewirausahaan. Lulusan konsentrasi keahlian ini diharapkan mampu menjadi insan profesional di bidang Manajemen Perkantoran yang memiliki
        kepribadian dan karakter industri
      </p>
      <b className="text-left text-2xl text-black my-4">Tujuan Konsentrasi Keahlian Manajemen Perkantoran</b>
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
