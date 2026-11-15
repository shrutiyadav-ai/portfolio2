import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Toolbox from "@/components/Toolbox";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Playground from "@/components/Playground";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/decor";

const RIBBON = [
  "full-stack development",
  "generative ai",
  "problem solving",
  "always learning",
  "react + next.js",
  "chai-powered",
  "open to internships",
];

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen md:px-6 md:py-8 lg:px-10">
        {/* grey grid outer background lives on <body>; this is the warm-white notebook canvas */}
        <main className="notebook relative mx-auto max-w-[1200px] border-x border-ink/10 text-center shadow-[0_30px_80px_rgba(34,34,34,0.28)] md:rounded-[6px]">
          <Navbar />
          <Hero />
          <Marquee items={RIBBON} />
          <About />
          <Toolbox />
          <Projects />
          <Experience />
          <Certifications />
          <Playground />
          <Marquee
            items={["let's build something", "curiosity > perfection", "chai first, code second", "hello@shruti", "available for internships"]}
            className="bg-pink"
          />
          <Contact />
          <Footer />
        </main>
      </div>
    </MotionConfig>
  );
}
