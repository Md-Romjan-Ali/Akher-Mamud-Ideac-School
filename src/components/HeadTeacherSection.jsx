import Image from "next/image";
import { FiMessageSquare } from "react-icons/fi";

export default function HeadTeacherSection() {
    return (
        <section className="bg-slate-50 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                {/* Fixed grid tracking ratios so the picture doesn't get overly wide on big screens */}
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    {/* Teacher Identity Column */}
                    <div className="order-1 flex flex-col items-center lg:items-stretch">
                        <div className="group aspect-square w-full max-w-md overflow-hidden rounded-full border border-slate-200 bg-white shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                            <Image
                                src="https://i.ibb.co.com/hFwD4hp1/Chat-GPT-Image-Jul-6-2026-06-43-12-AM.png"
                                alt="Head Teacher portrait"

                                width={600}
                                height={600}

                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                priority // Speeds up loading for above-the-fold content
                            />
                        </div>
                        <div className="mt-6 w-full max-w-md rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm text-center lg:text-left">
                            <p className="text-lg font-semibold text-slate-900">সাইফুল ইসলাম জীবন</p>
                            <p className="mt-1 text-sm text-slate-500">অধ্যক্ষ</p>
                            <p className="text-sm text-slate-500">আখের মামুদ আইডিয়াল স্কুল</p>
                        </div>
                    </div>

                    {/* Message Box Column */}
                    <div className="order-2 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 sm:p-10">
                            <div className="pointer-events-none absolute right-6 top-6 text-[5rem] text-blue-100 opacity-30 sm:right-8 sm:top-8 sm:text-[6rem]">
                                <FiMessageSquare className="h-full w-full" />
                            </div>
                            <div className="relative">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Message from the Head Teacher</p>
                                <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-800 text-justify sm:text-4xl">
                                    মানসম্মত শিক্ষা নিশ্চিত করা এবং আগামী দিনের যোগ্য ও আদর্শ মানুষ গড়ে তোলাই আমাদের অঙ্গীকার।
                                </h2>
                                <div className="mt-6 space-y-6 text-base leading-8 text-slate-600 sm:text-lg text-justify">
                                    <p>
                                        আমরা বিশ্বাস করি যে, শিক্ষা একটি উজ্জ্বল ভবিষ্যতের ভিত্তি। আমাদের লক্ষ্য হলো শিক্ষার্থীদের মধ্যে জ্ঞানার্জনের আগ্রহ সৃষ্টি করা, সৃজনশীলতা বিকাশে সহায়তা করা এবং তাদের একাডেমিক উৎকর্ষ অর্জনের পাশাপাশি নৈতিক মূল্যবোধ ও নেতৃত্বের গুণাবলি বিকাশে অনুপ্রাণিত করা।
                                    </p>
                                    <p>
                                        আমাদের নিবেদিতপ্রাণ শিক্ষকবৃন্দ এবং সহযোগিতাপূর্ণ বিদ্যালয় সম্প্রদায়ের সম্মিলিত প্রচেষ্টায় আমরা একটি নিরাপদ, অন্তর্ভুক্তিমূলক ও আধুনিক শিক্ষার পরিবেশ গড়ে তুলতে নিরলসভাবে কাজ করি, যেখানে প্রতিটি শিক্ষার্থী আত্মবিশ্বাসের সঙ্গে শিখতে, বিকশিত হতে এবং নিজের সম্ভাবনাকে পূর্ণভাবে বিকশিত করতে পারে।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}