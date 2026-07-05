"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroSection() {
    const bannerImages = [
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=900&q=80"
    ];

    return (
        <section id="home" className="overflow-hidden bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Text Content */}
                <div className="max-w-2xl space-y-6 text-center md:text-left lg:text-left">
                    <div>
                        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700">
                            ভর্তি চলছে (Admission Now)
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:leading-normal">
                        <span className="text-blue-700 italic">আখের মামুদ</span> <br />
                        আইডিয়াল স্কুল
                    </h1>

                    <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 md:mx-0 sm:text-lg">
                        আমরা মানসম্মত শিক্ষা, নৈতিক মূল্যবোধ এবং আধুনিক শিক্ষণ পদ্ধতির মাধ্যমে প্রতিটি শিক্ষার্থীকে একজন দক্ষ, সৃজনশীল ও দায়িত্বশীল নাগরিক হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                        <Button className="min-w-[140px]">Get Started</Button>
                        <Button variant="secondary" outlined className="min-w-[140px]">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Right Slider Image Column */}
                <div className="w-full max-w-[550px] mx-auto rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 w-full">
                    <div className="group relative overflow-hidden rounded-[1.75rem]">

                        <Swiper
                            // 1. Remove "EffectFade" from modules
                            modules={[Autoplay, Pagination, Navigation]}
                            // 2. Remove or change effect="fade". Swiper slides horizontally by default.
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={{
                                prevEl: ".hero-swiper-button-prev",
                                nextEl: ".hero-swiper-button-next",
                            }}
                            className="hero-swiper w-full"
                        >
                            {bannerImages.map((src, index) => (
                                <SwiperSlide key={index} className="relative aspect-[5/4] w-full">
                                    <Image
                                        src={src}
                                        alt={`School environment slide ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        sizes="(max-w-1024px) 100vw, 500px"
                                        className="object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Custom Navigation Left Arrow */}
                        <button className="hero-swiper-button-prev absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-md backdrop-blur-sm transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none ">
                            <FiChevronLeft className="h-5 w-5" />
                        </button>

                        {/* Custom Navigation Right Arrow */}
                        <button className="hero-swiper-button-next absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-md backdrop-blur-sm transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                            <FiChevronRight className="h-5 w-5" />
                        </button>

                    </div>
                </div>

            </div>

            {/* Custom styles for pagination active bullet */}
            <style jsx global>{`
                .hero-swiper .swiper-pagination-bullet-active {
                    background: #1d4ed8 !important;
                    width: 18px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
}