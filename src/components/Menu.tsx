import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Beranda",
                href: "/admin",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/teacher.png",
                label: "Guru",
                href: "/list/teachers",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/class.png",
                label: "Kelas",
                href: "/list/classes",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/attendance.png",
                label: "Kehadiran",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/calendar.png",
                label: "Kegiatan",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/announcement.png",
                label: "Pengumuman",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"]
            }
        ]
    },
    {
        title: "LAINNYA",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"]
            }
        ]
    }
];

const Menu = () => {
    return (
        <div className="mt-4">
            {menuItems.map((submenu) => (
                <>
                    <div className="hidden lg:block text-gray-300 border-b-2 mb-2" key={submenu.title}>
                        {submenu.title}
                    </div>
                    {submenu.items.map((item) => (
                        <Link
                            href={item.href}
                            className="font-base w-fit m-auto lg:w-full lg:m-0 text-slate-400 hover:text-black text-sm flex items-center justify-center lg:justify-start mb-2 p-2 rounded hover:bg-blue-100 hover:font-bold"
                        >
                            <Image src={item.icon} alt={item.label} width={24} height={24} className="lg:mr-2" />
                            <span className="hidden text-xs 2xl:text-sm lg:block">{item.label}</span>
                        </Link>
                    ))}
                </>
            ))}
        </div>
    );
};

export default Menu;
