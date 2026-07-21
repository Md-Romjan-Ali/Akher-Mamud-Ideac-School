'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookOpen } from "react-icons/fi";
import { Bars } from "@gravity-ui/icons";
import { HiCalendarDays, HiChatBubbleLeftRight, HiClipboardDocumentList, HiDocumentText, HiHome, HiUser, HiUsers } from "react-icons/hi2";
import { HiAcademicCap, HiCurrencyDollar } from "react-icons/hi";

export function Sidebar() {
    const { data: session } = authClient.useSession()
    const pathName = usePathname()
    const dainamicNavItem = {
        admin: [
            { icon: HiHome, label: "Home", href: "/" },
            { icon: HiUser, label: "Profile", href: "/dashboard/admin/profile" },
            { icon: HiAcademicCap, label: "All Teachers", href: "/dashboard/admin/allTeacher" },
            { icon: HiUsers, label: "All Students", href: "/dashboard/admin/allStudent" },
            { icon: HiUsers, label: "All Users", href: "/dashboard/admin/allUser" },
            { icon: HiCurrencyDollar, label: "Earn & Cost", href: "/dashboard/admin/earn-cost" },
            { icon: HiCalendarDays, label: "Teacher Attendance", href: "/dashboard/admin/teacherAttendence" },
        ],

        teacher: [
            { icon: HiHome, label: "Home", href: "/" },
            { icon: HiUser, label: "Profile", href: "/dashboard/teacher/profile" },
            { icon: HiUsers, label: "All Students", href: "/dashboard/teacher/allStudent" },
            { icon: HiClipboardDocumentList, label: "Attendance", href: "/dashboard/teacher/attendence" },
            { icon: HiAcademicCap, label: "My Class", href: "/dashboard/teacher/myClass" },
            { icon: HiCalendarDays, label: "My Attendance", href: "/dashboard/teacher/myAttendence" },
        ],

        student: [
            { icon: HiUser, label: "Profile", href: "/dashboard/student/profile" },
            { icon: HiDocumentText, label: "Routine", href: "/dashboard/student/routine" },
            { icon: HiAcademicCap, label: "Result", href: "/dashboard/student/result" },
            { icon: HiChatBubbleLeftRight, label: "Messages", href: "/dashboard/student/messages" },
            { icon: HiClipboardDocumentList, label: "Attendance", href: "/dashboard/student/attendance" },
        ],
    };

    const role = session?.user.role
    const navItems = dainamicNavItem[role] || []
    return (
        <div className="pl-5">
            <Drawer.Body className="hidden md:block min-h-screen w-52">
                <div className="flex gap-5 my-10 justify-center flex-col">
                    <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                            <FiBookOpen className="h-5 w-5" />
                        </div>
                        <span className="text-2xl font-bold tracking-wider text-slate-900">AMIS</span>
                    </Link>
                    <h1 className="text-xl font-bold text-slate-900 "><span className="bg-blue-500/10 text-blue-500 px-3 py-1.5 rounded-full">{role}</span> Dashboard</h1>
                </div>
                <nav className="flex flex-col gap-1">
                    {navItems?.map((item) => (
                        <Link

                            href={item.href}
                            key={item.label}
                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default ${pathName === item.href ? 'bg-blue-500 text-white' : ''}`}
                        >
                            <item.icon className="size-5 text-muted" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </Drawer.Body>
            <Drawer>
                <Button variant="secondary" className={'md:hidden'}>
                    <Bars />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <div className="flex gap-5 my-10 justify-center flex-col">
                                    <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                                            <FiBookOpen className="h-5 w-5" />
                                        </div>
                                        <span className="text-2xl font-bold tracking-wider text-slate-900">AMIS</span>
                                    </Link>
                                    <h1 className="text-xl font-bold text-slate-900 "><span className="bg-blue-500/10 text-blue-500 px-3 py-1.5 rounded-full">{role}</span> Dashboard</h1>
                                </div>
                            </Drawer.Header>
                            <Drawer.Body>
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.label}
                                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default ${pathName === item.href ? 'bg-blue-500 text-white' : ''}`}
                                        >
                                            <item.icon className="size-5 text-muted" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>

    );
}