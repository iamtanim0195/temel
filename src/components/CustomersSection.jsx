"use client";

import Image from "next/image";
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
        <section className="bg-base-100 py-8 ">
            <div className="mx-auto max-w-6xl  px-4 sm:px-6 text-center">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-base-content">
                    Kunden die uns vertrauen
                </h2>

                <Image
                    src="/image/customers.png"
                    alt="Customers Section"
                    width={500}
                    height={50}
                    className="object-contain w-full max-w-full mt-4"
                />

                {/* CTA button */}
                <div className="mt-4 ">
                    <a
                        href="/kontakt"
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
