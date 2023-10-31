import employee from "@/data/employee";
import React from "react";
import Card from "../components/card";
import { notFound } from "next/navigation";

export default function Index({ params }: { params: any }) {
  const type = params.type;
  var isNotFound = type === "guru" ? false : type === "staff" ? false : true;

  if (isNotFound) {
    return notFound();
  }

  return (
    <div className="flex grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 xl:grid-cols-4 xl:gap-8">
      {employee.map((profiles, key) => {
        if (profiles.status === type) {
          return (
            <div key={key} className="w-full h-full flex items-center justify-center">
              <Card profile={profiles} />
            </div>
          );
        }
      })}
    </div>
  );
}
