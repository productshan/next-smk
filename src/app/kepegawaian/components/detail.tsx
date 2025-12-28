import React, { useState, useEffect } from "react";
import { user_man, user_woman } from "@/assets";
import { formatString } from "@/helpers";
import Image from "next/image";

export default function Detail({ isActive, onClose, profile }: { isActive: boolean; onClose: () => void; profile: any }) {
  const [imgSrc, setImgSrc] = useState(profile.picture ? profile.picture : profile.jk === "P" ? user_woman : user_man);

  // Handle ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isActive) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isActive, onClose]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Detail Pegawai</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            {/* Left: Photo */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg bg-gray-50 ring-1 ring-gray-900/5">
                <Image
                  src={imgSrc}
                  className="object-cover"
                  alt={profile.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={() => setImgSrc(profile.jk === "P" ? user_woman : user_man)}
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-2/3 space-y-8">
              <div>
                <label className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1 block">Nama Lengkap</label>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {formatString(profile.nama)}
                </h1>
                <p className="text-lg text-gray-600 mt-2 font-medium">{profile.posisi}</p>
              </div>

              <div className="space-y-6">
                <InfoGroup label="Email" value={profile.email || "-"} />

                <div className="pt-6 border-t border-gray-100">
                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Alamat</label>
                  <p className="text-gray-800 text-lg leading-relaxed">{formatString(profile.alamat) || "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoGroup = ({ label, value }: { label: string, value: string }) => (
  <div className="group">
    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1 group-hover:text-blue-500 transition-colors">{label}</label>
    <div className="text-base text-gray-900 font-medium break-words border-b border-gray-100 pb-2">{value}</div>
  </div>
);
