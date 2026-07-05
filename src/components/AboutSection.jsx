import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="bg-slate-50 py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">About Us</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-600 sm:text-4xl">শিক্ষার্থী, শিক্ষক ও প্রশাসকদের জন্য সমন্বিত ও কেন্দ্রীভূত বিদ্যালয় ব্যবস্থাপনা ব্যবস্থা।</h2>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        আমাদের প্ল্যাটফর্মের মাধ্যমে একটি সমন্বিত ব্যবস্থায় শিক্ষার্থী, শিক্ষক, একাডেমিক তথ্য, উপস্থিতি, নোটিশ, অ্যাসাইনমেন্ট এবং পরীক্ষার ফলাফল সহজে পরিচালনা করা  হয়। এটি বিদ্যালয়ের প্রশাসনিক কার্যক্রমকে আরও সহজ, দ্রুত ও সুশৃঙ্খল করে, শিক্ষক-শিক্ষার্থী-অভিভাবকদের মধ্যে কার্যকর যোগাযোগ নিশ্চিত করে এবং শিক্ষার মানোন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করে।
                    </p>
                    <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <p className="text-slate-700">প্রাথমিক থেকে মাধ্যমিক (১ম–১০ম শ্রেণি) বিদ্যালয়ের জন্য বিশেষভাবে পরিকল্পিত এই আধুনিক সিস্টেমে রয়েছে ব্যবহারবান্ধব ড্যাশবোর্ড, ভূমিকা-ভিত্তিক নিরাপদ প্রবেশাধিকার এবং শিক্ষার্থী, শিক্ষক, অভিভাবক ও প্রশাসনের জন্য সহজ ও কার্যকর ব্যবস্থাপনা সুবিধা।</p>
                    </div>
                </div>

                <div className="rounded-[2rem] bg-white p-2 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fairfield_Public_School.jpg/250px-Fairfield_Public_School.jpg"
                        alt="About school platform illustration"
                        width={400}
                        height={400}
                        className="h-full w-full rounded-[1.5rem] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
