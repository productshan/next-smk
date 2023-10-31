import React from "react";

export default function layout({ children, params }: { children: React.ReactNode; params: any }) {
  console.log(params);
  return (
    <div className="layout-wrapper">
      <div className="mobile-wrapper w-[90%] sm:page-wrapper lg:w-[90%] xl:w-[80%] 2xl:w-[60%]">{children}</div>
    </div>
  );
}
