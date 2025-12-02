"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Mega dropdown data for Produkte
const PRODUCT_MEGA = [
    {
        sections: [
            {
                title: "LAMELLENDACH",
                links: [
                    { label: "Aerolux", href: "/lamellendach/aerolux", },
                    { label: "Axis", href: "/lamellendach/axis" },
                    { label: "Rota", href: "/lamellendach/rota" },
                    { label: "Exxen", href: "/lamellendach/exxen" },
                ],
            },
            {
                title: "PERGOLA",
                links: [
                    { label: "Quattro", href: "/pergola/quattro" },
                    { label: "Novo", href: "/pergola/novo" },
                    { label: "Eva", href: "/pergola/eva" },
                    { label: "Smooth", href: "/pergola/smooth" },
                    { label: "Radian", href: "/pergola/radian" },
                    { label: "Luna", href: "/pergola/luna" },
                ],
            },
        ],
    },
    {
        sections: [
            {
                title: "MARKISEN",
                links: [
                    { label: "Gelenkarmmarkise", href: "/markisen/gelenkarmmarkise" },
                    { label: "Scherenarmmarkise", href: "/markisen/scherenarmmarkise" },
                    { label: "Pergolamarkise", href: "/markisen/pergolamarkise" },
                    { label: "Korbmarkise", href: "/markisen/korbmarkise" },
                    { label: "Fallarmmarkise", href: "/markisen/fallarmmarkise" },
                    { label: "Wintergartenmarkise", href: "/markisen/wintergartenmarkise" },
                    { label: "Senkrechtmarkise", href: "/markisen/senkrechtmarkise" },
                ],
            },
            {
                title: "VERSCHLUSSSYSTEME",
                links: [
                    { label: "Glasschiebee­lemente", href: "/verschlusssysteme/glasschiebeelements" },
                    { label: "Panoramagas", href: "/verschlusssysteme/panoramagas" },
                    { label: "Senkrechtmarkise", href: "/verschlusssysteme/senkrechtmarkise" },
                    { label: "Violet Windschutz", href: "/verschlusssysteme/violet-windschutz" },
                ],
            },
        ],
    },
    {
        sections: [
            {
                title: "WEITERE SONNENSCHUTZ-PRODUKTE",
                links: [
                    { label: "Faltdach", href: "/weitere/faltdach" },
                    { label: "Fixe Sonnensegel", href: "/weitere/sonnensegel" },
                    { label: "Rollladen/Rolläden", href: "/weitere/rollladen" },
                    { label: "Insektenschutz", href: "/weitere/insektenschutz" },
                    {
                        label: "Starkwindschirme / Windfeste Sonnenschirme",
                        href: "/weitere/starkwindschirme",
                    },
                    { label: "PVC-Planen nach Maß", href: "/weitere/pvc-planen" },
                ],
            },
        ],
    },
];

// Main nav config – any item can get `mega: PRODUCT_MEGA` (or other data)
const NAV_ITEMS = [
    { label: "Produkte", href: "/produkte", mega: PRODUCT_MEGA },
    { label: "Gastronomie & Hotellerie", href: "/gastronomie" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Über uns", href: "/unternehmen" },
    { label: "Kontakt", href: "/kontakt" },
];

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="mt-2 bg-black/50 text-white">
            <div className="flex items-center justify-between gap-4 p-3">
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
                    {NAV_ITEMS.map((item) =>
                        item.mega ? (
                            // LINK + MEGA DROPDOWN
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="cursor-pointer hover:text-emerald-300 transition-colors uppercase"
                                >
                                    {item.label}
                                </Link>

                                <div
                                    className="
                    absolute left-1/2 -translate-x-1/2 top-full mt-3
                    bg-white text-slate-800 rounded-xl shadow-2xl
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200 ease-out
                    z-50
                    w-[900px] max-w-[95vw]
                  "
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-6">
                                        {item.mega.map((col, colIndex) => (
                                            <div key={colIndex} className="space-y-8">
                                                {col.sections.map((section) => (
                                                    <div key={section.title}>
                                                        <h3 className="text-sm font-semibold tracking-wide text-[#5f9489] uppercase">
                                                            {section.title}
                                                        </h3>
                                                        <div className="h-[2px] bg-[#5f9489] mt-1 mb-3 w-32" />
                                                        <ul className="space-y-1 text-sm">
                                                            {section.links.map((link) => (
                                                                <li key={link.href}>
                                                                    <Link
                                                                        href={link.href}
                                                                        className={`hover:text-[#5f9489] ${link.highlight ? "text-[#5f9489]" : "text-slate-900"
                                                                            }`}
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // NORMAL LINK
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-emerald-300 transition-colors"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen((open) => !open)}
                    className="md:hidden inline-flex items-center justify-center rounded-full text-2xl"
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <nav className="md:hidden border-t border-white/20 px-3 pb-3">
                    <ul className="menu bg-black/70 text-white rounded-box w-full mt-2">
                        {NAV_ITEMS.map((item) =>
                            item.mega ? (
                                <li key={item.label}>
                                    <details>
                                        <summary>{item.label}</summary>
                                        <ul>
                                            {item.mega.flatMap((col) =>
                                                col.sections.flatMap((section) =>
                                                    section.links.map((link) => (
                                                        <li key={link.href}>
                                                            <Link href={link.href}>{link.label}</Link>
                                                        </li>
                                                    ))
                                                )
                                            )}
                                        </ul>
                                    </details>
                                </li>
                            ) : (
                                <li key={item.href}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Nav;
