import { ArrowUp, Mail } from "lucide-react";
import githubIcon from "devicon/icons/github/github-original.svg";
import linkedinIcon from "devicon/icons/linkedin/linkedin-original.svg";
import { PROFILE } from "@/data";
import { DoodleFlower } from "@/components/decor";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t-2 border-dashed border-ink/20 px-5 py-10 text-center md:px-14">
      <div className="flex flex-col items-center justify-center gap-6">
        <div>
          <p className="-rotate-1 font-hand text-2xl text-ink/80">
            made with curiosity &amp; a little too much debugging.
          </p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
            designed &amp; built by {PROFILE.name} © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center border border-ink/20 bg-white shadow-[2px_3px_0_rgba(34,34,34,0.15)] transition-all hover:-translate-y-0.5 hover:border-ink"
          >
            <img src={githubIcon} alt="" className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center border border-ink/20 bg-white shadow-[2px_3px_0_rgba(34,34,34,0.15)] transition-all hover:-translate-y-0.5 hover:border-ink"
          >
            <img src={linkedinIcon} alt="" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center border border-ink/20 bg-white shadow-[2px_3px_0_rgba(34,34,34,0.15)] transition-all hover:-translate-y-0.5 hover:border-ink"
          >
            <Mail size={16} />
          </a>
          <DoodleFlower className="doodle-spin ml-1 h-6 w-6 text-pink" />
        </div>

        <button
          onClick={toTop}
          className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-mustard px-4 py-2 font-display text-[10px] uppercase tracking-[0.16em] shadow-[3px_3px_0_#222] transition-all duration-200 hover:-translate-y-1 hover:rotate-2 hover:shadow-[4px_6px_0_#222]"
        >
          back to top
          <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
