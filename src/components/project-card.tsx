import Link from "next/link";
import { ArrowRightIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { Card, cn } from "./ui";
import { findMember, STATUS_TONE, initials } from "@/lib/data";
import type { Project } from "@/lib/data";

export function ProjectCard({ p }: { p: Project }) {
  const founder = findMember(p.founderId);
  return (
    <Card className="flex h-full flex-col p-5 transition hover:border-brand/40">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-text-muted">{p.kind}</span>
          <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", STATUS_TONE[p.status])}>{p.status}</span>
        </div>
        <span className="text-xs text-text-muted">{p.contributors} helping</span>
      </div>

      <Link href={`/projects/${p.slug}`}>
        <h3 className="mt-3 font-display text-lg font-bold transition hover:text-brand">{p.name}</h3>
      </Link>
      <p className="mt-1 flex-1 text-sm text-text-muted">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.stack.map((t) => (
          <span key={t} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-text-muted">{t}</span>
        ))}
      </div>

      {/* Founder */}
      {founder && (
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-[11px] font-bold text-white">
            {initials(founder.name)}
          </span>
          <div className="min-w-0 text-xs">
            <p className="truncate font-medium">{founder.name}</p>
            <p className="truncate text-text-muted">Founder · {founder.role}</p>
          </div>
        </div>
      )}

      {/* Looking for */}
      {p.lookingFor.length > 0 && (
        <div className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">Looking for help</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {p.lookingFor.map((r) => (
              <span key={r} className="rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-medium text-brand">{r}</span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Link href={`/projects/${p.slug}#help`} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
          <UserPlusIcon className="h-4 w-4" /> Offer to help
        </Link>
        <Link href={`/projects/${p.slug}`} className="inline-flex items-center justify-center gap-1 rounded-lg border border-border px-3 py-2 text-sm font-medium transition hover:border-brand/40">
          Details <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
