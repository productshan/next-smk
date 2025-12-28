import React from "react";
import PointContainer from "../components/pointContainer";
import JurusanHero from "../components/JurusanHero";

const points = [
  {
    text: "Menjadwalkan guru tamu sesuai dengan konsentrasi keahlian Teknik Instalasi Tenaga Listrik setiap satu semester"
  },
  {
    text: "Menjalin kerjasama dengan sekitar tiga DUDIKA di bidang Teknik Instalasi Tenaga Listrik dalam waktu dua tahun"
  },
  {
    text: "Menghasilkan lulusan yang siap berkontribusi di bidang Teknik Instalasi Tenaga Listrik dalam jangka waktu tiga tahun"
  },
  {
    text: "Melakukan kunjungan ke instansi ataupun DUDIKA pada waktu tertentu sebagai awal mengenalkan prospek kerja di bidang Teknik Instalasi Tenaga Listri kepada peserta didik selama satu tahun"
  },
  {
    text: "Meningkatkan citra sekolah dan minat masyarakat dan calon peserta didik dengan banyak diserapnya lulusan Teknik Instalasi Tenaga Listrik di DUDIKA"
  },
  {
    text: "Membekali peserta didik dengan hardskill dan softskill setiap semester"
  }
];

export default function Page() {
  return (
    <div className="w-full flex flex-col space-y-12 pb-12">
      <JurusanHero
        title="Teknik Instalasi Tenaga Listrik"
        subtitle="Melahirkan teknisi kelistrikan yang kompeten dalam perencanaan, pemasangan, dan pemeliharaan instalasi tenaga listrik."
        themeColor="yellow"
      />


      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-4 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Tentang Konsentrasi Keahlian
        </h2>
        <p className="text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          Konsentrasi keahlian Teknik Instalasi Tenaga Listrik diselenggarakan untuk memenuhi kebutuhan akan teknisi di bidang kelistrikan yang kompeten dan masih
          sedikit sekali di Kabupaten Banyuasin. Jurusan ini membekali siswa terkait keahlian dan keterampilan terutama dalam masalah perencanaan dan pemasangan
          instalasi yang berhubungan dengan penerangan dan tenaga seperti pemasangan dan pengoperasian motor listrik dan kendali elektromekanik, elektronik dan
          PLC, perawatan dan perbaikan alat rumah tangga listrik dan teknik pendingin. Lulusan konsentrasi keahlian ini nantinya diharapkan mampu bekerja secara
          mandiri atau di dunia industri sebagai tenaga kerja tingkat menengah. Mengingat perkembangan industri sekarang ini sangat berhubungan dengan peralatan
          dari listrik, maka hal ini bisa menjadi peluang yang sangat menjanjikan untuk lulusan jurusan ini. Apalagi sarana dan prasarana saat ini sedang
          dikembangkan untuk lebih ke arah penggunaan energi listrik yang lebih ramah lingkungan.
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

