import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/table/Pagination";
import TableSearch from "@/components/table/Search";
import Table from "@/components/table/Table";
import { classesData } from "@/lib/data";

interface classesData {
    id: string;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
}

const dataColumns = [
    {
        header: "Nomor"
    },
    {
        header: "Kelas",
        accessor: "name",
        className: "hidden md:table-cell"
    },
    {
        header: "Kapasitas",
        accessor: "capacity",
        className: "hidden md:table-cell"
    },
    {
        header: "Tingkat",
        accessor: "grade",
        className: "hidden lg:table-cell"
    },
    {
        header: "Wali Kelas",
        accessor: "supervisor",
        className: "hidden lg:table-cell"
    }
];

function EventPage() {
    const renderRow = (item: classesData) => {
        return (
            <tr key={item.id} className="even:bg-slate-100 hover:bg-yellow-50 border-b border-gray-300 text-center text-sm">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.capacity}</td>
                <td>{item.grade}</td>
                <td className="text-left">{item.supervisor}</td>
                <td>
                    <div className="flex justify-center p-2 gap-2">
                        <div className="p-2 bg-[#c3ebfa] rounded-full hover:-translate-y-0.5 hover:opacity-55">
                            <Link href={`/list/teacher/${item.id}`}>
                                <Image width={16} height={16} className="w-4 h-4" src="/view.png" alt={item.name} />
                            </Link>
                        </div>
                        <div className="p-2 bg-[#cfceff] rounded-full">
                            <Link href={`/list/teacher/${item.id}`}>
                                <Image width={16} height={16} className="w-4 h-4" src="/delete.png" alt={item.name} />
                            </Link>
                        </div>
                    </div>
                </td>
            </tr>
        );
    };
    return (
        <>
            <div className="flex h-fit w-full items-center justify-between flex-wrap">
                <h1 className="hidden font-semibold text-lg lg:block">Daftar Kegiatan</h1>
                <TableSearch />
            </div>
            <div className="flex flex-grow">
                <Table center renderRow={renderRow} items={classesData} columns={dataColumns} />
            </div>
            <div className="flex w-full h-fit">
                <Pagination />
            </div>
        </>
    );
}

export default EventPage;
