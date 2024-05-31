import React from "react";

function page() {
  return (
    <div className="bg-white p-4 rounded">
      <b>Berikut hasil dari seleksi PPDB SMK Negeri 1 Banyuasin III</b>
      <br />
      <p className="mt-2">Selamat Kepada Peserta Didik Baru yang diterima menjadi Keluarga SMK Negeri 1 Banyuasin III</p>
      <a
        style={{ color: "blue", fontWeight: "bold", marginTop: 24 }}
        href="https://drive.google.com/file/d/1tHxYSXELpLfP1KO26QJmmQWivqEaCjUw/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lihat Daftar Disini!
      </a>
    </div>
  );
}

export default page;
