import type { ResourceArticleDetail } from "@/i18n/types";
import type { ResourceArticleSlug } from "@/data/resourceArticleSlugs";

export const documentsResourceArticlesEn: Record<ResourceArticleSlug, ResourceArticleDetail> = {
  "cbam-reliable-emissions-data": {
    category: "CBAM",
    date: "2026-04-19",
    eyebrow: "Technical note",
    title: 'What “Reliable Emissions Data” Really Means In CBAM Preparation',
    intro:
      "For CBAM-related disclosures, “reliable” is not a slogan—it is a bundle of technical properties: boundaries that match the installation’s reality, activity data that can be traced to evidence, factors and assumptions that are explicit, and a reporting structure that can withstand scrutiny from customs authorities and commercial counterparties. The sections below outline how reviewers typically test those properties before a declaration is treated as defensible.",
    sections: [
      {
        title: "Boundaries and installation logic",
        body:
          "Reliability starts with a boundary model that is consistent with how the installation operates and how emissions are attributed. Ambiguity between main activity, auxiliary processes, and shared infrastructure is a frequent source of restatements. A controlled review checks that the boundary narrative, the data model, and the physical reality of the plant align without hidden overlaps or gaps.",
      },
      {
        title: "Evidence depth and traceability",
        body:
          "Figures must connect to source records: metering where applicable, purchase and process data where not, and clear handling of estimates. Reviewers look for an audit trail that explains how each material input and energy stream is captured, transformed, and aggregated—not only that a total exists, but that it could be reconstructed by an independent party without guesswork.",
      },
      {
        title: "Methodology, factors, and assumptions",
        body:
          "Default factors, country-specific values, and installation-specific measurements each carry conditions of use. Reliability requires that the factor choice is documented, consistent across periods unless change is justified, and aligned with the declared system boundaries. Assumptions must be visible: where they bite into the result and how sensitive outcomes are to alternative defensible choices.",
      },
      {
        title: "Disclosure discipline for external use",
        body:
          "Finally, reliability includes language discipline: what is verified versus modelled, what is excluded by design, and how uncertainty is communicated for procurement and compliance readers. A declaration that reads as precise but omits scope limits will fail stakeholder tests even when arithmetic is correct.",
      },
    ],
    closing:
      "Taken together, reliability for CBAM preparation is a systems property—boundary clarity, traceable evidence, transparent methodology, and controlled disclosure—not a single quality metric on a cover page.",
  },
  "carbon-verification-alignment": {
    category: "Carbon",
    date: "2026-04-19",
    eyebrow: "Technical note",
    title: "Aligning Scope, Methodology, And Stakeholder Expectations In Carbon Verification",
    intro:
      "Carbon verification fails quietly when scope, methodology, and audience expectations drift apart: the technical file may be complete while the reported narrative still invites challenge. Strong engagements align three layers—what is in scope, which standard and method apply, and what external readers believe they are seeing—before evidence testing intensifies.",
    sections: [
      {
        title: "Scope as a contract",
        body:
          "Scope is more than a boundary diagram. It fixes organisational and operational limits, reporting periods, and the role of estimation. When scope is left implicit, reviewers and stakeholders fill gaps with their own assumptions. A premium preparation defines scope in writing, links it to data structures, and states exclusions that matter for interpretation.",
      },
      {
        title: "Methodology as decision record",
        body:
          "Methodology is not only formulas; it is the documented rationale for activity classification, factor selection, and handling of missing data. Verification teams test whether methodology choices are stable across the period, sensitive cases are flagged, and changes are controlled. That record is what makes a methodology defensible rather than merely familiar.",
      },
      {
        title: "Stakeholder expectations without over-claiming",
        body:
          "Investor, buyer, and regulatory readers often expect different emphasis—completeness, comparability, or audit readiness. Alignment means mapping the verification objective to those expectations explicitly: which claims the statement supports, which it does not, and what would be needed for a stronger assurance tier or a different use context.",
      },
      {
        title: "Control points that protect integrity",
        body:
          "Well-designed control points—reconciliations, independent checks on high-impact streams, and sign-off on methodology changes—reduce the risk of late surprises. They also shorten verification cycles because issues surface earlier in internal review rather than at external challenge.",
      },
    ],
    closing:
      "When scope, methodology, and expectations are aligned in one coherent frame, verification becomes a structured test of that frame—not a debate about what should have been included after the fact.",
  },
  "epd-lca-critical-weaknesses": {
    category: "EPD / LCA",
    date: "2026-04-19",
    eyebrow: "Technical note",
    title: "Common Weak Points In EPD And LCA Critical Review",
    intro:
      "Critical review for EPD and LCA work is not a cosmetic gate; it is where methodological choices meet external scrutiny. Certain themes recur across programmes and product categories: unclear goal-and-scope, fragile data for high-impact stages, allocation shortcuts, and interpretation that outruns the model. Recognising these patterns early reduces rework and protects publication quality.",
    sections: [
      {
        title: "Goal, scope, and functional unit",
        body:
          "Weak studies often declare comparability without a functional unit that neutral readers would accept. Critical review tests whether the declared unit matches the question the study claims to answer and whether system boundaries still make sense when the product is placed in its real market context.",
      },
      {
        title: "Data quality and foreground traceability",
        body:
          "Background databases are necessary; foreground data quality often decides credibility. Reviewers focus on representative time windows, supplier-specific versus generic data, and how outliers are treated. A thin evidence trail for the largest mass or energy flows is a common finding.",
      },
      {
        title: "Allocation and multifunctionality",
        body:
          "Allocation rules that are convenient for modelling but weakly justified technically are a frequent weakness. Critical review examines whether allocation reflects physical causality or economic relationships as required by the PCR, and whether alternative defensible allocations would materially change conclusions.",
      },
      {
        title: "Scenarios, interpretation, and reporting consistency",
        body:
          "Scenario definitions must be reproducible, and results tables must match narrative claims. Inconsistent rounding, switching between scenarios without clear rules, or interpretation language that implies broader conclusions than the model supports are typical review findings.",
      },
    ],
    closing:
      "Strong critical review outcomes depend less on polishing tables than on tightening the logical chain from goal and scope through data to interpretation—before the declaration reaches public stakeholders.",
  },
  "sustainability-assurance-levels": {
    category: "Assurance",
    date: "2026-04-19",
    eyebrow: "Technical note",
    title: "Why Assurance Level Selection Matters In Sustainability Claims",
    intro:
      "Assurance levels signal how much work an independent practitioner performed and what type of conclusion can responsibly be drawn. Choosing too low a level for a high-stakes external use invites reputational and regulatory friction; choosing too high without evidence readiness wastes effort. The decision should be driven by use case, materiality, and audience—not by habit or template language.",
    sections: [
      {
        title: "Limited versus reasonable assurance—what changes",
        body:
          "Limited assurance centres on inquiry and analytical procedures; reasonable assurance adds evidence depth and testing designed to obtain a high but not absolute level of confidence. The gap is meaningful for capital markets, supply-chain programmes, and public statements where readers treat the report as a primary proof point.",
      },
      {
        title: "Use context and decision risk",
        body:
          "The same dataset may justify limited assurance for internal management review and require a higher bar for a prospectus-style claim or a buyer certification gate. Mapping decision risk—financial exposure, brand impact, and regulatory attention—clarifies the assurance level that matches the organisation’s true exposure.",
      },
      {
        title: "Public disclosure and third-party reliance",
        body:
          "When sustainability information is cited by customers, lenders, or regulators, reliance increases. Assurance wording must match what was actually examined: which sites, periods, metrics, and boundaries. Overstated comfort in marketing copy relative to the assurance report is a recurring source of disputes.",
      },
      {
        title: "Building readiness before engagement",
        body:
          "Higher assurance requires stronger controls, clearer documentation, and often more time. Organisations that select a level first and retrofit evidence rarely succeed cleanly. A disciplined readiness view—data lineage, control design, and governance ownership—supports both efficient assurance and credible external communication.",
      },
    ],
    closing:
      "Assurance level is best chosen as part of a deliberate disclosure strategy: what you need to say, to whom, under what scrutiny—and what evidence architecture can credibly support that posture.",
  },
};
