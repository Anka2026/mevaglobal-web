"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Label, Textarea } from "@/components/ui/Field";

type State = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof State, string>> = {};
    if (!state.name.trim()) e.name = dict.pages.contact.validation.required;
    if (!state.email.trim()) e.email = dict.pages.contact.validation.required;
    else if (!state.email.includes("@")) e.email = dict.pages.contact.validation.invalidEmail;
    if (!state.message.trim()) e.message = dict.pages.contact.validation.required;
    return e;
  }, [dict, state]);

  return (
    <Card className="min-w-0 p-7 sm:p-8">
      <h3 className="text-[15px] font-semibold leading-6 tracking-tight text-[color:var(--ink-dark)]">
        {dict.pages.contact.contactForm.title}
      </h3>

      <form
        className="mt-6 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          setSuccess(false);
          if (Object.keys(errors).length > 0) return;
          setSuccess(true);
        }}
      >
        {success ? (
          <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)] px-4 py-3 text-sm leading-7 text-[color:var(--ink-dark)]/80">
            {dict.pages.contact.validation.submitted}
          </div>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={dict.pages.contact.contactForm.name}
            value={state.name}
            onChange={(v) => setState((p) => ({ ...p, name: v }))}
            required
            error={submitted ? errors.name : undefined}
            placeholder={dict.pages.contact.contactPlaceholders.name}
          />
          <Field
            label={dict.pages.contact.contactForm.email}
            value={state.email}
            onChange={(v) => setState((p) => ({ ...p, email: v }))}
            required
            type="email"
            error={submitted ? errors.email : undefined}
            placeholder={dict.pages.contact.contactPlaceholders.email}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={dict.pages.contact.contactForm.phone}
            value={state.phone}
            onChange={(v) => setState((p) => ({ ...p, phone: v }))}
            placeholder={dict.pages.contact.contactPlaceholders.phone}
          />
          <Field
            label={dict.pages.contact.contactForm.company}
            value={state.company}
            onChange={(v) => setState((p) => ({ ...p, company: v }))}
            placeholder={dict.pages.contact.contactPlaceholders.company}
          />
        </div>

        <div>
          <Label className="flex items-center justify-between">
            <span>{dict.pages.contact.contactForm.message}</span>
            {submitted && errors.message ? (
              <span className="text-xs font-semibold text-red-600">{errors.message}</span>
            ) : null}
          </Label>
          <Textarea
            value={state.message}
            onChange={(e) => setState((p) => ({ ...p, message: e.target.value }))}
            required
            placeholder={dict.pages.contact.contactPlaceholders.message}
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
            {dict.ctas.submit}
          </Button>
        </div>

        <p className="text-xs leading-6 text-[color:var(--text-muted)]">
          {dict.pages.contact.helper.privacyNote}
        </p>
      </form>
    </Card>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label className="flex items-center justify-between">
        <span>
          {label} {required ? <span className="text-[color:var(--text-muted)]">*</span> : null}
        </span>
        {error ? <span className="text-xs font-semibold text-red-600">{error}</span> : null}
      </Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

