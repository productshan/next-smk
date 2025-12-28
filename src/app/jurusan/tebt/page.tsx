import React from "react";
import PointContainer from "../components/pointContainer";
import JurusanHero from "../components/JurusanHero";

const points = [
  { text: "Peserta didik dibekali dengan hardskill dan softskill setiap semester" },
  { text: "Terjalinnya kerjasama dengan satu DUDIKA di bidang Teknik Energi Surya, Hidro dan Angin dalam waktu dua tahun" },
  { text: "Penjadwalan guru tamu sesuai dengan konsentrasi keahlian Teknik Energi Surya, Hidro dan Angin setiap semester" },
  {
    text: "Kunjungan ke instansi ataupun DUDIKA pada waktu tertentu sebagai awal mengenalkan prospek kerja di bidang Teknik Energi Surya, Hidro dan Angin kepada peserta didik selama satu tahun"
  },
  {
    text: "Meningkatnya citra sekolah dan minat masyarakat dan calon peserta didik dengan banyak diserapnya lulusan Teknik Energi Surya, Hidro dan Angin di DUDIKA"
  },
  { text: "Menghasilkan lulusan yang siap berkontribusi di bidang Teknik Energi Surya, Hidro dan Angin dalam jangka waktu tiga tahun" }
];

export default function Page() {
  return (
    <div className="w-full flex flex-col space-y-12 pb-12">
      <JurusanHero
        title="Teknik Energi Surya, Hidro dan Angin"
        subtitle="Mempelajari pemanfaatan energi terbarukan untuk masa depan yang lebih hijau dan berkelanjutan."
        themeColor="green"
      />


      <section>
        <h2 className="text-2xl font-bold text-primary-300 mb-4 flex items-center">
          <span className="w-8 h-[2px] bg-secondary-500 mr-4"></span>
          Tentang Konsentrasi Keahlian
        </h2>
        <p className="text-gray-600 leading-[1.8] text-justify text-sm sm:text-base">
          Konsentrasi keahlian Teknik Energi Surya, Hidro, dan Angin diproyeksikan untuk menghasilkan tenaga terampil di bidang energi terbarukan. Energi
          terbarukan akan menjadi andalan bagi manusia di masa depan. Tenaga kerja di bidang ini diyakini akan sangat dibutuhkan di masa depan seiring kian
          menipisnya cadangan energi fosil di berbagai belahan dunia. Konsentrasi keahlian ini sangat tepat dengan kemajuan peradaban dan dalam rangka menyiapkan
          sumber daya yang kompeten salah satunya melalui pendidikan vokasi. Penyelenggaraan konsentrasi keahlian ini selaras dengan Program Pemerintah yakni
          perencanaan pembangunan dan Pemanfaatan Energi Bersih 2022, serta belum adanya lembaga pendidikan yang menyelenggarakan konsentrasi keahlian ini di
          Sumatera Selatan sehingga diharapkan dapat menambah peran dan porsi generasi muda dalam mengisi pembangunan menuju Indonesia Emas 2045.
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

