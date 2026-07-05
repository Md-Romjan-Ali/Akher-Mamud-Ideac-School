import { FiFacebook, FiLinkedin, FiGithub, FiBookOpen } from "react-icons/fi";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
                                <FiBookOpen className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-white">A M I S</p>

                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</p>
                        <div className="mt-6 space-y-3">
                            {quickLinks.map((link) => (
                                <a key={link.label} href={link.href} className="block text-sm text-slate-300 transition hover:text-white">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Follow Us</p>
                        <div className="mt-6 flex items-center gap-4 text-slate-300">
                            <a href="#" className="transition hover:text-white" aria-label="Facebook">
                                <FiFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="transition hover:text-white" aria-label="LinkedIn">
                                <FiLinkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="transition hover:text-white" aria-label="GitHub">
                                <FiGithub className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500 pb-5">
                    © 2026 School Management System. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
