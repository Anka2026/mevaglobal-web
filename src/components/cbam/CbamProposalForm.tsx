"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Label, Select, Textarea } from "@/components/ui/Field";

export type CbamProposalCopy = {
  heading: string;
  intro: string;
  fields: {
    company: string;
    contact: string;
    email: string;
    telephone: string;
    country: string;
    sector: string;
    installations: string;
    products: string;
    cn: string;
    period: string;
    details: string;
  };
  sectorPlaceholder: string;
  sectors: readonly string[];
  optional: string;
  consent: string;
  privacy: string;
  submit: string;
  mailtoNote: string;
  required: string;
  invalidEmail: string;
  consentError: string;
  directEmailLabel: string;
};

const CONTACT_EMAIL = "info@mevaglobalcertification.com";

export function CbamProposalForm({ copy }: { copy: CbamProposalCopy }) {
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    if (!company || !contact || !email) {
      setError(copy.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(copy.invalidEmail);
      return;
    }
    if (!consent) {
      setError(copy.consentError);
      return;
    }
    setError(null);
    const lines = [
      `${copy.fields.company}: ${company}`,
      `${copy.fields.contact}: ${contact}`,
      `${copy.fields.email}: ${email}`,
      `${copy.fields.telephone}: ${String(data.get("telephone") ?? "").trim()}`,
      `${copy.fields.country}: ${String(data.get("country") ?? "").trim()}`,
      `${copy.fields.sector}: ${String(data.get("sector") ?? "").trim()}`,
      `${copy.fields.installations}: ${String(data.get("installations") ?? "").trim()}`,
      `${copy.fields.products}: ${String(data.get("products") ?? "").trim()}`,
      `${copy.fields.cn}: ${String(data.get("cn") ?? "").trim()}`,
      `${copy.fields.period}: ${String(data.get("period") ?? "").trim()}`,
      "",
      `${copy.fields.details}:`,
      String(data.get("details") ?? "").trim(),
      "",
      "Consent: yes",
    ].join("\n");
    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("CBAM verification proposal")}&body=${encodeURIComponent(lines)}`;
    window.location.href = url;
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Field label={copy.fields.company} name="company" required />
        <Field label={copy.fields.contact} name="contact" required />
        <Field label={copy.fields.email} name="email" type="email" required />
        <Field label={copy.fields.telephone} name="telephone" type="tel" />
        <Field label={copy.fields.country} name="country" required />
        <div>
          <Label htmlFor="cbam-sector">
            {copy.fields.sector} <span className="text-[color:var(--brand-primary)]">*</span>
          </Label>
          <Select id="cbam-sector" name="sector" required defaultValue="">
            <option value="" disabled>
              {copy.sectorPlaceholder}
            </option>
            {copy.sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </div>
        <Field label={copy.fields.installations} name="installations" />
        <Field label={copy.fields.products} name="products" />
        <Field label={`${copy.fields.cn} (${copy.optional})`} name="cn" />
        <Field label={copy.fields.period} name="period" />
      </div>
      <div>
        <Label htmlFor="cbam-details">{copy.fields.details}</Label>
        <Textarea id="cbam-details" name="details" rows={4} />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--ink-dark)]/85">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[color:var(--brand-primary)]"
          checked={consent}
          onChange={(ev) => setConsent(ev.target.checked)}
        />
        <span>{copy.consent}</span>
      </label>
      <p className="text-xs leading-relaxed text-[color:var(--text-muted)]">{copy.privacy}</p>
      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="md" className="sm:min-w-[16rem]">
          {copy.submit}
        </Button>
        <a
          className="text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 hover:underline"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          {copy.directEmailLabel}
        </a>
      </div>
      <p className="text-xs leading-relaxed text-[color:var(--text-muted)]">{copy.mailtoNote}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `cbam-${name}`;
  return (
    <div>
      <Label htmlFor={id}>
        {label} {required ? <span className="text-[color:var(--brand-primary)]">*</span> : null}
      </Label>
      <Input id={id} name={name} type={type} required={required} />
    </div>
  );
}
