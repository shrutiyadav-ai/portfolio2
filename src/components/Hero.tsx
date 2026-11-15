import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles } from "lucide-react";
import { PROFILE } from "@/data";
import { downloadResume } from "@/data/resumePdf";
import { PinPhotoButton } from "@/lib/photo";
import {
  ArrowCurvy,
  DoodleFlower,
  DoodleSparkle,
  DoodleStar,
  PaperFrame,
  ProfilePhoto,
  StickyNote,
  WobblyFrame,
} from "@/components/decor";

const HERO_NOTES = [
  { text: "Problem Solver", color: "pink", rotate: "-6" },
  { text: "Code & Create", color: "mint", rotate: "4" },
  { text: "AI Explorer", color: "cobalt", rotate: "-4" },
] as const;

const LETTERS = PROFILE.firstName.split("");

function FloatingDoodle({
  children,
  className,
  delay = 0,
  distance = 10,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  return (
    <motion.span
      aria-hidden
      className={className}
      animate={{ y: [0, -distance, 0], rotate: [-4, 5, -4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section id="home" className="section-pad relative pb-20 pt-8 md:pt-12">
      {/* floating margin doodles */}
      <FloatingDoodle className="pointer-events-none absolute left-6 top-28 hidden text-mustard lg:block" delay={0.3}>
        <DoodleStar className="h-8 w-8" />
      </FloatingDoodle>
      <FloatingDoodle className="pointer-events-none absolute right-10 top-16 hidden text-pink lg:block" delay={1.1} distance={14}>
        <DoodleFlower className="h-9 w-9" />
      </FloatingDoodle>
      <FloatingDoodle className="pointer-events-none absolute bottom-24 left-16 hidden text-cobalt xl:block" delay={0.7} distance={7}>
        <DoodleSparkle className="h-6 w-6" />
      </FloatingDoodle>
      <FloatingDoodle className="pointer-events-none absolute right-24 bottom-40 hidden text-mint xl:block" delay={1.6}>
        <DoodleStar className="h-5 w-5" />
      </FloatingDoodle>

      {/* scattered handwritten labels */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-hand text-xl text-ink/75 md:text-2xl"
      >
        {["made of curiosity", "building things", "still learning every day"].map((label, i) => (
          <motion.span
            key={label}
            variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
            className={
              i === 0
                ? "flex -rotate-3 items-center gap-1.5"
                : i === 1
                  ? "rotate-2 text-cobalt"
                  : "-rotate-2"
            }
          >
            {i === 0 && <DoodleSparkle className="h-5 w-5 text-mustard" />}
            {label}
            {i === 2 && <DoodleSparkle className="ml-1 inline h-4 w-4 text-pink" />}
          </motion.span>
        ))}
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center text-center md:mt-14">
        <motion.p
          initial={{ opacity: 0, rotate: -6 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-hand text-2xl text-cobalt md:text-3xl"
        >
          hey, my name is
        </motion.p>

        <div className="relative mx-auto mt-3 inline-block px-5 py-3 md:px-12 md:py-5">
          <WobblyFrame className="absolute inset-0 h-full w-full" />
          {/* hand-drawn sunburst behind the name */}
          <motion.svg
            aria-hidden
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 text-mustard md:-right-10 md:-top-12 md:h-32 md:w-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="14"
                x2="100"
                y2="34"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 100 100)`}
                opacity={0.55}
              />
            ))}
          </motion.svg>

          <motion.h1
            aria-label={PROFILE.firstName}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
            className="relative font-display text-[clamp(3.4rem,14vw,9.5rem)] uppercase leading-[0.95] tracking-tight"
          >
            {LETTERS.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                aria-hidden
                className="inline-block transition-colors hover:text-cobalt"
                variants={{
                  hidden: { y: 60, opacity: 0, rotate: 8 },
                  show: {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    transition: { type: "spring", stiffness: 220, damping: 18 },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-4"
        >
          {HERO_NOTES.map((n, i) => (
            <motion.div
              key={n.text}
              whileHover={{ scale: 1.09, rotate: 0, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="animate-note-float"
              style={{ animationDelay: `${i * 0.7}s`, "--r": `${n.rotate}deg` } as React.CSSProperties}
            >
              <StickyNote color={n.color} rotate={n.rotate}>
                {n.text}
              </StickyNote>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <p className="mx-auto mt-9 max-w-2xl font-display text-lg leading-snug md:text-2xl">
            “I build digital experiences that solve real problems.”
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/60 md:text-base">
            Computer Science student exploring full-stack development and artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col items-center"
        >
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="btn-primary shine-host">
              Explore my work <ArrowDown size={15} />
            </a>
            <a href="#contact" className="btn-outline">
              Let's connect
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-hand text-xl text-cobalt transition-colors hover:text-ink"
            >
              open to internship opportunities
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-1.5 border-b-2 border-dashed border-ink/30 pb-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:border-cobalt hover:text-cobalt"
            >
              <Download size={12} /> resume
            </button>
          </div>
        </motion.div>

        {/* taped portrait with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <div className="relative mx-auto w-fit">
            <motion.div
              ref={frameRef}
              onMouseMove={onMove}
              onMouseLeave={reset}
              style={{ rotateX, rotateY, transformPerspective: 900 }}
              className="relative"
            >
              <PaperFrame rotate="2.5" caption="hi, that's me!">
                <div className="h-56 w-56 overflow-hidden rounded-[2px] border border-ink/10 bg-cream md:h-72 md:w-72">
                  <ProfilePhoto />
                </div>
              </PaperFrame>
              <div className="mt-3">
                <PinPhotoButton />
              </div>
              <motion.span
                aria-hidden
                className="absolute -right-3 -top-4 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-mint text-ink shadow-[2px_3px_0_rgba(34,34,34,0.25)]"
                animate={{ rotate: [0, 12, -6, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={17} />
              </motion.span>
            </motion.div>

            <ArrowCurvy className="absolute -left-24 top-6 hidden w-24 text-ink/60 lg:block" flip />
            <p className="absolute -left-36 top-10 hidden w-28 -rotate-6 text-center font-hand text-xl leading-tight text-ink/60 lg:block">
              yes, I wrote this site too
            </p>
            <StickyNote color="mustard" rotate="7" className="absolute -right-12 -bottom-4 hidden !text-lg lg:inline-block">
              SPSU · Udaipur
            </StickyNote>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="mt-12 inline-flex flex-col items-center gap-1 font-mono text-[9px] uppercase tracking-[0.3em] text-ink/45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          scroll
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
