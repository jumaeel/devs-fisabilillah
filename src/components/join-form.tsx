"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { cn } from "./ui";

const schema = z.object({
  name: z.string().min(2, "Your name, please."),
  contact: z.string().min(5, "Email, GitHub or Telegram so we can welcome you."),
  type: z.enum(["Developer", "Content"], { message: "Pick how you'd like to contribute." }),
  skills: z.string().min(2, "List a few skills (comma separated)."),
  hasProject: z.boolean().optional(),
  projectName: z.string().optional(),
  projectDesc: z.string().optional(),
  intention: z.literal(true, { message: "Please confirm your intention." }),
}).refine((d) => !d.hasProject || (d.projectName && d.projectName.length >= 2), {
  path: ["projectName"],
  message: "Give your project a name.",
}).refine((d) => !d.hasProject || (d.projectDesc && d.projectDesc.length >= 15), {
  path: ["projectDesc"],
  message: "Describe your project (15+ characters).",
});

type Values = z.infer<typeof schema>;

export function JoinForm() {
  const [done, setDone] = useState(false);
  const {
    register, handleSubmit, watch, reset, formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { hasProject: false } });

  const hasProject = watch("hasProject");

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700));
    setDone(true);
    reset();
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <CheckCircleIcon className="mx-auto h-14 w-14 text-emerald-500" />
        <h2 className="mt-4 font-display text-2xl font-bold">Ahlan wa sahlan!</h2>
        <p className="mx-auto mt-2 max-w-md text-text-muted">
          Your request has been received. A brother will reach out to welcome you and get you set
          up, in shā’ Allah. JazakAllahu khayran for your intention.
        </p>
        <button onClick={() => setDone(false)} className="mt-6 rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white transition hover:bg-emerald-700">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input {...register("name")} className={input(errors.name)} placeholder="e.g. Ahmed Saleem" />
        </Field>
        <Field label="Email / GitHub / Telegram" error={errors.contact?.message}>
          <input {...register("contact")} className={input(errors.contact)} placeholder="How to reach you" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="I want to contribute as a…" error={errors.type?.message}>
          <div className="flex flex-wrap gap-2">
            {["Developer", "Content"].map((t) => (
              <label key={t} className="cursor-pointer">
                <input type="radio" value={t} {...register("type")} className="peer sr-only" />
                <span className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium transition peer-checked:border-emerald-500 peer-checked:bg-brand-soft peer-checked:text-brand hover:border-brand/40">
                  {t === "Content" ? "Content Volunteer" : "Developer"}
                </span>
              </label>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Your skills" error={errors.skills?.message}>
          <input {...register("skills")} className={input(errors.skills)} placeholder="e.g. React, writing, translation (comma separated)" />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-xl border border-border p-4 text-sm">
        <input type="checkbox" {...register("hasProject")} className="mt-0.5 h-4 w-4 rounded border-border text-emerald-600" />
        <span>
          <span className="font-medium">I want to list my own project</span>
          <span className="mt-0.5 block text-text-muted">You&apos;ll stay its founder; others can offer to help.</span>
        </span>
      </label>

      {hasProject && (
        <div className="mt-4 space-y-4 rounded-xl border border-dashed border-border p-4">
          <Field label="Project name" error={errors.projectName?.message}>
            <input {...register("projectName")} className={input(errors.projectName)} placeholder="e.g. Tajweed Trainer" />
          </Field>
          <Field label="What does it do?" error={errors.projectDesc?.message}>
            <textarea {...register("projectDesc")} rows={3} className={input(errors.projectDesc)} placeholder="A short description, the stack, and what help you'll need…" />
          </Field>
        </div>
      )}

      <label className="mt-5 flex items-start gap-3 text-sm">
        <input type="checkbox" {...register("intention")} className="mt-0.5 h-4 w-4 rounded border-border text-emerald-600" />
        <span className={errors.intention ? "text-red-600" : "text-text-muted"}>
          I&apos;m joining sincerely, to benefit the ummah and grow in skill and deen, for the sake of Allah.
        </span>
      </label>

      <button type="submit" disabled={isSubmitting} className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60">
        {isSubmitting ? "Submitting…" : hasProject ? "Join & list my project" : "Join the brotherhood"}
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
