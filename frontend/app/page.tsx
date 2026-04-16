import { Quote } from "lucide-react";
import AboutSection from "./_components/AboutSection";
import FeaturedCourses from "./_components/FeaturedCourses";
import HeroSection from "./_components/HeroSection";
import QuoteSection from "./_components/QuoteSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedCourses />
      <QuoteSection />
    </>
  );
};

export default HomePage;
