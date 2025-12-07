"use client";

import { useState } from "react";
import Link from "next/link";
import Top from "./Top";
import HeroSlider from "./HeroSlider";
import Nav from "./Nav";

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="relative w-full min-h-screen overflow-hidden text-white">
            {/* SLIDER (background + hero text) */}
            <HeroSlider />

            {/* HEADER + NAV */}
            <header className="z-50 absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 pb-3 sm:pb-4 ">
                    {/* Top bar (socials + theme toggle) */}
                    <div className="hidden sm:block">
                        <Top />
                    </div>
                    <div>
                        <Nav />
                    </div>

                </div>


            </header>
        </section>
    );
}
