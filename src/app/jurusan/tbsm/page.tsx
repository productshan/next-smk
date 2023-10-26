import React from "react";
import PointContainer from "../components/pointContainer";
const points = [
  {
    text: "Revisi penyelarasan kurikulum kerjasama dengan DUDIKA pada konsentrasi keahlian Teknik Sepeda Motor yang memuat 8+i (Link and Macth) dalam kurun waktu tiga tahun sekali"
  },
  { text: "Peserta didik dibekali dengan hard skill dan soft skill serta sikap profil pelajar Pancasila setiap semester" },
  { text: "Peserta didik dibekali dengan kemampuan dan penguasaan dalam pemeliharaan dan perbaikan sepeda motor" },
  {
    text: "Berkembangnya kompetensi dan sertifikasi baik guru dan peserta didik pada konsentrasi keahlian Teknik Sepeda Motor melalui DUDIKA minimal satu guru dan alumni Teknik Sepeda Motor dalam kurun satu tahun"
  },
  { text: "Hadirnya guru tamu dan alumni yang berkompeten pada konsentrasi keahlian Teknik Sepeda Motor minimal tiga kali satu semester" },
  { text: "Pengoptimalan sarana dan prasarana sesuai dengan standarisasi DUDIKA selama tiga tahun" },
  { text: "Menghasilkan lulusan yang siap berkontribusi dalam memajukan dan mengembangan kosentrasi keahlian Teknik Sepeda Motor" },
  { text: "Tersusunnya asesmen pembelajaran yang berpusat kepada peserta didik selama satu semester" },
  { text: "Mengingkatnya citra sekolah melalui keserapan alumni oleh PT. Astra Honda Motor terutama AHASS yang tersebar di wilayah Sumatera Selatan" }
];
export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <b className="text-left text-2xl text-black mb-4">Program Keahlian Teknik Sepeda Motor</b>
      <p className="text-black leading-loose text-justify">
        Konsentrasi keahlian Teknik Sepeda Motor bertujuan untuk membekali peserta didik untuk untuk menjadi lulusan yang mempunyai softskills dan hardskills
        dalam melakukan perawatan dan perbaikan mesin sepeda motor dengan standarisasi operasional pengerjaan (S.O.P) sesuai ketetapan industri. Konsentrasi
        keahlian ini harus mampu menerapkan pembelajaran yang mampu meng-update teknologi terbarukan sepeda motor misalkan teknologi fuel injection dan lainnya.
        Kerjasama dengan PT. Astra Honda Motor diharapkan mampu menguatkan keunggulan dari konsentrasi keahlian ini.
      </p>
      <b className="text-left text-2xl text-black my-4">Tujuan Konsentrasi Keahlian Teknik Sepeda Motor</b>
      <div>
        {points.map((data, key) => {
          return (
            <div key={key} className={`${key === points.length - 1 ? "mb-8" : "mb-4"}`}>
              <PointContainer text={data.text} number={key + 1} color={`bg-random-color-${key === points.length - 1 ? 1 : key + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
