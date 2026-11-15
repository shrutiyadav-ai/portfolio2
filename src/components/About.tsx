import { Download } from "lucide-react";
import setupNight from "@/assets/setup-night.jpg";
import { PROFILE } from "@/data";
import { downloadResume } from "@/data/resumePdf";
import { cn } from "@/utils/cn";
import {
  ArrowCurvy,
  ChaiCup,
  DoodleStar,
  PaperFrame,
  ProfilePhoto,
  Reveal,
  SectionLabel,
  Squiggle,
  Tape,
} from "@/components/decor";

const SKILL_TAGS = [
  { text: "FULL-STACK DEVELOPMENT", cls: "bg-cobalt text-paper", rotate: "-2" },
  { text: "GENERATIVE AI", cls: "bg-pink text-ink", rotate: "1.5" },
  { text: "PROBLEM SOLVING", cls: "bg-mustard text-ink", rotate: "-1" },
  { text: "ALWAYS LEARNING", cls: "bg-mint text-ink", rotate: "2" },
] as const;

const FACTS = [
  { k: "degree", v: "B.Tech CSE (AI & ML)" },
  { k: "campus", v: "SPSU, Udaipur" },
  { k: "year", v: "Second Year" },
  { k: "1st-year cgpa", v: "7.90" },
] as const;

export default function About() {
  return (
    <section id="about" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>about me!</SectionLabel>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          What's my{" "}
          <span className="relative inline-block">
            story?
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#E96A9A" />
          </span>
        </h2>
        <p className="mt-5 font-hand text-xl text-ink/55 md:text-2xl">
          the short version: curious, caffeinated, currently building.
        </p>
      </Reveal>

      <div className="mt-14 grid items-start gap-12 text-center lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        {/* left: portrait */}
        <Reveal className="relative justify-self-center">
          <div className="relative">
            <PaperFrame rotate="-3" caption="shruti, in paper form" className="frame-hover">
              <div className="h-48 w-48 overflow-hidden rounded-[2px] border border-ink/10 bg-cream md:h-56 md:w-56">
                <ProfilePhoto />
              </div>
            </PaperFrame>
            <Tape className="-bottom-2 right-6 h-5 w-16 rotate-12 animate-tape" />
            <p className="mt-5 -rotate-2 text-center font-hand text-xl text-cobalt">
              2nd year &amp; counting →
            </p>
            <p className="mt-1 text-center font-hand text-lg text-ink/45">
              (the glasses are on the desk now)
            </p>
          </div>
        </Reveal>

        {/* center: story */}
        <Reveal delay={0.1} className="mx-auto max-w-xl">
          <p className="text-lg leading-relaxed">
            I'm <strong>Shruti</strong>, a second-year Computer Science student specializing in{" "}
            <strong>AI &amp; ML</strong>. I enjoy turning ideas into working applications, experimenting with
            new technologies, and building things that solve everyday problems.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            From full-stack web applications to AI-powered tools, I love learning by building and figuring
            things out along the way.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {SKILL_TAGS.map((t) => (
              <span
                key={t.text}
                className={cn(
                  "cursor-default px-3 py-2 text-[10px] font-bold tracking-[0.14em] shadow-[2px_3px_0_rgba(34,34,34,0.2)] transition-all duration-200 rotate-[var(--r)] hover:rotate-0 hover:scale-105 md:text-[11px]",
                  t.cls
                )}
                style={{ "--r": `${t.rotate}deg` } as React.CSSProperties}
              >
                {t.text}
              </span>
            ))}
          </div>

          {/* lined index card with facts */}
          <div className="mx-auto mt-9 max-w-sm border border-ink/15 bg-cream p-5 text-center shadow-[4px_5px_0_rgba(34,34,34,0.12)]">
            <p className="font-hand text-xl text-ink/60">the official facts —</p>
            <ul className="mt-2 space-y-2 font-mono text-xs">
              {FACTS.map((f) => (
                <li key={f.k} className="border-b border-ink/10 pb-2 last:border-0 last:pb-0">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-cobalt">{f.k}</span>
                  <span className="mt-0.5 block font-semibold">{f.v}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={downloadResume}
              className="mx-auto mt-4 inline-flex items-center gap-2 border-2 border-ink bg-paper px-4 py-2 font-display text-[10px] tracking-[0.14em] text-ink uppercase shadow-[3px_3px_0_rgba(34,34,34,0.15)] transition-all duration-200 hover:-rotate-1 hover:bg-mustard"
              title="Download my resume (PDF)"
            >
              <Download size={13} /> Download resume
            </button>
          </div>
        </Reveal>

        {/* right: desk photo */}
        <Reveal delay={0.2} className="relative justify-self-center">
          <div className="relative">
            <PaperFrame
              rotate="2.5"
              caption="the 1 a.m. setup · chai on standby"
              tapeClass="-top-3 left-8 h-5 w-20 -rotate-6"
              className="frame-hover"
            >
              <div className="overflow-hidden rounded-[2px] border border-ink/10">
                <img
                  src={setupNight}
                  alt="Shruti's night-time developer setup: laptop showing code, headphones and a glowing code sign"
                  className="h-52 w-64 object-cover object-center transition-transform duration-700 hover:scale-105 md:h-64 md:w-80"
                  loading="lazy"
                />
              </div>
            </PaperFrame>
            <div className="absolute -left-6 -bottom-4 -rotate-6">
              <ChaiCup className="h-14 w-14 drop-shadow-[2px_3px_0_rgba(34,34,34,0.2)]" />
            </div>
            <DoodleStar className="absolute -top-4 -right-3 h-7 w-7 animate-pulse text-mustard" />
            <Tape className="-right-3 top-10 h-5 w-16 rotate-90 bg-pink/70" />
            <div className="mt-5 flex flex-col items-center justify-center gap-1 text-cobalt">
              <ArrowCurvy className="w-16 -scale-y-100" />
              <p className="-rotate-2 font-hand text-xl leading-tight">
                where the magic (and the bugs) happen
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mt-12 text-center font-hand text-xl text-ink/50">
        — currently studying {PROFILE.education} at {PROFILE.universityShort} —
      </p>
    </section>
  );
}
