"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HealthcareGallery = () => {
  const galleryImages = [
    {
      src: "/Three-Most-Important-Benefits-of-Having-a-Primary-Care-Physician.webp",
      alt: "Doctor consulting with patient",
      title: "Primary Care",
    },
    {
      src: "/women health.webp",
      alt: "Women's Health consultation",
      title: "Women's Health  Services",
    },
    {
      src: "/CovidFlu.webp",
      alt: "Medical examination",
      title: "Flu / COVID Testing",
    },
    // {
    //   src: "/women health.webp",
    //   alt: "Family healthcare",
    //   title: "Family Medicine",
    // },
    // {
    //   src: "/women health.webp",
    //   alt: "Medical technology",
    //   title: "Advanced Treatment",
    // },
    // {
    //   src: "/women health.webp",
    //   alt: "Compassionate care",
    //   title: "Patient-Centered Care",
    // },
  ];

  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Facility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Experience <span className="text-primary">Quality Care</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600">
            Take a look at our state-of-the-art facility and compassionate care
            environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 ease-out aspect-4/3 transform-gpu"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              />

              <div className="absolute inset-0 bg-linear-to-t from-text via-text/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <h3 className="text-white text-xl font-bold font-sans">
                  {image.title}
                </h3>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-teal-500/40 transition duration-500" />
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-lg"
          >
            Schedule Your Visit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthcareGallery;
