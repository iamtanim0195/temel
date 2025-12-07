import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTopButton from "@/components/ScrollTopButton";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

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
      <Head>
        {/* Viewport meta tag for iOS and Android devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body className="min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        <main>
          {children}
          <ScrollTopButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
