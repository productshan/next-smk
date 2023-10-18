import React from "react";

export default function Index({ children }: { children: React.ReactNode }) {
  return <div className="ml-8 min-w-[256px]">{children}</div>;
}
