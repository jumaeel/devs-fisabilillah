import Link from "next/link";
import type { Metadata } from "next";
import { Card, Badge, cn } from "@/components/ui";
import { members, projectsByFounder, initials } from "@/lib/data";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  const devs = members.filter((m) => m.type === "Developer");
  const content = members.filter((m) => m.type === "Content");

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">People</h1>
          <p className="mt-2 max-w-xl text-text-muted">
            Developers and content volunteers — each leading their own work, and helping one another.
          </p>
        </div>
        <Link href="/join" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white transition hover:bg-emerald-700">
          Join them
        </Link>
      </div>

      <Leaderboard />

      <Group title="Developers" people={devs} />
      <Group title="Content Volunteers" people={content} />
    </div>
  );
}

const RANK_TONE = [
  "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300",
  "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
];

function Leaderboard() {
  const ranked = members
    .map((m) => ({ member: m, count: projectsByFounder(m.id).length }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);

  if (ranked.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold">Leaderboard</h2>
      <p className="mt-1 text-sm text-text-muted">Brothers and sisters leading the most projects.</p>
      <Card className="mt-4 divide-y divide-border overflow-hidden">
        {ranked.map(({ member: m, count }, i) => (
          <Link
            key={m.id}
            href="/projects"
            className="flex items-center gap-4 px-4 py-3.5 transition hover:bg-surface-2"
          >
            <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold", RANK_TONE[i] ?? "bg-surface-2 text-text-muted")}>
              {i + 1}
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-bold text-white">
              {initials(m.name)}
            </span>
            <div className="min-w-0">
              <p className="truncate font-semibold">{m.name}</p>
              <p className="truncate text-xs text-text-muted">{m.role}</p>
            </div>
            <span className="ml-auto text-right">
              <span className="font-display text-xl font-extrabold text-brand">{count}</span>
              <span className="ml-1.5 text-xs text-text-muted">project{count > 1 ? "s" : ""}</span>
            </span>
          </Link>
        ))}
      </Card>
    </section>
  );
}

function Group({ title, people }: { title: string; people: typeof members }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((m) => {
          const owned = projectsByFounder(m.id);
          return (
            <Card key={m.id} className="flex h-full flex-col p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white">
                  {initials(m.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold">{m.name}</p>
                  <p className="truncate text-xs text-text-muted">{m.role}</p>
                </div>
                <span className={cn("ml-auto rounded-full px-2 py-0.5 text-[11px] font-medium", m.type === "Developer" ? "bg-brand-soft text-brand" : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300")}>
                  {m.type}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm text-text-muted">{m.bio}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {m.skills.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
              {owned.length > 0 && (
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
                    Founder of {owned.length} project{owned.length > 1 ? "s" : ""}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {owned.map((p) => (
                      <Link key={p.slug} href={`/projects/${p.slug}`} className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium transition hover:text-brand">
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
