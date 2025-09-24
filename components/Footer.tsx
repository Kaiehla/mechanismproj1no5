"use client";


import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";

const footerSections = [
  {
    title: "Menu",
    links: [
      {
        title: "The Collection",
        href: "#",
      },
      {
        title: "Our Services",
        href: "#",
      },
      {
        title: "Testimonials",
        href: "#",
      },
    ],
  },
  {
    title: "Location",
    links: [
      {
        title: "3rd Floor, Beauty & Wellness Section, Ayala Malls Vertis North, Quezon City, Philippines",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-7xl mx-auto">
          <div className="py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10 px-4 sm:px-6 xl:px-0">
            <div className="col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-2">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center justify-center md:justify-start"
              >
                <Image 
                  src={Logo} 
                  alt="Logo" 
                  width={200} 
                  height={48}
                  className="w-auto h-10 sm:h-12 md:h-14"
                />
              </Link>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground text-center md:text-left max-w-md mx-auto md:mx-0">
                Express yourself with playful colors, bold designs, and a touch of glam. Premium nail artistry since 2020.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title} className="text-center md:text-left">
                <h6 className="font-semibold text-sm md:text-base">{title}</h6>
                <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="my-6 md:my-2" />
          <div className="py-4 md:py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 px-4 sm:px-6 xl:px-0 mb-6">
            {/* Copyright */}
            <span className="text-xs md:text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:text-foreground transition-colors">
                Maison de Nails
              </Link>
              . All rights reserved. Kaiehla.
            </span>
            <div className="flex items-center space-x-4 text-xs md:text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
