import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import BestSellers from "@/components/home/BestSellers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import BilingualSEO from "@/components/common/BilingualSEO";

export default function HomePage() {
  return (
    <>
      <BilingualSEO pageKey="home" />
      <Hero />
      <CategoryGrid />
      <BestSellers />
      <WhyChooseUs />
      <BrandStory />
      <Testimonials />
      <CTASection />
    </>
  );
}
