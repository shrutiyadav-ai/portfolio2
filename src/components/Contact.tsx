import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import githubIcon from "devicon/icons/github/github-original.svg";
import linkedinIcon from "devicon/icons/linkedin/linkedin-original.svg";
import { PROFILE } from "@/data";
import { cn } from "@/utils/cn";
import { ArrowCurvy, Reveal, SectionLabel, Squiggle, Tape } from "@/components/decor";

const LINKS = [
  { label: "email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail, img: null },
  { label: "github", value: "github.com/shrutiyadav-ai", href: PROFILE.github, icon: null, img: githubIcon },
  { label: "linkedin", value: "linkedin.com/in/shruti-yadav-4666b5385", href: PROFILE.linkedin, icon: null, img: linkedinIcon },
] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name.trim() || !validEmail || !message.trim()) {
      setStatus("hmm — please fill every field (with a real email!) ✎");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
    // genuinely opens the visitor's mail client with a pre-filled message
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus("opening your email app — talk soon! ✉️");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="section-pad border-t-2 border-dashed border-ink/10">
      <Reveal className="text-center">
        <SectionLabel>say hello</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl uppercase leading-[1.02] md:text-6xl">
          Got something{" "}
          <span className="relative inline-block">
            interesting
            <Squiggle className="absolute -bottom-3 left-0 h-3.5 w-full" color="#F4C84A" />
          </span>{" "}
          in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink/65 md:text-lg">
          Let's connect, exchange ideas, or build something useful together.
        </p>
      </Reveal>

      <div className="mt-12 grid items-start justify-items-center gap-12 text-center lg:grid-cols-2">
        {/* left: big CTA + link cards */}
        <Reveal className="w-full max-w-md">
          <div className="relative flex flex-col items-center">
            <a
              href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Hello Shruti!")}`}
              className="shine-host inline-flex items-center gap-3 border-2 border-ink bg-mustard px-8 py-4 font-display text-sm uppercase tracking-[0.14em] shadow-[6px_6px_0_#222] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#222] md:text-base"
            >
              Say hello <ArrowUpRight size={18} />
            </a>
            <div className="mt-3 flex flex-col items-center text-cobalt">
              <ArrowCurvy className="w-16 rotate-90 -scale-y-100" />
              <p className="-rotate-2 font-hand text-xl leading-tight">replies fast, promise!</p>
            </div>
          </div>

          <ul className="mt-8 space-y-3.5">
            {LINKS.map((l, i) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={cn(
                    "group flex flex-col items-center gap-1.5 border border-ink/20 bg-white px-4 py-3.5 text-center shadow-[3px_4px_0_rgba(34,34,34,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:shadow-[4px_6px_0_rgba(34,34,34,0.18)]",
                    i % 2 === 0 ? "-rotate-[0.5deg]" : "rotate-[0.5deg]"
                  )}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-sm border border-ink bg-cream transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                    {l.img ? <img src={l.img} alt="" className="h-4 w-4" /> : l.icon && <l.icon size={17} />}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/45">{l.label}</span>
                  <span className="max-w-full break-all text-sm font-semibold underline-offset-4 group-hover:underline">
                    {l.value}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-cobalt opacity-0 transition-opacity group-hover:opacity-100">
                    open <ArrowUpRight size={10} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* right: working form (opens mail client) */}
        <Reveal delay={0.12} className="w-full max-w-xl">
          <form
            onSubmit={onSubmit}
            className="relative border-2 border-ink bg-white p-6 text-center shadow-[8px_9px_0_rgba(34,34,34,0.15)] md:p-8"
          >
            <Tape className="-top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-3" />
            <p className="font-hand text-2xl text-cobalt">leave a note —</p>

            <label className="mt-5 block">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ada lovelace"
                className="mt-1 w-full border-b-2 border-ink/20 bg-transparent pb-1 text-center font-hand text-2xl outline-none transition-colors placeholder:text-ink/25 focus:border-cobalt"
              />
            </label>
            <label className="mt-5 block">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">your email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full border-b-2 border-ink/20 bg-transparent pb-1 text-center font-hand text-2xl outline-none transition-colors placeholder:text-ink/25 focus:border-cobalt"
              />
            </label>
            <label className="mt-5 block">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="let's build something…"
                className="mt-1 w-full resize-none border-b-2 border-ink/20 bg-transparent pb-1 text-center font-hand text-2xl outline-none transition-colors placeholder:text-ink/25 focus:border-cobalt"
              />
            </label>

            <div className="mt-7 flex justify-center">
              <button type="submit" className="btn-primary bg-cobalt">
                <Send size={14} /> Send message
              </button>
            </div>
            <p className="mx-auto mt-3 max-w-xs font-mono text-[10px] text-ink/45">
              this opens your mail app with a pre-filled message — it really sends ✉️
            </p>
            {status && (
              <motion.p
                aria-live="polite"
                initial={{ opacity: 0, y: 6, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                className="mt-2 font-hand text-xl text-cobalt"
              >
                {status}
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
