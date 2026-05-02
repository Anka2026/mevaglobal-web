"use client";

/**
 * Contact enquiry UI: submits by opening the visitor's email client with a prefilled message.
 * There is no server endpoint — we do not show a "message sent" confirmation.
 */

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { FieldHint, Input, Label, Select, Textarea } from "@/components/ui/Field";
import { cn } from "@/lib/cn";

export type ContactEnquiryServiceOption = { value: string; label: string };

export type ContactEnquiryFormCopy = {
  mailtoSubject: string;
  labels: {
    name: string;
    company: string;
    email: string;
    country: string;
    service: string;
    message: string;
    consent: string;
    submit: string;
  };
  privacyNote: string;
  servicePlaceholder: string;
  serviceOptions: ContactEnquiryServiceOption[];
  validationRequired: string;
  validationEmail: string;
  validationConsent: string;
  mailtoBehaviorNote: string;
  bodyFieldLabels: {
    name: string;
    company: string;
    email: string;
    country: string;
    service: string;
    message: string;
    consent: string;
  };
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function ContactEnquiryForm({
  contactEmail,
  copy,
  id = "enquiry-form",
}: {
  contactEmail: string;
  copy: ContactEnquiryFormCopy;
  id?: string;
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = copy.validationRequired;
    if (!company.trim()) next.company = copy.validationRequired;
    if (!email.trim()) next.email = copy.validationRequired;
    else if (!isValidEmail(email)) next.email = copy.validationEmail;
    if (!country.trim()) next.country = copy.validationRequired;
    if (!service) next.service = copy.validationRequired;
    if (!message.trim()) next.message = copy.validationRequired;
    if (!consent) next.consent = copy.validationConsent;

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});

    const serviceLabel =
      copy.serviceOptions.find((o) => o.value === service)?.label ?? service;
    const L = copy.bodyFieldLabels;
    const body = [
      `${L.name}: ${name.trim()}`,
      `${L.company}: ${company.trim()}`,
      `${L.email}: ${email.trim()}`,
      `${L.country}: ${country.trim()}`,
      `${L.service}: ${serviceLabel}`,
      "",
      `${L.message}:`,
      message.trim(),
      "",
      `${L.consent}: ${consent ? "yes" : "no"}`,
    ].join("\n");

    const url = `mailto:${contactEmail}?subject=${encodeURIComponent(copy.mailtoSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">{copy.labels.name}</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="contact-company">{copy.labels.company}</Label>
          <Input
            id="contact-company"
            name="organization"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
          />
          {errors.company ? (
            <p id="contact-company-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-email">{copy.labels.email}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="contact-country">{copy.labels.country}</Label>
          <Input
            id="contact-country"
            name="country"
            autoComplete="country-name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "contact-country-error" : undefined}
          />
          {errors.country ? (
            <p id="contact-country-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.country}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="contact-service">{copy.labels.service}</Label>
        <Select
          id="contact-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "contact-service-error" : undefined}
        >
          <option value="">{copy.servicePlaceholder}</option>
          {copy.serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
        {errors.service ? (
          <p id="contact-service-error" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.service}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="contact-message">{copy.labels.message}</Label>
        <Textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_35%,white)] px-4 py-3">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[color:var(--ink-dark)]/90">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className={cn(
              "mt-1 h-4 w-4 shrink-0 rounded border-[color:var(--border-soft)]",
              "text-[color:var(--brand-primary)] focus:ring-[color:var(--ring)]",
            )}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
          />
          <span>{copy.labels.consent}</span>
        </label>
        {errors.consent ? (
          <p id="contact-consent-error" className="mt-2 text-xs font-medium text-red-600">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="md" className="w-full justify-center sm:w-auto">
          {copy.labels.submit}
        </Button>
      </div>

      <FieldHint>{copy.mailtoBehaviorNote}</FieldHint>
      <p className="text-xs leading-relaxed text-[color:var(--text-muted)]">{copy.privacyNote}</p>
    </form>
  );
}
