import { Button } from "@heroui/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Get in Touch</p>
                        <h2 className="text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl">আমাদের বিদ্যালয়ের সহায়তা দলের সঙ্গে যোগাযোগ করুন
                        </h2>
                        <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg text-justify">
                            ভর্তি সংক্রান্ত তথ্য, প্রয়োজনীয় সহায়তা অথবা যেকোনো সাধারণ পরামর্শের জন্য আমাদের সঙ্গে যোগাযোগ করুন। আমাদের অভিজ্ঞ দল আপনার সকল প্রশ্নের উত্তর দিতে এবং প্রয়োজনীয় সহযোগিতা প্রদান করতে সর্বদা প্রস্তুত।
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-3xl bg-blue-600 p-3 text-white">
                                    <FiMapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">School Address:</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">মোবারকপুর, শেরপুর সদর, মাইমেনসিংহ</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-3xl bg-blue-600 p-3 text-white">
                                    <FiPhone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Phone Number:</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">0123456789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-3xl bg-blue-600 p-3 text-white">
                                    <FiMail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Email:</p>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">akis@gmail.com</p>
                                </div>
                            </div>

                            <Button className="w-full">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
