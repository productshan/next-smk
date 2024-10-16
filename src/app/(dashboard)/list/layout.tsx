import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-full p-4">
            <div className="flex flex-col flex-1 rounded-md p-4 shadow-md bg-white">{children}</div>
        </div>
    );
}
