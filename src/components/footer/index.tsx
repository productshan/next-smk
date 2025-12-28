import React from "react";
import ContactItem from "./contactItem";
import Image from "next/image";
import { footer_icon_48, icon_fb, icon_ig, icon_yt, logo_smk } from "@/assets";
import Link from "next/link";
import { navItems } from "@/data";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-300 text-white pt-12 pb-6">
      <div className="w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Image src={logo_smk} alt="SMKN 1 Banyuasin III Logo" className="h-[80px] w-auto" />
              <div>
                <h2 className="text-xl font-bold leading-tight">SMK NEGERI 1</h2>
                <h2 className="text-xl font-bold leading-tight">BANYUASIN III</h2>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Mewujudkan lembaga pendidikan dan pelatihan kejuruan yang unggul, berkarakter, dan kompetitif di era global.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="https://www.youtube.com/@smkn1banyuasiniii159" icon={icon_yt} label="YouTube" />
              <SocialLink href="https://www.instagram.com/smkn1banyuasin3" icon={icon_ig} label="Instagram" />
              <SocialLink href="https://www.facebook.com/people/Smknsatu-Banyuasintiga/pfbid0YrRU271PtYwy7GVMLzvS6vZiUboU2aEyDo687DcwDFHbxNKsdC2ySKywKqUJKELvl/" icon={icon_fb} label="Facebook" />
            </div>
          </div>

          {/* Site Navigation Columns */}
          {navItems.map((section, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-secondary-500 border-b border-primary-400 pb-2">
                {section.text}
              </h3>
              <ul className="flex flex-col space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link href={item.path} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section - Positioned last for mobile flow */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider text-secondary-500 border-b border-primary-400 pb-2">
              Hubungi Kami
            </h3>
            <div className="flex flex-col space-y-3">
              <ContactItem icon="fa-map-marker" text="Jl. Sahri Mahasir, Desa Galang Tinggi, Kec. Banyuasin III" />
              <ContactItem icon="fa-clock-o" text="Senin - Jumat: 06:30 - 15:30" />
              <Link href="https://wa.me/6281271668397" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <ContactItem icon="fa-phone" text="0812 7166 8397" />
              </Link>
              <ContactItem icon="fa-envelope" text="smkn1banyuasin3@gmail.com" />
            </div>

          </div>
        </div>


        <div className="mt-12 pt-8 border-t border-primary-400 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-400 text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} SMK Negeri 1 Banyuasin III. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400">
            Powered by <span className="font-bold text-white">SANS TECH</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: any; label: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="bg-primary-400 hover:bg-secondary-600 p-2 rounded-full transition-all duration-300 group" aria-label={label}>
      <Image src={icon} alt={label} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
    </Link>
  );
}

