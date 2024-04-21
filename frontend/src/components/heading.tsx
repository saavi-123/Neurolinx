import clsx from "clsx";

import { MAZIUS_DISPLAY } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";

interface SectionHeadingProps {
  heading: string;
  button?: React.ReactNode;
}

const headingClass = clsx(
  MAZIUS_DISPLAY.className,
  "text-5xl md:text-6xl lg:text-7xl text-white"
);

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  button,
}) => {
  return (
    <div
      className={`flex justify-between flex-col gap-5 min-[480px]:gap-0 min-[480px]:flex-row min-[480px]:items-center mb-12 md:mb-14`}
    >
      <h1 className={clsx(headingClass)}>{heading}</h1>
      <div>{button}</div>
    </div>
  );
};

interface PageHeadingProps {
  title: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <section className={`min-h-[30vh] grid place-items-center`}>
      <Wrapper>
        <h1 className={clsx(headingClass)}>{title}</h1>
      </Wrapper>
    </section>
  );
};
