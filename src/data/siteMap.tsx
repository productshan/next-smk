const navItems = [
  {
    text: "profile",
    description: "Profil lengkap mengenai SMK NEGERI 1 BANYUASIN III",
    items: [
      {
        title: "Profile Singkat",
        path: "/profile"
      },
      {
        title: "Sejarah",
        path: "/profile/sejarah"
      },
      {
        title: "Visi, Misi dan Tujuan",
        path: "/profile/visi-misi"
      }
    ]
  },
  {
    text: "program keahlian",
    description: "Program keahlian yang tersedia di SMK Negeri 1 Banyuasin III",
    items: [
      {
        title: "Teknik Instalasi Tenaga Listrik",
        path: "/jurusan/titl"
      },
      {
        title: "Teknik Sepeda Motor",
        path: "/jurusan/tbsm"
      },
      {
        title: "Teknik Komputer dan Jaringan",
        path: "/jurusan/tkj"
      },
      {
        title: "Manajemen Perkantoran",
        path: "/jurusan/otkp"
      },
      {
        title: "Teknik Energi Surya, Hidro dan Angin",
        path: "/jurusan/tebt"
      }
    ]
  },
  {
    text: "Kepegawaian",
    description: "Profil singkat dari Guru dan Tenaga Kependidikan yang ada di SMK N1 BA III",
    items: [
      { title: "Guru", path: "/kepegawaian/guru" },
      { title: "Tenaga Kependidikan", path: "/kepegawaian/staff" }
    ]
  },
  {
    text: "informasi",
    description: "Dapatkan informasi terbaru mengenai SMK N1 BA III disini",
    items: [
      { title: "Berita", path: "/informasi/list/berita" },
      {
        title: "Prestasi",
        path: "/informasi/list/prestasi"
      }
    ]
  },
  {
    text: "Kalender Akademik",
    description: "Kalender Akademik SMK Negeri 1 Banyuasin III",
    items: [
      {
        title: "Kalender Akademik",
        path: "/kalender"
      }
    ]
  }
];

export { navItems };
