"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  ratio?: number;
}

export const Logo: React.FC<LogoProps> = ({ ratio }) => {
  return (
    <Link href={"/"}>
      <Image
        alt="burs logo"
        src={"/neurolinx-logo.png"}
        width={200}
        height={32.35}
        priority
        quality={100}
        className={`max-w-none`}
      />
    </Link>
  );
};
