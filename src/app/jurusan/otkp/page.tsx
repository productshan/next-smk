import React from "react";
import PointContainer from "../components/pointContainer";
import JurusanHero from "../components/JurusanHero";

const points = [
  { text: "Peserta didik dibekali dengan hard skill dan soft skill setiap semester" },
  { text: "Terjalinnya kerjasama dengan satu DUDIKA di bidang Manajemen Perkantoran yang memuat 8 link and match dalam waktu tiga tahun" },
  { text: "Penjadwalan guru tamu dan alumni yang sudah bekerja sesuai dengan konsentrasi keahlian dalam lima belas kali pertemuan selama satu semester" },
  { text: "Menghasilkan lulusan yang siap berkontribusi pada konsentrasi keahlian Manajemen Perkantoran setiap tahun" },
  { text: "Meningkatnya citra sekolah melalui keterserapan lulusan oleh DUDIKA" }
];

export default function Page() {
  return (
    <div className="w-full flex flex-col space-y-12 pb-12">
      <JurusanHero
        title="Manajemen Perkantoran"
        subtitle="Melahirkan tenaga profesional yang ahli dalam tata kelola administrasi dan manajemen perkantoran modern."
        themeColor="purple"
      />


      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-4 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Tentang Konsentrasi Keahlian
        </h2>
        <p className="text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          Konsentrasi keahlian Manajemen Perkantoran bertujuan untuk membekali peserta didik karakter, sikap dan moral, etos kerja, pengetahuan, keterampilan, dan
          teknologi dengan lingkup cakupan Dasar-Dasar Manajemen Perkantoran, Teknologi Perkantoran, Korespondensi, Kearsipan, Otomatisasi Tata Kelola
          Kepegawaian, Otomatisasi Tata Kelola Keuangan, Otomatisasi Tata Kelola Sarana dan Prasarana, Otomatisasi Tata Kelola Humas dan Keprotokolan, dan Produk
          Kreatif dan Kewirausahaan. Lulusan konsentrasi keahlian ini diharapkan mampu menjadi insan profesional di bidang Manajemen Perkantoran yang memiliki
          kepribadian dan karakter industri.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-6 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Tujuan & Target Lulusan
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {points.map((data, key) => (
            <PointContainer key={key} text={data.text} number={key + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}

