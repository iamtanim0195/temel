"use client";

import { useEffect, useState } from "react";

const THEMES = ["light", "dark"];

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    // On first load: read from localStorage or system preference
    useEffect(() => {
        if (typeof window === "undefined") return;

        const stored = window.localStorage.getItem("theme");
        if (stored && THEMES.includes(stored)) {
            setTheme(stored);
            document.documentElement.setAttribute("data-theme", stored);
            return;
        }

        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initial = prefersDark ? "dark" : "light";
        setTheme(initial);
        document.documentElement.setAttribute("data-theme", initial);
    }, []);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("data-theme", next);
            window.localStorage.setItem("theme", next);
        }
    };

    return (
        <button
            className="btn "
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
    );
}
