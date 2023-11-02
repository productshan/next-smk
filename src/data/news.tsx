const tags = {
  pelatihan: "Pelatihan",
  acara: "Acara",
  workshop: "Workshop",
  perayaan: "Perayaan",
  selamat: "Ucapan Selamat",
  kegiatan: "Kegiatan",
  perlombaan: "Perlombaan"
};

const news = [
  {
    id: "2023100401",
    date: "2023-10-04",
    content:
      "Pelaksanaan Workshop RTL (Rencana Tindak Lanjut) Reskilling & Upskilling telah rampung. Terimakasih kepada Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Bangunan dan Listrik (BBPPMPV BBL) Medan yang telah memberikan Ilmu, sharing, dan pengalaman terutama Bapak Drs. Rivai M. Simanjuntak, M.Pd. <br/> Sebagai bagian Program SMK Pusat Keunggulan Reguler Lanjutan Tahun 2023 agar dapat menjadikan Guru, Tendik serta Staff di SMKN 1 Banyuasin III semakin paham akan tugas sebagai sekolah Pusat Keunggulan. Menjadi Sekolah yang menciptakan generasi penerus yang penuh skill dan ilmu sehingga setelah Keluar dari sekolah dapat bermanfaat terutama untuk diri sendiri. <br/> Sebagai Peserta Diklat BBPPVMVP BBL Medan, Bapak Amri Malulu, S.T. & Bapak Ilham Ramadhani, S.T. Menjelaskan apa saja yang telah didapat serta monitoring dan evaluasi RTL yang dilakukan terutama pengimbasan terhadap Civitas Akademika SMKN 1 Banyuasin III. <br/>",
    title: "Pelaksanaan Workshop RTL (Rencana Tindak Lanjut) Reskilling & Upskilling",
    image: {
      headline: {
        link: "https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386653320_3637453946501877_5507426778549994608_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fYOSaMgBr0oAX8f4Ifz&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDkmYkEAWVIVO6YLS3yWA3eumDu40jCYU4H6PRB3PYXLg&oe=6545200D",
        alt: "news-headline"
      },
      photos: [
        "https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386654009_3637454063168532_5097063980794248187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nm-CVxGstUkAX-OeMsT&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB1GhNaUPyHwHYqR1MqzSHAyiF4NS1Nm0tyRc1V2hxc5A&oe=6544821C",
        "https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386654026_3637454209835184_8282150268392774520_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Dy7NLHxjClsAX9JFDKj&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDU4UcCIGf_UmmifYbj2OBoU7PF85Qbo7yMJp5T0p-CyA&oe=6545AD85",
        "https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386651090_3637454256501846_5911931643171089477_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oF6ussPtyO4AX-WT_-i&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDRwYbZgF0EMuliOcfx25nGb36nXLOs4msJZwTLKv2jEQ&oe=6545AD96"
      ]
    },
    author: "Admin",
    tags: [tags.pelatihan, tags.acara, tags.workshop],
    category: "berita"
  },
  {
    id: "2023100301",
    date: "2023-10-03",
    content: `Alhamdulillah pada pagi hari tadi telah terlaksana kegiatan Praktisi Dunia Kerja Mengajar (Guru Tamu) untuk Jurusan Teknik Ketenagalistrikan Program Keahlian Teknik Instalasi Tenaga Listrik sebagai bagian dari Program Sekolah Pusat Keunggulan Reguler Lanjutan Tahun 2023. <br/> Perwakilan dari PT. Angkasa Pura II, Bapak Almuzani, S.T. memberikan materi tentang Genset ATS kepada siswa Kelas XI dan XII Teknik Ketenagalistrikan. <br/> Semoga dapat meningkatkan wawasan dan kompetensi siswa Program Keahlian Teknik Instalasi Tenaga Listrik dibidangnya. Serta dapat memahami hal apa saja yang dibutuhkan di dunia kerja (Industri).<br/>`,
    title: "Praktisi Dunia Kerja Mengajar (Guru Tamu) untuk Jurusan Teknik Ketenagalistrikan Program Keahlian Teknik Instalasi Tenaga Listrik",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386637619_3636768426570429_4145716487708304415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-nZhuzbUUdkAX8_9_8N&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDdcP1xV5hLN-g8KiVSQd5_e8We5wCSDzMKVw05Q71LbQ&oe=6546BDF2`,
        alt: "news-headline"
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386546710_3636768609903744_2179659751742629038_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pYsvHD7Zm4kAX_cL1C9&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDHvaw1P6hwawmSeLzDtrmvT4g-oQvkHHtyb_3smvDuqg&oe=65474D00`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386546014_3636768686570403_6219577534377014027_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0nq4vMT-Dm4AX99B7ka&_nc_oc=AQnoR-MNq7wChx_2nhhjN8KUZYMgybXDfA2ETSIipp801VDxymsviaakeuq4JdsT7TA&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB7W5gr9LJ5V9qxBLVYSZUrRDsDyyBklpXBXPDYrYHC9g&oe=65466CB2`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/386077369_3636768786570393_2055807034114954467_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7C-c0sOghOMAX8N12a-&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBiBFhVS8ZQcdH95PtQ30HoPmewD07XRMwUTN2oE7hPmw&oe=65469FC9`
      ]
    },
    author: "Admin",
    tags: [tags.pelatihan, tags.acara, tags.workshop],
    category: "berita"
  },
  {
    id: "202309301",
    date: "2023-09-30",
    content: `Alhamdulillah, pada pagi hari sampai dengan siang hari tadi telah dilaksanakan "Workshop Peningkatan Kapabilitas Guru & Tenaga Kependidikan" SMK Negeri 1 Banyuasin III.<br/>Kegiatan ini dilaksanakan sebagai bagian dari Program Sekolah Pusat Keunggulan Reguler Lanjutan Tahun 2023.<br/>Narasumber kegiatan dari Sumeks Radio dengan Pembicara Bapak Abdullah Arafah, SE., CHT. Memberikan materi yang menyenangkan terkait Public Speaking dan Penyiaran Radio, Podcast, maupun Vodcast.<br/>Semoga kedepannya seluruh Guru dan Tenaga Kependidikan SMK Negeri 1 Banyuasin III dapat menaikkan kapabilitas serta menjadikan Sekolah yang lebih baik lagi.`,
    title: "Workshop Peningkatan Kapabilitas Guru & Tenaga Kependidikan",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384787147_3634966726750599_2797824370400064769_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YkCqKrUVBRoAX-L9672&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB1Oo33d84BFby2_yNqSukKEDok34_8NAgfVwv5aeKBog&oe=6546A0CB`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384781515_3634966796750592_8124209519596418093_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ltkxywru05MAX8pzgXG&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB_l8KT3FKQM33PfKySrYzblPm03nJCrYhWw-BLriH9Jw&oe=65484028`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384776905_3634966623417276_8896662572563291889_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QAgY1Vlbt1sAX8CHP_k&_nc_ht=scontent.fplm4-1.fna&oh=00_AfD-53iEi8yQc6qEE0nzdAhQBE2mJY_VblGO1Z28QU7kFw&oe=65476BC6`
      ]
    },
    author: "Admin",
    tags: [tags.pelatihan, tags.acara, tags.workshop],
    category: "berita"
  },
  {
    id: "2023092901",
    date: "2023-09-29",
    content: `Alhamdulillah segala Puji Syukur Allah SWT Tuhan Semesta alam. Telah digelar kegiatan memperingati Hari lahir Nabi Muhammad SAW 1445 H dengan Tema "Meningkatkan Nilai Keimanan & Kecintaan Keluarga Besar SMKN 1 Banyuasin III Terhadap Nabi Muhammad SAW".
    Diawali dengan Tausiyah Islam yang diberikan oleh Al-Ustad Soehardi Al-Usmani, S.Sos.I. <br/>Dilanjutkan dengan kegiatan perlombaan berupa :<br/>1. Adzan<br/>2. Sholawat/Nasyid Perkelas<br/>3. Tilawah Quran<br/>Semoga dengan segala kegiatan yang dilaksanakan ini dapat membangun rasa cinta kepada Baginda Nabi Muhammad SAW. Momen untuk selalu bersholawat untuk syafaat akan beliau berikan di Yaumil Akhir nanti.`,
    title: "Peringatan Hari lahir Nabi Muhammad SAW 1445 H",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384735329_3634209056826366_1596770875610148185_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTQMCeMu8tsAX9YeoTg&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCJ4uEhJ1Gu6jg2bknsHqQVRy12aPzSZXyf74OqOoNXSQ&oe=6546BBD0`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384736817_3634209380159667_4407462559289987267_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jE98nQadzRQAX_ApYr2&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBQooNwzboCLOvIxO9NUiUu5bkf0Y9t8Ocb51K0JIEH7g&oe=6547C21F`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384779941_3634209570159648_1902440294215465649_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zNU3413E3-AAX-L28Hw&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA1CgVPDPQYcfPIoWUTZG_sTokKlfFK0iylb2RqUJFwPA&oe=65470009`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/384750208_3634210030159602_4766558624935928234_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6R7mVltdy08AX-0JSzl&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCLEFGlmXO3ELrXOZ13Ft9GGQO3hhDHRsIUHf3PAHulGQ&oe=6546CC01`
      ]
    },
    author: "Admin",
    tags: [tags.perayaan],
    category: "berita"
  },
  {
    id: "2023081701",
    date: "2023-08-17",
    content: `<b>MERDEKA!!!</b><br/>Salam dari Sabang sampai Merauke dengan bangga merayakan rasa nasionalisme terhadap tanah air untuk mengerti apa kemerdekaan.<br/>SMK Negeri 1 Banyuasin III SMK Pusat Keunggulan turut melaksanakan Upacara Peringatan Kemerdekaan Republik Indonesia yang ke-78 Tahun. Harapannya agar civitas akademika SMK Negeri 1 Banyuasin III selalu maju dan berprestasi serta berakhlak Mulia.<br/>Slogan "Terus Melaju Untuk Indonesia Maju" menjadi tema yang menegaskan bahwa kita harus terus melangkah kedepan untuk membangun Indonesia yang Maju disegala Bidang.<br/>"Indonesia Kaya akan Manusia yang beragam serta alam yang melimpah. Semoga bumi Indonesia selalu bermanfaat untuk pribumi nya dan Jaya Selama-lamanya!!!"<br/>`,
    title: "[DIRGAHAYU KEMERDEKAAN REPUBLIK INDONESIA KE-78 TAHUN]",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/368009835_3605945572986048_8556039056066069170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YE6WAwNPKLcAX_JxPh7&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBsLhUOCb6Tx-NDe4LekIlD-090r06rbaVf8h1h7QoRyA&oe=6546D8F3`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/368008775_3605945509652721_1398425443619696215_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=29GFDO3pUO4AX_vGRFn&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDdREzrPS9DUz56RhMMA3tezjAGFDPyEqBhkYjtIxCp0A&oe=65476CD1`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/368002758_3605945732986032_8584155660061654990_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BV7v942y6MIAX9UWzCn&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDGK6DdwrmECR8c59eYK0qp9pO3SBxEMJpsZOo60XEQmw&oe=6546F95E`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/368007711_3605945816319357_7736600252700431876_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZLVI_sACcVgAX_2q9dB&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAVWQnTf_kX07a7LQSvXHVNLcZgLSTc3JSTJHTOwVcVFQ&oe=6548225A`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/368012200_3605945879652684_3162306226885582921_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nSauwC9NOPwAX94jiDJ&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDJaa1BLnhSJtz65nA9svup7xens0yRLtPF2fHoupaTZQ&oe=65476DB5`
      ]
    },
    author: "Admin",
    tags: [tags.perayaan],
    category: "berita"
  },
  {
    id: "2023081601",
    date: "2023-08-16",
    content: `Selamat Kepada Ananda Yati Ativia Dari Kelas XI. Manajemen Perkantoran & Layanan Bisnis SMK Negeri 1 Banyuasin III SMK Pusat Keunggulan dalam Pengukuhan Anggota Paskibraka Kabupaten Banyuasin Tahun 2023.<br/>Betapa bangganya kami atas pencapaian mu, semoga engkau membawa tanggung jawab dengan baik dan tetap mengharumkan nama SMK Negeri 1 Banyuasin III Dimanapun Berada.<br/>Kedepannya agar menjadi motivasi bagi seluruh Siswa/i SMK Negeri 1 Banyuasin III agar dapat mengejar prestasi dari bidang lainnya.`,
    title: "PENGUKUHAN PASKIBRAKA KABUPATEN BANYUASIN 2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367985060_3605487743031831_3300029133389376638_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QJnJ9MkJogQAX_F-HBr&_nc_oc=AQl3Qrfb1c9-e7CJcf7mrH55PgVGIdCtgjkp9D4JJeysLxNhydGSua8XcthoRW970yE&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAsmzZ2WEFsNdSBM9wsxcY2cIlChOqTkjvb0ERRN9Me4w&oe=654852F1`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367001958_3605487779698494_6184797578116025137_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y3HVjgxtBvoAX80gG4S&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB59tLQUi4CZ3a9xp5PAg4XS2d1P2PW-oUpvxrchyUITQ&oe=65468FB4`
      ]
    },
    author: "Admin",
    tags: [tags.selamat],
    category: "prestasi"
  },
  {
    id: "2023081602",
    date: "2023-08-16",
    content: `Dalam rangka memeriahkan Ulang Tahun Indonesia yang ke-78 Tahun Pemerintah Desa Galang Tinggi mengadakan Perlombaan Karnaval yang diikuti oleh berbagai elemen desa, baik RT, Dusun, bahkan sekolah yang masuk dalam ruang Lingkup Desa Galang Tinggi.<br/>SMK Negeri 1 Banyuasin III SMK Pusat Keunggulan turut mengirim peserta Karnaval yang diisi dengan unjuk bakat Marching Band, Pencak Silat, serta Identitas Seragam SMK.<br/>"Sebagai Rasa Syukur Anak Bangsa yang telah mengenyam Kemerdekaan dari Pahlawan dan Leluhur agar selalu mengingat dan menanamkan bahwa kemerdekaan itu harga mati"`,
    title: "Semarak Peringatan HUT Ke-78 Republik Indonesia",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367983935_3605471316366807_3229386058655541488_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vGJrk6R7vckAX9NwCjJ&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDqoh3DO9kLaL7YyIu2xWZNsehNe_mJx0tYD5c30EiWTw&oe=65483346`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367737206_3605471336366805_2731357409075358325_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c5Isu5Kb8boAX_KM6F-&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCcFaVrulGnYopgPnrEWW9Md8852qALVl8RcCsTqYEU1A&oe=6547EA6A`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367993072_3605471399700132_4925274008646778475_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gz7j68HIQVQAX9kTCIT&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBRbA1hakrFpz1uZDXkB8Tbp6FWW1q59Qvijtr2n7fEMA&oe=65482FDA`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367963368_3605471433033462_8399467417953645535_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_f__XU3-OY8AX_4aqyu&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAhhReNREgpjt8GsidTBjBiGm6nAl96WY8Kk53HMV4ayA&oe=6546F915`,
        ``
      ]
    },
    author: "Admin",
    tags: [tags.perayaan],
    category: "berita"
  },
  {
    id: "2023081401",
    date: "2023-08-14",
    content: `Senin, 14 Agustus 2023 bertepatan dengan hari Pramuka Nasional yang Ke-62 Tahun SMK Negeri 1 Banyuasin III, SMK Pusat Keunggulan melaksanakan upacara rutin. <br/>Selaku Pembina Upacara Bapak Ahmad Hibban, S.Pd. mengajak seluruh siswa/i SMK Negeri 1 Banyuasin III agar meneladani dan mengamalkan nilai-nilai Pramuka sekaligus mempersiapkan diri dalam Ulang Tahun Indonesia yang ke-78.<br/>Mari Rayakan dengan Khidmat dan menghargai  segala perjuangan dan pahlawan demi kemerdekaan.`,
    title: "Peringatan 62 Tahun Hari Pramuka Nasional",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367468384_3604029359844336_28623839858576411_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NtgbHOnfu54AX9g8yZf&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA55QMUXMKY4iEwuYEm96E0mYd1RRUYVt6rKMPBCZZLnQ&oe=65468E6C`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367472741_3604029383177667_1781031644507704107_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OLIQSP9tg2gAX_P_7at&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAbUD4F6WY9AmCv_fbgXab2MLp_QPfztu7VaB_voq083Q&oe=65482385`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367487363_3604029423177663_2150205554859530163_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=x7lN-_eNPWUAX_1YKsY&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDCl9Kf-cJ5CSRDZM4RhM7Xo_0xdwkuiKGGkxvYI-dD9w&oe=654818C6`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/367495194_3604029473177658_5705132666553199874_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5BJaRs9JmJ0AX8R_uWp&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDpuWWX-bhlu4QFB8TcLR9B9Lj2UWJiiEwRohUzfNparw&oe=654781D3`,
        ``
      ]
    },
    author: "Admin",
    tags: [tags.perayaan],
    category: "berita"
  },
  {
    id: "2023080901",
    date: "2023-08-09",
    content: `Kegiatan Literasi Rutin yang diadakan setiap pagi. Membaca, menyampaikan dan menyimpulkan adalah tujuan yang akan didapat setelah melaksanakan literasi agar meningkatkan minat dan kemampuan baca seluruh siswa SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III.`,
    title: "Kegiatan Literasi Harian SMK Negeri 1 Banyuasin III",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/366169620_3600702663510339_2045775326040708384_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dgQceYo7RcYAX8qXXMu&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBnfZnYCXpMdAcwDRjGSSW1Zd-XnwK1stWxV-YAi_xKFA&oe=65467892`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/365758997_3600702703510335_7126309767136629982_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ylG3FsG8uKsAX_V9aQB&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAjlT8LNpsNp8jI7bfAndD0sj4iUhWq8VG2snq5Xqw1gg&oe=6547EF1A`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/365779667_3600702723510333_5116026713873272342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TNncBhoW0HQAX93x6dO&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDUy0QFoFARB4Y_4t4qef5oKzllOnLrsSKzrTg9Ocp2bA&oe=6547873E`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/365798111_3600702790176993_1771922837712067160_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nJl_i0igrtEAX__5ZGq&_nc_ht=scontent.fplm4-1.fna&oh=00_AfD0TMYA9m-eZXLlls8_tieUnvafazzTR-kxtPs7sNFjcg&oe=6547CFCE`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023080601",
    date: "2023-08-06",
    content: `Dalam rangka memperingati Ulang Tahun Pramuka yang Ke-62 Pemerintah Kabupaten Banyuasin dalam Hal ini Dinas Kepemudaan, Olahraga & Pariwisata mengadakan Lomba Prestasi Pramuka Tahun 2023.<br/>Diikuti oleh berbagai sekolah dari Jenjang SD/MI, SMP/MTs, serta SMA/SMK/MAN se-kabupaten Banyuasin yang bertempat di Politeknik Negeri Sriwijaya Kampus Banyuasin.<br/>SMK Pusat Keunggulan, SMK Negeri 1 Banyuasin III turut mengirim peserta lomba Teknis Baris Berbaris (LTBB) Tingkat Penegak baik Putra Maupun Putri sebagai berikut:<br/>Kakak Pembimbing:<br/>1. Kak Laven (Putra)<br/>2. Kak Ulan (Putri)<br/>Regu Putra :<br/>1. Remon (XII. Teknik Bisnis Sepeda Motor)<br/>2. Mario (XI. Teknik Bisnis Sepeda Motor)<br/>3. Aji (Teknik Jaringan Komputer & Telekomunikasi)<br/>4. Tian (XI. Teknik Energi Terbarukan)<br/>5. Miki (XII. Manajemen Perkantoran & Layanan Bisnis)<br/>6. Irwansyah (XI. Teknik Energi Terbarukan)<br/>
  7. Dzakir (XI. Teknik Jaringan Komputer & Telekomunikasi)<br/>Regu Putri :<br/>
  1. Anjani (XII. Manajemen Perkantoran & Layanan Bisnis)<br/>
  2. Fadela (XII. Teknik Jaringan Komputer & Telekomunikasi)<br/>
  3. Raisa (XII. Teknik Jaringan Komputer & Telekomunikasi)<br/>
  4. Marsya (XII. Teknik Jaringan Komputer & Telekomunikasi)<br/>
  5. Indah (XII. Teknik Jaringan Komputer & Telekomunikasi)<br/>
  6. Rindi (XII. Teknik Jaringan Komputer & Telekomunikasi)<br/>
  7. Salsa (XII. Manajemen Perkantoran & Layanan Bisnis)<br/>`,
    title: "LOMBA PRESTASI PRAMUKA 2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/365839248_3598784310368841_2804558527987596681_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CWL2goTq4ycAX8oOV17&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCyGWjgOjz8eLy7VcsaPXD-us1gQu7X-BSDOLO9rcYCew&oe=65484C89`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/365772923_3598784467035492_128865889582990596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4V4BUxMioj4AX9l0ZXh&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA4rAJA4b-v0LCBvHiKmbD2v0Yf9F_kKqJHv1636Dr-RQ&oe=65468D7D`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/365762323_3598784653702140_1549700875105282060_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ioEnQvzh_6AAX96jVt7&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCpO3V9w6XVDp5nb1Fz__RZTL5yFgMV8sGsSdq_BHMf4A&oe=65483852`
      ]
    },
    author: "Admin",
    tags: [tags.perlombaan],
    category: "prestasi"
  },
  {
    id: "2023073101",
    date: "2023-07-31",
    content: `Selamat kepada seluruh siswa/siswi dan guru SMK Negeri 1 BANYUASIN III yang telah memenangkan cabang lomba sebagai berikut:<br/>1. Sapira (Siswi Kelas XII Teknik Energi Terbarukan) bersama Ibu Rosanina Maryani, S.Tr.T. (Guru Produktif Teknik Energi Terbarukan) sebagai Juara 1 Lomba Inovasi Produk Pengolahan Berbasis Tumbuh-tumbuhan, Limbah, & Energi berupa Sabun dari Daun Sungkai antar Pelajar SMK Se-Sumatera Selatan di Lahat.<br/>2. Irwansyah (Siswa Kelas XI. Teknik Energi Terbarukan) juara 2 dalam cabang renang Putra O2SN 2023<br/>3. Riki Mandala Putra (Siswa Kelas XI. Teknik Ketenagalistrikan) Juara 2 pencak silat fighter putra dan juara 2 pencak silat Seni putra dalam cabang olahraga Pencak Silat O2SN 2023<br/>
    4. Christian Alva (Kelas XI. Teknik Ketenagalistrikan) Juara 3 cabang lomba Atletik O2SN 2023<br/>5. Mersi Monika (Kelas XI. Manajemen Perkantoran & Layanan Bisnis) Juara 2 cabang lomba renang putri O2SN 2023.<br/>Semoga dapat terus mempertahankan dan meningkatkan prestasinya serta memotivasi teman-teman dalam mengharumkan nama SMK Tercinta.`,
    title: "Pemenang Lomba",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/364667979_3594619144118691_3587224481836918136_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oBSOJ9HR-T0AX-ubAYS&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDT5ee_hydA8xDnl7DPKxP3MlUn26Q6jTckaQSvV9ITbA&oe=65481ADD`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/364120455_3594618870785385_6978832325095667648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Img5B39CRi8AX9EPvSV&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAvKWOWxskHcPd98ZQkiySTeaTpIF-Nqz1H8RcfZigSQQ&oe=65471E9E`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363364087_3594620094118596_1020850250806673501_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hI9e5GaWPaYAX8Pz2_5&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCAmFNSQXST32wI4U8jJYsdib2b0ZXp4afqQs3ANZs8qQ&oe=654685A1`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/364658262_3594620294118576_4683824812690257751_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tqYCV4XX0SEAX8hZEba&_nc_oc=AQlLBC6rRGrEnoFXhfogKwQbuY8-FvjNGJ276_6EG25DmRJ2w6gv-F-roFkHnu35uBE&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBBxPuQJoowmMbBqYXCm2RoAxykA1hwNOu5jJI7TD3Aig&oe=654791F3`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/364681534_3594620727451866_3467634590152304479_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dYJB_L1H8G8AX9VKazS&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBsf_2WvILvztSPygST3mndnGWbHVlDGkXVsWOWI0uoaA&oe=654831FF`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/364719645_3594621067451832_8391705975079866887_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g5GvZl25gTAAX9fVAOx&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDHqEh9wAFztrK9ePQinvKQ48Jnz4U4uYCuko4hj2JZhA&oe=65472940`,
        ``
      ]
    },
    author: "Admin",
    tags: [tags.perlombaan],
    category: "prestasi"
  },
  {
    id: "2023072801",
    date: "2023-07-28",
    content: `Kegiatan Yasin Bersama Setiap Jum'at Pagi bersama Seluruh Guru, Staff Sekolah, Tenaga Kependidikan, dan Siswa/Siswi SMK Pusat Keunggulan, SMK Negeri 1 Banyuasin III.<br/>Mari Bersama-sama membentuk karakter insani yang islami di SMK Negeri 1 Banyuasin III.`,
    title: "Kegiatan Rutin Pembacaan Yasin",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363355008_3592380281009244_1796659937891494896_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CeV8axZ6X98AX_gqNTC&_nc_ht=scontent.fplm4-1.fna&oh=00_AfClsvjDQKIkMvTDuerXFBTCGK3cRyTmh_-_0sSAoJTAbA&oe=6547DAAC`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363922006_3592380327675906_6162595412887793457_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K81LluZtpRQAX85QQ2D&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAN1rciPOooR_OC2iuXdnezH6P8XjAu8aPHVhpasREC5A&oe=65473B68`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363353092_3592380407675898_443167633478082998_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=apBjvMRH_gEAX88fjQp&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAVkjRZ3jSle573Bla4h6FQ7i3nCh5RqDhTfcLa8ynyDw&oe=65466A4F`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023072601",
    date: "2023-07-26",
    content: `Semoga selamat sampai tujuan dan selamat bertanding untuk Ibu Rosanina Maryani, S.Tr.T. (Guru Produktif Teknik Energi Terbarukan) bersamaan dengan Sapira (Siswi Kelas XII. Teknik Energi Terbarukan) dalam ajang Lomba Inovasi & kreatifitas siswa SMK tahun 2023 Di Lahat.<br/>Semoga dapat memberikan hasil yang terbaik serta membanggakan nama SMK Negeri 1 Banyuasin III.`,
    title: "LOMBA INOVASI & KREATIFITAS SISWA SMK TAHUN 2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363407464_3591217471125525_5093008810311894887_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LNr5uSFgIYgAX_ts65F&_nc_ht=scontent.fplm4-1.fna&oh=00_AfC2mGG6aCtzSuR0e5lKE6uovbrnBm0UbfGJ6dLaDhx8MA&oe=65475B40`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363301478_3591217464458859_4593740187554846602_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qNEtnl9otq8AX9gkgEc&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCLs1cUyYezt77pBezjPx4-KnLML7EufstUg7wniPjoZQ&oe=654845E6`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/363416730_3591217461125526_5761236862965583018_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iadL2Vj1n_oAX9vdrCW&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA03F8B-BgRU_7w52uNSgPCHJ-HUqMAlJ8pm5hizdSROQ&oe=6547810B`
      ]
    },
    author: "Admin",
    tags: [tags.perlombaan],
    category: "prestasi"
  },
  {
    id: "2023071401",
    date: "2023-07-14",
    content: `Dalam rangka pendidikan karakter serta menanamkan nilai iman dan taqwa, disetiap Jumat pagi akan dilaksanakan kegiatan yasinan bersama.<br/>
    Yasinan bersama ini dibersamai oleh seluruh guru dan tenaga kependidikan yang tentunya dipimpin oleh siswa-siswi SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III.`,
    title: "Kegiatan Yasinan Pada Hari Jumat",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/358720619_3583213051925967_8438498068306652558_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UNY4I-BjZlsAX8CYJX2&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBX7WDU76yw-juXEUwqDfk6OThd4DUBGjngPqPzMgD6XQ&oe=6547438E`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359833397_3583213138592625_4822900763477704313_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8al79wie4J4AX86wqBZ&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCgbXEV8iVU5SuPdu3roevYdAOEfpJQgqjAecvYSoSNQQ&oe=6547D0F2`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359800011_3583213218592617_8673798909896396213_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9GWl0GUqCeoAX_o6Oau&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB-FCjV_7DHVUQMNZ09JgGcGpo7c-4NHoFROtEeghA1Bw&oe=6547FB19`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023071101",
    date: "2023-07-11",
    content: `Telah dilaksanakan rapat Awal Tahun Pelajaran 2023/2024 yang dipimpin oleh Kepala SMKN 1 Banyuasin III, Novita Sari, S.T., M.Pd. beserta jajaran guru dan tenaga kependidikan.<br/>Muatan yang dibahas berupa program sekolah dan pembagian tanggung jawab untuk struktural kegiatan didalam sekolah.<br/>Semoga dapat melaksanakan tanggung jawab dengan baik dan segala rangkaian kegiatan di semester baru ini berjalan dengan lancar.`,
    title: "Rapat Awal Tahun Pembelajaran 2023/2024",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359440893_3581343142112958_5528802546485633538_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bwjw-PswnBYAX_xrqtR&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAJaNTymv56YYkuMtspxyY42aceVxvrP7j35o-gLuh4xA&oe=65471DE4`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359760836_3581343432112929_594465175824639968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DQ84_JNYqt8AX_ilJcL&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBCxoHDnVWTIdg0-o6mturx-mXZV5xOuarC-E2G6pyn_Q&oe=65484683`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359369544_3581343655446240_7524402079871683923_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=km1qlwl_paUAX_wh-9H&_nc_oc=AQldD7Kfe5WTdCvwqYm04pFvWCevwmiSgCKv5CKSvlP5DcrqFytrBNONgnduvtaKvTQ&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDSY9bgdq78j7atLxr5jP-6cEMAQpc7YsWYNooKVyUB8Q&oe=6547E5DD`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359755770_3581343042112968_6755210589882981351_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KSL9Y1z6kUIAX--LdGM&_nc_ht=scontent.fplm4-1.fna&oh=00_AfC3F-Gvu82IkwGWYHQtLNg7zwihtivofvm4KyoKVDpv7Q&oe=65483C53`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023071001",
    date: "2023-07-10",
    content: `Senin, 10 Juli 2023 adalah awal tahun ajaran 2023/2024 di SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III. Diawali dengan upacara bendera sekaligus pembukaan kegiatan Masa Pengenalan Lingkungan Sekolah(MPLS).`,
    title: "Semangat Menyabut Awal Tahun Ajaran Baru!",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359077402_3580397162207556_1152129019987528489_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lxIhjlx83jUAX-Px1wd&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDKdUEp0R7bCB0_rVSSIjMQoYmR9nAg_8O5QMu9PxpXXw&oe=6548306B`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/358734663_3580397318874207_3647862159819885537_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4iGgIWRDb9kAX_bnOag&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA8FGCOb26gHNo6vCFUHPUQ_qgqKj205Zu_-A7sMLn--g&oe=6547DC42`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359429541_3580397518874187_1548636047044182963_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cXlP_76YySIAX-VY3eG&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDCyuTNf1DLbDOyo-L-hHy1v3Oq5FUfbWi9HliJlVN7Uw&oe=6548BEF4`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/359507938_3580396905540915_3034225667311282798_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rpiIU6iyAJQAX_KI21G&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA14WPIRn6rmgZsLDlFDwPeYEJticfEc6VwOMWW5VpPWw&oe=6548D2B2`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023062601",
    date: "2023-06-26",
    content: `Tim SMK Kabupaten Banyuasin dalam Festival Seni dan Budaya Pelajar SMK Tingkat Province di Kota Baturaja OKU mendapatkan 5 penghargaan dr kategori yg dilombakan. Penghargaan mendapatkan 4 tropi dan 1 plakat disertai uang pembinaan dan piagam penghargaan.<br/>Adapun yg diperoleh:<br/>
    1. Carnaval Budaya terbaik 1<br/>
    2. Stand dengan omset tertinggi terbaik 2<br/>
    3. Stand Pameran terbaik 3<br/>
    4. Stand dengan Penataan Pameran produk smk harapan 3<br/>
    5. Stand dengan Penataan Pameran products makanan minuman terbaik 2<br/>
    Semoga Tim SMK Kab.Banyuasin semakin kompak selalu, smk bisa, smk hebat, smk bisa hebat, banyuasin bangkit, Sumsel maju untuk semua.<br/>`,
    title: "Festival Seni dan Budaya Pelajar SMK Tingkat Provinsi",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347560544_6522485861149327_2068265213210488861_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2jJtvZgOVI4AX9KGHiH&_nc_oc=AQnyd4LOffEpsEUVmPSoMPgvpz2KnHej-uFxvahlLZgmet9E6jXNProbBugQyXu4KP0&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCQ1av10zZ5O3IzNXQjUTYtVujkH2oc68KRzViRtnhMzg&oe=65482445`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347249489_6522486081149305_8689101631721289266_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pF5gGe78xFQAX-hUjbp&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBsO-OU27WCusyCl-gEfESHaTDsWOjLfHT4RGGtdN6zrw&oe=6547DE7A`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347249191_6522486561149257_5279359580503470166_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n7DvTd8C2EIAX88FDaE&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCUd22ouDbgfsXZIhzjivyl-YIcfGpmLHZSwr29_o9JXw&oe=65478920`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347393976_6522486874482559_2502311998252137805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XbEMWt5E83IAX9cIfiw&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAsM1waJ32Y2gXbtPK_PM2M3-X2hsIABddiniASYD6NFA&oe=65474D29`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347250693_6522487247815855_7598272622275855512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OLIShe_ZuVwAX-x-KFs&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBPfv9FazBcGl2nnNgCbLn-ag0ObGKlGxSwRqCYheQRAQ&oe=65481D30`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347243270_6522487484482498_3364264162544369874_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gOga8CY5f-QAX_gJViD&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDRQ5TTzvcnDtCRs9529E14P1qii3u3o8WuKCW42zYsuQ&oe=6548C0BA`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347584203_6522487797815800_7956411477210376406_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZXngdJoVP9wAX_-WAdk&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCvhebuLY64YKEbO-FNYqEh0WWdwFxyX8g_DlRIL_n2gQ&oe=654778A3`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/356207741_6522484554482791_1500530742884269613_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sHojNez5GacAX-vico-&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB0uIJKS3nSToMPzEALa5ka72rnlhMMca2I_H3uRds2rg&oe=6547959D`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347560882_6522488077815772_2411423767842799945_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-G3JIQQCOtEAX8FzQ-A&_nc_ht=scontent.fplm4-1.fna&oh=00_AfD3Mm6xkva3ixVFZG0aenlpoeUVkvR5sqBFyeBFEbLv3A&oe=654885DF`
      ]
    },
    author: "Admin",
    tags: [tags.perlombaan],
    category: "prestasi"
  },
  {
    id: "2023062501",
    date: "2023-06-25",
    content: `Tim dari kabupaten Banyuasin dengan salah satunya dari SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III berhasil menyabet Juara 1 "Lomba Karnaval Budaya", Juara 2 "Omset Pameran Terbanyak", Juara 3 Stand Pameran Terbaik, dan Juara Harapan 3 Stand Pameran makanan<br/>Berikan apresiasi setinggi-tingginya kepada seluruh kontingen, guru pembimbing, dan yang pasti kepala sekolah yang telah mensupport segala sarana dalam kesuksesan tim SMK se-Banyuasin terkhusus SMK NEGERI 1 BANYUASIN III dalam melaksanakan kegiatan Festival Seni Budaya Pelajar SMK Se-Sumatera Selatan Tahun 2023.<br/>`,
    title: "Juara dalam Festival Seni dan Budaya Pelajar SMK Tingkat Provinsi",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/356088485_3568869660026973_8938897953157728978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cGkKWuFDZF4AX8vtWqM&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAP5Ds8Cpc2ZGFl34Pl1ZMESaKDAq9DoDUv-xq6MHWT9Q&oe=654721EE`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347249489_6522486081149305_8689101631721289266_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pF5gGe78xFQAX-hUjbp&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBsO-OU27WCusyCl-gEfESHaTDsWOjLfHT4RGGtdN6zrw&oe=6547DE7A`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347249191_6522486561149257_5279359580503470166_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n7DvTd8C2EIAX88FDaE&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCUd22ouDbgfsXZIhzjivyl-YIcfGpmLHZSwr29_o9JXw&oe=65478920`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347393976_6522486874482559_2502311998252137805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XbEMWt5E83IAX9cIfiw&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAsM1waJ32Y2gXbtPK_PM2M3-X2hsIABddiniASYD6NFA&oe=65474D29`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347250693_6522487247815855_7598272622275855512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OLIShe_ZuVwAX-x-KFs&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBPfv9FazBcGl2nnNgCbLn-ag0ObGKlGxSwRqCYheQRAQ&oe=65481D30`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347243270_6522487484482498_3364264162544369874_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gOga8CY5f-QAX_gJViD&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDRQ5TTzvcnDtCRs9529E14P1qii3u3o8WuKCW42zYsuQ&oe=6548C0BA`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347584203_6522487797815800_7956411477210376406_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZXngdJoVP9wAX_-WAdk&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCvhebuLY64YKEbO-FNYqEh0WWdwFxyX8g_DlRIL_n2gQ&oe=654778A3`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/356207741_6522484554482791_1500530742884269613_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sHojNez5GacAX-vico-&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB0uIJKS3nSToMPzEALa5ka72rnlhMMca2I_H3uRds2rg&oe=6547959D`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/347560882_6522488077815772_2411423767842799945_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-G3JIQQCOtEAX8FzQ-A&_nc_ht=scontent.fplm4-1.fna&oh=00_AfD3Mm6xkva3ixVFZG0aenlpoeUVkvR5sqBFyeBFEbLv3A&oe=654885DF`
      ]
    },
    author: "Admin",
    tags: [tags.perlombaan],
    category: "berita"
  },
  {
    id: "2023062502",
    date: "2023-06-25",
    content: `SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III turut mengirim delegasi dalam kegiatan Festival Seni Budaya Pelajar SMK Se-Sumatera Selatan di Ogan Komering Ulu tepatnya di Kota Baturaja.<br/>Festival telah dimulai pada tanggal 23 Juni dan akan berakhir sampai dengan 25 Juni 2023. Siswa dan siswi dari SMK Negeri 1 Banyuasin III dikirim bersamaan dengan Ibu Tri Damayanti, S.Pd. selaku guru pembina dalam kegiatan festival budaya pelajar SMK ini.<br/>Semoga SMK Negeri 1 Banyuasin III dapat memberikan yang terbaik dan menampilkan seni dan budaya lokal yang dapat dikenal oleh Daerah yang lain yang ada Di seluruh Sumatera Selatan.`,
    title: "Partisipasi dalam Festival Seni dan Budaya Pelajar SMK Tingkat Provinsi",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/356217510_3568705870043352_8832020907570286821_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h0XSuSuoclkAX8_ZANo&_nc_oc=AQlUTeVFt0JKUDx6pFY2cIDiOASQwOLs_zFirI7ANishikZOWFLQQTTUxzqZ-2Q7uA4&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBU47sIm5csbGFnvyabnSvLCbvxMYw5z1SS0BD-wywr4A&oe=65471246`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/356232916_3568705903376682_4118964101659671315_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9_S6ImGExsQAX9AlOFN&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCifYKiKP_nWXOQ0tEv4vjT1msaZZKPWh_o2Acw_d9m2A&oe=65485990`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/356139261_3568705556710050_8852198340151230190_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YpIpkTVLZSUAX8iB5gJ&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAXpvhPnWTKZwuiO5mmxzfGqccvz_qQ-Lu_6pAM_tSs0w&oe=65472AC3`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355896081_3568706026710003_1014873546150375677_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wA5O8gsdCPEAX8pvc6c&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA_aWDL2yAKcPiWz-6z_yt4uaiLYQ2eQ-vNJirQcZ5CBw&oe=654897CD`
      ]
    },
    author: "Admin",
    tags: [tags.perlombaan],
    category: "prestasi"
  },
  {
    id: "2023062301",
    date: "2023-06-23",
    content: `Pagi hari tadi telah dilaksanakan pengumuman dan pembagian nilai raport kepada seluruh siswa kelas X dan XI SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III Mulai dari juara kelas sampai dengan pengumuman juara umum.<br/>Banyak wejangan dan pesan kepada seluruh siswa dan siswi untuk terus meningkatkan kualitas diri baik dari segi sikap, pengetahuan, dan keterampilan. Tentunya segala sesuatu yang terjadi disekolah disampaikan kepada seluruh wali murid yang hadir.<br/>Pada hari ini pun dilaksanakan kegiatan Service Hemat di bengkel Teknik Otomotif SMK Negeri 1 Banyuasin III yang dipromotori oleh Astra Motor selaku Dudika yang bekerjasama dengan SMK Negeri 1 Banyuasin III.<br/>Sampai jumpa di Tahun ajaran baru dengan semangat dan suasana baru. Kita bertemu dan belajar kembali di tanggal 10 Juli 2023.<br/>`,
    title: "Pembagian Raport Tahun Ajaran 2022/2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355714520_3567607520153187_1370552725187299182_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XxaOEXap_J4AX_2Y23m&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBR6SHOc5NLOvXAYjN3qyo9xGz1DTzSSo6vMPpf53KhFQ&oe=65475483`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355871275_3567607680153171_5883661205188824141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4UcfwitXLc8AX-UJw5b&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAGUScrLGBPXHPt3Kc_LtAg1Mmpqy5zWGT9JQZpcZiYXQ&oe=6548357E`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355496551_3567607696819836_364612556480015406_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oOEsEus-Dp8AX8yHHhb&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBDGRLgfFCzqkzP6Tm9NwTmSbUQRm-L8v5YhI2YXKM4dQ&oe=654807F3`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355501383_3567607756819830_3114309895725165567_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=76kFLSmpnfgAX-wvSrp&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCNim2J0eheAly4x9E7ak3sgT6eSmeuu7c68ZyebP7voA&oe=654824CC`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355869496_3567607800153159_3416209468593739209_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RX4lJHEjQB0AX-grzHP&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCsas13RVlADk42H2REfJzRJ1UPqbiXbOMxL0iOJ5gxXg&oe=6548385A`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355711119_3567607886819817_6934934933207320140_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YRHuoAncWM4AX8JUJAz&_nc_oc=AQnQpC8_1kMV0VTEblZIbvGj3UHN-OGTr-YFCwyCgbYQLSKhtbn4rNEebkBHfwdF84A&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBjhzHzIu0OBfeQVlPhWARYZNAR3Kez6FMRegNTEwx2MA&oe=65489AFF`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355485874_3567607953486477_8392256629787349638_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ABnyOsMLVZsAX-ckgd1&_nc_ht=scontent.fplm4-1.fna&oh=00_AfD0XDxYR_n1X0DbVhGk2K-rRHfQfPC-n1IfarfWFjdEww&oe=6547842C`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355857077_3567607990153140_5390223906132450837_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B6_2kSvEAc8AX9XbYzo&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBesXXXAr2ieVfGdEgRSrvL5UhABBjHXGl55wZHkPmWRA&oe=65487A91`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355657058_3567608023486470_3391055459335143360_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WdyjvEyqlboAX9toOrJ&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBK4_MyVsXBHW7_iozVQzH6gWP1mROePZ_Ze1oJwsUr8g&oe=6547D6B9`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355684357_3567608086819797_7939843234557787017_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U15U01lKhRIAX8oe-XP&_nc_ht=scontent.fplm4-1.fna&oh=00_AfC8uJOlQ2LhYZ6fLlNmBoPxh6vlvemkiUHe2-3P5v2QHA&oe=6548D853`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355898989_3567608133486459_4866518630140711796_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0OfKsgh1qGEAX9W9Q4c&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAmygaeiG-uiuU8TqkyP_6ibMKz4Ij0hxiYCzUryItewQ&oe=65480915`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355853709_3567608290153110_3289537069663045699_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f8z1k380aVcAX-IyoJk&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBoaH_8hN5_bM4uUeDSXbVc4jJm12gWZUu08qW4uChVfA&oe=654886CD`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan, tags.selamat],
    category: "berita"
  },
  {
    id: "2023062201",
    date: "2023-06-22",
    content: `Sedang Berlangsung rapat kenaikan kelas untuk seluruh siswa dan siswi SMK Negeri 1 Banyuasin III dari tahun ajaran 2022/2023 menuju tahun ajaran 2023/2024.`,
    title: "Rapat Kenaikan Kelas Tahun Ajaran 2022/2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355366899_3566334166947189_8724229174692173961_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RWoB1uLuzB0AX-0vaz-&_nc_ht=scontent.fplm4-1.fna&oh=00_AfC-WpSJNwd-2avHSrATrLnxnxzRfdEy5bZJkWMSxXW7aA&oe=6547ED5A`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355431197_3566334196947186_4621428413166566497_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eIjYHnasKfYAX-quFDT&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCwc0ARjIcKrTIrKCIUvZ_4nfINJXgHxfPh5DmZcXIfGQ&oe=65472E71`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/355469243_3566333740280565_985998697290634770_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eIyvUmOdUAMAX_BeW_1&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAdspj-OJhdudslG3JNwqWJWCEhWq37QPtxEvnETRfIhw&oe=6548C0C2`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023061201",
    date: "2023-06-12",
    content: `Zaman semakin berkembang, begitu pun dalam dunia pendidikan berupa pengisian nilai peserta didik berbasis digital yang akan di input dalam E-Raport di SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III.<br/>Semangat untuk seluruh guru yang senantiasa mengerahkan jiwa dan raga dalam mendidik penerus bangsa, semoga lelahmu menjadi pahala. Aamiin`,
    title: "Pengisian E-Raport Tahun ajaran 2022/2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353605397_3559573520956587_4984360766654822184_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bGuJk6DxZqcAX8-yrQK&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAi-OhFyuBbrcnpBEQAXLVmDKFlk4QxO8GBLzizXfd6gA&oe=654798A7`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353642336_3559573794289893_3555149499519279768_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1_rhbPatxDgAX_3DAkU&_nc_ht=scontent.fplm4-1.fna&oh=00_AfC-VTvoH1CNOBsdlCnwulEYxkZxlwO_yz95D4M5IdO_LA&oe=654868CC`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353588836_3559573877623218_4603706888843543655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0UotcmJWUGAAX-wN9Mw&_nc_ht=scontent.fplm4-1.fna&oh=00_AfA27vzVeyZ02JhgMBJ6HoVkCapkfm6x7r7I-LjosTc2jw&oe=654714FC`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353601777_3559573410956598_3617423532928843585_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GAAeRNhSS_sAX_Ddmf5&_nc_ht=scontent.fplm4-1.fna&oh=00_AfD17CBWdLnLSthkWy9sT0oPm-sCnljyKP3gkmroh1FGlA&oe=6547FE61`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023061202",
    date: "2023-06-12",
    content: `Wah sehabis fokus melaksanakan ujian akhir semester genap, saatnya refreshing untuk melepas penat😆😁. Salah satunya lewat kegiatan classmeeting.<br/>Dalam kegiatan classmeeting di SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III memiliki beberapa cabang lomba yang kesemuanya akan diikuti oleh kelas X, XI dan bahkan seluruh calon siswa baru.<br/>Mulai dari tarik tambang, volly, futsal sampai dengan olahraga elektronik (e-sport) seperti Free Fire (FF). 😁👏<br/>Perlombaan Classmeeting sudah dimulai hari ini dengan cabang lomba tarik tambang. Ikuti terus keseruan dalam kegiatan classmeeting Di SMK Negeri 1 Banyuasin III pada hari-hari berikutnya ya!!😉🫰`,
    title: "Yeay! Akhirnya kita menyambut classmeeting",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353768189_3559567137623892_3183858076679394070_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vu0vyu7qQ_UAX8h_OK4&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCbQJpCV82_Ve84ZL2ZDvVBz7ZF22ZiN5-AlJDoVHGSzQ&oe=6547A58D`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353839224_3559567160957223_1457742447371581245_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1u0wlI9Log4AX8zcBXf&_nc_ht=scontent.fplm4-1.fna&oh=00_AfB_nGJgzIQrtum58BTSADGQsk6tPDrqBBYofhkqKz23jw&oe=65487D9F`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/353625737_3559567200957219_2096498203112763393_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0I6RgXlus3kAX-iLXSs&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAPVf78nA5PDf1VnJAqEMsGQgg4DZI8hzmdOR_OAOmX_g&oe=65486857`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023060601",
    date: "2023-06-06",
    content: `Ujian Sumatif Akhir juga dilaksanakan di SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III yang telah dimulai pada tanggal 5 Juni 2023 dan berakhir pada tanggal 8 Juni 2023.<br/>Tujuannya adalah untuk mengukur kemampuan pengetahuan siswa dalam mata pelajaran dan mengevaluasi hasil pembelajaran selama satu semester.<br/>"Tiga tolak-ukur pembelajaran adalah sikap, pengetahuan, dan keterampilan. Semuanya bersinergi untuk membentuk sumber daya manusia yang berkualitas".<br/>Untuk seluruh siswa dan siswi SMK NEGERI 1 BANYUASIN III Semangatlah dalam mengerjakan ujian serta kerjakan dengan kejujuran!!! `,
    title: "Pelaksanaan Ujian Sumatif Akhir Tahun Ajaran 2022/2023",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/351598699_790898692422493_871351126045009991_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u6vQeSC_SrwAX-ViezX&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAo5m2q2oGFZMAOGlBHnsOHs1Lwl4uai6Q9mNgGtBMuXA&oe=6548E701`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/351339168_1698931407223348_1843026700358197004_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0bRZYdMIhXAAX9HiHi3&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCnLtGIdMvNdtWI_M3l5NM_iikzteLU41RwZvjCivoT0g&oe=6547E7D1`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/351327600_276524251426425_2306046404703099941_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iGuZVo4JH3cAX8pCd5v&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAz5KCsKCc8j2oNsv7DDbg-x-yk3ELBt6rXPNiHmQ0gXw&oe=6547F72D`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/351341624_1468636603873006_4165677815944777363_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sJnvZfpiOL0AX_pGaFo&_nc_ht=scontent.fplm4-1.fna&oh=00_AfBo7TXLg7AAqJKsqi8XXV3IXQ-2jMhyAyFig2pupIi61Q&oe=65479511`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/352233667_637601631271359_6171986304313328159_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QhcbLDE0-UUAX9EyQQb&_nc_ht=scontent.fplm4-1.fna&oh=00_AfDVbnAWWNrl_EFAGdBjop-qgCq45RZ9o7k7OBdS7R17JA&oe=6547ACCD`
      ]
    },
    author: "Admin",
    tags: [tags.kegiatan],
    category: "berita"
  },
  {
    id: "2023060101",
    date: "2023-06-01",
    content: `Gotong Royong Membangun Peradaban dan Pertumbuhan Global". Begitulah tema peringatan hari lahir Pancasila tahun 2023.<br/>Tema ini mengandung arti bahwa momentum peringatan hari raya Pancasila menjadi pemantik bagi bangsa Indonesia untuk bahu-membahu mewujudkan peradaban masyarakat Indonesia yang lebih maju dan menjadi pusat pertumbuhan dunia," kata Yudian Wahyudi selalu Kepala Badan Pembinaan Ideologi Pancasila (BPIP). <br/>SMK Pusat Keunggulan SMK Negeri 1 Banyuasin III pun tak kalah semangat dan khidmat dalam melaksanakan kegiatan upacara bendera peringatan Hari Lahir Pancasila Kamis, 1 Juni 2023.<br/>Meresapi tema "Gotong Royong Membangun Peradaban dan Pertumbuhan Global" agar selalu meningkatkan kinerja dalam mencerdaskan anak bangsa dalam lingkup vokasi. Sehingga menciptakan generasi penerus bangsa yang cakap teknologi dengan zaman serta membangun Indonesia yang makmur dan maju🔥✊.<br/>`,
    title: "Peringatan Hari Lahir Pancasila",
    image: {
      headline: {
        link: `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/351113772_299725779045084_6872070790410956613_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GprXi0VVXfMAX9bzRiL&_nc_ht=scontent.fplm4-1.fna&oh=00_AfClGR8KqGfAoLddMjxvVaealax7jyU7UsYE0wEcxc3Tqg&oe=6547C1A6`,
        alt: ""
      },
      photos: [
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/350525392_1456090894928334_965896681561565206_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jKeUKCU4zxgAX9Wg7oN&_nc_ht=scontent.fplm4-1.fna&oh=00_AfCCSrEkuVwm7OaVKdyL5N2qbeaZ_S7hiTnXDw35IPEhEg&oe=6547581D`,
        `https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/350648070_930517714839509_2881094901125114902_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=709gOHBrB34AX_lLJGy&_nc_ht=scontent.fplm4-1.fna&oh=00_AfAnhk5oQB8Bh28EsBWaJVwh0RQU7Is0bvN3DvaVOaljyw&oe=6548FB57`
      ]
    },
    author: "Admin",
    tags: [tags.perayaan],
    category: "berita"
  }
];

export default news;
