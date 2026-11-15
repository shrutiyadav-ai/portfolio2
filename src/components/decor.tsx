import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { PROFILE } from "@/data";
import { usePinnedPhoto } from "@/lib/photo";

/* ---------- scroll reveal wrapper ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- washi tape strip ---------- */
export function Tape({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-20 h-6 w-24 bg-mustard/75 shadow-sm",
        className
      )}
      style={{ clipPath: "polygon(2% 8%, 97% 0%, 100% 88%, 4% 100%)" }}
    />
  );
}

/* ---------- colorful sticky note ---------- */
const NOTE_COLORS = {
  mustard: "bg-mustard text-ink",
  pink: "bg-pink text-ink",
  mint: "bg-mint text-ink",
  cobalt: "bg-cobalt text-paper",
  cream: "bg-cream text-ink",
} as const;

export type NoteColor = keyof typeof NOTE_COLORS;

export function StickyNote({
  children,
  color = "mustard",
  className,
  rotate = "-3",
}: {
  children: ReactNode;
  color?: NoteColor;
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      className={cn(
        "inline-block cursor-default px-4 py-2.5 font-hand text-xl leading-tight shadow-[3px_4px_0_rgba(34,34,34,0.18)] transition-all duration-300 rotate-[var(--r)] hover:rotate-0 hover:scale-105 md:text-2xl",
        NOTE_COLORS[color],
        className
      )}
      style={{ "--r": `${rotate}deg` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- handwritten section label ---------- */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block -rotate-2 font-hand text-2xl text-cobalt md:text-3xl", className)}>
      ( {children} )
    </span>
  );
}

/* ---------- animated squiggle underline ---------- */
export function Squiggle({ className, color = "#315DC7" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 220 14" fill="none" preserveAspectRatio="none" aria-hidden className={className}>
      <motion.path
        d="M3 10 C 30 3, 55 12, 82 7 S 140 3, 165 9 S 205 5, 217 8"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
      />
    </svg>
  );
}

/* ---------- hand-drawn arrows ---------- */
export function ArrowCurvy({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 64"
      fill="none"
      aria-hidden
      className={cn(className, flip && "-scale-x-100")}
    >
      <path
        d="M6 8 C 38 46, 76 52, 106 36"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M94 28 L 108 35 L 97 46"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLoop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 70" fill="none" aria-hidden className={className}>
      <path
        d="M100 10 C 60 2, 18 18, 16 44 C 15 60, 34 66, 44 56"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M34 52 L 45 55 L 42 44"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- doodles ---------- */
export function DoodleSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 2 C 12.8 7.5, 14.5 9.2, 22 12 C 14.5 14.8, 12.8 16.5, 12 22 C 11.2 16.5, 9.5 14.8, 2 12 C 9.5 9.2, 11.2 7.5, 12 2 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleFlower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="20"
          cy="11"
          rx="4.6"
          ry="7"
          stroke="currentColor"
          strokeWidth="1.8"
          transform={`rotate(${a} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3.4" fill="currentColor" />
    </svg>
  );
}

export function DoodleStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <path
        d="M16 3 L19.4 12.2 L29 12.6 L21.4 18.8 L24.2 28 L16 22.8 L7.8 28 L10.6 18.8 L3 12.6 L12.6 12.2 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- slightly imperfect hand-drawn frame ---------- */
export function WobblyFrame({ className, stroke = "#EFA23C" }: { className?: string; stroke?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 130"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 10 C 80 4, 200 13, 314 7 C 318 45, 315 88, 312 121 C 210 127, 110 119, 8 123 C 4 82, 7 44, 6 10 Z"
        stroke={stroke}
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- taped paper photo frame ---------- */
export function PaperFrame({
  children,
  caption,
  className,
  rotate = "-2",
  tapeClass = "-top-3 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-3",
}: {
  children: ReactNode;
  caption?: string;
  className?: string;
  rotate?: string;
  tapeClass?: string;
}) {
  return (
    <figure
      className={cn(
        "relative bg-white p-2.5 pb-2 shadow-[7px_9px_0_rgba(34,34,34,0.13)] transition-all duration-300 rotate-[var(--r)] hover:rotate-0",
        className
      )}
      style={{ "--r": `${rotate}deg` } as React.CSSProperties}
    >
      <Tape className={tapeClass} />
      {children}
      {caption && (
        <figcaption className="px-1 pb-1 pt-2 text-center font-hand text-lg leading-none text-ink/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------- hand-drawn portrait matching Shruti's look (fallback until photo is added) ---------- */
export function AvatarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 210" className={className} role="img" aria-label="Illustrated portrait of Shruti Yadav">
      <rect width="200" height="210" fill="#EFEFEA" />
      {/* soft light behind */}
      <circle cx="100" cy="78" r="62" fill="#F7F5EE" />
      {/* sparkles */}
      <path d="M30 46 l2 5.5 5.5 2 -5.5 2 -2 5.5 -2 -5.5 -5.5 -2 5.5 -2 Z" fill="#F4C84A" />
      <path d="M172 38 l1.7 4.6 4.6 1.7 -4.6 1.7 -1.7 4.6 -1.7 -4.6 -4.6 -1.7 4.6 -1.7 Z" fill="#E96A9A" />
      <circle cx="174" cy="150" r="3.5" fill="#9BD8BD" />
      <circle cx="26" cy="158" r="2.8" fill="#315DC7" />
      {/* black collared shirt */}
      <path d="M40 210 C 46 166, 70 150, 100 150 C 130 150, 154 166, 160 210 Z" fill="#2B2B2B" />
      {/* open collar */}
      <path d="M84 152 L100 172 L116 152" fill="#F3D6BC" />
      <path d="M84 152 L74 162 L88 178 Z" fill="#1F1F1F" />
      <path d="M116 152 L126 162 L112 178 Z" fill="#1F1F1F" />
      <path d="M96 176 L104 176 L106 210 L94 210 Z" fill="#3A3A3A" />
      {[188, 198].map((y) => <circle key={y} cx="100" cy={y} r="1.7" fill="#111111" />)}
      {/* thin chain */}
      <path d="M88 150 C 94 166, 106 166, 112 150" fill="none" stroke="#C9A227" strokeWidth="1.3" />
      {/* neck */}
      <path d="M88 126 h24 v20 c0 8 -24 8 -24 0 Z" fill="#E8BC96" stroke="#2B2B2B" strokeWidth="2" />
      {/* ears + hoops */}
      <ellipse cx="60" cy="94" rx="7" ry="10" fill="#E8BC96" stroke="#2B2B2B" strokeWidth="2" />
      <ellipse cx="140" cy="94" rx="7" ry="10" fill="#E8BC96" stroke="#2B2B2B" strokeWidth="2" />
      <circle cx="60" cy="108" r="4.6" fill="none" stroke="#E1B33C" strokeWidth="2" />
      <circle cx="140" cy="108" r="4.6" fill="none" stroke="#E1B33C" strokeWidth="2" />
      {/* face */}
      <path d="M62 78 C 62 116, 80 138, 100 138 C 120 138, 138 116, 138 78 C 138 50, 120 40, 100 40 C 80 40, 62 50, 62 78 Z" fill="#F0C9A4" stroke="#2B2B2B" strokeWidth="2.2" />
      {/* short swept hair */}
      <path d="M61 82 C 54 48, 76 26, 104 28 C 133 30, 146 50, 139 84 C 138 70, 132 60, 124 56 C 112 48, 92 50, 82 60 C 75 67, 70 74, 68 86 Z" fill="#252321" stroke="#1B1A19" strokeWidth="1.5" />
      <path d="M96 30 C 112 26, 132 34, 139 54 C 141 62, 141 72, 139 84 C 135 68, 128 60, 118 55 C 112 44, 104 37, 96 30 Z" fill="#302D2A" />
      <path d="M70 62 C 80 48, 98 44, 112 50" fill="none" stroke="#3B3835" strokeWidth="3" strokeLinecap="round" />
      <path d="M63 88 C 62 98, 64 106, 68 110" fill="none" stroke="#252321" strokeWidth="5" strokeLinecap="round" />
      <path d="M137 88 C 138 98, 136 106, 132 110" fill="none" stroke="#252321" strokeWidth="5" strokeLinecap="round" />
      {/* brows + eyes */}
      <path d="M75 82 q 10 -5 20 0" fill="none" stroke="#2B2B2B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M105 82 q 10 -5 20 0" fill="none" stroke="#2B2B2B" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="85" cy="93" rx="3.4" ry="3.8" fill="#2B2B2B" />
      <ellipse cx="115" cy="93" rx="3.4" ry="3.8" fill="#2B2B2B" />
      <path d="M80 88 q 5 -3 10 0" fill="none" stroke="#2B2B2B" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M110 88 q 5 -3 10 0" fill="none" stroke="#2B2B2B" strokeWidth="1.6" strokeLinecap="round" />
      {/* nose */}
      <path d="M100 96 q -4 10 2 12" fill="none" stroke="#C08A62" strokeWidth="2" strokeLinecap="round" />
      {/* gentle smile + dimples */}
      <path d="M88 118 q 12 9 24 0" fill="none" stroke="#8E4B45" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M84 116 q -3 3 -1 6" fill="none" stroke="#C08A62" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M116 116 q 3 3 1 6" fill="none" stroke="#C08A62" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="76" cy="108" r="4" fill="#E96A9A" opacity="0.3" />
      <circle cx="124" cy="108" r="4" fill="#E96A9A" opacity="0.3" />
      {/* tiny beauty marks, as in the photo */}
      <circle cx="92" cy="104" r="1" fill="#8E4B45" opacity="0.7" />
      <circle cx="120" cy="112" r="1.1" fill="#8E4B45" opacity="0.6" />
    </svg>
  );
}

/* ---------- real photo with graceful illustrated fallback ----------
   Priority: 1) photo pinned in this browser via the "pin your photo" action
             2) /shruti.jpg (or PROFILE.photoUrl) when the file exists
             3) hand-drawn portrait so nothing ever looks broken */
export function ProfilePhoto({ className }: { className?: string }) {
  const pinned = usePinnedPhoto();
  const [detected, setDetected] = useState<string | null>(null);

  useEffect(() => {
    if (pinned) return;
    let cancelled = false;
    const candidates = [
      PROFILE.photoUrl,
      "/shruti.jpg",
      "/shruti.jpeg",
      "/shruti.png",
      "/profile.jpg",
      "/profile.png",
      "/images/shruti.jpg",
    ].filter((src): src is string => Boolean(src));

    const tryNext = (i: number) => {
      if (i >= candidates.length || cancelled) return;
      const img = new Image();
      img.onload = () => {
        if (!cancelled) setDetected(candidates[i]);
      };
      img.onerror = () => tryNext(i + 1);
      img.src = candidates[i];
    };
    tryNext(0);

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned]);

  const src = pinned ?? detected;

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-cream", className)}>
      <AvatarDoodle className="absolute inset-0 h-full w-full object-cover" />
      {src && (
        <img
          src={src}
          alt="Shruti Yadav"
          className="relative h-full w-full object-cover object-top"
          draggable={false}
        />
      )}
    </div>
  );
}

/* ---------- chai cup doodle with animated steam ---------- */
export function ChaiCup({ className, small = false }: { className?: string; small?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      {/* saucer */}
      <ellipse cx="32" cy="55" rx="22" ry="4.5" fill="#F4C84A" stroke="#222222" strokeWidth="2" />
      {/* steam */}
      <g stroke="#8A6A4A" strokeWidth="2" strokeLinecap="round" className="animate-steam">
        <path d="M25 24 c -4 -4 4 -6 0 -10" />
        <path d="M33 22 c -4 -4 4 -7 0 -11" style={{ animationDelay: "0.5s" }} />
        <path d="M40 25 c -3 -3 3 -5 0 -9" style={{ animationDelay: "1s" }} />
      </g>
      {/* glass */}
      <path d="M16 26 h32 l-3 24 c -0.4 3 -3.5 5 -13 5 c -9.5 0 -12.6 -2 -13 -5 Z" fill="#FAFAF6" stroke="#222222" strokeWidth="2.2" strokeLinejoin="round" />
      {/* tea */}
      <path d="M18.4 37 h27.2 l-1.9 13.2 c -0.4 2.5 -3.3 4.3 -11.7 4.3 c -8.4 0 -11.3 -1.8 -11.7 -4.3 Z" fill="#C98A4B" />
      <path d="M18.8 32.5 h26.4" stroke="#222222" strokeWidth="1.6" opacity="0.35" />
      {/* ginger + cardamom speckles */}
      <circle cx="27" cy="45" r="1.2" fill="#8E5A2B" opacity="0.8" />
      <circle cx="38" cy="42" r="1" fill="#8E5A2B" opacity="0.7" />
      <circle cx="33" cy="49" r="1.1" fill="#8E5A2B" opacity="0.6" />
      {/* handle */}
      <path d="M48 30 c 7 0 8 9 1 11" stroke="#222222" strokeWidth="2.2" strokeLinecap="round" />
      {!small && <path d="M22 28 h20" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.5" strokeLinecap="round" />}
    </svg>
  );
}

/* ---------- scrolling handwritten ribbon ---------- */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [
    ...items,
    ...items,
  ];
  return (
    <div
      className={cn("marquee-wrap relative overflow-hidden border-y-2 border-ink/15 bg-mustard py-2.5", className)}
      aria-hidden
    >
      <div className="animate-marquee flex w-max items-center gap-5 whitespace-nowrap px-4 font-hand text-xl md:text-2xl">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-5">
            {row.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-5">
                {item}
                <DoodleStar className="h-4 w-4 shrink-0 text-ink/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- little tape/washi strip that flutters ---------- */
export function WashiTape({ className }: { className?: string }) {
  return <Tape className={cn("animate-tape", className)} />;
}

/* ---------- hand-drawn pencil sketch of braces / code marks ---------- */
export function CodeDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 46" fill="none" aria-hidden className={className}>
      <path d="M22 6 C 10 14, 8 32, 20 40" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M68 6 C 80 14, 82 32, 70 40" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M52 4 L 38 42" stroke="#E96A9A" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="45" cy="23" r="2" fill="currentColor" />
    </svg>
  );
}
