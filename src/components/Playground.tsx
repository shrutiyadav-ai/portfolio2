import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Hand, Play } from "lucide-react";
import setupCloseup from "@/assets/setup-closeup.jpg";
import { PLAYGROUND_COMMANDS } from "@/data";
import { cn } from "@/utils/cn";
import {
  ChaiCup,
  CodeDoodle,
  DoodleFlower,
  DoodleSparkle,
  DoodleStar,
  PaperFrame,
  Reveal,
  SectionLabel,
  Squiggle,
  Tape,
} from "@/components/decor";

type Line = { id: number; kind: "cmd" | "out"; text: string };

const COMMANDS = Object.keys(PLAYGROUND_COMMANDS).filter((c) => c !== "clear");

function GearDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="3.2" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={32 + Math.cos(a) * 14}
            y1={32 + Math.sin(a) * 14}
            x2={32 + Math.cos(a) * 24}
            y2={32 + Math.sin(a) * 24}
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function Playground() {
  const [lines, setLines] = useState<Line[]>([]);
  const [chai, setChai] = useState(2);
  const [shaking, setShaking] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const idRef = useRef(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const shakeTimer = useRef<number | undefined>(undefined);

  const push = (kind: Line["kind"], text: string) =>
    setLines((l) => [...l, { id: ++idRef.current, kind, text }]);

  const run = (cmd: string) => {
    push("cmd", `❯ ${cmd}`);
    const out = PLAYGROUND_COMMANDS[cmd] ?? ["command not found — try whoami, skills, chai, stack"];
    out.forEach((text, i) => {
      if (text === "__CLEAR__") {
        window.setTimeout(() => setLines([]), 300 * (i + 1));
        return;
      }
      window.setTimeout(() => push("out", text), 320 * (i + 1));
    });
  };

  useEffect(() => {
    const t = window.setTimeout(() => run("whoami"), 700);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const addChai = () => {
    setChai((c) => c + 1);
    setPulseKey((k) => k + 1);
  };

  const shakeDoodles = () => {
    setShaking(true);
    window.clearTimeout(shakeTimer.current);
    shakeTimer.current = window.setTimeout(() => setShaking(false), 1400);
  };

  return (
    <section id="playground" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>my little playground</SectionLabel>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          Serious code,{" "}
          <span className="relative inline-block">
            silly ideas.
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#E96A9A" />
          </span>
        </h2>
        <p className="mt-5 font-hand text-xl text-ink/55 md:text-2xl">
          poke around — everything here is clickable.
        </p>
      </Reveal>

      <div className="mt-12 grid items-start justify-items-center gap-12 text-center lg:grid-cols-2">
        {/* mini terminal */}
        <Reveal className="w-full">
          <div className="relative mx-auto w-full max-w-xl">
            <Tape className="-top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2 -rotate-6" />
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="overflow-hidden rounded-lg border-2 border-ink bg-ink text-paper shadow-[8px_10px_0_rgba(34,34,34,0.25)]"
            >
              <div className="flex items-center gap-1.5 border-b border-paper/15 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-mustard" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                <span className="ml-2 font-mono text-[10px] text-paper/50">shruti@playground:~</span>
                <span className="ml-auto flex items-center gap-1 font-mono text-[9px] text-mint/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" /> live
                </span>
              </div>
              <div ref={boxRef} className="h-56 overflow-y-auto p-3.5 text-left font-mono text-xs leading-relaxed md:h-64">
                {lines.map((l, i) => (
                  <motion.p
                    key={l.id}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(l.kind === "cmd" ? "mt-2 text-mustard" : "text-mint")}
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    {l.text}
                  </motion.p>
                ))}
                <span className="animate-blink mt-2 inline-block h-4 w-2 translate-y-1 bg-mint" aria-hidden />
              </div>
              <div className="flex flex-wrap justify-center gap-2 border-t border-paper/15 bg-ink/80 px-3 py-2.5">
                {COMMANDS.map((c) => (
                  <motion.button
                    key={c}
                    onClick={() => run(c)}
                    whileHover={{ y: -2, rotate: -2 }}
                    whileTap={{ scale: 0.94 }}
                    className={cn(
                      "inline-flex items-center gap-1.5 border border-paper/25 px-2.5 py-1 font-mono text-[10px] text-paper/80 transition-colors hover:border-mustard hover:bg-mustard hover:text-ink",
                      c === "chai" && "border-mustard/60 text-mustard"
                    )}
                  >
                    <Play size={9} /> {c}
                  </motion.button>
                ))}
                <button
                  onClick={() => run("clear")}
                  className="border border-paper/25 px-2.5 py-1 font-mono text-[10px] text-paper/50 transition-colors hover:border-pink hover:bg-pink hover:text-ink"
                >
                  clear
                </button>
              </div>
            </motion.div>
            <p className="mt-3 -rotate-1 text-center font-hand text-xl text-cobalt">
              go on, type a command — it really runs ▶
            </p>
          </div>
        </Reveal>

        {/* right column: doodles + chai + setup photo */}
        <div className="flex w-full flex-col items-center gap-9 text-center">
          <Reveal delay={0.1} className="w-full">
            <div className="group relative mx-auto w-fit">
              <div className={cn(shaking && "animate-wiggle")}>
                <GearDoodle className="animate-spin-slower mx-auto h-20 w-20 text-cobalt" />
              </div>
              <DoodleSparkle className="absolute -right-3 -top-2 h-6 w-6 text-pink" />
              <DoodleStar className={cn("absolute -left-5 bottom-0 h-5 w-5 text-mustard", shaking && "animate-wiggle")} />
              <CodeDoodle className="mx-auto mt-2 h-8 w-16 text-ink/50" />
              <button
                onClick={shakeDoodles}
                className="mt-2 inline-flex items-center gap-1.5 border border-ink/25 bg-white px-3 py-1 font-mono text-[9px] uppercase tracking-widest shadow-[2px_2px_0_rgba(34,34,34,0.15)] transition-all hover:-translate-y-0.5 hover:bg-mint"
              >
                <Hand size={10} /> shake the doodles
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="w-full">
            <div className="relative mx-auto max-w-sm -rotate-2 border border-ink/15 bg-cream p-5 text-center shadow-[4px_5px_0_rgba(34,34,34,0.12)] transition-transform duration-300 hover:rotate-0">
              <Tape className="-top-2 left-1/2 h-4 w-16 -translate-x-1/2 rotate-2" />
              <div className="flex items-center justify-center gap-3">
                <ChaiCup className="h-12 w-12" />
                <p className="max-w-[15rem] text-left font-hand text-2xl leading-tight">
                  currently turning chai into code.
                </p>
              </div>
              <div className="relative">
                <button
                  onClick={addChai}
                  className="jump-on-click mt-3 inline-flex items-center gap-2 border-2 border-ink bg-mustard px-4 py-2 font-display text-[11px] uppercase tracking-widest shadow-[3px_3px_0_#222] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <ChaiCup className="h-4 w-4" small /> one more chai
                </button>
                {/* steam burst on click */}
                <span key={pulseKey} className="pointer-events-none absolute inset-x-0 -top-2 flex justify-center gap-2" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="animate-steam h-4 w-1 rounded-full bg-ink/25"
                      style={{ animationDelay: `${i * 0.15}s`, animationDuration: "1.4s" }}
                    />
                  ))}
                </span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink/60">
                chai today:{" "}
                <span key={chai} className="animate-pop inline-block font-bold text-cobalt">
                  {chai}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.26} className="flex w-full flex-col items-center">
            <PaperFrame
              rotate="3"
              caption="1 a.m. · HTML, CSS & a cup of chai"
              tapeClass="-top-3 right-8 h-5 w-20 rotate-6"
              className="frame-hover"
            >
              <div className="overflow-hidden rounded-[2px] border border-ink/10">
                <img
                  src={setupCloseup}
                  alt="Close-up of a laptop showing HTML and CSS code with headphones and a cup of chai"
                  className="h-40 w-60 object-cover transition-transform duration-700 hover:scale-105 md:h-44 md:w-72"
                  loading="lazy"
                />
              </div>
            </PaperFrame>
            <div className="mt-3 flex items-center justify-center gap-2 text-ink/70">
              <DoodleFlower className="h-6 w-6 text-pink" />
              <code className="-rotate-1 whitespace-nowrap bg-white px-2 py-1 font-mono text-[11px] shadow-[2px_2px_0_rgba(34,34,34,0.15)]">
                while (chai &gt; 0) {"{ ship(); }"}
              </code>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
