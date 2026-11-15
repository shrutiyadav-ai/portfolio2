import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Asterisk, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { PROFILE } from "@/data";
import githubIcon from "devicon/icons/github/github-original.svg";
import linkedinIcon from "devicon/icons/linkedin/linkedin-original.svg";

const LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "playground", label: "PLAYGROUND" },
  { id: "contact", label: "CONTACT" },
] as const;

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const link of LINKS) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-5 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:px-10">
        <a href="#home" className="group flex items-center justify-self-start gap-2" aria-label="Back to home">
          <span className="grid h-6 w-6 place-items-center rounded-full border border-ink/25 bg-mustard transition-transform duration-500 group-hover:rotate-[180deg]">
            <Asterisk size={14} strokeWidth={2.6} />
          </span>
          <span className="font-display text-sm tracking-wide">SHRUTI</span>
        </a>

        <ul className="hidden items-center justify-center text-[11px] font-bold tracking-[0.18em] md:flex">
          {LINKS.map((link, i) => (
            <li key={link.id} className="flex items-center">
              {i > 0 && <span className="mx-2 select-none text-ink/25">/</span>}
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "nav-link px-2 py-1 transition-all duration-200",
                  active === link.id
                    ? "-rotate-2 bg-mustard shadow-[2px_2px_0_rgba(34,34,34,0.3)]"
                    : "text-ink/70 hover:text-cobalt"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3.5 justify-self-end">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Shruti on GitHub"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-6"
          >
            <img src={githubIcon} alt="" className="h-[18px] w-[18px]" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Shruti on LinkedIn"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-6"
          >
            <img src={linkedinIcon} alt="" className="h-[18px] w-[18px]" />
          </a>
          <button
            className="grid h-8 w-8 place-items-center border border-ink/20 bg-paper md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* scroll progress — looks like a pencil line filling in */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-[-1px] h-[3px] origin-left bg-gradient-to-r from-mustard via-pink to-cobalt"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-ink/10 bg-paper px-6 py-4 text-center text-[11px] font-bold tracking-[0.18em] md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-2 py-2 text-center transition-transform",
                    active === link.id ? "bg-mustard -rotate-1" : "text-ink/70 hover:text-cobalt"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
