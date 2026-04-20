"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/locales";
import { services } from "@/data/services";
import { localizedServiceTitle } from "@/lib/serviceListing";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Label, Select, Textarea } from "@/components/ui/Field";

type State = {
  service: string;
  standard: string;
  reportingYear: string;
  details: string;
  email: string;
};

export function QuoteRequestForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [state, setState] = useState<State>({
    service: "",
    standard: "",
    reportingYear: "",
    details: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof State, string>> = {};
    if (!state.email.trim()) e.email = dict.pages.contact.validation.required;
    else if (!state.email.includes("@")) e.email = dict.pages.contact.validation.invalidEmail;
    if (!state.service) e.service = dict.pages.contact.validation.required;
    if (!state.details.trim()) e.details = dict.pages.contact.validation.required;
    return e;
  }, [dict, state]);

  return (
    <Card className="min-w-0 p-7 sm:p-8">
      <h3 className="text-[15px] font-semibold leading-6 tracking-tight text-[color:var(--ink-dark)]">
        {dict.pages.contact.quoteForm.title}
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
          <div>
            <Label className="flex items-center justify-between">
              <span>
                {dict.pages.contact.quoteForm.service}{" "}
                <span className="text-[color:var(--text-muted)]">*</span>
              </span>
              {submitted && errors.service ? (
                <span className="text-xs font-semibold text-red-600">{errors.service}</span>
              ) : null}
            </Label>
            <Select
              value={state.service}
              onChange={(e) => setState((p) => ({ ...p, service: e.target.value }))}
            >
              <option value="">—</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {localizedServiceTitle(s, locale)}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="q-email" className="flex items-center justify-between">
              <span>
                {dict.pages.contact.contactForm.email}{" "}
                <span className="text-[color:var(--text-muted)]">*</span>
              </span>
              {submitted && errors.email ? (
                <span className="text-xs font-semibold text-red-600">{errors.email}</span>
              ) : null}
            </Label>
            <Input
              id="q-email"
              type="email"
              value={state.email}
              onChange={(e) => setState((p) => ({ ...p, email: e.target.value }))}
              placeholder={dict.pages.contact.quotePlaceholders.email}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="q-standard">{dict.pages.contact.quoteForm.standard}</Label>
            <Input
              id="q-standard"
              value={state.standard}
              onChange={(e) => setState((p) => ({ ...p, standard: e.target.value }))}
              placeholder={dict.pages.contact.quotePlaceholders.standard}
            />
          </div>
          <div>
            <Label htmlFor="q-year">{dict.pages.contact.quoteForm.reportingYear}</Label>
            <Input
              id="q-year"
              inputMode="numeric"
              value={state.reportingYear}
              onChange={(e) => setState((p) => ({ ...p, reportingYear: e.target.value }))}
              placeholder={dict.pages.contact.quotePlaceholders.reportingYear}
            />
          </div>
        </div>

        <div>
          <Label className="flex items-center justify-between" htmlFor="q-details">
            <span>
              {dict.pages.contact.quoteForm.details}{" "}
              <span className="text-[color:var(--text-muted)]">*</span>
            </span>
            {submitted && errors.details ? (
              <span className="text-xs font-semibold text-red-600">{errors.details}</span>
            ) : null}
          </Label>
          <Textarea
            id="q-details"
            value={state.details}
            onChange={(e) => setState((p) => ({ ...p, details: e.target.value }))}
            placeholder={dict.pages.contact.quotePlaceholders.details}
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
            {dict.ctas.submit}
          </Button>
        </div>

        <p className="text-xs leading-6 text-[color:var(--text-muted)]">
          {dict.pages.contact.helper.responseTime}
        </p>
      </form>
    </Card>
  );
}

