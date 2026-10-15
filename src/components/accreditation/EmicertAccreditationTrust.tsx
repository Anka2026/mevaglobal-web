import type { Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { CBAM_SCOPE_GROUPS, EMICERT_CBAM_URL, EMICERT_SCOPE_PDF } from "@/content/cbamFlagship";
import { cn } from "@/lib/cn";

const COPY = {
  en: {
    rolesTitle: "Institutional roles",
    roles: [
      { title: "Accreditation body", body: "Assesses and accredits the verification body. For this CBAM accreditation, that body is ESYD." },
      { title: "Accredited verification body", body: "EmiCert S.A. holds accreditation certificate No. 874-9 and performs the accredited CBAM verification." },
      { title: "Exclusive country representative", body: "MEVA Global Certification is EmiCert’s exclusive representative in Türkiye. It does not hold the accreditation." },
      { title: "Verification client", body: "The operator or declarant whose installation data and embedded-emissions information are the subject of verification." },
    ],
    featureTitle: "EmiCert CBAM accreditation",
    featureBody:
      "EmiCert S.A. is the world’s first accredited CBAM verification body. Annex V1/20 of 14 September 2026 to ESYD Certificate No. 874-9 covers the eleven CBAM activity groups in Annex I to Commission Delegated Regulation (EU) 2025/2551. The certificate is valid until 9 June 2030.",
    facts: ["EmiCert S.A.", "Hellenic Accreditation System (ESYD)", "Certificate No. 874-9", "Annex V1/20 — 14 September 2026", "Valid until 9 June 2030", "Exclusive representation in Türkiye: MEVA Global Certification"],
    repTitle: "Accreditation and representation",
    repBody:
      "Accredited CBAM verification activities are performed under the accreditation and responsibility of EmiCert S.A. MEVA Global Certification acts as EmiCert's exclusive representative in Türkiye, facilitating local communication, application coordination and verification arrangements.",
    docsTitle: "Accreditation evidence",
    docs: [
      { title: "Accreditation certificate", body: "Certificate No. 874-9, held by EmiCert S.A. and issued under ESYD." },
      { title: "Accreditation scope", body: "Annex V1/20 of 14 September 2026 to Certificate No. 874-9 covers the eleven CBAM activity groups in Annex I to Commission Delegated Regulation (EU) 2025/2551. The certificate is valid until 9 June 2030." },
      { title: "Official EmiCert CBAM announcement", body: "Public CBAM information on emicert.com." },
      { title: "Representation information", body: "MEVA coordinates locally. The accredited entity remains EmiCert S.A." },
    ],
    download: "Download the accreditation scope",
    official: "Official EmiCert CBAM information",
  },
  tr: {
    rolesTitle: "Kurumsal roller",
    roles: [
      { title: "Akreditasyon kuruluşu", body: "Doğrulama kuruluşunu değerlendirir ve akredite eder. Bu CBAM akreditasyonunda kuruluş ESYD’dir." },
      { title: "Akredite doğrulama kuruluşu", body: "EmiCert S.A., 874-9 numaralı akreditasyonu taşır ve akredite CBAM doğrulamasını yürütür." },
      { title: "Ülke temsilcisi", body: "MEVA Global Certification, EmiCert’in Türkiye’deki tek temsilcisidir. Akreditasyonun sahibi değildir." },
      { title: "Doğrulama müşterisi", body: "Tesis verisi ve gömülü emisyon bilgisi doğrulamaya konu olan işletmeci veya beyan sahibi." },
    ],
    featureTitle: "EmiCert CBAM akreditasyonu",
    featureBody:
      "EmiCert S.A., dünyanın ilk akredite CBAM doğrulama kuruluşudur. ESYD sertifika no. 874-9’un 14 Eylül 2026 tarihli V1/20 eki, Yetki Tüzüğü (AB) 2025/2551 Ek I’deki on bir CBAM faaliyet grubunu kapsar. Sertifika 9 Haziran 2030’a kadar geçerlidir.",
    facts: ["EmiCert S.A.", "Hellenic Accreditation System (ESYD)", "Sertifika no. 874-9", "Ek V1/20 — 14 Eylül 2026", "9 Haziran 2030’a kadar geçerli", "Türkiye tek temsilcisi: MEVA Global Certification"],
    repTitle: "Akreditasyon ve temsil",
    repBody:
      "Akredite CBAM doğrulama faaliyetleri, EmiCert S.A.'nın akreditasyonu ve sorumluluğu altında gerçekleştirilmektedir. MEVA Global Certification, EmiCert'in Türkiye'deki tek temsilcisi olarak yerel iletişim, başvuru koordinasyonu ve doğrulama süreçlerinin organizasyonunu sağlamaktadır.",
    docsTitle: "Akreditasyon kanıtı",
    docs: [
      { title: "Akreditasyon sertifikası", body: "Sertifika no. 874-9. Akredite kuruluş EmiCert S.A.’dır. Akreditasyon kuruluşu ESYD’dir." },
      { title: "Akreditasyon kapsamı", body: "14 Eylül 2026 tarihli ek V1/20, sertifika no. 874-9, Yetki Tüzüğü (AB) 2025/2551 Ek I’deki on bir CBAM faaliyet grubunu kapsar. Sertifika 9 Haziran 2030’a kadar geçerlidir." },
      { title: "Resmî EmiCert CBAM duyurusu", body: "emicert.com üzerindeki kamu CBAM bilgisi." },
      { title: "Temsil bilgisi", body: "MEVA yerelde koordine eder. Akredite kuruluş EmiCert S.A.’dır." },
    ],
    download: "Akreditasyon kapsamını indir",
    official: "Resmî EmiCert CBAM bilgisi",
  },
  nl: {
    rolesTitle: "Institutionele rollen",
    roles: [
      { title: "Accreditatie-instelling", body: "Beoordeelt en accrediteert de verificatie-instelling. Voor deze CBAM-accreditatie is dat ESYD." },
      { title: "Geaccrediteerde verificatie-instelling", body: "EmiCert S.A. houdt certificaat nr. 874-9 en voert de geaccrediteerde CBAM-verificatie uit." },
      { title: "Landvertegenwoordiger", body: "MEVA Global Certification is de exclusieve vertegenwoordiger in Türkiye en houdt de accreditatie niet." },
      { title: "Verificatiecliënt", body: "De exploitant of declarant wiens installatiedata onderwerp van verificatie zijn." },
    ],
    featureTitle: "EmiCert CBAM-accreditatie",
    featureBody:
      "EmiCert S.A. is ’s werelds eerste geaccrediteerde CBAM-verificatie-instelling. Bijlage V1/20 van 14 september 2026 bij ESYD-certificaat nr. 874-9 omvat de elf CBAM-activiteitsgroepen van bijlage I bij Gedelegeerde Verordening (EU) 2025/2551. Het certificaat is geldig tot 9 juni 2030.",
    facts: ["EmiCert S.A.", "Hellenic Accreditation System (ESYD)", "Certificaat nr. 874-9", "Bijlage V1/20 — 14 september 2026", "Geldig tot 9 juni 2030", "Exclusieve vertegenwoordiging in Türkiye: MEVA Global Certification"],
    repTitle: "Accreditatie en vertegenwoordiging",
    repBody:
      "Geaccrediteerde CBAM-verificatie wordt uitgevoerd onder de accreditatie en verantwoordelijkheid van EmiCert S.A. MEVA Global Certification treedt op als exclusieve vertegenwoordiger van EmiCert in Türkiye en faciliteert lokale communicatie, aanvraagcoördinatie en verificatieafspraken.",
    docsTitle: "Accreditatiebewijs",
    docs: [
      { title: "Accreditatiecertificaat", body: "Certificaat nr. 874-9, gehouden door EmiCert S.A., afgegeven onder ESYD." },
      { title: "Accreditatiescope", body: "Bijlage V1/20 van 14 september 2026 bij certificaat nr. 874-9 omvat de elf CBAM-activiteitsgroepen van bijlage I bij Gedelegeerde Verordening (EU) 2025/2551. Het certificaat is geldig tot 9 juni 2030." },
      { title: "Officiële EmiCert-aankondiging", body: "Publieke CBAM-informatie op emicert.com." },
      { title: "Vertegenwoordiging", body: "MEVA coördineert lokaal. De geaccrediteerde entiteit blijft EmiCert S.A." },
    ],
    download: "Accreditatiescope downloaden",
    official: "Officiële EmiCert CBAM-informatie",
  },
} as const;

export function EmicertAccreditationTrust({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  return (
    <>
      <section id="emicert-cbam" className="scroll-mt-[4.5rem] border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[76rem]">
            <h2 className="text-[1.5rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem]">{copy.rolesTitle}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {copy.roles.map((role) => (
                <article key={role.title} className="border border-[color:var(--border-soft)] p-5">
                  <h3 className="text-sm font-semibold text-[color:var(--ink-dark)]">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{role.body}</p>
                </article>
              ))}
            </div>

            <div className="relative mt-10 overflow-hidden border border-[color:color-mix(in_oklab,var(--brand-gold)_40%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_45%,white)] p-6 sm:p-8">
              <div className="executive-glow pointer-events-none absolute -right-6 top-0 h-36 w-36 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_55%,transparent)] blur-2xl" aria-hidden />
              <h2 className="relative flex items-center gap-2 text-xl font-semibold tracking-tight text-[color:var(--ink-dark)]">
                <span className="executive-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand-gold)]" aria-hidden />
                {copy.featureTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-[1.75] text-[color:var(--text-muted)]">{copy.featureBody}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {copy.facts.map((fact) => (
                  <li
                    key={fact}
                    className={cn(
                      "bg-white px-4 py-3 text-sm font-semibold text-[color:var(--ink-dark)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_35%,var(--border-soft))]",
                      fact.includes("874") && "executive-heartbeat",
                    )}
                  >
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a className="inline-flex h-11 items-center justify-center bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--brand-primary-hover)]" href={EMICERT_SCOPE_PDF} download>
                  {copy.download}
                </a>
                <a className="text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 hover:underline" href={EMICERT_CBAM_URL} target="_blank" rel="noreferrer">
                  {copy.official}
                </a>
              </div>
            </div>

            <div id="representation" className="scroll-mt-[4.5rem] mt-10">
              <h2 className="text-[1.5rem] font-semibold tracking-tight text-[color:var(--ink-dark)]">{copy.repTitle}</h2>
              <p className="mt-3 max-w-4xl border-l-2 border-[color:var(--brand-gold)] pl-4 text-sm leading-[1.75] text-[color:var(--ink-dark)]/88">
                {copy.repBody}
              </p>
            </div>

            <h2 className="mt-10 text-[1.5rem] font-semibold tracking-tight text-[color:var(--ink-dark)]">{copy.docsTitle}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {copy.docs.map((doc) => (
                <article key={doc.title} className="border border-[color:var(--border-soft)] bg-white p-5">
                  <h3 className="text-sm font-semibold text-[color:var(--ink-dark)]">{doc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{doc.body}</p>
                </article>
              ))}
            </div>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2">
              {CBAM_SCOPE_GROUPS.map((group) => (
                <li key={group.no} className="flex gap-3 border border-[color:var(--border-soft)] bg-white px-4 py-3">
                  <span className="w-8 shrink-0 text-[11px] font-semibold tabular-nums tracking-[0.14em] text-[color:var(--brand-primary)]">{group.no}</span>
                  <span className="text-sm font-medium leading-snug text-[color:var(--ink-dark)]">{group.name}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
