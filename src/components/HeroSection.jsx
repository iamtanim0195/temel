"use client";

import { useState } from "react";
import Link from "next/link";
import Top from "./Top";
import HeroSlider from "./HeroSlider";
import Image from "next/image";
import Nav from "./Nav";

const NAV_ITEMS = [
    { label: "produkte", href: "#produkte" },
    { label: "Gastronomie & Hotellerie", href: "gastronomie" },
    { label: "referenzen", href: "#referenzen" },
    { label: "Über uns", href: "unternehmen" },
    { label: "kontakt", href: "kontakt" },
];

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="relative w-full min-h-screen overflow-hidden text-white">
            {/* SLIDER (background + hero text) */}
            <HeroSlider />

            {/* HEADER + NAV */}
            <header className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 pb-3 sm:pb-4 ">
                    {/* Top bar (socials + theme toggle) */}
                    <Top />

                    <Nav />
                </div>


            </header>
        </section>
    );
}
