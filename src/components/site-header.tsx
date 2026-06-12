"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "./theme";
import { BrandMark, cn } from "./ui";

const LINKS = [
  { href: "/#pillars", label: "How it works" },
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold tracking-tight">Devs Fisabilillah</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-text-muted">Code · Brotherhood · Da'wah</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-text-muted transition hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/join"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:inline-block"
          >
            Join us
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted md:hidden">
            {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={cn("rounded-lg px-2 py-2.5 text-sm font-medium text-text-muted transition hover:bg-surface-2 hover:text-brand")}>
                {l.label}
              </Link>
            ))}
            <Link href="/join" onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-emerald-600 px-2 py-2.5 text-center text-sm font-semibold text-white">
              Join us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
