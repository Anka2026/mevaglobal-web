import { standardServiceDetail } from "./serviceDetailStandardStub";

const sec = {
  covers: "What this covers",
  forWho: "Who it is for",
  typicalScope: "Review Focus",
  whyMatters: "Why it matters",
  approach: "How Meva approaches it",
};

export const newServiceDetailsEn = {
  "product-carbon-footprint-review": standardServiceDetail(
    "Product carbon footprint verification",
    "Structured verification of PCF models—hotspots, data lineage, and how figures are positioned in customer-facing materials; can align with ISO 14067 expectations where applicable, without replacing programme governance.",
    { ...sec, ctaTitle: "Share your PCF model" },
    {
      covers: [
        "Declared unit, boundary and allocation coherence",
        "Activity data, factors and interpretation choices",
        "Public-facing wording vs model limitations",
      ],
      forWho: [
        "Product teams publishing footprints for customers and tenders",
        "Organizations aligning PCF work with EPD or buyer templates",
        "Groups preparing for deeper verification cycles",
      ],
      typicalScope: [
        "Hotspot and sensitivity checks on material inputs",
        "Spot checks on datasets and factor sources",
        "Action list to strengthen disclosure discipline",
      ],
      whyMatters: [
        "PCF figures are reused across procurement and trade contexts",
        "Inconsistent logic between internal tools and external claims erodes trust",
        "Early review reduces costly rework",
      ],
      approach: [
        "Explicit intended use and audience for the footprint",
        "Evidence-led challenge on assumptions",
        "Outputs tuned to review or verification readiness—not headline marketing",
      ],
    },
    "Share your model, datasets and publication channels. We will propose review depth aligned to the next disclosure step.",
  ),
  "hpd-review": {
    heroEyebrow: "Services",
    title: "HPD (Health Product Declaration) Verification Review",
    intro:
      "The credibility of HPD disclosures depends not only on publishing a list of contents, but also on the accuracy of composition data, the clarity of disclosure boundaries, the consistency of hazard communication, the adequacy of supporting evidence, and the controlled structure of disclosures intended for external use. Meva Global provides an independent and structured verification review for HPD-related ingredient transparency and health-focused product disclosures. This service creates a more reliable, more controlled, and more professional disclosure basis through the systematic review of composition data, supporting technical documentation, supplier sources, and disclosure logic.",
    covers: {
      title: "Service Scope",
      bullets: [
        "Assessment of declared content data, composition structure, and supporting documentation within the HPD context",
        "Review of supplier sources, disclosure boundaries, data quality, and the ingredient transparency approach",
        "Verification-oriented examination of the HPD disclosure framework intended for external use",
      ],
    },
    forWho: {
      title: "Who It Is For",
      bullets: [
        "Manufacturers that want to present HPD disclosures with greater credibility and a more professional structure",
        "Teams strengthening ingredient transparency, material health, and health-oriented product disclosures",
        "Organisations that want supplier data and supporting evidence structures to become more controlled",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Plausibility assessment of composition data, component disclosures, and disclosure boundaries",
        "Sampling across supplier information, supporting documents, and disclosure logic",
        "Technical checks on HPD statements prepared for external use—clarity, consistency, and strength of evidence",
      ],
    },
    whyMatters: {
      title: "Why It Matters",
      bullets: [
        "Strengthens the credibility and defensibility of HPD disclosures",
        "Reduces issues driven by incomplete content descriptions, weak evidence structures, and disclosure risk",
        "Builds a stronger foundation for buyer expectations, product transparency, and health-oriented communication",
      ],
    },
    approach: {
      title: "The Meva Approach",
      bullets: [
        "Independent verification review that treats composition data, supplier sources, and supporting documents together",
        "Assessment discipline focused not only on what is disclosed, but on the data and documentation backbone behind it",
        "Professional structure that strengthens organisations’ current HPD maturity and disclosure quality",
      ],
    },
    cta: {
      title: "",
      body: "Share your current HPD file, composition data, and supporting supplier documents; together we can clarify verification scope matched to your use context.",
      primaryButton: "Request Proposal",
      secondaryButton: "Back to Services",
      detailLink: "Details",
    },
  },
  "material-health-composition-review": {
    heroEyebrow: "Services",
    title: "Material Health and Ingredient Transparency Verification Review",
    intro:
      "The credibility of material health and ingredient transparency claims depends not only on presenting a list of contents, but also on the accuracy of composition data, the clarity of hazard communication, the adequacy of supporting evidence, the consistency of terminology, and the controlled structure of disclosures intended for external use. Meva Global provides an independent and structured verification review for technical disclosures focused on material health and ingredient transparency. This service creates a more reliable, more controlled, and more professional basis for external disclosures through the systematic review of composition data, supporting documentation, hazard communication, and overall disclosure logic.",
    covers: {
      title: "Service Scope",
      bullets: [
        "Assessment of composition data, the content declaration framework, and technical documentation structure at product or material level",
        "Review of hazard communication, substance descriptions, supporting records, and data sources",
        "Verification-oriented examination of the ingredient transparency narrative prepared for external use",
      ],
    },
    forWho: {
      title: "Who It Is For",
      bullets: [
        "Manufacturers that want to present material ingredient content to external stakeholders with greater credibility",
        "Teams strengthening product transparency, health-oriented content explanations, and technical file quality",
        "Organisations that want material health claims framed in a more controlled and more professional structure",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Plausibility assessment across composition data, content explanations, and hazard communication",
        "Sampling of supporting documentation, supplier data, and technical record structures",
        "Verification checks on disclosure language and the evidence file underpinning external-facing ingredient transparency claims",
      ],
    },
    whyMatters: {
      title: "Why It Matters",
      bullets: [
        "Strengthens the credibility of material health and ingredient transparency claims",
        "Reduces the risk of technical challenge, misinterpretation, and disclosure exposure",
        "Builds a stronger foundation for buyer expectations, technical specifications, and health-oriented product communication",
      ],
    },
    approach: {
      title: "The Meva Approach",
      bullets: [
        "Independent verification review that examines composition data, hazard communication, and supporting evidence as one integrated system",
        "A review discipline focused not only on what is declared, but on which documentation and data structures substantiate the declaration",
        "A professional structure that strengthens existing ingredient transparency disclosures and supports subsequent technical disclosure cycles",
      ],
    },
    cta: {
      title: "",
      body: "Share your current ingredient transparency documentation, composition data, and supporting records; together we can clarify verification scope matched to your use context.",
      primaryButton: "Request Proposal",
      secondaryButton: "Back to Services",
      detailLink: "Details",
    },
  },
  "green-building-documentation-review": {
    heroEyebrow: "Services",
    title: "Green Building Documentation Verification Review",
    intro:
      "The credibility of technical documentation used in green building certification processes depends not only on the presence of submitted files, but also on the completeness of scope, the consistency of evidence structures, the clarity of alignment with relevant credits or criteria, and the traceability of supporting technical records. Meva Global provides an independent and structured verification review for green building submissions and related technical documentation. This service creates a more reliable, more controlled, and more professional submission basis through the systematic review of document packages, evidence records, technical disclosures, and application logic.",
    covers: {
      title: "Service Scope",
      bullets: [
        "Assessment of technical documentation, evidence packages, and the disclosure framework submitted within the certification application scope",
        "Review of credit- or criterion-based claims, technical records, and supporting files against stated requirements",
        "Verification-oriented review of the submission file’s integrity, consistency, and suitability for external review",
      ],
    },
    forWho: {
      title: "Who It Is For",
      bullets: [
        "Project teams seeking to present green building certification applications with stronger technical files",
        "Organisations strengthening application quality across architecture, engineering, consultancy, and investment stakeholders",
        "Teams aiming to make credit-based technical files more controlled, more traceable, and more professional",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Plausibility assessment of scope completeness, document consistency, and criterion mapping within submission files",
        "Sampling across technical drawings, calculations, product documentation, and supporting records",
        "Controls on documentation clarity, consistency, and evidential strength for external review",
      ],
    },
    whyMatters: {
      title: "Why It Matters",
      bullets: [
        "Strengthens the credibility of submission files and readiness for review",
        "Reduces the risk of missing documents, inconsistent claims, and technical challenge",
        "Builds a stronger technical basis for project teams, investors, and certification assessment",
      ],
    },
    approach: {
      title: "The Meva Approach",
      bullets: [
        "Independent verification review that treats technical documents, evidence packages, and application logic as one integrated system",
        "A discipline focused not only on file presence, but on how those files are linked to criteria",
        "Professional structure that strengthens current submission packages and supports subsequent certification cycles",
      ],
    },
    cta: {
      title: "",
      body: "Share your current green building application file, technical records, and supporting documentation; together we can clarify verification scope matched to your use context.",
      primaryButton: "Request Proposal",
      secondaryButton: "Back to Services",
      detailLink: "Details",
    },
  },
  "responsible-mining-irma-readiness": standardServiceDetail(
    "Responsible mining and IRMA verification readiness",
    "Verification readiness for responsible mining expectations—site evidence, governance themes, and gap closure. Not a substitute for formal assurance conclusions by scheme owners.",
    { ...sec, ctaTitle: "Discuss site and scope" },
    {
      covers: [
        "Maturity snapshot against commonly applied responsible production themes",
        "Evidence mapping for environmental and social performance narratives",
        "Prioritized gap closure themes",
      ],
      forWho: [
        "Mining and metals producers preparing for customer and investor scrutiny",
        "Joint ventures coordinating multi-site evidence",
        "Teams aligning internal KPIs with external narratives",
      ],
      typicalScope: [
        "Site and route sampling where documentation allows",
        "Cross-checks between operational records and reported metrics",
        "Findings log with severity ranking",
      ],
      whyMatters: [
        "Downstream buyers expect defensible evidence, not slogans",
        "Weak documentation increases financing and offtake friction",
        "Structured readiness reduces verification surprises",
      ],
      approach: [
        "Scope anchored to sites, commodities and reporting period",
        "Independent reviewer discipline",
        "Transparent limitations on assurance level",
      ],
    },
    "Share your sites, commodities and stakeholder expectations. We will propose a readiness assessment model.",
  ),
  "textile-traceability-recycled-review": standardServiceDetail(
    "Textile traceability and recycled material verification",
    "Verification of chain structures, mass-balance logic, and certificate cross-checks for textile sustainability claims.",
    { ...sec, ctaTitle: "Share your value chain map" },
    {
      covers: [
        "Chain mapping from feedstock to finished good where data allows",
        "Plausibility checks on recycled content allocations",
        "Supplier evidence discipline and version control",
      ],
      forWho: [
        "Textile brands publishing recycled content for EU and buyer programmes",
        "Manufacturers integrating multiple recycled inputs",
        "Teams preparing for audits and verification cycles",
      ],
      typicalScope: [
        "Sampling on priority suppliers and product lines",
        "Record matching between invoices, certificates and production logs",
        "Remediation roadmap",
      ],
      whyMatters: [
        "Recycled claims are highly exposed to greenwashing allegations",
        "Multi-tier suppliers increase documentation risk",
        "Strong traceability supports premium positioning",
      ],
      approach: [
        "Explicit material categories and percentage definitions",
        "Evidence-led testing paths",
        "Outputs framed as technical review support",
      ],
    },
    "Share categories, supplier tiers and claim language. We will align review depth to your next audit window.",
  ),
  "zero-waste-review": standardServiceDetail(
    "Zero waste verification review",
    "Verification-led review of diversion logic, recovery evidence, and how zero-waste narratives align with operational data.",
    { ...sec, ctaTitle: "Define facilities and metrics" },
    {
      covers: [
        "Boundary definition for waste streams and diversion routes",
        "Plausibility checks on recovery rates and supporting records",
        "Communication wording vs methodology limitations",
      ],
      forWho: [
        "Manufacturers publishing zero-waste or diversion claims",
        "Multi-site organizations consolidating waste data",
        "Teams aligning operational data with sustainability reporting",
      ],
      typicalScope: [
        "Sampling on high-volume waste routes",
        "Cross-checks between weighbridge data, invoices and allocations",
        "Findings memo with corrective themes",
      ],
      whyMatters: [
        "Waste metrics are increasingly scrutinized in procurement",
        "Inconsistent definitions create restatement risk",
        "Strong documentation supports credible storytelling",
      ],
      approach: [
        "Scope tied to sites, years and reporting channels",
        "Independent review mindset",
        "Careful limitations on comparability statements",
      ],
    },
    "Share site list, diversion definitions and reporting channels. We will propose review sampling accordingly.",
  ),
};
