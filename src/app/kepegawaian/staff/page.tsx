"use client";
import React, { useState } from "react";
import Card from "../components/card";
import employee from "@/data/employee";

export default function Page() {
  const employeeData = employee;
  return (
    <div className="page-wrapper">
      <div className="flex grid grid-cols-4 gap-8">
        {employeeData.map((profiles, key) => {
          if (profiles.status === "staff") {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <Card profile={profiles} key={key} />
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
