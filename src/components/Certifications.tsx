import { BadgeCheck } from "lucide-react";
import { CERTS } from "@/data";
import { cn } from "@/utils/cn";
import { Reveal, SectionLabel, Squiggle } from "@/components/decor";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>certificates & courses</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          Learning never really{" "}
          <span className="relative inline-block">
            stops.
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#315DC7" />
          </span>
        </h2>
        <p className="mt-5 font-hand text-xl text-ink/60 md:text-2xl">
          little stamps of progress, collected one course at a time ✳
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.08}>
            <div
              className={cn(
                "group relative flex h-full flex-col items-center border border-ink/15 bg-cream p-5 pt-7 text-center shadow-[3px_4px_0_rgba(34,34,34,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[5px_8px_0_rgba(34,34,34,0.16)]",
                i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-1" : "-rotate-[0.5deg]"
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute -right-2 -top-3 grid h-12 w-12 rotate-12 place-items-center rounded-full border-2 bg-paper font-display text-[9px] shadow-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110",
                  c.stampClass
                )}
              >
                {c.stamp}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-sm border border-ink bg-ink text-paper">
                <BadgeCheck size={18} />
              </span>
              <h3 className="mx-auto mt-3 max-w-[15rem] text-sm font-bold leading-snug">{c.name}</h3>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-ink/50">{c.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
