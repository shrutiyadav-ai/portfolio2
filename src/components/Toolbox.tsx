import { motion } from "framer-motion";
import type { TechItem } from "@/data";
import { TOOLBOX } from "@/data";
import { cn } from "@/utils/cn";
import { ArrowCurvy, Reveal, SectionLabel, Squiggle, StickyNote } from "@/components/decor";

function TechChip({ item, index }: { item: TechItem; index: number }) {
  const Lucide = item.lucide;
  return (
    <motion.span
      title={item.name}
      whileHover={{ y: -4, rotate: 0, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={cn(
        "inline-flex cursor-default items-center gap-2 border border-ink/25 bg-white px-3 py-2 text-xs font-semibold tracking-wide shadow-[2px_3px_0_rgba(34,34,34,0.12)] transition-all duration-200 border-ink hover:border-ink",
        index % 2 === 0 ? "rotate-1" : "-rotate-1"
      )}
    >
      {item.icon ? (
        <img src={item.icon} alt="" className="h-4 w-4" loading="lazy" />
      ) : Lucide ? (
        <Lucide className="h-4 w-4 text-cobalt" strokeWidth={2.2} />
      ) : null}
      {item.name}
    </motion.span>
  );
}

const CARD_ROTATIONS = ["-0.8deg", "0.7deg", "-0.5deg", "0.9deg", "-0.6deg"];

export default function Toolbox() {
  return (
    <section id="toolbox" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>my toolbox</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          Things I use to bring{" "}
          <span className="relative inline-block">
            ideas to life.
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#F4C84A" />
          </span>
        </h2>
        <div className="mt-5 flex flex-col items-center justify-center gap-1 text-cobalt">
          <p className="rotate-1 font-hand text-xl">picked up along the way — still adding more!</p>
          <ArrowCurvy className="w-14 -scale-y-100" />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOOLBOX.map((group, gi) => (
          <Reveal key={group.label} delay={(gi % 3) * 0.06} className={gi === TOOLBOX.length - 1 ? "lg:col-start-2" : ""}>
            <div
              className="flex h-full flex-col items-center gap-4 border border-ink/15 bg-white/60 p-5 text-center shadow-[4px_5px_0_rgba(34,34,34,0.1)] transition-transform duration-300 hover:rotate-0 md:p-6"
              style={{ transform: `rotate(${CARD_ROTATIONS[gi]})` }}
            >
              <StickyNote color={group.color} rotate={group.rotate} className="text-center">
                {group.label}
                <span className="block font-mono text-[9px] tracking-normal opacity-70">{group.note}</span>
              </StickyNote>
              <div className="h-px w-16 bg-ink/20" aria-hidden />
              <div className="flex flex-wrap justify-center gap-2.5">
                {group.items.map((item, i) => (
                  <TechChip key={item.name} item={item} index={i + gi} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
