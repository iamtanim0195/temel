import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollTopButton from "@/components/ScrollTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Temelplanen",
  description: "My Next.js app with DaisyUI theme toggle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen">
        {/*  <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header> */}
        <main>
          {children}
          <ScrollTopButton />
        </main>
      </body>
    </html>
  );
}