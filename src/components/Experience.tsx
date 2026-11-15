import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCES } from "@/data";
import { cn } from "@/utils/cn";
import { DoodleStar, Reveal, SectionLabel, Squiggle } from "@/components/decor";

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>outside the editor</SectionLabel>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          Things beyond{" "}
          <span className="relative inline-block">
            coding.
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#9BD8BD" />
          </span>
        </h2>
        <p className="mt-5 font-hand text-xl text-ink/55 md:text-2xl">
          the classroom taught me code — these taught me people.
        </p>
      </Reveal>

      <div ref={trackRef} className="relative mx-auto mt-14 max-w-2xl">
        <div aria-hidden className="absolute bottom-10 left-1/2 top-0 -translate-x-1/2 border-l-2 border-dashed border-ink/20" />
        <motion.div
          aria-hidden
          style={{ scaleY: lineScale }}
          className="absolute bottom-10 left-1/2 top-0 w-[3px] origin-top -translate-x-1/2 bg-cobalt/70"
        />
        {EXPERIENCES.map((e, i) => (
          <Reveal key={e.num} delay={i * 0.1}>
            <div className="relative flex flex-col items-center pb-12 last:pb-0">
              <span
                className={cn(
                  "z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-ink text-ink shadow-[3px_3px_0_rgba(34,34,34,0.2)]",
                  e.color
                )}
              >
                <e.icon size={19} strokeWidth={2.2} />
              </span>
              <div
                className={cn(
                  "mt-5 w-full border border-ink/15 bg-white p-5 text-center shadow-[4px_5px_0_rgba(34,34,34,0.12)] transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[6px_9px_0_rgba(34,34,34,0.16)] md:p-6",
                  i % 2 === 0 ? "-rotate-[0.6deg]" : "rotate-[0.6deg]"
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
                  experience {e.num}
                </span>
                <h3 className="mt-1 font-display text-base uppercase leading-snug md:text-lg">{e.role}</h3>
                <span className="mt-2 inline-block bg-cobalt/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cobalt">
                  {e.org}
                </span>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70">{e.description}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-ink/20 bg-cream px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <DoodleStar className="absolute -bottom-3 right-2 h-8 w-8 text-mustard" />
      </div>
    </section>
  );
}
