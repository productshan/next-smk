import React from "react";
import PointContainer from "../components/pointContainer";
import JurusanHero from "../components/JurusanHero";

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
    <div className="w-full flex flex-col space-y-12 pb-12">
      <JurusanHero
        title="Teknik Komputer dan Jaringan"
        subtitle="Membangun masa depan melalui penguasaan teknologi infrastruktur jaringan dan komputasi di era digital."
        themeColor="blue"
      />


      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-4 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Tentang Konsentrasi Keahlian
        </h2>
        <p className="text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          Konsentrasi keahlian Teknik Komputer dan Jaringan diselenggarakan untuk memenuhi tuntutan zaman. Komputer dan internet telah menjadi bagian tak
          terpisahkan di era digital ini. Konsentrasi keahlian Teknik Komputer dan Jaringan membekali peserta didik agar mampu melakukan instalasi jaringan
          komputer dalam rumah/kantor, antar kantor, antar kota, antar provinsi bahkan antar negara. Dengan dukungan fasilitas belajar dan dukungan ruang praktik
          yang memadai dan berstandar industri (PT. Telkom Indonesia), diharapkan konsentrasi keahlian ini mampu melahirkan tenaga-tenaga profesional di bidang
          Teknik Komputer dan Jaringan akan sangat dibutuhkan di masa sekarang dan akan datang.
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

