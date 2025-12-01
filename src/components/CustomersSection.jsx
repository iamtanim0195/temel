"use client";

import {
    FaApple,
    FaGoogle,
    FaMicrosoft,
    FaAmazon,
    FaFacebook,
    FaTwitter,
    FaSpotify,
    FaGithub,
    FaBehance,
    FaSlack,
    FaUber,
    FaAirbnb,
} from "react-icons/fa";


const BRANDS = [
    { id: 1, name: "Apple", Icon: FaApple },
    { id: 2, name: "Google", Icon: FaGoogle },
    { id: 3, name: "Microsoft", Icon: FaMicrosoft },
    { id: 4, name: "Amazon", Icon: FaAmazon },
    { id: 5, name: "Facebook", Icon: FaFacebook },
    { id: 6, name: "Twitter", Icon: FaTwitter },
    { id: 7, name: "Spotify", Icon: FaSpotify },
    { id: 8, name: "GitHub", Icon: FaGithub },
    { id: 9, name: "Behance", Icon: FaBehance },
    { id: 10, name: "Slack", Icon: FaSlack },
    { id: 11, name: "Uber", Icon: FaUber },
    { id: 12, name: "Airbnb", Icon: FaAirbnb },
];


export default function CustomersSection() {
    return (
        <section className="bg-base-100 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-base-content">
                    Customers who trust us
                </h2>

                {/* Subtle subtitle (optional) */}
                <p className="mt-3 text-sm sm:text-base text-base-content/70 max-w-2xl mx-auto">
                    A selection of brands and companies that rely on our sun protection
                    solutions.
                </p>

                {/* Logo grid */}
                <div className=" mt-10 sm:mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                    {BRANDS.map(({ id, name, Icon }) => (
                        <div
                            key={id}
                            className="flex items-center justify-center rounded-lg bg-base-200/70 hover:bg-base-300/80
                         transition-colors px-3 py-3 sm:px-4 sm:py-4 shadow-sm  "
                        >
                            <div className="flex flex-col items-center gap-2 ">
                                <Icon className="text-2xl sm:text-3xl text-base-content/80" />
                                <span className="text-[10px] sm:text-xs font-medium text-base-content/70">
                                    {name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA button */}
                <div className="mt-10 sm:mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-[#62c3ac]
                    px-8 py-2.5 text-sm font-semibold text-slate-900
                    shadow-xl shadow-emerald-500/30
                    transition-all duration-200 hover:bg-[#56b39c] hover:-translate-y-[2px]"                    >
                        REQUEST A NON-BINDING OFFER
                    </a>
                </div>
            </div>
        </section>
    );
}
