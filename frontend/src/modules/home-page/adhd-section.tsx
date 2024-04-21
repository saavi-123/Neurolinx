"use client";

import { SectionHeading } from "@/components/heading";
import { Wrapper } from "@/components/wrapper";

interface ADHDSectionProps {}

const Container: React.FC<{ children: React.ReactNode; website?: string }> = ({
  children,
  website,
}) => {
  return (
    <Wrapper
      className={`bg-black py-20 text-white`}
      style={{
        backgroundImage: "url(./hero-bg.png)",
        backgroundSize: "cover",
      }}
      id="ADHD"
    >
      <SectionHeading heading="What is ADHD?" />
      <div>{children}</div>
    </Wrapper>
  );
};

export const ADHDSection: React.FC<ADHDSectionProps> = ({}) => {
  return (
    <Container>
      <p className={`w-full text-center md:text-left md:w-3/4 leading-7`}>
        ADHD, or Attention Deficit Hyperactivity Disorder, is a
        neurodevelopmental condition characterized by persistent patterns of
        inattention, impulsivity, and hyperactivity that interfere with daily
        functioning. It affects people of all ages, from children to adults, and
        can have significant impacts on academic performance, work productivity,
        and social relationships. While the exact causes of ADHD are not fully
        understood, a combination of genetic, environmental, and neurological
        factors is believed to contribute to its development. Early detection
        and appropriate intervention are key to managing ADHD symptoms and
        improving quality of life for individuals affected by the disorder.
      </p>
    </Container>
  );
};
