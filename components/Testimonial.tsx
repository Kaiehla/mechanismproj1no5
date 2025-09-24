"use client";

import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    name: "Kaiehla Espiritu",
    clientYear: "2019",
    testimonial:
      "The nail stickers are absolutely gorgeous! They last for weeks without peeling and the designs are so unique. " +
      "I've gotten so many compliments on my nails. The quality is incredible and they're so easy to apply at home.",
    image: "/Testimonial4.png",
  },
  {
    id: 2,
    name: "Antoinette Austria",
    clientYear: "2020",
    testimonial:
      "Best nail salon experience I've ever had! The staff is so talented and the nail art is beyond amazing. " +
      "My gel manicure lasted 3 weeks without a single chip. I always leave feeling pampered and beautiful.",
    image: "/Testimonial2.png",
  },
  {
    id: 3,
    name: "Hershey Neri",
    clientYear: "2025",
    testimonial:
      "I'm obsessed with their custom nail stickers! As a busy mom, I love that I can get salon-quality nails at home. " +
      "The designs are trendy and fun, and they actually stay put through all my daily activities. Game changer!",
    image: "/Testimonial3.png",
  },
  {
    id: 4,
    name: "Ashley Rivera",
    clientYear: "2024",
    testimonial:
      "The nail technicians here are true artists! Every visit feels like a mini spa day. " +
      "They always know the latest trends and help me choose colors that complement my skin tone perfectly.",
    image: "/Testimonial1.png",
  },
  {
    id: 5,
    name: "Kim Atienza",
    clientYear: "2018",
    testimonial:
      "I've been a loyal customer for years and they never disappoint! The nail stickers are my go-to for special events. " +
      "They have such a wide variety of designs from elegant to fun. The quality is consistently amazing.",
    image: "/Testimonial5.png",
  },
  {
    id: 6,
    name: "Samantha Cruz",
    clientYear: "2020",
    testimonial:
      "Finally found a nail salon that understands my vision! Their attention to detail is incredible. " +
      "The nail stickers are perfect for when I want a quick change between salon visits. Love this place!",
    image: "/Testimonial6.png",
  },
];

function Testimonial() {
  return (
    <section
      className="container flex flex-col items-center text-center mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20"
      id="testimonials"
    >
      <h1 className="text-4xl lg:text-5xl font-semibold text-amber-950 tracking-tight">
        Hear from our clients
      </h1>
      <p className="text-sm sm:text-base text-neutral-950 font-normal leading-relaxed max-w-2xl mt-4 mb-12 px-5">
        Discover why our clients love us! From stunning nail designs to
        exceptional service, hear their stories and see how we've transformed
        their nail care experience.
      </p>

      {/* Testimonials Carousel */}
      <div className="w-full ">
        <Carousel className="w-full max-w-6xl mx-auto " opts={{ loop: true }}>
          <CarouselContent className="-ml-1 md:-ml-4 h-full">
            {testimonialData.map((testimonial) => (
              // Carousel Card
              <CarouselItem
                key={testimonial.id}
                className="pl-1 md:pl-4 basis-full md:basis-1/2"
              >
                <div className="bg-accent rounded-xl p-6 h-full ">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                    <div className="relative shrink-0 aspect-[8/4] lg:aspect-[3/4] w-full lg:max-w-[12rem] bg-muted-foreground/20 rounded-xl">
                    {/* Testimonial Image */}
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                      {/* Decorative Element Quote */}
                      <div className="absolute top-1/4 right-0 translate-x-1/2 h-8 w-8 lg:h-12 lg:w-12 bg-amber-950 rounded-full flex items-center justify-center">
                        <svg
                          width="102"
                          height="102"
                          viewBox="0 0 102 102"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 lg:h-6 lg:w-6"
                        >
                          <path
                            d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
                            className="fill-primary-foreground"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex lg:hidden items-center gap-4">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="text-sm font-medium bg-amber-950 text-white">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-lg font-semibold text-start">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500 text-start">
                              Client since {testimonial.clientYear}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="mt-4 text-base md:text-lg leading-snug font-medium tracking-tight text-left">
                        {testimonial.testimonial}
                      </p>

                      {/* Avatar */}
                      <div className="hidden lg:flex mt-6 items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="text-sm font-medium bg-amber-950 text-white">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-semibold text-start">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500 text-start">
                            Client since {testimonial.clientYear}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 hidden md:flex" />
          <CarouselNext className="-right-12 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonial;
