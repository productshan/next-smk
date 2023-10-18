import Link from "next/link";
import React from "react";

export default function Desc({
  isActive,
  items,
  description,
  onClick
}: {
  onClick: () => void;
  description: String;
  isActive: boolean;
  items: Array<{
    title: string;
    path: string;
  }>;
}) {
  return (
    <div className={`transition transform w-3/5 bg-white absolute ${isActive ? "visible duration-500" : "invisible duration-500"} shadow-lg`}>
      <div className={`transition transform ${isActive ? "translate-y-0" : "-translate-y-5"} flex p-4 flex-row`}>
        <div className="w-1/3">
          <div className="w-full h-[4px] bg-accent-300" />
          <p className="text-sm mt-3">{description}</p>
        </div>
        <div className="ml-8 w-full grid grid-cols-2 gap-4 content-start">
          {items.map((data, key) => {
            return (
              <Link onClick={onClick} href={data.path} key={key} className="group/item p-1 hover:bg-gray-100">
                <p className="text-base w-full flex justify-between items-center">
                  {data.title}
                  <i className="invisible transition transform fa fa-angle-right -translate-x-5 group-hover/item:visible group-hover/item:translate-x-0" />
                </p>
                <div className="w-full h-[2px] bg-locate" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
