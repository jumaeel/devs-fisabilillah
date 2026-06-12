"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { cn } from "./ui";

const schema = z.object({
  name: z.string().min(2, "Your name, please."),
  contact: z.string().min(5, "An email, GitHub or Telegram so the founder can reach you."),
  role: z.string().min(1, "Which role would you like to help with?"),
  message: z.string().min(10, "A short note about how you'd like to help (10+ characters)."),
});

type Values = z.infer<typeof schema>;

export function HelpForm({ project, roles }: { project: string; roles: string[] }) {
  const [done, setDone] = useState(false);
  const {
    register, handleSubmit, reset, formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600));
    setDone(true);
    reset();
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-emerald-500" />
        <h3 className="mt-3 font-display text-xl font-bold">Offer sent — jazakAllahu khayran!</h3>
        <p className="mt-2 text-text-muted">The founder of {project} will reach out to you soon, in shā’ Allah.</p>
        <button onClick={() => setDone(false)} className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white transition hover:bg-emerald-700">
          Offer again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <h3 className="font-display text-xl font-bold">Offer to help</h3>
      <p className="mt-1 text-sm text-text-muted">Join {project} and contribute fi sabilillah.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input {...register("name")} className={input(errors.name)} placeholder="e.g. Ahmed" />
        </Field>
        <Field label="Email / GitHub / Telegram" error={errors.contact?.message}>
          <input {...register("contact")} className={input(errors.contact)} placeholder="How to reach you" />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Role you'd like to help with" error={errors.role?.message}>
          <select {...register("role")} className={input(errors.role)} defaultValue="">
            <option value="" disabled>Select a role…</option>
            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
            <option value="Other">Other / not sure</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="A short note" error={errors.message?.message}>
          <textarea {...register("message")} rows={4} className={input(errors.message)} placeholder="Tell the founder how you can help and your experience…" />
        </Field>
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-5 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60">
        {isSubmitting ? "Sending…" : "Send offer to help"}
      </button>
    </form>
  );
}

function input(error?: unknown) {
  return cn("w-full rounded-lg border bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-brand/60", error ? "border-red-400" : "border-border");
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
