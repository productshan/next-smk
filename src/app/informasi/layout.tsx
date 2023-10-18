import { Sidebar } from "@/components";
import React from "react";
const SidebarContent = () => {
  return (
    <div className="w-full shadow-lg rounded-md overflow-hidden">
      <div className="p-2 w-full bg-accent-200">
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
      <div className="page-wrapper">
        <div className="flex flex-row w-full">
          {children}
          <Sidebar>
            <SidebarContent />
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
