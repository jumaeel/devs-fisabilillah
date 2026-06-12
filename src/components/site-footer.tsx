import Link from "next/link";
import { BrandMark } from "./ui";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-9 w-9" />
              <span className="font-display text-base font-extrabold">Devs Fisabilillah</span>
            </div>
            <p className="mt-3 text-sm text-text-muted">
              A brotherhood of Muslim developers building beneficial, open-source technology for the
              ummah — sincerely, and for the sake of Allah.
            </p>
          </div>
          <div className="flex gap-14">
            <div>
              <p className="text-sm font-semibold">Explore</p>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                <li><Link href="/#pillars" className="hover:text-brand">What we do</Link></li>
                <li><Link href="/projects" className="hover:text-brand">Projects</Link></li>
                <li><Link href="/#faq" className="hover:text-brand">FAQ</Link></li>
                <li><Link href="/join" className="hover:text-brand">Join us</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Connect</p>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand">GitHub</a></li>
                <li><a href="#" className="hover:text-brand">Discord</a></li>
                <li><a href="#" className="hover:text-brand">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <p>© {2026} Devs Fisabilillah</p>
          <p className="italic">“The most beloved of people to Allah are those most beneficial to people.”</p>
        </div>
      </div>
    </footer>
  );
}
