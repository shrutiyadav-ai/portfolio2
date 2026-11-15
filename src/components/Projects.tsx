import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, Mic, X } from "lucide-react";
import githubIcon from "devicon/icons/github/github-original.svg";
import { PROJECTS, type Project } from "@/data";
import { cn } from "@/utils/cn";
import { Reveal, SectionLabel, Squiggle, StickyNote, Tape } from "@/components/decor";

/* ================= CSS browser mockups ================= */

function BrowserWindow({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border-2 border-ink bg-white text-left text-ink shadow-[10px_12px_0_rgba(34,34,34,0.22)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b-2 border-ink/10 bg-cream px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full border border-ink/20 bg-pink" />
        <span className="h-2.5 w-2.5 rounded-full border border-ink/20 bg-mustard" />
        <span className="h-2.5 w-2.5 rounded-full border border-ink/20 bg-mint" />
        <span className="ml-2 flex-1 truncate rounded-sm bg-fog/80 px-2 py-0.5 font-mono text-[9px] text-ink/60">
          {url}
        </span>
      </div>
      <div className="h-52 p-3 md:h-60">{children}</div>
    </div>
  );
}

function Bar({ label, pct, fill }: { label: string; pct: string; fill: string }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[8px] text-ink/70">
        <span>{label}</span>
        <span>{pct}</span>
      </div>
      <div className="mt-0.5 h-1.5 rounded-sm bg-fog">
        <div className={cn("h-full rounded-sm", fill)} style={{ width: pct }} />
      </div>
    </div>
  );
}

function SkillBridgeMock() {
  return (
    <div className="grid h-full grid-cols-[38px_1fr] gap-2.5">
      <div className="flex flex-col items-center gap-2 rounded-sm bg-cobalt py-2.5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn("h-2.5 w-2.5 rounded-full", i === 0 ? "bg-mustard" : "bg-paper/40")} />
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="h-2.5 w-28 rounded-sm bg-ink/80" />
            <div className="mt-1.5 h-2 w-20 rounded-sm bg-ink/20" />
          </div>
          <div className="relative h-12 w-12 shrink-0">
            <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
              <circle cx="22" cy="22" r="18" fill="none" stroke="#D7D7D2" strokeWidth="6" />
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="#F4C84A"
                strokeWidth="6"
                strokeDasharray={`${0.87 * 113} 113`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 grid place-items-center font-display text-[9px]">87%</span>
          </div>
        </div>
        <Bar label="React" pct="86%" fill="bg-cobalt" />
        <Bar label="Python" pct="74%" fill="bg-pink" />
        <Bar label="SQL" pct="68%" fill="bg-mint" />
        <div className="flex gap-1.5 pt-0.5">
          {["Student", "Industry", "Mentor"].map((r) => (
            <span key={r} className="border border-ink/25 px-1.5 py-0.5 font-mono text-[8px] uppercase">
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResumeIQMock() {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      <div className="space-y-1.5 rounded-sm border border-ink/15 p-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-5 w-5 rounded-full border border-ink/20 bg-mustard" />
          <div className="h-1.5 w-14 rounded-sm bg-ink/70" />
        </div>
        {[85, 95, 70, 88, 60, 78].map((w, i) => (
          <div key={i} className="h-1.5 rounded-sm bg-ink/15" style={{ width: `${w}%` }} />
        ))}
        <div className="flex gap-1 pt-1">
          <span className="h-3 w-8 rounded-sm bg-mint" />
          <span className="h-3 w-8 rounded-sm bg-fog" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-mustard bg-cream font-display text-xs">
            87
          </span>
          <div className="w-full">
            <div className="h-2 w-4/5 rounded-sm bg-ink/80" />
            <div className="mt-1 h-1.5 w-3/5 rounded-sm bg-ink/20" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="bg-mint px-1.5 py-0.5 font-mono text-[8px]">react</span>
          <span className="bg-mint px-1.5 py-0.5 font-mono text-[8px]">sql</span>
          <span className="bg-fog px-1.5 py-0.5 font-mono text-[8px] text-ink/50">docker</span>
        </div>
        <Bar label="JD match" pct="92%" fill="bg-mustard" />
      </div>
    </div>
  );
}

function TranslateMock() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="max-w-[82%] rounded-lg rounded-bl-sm border border-ink/15 bg-cream p-2">
        <p className="font-mono text-[9px]">Hello, how are you?</p>
        <p className="mt-0.5 font-mono text-[9px] text-cobalt">→ 안녕하세요, 어떻게 지내세요?</p>
      </div>
      <div className="ml-auto max-w-[82%] rounded-lg rounded-br-sm bg-pink p-2">
        <p className="font-mono text-[9px]">नमस्ते! sab kuch theek hai 🙌</p>
      </div>
      <div className="flex gap-1.5">
        {["EN → HI", "EN → KO", "OCR"].map((c) => (
          <span key={c} className="border border-ink/25 px-1.5 py-0.5 font-mono text-[8px]">
            {c}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-full border border-ink/20 px-2.5 py-1.5">
        <span className="flex-1 font-mono text-[8px] text-ink/50">type or say something…</span>
        <span className="grid h-5 w-5 place-items-center rounded-full bg-cobalt text-paper">
          <Mic size={10} />
        </span>
      </div>
    </div>
  );
}

function CampusCareMock() {
  const rows = [
    { t: "Wi-Fi down in hostel B", s: "Resolved", cls: "bg-mint" },
    { t: "Library AC not working", s: "In progress", cls: "bg-cobalt text-paper" },
    { t: "Canteen queue too long", s: "Pending", cls: "bg-mustard" },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between pb-2">
        <div className="h-2.5 w-24 rounded-sm bg-ink/80" />
        <span className="rounded-full border border-ink/20 px-2 py-0.5 font-mono text-[8px] text-ink/50">
          search…
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.t} className="flex items-center justify-between gap-2 border-b border-ink/10 pb-1.5">
            <div className="flex min-w-0 items-center gap-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
              <span className="truncate font-mono text-[8px] text-ink/70">{r.t}</span>
            </div>
            <span className={cn("shrink-0 px-1.5 py-0.5 font-mono text-[8px]", r.cls)}>{r.s}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-1.5 pt-2">
        <span className="h-1.5 w-1.5 rounded-full bg-mint" />
        <span className="h-px flex-1 bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-mustard" />
        <span className="h-px flex-1 bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
        <span className="ml-1 font-mono text-[8px] text-ink/50">timeline</span>
      </div>
    </div>
  );
}

function ProjectMockup({ variant, url }: { variant: Project["variant"]; url: string }) {
  return (
    <BrowserWindow url={url}>
      {variant === "skillbridge" && <SkillBridgeMock />}
      {variant === "resumeiq" && <ResumeIQMock />}
      {variant === "translategpt" && <TranslateMock />}
      {variant === "campuscare" && <CampusCareMock />}
    </BrowserWindow>
  );
}

/* ================= project panel ================= */

function ProjectPanel({ p, index, onOpen }: { p: Project; index: number; onOpen: (p: Project) => void }) {
  const dark = p.panelClass.includes("cobalt");
  return (
    <Reveal>
      <article
        id={`project-${p.num}`}
        className={cn(
          "group relative scroll-mt-24 rounded-[1.75rem] p-6 text-center shadow-[10px_12px_0_rgba(34,34,34,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[12px_18px_0_rgba(34,34,34,0.2)] md:p-12",
          p.panelClass,
          index % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.4deg]"
        )}
      >
        <Tape className="animate-tape -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <span
            aria-hidden
            className="select-none font-display text-5xl leading-none opacity-20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 md:text-6xl"
          >
            {p.num}
          </span>
          <span
            className={cn(
              "mt-2 inline-block -rotate-1 border-2 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em]",
              p.chipClass
            )}
          >
            {p.category}
          </span>
          <h3 className="mt-4 font-display text-[clamp(2.2rem,9vw,4.5rem)] uppercase leading-[0.95] tracking-tight">
            {p.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-85 md:text-base">{p.description}</p>

          <ul className="mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
            {p.features.map((f) => (
              <li
                key={f}
                className={cn(
                  "flex items-center gap-1.5 border px-2.5 py-1 text-[11px] leading-snug md:text-xs",
                  dark ? "border-paper/30" : "border-ink/20"
                )}
              >
                <Check size={11} strokeWidth={3.2} className="shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap justify-center gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className={cn("border px-2 py-1 font-mono text-[9px] uppercase tracking-wider", p.chipClass)}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpen(p)}
              className={cn(
                "shine-host inline-flex items-center gap-2 px-5 py-3 font-display text-[11px] tracking-[0.14em] uppercase transition-all duration-200 md:text-xs",
                p.btnClass
              )}
            >
              View project <ArrowUpRight size={14} />
            </button>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-2 border-2 px-5 py-3 font-display text-[11px] tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-0.5 md:text-xs",
                p.chipClass
              )}
            >
              <img src={githubIcon} alt="" className={cn("h-4 w-4", dark && "invert")} />
              GitHub
            </a>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 border-2 px-5 py-3 font-display text-[11px] tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-0.5 md:text-xs",
                  p.chipClass
                )}
              >
                <ExternalLink size={14} /> Live demo
              </a>
            )}
          </div>

          {/* screenshot-ish mockup */}
          <div className="relative mt-10 w-full max-w-xl">
            <Tape className="-top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2 -rotate-3" />
            <div
              className={cn(
                "transition-transform duration-700 group-hover:scale-[1.02]",
                index % 2 === 0 ? "md:rotate-1" : "md:-rotate-1"
              )}
            >
              <ProjectMockup variant={p.variant} url={p.url} />
            </div>
            <StickyNote
              color="cream"
              rotate="-2"
              className={cn("mx-auto -mt-3 block max-w-[240px] !px-3 !py-2 !text-lg", p.noteClass)}
            >
              {p.note}
            </StickyNote>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ================= modal ================= */

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border-2 border-ink bg-paper p-6 text-center shadow-[12px_14px_0_rgba(34,34,34,0.35)] md:p-10"
        initial={{ scale: 0.92, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 12, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Tape className="animate-tape -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3" />
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center border-2 border-ink bg-mustard shadow-[2px_2px_0_#222] transition-transform hover:rotate-90"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobalt">
          project {project.num} — case study
        </p>
        <h3 className="mt-2 font-display text-3xl uppercase md:text-5xl">{project.title}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{project.category}</p>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink/80">{project.description}</p>

        <div className="mx-auto mt-6 max-w-md">
          <ProjectMockup variant={project.variant} url={project.url} />
        </div>

        <h4 className="mt-6 font-hand text-2xl text-pink">what it does —</h4>
        <ul className="mx-auto mt-2 flex max-w-lg flex-wrap justify-center gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 border border-ink/20 bg-white px-2.5 py-1 text-xs">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-ink bg-mint">
                <Check size={9} strokeWidth={3.2} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 font-hand text-2xl text-cobalt">built with —</h4>
        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-ink/30 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
            <img src={githubIcon} alt="" className="h-4 w-4 invert" /> GitHub repo
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-outline">
              <ExternalLink size={14} /> Live demo
            </a>
          )}
          <a href="#contact" onClick={onClose} className="btn-outline">
            Ask about it
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================= section ================= */

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>things i've made</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-4xl font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          A little less talking. A little more{" "}
          <span className="relative inline-block">
            building.
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#F4C84A" />
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-hand text-xl text-ink/60 md:text-2xl">
          four projects, four different moods — click “view project” for the story, or jump straight to the
          code.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
        {PROJECTS.map((p, i) => (
          <div key={p.num}>
            <ProjectPanel p={p} index={i} onOpen={setActive} />
            {i < PROJECTS.length - 1 && (
              <div aria-hidden className="mt-14 flex items-center justify-center gap-3 text-ink/30 md:mt-20">
                <span className="h-px w-16 bg-ink/20" />
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="font-hand text-2xl"
                >
                  ↓
                </motion.span>
                <span className="h-px w-16 bg-ink/20" />
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
