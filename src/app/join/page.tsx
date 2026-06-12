import type { Metadata } from "next";
import { JoinForm } from "@/components/join-form";

export const metadata: Metadata = { title: "Join us" };

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Join the brotherhood</h1>
        <p className="mt-3 text-text-muted">
          Developer or content volunteer, beginner or senior — you&apos;re welcome. List your own
          project or help an existing one. It&apos;s free; we ask only for sincerity and good character.
        </p>
      </div>
      <JoinForm />
    </div>
  );
}
