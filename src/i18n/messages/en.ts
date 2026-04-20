import type { Dictionary } from "../types";
import { documentsResourceArticlesEn } from "./bundles/documentsResourceArticles.en";
import { newServiceDetailsEn } from "./extras/newServiceDetailsEn";
import { serviceDetailsExtraEn } from "./extras/serviceDetailsExtra.en";

export const en: Dictionary = {
  meta: {
    siteName: "Meva Global Certification B.V.",
    siteDescription:
      "Independent verification, validation and assurance body for carbon, environmental claims and CBAM-related reporting contexts—delivered through structured technical review and evidence discipline.",
    pages: {
      home: {
        title: "Independent Verification, Validation & Assurance",
        description:
          "Independent verification, validation, and assurance for carbon, product, and sustainability disclosures—methodological rigour, traceable evidence, and credible outward-facing communication.",
      },
      about: {
        title: "About Meva Global",
        description:
          "Independent verification, validation, and assurance—built on technical integrity, impartiality, and international delivery discipline.",
      },
      services: {
        title: "Services",
        description:
          "Independent verification and technical review for climate data, product claims, environmental disclosures, responsible supply chains, and sustainability reporting—assurance-led delivery.",
      },
      cbam: {
        title: "CBAM Solutions",
        description:
          "Assurance-style technical review for CBAM-facing emissions information—traceable plant-level logic, supplier evidence, disciplined scope, and defensible disclosure packs.",
      },
      process: {
        title: "Accreditation",
        description:
          "Accreditation preparations and independent verification process—quality systems, evidence discipline, and structured technical review at MEVA Global Certification.",
      },
      statementSearch: {
        title: "Statement Lookup",
        description:
          "Public registry lookup for statements issued under Meva Global’s independent verification, validation and assurance pathway—search by reference or statement fields.",
      },
      documents: {
        title: "Resources",
        description:
          "Technical resources for CBAM, carbon verification, EPD/LCA critical review, and assurance—disciplined scope, traceable evidence, methodology, and outward disclosure governance.",
      },
      insights: {
        title: "Insights",
        description:
          "Short technical notes on CBAM, carbon verification and assurance-ready reporting—written for professional stakeholders.",
      },
      contact: {
        title: "Contact",
        description:
          "Reach the office that fits your enquiry. Share scope, standards and timing for independent verification, validation or assurance—we respond with clear next steps.",
      },
    },
  },
  brand: {
    name: "Meva Global",
    legalName: "Meva Global Certification B.V.",
    taglineTopBar: "Independent Verification • Validation • Assurance",
  },
  shared: {
    offices: {
      turkey: "Türkiye — Ankara Office",
      netherlands: "Netherlands — Utrecht Office",
    },
    ui: {
      optional: "Optional",
      fileTypePdf: "PDF",
    },
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    cbam: "CBAM",
    process: "Accreditation",
    representations: "Our Representations",
    statementSearch: "Statement Lookup",
    documents: "Resources",
    insights: "Insights",
    contact: "Contact",
  },
  ctas: {
    verifyStatement: "Statement Lookup",
    requestQuote: "Request a quote",
    contact: "Contact",
    learnMore: "Details",
    exploreServices: "Explore Services",
    search: "Search",
    submit: "Send",
  },
  footer: {
    description:
      "Independent verification, validation and assurance body for carbon, environmental claims and CBAM-related reporting contexts—delivered through structured technical review and evidence discipline.",
    offices: "Our offices",
    quickLinks: "Explore",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
  home: {
    hero: {
      eyebrow: "Independent Verification • Validation • Assurance",
      title:
        "Independent Verification, Validation, and Assurance for Carbon, Product, and Sustainability Disclosures",
      subtitle:
        "Meva Global delivers independent verification, validation, and assurance-oriented technical services for greenhouse gas data, product and environmental declarations, sustainability disclosures, supply chain assessments, and CBAM-related reporting needs. Our approach treats methodological consistency, data traceability, evidence structure, and the credibility of outward-facing disclosures as one integrated challenge—so organisations do more than complete a review cycle; they build a stronger, more defensible, and more mature reporting foundation.",
      heroImageAlt:
        "Meva Global technical reviewers examining evidence, records, and process controls on site at an industrial facility.",
      primaryCta: "Request Proposal",
      secondaryCta: "Explore Services",
    },
    trustHighlightsTitle: "Why Clients Trust Our Review Approach",
    trustHighlights: [
      {
        title: "Impartiality safeguards",
        description:
          "A disciplined review model backed by independence controls, clear role separation, and documented decision pathways.",
      },
      {
        title: "Evidence-led technical assessment",
        description:
          "Structured review that examines methodology, data, calculation logic, and supporting records as a coherent whole.",
      },
      {
        title: "Traceable records",
        description:
          "Documentation that makes document trails, data flows, and the basis for key assumptions visible and defensible.",
      },
      {
        title: "International alignment",
        description:
          "A standards-led working style suited to cross-border reporting and multi-stakeholder disclosure expectations.",
      },
    ],
    serviceAreasTitle: "Core service areas",
    serviceAreasIntro:
      "We organise verification, validation, technical review, and assurance around climate and carbon management, product and environmental declarations, material health, responsible supply chains, and ESG information.",
    serviceAreas: [
      {
        title: "Climate and carbon assurance",
        description:
          "Verification anchored in methodology and evidence—for corporate and project greenhouse gas statements, product carbon data, embedded emissions, and net-zero readiness.",
      },
      {
        title: "Product and environmental claim verification",
        description:
          "Services focused on data traceability and programme alignment across EPDs, life-cycle assessment, recycled content, and product-level environmental claims.",
      },
      {
        title: "Indoor quality and material health",
        description:
          "Verification-led technical review for indoor air quality and VOC data, HPDs, material composition, and green-building documentation—with emphasis on emissions profiles and disclosure-ready evidence.",
      },
      {
        title: "Responsible supply chains and sector readiness",
        description:
          "Traceability, sourcing claims, and technical readiness assessments aligned with ASI, FSC, PEFC, EUDR, and comparable sector expectations.",
      },
      {
        title: "ESG and reporting assurance",
        description:
          "Review of control structures and evidence trails for sustainability data under GRI and ESRS, KPIs, and non-financial disclosures.",
      },
    ],
    whyTitle: "Why Meva Global",
    whyItems: [
      {
        title: "Senior, focused technical leadership",
        description:
          "Our engagements run under senior technical oversight—clear scope, disciplined methodology, and review logic grounded in evidence.",
      },
      {
        title: "Cross-border delivery discipline",
        description:
          "With teams in Türkiye and the Netherlands, we offer a controlled, professional delivery model aligned with international client expectations.",
      },
      {
        title: "Documented, traceable processes",
        description:
          "Review steps, findings, and decision language are shaped by reliable records and robust documentation suited for external scrutiny.",
      },
      {
        title: "Review depth matched to context",
        description:
          "Scope and evidence expectations reflect risk, intended use, data maturity, and reporting context—not a one-size template.",
      },
    ],
    processTitle: "How we work",
    processIntro:
      "Every engagement follows a structured technical review path aimed at clarity, traceability, and defensible outcomes.",
    processSteps: [
      {
        title: "Initial request",
        description: "We capture the request, intended use, and context, then assess fit and timing at a high level.",
      },
      {
        title: "Scope definition",
        description: "Boundaries, criteria, applicable standards, and how the statement will be used are confirmed in writing.",
      },
      {
        title: "Document and data review",
        description: "Evidence packs, calculation structures, completeness checks, and data trails are reviewed systematically.",
      },
      {
        title: "Technical assessment",
        description: "Sampling, recalculation, methodology testing, and reasonableness checks on material assumptions.",
      },
      {
        title: "On-site or remote review",
        description: "Where appropriate, walkthroughs, interviews, and control-point checks deepen the evidence base.",
      },
      {
        title: "Internal technical review",
        description: "Findings, decision logic, and output wording pass an independent internal technical review before sign-off.",
      },
      {
        title: "Finalisation",
        description: "Statements, opinions, findings, or other agreed outputs are completed in a controlled manner.",
      },
    ],
    statementPreviewTitle: "Statement Lookup",
    statementPreviewIntro:
      "Search statements and certificates by reference number and review the published public scope summary where available.",
    cbamTitle: "CBAM-focused support for exporters",
    cbamIntro:
      "CBAM reporting requires tighter discipline on emissions data, supplier inputs, system boundaries, and supporting documentation. Meva Global provides assurance-oriented technical review to strengthen data reliability, traceability, and disclosure infrastructure for external use. This is not a regulatory approval; it helps organisations reach a more controlled, defensible state of readiness.",
    cbamBullets: [
      "Evidence and data-gap review in a CBAM reporting context",
      "Traceability and plausibility assessment at supplier and site level",
      "Support for controlled documentation and disclosure infrastructure for external audiences",
    ],
    cbamCardTitle: "CBAM assurance solutions",
    cbamCardText:
      "Technical review for exporters and manufacturers preparing emissions disclosures in scope for CBAM—emphasising data quality, traceability, boundary control, and documentation discipline.",
    globalTitle: "Our offices",
    ctaTitle: "Request a scoped review",
    ctaIntro:
      "Share your scope, applicable standards and timeline. We’ll respond with a structured review plan, evidence expectations and clear next steps—aligned to your reporting context and intended external use.",
  },
  pages: {
    about: {
      eyebrow: "Independent Verification • Validation • Assurance",
      title: "About Meva Global",
      intro: [
        "Meva Global Certification B.V. is an international organisation providing independent verification, validation, and assurance services built on technical integrity, impartiality, and controlled decision-making.",
        "As sustainability, climate, and ESG expectations become increasingly central to business, we support organisations in strengthening carbon, environmental, and sustainability-related disclosures through reliable data, traceable evidence, and clear methodology.",
        "Our approach is built on independent assessment, sampling-based review, clear scope definition, and disciplined documentation. Our role is not only to conduct a review, but to help organisations present their disclosures and outputs on a more reliable, more controlled, and more professional basis.",
      ],
      sectionTitle: "About Meva Global",
      sections: [
        {
          title: "Independence And Impartiality",
          bullets: [
            "Working model supported by impartiality safeguards and conflict-of-interest controls",
            "Clear separation of review, technical assessment, and decision responsibilities",
            "Documented decision pathways that support consistency and credibility",
          ],
        },
        {
          title: "Sustainability And ESG Focus",
          bullets: [
            "Technical review approach that strengthens the credibility of sustainability and ESG-related disclosures",
            "Traceable evidence structures that support transparency, accountability, and stakeholder confidence",
            "A framework that helps organisations respond more effectively to buyer, investor, and stakeholder expectations",
          ],
        },
        {
          title: "International Delivery Discipline",
          bullets: [
            "Controlled delivery model supported by our structure across Türkiye and the Netherlands",
            "Clear coordination and professional process management for exporters, manufacturers, and multi-stakeholder contexts",
            "Governance, review discipline, and delivery quality aligned with international expectations",
          ],
        },
        {
          title: "Evidence And Traceability",
          bullets: [
            "Traceable evidence matching and sampling-based technical testing",
            "Clear scope definition, transparent methodology, and controlled disclosure language",
            "Structured records that support audit readiness and repeatability",
          ],
        },
        {
          title: "Confidentiality And Controlled Access",
          bullets: [
            "Controlled-access approach for client data, evidence files, and supporting records",
            "Secure handling of records, sampling outputs, and technical documentation",
            "Public-facing disclosure limited to the relevant service scope and disclosure level",
          ],
        },
        {
          title: "Quality And Technical Integrity",
          bullets: [
            "Competence-based evaluator assignment and senior technical oversight",
            "Consistent criteria, robust sampling logic, and methodological discipline",
            "Pre-issuance quality controls, including internal review",
          ],
        },
      ],
    },
    services: {
      title: "Services",
      heroEyebrow: "Independent Technical Review Discipline",
      intro:
        "Meva Global provides independent verification, technical review, and assurance-oriented services across climate, product claims, environmental disclosures, responsible supply chains, and sustainability data. Our approach combines methodological consistency, data traceability, evidence quality, and disclosure credibility in a structured service model designed for outward-facing trust.",
      introSupport:
        "Our portfolio spans corporate greenhouse gas data through product-level environmental claims, material-health reviews, and ESG data assurance—held together by one technical discipline. In every service line we emphasise scope clarity, evidence quality, methodological fit, and stakeholder confidence.",
      heroImageAlt:
        "Assurance-oriented visual language across climate, products, indoor environmental quality and material health, responsible supply chains, and ESG reporting.",
      groups: {
        climateAndCarbonAssurance: {
          title: "Climate And Carbon Assurance",
          intro:
            "From corporate and project greenhouse gas statements to product carbon data, embedded emissions review, and net-zero readiness, this service group focuses on methodology, data quality, and disclosure credibility as one connected system.",
        },
        productAndEnvironmentalClaims: {
          title: "Product And Environmental Claim Verification",
          intro:
            "Product-level environmental performance, content claims, and disclosure structures must be assessed not only through results, but through data sources, methodological choices, and evidence quality. This group addresses product-focused verification and technical review needs.",
        },
        builtEnvironmentAndMaterialHealth: {
          title: "Indoor Quality And Material Health",
          intro:
            "Interior finishes, building materials, and health-oriented product communications require more than headline environmental performance. Emissions profiles, composition transparency, and technical documentation discipline are equally decisive. This service group helps exporters and teams preparing project-facing technical dossiers present clearer, more defensible disclosures.",
        },
        responsibleSupplyChainsAndSectorSchemes: {
          title: "Responsible Supply Chains And Sector Readiness",
          intro:
            "Sector programmes and buyer expectations now hinge on traceability, sourcing claims, responsible production, and documentation discipline. This group supports readiness assessments and technical review across industries.",
        },
        esgAndReportingAssurance: {
          title: "ESG And Reporting Assurance",
          intro:
            "The reliability of corporate sustainability data is now essential not only for reporting, but also for investor expectations, customer requirements, financing processes, and governance maturity. This group provides assurance-oriented support for ESG data, sustainability KPIs, and non-financial reporting structures.",
        },
      },
      cardCta: "Details",
      whyIndependent: {
        title: "Why Independent Assurance Discipline Matters",
        items: [
          {
            title: "Stakeholder-Grade Credibility",
            description:
              "Deliverables are structured with the clarity and discipline that regulators, buyers, finance teams, and technical reviewers expect from assurance work.",
          },
          {
            title: "A Stronger Disclosure Frame",
            description:
              "The review sharpens scope, method, data logic, and language—creating a more defensible basis for external use.",
          },
          {
            title: "Traceability And Control",
            description:
              "Evidence-led testing surfaces weak links from source records through calculations to reported outcomes.",
          },
          {
            title: "Readiness For The Next Assurance Step",
            description:
              "Priority themes are addressed early—reducing late surprises in verification, limited assurance, or stakeholder review cycles.",
          },
        ],
      },
      howWeWork: {
        title: "How we work",
        intro:
          "A concise pathway overview—the Verification Process page describes the full methodology, roles and impartiality safeguards.",
        steps: [
          {
            title: "Scope and risk alignment",
            description:
              "Boundaries, standards, reporting period and intended use are confirmed so depth matches your disclosure context and stakeholder risk.",
          },
          {
            title: "Technical workplan",
            description:
              "Sampling logic, evidence expectations and milestones are agreed before detailed testing—so effort tracks materiality.",
          },
          {
            title: "Evidence-led review",
            description:
              "Structured examination of records, calculations and governance—traceable from evidence to reported numbers and statements.",
          },
          {
            title: "Independent technical judgement",
            description:
              "Impartial assessment of findings, limitations and wording—the core of defensible conclusions.",
          },
          {
            title: "Controlled outputs",
            description:
              "Findings register, closure, and—where in scope—verification or review outputs aligned to the agreed assurance objective.",
          },
        ],
      },
      listingRecoverableError: {
        title: "Service catalogue could not be displayed",
        body:
          "We could not render verification service groups from the current registry data. The site shell is working—please refresh the page. If this persists, contact us so we can review the service configuration.",
      },
    },
    serviceDetails: {
      "iso-14064-1": {
        heroEyebrow: "Corporate inventory verification",
        title: "ISO 14064-1 — Corporate Greenhouse Gas Verification",
        intro:
          "The credibility of a corporate greenhouse gas inventory rests not only on the numbers reported, but on how organisational boundaries are drawn, how methodology is applied consistently, how data trace back to source, and how appropriate the emission factors are. Meva Global provides independent, structured technical verification for greenhouse gas statements prepared under ISO 14064-1. Reporting boundaries, calculation logic, data flows, and supporting evidence are reviewed in a disciplined way—strengthening the reliability of information shared with regulators, customers, investors, and other external audiences.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Organisational boundaries, operational control approach, consolidation, reporting period, and inventory scope from a technical perspective",
            "Scope 1 and 2 quantification as the core; selected Scope 3 categories where context and data architecture justify inclusion",
            "Going beyond validating figures—strengthening methodological coherence and the evidence architecture behind the statement",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations publishing corporate inventories across sustainability, finance, and regulatory reporting cycles",
            "Teams that must explain carbon performance credibly to customers, investors, and supply-chain partners",
            "Leadership seeking stronger data standardisation and internal controls across multi-site or multi-country structures",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Data infrastructure, calculation tools, emission factors, and activity sources; documentation trails and internal controls as one system",
            "Sampling, recalculation, record matching, and evidence testing where appropriate",
            "Not only the total emissions figure, but how it was produced and how convincingly it can be supported",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Corporate GHG data now drives sustainability reporting and high-stakes conversations with customers, finance, and the public—raising stakeholder risk",
            "Disciplined verification increases confidence in reported emissions and strengthens control design",
            "A clearer basis for improvement plans, base-year structuring, and long-term reporting maturity",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Evidence-led technical review, traceable records, and independent decision discipline—not a checklist exercise",
            "Surfacing where the statement is strong, where clarification is needed, and what will materially improve reliability",
            "A stronger disclosure position for the current cycle and a more mature GHG management foundation for what follows",
          ],
        },
        cta: {
          title: "",
          body: "Share your organisational boundaries, reporting year, and current inventory architecture—we will align review depth and verification strategy with how you report to the outside world.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "iso-14064-2": {
        heroEyebrow: "Project-level GHG verification",
        title: "ISO 14064-2 — Project Greenhouse Gas Verification",
        intro:
          "The credibility of project-level greenhouse gas statements rests not only on reported reduction or removal volumes, but on baseline robustness, clear project boundaries, consistent quantification, and a monitoring system capable of producing traceable evidence. Meva Global provides independent, structured technical verification for project statements prepared under ISO 14064-2. Project logic, monitoring design, calculation methodology, and supporting records are assessed in a systematic way—strengthening both the reliability and the defensibility of the figures you report.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Project boundaries, baseline design, reduction or removal logic, quantification method, reporting period, and technical assumptions",
            "Monitoring plan, data sources, calculation structure, and the parameters that drive outcomes—reviewed as one integrated system",
            "Clarifying the technical basis behind the result and the extent to which traceable evidence supports it",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Project owners and developers preparing for carbon-credit programmes or formal project registries",
            "Teams that must defend project outcomes to financiers, partners, and external reviewers",
            "Operations that want stronger monitoring discipline and reporting maturity across project cycles",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Baseline plausibility, activity definition, data flow, monitoring controls, calculation logic, assumptions, and document trail—together",
            "Sampling, recalculation, data matching, and evidence testing where appropriate",
            "The final outcome and the coherence of production, monitoring, and substantiation",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Project statements increasingly matter for programmes, stakeholder reporting, finance, and carbon-market readiness",
            "Disciplined verification increases confidence, surfaces methodological gaps, and reduces decision risk",
            "Stronger data quality, monitoring discipline, and maturity over successive reporting periods",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Methodology-led technical assessment, traceable evidence architecture, and independent decision discipline",
            "Not only the reported figure—baseline suitability, monitoring reliability, data-flow clarity, and assumption consistency",
            "Current statements on a stronger footing and a more robust monitoring foundation for the cycles ahead",
          ],
        },
        cta: {
          title: "",
          body: "Share your baseline scenario, monitoring plan, and reporting period—we will align verification scope and evidence expectations with the specifics of your project.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "iso-14067": {
        heroEyebrow: "Product carbon assurance",
        title: "ISO 14067 — Product Carbon Footprint (PCF) Verification",
        intro:
          "A product carbon footprint should read as one coherent story—not a single figure pulled out of context. How you define the unit and boundaries, make allocation choices, source activity data, align emission factors with the calculation path, and translate results into customer-ready language determines whether the PCF holds up in procurement conversations. Meva Global provides independent verification for ISO 14067–aligned work, reviewing the model, the evidence trail, and the disclosure layer together so your product-level narrative stays clear and defensible under buyer and stakeholder scrutiny.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Functional unit, system boundaries, allocation principles, and what is explicitly excluded",
            "Activity data, background datasets, assumptions, and how data quality is structured",
            "Consistency between calculated outputs, tables, narrative text, and footnotes",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturing and sustainability teams responding to supplier assessments and customer questionnaires",
            "Brands that want a single, repeatable PCF logic across a product portfolio",
            "Organizations aligning sales, marketing, and technical documentation around one product carbon storyline",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Coherence of life-cycle boundaries, data-heavy stages, and hotspots in the model",
            "Sampling and recalculation to test links between activity data, factors, and methods",
            "Whether public summaries and tables remain faithful to the underlying assumptions",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Makes the reasoning behind catalogue and sourcing decisions easier to explain and defend",
            "Tightens grey zones that invite misinterpretation and sharp technical questioning",
            "Strengthens the groundwork for expanding environmental claims and product-level reporting",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "We treat the PCF as a chain—boundary, data line, and evidence—rather than a checklist of parts",
            "We focus on traceability and narrative integrity, not only the headline row in the results table",
            "We articulate findings in a controlled way that matches your scope and intended use",
          ],
        },
        cta: {
          title: "",
          body: "Share your PCF summary, data sources, and the disclosure format you plan to use; together we can shape review depth and verification strategy around your product and market context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "iso-14046": {
        heroEyebrow: "Water footprint assurance",
        title: "ISO 14046 — Water Footprint Verification",
        intro:
          "The reliability of water footprint studies depends not only on the final calculated result, but also on the clarity of system boundaries, the appropriateness of data sources, the conformity of methodology with the standard, the robustness of water-use and water-impact data structures, and the traceability of the disclosure framework. Meva Global provides an independent and structured technical verification approach for water footprint studies and related disclosures prepared in line with ISO 14046. This service creates a more reliable and more professional basis for buyer expectations and external use through the systematic review of quantification logic, data flow, assumptions, calculation structure, and supporting evidence.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Scope and system boundaries of the water footprint study in product, process, or organisational context",
            "Technical assessment of data sources, methodological approach, assumptions, and calculation structure",
            "Review of disclosure language, result structure, and supporting evidence for suitability for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturers seeking to present water footprint data more credibly to external stakeholders",
            "Teams strengthening water-impact data for customer, investor, or technical file expectations",
            "Organisations seeking more rigorous environmental claims at product or process level",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of system boundaries, data flow, and water footprint methodology",
            "Sampling on activity data, characterisation factors, and assumptions",
            "Review of results tables and external disclosure framing for methodological consistency",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens reliability and traceability of water footprint data",
            "Reduces methodological ambiguity and disclosure risk",
            "Builds a stronger foundation for environmental claims, supply-chain assessment, and export-focused technical files",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent technical verification addressing system boundaries, data structure, and supporting records together",
            "Review discipline focusing on methodology, data trail, and disclosure credibility beyond headline results",
            "Professional structure that strengthens current water footprint disclosures and prepares for subsequent cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your study's system boundaries, data structure, and current disclosure framework; together we can clarify verification scope aligned to your intended use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "lca-review": {
        heroEyebrow: "Services",
        title: "LCA Technical Review",
        intro:
          "The reliability of life cycle assessment studies depends not only on the final results table, but also on the clarity of goal and scope definition, the appropriateness of the functional unit, the suitability of system boundaries, the quality of data sources, the consistency of modelling choices, and the correctness of result interpretation. Meva Global provides an independent and structured technical review approach for LCA studies and related environmental disclosures. This service creates a more reliable, more controlled, and more professional basis for external use through the systematic review of methodological framework, data flow, assumptions, modelling logic, and supporting evidence.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Technical assessment of goal-and-scope definition, functional unit, and system boundaries",
            "Review of data sources, modelling choices, allocation approach, and methodological assumptions",
            "Examination of results structure, interpretation section, and disclosure framing intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations seeking to place environmental claims on a stronger methodological foundation",
            "Teams using LCA for product comparisons, technical files, or sustainability disclosures",
            "Manufacturers raising LCA quality for EPD, product environmental assertions, or corporate decision processes",
          ],
        },
        typicalScope: {
          title: "Technical Review Scope",
          bullets: [
            "Plausibility assessment of goal-and-scope design, data flow, and modelling logic",
            "Sampling across critical datasets, assumptions, allocation approach, and result structure",
            "Technical checks on interpretation, communication language, and external-use risk",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens reliability, consistency, and traceability of LCA results",
            "Reduces methodological ambiguity and disclosure risk",
            "Builds a stronger foundation for EPD, environmental claims, and product-level sustainability statements",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent technical review treating methodology, data structure, and modelling choices as one coherent system",
            "Review discipline focused on scope, data trail, and interpretation quality—not only headline tables",
            "Professional structure that strengthens existing LCA work and supports future environmental reporting cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your LCA’s goal-and-scope structure, datasets, and current modelling framework; together we can clarify technical review scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "epd-verification": {
        heroEyebrow: "Services",
        title: "EPD Verification",
        intro:
          "The credibility of Environmental Product Declarations depends not only on the published results tables, but also on conformity with PCR and programme rules, the quality of data sources, the consistency of modelling choices, the clarity of declared scope, and the traceability of supporting evidence. Meva Global provides an independent and structured verification approach for EPD studies and related disclosures. This service creates a more reliable, more controlled, and more professional publication basis through the systematic review of methodological framework, data flow, reporting structure, and supporting records.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of alignment with PCR and programme rules, declared scope, and the reporting framework",
            "Review of datasets, modelling choices, assumptions, and the structure of supporting documentation",
            "Verification-oriented review of publication-critical technical content, methodological consistency, and declaration structure",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturers preparing EPD publication who want more credible technical dossiers",
            "Organisations responding to green procurement, environmental product information, and external stakeholder expectations",
            "Teams pursuing methodological consistency and disciplined publication for product environmental disclosures",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "PCR conformity, system boundaries, and plausibility across declared indicators",
            "Sampling of critical inputs, data sources, modelling approach, and calculation structure",
            "Pre-release verification checks on technical consistency, explanatory language, and the evidence file",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Prepares EPD documentation more credibly for publication and external stakeholder scrutiny",
            "Reduces methodological ambiguity and buyer or stakeholder challenge risk",
            "Builds a stronger basis for subsequent updates, product variations, and environmental disclosure processes",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification that treats programme rules, data architecture, and supporting evidence as one integrated review",
            "A discipline that moves beyond the results table to methodology, traceability, and declaration reliability",
            "Professional structure that strengthens existing EPD work and brings more control to the publication path",
          ],
        },
        cta: {
          title: "",
          body: "Share your PCR, declared scope, and current EPD model; together we can define verification scope suited to your publication context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "recycled-content-verification": {
        heroEyebrow: "Services",
        title: "Recycled Content Verification",
        intro:
          "The credibility of recycled content claims depends not only on the declared percentage, but also on the correctness of the mass-balance approach, the discipline of chain-of-custody traceability, the adequacy of data sources, the traceability of supporting evidence, and the controlled use of disclosure language. Meva Global provides an independent and structured verification approach for recycled content percentages and related claims. This service creates a more reliable, more controlled, and more professional basis for external disclosures through the systematic review of data flow, mass-balance logic, documentation structure, and supporting claim framework.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of how the recycled content rate is derived, system boundaries, and monitoring design",
            "Review of mass-balance logic, supplier inputs, material flows, and supporting records",
            "Verification-oriented examination of disclosure language, scope definition, and the claim framework intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturers that want to present recycled content rates to external stakeholders with greater credibility",
            "Teams strengthening material, packaging, or product-level content claims",
            "Organisations building chain-of-custody discipline, supplier data structures, and controlled disclosure practice",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of mass-balance logic, system boundaries, and chain-of-custody structure",
            "Sampling across supplier records, material inputs, calculation architecture, and supporting documentation",
            "Pre-release verification checks on wording for external-facing content claims and the evidence file",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility and traceability of recycled content claims",
            "Reduces misinterpretation, challenge, and disclosure risk",
            "Builds a stronger foundation for buyer expectations, sustainability communications, and product messaging",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification that treats mass balance, data architecture, and supporting evidence as one integrated review",
            "A discipline that looks beyond the headline percentage to the documentation and monitoring backbone behind the figure",
            "Professional structure that strengthens existing content claims and helps organisations institutionalise more controlled systems over time",
          ],
        },
        cta: {
          title: "",
          body: "Share your current content claim, mass-balance structure, and supporting records; together we can clarify verification scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "bio-based-content-verification": {
        heroEyebrow: "Services",
        title: "Bio-based Content Verification",
        intro:
          "The credibility of bio-based content claims depends not only on the declared share, but also on the suitability of the methodology used, the adequacy of supplier evidence, the clarity of system boundaries, the traceability of data sources, and the controlled use of disclosure language for external communication. Meva Global provides an independent and structured verification approach for bio-based content percentages and related claims. This service creates a more reliable, more controlled, and more professional basis for external disclosures through the systematic review of data structure, methodological choices, supporting evidence, and claim framework.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of how the bio-based content percentage is determined, including system boundaries and data architecture",
            "Review of supplier statements, supporting documentation, calculation approach, and methodological basis",
            "Verification-oriented review of disclosure language, scope definition, and the claim framework intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturers that want to present bio-based content percentages to external stakeholders with greater credibility",
            "Teams strengthening bio-based content claims at product, packaging, or material level",
            "Organizations building supplier evidence, methodology discipline, and controlled claim language",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of methodological approach, system boundaries, and data structure",
            "Sampling across supplier records, content calculations, and supporting documentation",
            "Verification checks on disclosure language and evidence files for externally oriented bio-based content claims",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility and traceability of bio-based content claims",
            "Reduces the risk of misinterpretation, challenge, and disclosure exposure",
            "Builds a stronger foundation for buyer expectations, sustainability statements, and product communication",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification that treats methodology, data architecture, and supporting evidence as one system",
            "A review discipline focused not only on the declared share, but on the documentation and calculation structure behind it",
            "A professional structure that strengthens existing bio-based content claims and supports more controlled systems over time",
          ],
        },
        cta: {
          title: "",
          body: "Share your current bio-based content claim, methodological framework, and supporting records; together we can clarify verification scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "asi-readiness-review": {
        heroEyebrow: "Services",
        title: "ASI (Aluminium Stewardship Initiative) Verification Review",
        intro:
          "The credibility of ASI-related claims and readiness files across the aluminium value chain depends not only on the existence of documents, but also on the consistency of evidence structures, the clarity of alignment with relevant criteria, the discipline of documentation, and the use of defensible disclosure language. Meva Global provides an independent and structured verification review for readiness and technical assessment processes related to the ASI framework. This service creates a more reliable, more controlled, and more professional readiness basis through the systematic review of existing records, operational evidence, supply-chain linkages, and criteria-based file structures. It does not replace a formal ASI certification decision or scheme-owner verification, but it helps organisations prepare with a stronger and more disciplined technical foundation.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of ASI-related criteria sets, documentation structure, and evidence integrity",
            "Mapping of records at site, corporate, and supply-chain levels to relevant expectations",
            "Verification review of claim language, scope definition, and external-use readiness framing",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Aluminium producers seeking to enter the ASI process with stronger, better organised technical files",
            "Sustainability teams in multi-site structures aiming to strengthen evidence discipline and criteria alignment",
            "Organisations that want to place supply chain, traceability, and responsible production narratives on a more controlled footing",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Current-state analysis against criteria, evidence matching, and plausibility assessment of documentation structure",
            "Sampling across site records, policy sets, supply-chain data, and supporting documents",
            "Technical review of the readiness file for clarity, consistency, and fitness for external scrutiny",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility of ASI readiness files and readiness for review",
            "Reduces the risk of missing evidence, fragmented records, and criteria misalignment",
            "Creates a stronger basis for buyer expectations, sustainability statements, and responsible supply-chain communication",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses criteria, evidence structure, and operational records together",
            "Assessment discipline focused not only on document presence, but on how documents are linked to relevant ASI expectations",
            "Professional structure that strengthens current readiness levels and supports subsequent evaluation cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your current ASI readiness file and policy and record sets; together we can clarify a verification review scope suited to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "fsc-pefc-eudr-readiness": {
        heroEyebrow: "Services",
        title: "FSC / PEFC / EUDR Readiness and Documentation Verification Review",
        intro:
          "The credibility of claims and readiness files related to FSC, PEFC, and EUDR depends not only on the presence of documents, but also on the consistency of chain-of-custody structure, the clarity of due diligence approach, the traceability of supply-chain records, and the controlled use of disclosure language for external communication. Meva Global provides an independent and structured verification review for readiness and technical assessment processes related to the FSC / PEFC / EUDR frameworks. This service creates a more reliable, more controlled, and more professional readiness basis through the systematic review of existing records, supplier documentation, traceability architecture, and criterion-based file structure.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of chain-of-custody records, due diligence files, and existing documentation structure",
            "Review of supplier declarations, sourcing information, supporting documents, and traceability flow",
            "Verification-oriented review of the disclosure framework and readiness file intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturers and exporters seeking stronger technical files for FSC / PEFC / EUDR-related processes",
            "Sustainability teams aiming to strengthen supply-chain traceability and evidence discipline",
            "Organisations that want to place sourcing claims and regulatory readiness on a more controlled footing",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of chain-of-custody structure, sourcing information, and existing record architecture",
            "Sampling across supplier documents, due diligence packages, and supporting records",
            "Technical review of the readiness file for clarity, consistency, and evidence strength for external scrutiny",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility of readiness files and preparedness for external review",
            "Reduces objection risk from missing records, weak traceability, and disclosure gaps",
            "Builds a stronger foundation for buyer expectations, export dossiers, and supply-chain communication",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses chain-of-custody, sourcing documentation, and documentation logic together",
            "Assessment discipline focused not only on file presence, but on how files are linked to relevant frameworks",
            "Professional structure that strengthens current readiness levels and supports subsequent evaluation cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your current FSC / PEFC / EUDR readiness files, supplier records, and traceability architecture; together we can clarify verification scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "gri-esrs-data-assurance": {
        heroEyebrow: "Services",
        title: "GRI / ESRS Data Verification",
        intro:
          "The credibility of sustainability data associated with GRI and ESRS depends not only on published indicators, but also on the consistency of indicator definitions, the clarity of data sources, the adequacy of control points, the traceability of calculation logic, and the alignment of the disclosure framework with standard expectations. Meva Global provides an independent and structured verification review for sustainability data within the GRI / ESRS scope. This service creates a more reliable, more controlled, and more professional disclosure basis through the systematic assessment of data flows, indicator logic, supporting evidence, and the reporting framework.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of indicator definitions, data sources, and reporting structure within the GRI / ESRS scope",
            "Review of calculation logic, supporting datasets, control points, and the disclosure framework",
            "Verification-oriented review of sustainability data intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations seeking to strengthen the credibility of data published under GRI or ESRS",
            "Teams aiming to reinforce indicator logic and evidence structure in sustainability reports",
            "Companies seeking to improve data quality, internal control, and reporting maturity",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of indicator definitions, data flow, and disclosure alignment",
            "Sampling across source data, supporting records, calculation structure, and control points",
            "Verification controls on disclosure language and evidence files for externally oriented sustainability data",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility and traceability of GRI / ESRS data",
            "Reduces the risk of misinterpretation, data inconsistency, and disclosure exposure",
            "Creates a more defensible reporting basis for investors, buyers, and stakeholders",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses indicator logic, data sources, and supporting evidence together",
            "Review discipline focused not only on the headline figure, but on the data and control structure behind it",
            "Professional approach that strengthens the organisation’s current sustainability data architecture",
          ],
        },
        cta: {
          title: "",
          body: "Share your GRI / ESRS data sets, indicator definitions, and supporting records; together we can clarify verification scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "sustainability-kpi-evidence-review": {
        heroEyebrow: "Services",
        title: "Sustainability KPI Evidence Verification",
        intro:
          "The reliability of sustainability KPIs depends not only on published figures, but also on the clarity of KPI definitions, the appropriateness of data sources, the consistency of calculation logic, the adequacy of supporting evidence structures, and internal reporting discipline. Meva Global provides an independent and structured verification review for the data and evidence that underpin sustainability KPIs. This service creates a more reliable and more professional disclosure basis through the systematic assessment of KPI definitions, data flows, source documents, and supporting explanations.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of KPI definitions, data sources, and calculation logic",
            "Review of source documents, data trails, control points, and reporting structure",
            "Verification-oriented review of KPI disclosures intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations that want to present sustainability KPIs to external stakeholders with greater credibility",
            "Teams seeking to strengthen the link between KPI definitions and source data",
            "Companies aiming to raise data discipline for management reports, sustainability communications, and investor relations",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of KPI definition, data flow, and calculation logic",
            "Sampling across source data, supporting documents, and control points",
            "Verification controls on disclosure language and evidence files for externally oriented KPI communications",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility and defensibility of KPIs",
            "Reduces data inconsistency, misinterpretation, and disclosure risk",
            "Builds a stronger foundation for management, investor, and stakeholder communication",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses KPI definitions, data sources, and supporting evidence together",
            "Assessment discipline focused not only on the headline figure, but on the data and trail structure behind it",
            "Professional approach that strengthens KPI data architecture and reporting maturity",
          ],
        },
        cta: {
          title: "",
          body: "Share your KPI definitions, source data sets, and supporting documents; together we can clarify verification scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "limited-assurance-readiness": {
        heroEyebrow: "Services",
        title: "Limited Assurance Readiness Review",
        intro:
          "The quality of preparation for limited assurance processes depends not only on the presence of data to be reported, but also on the adequacy of the control environment, the organisation of evidence structures, the traceability of source records, clarity of process ownership, and a disclosure framework established in a controlled manner. Meva Global provides an independent and structured technical review aimed at readiness for limited assurance verification. This service creates a more controlled and more professional preparation basis through the systematic assessment of the current data and control structure, supporting documents, accountability flows, and pre-verification readiness. It does not replace the assurance engagement or imply a formal limited assurance conclusion.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of data, control, and evidence structure ahead of limited assurance",
            "Review of process ownership, source records, documentation discipline, and reporting flow",
            "Examination of pre-verification readiness and the disclosure framework",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations that want to enter limited assurance processes with stronger, more disciplined preparation",
            "Teams that want to see gaps in data, control, and evidence structures in advance",
            "Sustainability and reporting teams seeking to strengthen internal preparation before verification",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of control environment, data flow, and evidence structure",
            "Sampling across source data, supporting documents, and process ownership",
            "Technical review of critical gaps and improvement areas before entering the limited assurance process",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens pre-verification readiness",
            "Reduces risks from missing evidence, weak controls, and fragmented processes",
            "Supports a more controlled, predictable, and efficient path through the assurance process",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent preparation review that addresses data, controls, and supporting evidence together",
            "Assessment discipline focused not only on the final disclosure, but on the process infrastructure that supports it",
            "Professional approach that strengthens organisational assurance readiness",
          ],
        },
        cta: {
          title: "",
          body: "Share your current reporting structure, control points, and supporting documents; together we can clarify the scope of preparation ahead of limited assurance, matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "non-financial-data-control-review": {
        heroEyebrow: "Services",
        title: "Non-financial Data Control Verification",
        intro:
          "The reliability of non-financial data depends not only on the metrics disclosed, but also on the consistency of data definitions, the adequacy of control mechanisms, sampling discipline, traceability of source records, and the controlled establishment of the disclosure structure. Meva Global provides an independent and structured verification review for non-financial data controls. Through the systematic assessment of data definitions, control points, supporting records, and the disclosure framework, this service establishes a more reliable and more professional reporting foundation.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of data definitions, control points, and source record structure for non-financial metrics",
            "Review of sampling approach, supporting documentation, and the disclosure framework",
            "Examination of externally oriented data controls from a verification perspective",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations that want to manage and explain non-financial data more reliably",
            "Reporting teams seeking to strengthen control mechanisms and data discipline",
            "Companies aiming to improve consistency across sustainability, ESG, or operational data structures",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment across data definition, control flow, and sampling discipline",
            "Sampling on source records, supporting documents, and data entry points",
            "Verification checks on disclosure language and control structure for externally oriented non-financial disclosures",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens reliability and traceability of non-financial data",
            "Reduces challenges arising from definition inconsistency, weak controls, and disclosure risk",
            "Creates a stronger foundation for corporate reporting, stakeholder communication, and assurance preparation",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses data definitions, control mechanisms, and supporting records together",
            "Assessment discipline focused not only on the disclosed metric, but on the data and control structure that support that outcome",
            "Professional approach that strengthens organisations’ non-financial data architecture",
          ],
        },
        cta: {
          title: "",
          body: "Share your current non-financial data sets, control points, and supporting records; together we can clarify verification scope appropriate to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "indoor-air-quality-voc-review": {
        heroEyebrow: "Services",
        title: "Indoor Air Quality and VOC Verification Review",
        intro:
          "The credibility of indoor air quality and VOC emissions claims depends not only on the reported test result, but also on the appropriateness of the test scope, conformity with the relevant standard, the accuracy of product and sample definition, the traceability of laboratory data, and the way results are translated into external disclosures. Meva Global provides an independent and structured verification review for indoor air quality and VOC emissions data. This service creates a more reliable, more controlled, and more professional disclosure basis through the systematic review of test reports, technical data flow, disclosure language, and supporting evidence.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of VOC emissions data, test scope, product definition, and conformity with the applicable standard",
            "Review of laboratory reports, technical documentation, sample information, and supporting records",
            "Review of disclosure language, limitations of use, and the claim framework presented to external stakeholders",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Manufacturers that want to present interior products to export markets with stronger technical dossiers",
            "Teams positioning VOC data for building materials, surface coatings, furniture, or comparable products on a verification-led basis",
            "Organisations that want technical test results supported by controlled disclosure language",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment across test reports, measurement scope, and product definition",
            "Sampling across laboratory data, sample traceability, technical records, and supporting documents",
            "Controls on disclosure language and technical consistency for externally oriented VOC and indoor air quality claims",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility of indoor air quality and VOC-related disclosures",
            "Reduces the risk of misinterpretation, technical challenge, and disclosure exposure",
            "Builds a stronger foundation for export dossiers, project specifications, and product communication",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that treats technical test data, documentation structure, and disclosure language as one system",
            "A review discipline focused not only on the reported result, but on the test and evidence structure behind it",
            "A professional structure that strengthens existing indoor air quality disclosures and supports subsequent technical claim cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your current VOC test reports, product definition, and disclosure framework; together we can clarify verification scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "cbam-verification-support": {
        title: "CBAM Emissions Verification",
        intro:
          "The reliability of emissions data used in the CBAM context depends not only on the reported result, but also on the clarity of system boundaries, the appropriateness of data sources, the traceability of supplier inputs, the consistency of calculation logic, and the quality of supporting documentation. Meva Global provides an independent, structured technical verification approach for emissions data and related disclosures prepared for CBAM-related reporting. Through systematic assessment of data flow, methodological choices, reporting logic, and evidence structure, this service creates a more reliable, more controlled, and more professional basis for external disclosure.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Reporting boundaries, product and facility context, and the methodological approach applied",
            "Supplier data, activity data, emission factors, and the supporting record architecture",
            "Disclosure language, data trail, and the technical basis intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Exporters that want to present CBAM-related emissions data with greater credibility",
            "Manufacturers exercising tighter control over supplier inputs and embedded emissions data",
            "Teams strengthening data and documentation structures before stakeholder-facing disclosures",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of system boundaries, data flow, and calculation logic",
            "Sampling across supplier inputs, emission factors, and supporting documentation",
            "Technical checks on the suitability of reported results for external use and on disclosure risk",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the reliability and traceability of emissions data used in the CBAM context",
            "Reduces methodological ambiguity and disclosure risk",
            "Builds a more controlled data foundation in the face of supply-chain, buyer, and regulatory expectations",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent technical verification that treats methodology, data architecture, and evidence files as one system",
            "A review discipline focused on data lineage, traceability, and disclosure credibility—not only the headline figures",
            "A professional structure that strengthens your current CBAM data position and prepares you for subsequent reporting cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your CBAM data architecture, supplier inputs, and current emissions calculation framework; together we can align verification scope with your intended use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "eu-ets-verification-review": {
        heroEyebrow: "Services",
        title: "EU ETS Emissions Verification Review",
        intro:
          "The reliability of emissions data under the EU ETS depends not only on reported totals, but also on the accuracy of installation boundaries, consistency of the monitoring approach, traceability of activity data, clarity of calculation logic, and the adequacy of supporting evidence. Meva Global provides an independent and structured verification review for EU ETS-related emissions data and preparation files. Through systematic assessment of data flows, monitoring plan logic, installation-level records, and the disclosure framework, this service establishes a more reliable, more controlled, and more professional preparation basis. It does not replace a formal verification opinion; it helps organisations enter subsequent processes with stronger technical infrastructure.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of EU ETS-related emissions data, installation boundaries, and monitoring approach",
            "Review of activity data, emission factors, calculation logic, and supporting record structures",
            "Verification-oriented examination of preparation files intended for external use or formal review",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Installations that want to present EU ETS emissions data more reliably and in a more disciplined way",
            "Sustainability and environmental teams seeking to strengthen monitoring plans, data flows, and evidence structures",
            "Organisations aiming to raise technical readiness ahead of formal verification or regulatory scrutiny",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment across installation boundaries, monitoring logic, and data flow",
            "Sampling on activity data, calculation structure, supporting records, and emission inputs",
            "Technical review of the emissions file for clarity, consistency, and evidence strength ahead of external review",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens credibility and defensibility of EU ETS-related emissions disclosures",
            "Reduces risk from incomplete records, weak monitoring logic, and data inconsistency",
            "Raises pre-verification readiness and internal control maturity",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses installation data, monitoring logic, and supporting records together",
            "Assessment discipline focused not only on the headline emission figure, but on the data and process structure behind it",
            "Professional approach that strengthens your current emissions data architecture and supports subsequent formal processes",
          ],
        },
        cta: {
          title: "",
          body: "Share your current EU ETS data sets, monitoring plan, and supporting records; together we can clarify verification review scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "f-gases-verification-review": {
        heroEyebrow: "Services",
        title: "F-Gases Verification Review",
        intro:
          "The reliability of records and declarations related to F-gases depends not only on equipment lists, but also on the accuracy of gas type and quantity data, traceability of service and leak records, consistency of reporting logic, and adequacy of supporting evidence. Meva Global provides an independent and structured verification review for F-gas-related data and preparation files. Through systematic assessment of equipment records, maintenance and service trails, gas movements, and the disclosure framework, this service establishes a more reliable, more controlled, and more professional preparation basis.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of F-gas-related equipment records, gas quantities, and reporting structure",
            "Review of service, maintenance, refill, recovery, and leak records",
            "Verification-oriented examination of preparation files intended for external use or formal review",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations that want F-gas records to be more reliable and better organised",
            "Technical teams seeking to strengthen equipment inventory, service trails, and evidence structures",
            "Entities aiming to raise readiness ahead of formal control or compliance processes",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment across equipment inventory, gas records, and reporting logic",
            "Sampling on service records, technical documents, supporting files, and quantity data",
            "Technical review of the file intended for external review for clarity, consistency, and evidence strength",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens reliability and traceability of F-gas-related records",
            "Reduces issues arising from missing service trails, weak record structures, and declaration risk",
            "Creates a more orderly and more defensible data basis for technical teams and compliance workflows",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses equipment records, service trails, and supporting documents together",
            "Assessment discipline focused not only on reported quantities, but on the technical and operational trails that support those records",
            "Professional approach that strengthens your organisation’s existing F-gas data architecture",
          ],
        },
        cta: {
          title: "",
          body: "Share your current F-gas records, equipment inventory, and service documentation; together we can clarify verification review scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "maritime-mrv-verification-review": {
        heroEyebrow: "Services",
        title: "Maritime MRV Verification Review",
        intro:
          "The reliability of emissions and fuel data related to Maritime MRV depends not only on reported totals, but also on the accuracy of ship-level data flows, consistency of fuel consumption records, traceability of voyage information, clarity of monitoring logic, and adequacy of supporting evidence. Meva Global provides an independent and structured verification review for Maritime MRV-related data and preparation files. Through systematic assessment of ship-based records, fuel trails, voyage data, and the disclosure framework, this service establishes a more reliable, more controlled, and more professional preparation basis.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Assessment of Maritime MRV-related emissions, fuel consumption, and voyage records",
            "Review of monitoring approach, data sources, supporting documents, and the disclosure framework",
            "Verification-oriented examination of preparation files intended for external use or formal review",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Operators that want Maritime MRV data structures to be more reliable and better organised",
            "Technical teams seeking to strengthen ship-based records, fuel data, and monitoring logic",
            "Organisations aiming to raise readiness ahead of formal review or verification processes",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment across ship-level data flow, fuel consumption, and voyage records",
            "Sampling on supporting documents, source records, reporting logic, and calculation structure",
            "Technical review of the Maritime MRV file for clarity, consistency, and evidence strength ahead of external review",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens reliability and traceability of Maritime MRV-related data architecture",
            "Reduces issues arising from incomplete records, weak fuel trails, and disclosure risk",
            "Raises pre-verification readiness and data discipline",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent verification review that addresses ship-based records, fuel data, and supporting documents together",
            "Assessment discipline focused not only on the final reported figure, but on the data and operational trails that support it",
            "Professional approach that strengthens your organisation’s current Maritime MRV preparation level",
          ],
        },
        cta: {
          title: "",
          body: "Share your current Maritime MRV data sets, fuel records, and supporting documents; together we can clarify verification review scope matched to your use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "custom-verification": {
        title: "Custom and Second-Party Verification",
        intro:
          "Tailored independent verification and second‑party review models for non-standard scopes and buyer/stakeholder needs—focused on clarity, governance and controlled public-facing wording.",
        covers: {
          title: "What this covers",
          bullets: [
            "Custom scope definition, criteria and intended use",
            "Evidence-based technical assessment and sampling logic",
            "Decision pathway and statement format aligned to controlled external use",
          ],
        },
        forWho: {
          title: "Who it is for",
          bullets: [
            "Organizations requiring second-party or bespoke assurance",
            "Procurement and value chain programs with custom criteria",
            "Teams reviewing claims, methodologies and evidence packs",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Criteria definition and boundary confirmation",
            "Evidence mapping and plausibility checks",
            "Decision recommendation and statement/certificate issuance pathway",
          ],
        },
        whyMatters: {
          title: "Why it matters",
          bullets: [
            "Enables assurance where standards alone are not sufficient",
            "Improves transparency and defensibility for stakeholders",
            "Supports consistent decision-making across programs",
          ],
        },
        approach: {
          title: "How Meva approaches it",
          bullets: [
            "Structured governance for custom criteria and decisions",
            "Evidence-first review with traceable records",
            "Clear statement language aligned to scope and limitations",
          ],
        },
        cta: {
          title: "Define your custom scope",
          body: "Share your criteria, boundaries and intended use. We will propose an independent review model and timeline.",
        },
      },
      "iso-14064-3-review-support": {
        heroEyebrow: "Services",
        title: "ISO 14064-3 — Greenhouse Gas Verification And Validation Support",
        intro:
          "The reliability of greenhouse gas verification and validation processes depends not only on the final statement, but also on the clarity of review scope, the correct definition of criteria, the sufficiency of evidence structures, the appropriateness of process design, and the consistency of technical decision-making. Meva Global provides an independent and structured technical review approach for verification and validation processes carried out in the context of ISO 14064-3. This service helps establish a more reliable, more controlled, and more professional assurance framework through the systematic review of process design, evidence flows, evaluation logic, and supporting documentation.",
        covers: {
          title: "Service Scope",
          bullets: [
            "The purpose, scope, and applicable criteria for the verification or validation process",
            "Evidence structures, datasets, methodological basis, and boundaries of evaluation",
            "Technical soundness of process design, documentation discipline, and decision infrastructure",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organizations seeking a more controlled assurance structure for greenhouse gas statements",
            "Teams preparing for a verification or validation process",
            "Programme owners and project teams strengthening technical files, evidence chains, and process design",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Review of scope definition, criteria set, and process logic",
            "Sampling across evidence files, data flows, and technical evaluation structure",
            "Plausibility checks on findings, decision logic, and output framing",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the reliability and technical consistency of verification and validation processes",
            "Supports more controlled grounding of findings, decisions, and disclosure outputs",
            "Builds a stronger process foundation for subsequent review, statements, and external stakeholder communication",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent technical assessment that addresses process design, criteria, and evidence structures together",
            "Review discipline focused not only on outcomes, but on how decisions are produced",
            "A professional approach that helps make verification and validation practices stronger and more traceable",
          ],
        },
        cta: {
          title: "",
          body: "Share your current verification or validation process, criteria architecture, and evidence files; together we can clarify review scope aligned to your intended use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      "net-zero-sbti-technical-review": {
        heroEyebrow: "Services",
        title: "Net-Zero and SBTi Technical Verification",
        intro:
          "The credibility of net-zero roadmaps and SBTi-related target frameworks depends not only on the targets communicated, but also on the consistency of the transition pathway, the credibility of reduction logic, the clarity of scope definition, the adequacy of the supporting data structure, and the transparency of the evidence base. Meva Global provides an independent and structured technical verification approach for net-zero and SBTi-related target frameworks. This service creates a more reliable, more controlled, and more professional disclosure basis through the systematic review of target architecture, reduction pathways, data foundations, and supporting disclosure structures. It does not replace a formal target approval process, but it helps organisations strengthen their claims and readiness on a sounder technical foundation.",
        covers: {
          title: "Service Scope",
          bullets: [
            "Technical assessment of the transition pathway, target architecture, scope selection, and reduction logic",
            "Review of data foundations, methodological framework, assumptions, and supporting record structure",
            "Review of disclosure language, target expression, and the credibility framing intended for external use",
          ],
        },
        forWho: {
          title: "Who It Is For",
          bullets: [
            "Organisations seeking to present net-zero roadmaps on a more robust technical footing",
            "Teams strengthening SBTi-related target frameworks before communicating to internal and external stakeholders",
            "Sustainability, finance, and operations teams seeking more controlled transition plans, data architecture, and reduction logic",
          ],
        },
        typicalScope: {
          title: "Review Focus",
          bullets: [
            "Plausibility assessment of the target framework, scope definition, and reduction pathway",
            "Sampling across data foundations, assumptions, and technical support structure",
            "Technical checks on narrative text, target architecture, and external-use risk",
          ],
        },
        whyMatters: {
          title: "Why It Matters",
          bullets: [
            "Strengthens the credibility of net-zero and target-based climate disclosures",
            "Reduces methodological ambiguity and disclosure risk in target framing",
            "Builds a more controlled disclosure foundation against investor, buyer, and stakeholder expectations",
          ],
        },
        approach: {
          title: "The Meva Approach",
          bullets: [
            "Independent technical verification that addresses transition pathway, data structure, and supporting evidence together",
            "Review discipline focused not only on target wording, but on the technical basis used to establish it",
            "A professional structure that strengthens current net-zero and SBTi disclosures and prepares organisations for subsequent cycles",
          ],
        },
        cta: {
          title: "",
          body: "Share your transition pathway, target framework, and existing technical foundations; together we can clarify verification scope aligned to your intended use context.",
          primaryButton: "Request Proposal",
          secondaryButton: "Back to Services",
          detailLink: "Details",
        },
      },
      ...newServiceDetailsEn,
      ...serviceDetailsExtraEn,
    },
    cbam: {
      heroEyebrow: "CBAM",
      title: "CBAM Solutions",
      intro:
        "The Carbon Border Adjustment Mechanism tests emissions information at installation and process level—not only headline figures. We work with exporters and manufacturers through assurance-style technical review: sharpening scope, traceability, supplier evidence, plant-level calculation paths, and the structure of outward-facing CBAM packs. The intent is to strengthen data architecture and disclosure discipline before reporting cycles and external scrutiny. This is independent technical review support, not a regulatory approval and not a substitute for formal verification where that applies.",
      heroImageAlt:
        "Desk with CBAM technical documents, emissions charts, and port logistics context for carbon border reporting",
      sections: [
        {
          title: "Why reliable data anchors CBAM credibility",
          bullets: [
            "Expected disclosures are read against plant- and process-level records that substantiate totals—not against numbers alone",
            "Fragile traceability, vague boundaries, or opaque data flows erode confidence in CBAM-facing materials",
            "A coherent architecture agreed early reduces rework, reporting friction, and exposure to challenge later",
          ],
        },
        {
          title: "Typical reporting and evidence gaps",
          bullets: [
            "Misaligned system boundaries across sites, products, or reporting periods",
            "Allocation logic, factors, and calculation trails that are hard to reconstruct or defend",
            "Thin supplier substantiation, weak source documentation, and under-evidenced drivers",
          ],
        },
        {
          title: "Where the review concentrates",
          bullets: [
            "Technical read of scope, product-level data design, and installation-level calculation approach",
            "Targeted sampling across source data, supporting records, and critical inputs",
            "Consistency pass on the CBAM-facing pack for clarity, internal alignment, and defensibility",
          ],
        },
        {
          title: "Supplier data and installation-level scrutiny",
          bullets: [
            "Evidence matching and plausibility checks on material supplier inputs",
            "Plant-level review of activity data, process logic, and calculation chains",
            "Structured findings to close gaps ahead of submission, handover, or deeper assurance steps",
          ],
        },
        {
          title: "Meva’s assurance-led engagement model",
          bullets: [
            "Independent technical review posture aligned with how CBAM information is expected to read",
            "One discipline across evidence quality, data structures, and disclosure boundaries",
            "A professional scaffold that steadies today’s readiness work and later verification or update cycles",
          ],
        },
      ],
      cta: {
        title: "",
        body: "Share your current datasets, installation-level calculation design, and supplier evidence posture—we can align review depth with your reporting context and timeline.",
        primaryLabel: "Request Proposal",
        secondaryLabel: "Explore Services",
        tertiaryLabel: "Details",
      },
    },
    process: {
      accreditation: {
        eyebrow: "Independence • Technical Competence • Institutional Assurance",
        title: "Accreditation",
        status: "Accreditation preparations are underway",
        body:
          "MEVA Global Certification is strengthening its international accreditation infrastructure through disciplined work across quality management, methodological consistency, records discipline, impartiality safeguards, and technical competence. These preparations support service delivery that is more traceable, more consistent, and more strongly aligned with relevant standard expectations. Upon completion of the accreditation process, valid scope information and official documentation details will be published in this area.",
        heroImageAlt:
          "Structured verification process review with professional documentation, checklist, and process flow context",
      },
      accreditationPageNav: {
        navAriaLabel: "Accreditation page sections",
        accreditation: "Accreditation",
        verificationProcess: "Verification Process",
        documents: "Documents",
      },
      corporateDocumentsSection: {
        title: "Documents",
        intro:
          "Published core corporate documents of MEVA Global Certification related to validation, verification, impartiality, confidentiality, and rules of use.",
        labels: {
          publicationStatus: "Publication status",
          firstPublished: "First published",
          documentLanguage: "Language",
          view: "Open document",
          download: "Download",
        },
        publicationStatusFirst: "First publication",
        languageValue: "EN · TR · NL",
      },
      verification: {
        title: "Verification Process",
        body:
          "Each engagement is carried out through a structured review pathway designed to keep scope clearly defined, evidence traceable, and technical decisions fully defensible. The process advances under defined roles, appropriate methodology, and impartiality safeguards.",
      },
      steps: [
        {
          title: "Initial Eligibility Review",
          description:
            "An initial technical suitability review is conducted against the request scope, applicable standards, and target timeline.",
        },
        {
          title: "Scope And Criteria Definition",
          description:
            "System boundaries, reference criteria, assumptions, intended use, and expected outputs are formally defined in writing.",
        },
        {
          title: "Document And Evidence Review",
          description:
            "The evidence package is reviewed systematically for completeness, consistency, audit trail integrity, and supporting records.",
        },
        {
          title: "Technical Verification Testing",
          description: "Sampling, recalculation, cross-checking, and reasonableness testing are applied to critical determinants.",
        },
        {
          title: "Site Visit And Interviews",
          description: "Where appropriate, operational flow, responsible personnel, and control points are reviewed on site.",
        },
        {
          title: "Independent Internal Technical Review",
          description:
            "The draft decision and statement are subjected to an independent internal technical review before final issuance.",
        },
        {
          title: "Statement Or Certificate Issuance",
          description:
            "A reference-numbered statement, verification output, or certificate is issued as applicable; limited public registry details may be published where relevant.",
        },
      ],
      cta: {
        eyebrow: "Independent Verification • Validation • Assurance",
        title: "Request A Structured Technical Review",
        body:
          "Share your scope, applicable standards, and target timeline. We will respond with a review approach aligned to your reporting context, clear evidence expectations, and well-defined next steps.",
        primaryLabel: "Request A Proposal",
        secondaryLabel: "Explore Services",
      },
    },
    statementSearch: {
      title: "Statement Lookup",
      intro:
        "Search published records issued through Meva Global’s independent verification, validation and assurance pathway. Displayed fields follow public-registry rules and programme boundaries.",
      note:
        "Registry content is limited to information released for transparency. It does not constitute legal advice or formal regulatory acceptance. Quote the reference number in correspondence.",
      fields: {
        statementNumber: "Reference no.",
        companyName: "Company Name",
        standard: "Standard",
        reportingYear: "Reporting Year",
      },
      placeholders: {
        statementNumber: "e.g., MG-VER-2026-001",
        companyName: "e.g., Company name",
      },
      labels: {
        status: "Status",
        verifiedValue: "Verified Value",
        office: "Office",
        schemeType: "Engagement type",
        clear: "Clear",
        resultsCount: "Records",
        issuedBy: "Issued by",
      },
      values: {
        status: {
          Active: "Active",
          Expired: "Expired",
          Withdrawn: "Withdrawn",
        },
        office: {
          Türkiye: "Türkiye",
          Netherlands: "Netherlands",
        },
        schemeType: {
          verification: "Verification",
          validation: "Validation",
          assurance: "Assurance",
        },
      },
      resultTitle: "Results",
      noResults: "No matching records under the current filters. Try adjusting your search criteria.",
      emptyState: {
        line1:
          "You may search published records using a reference number or relevant statement details.",
        line2: "Where no public record is available, you may contact us directly for further information.",
      },
    },
    documents: {
      title: "Resources",
      hero: {
        eyebrow: "Technical Knowledge • Methodology • Disclosure Governance",
        title: "Resources",
        body:
          "Structured technical notes for teams operating at the boundary of regulation and disclosure—covering CBAM, carbon verification, EPD and LCA critical review, and assurance readiness. The focus is defensible scope, traceable evidence, sound methodology choices, and the governance of metrics and claims intended for external use.",
        heroImageAlt:
          "Desk with technical standards references, binders, LCA materials, and analytical notes in a bright corporate office.",
      },
      sectionLabel: "Featured technical notes",
      cards: [
        {
          category: "CBAM",
          date: "2026-04-19",
          title: 'What Does “Reliable Emissions Data” Really Mean In CBAM Preparation?',
          body:
            "A concise framework for judging boundary discipline, evidence sufficiency, and data quality before CBAM-facing information is assembled for declaration.",
          cta: "View note",
          href: "/documents/cbam-reliable-emissions-data",
        },
        {
          category: "Carbon",
          date: "2026-04-19",
          title: "How To Align Scope, Methodology, And Stakeholder Expectations In Carbon Verification",
          body:
            "How traceable assumptions, explicit control points, and deliberate methodology choices translate into reporting that withstands technical scrutiny.",
          cta: "View note",
          href: "/documents/carbon-verification-alignment",
        },
        {
          category: "EPD / LCA",
          date: "2026-04-19",
          title: "Common Weak Points In EPD And LCA Critical Review",
          body:
            "Recurring review themes—PCR alignment, foreground traceability, allocation defensibility, scenario transparency, and consistency from model to report.",
          cta: "View note",
          href: "/documents/epd-lca-critical-weaknesses",
        },
        {
          category: "Assurance",
          date: "2026-04-19",
          title: "Why Assurance Level Selection Matters In Sustainability Claims",
          body:
            "Mapping limited and higher assurance to decision risk, reliance by third parties, and the depth of evidence implied by the assurance language you intend to use.",
          cta: "View note",
          href: "/documents/sustainability-assurance-levels",
        },
      ],
      bottomCta: {
        eyebrow: "Technical Review • Independent Approach",
        title: "Need A Deeper Technical Review On A Specific Topic?",
        body:
          "Share your reporting context, applicable standard, and how the information will be used externally—we can align review depth, evidence expectations, and next steps.",
        primary: "Contact Us",
        secondary: "Explore Services",
      },
      resourceArticles: documentsResourceArticlesEn,
    },
    insights: {
      title: "Insights",
      intro:
        "Short, technical notes on CBAM, carbon verification and assurance-ready reporting—focused on evidence, boundaries and disclosure discipline.",
      readMore: "Read more",
    },
    contact: {
      title: "Contact",
      intro:
        "Connect with the team that matches your enquiry. Share scope, standards and timing—or simply reach out—and we will respond with structured next steps for independent verification, validation or assurance. Typical reply time: one to two business days.",
      heroImageAlt:
        "Corporate desk with contact notebook, phone and Meva Certification materials in a bright office setting.",
      officesTitle: "Offices",
      formsTitle: "Enquiry",
      validation: {
        required: "Required",
        invalidEmail: "Invalid email",
        submitted: "Thank you. Your message has been received. We will get back to you shortly.",
      },
      contactForm: {
        title: "General enquiry",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
      },
      contactPlaceholders: {
        name: "e.g., Name Surname",
        email: "e.g., name@company.com",
        phone: "e.g., +90 5xx xxx xx xx",
        company: "e.g., Company legal name",
        message: "Share your scope, standards, reporting year and deadline.",
      },
      quoteForm: {
        title: "Request a quote",
        service: "Service Area",
        standard: "Standard / Scheme",
        reportingYear: "Reporting Year",
        details: "Scope Details",
      },
      quotePlaceholders: {
        standard: "e.g., ISO 14064-1, ISO 14067, CBAM",
        reportingYear: "e.g., 2025",
        details: "What needs to be reviewed, by when, and for which audience?",
        email: "e.g., name@company.com",
      },
      helper: {
        responseTime: "Typical response time: 1–2 business days.",
        privacyNote: "We treat enquiry details as confidential and use them only to scope the requested review.",
      },
      cta: {
        title: "Need a scoped proposal?",
        body: "Send your scope and deadline. We will propose a structured review pathway, evidence expectations and timeline—aligned to your intended statement use.",
        primaryLabel: "Request a quote",
        secondaryLabel: "Explore services",
      },
    },
  },
  serviceDetail: {
    backToServices: "Back to services",
    typicalUse: "Typical use cases",
    whatWeDo: "What we do",
    deliverables: "Deliverables",
  },
};

