"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./project-card";
import { cn } from "./ui";
import { projects } from "@/lib/data";

const KINDS = ["All", "Software", "Content"] as const;
const STATUSES = ["All", "Active", "Maintained", "Seeking devs"] as const;

export function ProjectsBrowser() {
  const [kind, setKind] = useState<(typeof KINDS)[number]>("All");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");

  const list = useMemo(
    () =>
      projects.filter(
        (p) => (kind === "All" || p.kind === kind) && (status === "All" || p.status === status)
      ),
    [kind, status]
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {KINDS.map((k) => (
          <Chip key={k} active={kind === k} onClick={() => setKind(k)}>{k}</Chip>
        ))}
        <span className="mx-1 h-5 w-px bg-border" />
        {STATUSES.map((s) => (
          <Chip key={s} active={status === s} onClick={() => setStatus(s)}>{s}</Chip>
        ))}
        <span className="ml-auto text-sm text-text-muted">{list.length} projects</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && (
        <div className="rounded-xl border border-dashed border-border p-10 text-center text-text-muted">
          No projects match these filters.
        </div>
      )}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-sm font-medium transition",
        active ? "bg-emerald-600 text-white" : "border border-border text-text-muted hover:border-brand/40 hover:text-text"
      )}
    >
      {children}
    </button>
  );
}
