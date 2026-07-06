import { FiFacebook, FiInstagram, FiYoutube, FiMessageCircle, FiBookOpen } from "react-icons/fi";

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
                        <p className="max-w-md text-sm leading-6 text-slate-300">
                            A trusted learning community dedicated to academic excellence, discipline, and holistic student development.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <a href="#" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-blue-500 hover:text-blue-400" aria-label="Facebook">
                                <FiFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-red-500 hover:text-red-400" aria-label="YouTube">
                                <FiYoutube className="h-5 w-5" />
                            </a>
                            <a href="#" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-pink-500 hover:text-pink-400" aria-label="Instagram">
                                <FiInstagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400" aria-label="WhatsApp">
                                <FiMessageCircle className="h-5 w-5" />
                            </a>
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
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Location</p>
                        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps?q=Akher%20Mamud%20Ideal%20School&z=14&output=embed"
                                title="School Location"
                                className="h-40 w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
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
