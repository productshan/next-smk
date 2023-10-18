"use client";
import React, { useState, useEffect, useRef } from "react";
import Item from "./item";
import Desc from "./desc";
import Link from "next/link";
import Image from "next/image";
import { navbar_icon } from "@/assets";

function useOutsideAlerter(ref: any, onPress: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onPress("");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

export default function Navbar() {
  const [active, setActive] = useState("");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setActive(""));
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
        { title: "Berita", path: "/informasi/berita" },
        {
          title: "Prestasi",
          path: "/informasi/prestasi"
        }
      ]
    },
    {
      text: "Playground",
      description: "For a playground",
      items: [
        {
          title: "Testing",
          path: "/test"
        }
      ]
    }
  ];
  return (
    <div ref={wrapperRef} className="sticky top-0 w-full bg-primary-300 z-10000" onClick={() => setActive("")}>
      <div className="w-3/5 mx-auto">
        <div className="w-full py-2 flex flex-row">
          <Link href={"/"} className="flex h-[80px]" onClick={() => setActive("")}>
            <Image src={navbar_icon} alt="navbar-icon" className="h-[80px] w-auto" />
          </Link>
          <div className="ml-4 w-full flex flex-row justify-around">
            {navItems.map((data, key) => {
              return (
                <Item
                  key={key}
                  text={data.text}
                  onClick={() => (active !== data.text ? setActive(data.text) : console.log("first"))}
                  isActive={active === data.text}
                />
              );
            })}
          </div>
        </div>
        {navItems.map((data, key) => {
          return (
            <Desc
              onClick={() => setActive("")}
              key={key}
              isActive={active === data.text}
              description={data.description ? data.description : "Default"}
              items={data.items ? data.items : [{ title: "Empty", path: "Empty" }]}
            />
          );
        })}
      </div>
    </div>
  );
}
