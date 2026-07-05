import { FiBookOpen, FiUsers, FiCalendar, FiBarChart2, FiFileText, FiShield } from "react-icons/fi";

const features = [
    { icon: FiBookOpen, title: "শিক্ষার্থী ড্যাশবোর্ড", description: "উপস্থিতি, অ্যাসাইনমেন্ট, ফলাফল এবং গুরুত্বপূর্ণ তথ্য এক জায়গায় সহজেই দেখার জন্য ব্যক্তিগত শিক্ষার্থী ড্যাশবোর্ড।", }, { icon: FiUsers, title: "শিক্ষক প্যানেল", description: "পাঠ পরিকল্পনা, শিক্ষার্থীদের অগ্রগতি পর্যবেক্ষণ এবং শ্রেণি পরিচালনার জন্য আধুনিক ও কার্যকর শিক্ষক প্যানেল।", }, { icon: FiCalendar, title: "উপস্থিতি ব্যবস্থাপনা", description: "দ্রুত ও নির্ভুলভাবে উপস্থিতি সংরক্ষণ এবং তাৎক্ষণিক প্রতিবেদনের মাধ্যমে শিক্ষার্থীদের উপস্থিতি পর্যবেক্ষণ করুন।", }, { icon: FiBarChart2, title: "অনলাইন ফলাফল", description: "নিরাপদভাবে পরীক্ষার ফলাফল প্রকাশ করুন এবং শিক্ষার্থীদের অনলাইনে তাদের ফলাফল ও অগ্রগতি দেখার সুযোগ দিন।", }, { icon: FiFileText, title: "অ্যাসাইনমেন্ট ব্যবস্থাপনা", description: "সহজে অ্যাসাইনমেন্ট প্রকাশ, জমা গ্রহণ এবং নির্ধারিত সময়সীমা সম্পর্কে শিক্ষার্থীদের অবহিত রাখুন।", }, { icon: FiShield, title: "নিরাপদ লগইন ব্যবস্থা", description: "ভূমিকা-ভিত্তিক নিরাপদ লগইন ও সুরক্ষিত অ্যাক্সেসের মাধ্যমে শিক্ষার্থী, শিক্ষক ও প্রশাসকের তথ্য নিরাপদ রাখুন।", },
];

export default function FeatureSection() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Why Choose Our School Management System?</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-600">আধুনিক বিদ্যালয় ও দক্ষ প্রশাসনিক ব্যবস্থাপনার জন্য বিশেষভাবে নির্মিত।</h2>
                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        বিদ্যালয়ের প্রশাসনিক কার্যক্রমকে আরও সহজ, শিক্ষার্থীদের শিক্ষার মান উন্নত এবং শিক্ষকদের কর্মদক্ষতা বৃদ্ধি করার লক্ষ্যে পরিকল্পিত ছয়টি শক্তিশালী ও কার্যকর বৈশিষ্ট্য।
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-md transition duration-300 group-hover:bg-blue-700">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
