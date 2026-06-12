import Link from "next/link";
import {
  ArrowRightIcon, HeartIcon, CodeBracketSquareIcon, SparklesIcon,
} from "@heroicons/react/24/outline";
import { Card, Badge, PillarIcon, cn, BrandMark } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { stats, pillars, values, projects, members, faqs, initials } from "@/lib/data";

export default function Home() {
  const featured = projects.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <div className="max-w-3xl animate-fade-up">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
              <SparklesIcon className="h-3.5 w-3.5" /> Code · Brotherhood · Da'wah
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Muslim developers building good,{" "}
              <span className="text-emerald-600 dark:text-emerald-400">for the sake of Allah</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-text-muted">
              A brotherhood where every developer and content volunteer lists their own project,
              stays its founder, and others step in to help. We grow in skill and deen together —
              building beneficial, open-source technology for the ummah.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
                List your project <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 font-semibold transition hover:border-brand/40">
                Help a project
              </Link>
            </div>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur">
                <p className="font-display text-3xl font-extrabold">{s.value}</p>
                <p className="text-xs text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intention */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Card className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 text-white">
            <HeartIcon className="h-8 w-8" />
            <p className="mt-4 font-display text-2xl font-bold leading-snug">
              “The most beloved of people to Allah are those most beneficial to people.”
            </p>
            <p className="mt-3 text-sm text-emerald-100">
              We write code as an act of worship — sincerely, excellently, and for the benefit of
              the ummah. Beneficial software can be sadaqah jariyah.
            </p>
          </Card>
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">Our intention</h2>
            <p className="mt-3 text-text-muted">
              Skill without sincerity is empty, and sincerity without excellence falls short. Devs
              Fisabilillah brings both together — a place to build, learn and serve, upon good
              character and the right intention.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border p-4">
                  <p className="font-semibold">{v.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works / pillars */}
      <section id="pillars" className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">How it works</h2>
            <p className="mt-3 text-text-muted">
              A centralized home for builders. Found a project, get help, and grow together.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Card key={p.title} className="p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <PillarIcon name={p.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-border">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">Projects</h2>
            <p className="mt-2 text-text-muted">Each one founded by a member — jump in and help.</p>
          </div>
          <Link href="/projects" className="hidden text-sm font-semibold text-brand hover:underline sm:block">View all →</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects" className="text-sm font-semibold text-brand hover:underline">View all projects →</Link>
        </div>
      </section>

      {/* People preview */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight">The people</h2>
              <p className="mt-2 text-text-muted">Developers and content volunteers, each leading their work.</p>
            </div>
            <Link href="/people" className="hidden text-sm font-semibold text-brand hover:underline sm:block">Meet everyone →</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {members.slice(0, 8).map((m) => (
              <Card key={m.id} className="p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white">
                    {initials(m.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{m.name}</p>
                    <p className="truncate text-xs text-text-muted">{m.role}</p>
                  </div>
                </div>
                <span className={cn("mt-3 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium", m.type === "Developer" ? "bg-brand-soft text-brand" : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300")}>
                  {m.type}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight">Questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-surface p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="text-text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Card className="hero-glow relative overflow-hidden p-10 text-center">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="relative">
            <BrandMark className="mx-auto h-14 w-14" />
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight">Build something that outlives you.</h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Whether you write code or content, beginner or senior — come build with sincerity and
              excellence, fi sabilillah.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/join" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                <CodeBracketSquareIcon className="h-5 w-5" /> Join the brotherhood
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 font-semibold transition hover:border-brand/40">
                Browse projects
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
