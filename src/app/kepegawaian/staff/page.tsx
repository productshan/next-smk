"use client";
import React, { useState } from "react";
import Card from "../components/card";
import employee from "@/data/employee";

export default function Page() {
  const employeeData = employee;
  return (
    <div className="mobile-wrapper w-[90%] sm:w-[60%] sm:page-wrapper">
      <div className="flex grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
        {employeeData.map((profiles, key) => {
          if (profiles.status === "staff") {
            return (
              <div key={key} className="w-full h-full flex items-center justify-center">
                <Card profile={profiles} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
