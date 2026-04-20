import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/publicFileExists";
import { visualImageClipClass, visualImageHeroShadowClass } from "@/lib/visualImage";
import {
  BadgeCheck,
  FileSearch,
  Globe2,
  Leaf,
  Lock,
  Scale,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/about",
    tr: "/tr/about",
    nl: "/nl/about",
  } as const;

  const metaAbout = dict.meta?.pages?.about;
  return {
    title: metaAbout?.title ?? dict.meta?.siteName ?? "Meva Global",
    description: metaAbout?.description ?? dict.meta?.siteDescription ?? "",
    alternates: { canonical: `/${locale}/about`, languages },
    openGraph: {
      title: metaAbout?.title ?? dict.meta?.siteName ?? "Meva Global",
      description: metaAbout?.description ?? dict.meta?.siteDescription ?? "",
      url: `/${locale}/about`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const metaAbout = dict.meta?.pages?.about;
  const about = dict.pages?.about;
  const intro = Array.isArray(about?.intro) ? about!.intro : [];
  const sectionsRaw = Array.isArray(about?.sections) ? about!.sections : [];

  const sectionIcons = [Scale, Leaf, Globe2, FileSearch, Lock, BadgeCheck];
  const aboutSections = sectionsRaw.slice(0, 6);
  const aboutHeroSrc = "/page-visuals/about-hero.png";
  const showAboutHero = publicFileExists(aboutHeroSrc);

  return (
    <>
      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="flex min-w-0 flex-col justify-center lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]/90">
                {about?.eyebrow ?? ""}
              </p>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-4xl">
                {about?.title ?? ""}
              </h1>
              <div className="mt-6 grid gap-5 text-[15px] leading-[1.75] text-[color:var(--ink-dark)]/82 sm:text-base sm:leading-relaxed">
                {intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            {/* Editorial panel: 7/12 width, stretches to hero row height; contain preserves infographic focal area */}
            <div className="flex min-h-0 min-w-0 self-stretch lg:col-span-7 lg:h-full">
              <div
                className={cn(
                  visualImageClipClass,
                  visualImageHeroShadowClass,
                  "h-full min-h-[22rem] w-full sm:min-h-[26rem] lg:min-h-full",
                )}
              >
                {showAboutHero ? (
                  <Image
                    src={aboutHeroSrc}
                    alt={metaAbout?.title ?? about?.title ?? dict.brand?.legalName ?? ""}
                    fill
                    className="object-contain object-[50%_46%]"
                    sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 58vw, 720px"
                    priority
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-[color:var(--brand-accent-soft)] bg-[radial-gradient(90%_80%_at_10%_15%,rgba(15,74,109,0.10),transparent_55%),radial-gradient(80%_70%_at_90%_20%,rgba(54,136,170,0.10),transparent_50%)]"
                    aria-hidden
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-2xl">
            {about?.sectionTitle ?? ""}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7">
            {aboutSections.map((s, idx) => {
              const Icon = sectionIcons[idx] ?? BadgeCheck;
              const bullets = Array.isArray(s?.bullets) ? s.bullets : [];
              return (
                <section
                  key={`${s?.title ?? "section"}-${idx}`}
                  className="flex h-full min-h-0 flex-col rounded-2xl border border-[color:var(--border-soft)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-7"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)] ring-1 ring-black/5">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="pt-1 text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                      {s?.title ?? ""}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[color:var(--ink-dark)]/82">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

