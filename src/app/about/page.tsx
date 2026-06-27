import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Card, cn } from "@/components/ui";
import { values, foundingTeam, shariahBoard, initials, type TeamMember } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">About us</h1>
        <p className="mt-3 text-text-muted">
          Devs Fisabilillah is a brotherhood of Muslim developers and content volunteers building
          beneficial, open-source technology for the ummah. Every member lists their own project,
          stays its founder, and others step in to help — so we grow in skill and deen together.
        </p>
      </div>

      {/* Intention */}
      <Card className="mt-10 bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 text-white">
        <HeartIcon className="h-8 w-8" />
        <p className="mt-4 max-w-3xl font-display text-2xl font-bold leading-snug">
          “The most beloved of people to Allah are those most beneficial to people.”
        </p>
        <p className="mt-3 max-w-2xl text-sm text-emerald-100">
          We write code as an act of worship — sincerely, excellently, and for the benefit of the
          ummah. Beneficial software can be sadaqah jariyah, ongoing charity that outlives us.
        </p>
      </Card>

      {/* Values */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">What we stand for</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border p-4">
              <p className="font-semibold">{v.title}</p>
              <p className="mt-1 text-sm text-text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founding team */}
      <TeamSection
        title="Founding team"
        subtitle="The brothers and sisters who started Devs Fisabilillah."
        people={foundingTeam}
      />

      {/* Shariah advisory board */}
      <TeamSection
        title="Shariah advisory board"
        subtitle="Scholars who guide the community on matters of deen."
        people={shariahBoard}
        accent
      />

      {/* CTA */}
      <Card className="mt-12 p-8 text-center">
        <h2 className="font-display text-2xl font-bold">Want to build with us?</h2>
        <p className="mx-auto mt-2 max-w-xl text-text-muted">
          Whether you write code or content, beginner or senior — come build with sincerity and
          excellence, fi sabilillah.
        </p>
        <Link href="/join" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
          Join the brotherhood <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </Card>
    </div>
  );
}

function TeamSection({
  title,
  subtitle,
  people,
  accent,
}: {
  title: string;
  subtitle: string;
  people: TeamMember[];
  accent?: boolean;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((m) => (
          <Card key={m.name} className="flex h-full flex-col p-5">
            <div className="flex items-center gap-3">
              <span className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-white",
                accent ? "bg-gradient-to-br from-amber-500 to-amber-700" : "bg-gradient-to-br from-emerald-500 to-emerald-700",
              )}>
                {initials(m.name)}
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold">{m.name}</p>
                <p className="truncate text-xs text-text-muted">{m.role}</p>
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm text-text-muted">{m.bio}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
