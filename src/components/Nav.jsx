"use client";

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
const NAV_ITEMS = [
    { label: "produkte", href: "#produkte" },
    { label: "Gastronomie & Hotellerie", href: "gastronomie" },
    { label: "referenzen", href: "#referenzen" },
    { label: "Über uns", href: "unternehmen" },
    { label: "kontakt", href: "kontakt" },
];
const Nav = () => {
    return (
        <div className="mt-2 flex items-center justify-between gap-4 text-white bg-black/50 p-3 ">
            {/* LOGO */}

            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/image/logo.webp"
                    alt="Temel Planen Logo"
                    width={150}
                    height={50}
                    className="object-contain"
                />
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