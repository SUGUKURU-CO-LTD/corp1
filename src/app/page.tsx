import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import MissionSection from "@/components/sections/MissionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import NumbersSection from "@/components/sections/NumbersSection";
import HomeInfoSection from "@/components/sections/HomeInfoSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";

// お知らせの掲出期限（pinnedUntil）をサーバー側で再評価するため、1時間ごとに再生成する。
// Re-evaluate news pinning (pinnedUntil) server-side by revalidating hourly.
// Mengevaluasi ulang penyematan berita (pinnedUntil) di sisi server setiap jam.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <MissionSection />
      <ServicesSection />
      <NumbersSection />
      <HomeInfoSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
