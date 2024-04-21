"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/button";

import { MAZIUS_DISPLAY } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section className={`bg-black text-white h-screen`}>
      <div
        style={{
          backgroundImage: "url(./hero-bg.png)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Wrapper className={`text-center grid place-items-center pt-36`}>
          <Link href={"/"}>
            <Image
              alt="burs logo"
              src={"/neurolinx-logo.png"}
              width={200 * 3}
              height={32.35 * 3}
              priority
              quality={100}
              className={`max-w-none mb-10`}
            />
          </Link>
          <div
            className={clsx(
              MAZIUS_DISPLAY.className,
              "text-xl leading-[35px]",
              "min-[375px]:text-2xl min-[375px]:leading-[40px]",
              "min-[450px]:text-3xl min-[450px]:leading-[45px]",
              "min-[520px]:text-4xl min-[520px]:leading-[50px]",
              "min-[660px]:text-5xl min-[660px]:leading-[60px]",
              "min-[840px]:text-6xl min-[840px]:leading-[80px]"
            )}
          >
            Your gateway to a revolutionary <br />
            approach in cognitive assessment
          </div>

          <div className={`flex gap-8 mt-10`}>
            <Button asChild variant={"default"} size={"lg"}>
              <Link href={"http://localhost:9030/"} target="_blank">
                Take Test
              </Link>
            </Button>

            <Button asChild variant={"default"} size={"lg"}>
              <Link href={"http://localhost:3006/"} target="_blank">
                Play Game
              </Link>
            </Button>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
