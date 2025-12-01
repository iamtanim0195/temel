import Nav from "@/components/Nav";

export const metadata = {
    title: "About Us | TEMEL PLANEN",
    description: "Learn more about TEMEL PLANEN and our expertise in sun protection.",
};

export default function AboutPage() {
    return (
        <main className="bg-base-200 min-h-screen ">
            <Nav />
            <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
                <h1 className="text-3xl sm:text-4xl font-semibold text-base-content mb-6">
                    About <span className="text-[#6A8C87]">TEMEL PLANEN</span>
                </h1>

                <p className="text-sm sm:text-base text-base-content/80 leading-relaxed max-w-3xl">
                    For over 30 years, TEMEL PLANEN has specialized in high-quality sun
                    protection systems, louvered roofs and custom tarpaulins for private,
                    commercial and catering customers. From planning to installation,
                    our focus is on durable solutions, clean workmanship and honest advice.
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300/60 p-6">
                        <h2 className="text-lg font-semibold mb-2 text-base-content">
                            What we stand for
                        </h2>
                        <ul className="space-y-2 text-sm text-base-content/80">
                            <li>• Experienced in sun protection and tarpaulin technology</li>
                            <li>• In-house production and professional installation</li>
                            <li>• Tailor-made solutions for every project</li>
                            <li>• Reliable support before and after installation</li>
                        </ul>
                    </div>

                    <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300/60 p-6">
                        <h2 className="text-lg font-semibold mb-2 text-base-content">
                            Our customers
                        </h2>
                        <p className="text-sm text-base-content/80 leading-relaxed">
                            We work with private homeowners, gastronomy &amp; hotel businesses,
                            industry and public institutions. Whether it&apos;s a patio roof,
                            pergola system, or custom PVC tarpaulin – we deliver solutions
                            that fit your requirements and budget.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
