import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BrainCircuit,
  Braces,
  KeyRound,
  Megaphone,
  Mic,
  ScanText,
  Shield,
  Sparkles,
  TrendingUp,
  Wand2,
} from "lucide-react";

import pythonIcon from "devicon/icons/python/python-original.svg";
import cIcon from "devicon/icons/c/c-original.svg";
import cppIcon from "devicon/icons/cplusplus/cplusplus-original.svg";
import jsIcon from "devicon/icons/javascript/javascript-original.svg";
import htmlIcon from "devicon/icons/html5/html5-original.svg";
import cssIcon from "devicon/icons/css3/css3-original.svg";
import reactIcon from "devicon/icons/react/react-original.svg";
import nextIcon from "devicon/icons/nextjs/nextjs-original.svg";
import tsIcon from "devicon/icons/typescript/typescript-original.svg";
import twIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import supabaseIcon from "devicon/icons/supabase/supabase-original.svg";
import pgIcon from "devicon/icons/postgresql/postgresql-original.svg";
import prismaIcon from "devicon/icons/prisma/prisma-original.svg";
import gitIcon from "devicon/icons/git/git-original.svg";
import ghIcon from "devicon/icons/github/github-original.svg";
import vscodeIcon from "devicon/icons/vscode/vscode-original.svg";
import jupyterIcon from "devicon/icons/jupyter/jupyter-original.svg";
import vercelIcon from "devicon/icons/vercel/vercel-original.svg";
import gcloudIcon from "devicon/icons/googlecloud/googlecloud-original.svg";

export const PROFILE = {
  name: "Shruti Yadav",
  firstName: "SHRUTI",
  email: "shrutiyadav062106@gmail.com",
  github: "https://github.com/shrutiyadav-ai",
  linkedin: "https://linkedin.com/in/shruti-yadav-4666b5385",
  education: "B.Tech CSE (AI & ML)",
  university: "Sir Padampat Singhania University, Udaipur",
  universityShort: "SPSU, Udaipur",
  year: "Second Year",
  cgpa: "7.90",
  /** Optional: paste a direct image URL here and it is used as the portrait. */
  photoUrl: "" as string,
};

export type TechItem = { name: string; icon?: string; lucide?: LucideIcon };

export type ToolGroup = {
  label: string;
  note: string;
  color: "mustard" | "pink" | "mint" | "cobalt" | "cream";
  rotate: string;
  items: TechItem[];
};

export const TOOLBOX: ToolGroup[] = [
  {
    label: "programming",
    note: "where it all starts",
    color: "cobalt",
    rotate: "-3",
    items: [
      { name: "Python", icon: pythonIcon },
      { name: "C", icon: cIcon },
      { name: "C++", icon: cppIcon },
      { name: "JavaScript", icon: jsIcon },
    ],
  },
  {
    label: "frontend",
    note: "making it look & feel right",
    color: "pink",
    rotate: "2",
    items: [
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "Tailwind CSS", icon: twIcon },
    ],
  },
  {
    label: "ai / ml",
    note: "the fun experimental part",
    color: "mustard",
    rotate: "-2",
    items: [
      { name: "Generative AI", lucide: Sparkles },
      { name: "Prompt Engineering", lucide: Wand2 },
      { name: "Gemini API", lucide: BrainCircuit },
      { name: "ML Fundamentals", lucide: TrendingUp },
      { name: "RAG Concepts", lucide: BookOpen },
    ],
  },
  {
    label: "backend",
    note: "keeping the data honest",
    color: "mint",
    rotate: "3",
    items: [
      { name: "Supabase", icon: supabaseIcon },
      { name: "PostgreSQL", icon: pgIcon },
      { name: "Prisma", icon: prismaIcon },
      { name: "NextAuth", lucide: KeyRound },
      { name: "REST APIs", lucide: Braces },
    ],
  },
  {
    label: "tools",
    note: "daily drivers",
    color: "cream",
    rotate: "-2",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: ghIcon },
      { name: "VS Code", icon: vscodeIcon },
      { name: "Jupyter Notebook", icon: jupyterIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "Google Cloud", icon: gcloudIcon },
    ],
  },
];

export type MockupVariant = "skillbridge" | "resumeiq" | "translategpt" | "campuscare";

export type Project = {
  num: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  variant: MockupVariant;
  github: string;
  demo?: string;
  url: string;
  panelClass: string;
  chipClass: string;
  btnClass: string;
  ghostClass: string;
  note: string;
  noteClass: string;
  flip: boolean;
};

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "SkillBridge",
    category: "Full-Stack Development / AI Integration",
    description:
      "An academia-industry collaboration portal connecting students, industries, institutions, and academicians through skill assessments, skill-gap analysis, and internship matching.",
    features: [
      "Multi-role authentication",
      "Course-driven skill assessments",
      "Skill-gap analysis",
      "Weighted skill-matching engine",
      "Learning recommendations",
      "Career roadmaps",
      "Internship application tracking",
      "Gemini API integration",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma", "NextAuth", "Gemini API"],
    variant: "skillbridge",
    github: "https://github.com/shrutiyadav-ai/Skill_Bridge",
    demo: "https://skillbridgespsu.vercel.app/",
    url: "skillbridgespsu.vercel.app",
    panelClass: "bg-cobalt text-paper",
    chipClass: "border-paper/40 text-paper",
    btnClass: "bg-mustard text-ink shadow-[4px_4px_0_rgba(34,34,34,0.9)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_rgba(34,34,34,0.9)]",
    ghostClass: "text-paper/15",
    note: "the matching engine does the heavy lifting ↴",
    noteClass: "bg-mustard text-ink",
    flip: false,
  },
  {
    num: "02",
    title: "ResumeIQ",
    category: "AI-Powered Application",
    description:
      "An AI-powered resume analysis platform that helps candidates understand their resume quality and match their skills with job descriptions.",
    features: [
      "PDF/DOCX resume uploads",
      "ATS-oriented scoring",
      "Skills and keyword analysis",
      "Job description matching",
      "Skill-gap identification",
      "Personalized improvement suggestions",
      "Learning roadmaps",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "NextAuth", "Recharts"],
    variant: "resumeiq",
    github: "https://github.com/shrutiyadav-ai/ResumeIQ",
    url: "resumeiq · interface preview",
    panelClass: "bg-mustard text-ink",
    chipClass: "border-ink/40 text-ink",
    btnClass: "bg-ink text-paper shadow-[4px_4px_0_#315dc7] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#315dc7]",
    ghostClass: "text-ink/10",
    note: "ATS score: 87 — not bad for a robot 🎯",
    noteClass: "bg-pink text-ink",
    flip: true,
  },
  {
    num: "03",
    title: "TranslateGPT",
    category: "Multimodal AI Application",
    description:
      "A translation platform that combines text, voice, image OCR, and conversation-based translation.",
    features: [
      "Text translation",
      "Voice translation",
      "Image OCR",
      "Conversation mode",
      "Saved translations",
      "Flashcards and quizzes",
      "Learning progress tracking",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Web Speech API", "Tesseract.js"],
    variant: "translategpt",
    github: "https://github.com/shrutiyadav-ai/TranslateGPT",
    url: "translategpt · interface preview",
    panelClass: "bg-pink text-ink",
    chipClass: "border-ink/40 text-ink",
    btnClass: "bg-ink text-paper shadow-[4px_4px_0_rgba(250,250,246,0.85)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_rgba(250,250,246,0.85)]",
    ghostClass: "text-paper/30",
    note: "text, voice, image — all of it 🌐",
    noteClass: "bg-paper text-ink",
    flip: false,
  },
  {
    num: "04",
    title: "CampusCare",
    category: "Web Development",
    description:
      "A university complaint management platform where students can submit and track complaints while administrators manage assignments and resolutions.",
    features: [
      "Complaint submission",
      "Complaint tracking",
      "Priority management",
      "Department assignments",
      "Status timelines",
      "Search and filtering",
      "Admin analytics",
    ],
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "localStorage"],
    variant: "campuscare",
    github: "https://github.com/shrutiyadav-ai/Campus_Care",
    demo: "https://campuscare-spsu.vercel.app/",
    url: "campuscare-spsu.vercel.app",
    panelClass: "bg-mint text-ink",
    chipClass: "border-ink/40 text-ink",
    btnClass: "bg-ink text-paper shadow-[4px_4px_0_#315dc7] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#315dc7]",
    ghostClass: "text-ink/10",
    note: "complaint resolved in 2 days ✓",
    noteClass: "bg-cobalt text-paper",
    flip: true,
  },
];

export type ExperienceItem = {
  num: string;
  role: string;
  org: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    num: "01",
    role: "Social Media & PR Coordinator",
    org: "University Student Council — SPSU",
    description:
      "Selected to coordinate social media and public relations for the university student council, communicating university events to students and collaborating with council members.",
    tags: ["Communication", "Event Coverage", "Teamwork"],
    icon: Megaphone,
    color: "bg-mustard",
  },
  {
    num: "02",
    role: "NCC Cadet",
    org: "10 Raj Battalion NCC — SPSU",
    description:
      "Participating in NCC activities that develop discipline, teamwork, leadership, responsibility, and coordination.",
    tags: ["Discipline", "Leadership", "Coordination"],
    icon: Shield,
    color: "bg-mint",
  },
];

export type Cert = { name: string; issuer: string; stamp: string; stampClass: string };

export const CERTS: Cert[] = [
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", stamp: "MSFT", stampClass: "border-cobalt text-cobalt" },
  { name: "Prompt Design in Vertex AI", issuer: "Google Cloud Skills Boost", stamp: "GCP", stampClass: "border-pink text-pink" },
  { name: "AI for Beginners", issuer: "HP LIFE", stamp: "HP", stampClass: "border-ink text-ink" },
  { name: "Python", issuer: "freeCodeCamp", stamp: "FCC", stampClass: "border-ink text-ink bg-mustard/60" },
  { name: "C#", issuer: "freeCodeCamp", stamp: "FCC", stampClass: "border-ink text-ink bg-mint/70" },
  { name: "Critical Thinking, Design Thinking, Leadership & Teamwork", issuer: "L&T EduTech", stamp: "L&T", stampClass: "border-cobalt text-cobalt" },
];

export const PLAYGROUND_COMMANDS: Record<string, string[]> = {
  whoami: ["shruti — cs student, full-stack dev, ai enthusiast", "currently: second year @ SPSU, Udaipur"],
  skills: ["react • next.js • typescript • tailwind • supabase", "plus python, c/c++ and a growing list of ai tools"],
  chai: ["status: turning chai into commits ☕", "adrak + cardamom + code — the ideal stack"],
  stack: ["this very site: react + vite + tailwind, hand-taped together"],
  clear: ["__CLEAR__"],
};

export const PLAYGROUND_ICONS = { Mic, ScanText };
