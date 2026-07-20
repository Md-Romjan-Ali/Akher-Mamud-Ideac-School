'use client'
import { authClient } from "@/lib/auth-client";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons"
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function Sidebar() {
    const { data: session } = authClient.useSession()
    const dainamicNavItem = {
        'admin': [
            { icon: House, label: "Profile", href: 'dashboard/profile' },
            { icon: Magnifier, label: "Search", href: 'dashboard/profile' },
            { icon: Bell, label: "Notifications", href: 'dashboard/profile' },
            { icon: Envelope, label: "Messages", href: 'dashboard/profile' },
            { icon: Person, label: "Profile", href: 'dashboard/profile' },
            { icon: Gear, label: "Settings", href: 'dashboard/profile' },
        ],
        'teacher': [
            { icon: House, label: "Home", href: '/dashboard/teacher/profile' },
            { icon: Magnifier, label: "Search", href: 'dashboard/profile' },
            { icon: Bell, label: "Notifications", href: 'dashboard/profile' },
            { icon: Envelope, label: "Messages", href: 'dashboard/profile' },
            { icon: Person, label: "Profile", href: 'dashboard/profile' },
            { icon: Gear, label: "Settings", href: 'dashboard/profile' },
        ],
        'student': [
            { icon: House, label: "Profile", href: "/dashboard/student/profile" },
            { icon: Magnifier, label: "Routine", href: '/dashboard/student/routine' },
            { icon: Bell, label: "Result", href: '/dashboard/student/result' },
            { icon: Envelope, label: "Messages", href: '/dashboard/student/messages' },
            { icon: Person, label: "Attendance", href: '/dashboard/student/attendance' },
            { icon: Gear, label: "Settings", href: 'dashboard/profile' },
        ]
    }
    const role = session?.user.role
    const navItems = dainamicNavItem[role] || []
    return (
        <div>
            <Drawer.Body className="hidden md:block min-h-screen w-52">
                <nav className="flex flex-col gap-1">
                    {navItems?.map((item) => (
                        <Link

                            href={item.href}
                            key={item.label}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                            type="button"
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
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.label}
                                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                            type="button"
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