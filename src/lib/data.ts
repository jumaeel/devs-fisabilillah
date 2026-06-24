export type MemberType = "Developer" | "Content";

export interface Member {
  id: string;
  name: string;
  type: MemberType;
  role: string; // e.g. "Full-stack Developer", "Content Writer"
  bio: string;
  skills: string[];
}

export interface Project {
  slug: string;
  name: string;
  desc: string;
  kind: "Software" | "Content";
  stack: string[];
  status: "Active" | "Maintained" | "Seeking devs";
  founderId: string;
  contributors: number;
  lookingFor: string[]; // roles the project needs help with
  repo?: string;
}

export interface Pillar {
  title: string;
  desc: string;
  icon: string;
}

export const stats = [
  { value: "120+", label: "Volunteers" },
  { value: "8", label: "Projects" },
  { value: "All", label: "Open source" },
  { value: "Free", label: "To join" },
];

export const pillars: Pillar[] = [
  { title: "Found your project", icon: "Rocket", desc: "List the project you're building — you stay its founder and lead." },
  { title: "Get help", icon: "Users", desc: "Other developers and content volunteers can join and contribute to your project." },
  { title: "Knowledge circles", icon: "BookOpen", desc: "Weekly halaqah and tech study sessions — growing in deen and dunya." },
  { title: "Opportunities", icon: "Briefcase", desc: "An honest job board, mentorship and referrals among the brothers." },
];

export const values = [
  { title: "Ikhlas (Sincerity)", desc: "We build for the sake of Allah, not for fame or applause." },
  { title: "Ihsan (Excellence)", desc: "If we do a thing, we do it beautifully and well." },
  { title: "Ukhuwwah (Brotherhood)", desc: "We lift one another — no one is left behind." },
  { title: "Naf' (Benefit)", desc: "Beneficial software can be sadaqah jariyah — ongoing charity." },
];

export const members: Member[] = [
  { id: "m1", name: "Ahmed Saleem", type: "Developer", role: "Full-stack Developer", bio: "Builds platforms that connect people to beneficial services.", skills: ["Next.js", "TypeScript", "Supabase"] },
  { id: "m2", name: "Ibrahim Nashid", type: "Developer", role: "Backend Engineer", bio: "Loves clean APIs and reliable infrastructure for the ummah.", skills: ["Node", "PostgreSQL", "Go"] },
  { id: "m3", name: "Mariyam Sara", type: "Content", role: "Content & Translation Lead", bio: "Makes Islamic knowledge accessible in Dhivehi and English.", skills: ["Dhivehi", "Translation", "Editing"] },
  { id: "m4", name: "Hassan Ali", type: "Developer", role: "Mobile Developer", bio: "Ships delightful, location-aware apps.", skills: ["Flutter", "Maps", "Kotlin"] },
  { id: "m5", name: "Aiman Yoosuf", type: "Developer", role: "Frontend Developer", bio: "Cares about accessible, beautiful interfaces.", skills: ["React", "Tailwind", "UX"] },
  { id: "m6", name: "Layla Ahmed", type: "Content", role: "Researcher & Writer", bio: "Compiles and organises authentic knowledge for study circles.", skills: ["Research", "Writing", "Notes"] },
  { id: "m7", name: "Yoonus Faiz", type: "Developer", role: "Full-stack Developer", bio: "Builds finance and charity tools with amanah.", skills: ["Next.js", "Stripe", "Payments"] },
  { id: "m8", name: "Sumayya Idrees", type: "Content", role: "Audio & Tajweed Content", bio: "Designs recitation drills and audio lessons.", skills: ["Tajweed", "Audio", "Curriculum"] },
];

export const findMember = (id: string) => members.find((m) => m.id === id);

export const projects: Project[] = [
  { slug: "salah-times-api", name: "Salah Times API", kind: "Software", desc: "A free, accurate prayer-times API for every island and city.", stack: ["Node", "PostgreSQL"], status: "Maintained", founderId: "m2", contributors: 4, lookingFor: ["Backend Developer", "Technical Writer"] },
  { slug: "dhivehi-quran-reader", name: "Dhivehi Quran Reader", kind: "Software", desc: "An open Quran reader with Dhivehi translation and tafsir.", stack: ["React Native"], status: "Seeking devs", founderId: "m3", contributors: 5, lookingFor: ["Mobile Developer", "Translator", "Proofreader"] },
  { slug: "masjid-finder", name: "Masjid Finder", kind: "Software", desc: "Find the nearest mosque and jamaa'ah times wherever you are.", stack: ["Flutter", "Maps"], status: "Active", founderId: "m4", contributors: 6, lookingFor: ["Mobile Developer", "Data Collector"] },
  { slug: "zakat-calculator", name: "Zakat Calculator", kind: "Software", desc: "A scholar-reviewed zakat calculator with local nisab tracking.", stack: ["Next.js"], status: "Maintained", founderId: "m7", contributors: 3, lookingFor: ["Frontend Developer"] },
  { slug: "halaqah-notes", name: "Halaqah Notes", kind: "Content", desc: "Shared, searchable notes from study circles and lectures.", stack: ["SvelteKit"], status: "Seeking devs", founderId: "m6", contributors: 4, lookingFor: ["Note-taker", "Editor", "Frontend Developer"] },
  { slug: "sadaqah-tracker", name: "Sadaqah Tracker", kind: "Software", desc: "Track and automate recurring charity with transparent receipts.", stack: ["Next.js", "Stripe"], status: "Active", founderId: "m7", contributors: 5, lookingFor: ["Full-stack Developer"] },
  { slug: "tajweed-trainer", name: "Tajweed Trainer", kind: "Content", desc: "Interactive drills to learn the rules of beautiful recitation.", stack: ["SvelteKit", "WebAudio"], status: "Seeking devs", founderId: "m8", contributors: 3, lookingFor: ["Audio Editor", "Frontend Developer", "Reciter"] },
  { slug: "athan-widget", name: "Athan Widget", kind: "Software", desc: "A lightweight prayer-time widget for websites and dashboards.", stack: ["Web Components"], status: "Maintained", founderId: "m5", contributors: 2, lookingFor: ["Frontend Developer"] },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsByFounder = (id: string) => projects.filter((p) => p.founderId === id);

export const STATUS_TONE: Record<Project["status"], string> = {
  Active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  Maintained: "bg-surface-2 text-text-muted",
  "Seeking devs": "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
};

export const faqs = [
  { q: "Can I list my own project?", a: "Yes — that's the heart of it. You stay the founder and lead of your project, and others in the brotherhood can offer to help." },
  { q: "Do I need to be an expert?", a: "Not at all. We welcome complete beginners through to senior engineers, and content volunteers too. The point is to help each other grow." },
  { q: "Is it really free?", a: "Yes. There is no cost to join. We ask only for sincerity, good character, and a willingness to contribute and learn." },
  { q: "Do I have to be a developer?", a: "No. We need content volunteers too — writers, translators, researchers, reciters and editors all have a place." },
  { q: "How do I help an existing project?", a: "Open any project, see the roles it's looking for, and send an offer to help. The founder will reach out." },
];

export function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}
