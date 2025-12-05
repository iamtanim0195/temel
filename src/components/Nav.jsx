"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Top from "./Top";
import DaisyTheme from "./DaisyTheme";

/* ---------- NAV DATA (just edit this easily) ---------- */

const NAV_ITEMS = [
    {
        label: "Produkte",
        href: "/produkte",
        mega: true,
        children: [
            {
                label: "LAMELLENDACH",
                href: "/lamellendach",
                children: [
                    { label: "Aerolux", href: "/lamellendach/aerolux" },
                    { label: "Axis", href: "/lamellendach/axis" },
                    { label: "Rota", href: "/lamellendach/rota" },
                    { label: "Exxen", href: "/lamellendach/exxen" },
                ],
            },
            {
                label: "PERGOLA",
                href: "/pergola",
                children: [
                    { label: "Quattro", href: "/pergola/quattro" },
                    { label: "Novo", href: "/pergola/novo" },
                    { label: "Eva", href: "/pergola/eva" },
                    { label: "Smooth", href: "/pergola/smooth" },
                    { label: "Radian", href: "/pergola/radian" },
                    { label: "Luna", href: "/pergola/luna" },
                ],
            },
            {
                label: "MARKISEN",
                href: "/markisen",
                children: [
                    { label: "Gelenkarmmarkise", href: "/markisen/gelenkarmmarkise" },
                    { label: "Scherenarmmarkise", href: "/markisen/scherenarmmarkise" },
                    { label: "Pergolamarkise", href: "/markisen/pergolamarkise" },
                    { label: "Korbmarkise", href: "/markisen/korbmarkise" },
                    { label: "Fallarmmarkise", href: "/markisen/fallarmmarkise" },
                    {
                        label: "Wintergartenmarkise",
                        href: "/markisen/wintergartenmarkise",
                    },
                    { label: "Senkrechtmarkise", href: "/markisen/senkrechtmarkise" },
                ],
            },
            {
                label: "VERSCHLUSSSYSTEME",
                href: "/verschlusssysteme",
                children: [
                    {
                        label: "Glasschiebee­lemente",
                        href: "/verschlusssysteme/glasschiebeelements",
                    },
                    { label: "Panoramagas", href: "/verschlusssysteme/panoramagas" },
                    {
                        label: "Senkrechtmarkise",
                        href: "/verschlusssysteme/senkrechtmarkise",
                    },
                    {
                        label: "Violet Windschutz",
                        href: "/verschlusssysteme/violet-windschutz",
                    },
                ],
            },
            {
                label: "WEITERE SONNENSCHUTZ-PRODUKTE",
                href: "/weitere",
                children: [
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
    { label: "Gastronomie & Hotellerie", href: "/gastronomie" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Über uns", href: "/unternehmen" },
    { label: "Kontakt", href: "/kontakt" },
];

/* Helper */
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

/* ---------- NAV COMPONENT ---------- */

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

                <div className="sm:hidden">
                    <DaisyTheme />
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {NAV_ITEMS.map((item) =>
                        item.mega && item.children ? (
                            <DesktopMegaItem key={item.label} item={item} />
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href ?? "#"}
                                className="hover:text-emerald-300 transition-colors uppercase"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden inline-flex items-center justify-center text-3xl"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE NAV */}
            {menuOpen && (
                <nav className="md:hidden border-t border-white/20 px-3 pb-3">
                    {/*  <Top /> */}
                    <div className="bg-black/70 text-white rounded-xl w-full mt-2 p-2 text-2xl">
                        {renderMobileItems(NAV_ITEMS)}
                    </div>
                </nav>
            )}
        </header>
    );
};

/* ---------- DESKTOP MEGA MENU ---------- */

const DesktopMegaItem = ({ item }) => (
    <div className="relative group">
        <Link
            href={item.href}
            className="cursor-pointer hover:text-emerald-300 uppercase"
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
        z-50 w-[900px] max-w-[95vw]
      "
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-6">
                {item.children.map((section) => (
                    <div key={section.label} className="space-y-2">
                        <Link
                            href={section.href ?? "#"}
                            className="text-sm font-semibold text-[#5f9489] uppercase hover:text-[#3d6b60]"
                        >
                            {section.label}
                        </Link>

                        <div className="h-0.5 bg-[#5f9489] w-32" />

                        {section.children && (
                            <ul className="space-y-1 text-sm">
                                {section.children.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-900 hover:text-[#5f9489]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* ---------- MOBILE RECURSIVE DROPDOWNS ---------- */

const renderMobileItems = (items, level = 0) => (
    <ul className={classNames("space-y-1", level > 0 && "ml-3 pl-3 border-l")}>
        {items.map((item) => {
            const hasChildren = item.children?.length > 0;

            if (!hasChildren)
                return (
                    <li key={item.label}>
                        <Link href={item.href} className="block py-2">
                            {item.label}
                        </Link>
                    </li>
                );

            return (
                <li key={item.label}>
                    <details>
                        <summary className="py-2 flex justify-between cursor-pointer">
                            <p className="flex-1">
                                {item.label}
                            </p>
                            <span className="text-3xl w-10 px-3 translate-x-[7px] translate-y-[-7px]">▾</span>
                        </summary>

                        <div className="mt-1">
                            {renderMobileItems(item.children, level + 1)}
                        </div>
                    </details>
                </li>
            );
        })}
    </ul>
);

export default Nav;
