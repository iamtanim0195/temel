"use client";

import { FcGoogle } from "react-icons/fc";

const REVIEWS = [
    {
        id: 1,
        name: "Flip",
        timeAgo: "vor 1 Jahr",
        rating: 5,
        text: ""
    },
    {
        id: 2,
        name: "Olis S3",
        timeAgo: "vor 1 Jahr",
        rating: 5,
        text: "alles hat bestens funktioniert. gute beratung. lieferung und montage ok. Kleinigkeiten wurden umgehend behoben.",
    },
    {
        id: 3,
        name: "Miklós Szakács",
        timeAgo: "vor 1 Jahr",
        rating: 5,
        text: "",
    },
    {
        id: 4,
        name: "Franz Autengruber",
        timeAgo: "vor 1 Jahr",
        rating: 5,
        text: "Wir haben bei der Fa. Temel eine Pergola mit elektrischem Antrieb und Glasschiebetüren in Auftrag gegeben. Der...",
    },
    {
        id: 5,
        name: "Bernhard Prokes",
        timeAgo: "vor 1 Jahr",
        rating: 5,
        text: "Wir haben vor rund 2 Monaten unsere Pergola geliefert bekommen und sind sehr zufrieden. Von der",
    },
    {
        id: 6,
        name: "Thomas Elser",
        timeAgo: "vor 1 Jahr",
        rating: 5,
        text: "Ein so Freundliches und kompetentes Unternehmen ist mittlerweile leider sehr selten zu finden, ich kann nur sagen;.",
    },
];

const chunkReviews = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};


const DESKTOP_SLIDES = chunkReviews(REVIEWS, 4); // 4 per slide on desktop

export default function TopServiceSection() {
    return (
        <section className="bg-base-200 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Top text block */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 p-6 md:p-10">
                    <p className="max-w-xl  leading-relaxed text-sm md:text-base">
                        Optimaler Wetterschutz durch TEMEL PLANEN für Ihre privaten und gewerblichen Wünsche. Wir sind erst zufrieden, wenn es für Sie perfekt ist. TEMEL PLANUNG steht für erfahrene Planung, beste Qualität durch eigene Produktion und professionelle Umsetzung beim Aufbau. Mit TEMEL PLANEN haben Sie alles aus einer Hand – exklusiv und individuell.
                    </p>

                    <div className="flex items-start gap-4">
                        <div className="w-2 bg-[#6A8C87] h-24" />
                        <div>
                            <h3 className="text-2xl font-semibold ">Unser</h3>
                            <h3 className="text-2xl font-semibold text-[#6A8C87]">Top Service</h3>
                        </div>
                    </div>
                </div>

                {/* MOBILE CAROUSEL – 1 card per slide */}
                <div className="mt-12 sm:hidden">
                    <div className="carousel w-full">
                        {REVIEWS.map((review, index) => {
                            const id = `review-mobile-${index + 1}`;
                            const prevId =
                                index === 0
                                    ? `review-mobile-${REVIEWS.length}`
                                    : `review-mobile-${index}`;
                            const nextId =
                                index === REVIEWS.length - 1
                                    ? `review-mobile-1`
                                    : `review-mobile-${index + 2}`;

                            return (
                                <div
                                    id={id}
                                    key={id}
                                    className="carousel-item relative w-full"
                                >
                                    <article className="w-full bg-base-100 rounded-2xl shadow-sm border border-base-300/60 p-4 flex flex-col">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-base font-semibold text-base-content">
                                                    {review.name}
                                                </h3>
                                                <p className="text-xs text-base-content/60">
                                                    {review.timeAgo}
                                                </p>
                                            </div>
                                            <FcGoogle className="text-2xl flex-shrink-0" />
                                        </div>

                                        <div className="mt-3 text-yellow-400 text-sm">
                                            {"★".repeat(review.rating)}
                                        </div>

                                        {review.text && (
                                            <p className="mt-3 text-sm text-base-content/80">
                                                {review.text}
                                            </p>
                                        )}

                                        {review.text && (
                                            <button className="mt-3 text-xs font-medium text-primary hover:underline self-start">
                                                Weiterlesen
                                            </button>
                                        )}
                                    </article>

                                    <div className="absolute inset-y-0 flex items-center justify-between w-full px-2 pointer-events-none">
                                        <a
                                            href={`#${prevId}`}
                                            className="btn btn-circle btn-sm bg-base-100 border-base-300 shadow pointer-events-auto"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href={`#${nextId}`}
                                            className="btn btn-circle btn-sm bg-base-100 border-base-300 shadow pointer-events-auto"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* DESKTOP CAROUSEL – up to 4 cards per slide */}
                <div className="mt-12 hidden sm:block">
                    <div className="carousel w-full">
                        {DESKTOP_SLIDES.map((group, index) => {
                            const id = `review-slide-${index + 1}`;
                            const prevId =
                                index === 0
                                    ? `review-slide-${DESKTOP_SLIDES.length}`
                                    : `review-slide-${index}`;
                            const nextId =
                                index === DESKTOP_SLIDES.length - 1
                                    ? `review-slide-1`
                                    : `review-slide-${index + 2}`;

                            return (
                                <div
                                    id={id}
                                    key={id}
                                    className="carousel-item relative w-full"
                                >
                                    <div className="flex w-full gap-4 sm:gap-6">
                                        {group.map((review) => (
                                            <article
                                                key={review.id}
                                                className="flex-1 bg-base-100 rounded-2xl shadow-sm border border-base-300/60
                                   p-5 md:p-6 flex flex-col min-w-0"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <h3 className="text-sm sm:text-base font-semibold text-base-content">
                                                            {review.name}
                                                        </h3>
                                                        <p className="text-[11px] sm:text-xs text-base-content/60">
                                                            {review.timeAgo}
                                                        </p>
                                                    </div>
                                                    <FcGoogle className="text-xl sm:text-2xl flex-shrink-0" />
                                                </div>

                                                <div className="mt-3 text-yellow-400 text-xs sm:text-sm">
                                                    {"★".repeat(review.rating)}
                                                </div>

                                                {review.text && (
                                                    <p className="mt-3 text-xs sm:text-sm text-base-content/80 line-clamp-4">
                                                        {review.text}
                                                    </p>
                                                )}

                                                {review.text && (
                                                    <button className="mt-3 text-[11px] sm:text-xs font-medium text-primary hover:underline self-start">
                                                        Weiterlesen
                                                    </button>
                                                )}
                                            </article>
                                        ))}
                                    </div>

                                    <div className="absolute inset-y-0 flex items-center justify-between w-full px-3 pointer-events-none">
                                        <a
                                            href={`#${prevId}`}
                                            className="btn btn-circle btn-sm bg-base-100 border-base-300 shadow pointer-events-auto"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href={`#${nextId}`}
                                            className="btn btn-circle btn-sm bg-base-100 border-base-300 shadow pointer-events-auto"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Rating footer */}
                <div className="mt-6 text-center text-xs sm:text-sm text-base-content/70">
                    <span className="font-semibold">Google</span> Gesamtbewertung{" "}
                    <span className="font-semibold">4.8</span> von 5,basierend auf{" "}
                    <span className="font-semibold">168 Bewertungen</span>
                </div>
            </div>
        </section>
    );
}
