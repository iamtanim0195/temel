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
                            <span>Your sun protection expert</span>
                            <span className="block text-[#62c3ac]">
                                in Vienna &amp; surrounding areas
                            </span>
                        </h2>

                        {/* Body text */}
                        <div className="mt-6 md:mt-8 md:grid md:grid-cols-2 md:gap-8 text-sm sm:text-base text-base-content/80">
                            {/* Left column */}
                            <div className="space-y-4">
                                <p>
                                    TEMEL PLANEN has been your competent partner for sun protection
                                    technology in Vienna and the surrounding area for over 30 years.
                                    Our extensive product range includes only high-quality products,
                                    custom-made and adapted to your specifications.
                                </p>
                                <p>
                                    Through precise planning and installation, our specialists ensure
                                    perfect lighting conditions and shading for your living space or
                                    your catering business in Vienna.
                                </p>
                            </div>

                            {/* Right column */}
                            <div className="mt-4 md:mt-0 space-y-4">
                                <p>
                                    Finding the right sun protection online is very difficult, which
                                    is why we offer you the opportunity to view our solutions
                                    directly in our showroom in Vienna. Should you have specific
                                    requirements for your sun protection, our team will be happy to
                                    advise you and design the perfect shading solution for you.
                                </p>
                                <p>
                                    Modern, stylish and sustainable – our sun protection systems are
                                    a highlight for you and your guests.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="#products"
                                className="inline-flex items-center rounded-full bg-[#62c3ac]
                    px-8 py-2.5 text-sm font-semibold text-slate-900
                    shadow-xl shadow-emerald-500/30
                    transition-all duration-200 hover:bg-[#56b39c] hover:-translate-y-[2px]"
                            >
                                TO THE PRODUCTS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
