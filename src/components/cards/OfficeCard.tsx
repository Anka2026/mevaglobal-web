import { MapPin, Mail, Phone } from "lucide-react";
import type { Office } from "@/data/offices";
import { Card } from "@/components/ui/Card";

export function OfficeCard({
  office,
  label,
}: {
  office: Office;
  label?: string;
}) {
  return (
    <Card className="p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          {label ? (
            <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)]">
              {label}
            </p>
          ) : null}
          <h3 className="mt-1 text-[15px] font-semibold leading-6 tracking-tight text-[color:var(--ink-dark)]">
            {office.name}
          </h3>
          <div className="mt-3 grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2 text-sm leading-7 text-[color:var(--text-muted)]">
            <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--brand-accent)]" aria-hidden="true" />
            <p>
              {office.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2.5 text-sm">
        {office.email ? (
          <p className="flex items-center gap-2 text-[color:var(--ink-dark)]/80">
            <Mail className="h-4 w-4 text-[color:var(--brand-accent)]" aria-hidden="true" />
            <a className="truncate hover:underline sm:whitespace-nowrap" href={`mailto:${office.email}`}>
              {office.email}
            </a>
          </p>
        ) : null}
        {office.phone ? (
          <p className="flex items-center gap-2 text-[color:var(--ink-dark)]/80">
            <Phone className="h-4 w-4 text-[color:var(--brand-accent)]" aria-hidden="true" />
            <a className="sm:whitespace-nowrap hover:underline" href={`tel:${office.phone.replace(/\s+/g, "")}`}>
              {office.phone}
            </a>
          </p>
        ) : null}
      </div>
    </Card>
  );
}

