"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/image/home-1.jpg",
        titleLines: [
            "A SUN PARADISE THROUGH",
            "INNOVATIVE SUN PROTECTION",
            "SOLUTIONS",
        ],
        description:
            "WITH OUR PERGOLAS, YOU CAN ENJOY THE OUTDOOR AREA ALL YEAR ROUND.",
        ctaLabel: "TO THE PRODUCTS",
        ctaHref: "#products",
    },
    {
        id: 2,
        image: "/image/home-2.jpg", // <-- change to your real image
        titleLines: [
            "DESIGN-MINDED SHADE",
            "FOR MODERN OUTDOOR LIVING",
        ],
        description:
            "DISCOVER FLEXIBLE SOLUTIONS THAT COMBINE AESTHETICS WITH DURABILITY.",
        ctaLabel: "VIEW REFERENCES",
        ctaHref: "#references",
    },
    {
        id: 3,
        image: "/image/home-3.jpg", // <-- change to your real image
        titleLines: [
            "TAILOR-MADE PERGOLAS",
            "FOR TERRACES AND GARDENS",
        ],
        description:
            "FROM CONSULTATION TO INSTALLATION — EVERYTHING FROM A SINGLE SOURCE.",
        ctaLabel: "REQUEST A QUOTE",
        ctaHref: "#contact",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6s per slide

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrent(index);
    };

    const goPrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative w-full min-h-screen">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Background image */}
                    <Image
                        src={slide.image}
                        alt="Modern pergola"
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/45" />

                    {/* HERO TEXT */}
                    <div className="relative z-10 flex min-h-screen items-center">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-36 pb-10 text-center sm:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-[1.1]">
                                {slide.titleLines.map((line, i) => (
                                    <span key={i} className="block">
                                        {line}
                                    </span>
                                ))}
                            </h1>

                            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto sm:mx-0">
                                {slide.description}
                            </p>

                            <div className="mt-6">
                                <a
                                    href={slide.ctaHref}
                                    className="inline-flex items-center rounded-full bg-[#62c3ac]
                    px-8 py-2.5 text-sm font-semibold text-slate-900
                    shadow-xl shadow-emerald-500/30
                    transition-all duration-200 hover:bg-[#56b39c] hover:-translate-y-[2px]"
                                >
                                    {slide.ctaLabel}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls (arrows + dots) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-3">
                {/* Arrows */}
               {/*  <div className="pointer-events-auto flex gap-4">
                    <button
                        onClick={goPrev}
                        aria-label="Previous slide"
                        className="h-9 w-9 rounded-full border border-white/50 bg-black/40 backdrop-blur-sm
              flex items-center justify-center text-sm hover:bg-black/70"
                    >
                        ‹
                    </button>
                    <button
                        onClick={goNext}
                        aria-label="Next slide"
                        className="h-9 w-9 rounded-full border border-white/50 bg-black/40 backdrop-blur-sm
              flex items-center justify-center text-sm hover:bg-black/70"
                    >
                        ›
                    </button>
                </div> */}

                {/* Dots */}
                <div className="pointer-events-auto flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${index === current
                                    ? "w-5 bg-[#62c3ac]"
                                    : "bg-white/50 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
