import { AboutSection } from "@/modules/home-page/about-section";
import { ADHDSection } from "@/modules/home-page/adhd-section";
import { HeroSection } from "@/modules/home-page/hero-section";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ADHDSection />
    </>
  );
};
