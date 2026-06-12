import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeftIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Card, Badge, cn } from "@/components/ui";
import { HelpForm } from "@/components/help-form";
import {
  projects, findProject, findMember, projectsByFounder, STATUS_TONE, initials,
} from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = findProject(slug);
  return { title: p ? p.name : "Project" };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) notFound();
  const founder = findMember(p.founderId);
  const more = founder ? projectsByFounder(founder.id).filter((x) => x.slug !== p.slug) : [];

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-text-muted transition hover:text-brand">
        <ArrowLeftIcon className="h-4 w-4" /> All projects
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-text-muted">{p.kind}</span>
            <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", STATUS_TONE[p.status])}>{p.status}</span>
            <span className="text-xs text-text-muted">{p.contributors} helping</span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">{p.name}</h1>
          <p className="mt-3 text-lg text-text-muted">{p.desc}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span key={t} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted">{t}</span>
            ))}
          </div>

          {/* Looking for */}
          <div className="mt-8">
            <h2 className="font-display text-xl font-bold">Roles we&apos;re looking for</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {p.lookingFor.map((r) => (
                <div key={r} className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium">
                  <UserGroupIcon className="h-5 w-5 text-brand" /> {r}
                </div>
              ))}
            </div>
          </div>

          {/* Help form */}
          <div id="help" className="mt-10 scroll-mt-24">
            <HelpForm project={p.name} roles={p.lookingFor} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          {founder && (
            <Card className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Founder</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white">
                  {initials(founder.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold">{founder.name}</p>
                  <p className="truncate text-xs text-text-muted">{founder.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-text-muted">{founder.bio}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {founder.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          )}

          {more.length > 0 && founder && (
            <Card className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                More from {founder.name.split(" ")[0]}
              </p>
              <ul className="mt-3 space-y-2">
                {more.map((m) => (
                  <li key={m.slug}>
                    <Link href={`/projects/${m.slug}`} className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm transition hover:border-brand/40">
                      <span className="truncate font-medium">{m.name}</span>
                      <span className="text-xs text-text-muted">{m.status}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <Card className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-5 text-white">
            <p className="text-sm font-semibold">Every contribution counts</p>
            <p className="mt-1 text-xs text-emerald-100">
              Helping a beneficial project is sadaqah jariyah — reward that continues even after the work is done.
            </p>
          </Card>
        </aside>
      </div>
    </div>
  );
}
