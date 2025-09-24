"use client";

import React from "react";
import Image from "next/image";

const photoContent = [
  {
    id: 1,
    title: "The Magical Nails Collection",
    subtitle: "Where Fairytales Meet Fingertips",
    description:
      "Step into a world of wonder with our Disney-inspired nail designs, created to capture the magic of your favorite characters and stories. From dreamy princess shades to bold, adventurous looks, this collection brings fairytales to life — one polish at a time. Perfect for fans of timeless classics and modern Disney icons alike, it’s your chance to wear the magic every day.",
    image: "/Gallery1.png",
  },
  {
    id: 2,
    title: "The Fearless Collection",
    subtitle: "Instant Nails. Instant Confidence",
    description:
      "Make a statement with our Bold Colors Snap-On Nails — designed for those who love to stand out. From vibrant reds and electric blues to daring neons and deep metallics, each set gives you salon-quality style in minutes. Easy to apply, reusable, and damage-free, these nails are perfect for switching up your look without the wait. Go bold. Go fearless. Go you.",
    image: "/Gallery2.png",
  },
  {
    id: 3,
    title: "The Global Collection",
    subtitle: "Travel through colors and cultures",
    description:
      "Maison de Nails introduces a global-inspired collection, blending trends and artistry from fashion capitals and cultural icons around the world. Step into a journey of colors, textures, and designs that celebrate beauty beyond borders.",
    image: "/Gallery3.png",
  },
  {
    id: 4,
    title: "Book Your Perfect Nail Experience",
    subtitle: "Discover custom nail artistry with our highly trained specialists",
    description:
      "At Maison de Nails, every detail matters. Our team of highly trained nail specialists provides personalized care and stunning designs tailored to your unique style. Whether you’re after timeless elegance or bold creativity, we’re here to create nails that feel truly yours. Book your appointment today and experience the art of nails like never before.",
    image: "/Gallery4.png",
  },
];

function PhotoGallery() {
  return (
    <section
      className="w-full flex flex-col items-center text-center py-12 lg:py-20 bg-amber-950"
      id="testimonials"
    >
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-12">
        <h1 className="text-4xl lg:text-5xl font-semibold text-neutral-100 tracking-tight">
          The Collection
        </h1>
        <p className="text-sm sm:text-base text-neutral-100 font-normal leading-relaxed max-w-2xl mt-4 mb-3 lg:mb-12 mx-auto">
          Dive into a world of vibrant colors and chic designs with our curated
          nail art collection. Whether you're looking for everyday elegance or
          bold, statement-making styles, our gallery has something for every
          mood and occasion.
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="w-full space-y-8 md:space-y-0">
        {photoContent.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center min-h-[400px] md:min-h-[500px] mx-8 md:mx-0 mb-16 md:mb-0"
            >
              {/* Photo Section */}
              <div
                className={`relative w-full h-64 sm:h-80 md:h-full bg-muted-foreground/20 overflow-hidden ${
                  isEven ? "md:order-1 rounded-2xl md:rounded-l-none md:rounded-r-4xl" : "md:order-2 rounded-2xl md:rounded-r-none md:rounded-l-4xl"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.subtitle}
                  fill
                  className={`object-cover ${
                    isEven ? "rounded-2xl md:rounded-l-none md:rounded-r-4xl" : "rounded-2xl md:rounded-r-none md:rounded-l-4xl"
                  }`}
                />
              </div>
              {/* Text Section */}
              <div
                className={`space-y-4 px-0 lg:px-24 md:px-12 text-left ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-100 tracking-tight leading-tight">
                  {item.title}
                </h2>
                <h3 className="text-base sm:text-lg font-medium text-neutral-200">
                  {item.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PhotoGallery;
