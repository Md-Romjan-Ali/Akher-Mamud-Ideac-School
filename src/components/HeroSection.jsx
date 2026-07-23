"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Button } from "@heroui/react";

export default function HeroSection() {
    const bannerImages = [
        "https://i.ibb.co.com/XxDjCmJx/484713077-2038670389956190-6800219463606011938-n.jpg",
        "https://i.ibb.co.com/BVxzpc5Q/472323797-1985143795308850-4884126481897440377-n.jpg",

    ];

    return (
        <section
            id="home" className="overflow-hidden bg-blue-50 py-16 sm:py-24">
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

                    <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 md:mx-0 sm:text-lg text-justify">
                        আমরা মানসম্মত শিক্ষা, নৈতিক মূল্যবোধ এবং আধুনিক শিক্ষণ পদ্ধতির মাধ্যমে প্রতিটি শিক্ষার্থীকে একজন দক্ষ, সৃজনশীল ও দায়িত্বশীল নাগরিক হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                        <Button className="">Get Started</Button>
                        <Button variant="secondary" outlined className="">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Right Slider Image Column */}
                <div className="w-full max-w-[550px] mx-auto rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
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

        </section>
    );
}