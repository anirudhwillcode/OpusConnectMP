import { HeroSection } from "@/components/Content/HeroSection";
import { ClientsSection } from "@/components/Content/Clients";
import { ContactUs } from "@/components/Content/ContactUs";
import { Features } from "@/components/Content/Features";
import { HowItWork } from "@/components/Content/HowItWork";
import Pricing  from "@/components/Content/Pricing";
import { Testimonials } from "@/components/Content/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpusConnect",
  description: "Major Project",
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Features />
      <HowItWork />
      <Pricing />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
