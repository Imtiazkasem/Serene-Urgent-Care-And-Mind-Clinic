import AboutSection from "@/Components/LandingPages/AboutSection";
import FAQSection from "@/Components/LandingPages/FAQSection";
import Hero from "@/Components/LandingPages/Hero";
import TopServices from "@/Components/LandingPages/TopServices";
import WhyChooseUs from "@/Components/LandingPages/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <TopServices />
      <AboutSection />
      <FAQSection/>
    </div>
  );
}
