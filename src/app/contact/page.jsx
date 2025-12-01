"use client";

import Nav from "@/components/Nav";



export default function ContactPage() {
    return (
        <main className="bg-base-200 min-h-screen">
            <Nav />
            <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
                <h1 className="text-3xl sm:text-4xl font-semibold text-base-content mb-2">
                    Contact <span className="text-[#6A8C87]">TEMEL PLANEN</span>
                </h1>
                <p className="text-sm sm:text-base text-base-content/80 max-w-2xl">
                    Do you have questions about our products or would you like an offer?
                    Send us a message or visit us in our showroom in Vienna.
                </p>

                <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr,1fr]">
                    {/* Contact form */}
                    <form
                        className="bg-base-100 rounded-2xl shadow-sm border border-base-300/60 p-6 space-y-4"
                        onSubmit={(e) => e.preventDefault()} // remove when you wire up an API route
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-xs font-medium text-base-content/70 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full text-sm"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-base-content/70 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full text-sm"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-base-content/70 mb-1">
                                Phone (optional)
                            </label>
                            <input
                                type="tel"
                                className="input input-bordered w-full text-sm"
                                placeholder="+43 ..."
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-base-content/70 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full text-sm"
                                placeholder="Pergola, louvered roof, tarpaulin..."
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-base-content/70 mb-1">
                                Message
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full text-sm min-h-[140px]"
                                placeholder="Tell us briefly about your project..."
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-2">
                            Send message
                        </button>
                    </form>

                    {/* Contact info / address */}
                    <div className="space-y-6 text-sm text-base-content/80">
                        <div>
                            <h2 className="text-base font-semibold text-base-content mb-2">
                                Location &amp; Showroom
                            </h2>
                            <p>
                                Dreherstraße 75a
                                <br />
                                1110 Vienna
                                <br />
                                Austria
                            </p>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-base-content mb-2">
                                Phone &amp; Email
                            </h2>
                            <p>
                                Tel. +43 1 706 14 62
                                <br />
                                Fax +43 (0)1 706 14 62 – 10
                                <br />
                                <a
                                    href="mailto:anfrage@temelplanen.com"
                                    className="text-primary underline"
                                >
                                    anfrage@temelplanen.com
                                </a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-base-content mb-2">
                                Opening hours
                            </h2>
                            <p>
                                Mon – Fri: 09:00 – 17:00
                                <br />
                                Sat: by appointment
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
