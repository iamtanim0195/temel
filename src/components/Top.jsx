"use client";

import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Top() {
    return (
        <div
            className="
        flex flex-col items-center justify-center gap-3
        text-[11px] sm:text-xs md:text-sm text-white/80
        sm:flex-row sm:justify-between sm:items-center
      "
        >
            {/* LEFT: social icons */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <Image
                        src="https://img.icons8.com/3d-fluency/94/facebook-logo.png"
                        width={24}
                        height={24}
                        alt="facebook"
                        className="hover:scale-110 transition-transform duration-200 icon-float"
                    />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Image
                        src="https://img.icons8.com/3d-fluency/94/instagram-logo.png"
                        width={24}
                        height={24}
                        alt="instagram"
                        className="hover:scale-110 transition-transform duration-200 icon-float"
                    />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                    <Image
                        src="https://img.icons8.com/3d-fluency/94/tiktok-logo.png"
                        width={24}
                        height={24}
                        alt="tiktok"
                        className="hover:scale-110 transition-transform duration-200 icon-float"
                    />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <Image
                        src="https://img.icons8.com/3d-fluency/94/youtube-logo.png"
                        width={24}
                        height={24}
                        alt="youtube"
                        className="hover:scale-110 transition-transform duration-200 icon-float"
                    />
                </a>
            </div>

            {/* RIGHT: WhatsApp, email, theme toggle */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <a href="https://wa.me/4369917261857" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="https://img.icons8.com/3d-fluency/94/whatsapp-logo.png"
                            width={24}
                            height={24}
                            alt="whatsapp"
                            className="hover:scale-110 transition-transform duration-200 icon-float"
                        />
                    </a>

                    <a href="mailto:anfrage@temelplanen.com" target="_blank">
                        <Image
                            src="https://img.icons8.com/color/48/new-post.png"
                            width={22}
                            height={22}
                            alt="email"
                            className="hover:scale-110 transition-transform duration-200 icon-float"
                        />
                    </a>
                </div>
                {/* 
                <div className="icon-float">
                    <ThemeToggle />
                </div>
                */}
            </div>
        </div>
    );
}
