"use client";

import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import Balancer from "react-wrap-balancer";

import { MAZIUS_DISPLAY } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { Wrapper } from "@/components/wrapper";

interface AboutSectionProps {}

const ABOUT_SECTION_DATA = [
  {
    title: "Our Mission",
    content:
      "Our mission is to revolutionize ADHD assessment by leveraging technology and psychology to empower individuals with valuable insights. We aim to break down barriers to understanding and support proactive management of ADHD-related challenges.",
    bg: "/mission.jpg",
  },
  {
    title: "About Us",
    content:
      "We're a multidisciplinary team focused on ADHD, creating a comprehensive detection tool for all ages. Using interactive games for kids and questionnaires for adults, we provide personalized feedback for timely intervention. Our goal is to provide better outcomes through accessible and effective ADHD management.",
    bg: "/about-us.jpg",
  },
  {
    title: "Our Vision",
    content:
      "Our vision is a world where everyone has access to personalized cognitive assessments that empower them to thrive. By harnessing the power of technology and psychology, we aim to transform the way individuals perceive and address cognitive challenges, ultimately improving quality of life for all.",
    bg: "/vision.jpg",
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <div className={`bg-black py-20`} id="about-us">
      <Wrapper>
        <Carousel
          orientation="horizontal"
          opts={{ loop: true, startIndex: 1 }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className={`ml-0`}>
            {ABOUT_SECTION_DATA.map((s, i) => {
              return (
                <CarouselItem
                  key={i}
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${s.bg}")`,
                  }}
                  className={clsx(
                    `flex flex-col items-center bg-cover`,
                    "basis-[90%] md:basis-[78%] mx-6",
                    `text-white text-center bg-zinc-800 py-8 rounded-3xl pl-0 ml-0`
                  )}
                >
                  <h1
                    className={clsx(
                      MAZIUS_DISPLAY.className,
                      "text-6xl",
                      "mb-16"
                    )}
                  >
                    {s.title}
                  </h1>
                  <p className={`leading-8 w-4/5 mx-auto`}>
                    <Balancer>{s.content}</Balancer>
                  </p>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            variant={"default"}
            className={clsx(
              `translate-x-10 min-[562px]:translate-x-16 text-black`,
              "rounded-3xl shadow-lg border-zinc-800 backdrop-blur-sm"
            )}
          />
          <CarouselNext
            variant={"default"}
            className={clsx(
              `-translate-x-10 min-[562px]:-translate-x-16 text-black`,
              "rounded-3xl shadow-lg border-zinc-800 backdrop-blur-sm"
            )}
          />
        </Carousel>
      </Wrapper>
    </div>
  );
};
