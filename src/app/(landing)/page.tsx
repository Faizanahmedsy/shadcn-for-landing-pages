import {
  AboutSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
} from "@/components/modules";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <div className="px-32 space-y-10 "> */}
      <AboutSection />
      <ShowcaseSection />
      <ServicesSection />
      {/* </div> */}
    </>
  );
}
