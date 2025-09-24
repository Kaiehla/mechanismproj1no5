"use client";
import React, { useState } from "react";
import BGHero from "@/public/Background.png";

function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BGHero.src})` }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

      {/* Overlay Container */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-6 sm:py-2 mb-6 sm:mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-300 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span className="text-white/90 text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Premium Nail Artistry
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-100 tracking-tight mb-4 sm:mb-6 leading-tight">
              Styled for everyday glam
            </h1>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Express yourself with playful colors, bold designs, and a touch of
              glam. Whether it&apos;s everyday chic or nails made for the gram,
              we&apos;ve got your style covered.
            </p>

            {/* CTA */}
            <div className="flex flex-row items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <a
                href="#"
                className="group inline-flex items-center px-4 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-light text-sm sm:text-base lg:text-lg tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-sm flex-1 sm:flex-none justify-center"
              >
                <span className="hidden sm:inline">Book an Appointment</span>
                <span className="sm:hidden">Book Now</span>
                <svg
                  className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <div className="flex items-center space-x-2 sm:space-x-3 text-white/40 flex-shrink-0">
                <div className="w-px h-6 sm:h-8 bg-white/20"></div>
                <span className="text-xs sm:text-sm font-light tracking-widest uppercase">
                  Since 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-rose-400/50 via-white/20 to-transparent z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-30"></div>
    </section>
  );
}

export default Hero;
