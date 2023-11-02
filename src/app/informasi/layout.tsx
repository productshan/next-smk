import { Sidebar } from "@/components";
import React from "react";
const SidebarContent = () => {
  return (
    <div className="shadow-lg w-full rounded-md overflow-hidden">
      <div className="p-2 bg-accent-200">
        <b className="text-white font-semibold">Arsip</b>
      </div>
      <div className="bg-white p-2 flex flex-col">
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">Oktober 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">September 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">Agustus 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer mb-2">Juli 2023</b>
        <b className="text-sm text-gray font-semibold hover:text-black hover:cursor-pointer">Juni 2023</b>
      </div>
    </div>
  );
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper">
      <div className="mobile-wrapper sm:page-wrapper sm:w-[60%] w-[90%]">
        <div className="grid grid-cols-1 sm:grid-cols-8 gap-4 mt-4">
          <div className="sm:col-span-6">{children}</div>
          <div className="hidden col-span-2 sm:inline">
            <Sidebar>
              <SidebarContent />
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
}
