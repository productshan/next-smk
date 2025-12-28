import Image from "next/image";
import React, { useEffect } from "react";

export default function ShowImage({ link, isOpen, onClose }: { link: string; isOpen: boolean; onClose: () => void }) {
  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300 p-4"
      onClick={onClose} // Click backdrop to close
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-full max-h-full w-auto h-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
      >
        <Image
          src={link}
          alt="Full view"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100vw",
            maxHeight: "90vh",
            objectFit: "contain"
          }}
          priority
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
