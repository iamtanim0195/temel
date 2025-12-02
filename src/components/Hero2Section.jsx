import Image from "next/image";

export default function Hero2Section() {
    return (
        <section className="bg-base-100 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,1.4fr]">
                    {/* IMAGE – DESKTOP ONLY */}
                    {/* <div className="relative hidden lg:block h-[230px] xl:h-[280px]">
                        <Image
                            src="/image/hero-2.png"
                            alt="Pergola line illustration"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
 */}
                    {/* TEXT CONTENT */}
                    <div>
                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-base-content">
                            <span>Ihr Profi für</span>
                            <span className="block text-[#62c3ac]">
                                Sonnenschutz in Wien & Umgebung
                            </span>
                        </h2>

                        {/* Body text */}
                        <div className="mt-6 md:mt-8 md:grid md:grid-cols-2 md:gap-8 text-sm sm:text-base text-base-content/80">
                            {/* Left column */}
                            <div className="space-y-4">
                                <p>
                                    TEMEL PLANEN ist seit über 30 Jahren Ihr kompetenter Ansprechpartner für Sonnenschutztechnik in Wien und Umgebung. In unserem umfangreichen Sortiment finden Sie nur Qualitätsprodukte, die nach Ihren Vorstellungen maßgeschneidert und angepasst werden.
                                </p>
                                <p>
                                    Durch genaue Planung und Montage sorgen unsere Spezialisten für perfekte Lichtverhältnisse und Beschattung Ihres Wohnraums oder Ihres Gastronomiebetriebs in Wien.
                                </p>
                            </div>

                            {/* Right column */}
                            <div className="mt-4 md:mt-0 space-y-4">
                                <p>
                                    Den richtigen Sonnenschutz online zu finden ist sehr schwierig, daher bieten wir Ihnen die Möglichkeit unsere Lösungen direkt vor Ort in unserem Schauraum in Wien anzusehen. Sollten Sie besondere Anforderungen an Ihren Sonnenschutz haben, dann kann unser Team Sie gerne beraten und die passende Beschattungslösung für Sie konzipieren.
                                </p>
                                <p>
                                    Modern, stylisch und nachhaltig – unsere Sonnenschutzsysteme sind ein Highlight für Sie und Ihre Gäste.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="#hero3"
                                className="inline-flex items-center rounded-full bg-[#62c3ac]
                    px-8 py-2.5 text-sm font-semibold text-slate-900
                    shadow-xl shadow-emerald-500/30
                    transition-all duration-200 hover:bg-[#56b39c] hover:-translate-y-[2px]"
                            >
                                zu den Produkten
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
