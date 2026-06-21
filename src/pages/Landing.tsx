import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { Founder } from "@/components/Founder";
import { Waitlist } from "@/components/Waitlist";
import { FaqSection } from "@/components/FaqSection";

export function Landing() {
  const location = useLocation();

  // Honor a requested section scroll when arriving from another route.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      requestAnimationFrame(() =>
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }),
      );
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <PainSection />
      <HowItWorks />
      <Comparison />
      <Features />
      <Founder />
      <Waitlist />
      <FaqSection />
    </>
  );
}
