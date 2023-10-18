import { Sidebar } from "@/components";
import React from "react";
import SidebarContent from "./components/sidebarContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper">
      <div className="page-wrapper">
        <div className="w-full flex flex-row">
          {children}
          <Sidebar>
            <SidebarContent />
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
