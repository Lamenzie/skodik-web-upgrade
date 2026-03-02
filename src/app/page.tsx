import Hero from "@/app/sections/hero/Hero";
import TechnologiesSection from "./sections/technologies/TechnologiesSection";
import ReviewsSection from "./sections/reviews/ReviewsSection";
import GallerySection from "./sections/gallery/GallerySection";
import MapSection from "./sections/map/MapSection";
import FooterSection from "./sections/footer/FooterSection";
import NavbarSection from "./sections/navbar/NavbarSection";
import CookiesBanner from "@/components/cookies/CookiesBanner";
import AboutSection from "./sections/about/AboutSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
      <FooterSection />
      <CookiesBanner />
    </>
  );
}
