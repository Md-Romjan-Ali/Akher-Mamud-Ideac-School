import { FiBookOpen, FiAward, FiUsers, FiShield } from "react-icons/fi";

const reasons = [
    {
        title: "অভিজ্ঞ শিক্ষক মণ্ডলী",
        description: "আমাদের শিক্ষকরা পরম যত্ন ও নিষ্ঠার সাথে মানসম্মত শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ।",
        icon: FiBookOpen,
    },
    {
        title: "চমৎকার একাডেমিক ফলাফল",
        description: "সঠিক ও সুশৃঙ্খল নির্দেশনার মাধ্যমে শিক্ষার্থীরা ধারাবাহিকভাবে ভালো ফলাফল করে এবং আত্মবিশ্বাসী হয়ে ওঠে।",
        icon: FiAward,
    },
    {
        title: "সহায়ক পরিবেশ",
        description: "আমরা একটি নিরাপদ ও সুশৃঙ্খল পরিবেশ নিশ্চিত করি, যেখানে শিক্ষার্থীরা প্রাতিষ্ঠানিক ও ব্যক্তিগতভাবে বিকশিত হতে পারে।",
        icon: FiShield,
    },
    {
        title: "সার্বিক বিকাশে মনোযোগ",
        description: "আমরা পড়াশোনার পাশাপাশি শিক্ষার্থীদের সৃজনশীলতা, নেতৃত্ব এবং নৈতিক চরিত্র গঠনে উৎসাহিত করি।",
        icon: FiUsers,
    },
];

const stats = [
    { label: "মোট শিক্ষার্থী", value: "১২০০+" },
    { label: "পাশের হার", value: "৯৬%" },
    { label: "গড় সাফল্য", value: "৯২%" },
    { label: "দক্ষ শিক্ষক", value: "৪৫" },
];

export default function WhyChooseSection() {
    return (
        <div className="w-full">
            <section id="why-choose" className="w-full bg-slate-900 py-20 text-gray-300">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            Why Choose Us
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                            এমন একটি বিদ্যালয়, যা শিক্ষার্থীদের আত্মবিশ্বাস ও শ্রেষ্ঠত্বের সাথে বিকশিত হতে সাহায্য করে।
                        </h2>
                        <p className="mt-4 text-lg text-slate-300">
                            আমরা প্রতিটি শিক্ষার্থীর জন্য মানসম্মত শিক্ষা, সুশৃঙ্খল শিক্ষণ এবং নিরবচ্ছিন্ন সহায়তার মাধ্যমে একটি উজ্জ্বল ভবিষ্যৎ গড়ে তোলায় বিশ্বাস করি।
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 text-justify">
                        {reasons.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-800/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="our-success" className="w-full bg-white py-20 text-slate-600">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            Our Success
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl">
                            কৃতিত্ব এবং শ্রেষ্ঠত্বের এক সুষ্পষ্ট ও গৌরবময় ইতিহাস।
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
