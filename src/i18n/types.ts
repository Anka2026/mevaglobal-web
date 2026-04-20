import type { ResourceArticleSlug } from "@/data/resourceArticleSlugs";

export type { ResourceArticleSlug } from "@/data/resourceArticleSlugs";

export type ResourceArticleDetail = {
  category: string;
  date: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
  closing: string;
};

export type Dictionary = {
  meta: {
    siteName: string;
    siteDescription: string;
    pages: {
      home: { title: string; description: string };
      about: { title: string; description: string };
      services: { title: string; description: string };
      cbam: { title: string; description: string };
      process: { title: string; description: string };
      statementSearch: { title: string; description: string };
      documents: { title: string; description: string };
      insights: { title: string; description: string };
      contact: { title: string; description: string };
    };
  };
  brand: {
    name: string;
    legalName: string;
    taglineTopBar: string;
  };
  shared: {
    offices: {
      turkey: string;
      netherlands: string;
    };
    ui: {
      optional: string;
      fileTypePdf: string;
    };
  };
  nav: {
    home: string;
    about: string;
    services: string;
    cbam: string;
    process: string;
    representations: string;
    statementSearch: string;
    documents: string;
    insights: string;
    contact: string;
  };
  ctas: {
    verifyStatement: string;
    requestQuote: string;
    contact: string;
    learnMore: string;
    exploreServices: string;
    search: string;
    submit: string;
  };
  footer: {
    description: string;
    offices: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      heroImageAlt: string;
      primaryCta: string;
      secondaryCta: string;
    };
    trustHighlightsTitle: string;
    trustHighlights: { title: string; description: string }[];
    serviceAreasTitle: string;
    serviceAreasIntro: string;
    serviceAreas: { title: string; description: string }[];
    whyTitle: string;
    whyItems: { title: string; description: string }[];
    processTitle: string;
    processIntro: string;
    processSteps: { title: string; description: string }[];
    statementPreviewTitle: string;
    statementPreviewIntro: string;
    cbamTitle: string;
    cbamIntro: string;
    cbamBullets: string[];
    cbamCardTitle: string;
    cbamCardText: string;
    globalTitle: string;
    ctaTitle: string;
    ctaIntro: string;
  };
  pages: {
    about: {
      eyebrow: string;
      title: string;
      intro: string[];
      sectionTitle: string;
      sections: { title: string; bullets: string[] }[];
    };
    services: {
      title: string;
      /** Short overline above the page title (services index). */
      heroEyebrow: string;
      intro: string;
      /** Secondary paragraph; visually de-emphasised when rendered with lead–support styling. */
      introSupport: string;
      heroImageAlt: string;
      groups: {
        climateAndCarbonAssurance: { title: string; intro: string };
        productAndEnvironmentalClaims: { title: string; intro: string };
        builtEnvironmentAndMaterialHealth: { title: string; intro: string };
        responsibleSupplyChainsAndSectorSchemes: { title: string; intro: string };
        esgAndReportingAssurance: { title: string; intro: string };
      };
      cardCta: string;
      whyIndependent: { title: string; items: { title: string; description: string }[] };
      howWeWork: { title: string; intro: string; steps: { title: string; description: string }[] };
      /**
       * Shown only when the listing catalog yields zero renderable sections (registry drift / invalid rows).
       * Must never be replaced by a plain link list.
       */
      listingRecoverableError: { title: string; body: string };
    };
    serviceDetails: Record<
      | "iso-14064-1"
      | "iso-14064-2"
      | "iso-14067"
      | "iso-14046"
      | "lca-review"
      | "epd-verification"
      | "cbam-verification-support"
      | "eu-ets-verification-review"
      | "f-gases-verification-review"
      | "maritime-mrv-verification-review"
      | "custom-verification"
      | "ghg-protocol-review-support"
      | "eu-ets-mrv-assurance-support"
      | "shipping-emissions-mrv-review"
      | "aviation-emissions-readiness-review"
      | "verification-readiness-gap-analysis"
      | "data-evidence-readiness-review"
      | "dpp-readiness-preverification"
      | "sustainability-reporting-evidence-review"
      | "f-gases-reporting-review"
      | "asi-readiness-review"
      | "buyer-value-chain-review"
      | "iso-14068-readiness-review"
      | "mock-verification-review"
      | "green-claim-review"
      | "iso-14064-3-review-support"
      | "net-zero-sbti-technical-review"
      | "recycled-content-verification"
      | "bio-based-content-verification"
      | "product-carbon-footprint-review"
      | "indoor-air-quality-voc-review"
      | "hpd-review"
      | "material-health-composition-review"
      | "green-building-documentation-review"
      | "fsc-pefc-eudr-readiness"
      | "responsible-mining-irma-readiness"
      | "textile-traceability-recycled-review"
      | "zero-waste-review"
      | "gri-esrs-data-assurance"
      | "sustainability-kpi-evidence-review"
      | "limited-assurance-readiness"
      | "non-financial-data-control-review",
      | ({
          variant: "editorial";
          eyebrow: string;
          title: string;
          intro: string;
          sections: { title: string; body: string }[];
          bottomCta: string;
          primaryButton: string;
          secondaryButton: string;
          /** Text link label (e.g. process / methodology details). */
          detailLink: string;
        })
      | ({
          variant?: "standard";
          /** Optional hero overline (e.g. ISO 14067—distinct from generic “Services”). */
          heroEyebrow?: string;
          title: string;
          intro: string;
          covers: { title: string; bullets: string[] };
          /** Omitted on four-card premium layouts (e.g. EPD verification). */
          forWho?: { title: string; bullets: string[] };
          typicalScope: { title: string; bullets: string[] };
          whyMatters: { title: string; bullets: string[] };
          approach: { title: string; bullets: string[] };
          cta: {
            title: string;
            body: string;
            /** Optional overrides (e.g. ISO 14067 premium CTA—three actions aligned with editorial pages). */
            primaryButton?: string;
            secondaryButton?: string;
            detailLink?: string;
          };
        })
    >;
    cbam: {
      heroEyebrow: string;
      title: string;
      intro: string;
      heroImageAlt: string;
      sections: { title: string; bullets: string[] }[];
      cta: {
        title: string;
        body: string;
        primaryLabel: string;
        secondaryLabel: string;
        tertiaryLabel: string;
      };
    };
    process: {
      accreditation: {
        eyebrow: string;
        title: string;
        status: string;
        body: string;
        /** Alt text for the optional hero visual (`/page-visuals/…`). */
        heroImageAlt: string;
      };
      /** Sub-navigation on the accreditation route (accreditation hub). */
      accreditationPageNav: {
        /** Accessible name for the horizontal sub-nav. */
        navAriaLabel: string;
        accreditation: string;
        verificationProcess: string;
        documents: string;
      };
      corporateDocumentsSection: {
        title: string;
        intro: string;
        labels: {
          publicationStatus: string;
          firstPublished: string;
          documentLanguage: string;
          view: string;
          download: string;
        };
        publicationStatusFirst: string;
        /** Display line for language coverage (e.g. EN · TR · NL). */
        languageValue: string;
      };
      verification: {
        title: string;
        body: string;
      };
      steps: { title: string; description: string }[];
      cta: {
        eyebrow: string;
        title: string;
        body: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
    };
    statementSearch: {
      title: string;
      intro: string;
      note: string;
      fields: {
        statementNumber: string;
        companyName: string;
        standard: string;
        reportingYear: string;
      };
      placeholders: {
        statementNumber: string;
        companyName: string;
      };
      labels: {
        status: string;
        verifiedValue: string;
        office: string;
        schemeType: string;
        clear: string;
        resultsCount: string;
        issuedBy: string;
      };
      values: {
        status: Record<"Active" | "Expired" | "Withdrawn", string>;
        office: Record<"Türkiye" | "Netherlands", string>;
        schemeType: Record<"verification" | "validation" | "assurance", string>;
      };
      resultTitle: string;
      noResults: string;
      emptyState: {
        line1: string;
        line2: string;
      };
    };
    documents: {
      title: string;
      hero: {
        eyebrow: string;
        title: string;
        body: string;
        /** Alt for `public/page-visuals/documents-hero.png`. */
        heroImageAlt: string;
      };
      sectionLabel: string;
      cards: {
        category: string;
        date: string;
        title: string;
        body: string;
        cta: string;
        /** Path without locale prefix, e.g. `/documents/slug` */
        href: string;
      }[];
      bottomCta: {
        eyebrow: string;
        title: string;
        body: string;
        primary: string;
        secondary: string;
      };
      resourceArticles: Record<ResourceArticleSlug, ResourceArticleDetail>;
    };
    insights: {
      title: string;
      intro: string;
      readMore: string;
    };
    contact: {
      title: string;
      intro: string;
      /** Alt text for `public/page-visuals/contact-hero.png` (contact hero). */
      heroImageAlt: string;
      officesTitle: string;
      formsTitle: string;
      validation: {
        required: string;
        invalidEmail: string;
        submitted: string;
      };
      contactForm: {
        title: string;
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
      };
      contactPlaceholders: {
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
      };
      quoteForm: {
        title: string;
        service: string;
        standard: string;
        reportingYear: string;
        details: string;
      };
      quotePlaceholders: {
        standard: string;
        reportingYear: string;
        details: string;
        email: string;
      };
      helper: {
        responseTime: string;
        privacyNote: string;
      };
      cta: {
        title: string;
        body: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
    };
  };
  serviceDetail: {
    backToServices: string;
    typicalUse: string;
    whatWeDo: string;
    deliverables: string;
  };
};

