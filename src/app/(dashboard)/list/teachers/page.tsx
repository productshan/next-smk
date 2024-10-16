import Pagination from "@/components/table/Pagination";
import TableSearch from "@/components/table/Search";
import Table from "@/components/table/Table";
import React from "react";
import Link from "next/link";
import { teachersData } from "@/lib/data";
import Image from "next/image";

type TeacherData = {
    id: number;
    teacherId: string;
    name: string;
    email: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
};

const dataColumns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "NIP",
        accessor: "teacher_id",
        className: "hidden md:table-cell"
    },
    {
        header: "Mapel",
        accessor: "subjects",
        className: "hidden md:table-cell"
    },
    {
        header: "Alamat",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Kelas",
        accessor: "classes",
        className: "hidden lg:table-cell"
    }
];

function TeacherList() {
    const renderRow = (item: TeacherData) => {
        return (
            <tr key={item.id} className="even:bg-slate-100 hover:bg-yellow-50 border-b border-gray-300 text-sm">
                <td className="gap-2 p-2">
                    <div className="flex">
                        <img src={item.photo} alt={item.name} className="w-12 h-12 mr-2 rounded-full hidden lg:block" />
                        <div className="flex flex-col">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.email}</p>
                        </div>
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.teacherId}</td>
                <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
                <td className="hidden lg:table-cell">{item.address}</td>
                <td className="hidden lg:table-cell">{item.classes.join(",")}</td>
                <td>
                    <div className="flex justify-center gap-2">
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
                <h1 className="hidden font-semibold text-lg lg:block">Daftar Guru</h1>
                <TableSearch />
            </div>
            <div className="flex flex-grow">
                <Table renderRow={renderRow} items={teachersData} columns={dataColumns} />
            </div>
            <div className="flex w-full h-fit">
                <Pagination />
            </div>
        </>
    );
}

export default TeacherList;
