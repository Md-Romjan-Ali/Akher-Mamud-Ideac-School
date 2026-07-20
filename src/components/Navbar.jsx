"use client";

import React, { useState, useEffect } from "react";
// Using explicit HeroUI v3.2.2 primitives
import {
    Dropdown,
    Avatar,
    Label,
    useOverlayState
} from "@heroui/react";
import { FiBookOpen, FiMenu, FiX } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeaderComponent() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const router = useRouter()
    // v3 state overlay controller for the mobile menu drawer
    const mobileMenuState = useOverlayState({
        isOpen: false,
    });

    const isMenuOpen = mobileMenuState.isOpen;

    // Better Auth session state
    const { data: session } = authClient.useSession();

    // Lock body scroll when mobile menu is open to prevent background scrolling
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Scroll tracking to show/hide navbar dynamically
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (isMenuOpen) return;

                const currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY && currentScrollY > 80) {
                    setIsVisible(false); // Scrolling down
                } else {
                    setIsVisible(true);  // Scrolling up
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar, { passive: true });
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY, isMenuOpen]);

    // Base navigation links
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Add Student", href: "/addStudent" },
    ];

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/")
    };

    return (
        <div className="mb-20">
            {/* Global Header Element */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 h-20 border-b border-slate-100 bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto w-full rounded-b-xl ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* Left Section: Mobile Toggle & Brand Identity */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={mobileMenuState.toggle}
                        className="p-2.5 -ml-2 rounded-xl text-slate-700 hover:bg-slate-50 md:hidden transition-colors focus:outline-none"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>

                    <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                            <FiBookOpen className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold tracking-wider text-slate-900">AMIS</span>
                    </Link>
                </div>

                {/* Center Section: Desktop Links */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* Display Dashboard in desktop size if authenticated */}
                    {session && (
                        <Link
                            href={`/dashboard/${session?.user.role}`}
                            className="rounded-full px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
                        >
                            Dashboard
                        </Link>
                    )}
                </div>

                {/* Right Section: Actions / Conditional Session Elements */}
                <div className="flex items-center gap-3">
                    {session ? (
                        /* Modern HeroUI v3 Dropdown implementation */
                        <Dropdown placement="bottom-end">
                            <Dropdown.Trigger>
                                <Image
                                    className="transition-transform rounded-full border-blue-500 w-12 h-12 cursor-pointer"
                                    alt={session.user?.name || "User"}
                                    src={session.user?.image || undefined}
                                    width={100}
                                    height={100}

                                />
                            </Dropdown.Trigger>
                            <Dropdown.Popover className="bg-white min-w-[200px] border border-slate-100 rounded-xl shadow-xl p-1 mt-2">
                                <Dropdown.Menu
                                >
                                    {/* Profile header display block */}
                                    <Dropdown.Item id="profile" textValue="Profile Info" className="px-3 py-2 border-b border-slate-50 pointer-events-none select-none">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Signed in as</span>
                                            <span className="text-sm font-bold text-slate-800 truncate mt-0.5">{session.user?.email}</span>
                                        </div>
                                    </Dropdown.Item>

                                    {/* Navigation Links inside Dropdown */}
                                    <Dropdown.Item id="dashboard" textValue="Dashboard" className="md:hidden mt-1 rounded-lg hover:bg-slate-50">
                                        <Link href={`/dashboard/${session?.user?.role}`} className="w-full block text-sm font-medium text-slate-700 px-1 py-1">
                                            <Label>Dashboard</Label>
                                        </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="settings" textValue="My Settings" className="rounded-lg hover:bg-slate-50 mt-0.5">
                                        <Link href="/settings" className="w-full block text-sm font-medium text-slate-700 px-1 py-1">
                                            <Label>My Settings</Label>
                                        </Link>
                                    </Dropdown.Item>

                                    {/* Action items */}
                                    <Dropdown.Item
                                        onClick={handleLogout}
                                        textValue="Log Out"
                                        variant="danger"
                                        className="rounded-lg mt-1 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
                                    >
                                        <Label>Log Out</Label>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    ) : (
                        <div className="hidden md:flex items-center gap-3">
                            <Link href="/login">
                                <Button outlined className="border-slate-200 text-slate-700 hover:bg-slate-50">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* Custom Mobile Drawer Menu via Overlay State */}
            <div
                className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{ paddingTop: "5rem" }}
            >
                <div className="flex flex-col px-6 py-4 gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={mobileMenuState.close}
                            className="w-full block rounded-xl px-4 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Extra Dashboard link on Mobile view if authenticated */}
                    {session && (
                        <Link
                            href={`/dashboard/${session?.user.role}`}
                            onClick={mobileMenuState.close}
                            className="w-full block rounded-xl px-4 py-3.5 text-base font-bold text-blue-600 bg-blue-50/50 hover:bg-blue-50 transition-colors mt-1"
                        >
                            Dashboard
                        </Link>
                    )}
                </div>

                {!session && (
                    <div className="mt-auto p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-3">
                        <Link href="/login" onClick={mobileMenuState.close} className="w-full">
                            <Button outlined className="w-full justify-center py-3 text-base font-medium border-slate-200 bg-white text-slate-800 shadow-sm">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register" onClick={mobileMenuState.close} className="w-full">
                            <Button className="w-full justify-center py-3 text-base font-medium bg-blue-600 text-white shadow-sm">
                                Register
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}