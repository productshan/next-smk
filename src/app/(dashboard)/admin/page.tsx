"use client";
import Announce from "@/components/Announce";
import Card from "@/components/Card";
import BarChart from "@/components/chart/BarChart";
import RadialChart from "@/components/chart/RadialChart";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

function AdminPage() {
    return (
        <div className="flex gap-1 flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-4 gap-4 flex flex-col">
                {/* Card Section */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <Card
                        label="Staff"
                        more={() => {
                            console.log("first");
                        }}
                    />
                    <Card label="Gurus" />
                    <Card label="Siswa" />
                    <Card label="Kelas" />
                </div>
                {/* Char Section */}
                <div className="flex flex-row flex-wrap gap-4">
                    {/* Radial Chart */}
                    <div className="flex min-w-[12rem] h-[35vh] flex-1">
                        <RadialChart />
                    </div>
                    {/* Bar Chart */}
                    <div className="flex min-w-[35rem] h-[35vh] flex-1">
                        <BarChart />
                    </div>
                </div>
                {/* Announce Section */}
                <Announce />
            </div>
            <div className="w-full flex flex-col lg:w-1/3 p-4 gap-4">
                <EventCalendar />
            </div>
        </div>
    );
}

export default AdminPage;
