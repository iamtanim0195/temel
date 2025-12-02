"use client";

import { FaShieldAlt, FaHome, FaLeaf, FaBuilding } from "react-icons/fa";

const FEATURES = [
    {
        id: 1,
        icon: <FaShieldAlt className="text-4xl mb-4" />,
        title: "Ihr Experte für Sonnenschutz",
        text: "Über 30 Jahre Erfahrung in Sonnenschutztechnik und LKW-Planen",
    },
    {
        id: 2,
        icon: <FaHome className="text-4xl mb-4" />,
        title: "Moderne Lösungen für Ihr Zuhause",
        text: "Innovative Sonnenschutztechnik für Ihren Komfort",
    },
    {
        id: 3,
        icon: <FaLeaf className="text-4xl mb-4" />,
        title: "Qualitätsprodukte für Nachhaltigkeit",
        text: "Langlebige Sonnenschutzsysteme für Ihr Zuhause",
    },
    {
        id: 4,
        icon: <FaBuilding className="text-4xl mb-4" />,
        title: "Besuchen Sie uns vor Ort",
        text: "Erleben Sie unsere Beschattungslösungen im Schauraum",
    },
];

export default function SunProtectionSection() {
    return (
        <section className="bg-[#33373a] py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Heading */}
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                    Warum Sonnenschutz bei{" "}
                    <span className="text-[#6A8C87]">TEMEL Planen?</span>
                </h2>

                {/* Cards */}
                <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm px-6 py-8 flex flex-col items-center text-center"
                        >
                            <div className="text-[#33373a]">{item.icon}</div>

                            <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
