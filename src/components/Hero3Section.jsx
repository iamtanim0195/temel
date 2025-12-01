import React from 'react'

const Hero3Section = () => {
    return (
        <section className="bg-base-300 py-16 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="max-w-3xl">
                    {/* Small label */}
                    <p className="text-sm sm:text-base font-medium text-base-content/80">
                        Sun protection products
                    </p>

                    {/* Main heading */}
                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-base-content">
                        <span className="block">Let yourself</span>
                        <span className="block text-[#62c3ac]">
                            be inspired by our wide range of tailor-made solutions.
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default Hero3Section