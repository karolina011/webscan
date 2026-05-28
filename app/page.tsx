import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhatWeCheck } from "@/components/landing/WhatWeCheck";
import { Pricing } from "@/components/landing/Pricing";
import { WhyItMatters } from "@/components/landing/WhyItMatters";
import { WhoItsFor } from "@/components/landing/WhoItsFor";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <WhatWeCheck />
        <Pricing />
        <WhyItMatters />
        <WhoItsFor />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
