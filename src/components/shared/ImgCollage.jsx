"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const images = [
    {
        id: 1,
        src: "/image/collage-1.png",
        alt: "Law Office Image",
        title: "Modern Legal Services",
        blurDataURL: "/images/blur/law1-blur.webp"
    },
    {
        id: 2,
        src: "/image/collage-2.png",
        alt: "Team Image",
        title: "Expert Attorneys",
        blurDataURL: "/images/blur/law2-blur.webp"
    },
    {
        id: 3,
        src: "/image/collage-3.png",
        alt: "Client Meeting",
        title: "Trusted by Clients",
        blurDataURL: "/images/blur/law3-blur.webp"
    },
    {
        id: 4,
        src: "/image/collage-4.png",
        alt: "Digital Law",
        title: "Digital Law Solutions",
        blurDataURL: "/images/blur/law4-blur.webp"
    },
    {
        id: 5,
        src: "/image/collage-5.png",
        alt: "Consulting",
        title: "Consulting Services",
        blurDataURL: "/images/blur/law5-blur.webp"
    },
    {
        id: 6,
        src: "/image/collage-6.png",
        alt: "Digital Solutions",
        title: "Digital Solutions",
        blurDataURL: "/images/blur/law6-blur.webp"
    }
];

const ImgCollage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [aspectRatios, setAspectRatios] = useState([]);
    const imageRefs = useRef([]);

    // Lazy load trigger on scroll
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "100px", // Start loading earlier for smoother UX
    });

    useEffect(() => {
        // Calculate the aspect ratio for each image when it has loaded
        const calculateAspectRatios = () => {
            const ratios = imageRefs.current.map((img) => {
                const { naturalWidth, naturalHeight } = img;
                return naturalWidth / naturalHeight;
            });
            setAspectRatios(ratios);
        };

        // Check if images have already loaded, otherwise wait for load event
        const images = imageRefs.current;
        if (images.length > 0) {
            calculateAspectRatios();
        }
    }, []);

    return (
        <>
            {/* Lazy Render Wrapper */}
            <div ref={ref}>
                {inView && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-0">
                        {images.map((img, index) => (
                            <div
                                key={img.id}
                                className={`relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300`}
                                style={{
                                    gridRowEnd: aspectRatios[index] && aspectRatios[index] < 1 ? 'span 2' : 'span 1',
                                    gridColumnEnd: aspectRatios[index] && aspectRatios[index] > 1 ? 'span 2' : 'span 1'
                                }}
                                onClick={() => setSelectedImage(img)}
                            >
                                <Image
                                    ref={(el) => imageRefs.current[index] = el}
                                    src={img.src}
                                    alt={img.alt}
                                    width={600}
                                    height={600}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={img.blurDataURL}
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover w-full h-full transition-all duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                                    <p className="text-white text-xl font-bold">{img.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal Popup */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-[90%] max-w-3xl">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={1200}
                            height={1200}
                            className="rounded-xl"
                        />
                        <button
                            className="absolute top-3 right-3 bg-white/80 text-black px-3 py-1 rounded-full text-xs font-semibold"
                            onClick={() => setSelectedImage(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImgCollage;
