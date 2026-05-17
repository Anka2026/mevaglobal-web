import { FileSearch, MapPin, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { cn } from "@/lib/cn";
import { premiumGoldTopLine, premiumHeroVisualPanel } from "@/lib/premiumUi";

const PANEL_COPY: Record<
  Locale,
  {
    officesLabel: string;
    items: readonly { title: string; body: string }[];
    offices: readonly string[];
  }
> = {
  tr: {
    officesLabel: "Ofisler",
    items: [
      { title: "Belge İncelemesi", body: "Kapsam, ölçütler ve kanıt beklentileri için yapılandırılmış talep." },
      { title: "Teknik Görüşme", body: "Doğrulama ve teknik inceleme bağlamında kurumsal iletişim." },
      { title: "Güvenli Başvuru", body: "Gizlilik ve dosya tutarlılığı ilkeleriyle ele alınan kayıtlar." },
    ],
    offices: ["Utrecht — Merkez Ofis", "Ankara — Koordinasyon"],
  },
  en: {
    officesLabel: "Offices",
    items: [
      { title: "Document Review", body: "Structured requests for scope, criteria and evidence expectations." },
      { title: "Technical Meeting", body: "Corporate contact for verification and technical review contexts." },
      { title: "Secure Inquiry", body: "Records handled with confidentiality and file-consistency discipline." },
    ],
    offices: ["Utrecht — Head Office", "Ankara — Coordination"],
  },
  nl: {
    officesLabel: "Kantoren",
    items: [
      { title: "Documentbeoordeling", body: "Gestructureerde aanvraag voor scope, criteria en bewijsverwachtingen." },
      { title: "Technisch Overleg", body: "Zakelijk contact voor verificatie en technische beoordeling." },
      { title: "Veilige Aanvraag", body: "Registraties met vertrouwelijkheid en dossierconsistentie." },
    ],
    offices: ["Utrecht — Hoofdkantoor", "Ankara — Coördinatie"],
  },
};

const ITEM_ICONS = [FileSearch, ShieldCheck, MapPin] as const;

export function ContactInquiryHeroPanel({ locale }: { locale: Locale }) {
  const copy = PANEL_COPY[locale];

  return (
    <div
      className={cn(
        premiumHeroVisualPanel,
        "relative flex min-h-[280px] w-full flex-col justify-between p-6 sm:min-h-[300px] sm:p-7",
        "bg-gradient-to-br from-white via-[#f8fbfe] to-[color:color-mix(in_oklab,var(--brand-accent-soft)_45%,white)]",
      )}
    >
      <div className={premiumGoldTopLine} aria-hidden />
      <ul className="relative z-[1] space-y-4">
        {copy.items.map((item, index) => {
          const Icon = ITEM_ICONS[index] ?? FileSearch;
          return (
            <li key={item.title} className="flex gap-3">
              <span
                className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-primary)] text-white ring-2 ring-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)]"
                aria-hidden
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[color:var(--ink-dark)]">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[color:var(--text-muted)] sm:text-sm">{item.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="relative z-[1] mt-6 border-t border-[color:var(--border-soft)] pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--brand-primary)]">
          {copy.officesLabel}
        </p>
        <ul className="mt-2 space-y-1 text-xs font-medium text-[color:var(--ink-dark)]/88 sm:text-sm">
          {copy.offices.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
