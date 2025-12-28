import { Sidebar } from "@/components";
import React from "react";
import SidebarContent from "./components/sidebarContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper bg-gray-50/50">
      <div className="mobile-wrapper sm:page-wrapper w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          <main className="lg:col-span-9">{children}</main>
          <aside className="hidden lg:block lg:col-span-3">
            <Sidebar>
              <SidebarContent />
            </Sidebar>
          </aside>
        </div>
      </div>
    </div>
  );
}

