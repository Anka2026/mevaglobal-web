import type { Dictionary } from "../../types";

type Detail = Dictionary["pages"]["serviceDetails"][keyof Dictionary["pages"]["serviceDetails"]];

export const serviceDetailsExtraEn: Record<
  | "ghg-protocol-review-support"
  | "eu-ets-mrv-assurance-support"
  | "shipping-emissions-mrv-review"
  | "aviation-emissions-readiness-review"
  | "verification-readiness-gap-analysis"
  | "data-evidence-readiness-review"
  | "dpp-readiness-preverification"
  | "sustainability-reporting-evidence-review"
  | "f-gases-reporting-review"
  | "buyer-value-chain-review"
  | "iso-14068-readiness-review"
  | "mock-verification-review"
  | "green-claim-review",
  Detail
> = {
  "ghg-protocol-review-support": {
    variant: "editorial",
    eyebrow: "Services",
    title: "GHG Protocol Review Support",
    intro:
      "The reliability of greenhouse gas inventories and related disclosures prepared under the GHG Protocol depends not only on total reported emissions, but also on the clarity of organisational boundaries, the consistency of scope selection, the accuracy of category treatment, the defensibility of calculation logic, and the traceability of supporting records. Meva Global provides independent and structured technical review support for inventories and reports prepared in line with the GHG Protocol. This service is designed to help organisations systematically assess their data structure, methodological choices, and evidence base in line with their reporting level and intended external use.",
    sections: [
      {
        title: "Service Scope",
        body: "This service includes the technical assessment of organisational boundaries, operational approach, consolidation logic, reporting scope, relevant greenhouse gas categories, and the overall calculation framework. Group-level or facility-level inventory structures, data flows, emission factor selection, and key methodological choices are reviewed together against relevant GHG Protocol expectations. The objective is not only to review the existing inventory, but to clarify how ready it is for external use and where strengthening is needed.",
      },
      {
        title: "Review Focus",
        body: "The review addresses boundary definition, scope selection, value chain categories, activity data, calculation logic, emission factors, document trail, and internal controls as one connected system. Where appropriate, the process may include sampling, recalculation checks, data matching, and examination of supporting documentation. This allows the assessment to go beyond the reported emissions figure and make visible how the result was built, which methodological choices shaped it, and how robustly it can be supported.",
      },
      {
        title: "Why It Matters",
        body: "GHG Protocol-based greenhouse gas data is becoming increasingly important in investor communication, customer requests, supply chain assessments, voluntary reporting frameworks, and preparation for formal verification. A well-structured review process reduces the risk of inconsistency between internal calculations and external disclosures, strengthens traceability, and creates a stronger basis for the next stage of review or verification. It also provides organisations with a clearer path toward better data quality, stronger documentation discipline, and greater reporting maturity.",
      },
      {
        title: "The Meva Approach",
        body: "Meva Global delivers this service through clear scope definition, methodology-focused technical review, traceable evidence structures, and an independent review mindset. Our approach goes beyond producing a list of gaps; it clarifies which reporting choices are already robust, where weaknesses remain, and which improvements will most effectively strengthen disclosure reliability. This helps organisations make their current inventories and reports more defensible while building stronger readiness for formal verification, third-party review, or external stakeholder communication.",
      },
    ],
    bottomCta:
      "Share your organisational boundaries, reporting year, included categories, and current calculation structure with us, and we will define an appropriate review depth for your disclosure context.",
    primaryButton: "Request Proposal",
    secondaryButton: "Back To Services",
    detailLink: "Details",
  },
  "eu-ets-mrv-assurance-support": {
    title: "EU ETS & MRV — Assurance Support",
    intro:
      "Independent assurance-oriented technical review for monitoring, reporting and verification (MRV) datasets under EU ETS expectations—focused on methodology plausibility, evidence traceability and documentation discipline. This is technical assurance support; it does not replace competent authority decisions or statutory verifier roles.",
    covers: {
      title: "What this covers",
      bullets: [
        "Monitoring plan logic, emission source coverage and tier choices where applicable",
        "Data flows, metering and estimation approaches for material streams",
        "Cross-checks between reported figures and underlying evidence records",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Installations and shipping operators preparing MRV submissions and ship-level fuel data",
        "Energy-intensive sectors (e.g. metals, cement) tightening plant-level evidence packs",
        "Teams coordinating site data, calibration records and non-routine event documentation",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Risk-based sampling on high-impact parameters and supporting documentation",
        "Plausibility checks on allocation, biomass fractions and calculation chains where relevant",
        "Findings log with prioritized closure actions before external submission or review windows",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "MRV errors and weak traceability increase compliance and reputational exposure",
        "Stronger evidence structure speeds up dialogue with verifiers and internal sign-off",
        "Aligns operational data with what regulators and schemes expect to see on file",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Scope tied to installation or fleet segment, reporting period and applicable rule set",
        "Independent reviewer mindset: challenge assumptions, verify traceability",
        "Controlled wording on outputs—assurance support, not a substitute for statutory verification",
      ],
    },
    cta: {
      title: "Discuss your MRV context",
      body: "Share your installation or fleet scope, applicable monitoring approach and reporting deadline. We will align review depth to risk and submission timing.",
    },
  },
  "shipping-emissions-mrv-review": {
    title: "Shipping Emissions — MRV Review Support",
    intro:
      "Technical review support for ship- and fleet-level emissions data prepared for EU MRV and related reporting contexts—emphasizing voyage data quality, fuel balance plausibility and defensible documentation for external scrutiny.",
    covers: {
      title: "What this covers",
      bullets: [
        "Boundary checks for voyages, fuel types and time periods included in reporting",
        "Plausibility of fuel consumption, emission factors and allocation where multiple fuels apply",
        "Documentation trails from operational records to reported totals",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Ship operators and managers consolidating noon reports, bunker delivery notes and BDN evidence",
        "Technical managers aligning fleet tools with regulatory reporting templates",
        "Organizations preparing assurance-ready files for charterers or authorities",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Sampling across representative voyages and fuel streams",
        "Cross-checks between reported data and primary records where available",
        "Gap list for missing evidence, unclear allocations or weak governance points",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Shipping data errors are visible to regulators and commercial counterparties alike",
        "Strong traceability supports charter-party discussions and buyer confidence",
        "Reduces last-minute remediation before reporting deadlines",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Fleet- and voyage-level risk screening before deep sampling",
        "Practical focus on how data is generated, not only on final totals",
        "Outputs framed as review support with clear limitations",
      ],
    },
    cta: {
      title: "Share your fleet reporting scope",
      body: "Provide vessel list, reporting year, fuel types and current data compilation method. We will propose sampling logic and evidence expectations.",
    },
  },
  "aviation-emissions-readiness-review": {
    title: "Aviation Emissions — Readiness Review (CORSIA / EU ETS)",
    intro:
      "Readiness-oriented technical review for aviation emissions monitoring and reporting where CORSIA and/or EU ETS obligations may apply—focused on scheme parameters, data governance and evidence structure. Positioned as preparation support, not as scheme accreditation or official scheme approval.",
    covers: {
      title: "What this covers",
      bullets: [
        "High-level mapping of applicability: which scheme elements may trigger for your operation",
        "Data and documentation checks for fuel, activity and allocation approaches commonly scrutinized",
        "Gap identification against typical external review expectations",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Airlines and operators consolidating fuel and flight data for scheme reporting",
        "Teams coordinating between flight operations, fuel purchasing and sustainability reporting",
        "Organizations seeking structured preparation before statutory verification cycles",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Structured questionnaire and document review against your stated operating model",
        "Targeted sampling on material routes, fuel types or data interfaces",
        "Readiness memo with prioritized actions—without overclaiming formal verification outcomes",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Scheme reporting is evidence-intensive; weak files attract findings and delays",
        "Clear preparation reduces friction with verifiers and internal approvals",
        "Supports accurate internal vs. external communication on readiness level",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Explicit delineation of CORSIA vs EU ETS readiness topics you request",
        "No substitute for regulatory interpretation—focus on technical traceability and documentation",
        "Professional, restrained wording on status and next steps",
      ],
    },
    cta: {
      title: "Clarify your operating context",
      body: "Share fleet profile, relevant schemes under consideration and reporting timeline. We will scope a readiness review that matches your risk profile.",
    },
  },
  "verification-readiness-gap-analysis": {
    title: "Verification Readiness & Gap Analysis",
    intro:
      "A structured pre-verification service for organizations that are not yet ready for formal review—prioritizing gaps in boundaries, methods, data and documentation so you can close issues efficiently before engaging a full verification.",
    covers: {
      title: "What this covers",
      bullets: [
        "Rapid diagnostic against the standard or programme you intend to use (e.g. ISO 14064-1, PCF, EPD rules)",
        "Identification of high-risk gaps: missing records, unclear allocation, weak controls",
        "Roadmap: sequencing remediation work and evidence collection",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "First-time verification clients building an evidence pack from fragmented systems",
        "Teams after M&A or system changes that disrupted historical data continuity",
        "Organizations that received internal audit findings and need an external-leaning gap view",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Kick-off workshop and document intake checklist",
        "Targeted review sessions on boundary, methodology and data architecture",
        "Written gap register with severity ratings and suggested owners",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Formal verification with major gaps wastes time and budget",
        "Early visibility reduces surprises during external review",
        "Aligns technical, IT and sustainability teams on a single evidence model",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Outcome is diagnostic—not a verification statement",
        "Pragmatic prioritization: what must be fixed vs. nice-to-have",
        "Optional follow-on support scoped separately",
      ],
    },
    cta: {
      title: "Start with a scoped diagnostic",
      body: "Describe your target standard, reporting year and current data landscape. We will propose a gap analysis depth and duration.",
    },
  },
  "data-evidence-readiness-review": {
    title: "Data & Evidence Readiness Review",
    intro:
      "Focused review of how emissions, environmental and sustainability data are sourced, transformed and retained—aimed at traceability from raw evidence to reported figures. Suited before verification, assurance exercises or major disclosures.",
    covers: {
      title: "What this covers",
      bullets: [
        "Data lineage: systems, spreadsheets, meters and manual inputs",
        "Control points: approvals, versioning, change logs and access governance",
        "Sampling strategy fitness for the claims you intend to make",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Manufacturing groups with distributed plants and heterogeneous ERP exports",
        "Teams implementing new carbon accounting tools or ETL pipelines",
        "Organizations facing buyer audits on data quality and documentation",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Process walkthrough and identification of single points of failure",
        "Tests on selected material data flows end-to-end",
        "Recommendations to strengthen evidence packs and metadata",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Verification is only as strong as the chain from evidence to claim",
        "Data governance gaps are a common root cause of findings",
        "Improves repeatability for year-on-year reporting",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Collaborative sessions with IT, operations and sustainability leads",
        "Risk-based focus on material streams, not exhaustive IT certification",
        "Clear separation from formal ISAE-style engagements unless separately agreed",
      ],
    },
    cta: {
      title: "Map your evidence chain",
      body: "Share your reporting boundary, key systems and sample period. We will tailor the review to your disclosure pathway.",
    },
  },
  "dpp-readiness-preverification": {
    title: "Digital Product Passport — Data Readiness & Pre-Verification",
    intro:
      "Forward-looking technical support to structure environmental and traceability-related data for Digital Product Passport (DPP) expectations—emphasizing data quality, identifiers, and defensible claims without overclaiming that a passport is “verified” beyond agreed scope.",
    covers: {
      title: "What this covers",
      bullets: [
        "Data attribute mapping: which PCF, material and compliance fields you intend to expose",
        "Checks on provenance documentation and linkage between product variants and datasets",
        "Governance for updates, corrections and version control in a passport context",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Manufacturers piloting DPP for EU market categories",
        "Brands coordinating suppliers, LCA teams and IT platforms",
        "Teams aligning passport data with existing EPD / PCF work",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Workshop on intended passport scope and regulatory expectations snapshot",
        "Review of sample SKU-level data packages",
        "Pre-verification checklist aligned to what independent review would later test",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Passport data will face buyer and authority scrutiny—weak links surface quickly",
        "Early structuring avoids costly rework when rules harden",
        "Supports credible product-level storytelling without greenwashing",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Regulation-aware but not legal advice—focus on technical defensibility",
        "Explicit statement on what pre-verification does and does not certify",
        "Integration with your existing ISO-aligned environmental work where relevant",
      ],
    },
    cta: {
      title: "Define your passport pilot",
      body: "Share product category, markets, and current environmental datasets. We will propose a readiness pathway.",
    },
  },
  "sustainability-reporting-evidence-review": {
    title: "Sustainability Reporting — Evidence Review",
    intro:
      "Structured evidence review for sustainability reports, annexes and selected KPI disclosures—supporting consistency between narrative claims and underlying calculations, without presenting statutory assurance unless formally engaged under agreed criteria.",
    covers: {
      title: "What this covers",
      bullets: [
        "Cross-checks between published figures and supporting workbooks or third-party data",
        "Spot checks on carbon, energy, water and waste metrics where material",
        "Narrative alignment: avoiding unsupported qualifiers and overstated certainty",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Listed and large private firms preparing integrated or standalone sustainability reports",
        "Teams bridging CSRD-style expectations with legacy reporting processes",
        "Communications and sustainability leads needing an external-leaning technical review",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Materiality-based selection of metrics and claims to test",
        "Documented findings and management responses",
        "Optional comfort memorandum language—scoped and clearly bounded",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Stakeholders compare narratives to numbers—inconsistency erodes trust",
        "Reduces greenwashing risk through disciplined wording and evidence",
        "Prepares the organization for deeper assurance cycles if desired later",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Written protocol: metrics in scope, evidence types, sampling approach",
        "Independent reviewer discipline separate from communications sign-off",
        "No statutory audit opinion—transparent about limits",
      ],
    },
    cta: {
      title: "Align scope to your report",
      body: "Share draft metrics table, supporting files and publication timeline. We will propose a bounded review plan.",
    },
  },
  "f-gases-reporting-review": {
    title: "F-Gases Reporting — Review Support",
    intro:
      "Technical data and documentation review for fluorinated gas (F-gas) reporting contexts—supporting completeness, methodology plausibility and traceability for regulatory or internal compliance files. Positioned as review support, not as a substitute for legal compliance sign-off.",
    covers: {
      title: "What this covers",
      bullets: [
        "Equipment inventories, charge records and leakage assumptions where applicable",
        "Cross-checks between purchased quantities, service logs and reported emissions",
        "Documentation suitable for inspection-style review",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Industrial sites and facilities with significant HVAC/R and heat-pump fleets",
        "Teams coordinating maintenance contractors and refrigerant purchase data",
        "Organizations aligning F-gas data with broader GHG inventory submissions",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Sampling across high-charge equipment and material purchase streams",
        "Plausibility checks on emission factor use and unit consistency",
        "Findings register with remediation guidance",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "F-gas emissions are regulated and increasingly visible in corporate reporting",
        "Poor records create compliance exposure and inventory inconsistencies",
        "Supports alignment between maintenance reality and reported figures",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Grounded in your equipment register and actual data availability",
        "Clear communication when engineering expertise or legal input is also required",
        "Outputs framed as technical review, not regulator representation",
      ],
    },
    cta: {
      title: "Share your equipment baseline",
      body: "Provide inventory scope, refrigerant types and reporting period. We will scope sampling and evidence expectations.",
    },
  },
  "buyer-value-chain-review": {
    title: "Buyer / Value Chain Review Support",
    intro:
      "Adapted technical review model designed for customer requirements, supply-chain expectations and second-party review contexts—custom criteria, sampling logic and documented outcomes where agreed. Distinct from public certification schemes when used that way; scope and criteria are confirmed in writing.",
    covers: {
      title: "What this covers",
      bullets: [
        "Criteria design: KPIs, evidence types, pass/fail or graded outcomes",
        "Supplier evidence review across sites, products or shipment batches as agreed",
        "Reporting formats suitable for procurement boards and supplier development programmes",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Industrial buyers requiring consistent GHG and environmental evidence from suppliers",
        "OEMs rolling out decarbonisation programmes with audit-style follow-up",
        "Industry associations coordinating sector-level review templates",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Pilot on a supplier subset, then scaled rollout",
        "Calibration sessions so suppliers understand evidence expectations",
        "Quarterly or annual review cycles with trend reporting",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Value-chain data quality is often the weakest link in product claims",
        "Independent structure increases fairness and reduces dispute",
        "Creates a repeatable governance model beyond one-off audits",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Governance first: criteria, conflicts of interest and escalation paths defined in writing",
        "Evidence-led testing with traceable findings",
        "Outputs aligned to intended use—often internal or controlled external",
      ],
    },
    cta: {
      title: "Design the programme criteria",
      body: "Share buyer objectives, supplier universe size and risk appetite. We will propose a review model and pilot scope.",
    },
  },
  "iso-14068-readiness-review": {
    heroEyebrow: "Carbon neutrality & net-zero claims",
    title: "ISO 14068 — Carbon Neutrality And Net-Zero Verification",
    intro:
      "The credibility of carbon neutrality and net-zero statements depends not only on reported emissions results, but also on the definition of boundaries, the consistency of the reduction strategy, the appropriateness of any balancing approach, and the clarity of the supporting evidence structure. Meva Global provides an independent and structured technical verification approach for carbon neutrality and net-zero statements related to ISO 14068. This service strengthens the credibility and defensibility of disclosures through a systematic review of emissions boundaries, reduction logic, supporting mechanisms, and the broader statement architecture.",
    covers: {
      title: "Service Scope",
      bullets: [
        "Statement boundaries, emissions scope, base-year and performance approach, reduction strategy, transition logic, and any balancing elements",
        "Methodological framework, data architecture, and key assumptions underpinning the neutrality or net-zero claim—as one system",
        "Clarifying the technical and evidence-based foundation—not only the wording on the page",
      ],
    },
    forWho: {
      title: "Who It Is For",
      bullets: [
        "Corporate sustainability and leadership teams steering carbon neutrality and net-zero communications",
        "Organisations targeting investor-grade and internationally credible climate claims",
        "Teams that need scope, reduction pathway, and balancing elements to line up in one coherent storyline",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Emissions scope definition, data sources, quantification structure, reduction-path logic, balancing role, document trail, and disclosure wording—together",
        "Sampling, record matching, methodology checks, and evidence review where appropriate",
        "The claim itself and how it was built—including how far it can be substantiated",
      ],
    },
    whyMatters: {
      title: "Why It Matters",
      bullets: [
        "These statements now sit at the centre of customer dialogue, sustainability reporting, investor review, and global stakeholder expectations",
        "Structured verification increases reliability, reduces misinterpretation and reputational risk, and reinforces disclosure discipline",
        "A stronger basis for data governance, transition planning, and mature reporting structures",
      ],
    },
    approach: {
      title: "The Meva Approach",
      bullets: [
        "Methodology-led technical assessment, traceable evidence architecture, and independent decision discipline",
        "Not limited to statement text—boundary clarity, reduction-architecture consistency, balancing mechanisms, and underlying data flows",
        "Current disclosures on a stronger footing and a more resilient climate-claims infrastructure for what follows",
      ],
    },
    cta: {
      title: "",
      body: "Share your statement scope, reporting approach, and existing evidence base—we will align verification scope and review expectations with your context.",
      primaryButton: "Request Proposal",
      secondaryButton: "Back to Services",
      detailLink: "Details",
    },
  },
  "mock-verification-review": {
    title: "Mock Verification Review",
    intro:
      "Limited-scope independent review designed to test readiness and identify weaknesses before formal verification—mirroring verification-style scrutiny on selected material streams without issuing a formal verification statement.",
    covers: {
      title: "What this covers",
      bullets: [
        "Sampling-style testing on priority datasets, controls and calculation steps",
        "Findings structured similarly to verification outputs, without a formal statement",
        "Prioritized remediation actions to close gaps before the real engagement",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "First-time verification teams and complex multi-site organizations",
        "Programs where leadership wants assurance before committing to a full cycle",
        "Situations with tight disclosure deadlines and limited room for surprises",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Agreed sampling plan on material emission sources or product lines",
        "Interview-style checks on governance and record-keeping",
        "Mock findings memo with severity ranking",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Surprises during formal verification are expensive and reputational",
        "Builds team familiarity with evidence expectations",
        "Improves the quality of the eventual evidence pack",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Transparent scoping: mock review is not a substitute for formal verification",
        "Independent reviewer discipline consistent with assurance principles",
        "Outputs tuned to learning, not compliance theatre",
      ],
    },
    cta: {
      title: "Define what you want to stress-test",
      body: "Share the systems, sites or products you want reviewed and your target verification window. We will propose sampling depth and timeline.",
    },
  },
  "green-claim-review": {
    title: "Environmental Claim / Green Claim Review",
    intro:
      "Independent technical review of environmental claims, product declarations and communication language—focused on evidence sufficiency, claim boundaries and overstatement risk before publication or buyer circulation.",
    covers: {
      title: "What this covers",
      bullets: [
        "Mapping claims to underlying studies, inventories and certificates",
        "Checks on boundary language, comparability statements and superlative wording",
        "Risk notes on greenwashing exposure in key markets you identify",
      ],
    },
    forWho: {
      title: "Who it is for",
      bullets: [
        "Marketing and product teams preparing packaging, datasheets and campaigns",
        "Sustainability teams aligning public language with verified evidence",
        "Legal/compliance teams seeking an independent technical read",
      ],
    },
    typicalScope: {
      title: "Review Focus",
      bullets: [
        "Claim inventory across selected channels and SKUs",
        "Evidence sufficiency review against stated boundaries",
        "Suggested wording safeguards and escalation items",
      ],
    },
    whyMatters: {
      title: "Why it matters",
      bullets: [
        "Regulators and buyers increasingly challenge environmental messaging",
        "Misaligned language can undermine otherwise credible technical work",
        "Early review reduces recall and reputational risk",
      ],
    },
    approach: {
      title: "How Meva approaches it",
      bullets: [
        "Technical, not legal advice—clearly separated roles where needed",
        "Evidence-first review with explicit limitations on marketing interpretation",
        "Pragmatic outputs suitable for cross-functional sign-off",
      ],
    },
    cta: {
      title: "Send draft claims and evidence pointers",
      body: "Share the claim set, intended audience and supporting studies or verification references. We will scope a proportionate review.",
    },
  },
};
