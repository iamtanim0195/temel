"use client";

import Link from "next/link";
import { MdLocationOn, MdPhone, MdPhoneAndroid } from "react-icons/md";

const contactBoxes = [
  {
    id: 1,
    icon: <MdLocationOn className="text-2xl" />,
    title: "Location & Showroom",
    lines: ["Dreherstraße 75a", "1110 Vienna"],
  },
  {
    id: 2,
    icon: <MdPhone className="text-2xl" />,
    title: "Tel. +43 1 706 14 62",
    lines: ["Fax +43 (0)1 706 14 62 – 10", "anfrage@temelplanen.com"],
  },
  {
    id: 3,
    icon: <MdPhoneAndroid className="text-2xl" />,
    title: "+43 (0)699 17 26 18 57",
    lines: [],
  },
];

const footerColumns = [
  {
    heading: "Sun protection Vienna",
    links: [
      "Pergola Vienna",
      "Louvered roof Vienna & Lower Austria",
      "Glass roof",
      "Awnings",
      "Roller shutters/roller blinds",
      "Heavy-duty parasol / Windproof parasol",
      "Folding roof",
      "Custom-made PVC tarpaulins",
      "Insect protection",
    ],
  },
  {
    heading: "Sun protection for the catering industry",
    links: [
      "Gastronomy & Hotel Industry",
      "Outdoor seating & dining area",
    ],
  },
  {
    heading: "About",
    links: [
      "Commercial References",
      "Private References",
      "Contact",
      "Imprint",
      "Privacy Policy",
      "Terms and Conditions",
      "Cookie Policy (EU)",
    ],
  },
  {
    heading: "Interesting facts",
    links: [
      "Types of louvered roofs",
      "Intelligently extend your patio roof",
      "Types of patio roofs & patio shading",
      "How to clean blinds properly",
      "Cleaning an awning – here’s how",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#33373a] text-white pt-12 pb-6 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Logo */}
        <div className="flex justify-center">
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
        </div>

        {/* Contact boxes */}
        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {contactBoxes.map((box) => (
            <div
              key={box.id}
              className="rounded-lg bg-[#6A8C87] text-white px-5 py-4 flex items-start gap-3 shadow-sm"
            >
              <div className="mt-1">{box.icon}</div>
              <div className="text-sm leading-relaxed">
                <div className="font-semibold">{box.title}</div>
                {box.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Link columns */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-semibold text-[#6A8C87] mb-3">
                {col.heading}
              </h3>
              <ul className="space-y-1 text-white/80">
                {col.links.map((item) => (
                  <li key={item}>
                    {/* Replace href="#" with real URLs where needed */}
                    <Link
                      href="#"
                      className="hover:text-[#6A8C87] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-[11px] sm:text-xs text-white/60">
          © 2023 TEMEL Planen | All rights reserved | Development:{" "}
          <a
            href="#"
            className="underline hover:text-[#6A8C87]"
          >
            INCONCEPTS Online Marketing &amp; SEO Agency Vienna
          </a>
        </div>
      </div>
    </footer>
  );
}
