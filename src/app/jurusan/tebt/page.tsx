import React from "react";
import PointContainer from "../components/pointContainer";
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
    <div className="w-full flex flex-col">
      <b className="text-left text-2xl text-black mb-4">Program Keahlian Teknik Tenaga Surya, Hidro dan Angin</b>
      <p className="text-black leading-loose text-justify">
        Konsentrasi keahlian Teknik Energi Surya, Hidro, dan Angin diproyeksikan untuk menghasilkan tenaga terampil di bidang energi terbarukan. Energi
        terbarukan akan menjadi andalan bagi manusia di masa depan. Tenaga kerja di bidang ini diyakini akan sangat dibutuhkan di masa depan seiring kian
        menipisnya cadangan energi fosil di berbagai belahan dunia. Konsentrasi keahlian ini sangat tepat dengan kemajuan peradaban dan dalam rangka menyiapkan
        sumber daya yang kompeten salah satunya melalui pendidikan vokasi. Penyelenggaraan konsentrasi keahlian ini selaras dengan Program Pemerintah yakni
        perencanaan pembangunan dan Pemanfaatan Energi Bersih 2022, serta belum adanya lembaga pendidikan yang menyelenggarakan konsentrasi keahlian ini di
        Sumatera Selatan sehingga diharapkan dapat menambah peran dan porsi generasi muda dalam mengisi pembangunan menuju Indonesia Emas 2045.
      </p>
      <b className="text-left text-xl text-black my-4">Tujuan Konsentrasi Keahlian Teknik Tenaga Surya, Hidro dan Angin</b>
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
