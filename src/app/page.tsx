import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pavcon | Toronto Construction & Custom Home Builder",
  description:
    "Toronto-based construction and custom home builder. Serving Southern Ontario for over 10 years with renovations, additions, custom builds, and multi-unit conversions.",
  openGraph: {
    url: "https://pavcon.ca",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
<Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
