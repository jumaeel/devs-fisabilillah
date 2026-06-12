import Link from "next/link";
import type { Metadata } from "next";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ProjectsBrowser } from "@/components/projects-browser";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Projects</h1>
          <p className="mt-2 max-w-xl text-text-muted">
            Beneficial, open-source projects — each founded and led by a member. Find one that
            speaks to you and offer to help.
          </p>
        </div>
        <Link href="/join" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white transition hover:bg-emerald-700">
          <PlusIcon className="h-5 w-5" /> List your project
        </Link>
      </div>
      <ProjectsBrowser />
    </div>
  );
}
