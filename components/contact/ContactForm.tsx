"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

type Status =
  | { state: "idle" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const fieldClasses =
  "w-full rounded-lg border bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-ink-800";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus({ state: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus({
          state: "error",
          message:
            data?.error ??
            "Something went wrong sending your message. Please try again, or call us directly.",
        });
        return;
      }

      reset();
      setStatus({
        state: "success",
        message:
          "Thank you — your message has been sent. We'll get back to you shortly.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "We couldn't reach the server. Please check your connection, or call us directly.",
      });
    }
  };

  const field = (name: keyof ContactFormValues) =>
    cn(fieldClasses, errors[name] ? "border-brand-500" : "border-white/10");

  const errorFor = (name: keyof ContactFormValues) =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-2 text-xs text-brand-400">
        {errors[name]?.message}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="panel p-6 sm:p-8">
      <h2 className="font-display text-2xl font-black uppercase tracking-tight">
        Send us a message
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        Fill in the form and our team will get back to you as soon as possible.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="text-brand-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={field("name")}
            {...register("name")}
          />
          {errorFor("name")}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-brand-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={field("email")}
            {...register("email")}
          />
          {errorFor("email")}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone <span className="text-brand-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07X XXX XXXX"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={field("phone")}
            {...register("phone")}
          />
          {errorFor("phone")}
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject <span className="text-brand-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="What is this about?"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={field("subject")}
            {...register("subject")}
          />
          {errorFor("subject")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message <span className="text-brand-500">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Tell us what you need — product, quantity, budget or any question."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(field("message"), "resize-y")}
            {...register("message")}
          />
          {errorFor("message")}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-deep px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-deep-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      {/* Submission result — announced to screen readers. */}
      <div aria-live="polite" className="empty:hidden">
        {status.state === "success" && (
          <p className="mt-5 flex items-start gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {status.message}
          </p>
        )}
        {status.state === "error" && (
          <p className="mt-5 flex items-start gap-2.5 rounded-lg border border-brand-500/40 bg-brand-600/10 p-4 text-sm text-brand-400">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
