"use client";

import { useState } from "react";
import Link from "next/link";
import Top from "./Top";
import HeroSlider from "./HeroSlider";

const NAV_ITEMS = [
    { label: "Products", href: "#products" },
    { label: "Catering", href: "catering" },
    { label: "References", href: "#references" },
    { label: "About us", href: "about" },
    { label: "Contact", href: "contact" },
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

                    {/* Main nav row */}
                    <div className="mt-2 flex items-center justify-between gap-4">
                        {/* LOGO */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center">
                                <span className="text-xs tracking-[0.25em] text-white/80">
                                    TP
                                </span>
                            </div>
                            <div className="leading-tight">
                                <div className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase">
                                    TEMEL PLANEN
                                </div>
                                <div className="text-[10px] text-white/70 uppercase tracking-[0.25em]">
                                    Qualität hat ihren Namen
                                </div>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-white/90 hover:text-emerald-300 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setMenuOpen((open) => !open)}
                            className="md:hidden inline-flex items-center justify-center rounded-full"
                            aria-label="Toggle navigation menu"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
                        <nav className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-1.5 text-white/90 hover:text-emerald-300 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <a
                                href="#contact"
                                className="mt-2 inline-flex w-full items-center justify-center rounded-full
                  bg-[#62c3ac] px-6 py-2.5 text-xs font-semibold text-slate-900
                  shadow-lg shadow-emerald-500/30 hover:bg-[#56b39c] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                REQUEST A QUOTE
                            </a>
                        </nav>
                    </div>
                )}
            </header>
        </section>
    );
}
