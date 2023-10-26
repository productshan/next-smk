import { Sidebar } from "@/components";
import React from "react";
import SidebarContent from "./components/sidebarContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper">
      <div className="mobile-wrapper sm:page-wrapper w-[90%] sm:w-[60%]">
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
