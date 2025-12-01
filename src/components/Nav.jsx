"use client";

import Link from 'next/link'
import React from 'react'
const NAV_ITEMS = [
    { label: "Products", href: "#products" },
    { label: "Catering", href: "catering" },
    { label: "References", href: "#references" },
    { label: "About us", href: "about" },
    { label: "Contact", href: "contact" },
];
const Nav = () => {
    return (
        <div className="mt-2 flex items-center justify-between gap-4 text-black">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center">
                    <span className="text-xs tracking-[0.25em] ">
                        TP
                    </span>
                </div>
                <div className="leading-tight">
                    <div className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase">
                        TEMEL PLANEN
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em]">
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
                        className=" hover:text-emerald-300 transition-colors"
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
    )
}

export default Nav