"use client";

import { useState, useEffect } from "react"; // 1. Added useEffect
import { FiBookOpen, FiMenu, FiX } from "react-icons/fi";
import Button from "@/components/ui/Button";

export default function HeaderComponent() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home");

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                // If scrolling down, hide navbar. If scrolling up, show navbar.
                if (window.scrollY > lastScrollY && window.scrollY > 80) {
                    setIsVisible(false); // Hide
                } else {
                    setIsVisible(true);  // Show
                }
                // Update the last scroll position
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);


    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
    ];

    return (
        <header
            className={`sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
                        <FiBookOpen className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-slate-900">A M I S</p>
                    </div>
                </div>

                <nav className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${active === link.label
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-slate-700 hover:bg-slate-100"
                                }`}
                            onClick={() => setActive(link.label)}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <Button outlined onClick={() => setActive("Login")} className="border-blue-600 text-blue-700 hover:bg-blue-50">
                        Login
                    </Button>
                    <Button onClick={() => setActive("Register")}>Register</Button>
                </div>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                </button>
            </div>

            {open ? (
                <div className="border-t border-slate-200 bg-white/98 px-6 py-5 md:hidden">
                    <div className="space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <Button outlined className="w-full" onClick={() => setOpen(false)}>
                            Login
                        </Button>
                        <Button className="w-full" onClick={() => setOpen(false)}>
                            Register
                        </Button>
                    </div>
                </div>
            ) : null}
        </header>
    );
}