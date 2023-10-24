import Link from "next/link";
import React from "react";

export default function DescMobile({
  isActive,
  items
}: {
  isActive: boolean;
  items: Array<{
    title: string;
    path: string;
  }>;
}) {
  return (
    <div className={`${isActive ? "flex" : "hidden"} bg-accent-300 flex-col pl-6`}>
      {items.map((data, key) => {
        return (
          <Link href={data.path} key={key} className={`border-b-1 border-black py-2`}>
            <p className="text-base text-white w-full flex justify-between items-center">{data.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
