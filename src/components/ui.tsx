import type { ReactNode } from "react";
import {
  UsersIcon, CodeBracketSquareIcon, BookOpenIcon, BriefcaseIcon, RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export function cn(...p: (string | false | null | undefined)[]) {
  return p.filter(Boolean).join(" ");
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-border bg-surface", className)}>{children}</div>;
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold", className ?? "bg-brand-soft text-brand")}>
      {children}
    </span>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white", className)}>
      <CodeBracketSquareIcon className="h-[58%] w-[58%]" />
    </span>
  );
}

const PILLAR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Users: UsersIcon,
  Code: CodeBracketSquareIcon,
  BookOpen: BookOpenIcon,
  Briefcase: BriefcaseIcon,
  Rocket: RocketLaunchIcon,
};

export function PillarIcon({ name, className }: { name: string; className?: string }) {
  const Icon = PILLAR_ICONS[name] ?? CodeBracketSquareIcon;
  return <Icon className={className} />;
}
