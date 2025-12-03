"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
    {
        id: 1,
        image: "/image/collage-1.png",

        title: "Lamellendach",
        description:
            "Eine beliebte Art der Terrassenüberdachung stellt das Lamellendach dar, welches aus einer Gestellkonstruktion mit einzelnen Lamellen besteht.",
    },
    {
        id: 2,
        image: "/image/home-1.webp",

        title: "Pergolasysteme",
        description:
            "Ein Sonnenschutzsystem, bei dem Sie draußen sein und doch das geschützte Gefühl eines Raumes genießen können. Unsere maßgeschneiderten Pergolasysteme verwandeln Ihre Terrasse in einen vollwertigen Wohlfühlbereich.",
    },
    {
        id: 3,
        image: "/image/collage-2.png",

        title: "GLASDÄCHER",
        description:
            "Das TEMEL Terrassendach vereint ansprechendes Design mit individuell abstimmbarer Funktionalität.",
    },
    {
        id: 4,
        image: "/image/collage-3.png",

        title: "VERSCHLUSSSYSTEME",
        description:
            "Die perfekte Ergänzung für Ihre Terrassenüberdachung",
    },
    {
        id: 5,
        image: "/image/collage-4.png",

        title: "MARKISEN",
        description:
            "Sie benötigen einen effektiven Sonnenschutz für Ihren Außenbereich? TEMEL PLANEN bietet robuste, moderne Markisen, die sich durch Qualität und Individualität auszeichnen.",
    },
    {
        id: 6,
        image: "/image/collage-5.png",

        title: "FIXE SONNENSEGEL",
        description:
            "Bei Temel erwarten Sie maßgeschneiderte Lösungen für Sonnensegel, die sowohl durch erstklassige Qualität als auch ansprechendes und modernes Design",
    },
    {
        id: 7,
        image: "/image/collage-6.png",

        title: "ROLLLÄDEN",
        description:
            "TEMEL Rollläden sind vielseitig. Ästhetisch und unauffällig zugleich bieten sie überzeugende und funktionale Vorteile an Sicht-, Wärme-und Schallschutz, die jeder",
    },
    {
        id: 8,
        image: "/image/collage-7.png",

        title: "INSEKTENSCHUTZ",
        description:
            "Temel Planen hilft Ihnen Ihre Abende und Nächte ohne lästige Insekten wieder zu genießen. Unser Insektenschutzgitter wird für Ihre Fenster, Türen oder Dachflächenfenster ganz nach Maß",
    },
    {
        id: 9,
        image: "/image/collage-8.png",

        title: "STARKWINDSCHIRME",
        description:
            "Starkwindschirme von TEMEL finden überall dort ihren Einsatzort, wo besondere Witterungsverhältnisse herrschen.",
    },
    {
        id: 10,
        image: "/image/collage-9.png",

        title: "PLANEN & MARKISENSTOFFE NACH MASS",
        description:
            "Wind, Regen und Frost - all dem sind Planen ungeschützt ausgesetzt. Egal, ob für LKW oder Ihr Schwimmbad - die Planen von TEMEL überzeugen durch Qualität und hochwertige Verarbeitung.",
    },
];

export default function HeroImageCollage({ items = DEFAULT_ITEMS }) {
    const [current, setCurrent] = useState(0);

    // Auto slide for mobile slider
    useEffect(() => {
        if (items.length <= 1) return;

        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 5000); // 5s per slide

        return () => clearInterval(id);
    }, [items.length]);

    const goToSlide = (index) => setCurrent(index);

    return (
        <section className="bg-base-100 py-10 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* MOBILE: SIMPLE AUTO SLIDER (IMAGE ONLY) */}
                {/*
                <div className="lg:hidden">
                    <div className="relative overflow-hidden rounded-lg bg-neutral/20 aspect-[4/3] sm:aspect-[16/9]">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title || item.label || "Product image"}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                        ))}
                    </div>

                     /*dots* 
                <div className="mt-4 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all ${index === current
                                ? "w-6 bg-primary"
                                : "w-2.5 bg-base-content/40 hover:bg-base-content/70"
                                }`}
                        />
                    ))}
                </div>
            </div> 
        */}

                {/* DESKTOP & TABLET: 2×2 COLLAGE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-lg bg-neutral/20 group"
                        >
                            {/* keep all tiles same aspect ratio -> same size */}
                            <div className="relative aspect-[4/3] xl:aspect-[16/9]">
                                <Image
                                    src={item.image}
                                    alt={item.title || item.label || "Product image"}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                />
                            </div>

                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* text */}
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6 ">
                                {item.label && (
                                    <p className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase ">
                                        {item.label}
                                    </p>
                                )}

                                {(item.title || item.description) && (
                                    <div className="mt-1">
                                        {item.title && (
                                            <h3 className="text-sm text-white  md:text-lg font-semibold ">
                                                {item.title}
                                            </h3>
                                        )}
                                        {item.description && (
                                            <p className="mt-2 text-white  text-[11px] sm:text-xs md:text-sm max-w-md">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
