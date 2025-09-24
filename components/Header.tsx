"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-neutral-100">
      <nav className="container mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-16">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-900 hover:text-amber-950 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Left Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#nailDesigns"
              className="text-neutral-900 hover:text-amber-950 text-sm font-semibold transition-colors duration-300 relative group"
            >
              The Collection
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#theCollection"
              className="text-neutral-900 hover:text-amber-950 text-sm font-semibold transition-colors duration-300 relative group"
            >
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-neutral-900 hover:text-amber-950 text-sm font-semibold transition-colors duration-300 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex-1 lg:flex-none lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start"
            >
              <Image src={Logo} alt="Logo" width={250} height={60} />
            </Link>
          </div>

          {/* Right Icon Links */}
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/* Search */}
            <button className="text-neutral-900 hover:text-amber-950 transition-colors duration-300 group">
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* User Account */}
            <button className="hidden lg:flex text-neutral-900 hover:text-amber-950 transition-colors duration-300 group">
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Favorites */}
            <button className="hidden lg:flex text-neutral-900 hover:text-amber-950 transition-colors duration-300 group relative">
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full"></span>
            </button>

            {/* Contact Button */}
            <Button
              variant="outline"
              className="hidden lg:flex text-neutral-900 border-neutral-900 hover:text-neutral-100 hover:bg-amber-950 transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="absolute top-full left-0 right-0 bg-amber-950/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
            <div
              className={`container mx-auto px-6 py-6 transform transition-all duration-500 ease-in-out ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
              }`}
            >
              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-6">
                {[
                  { href: "#destinations", label: "The Collection" },
                  { href: "#experiences", label: "Our Services" },
                  { href: "#luxury", label: "Testimonials" },
                ].map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-white/90 hover:text-white text-lg font-light transition-all duration-300 hover:translate-x-2 transform ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Icon Actions */}
              <div
                className={`flex items-center justify-between pt-6 border-t border-white/10 transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? "300ms" : "0ms",
                }}
              >
                <div className="flex items-center space-x-6">
                  <button className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110 transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <button className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110 transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>
                  <button className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110 transform relative">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                  </button>
                </div>
                <Button className="bg-neutral-100 hover:bg-amber-700 text-amber-950 hover:text-neutral-100 font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
