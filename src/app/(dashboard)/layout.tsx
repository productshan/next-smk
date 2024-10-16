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
        <div className="h-screen flex">
            <div className="w-[15%] min-w-[15%] md:w-[10%] md:min-w-[10%] lg:w-[17%] lg:min-w-[17%] xl:w-[15%] xl:min-w-[15%] p-4">
                <Link href="/" className="flex justify-center gap-2 items-center">
                    <Image src="/logo-smk.png" width={24} height={24} alt="" />
                    <span className="hidden text-xs xl:text-base lg:block font-semibold text-center">SMK Negeri 1 BA III</span>
                </Link>
                <div>
                    <Menu />
                </div>
            </div>
            <div className="flex flex-grow flex-col bg-slate-100 overflow-y-scroll">
                <Navbar />
                <div className="h-full w-full">{children}</div>
            </div>
        </div>
    );
}
