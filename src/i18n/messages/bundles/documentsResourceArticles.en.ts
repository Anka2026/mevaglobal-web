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
    title: "Scope, Methodology And Stakeholder Expectations In Carbon Verification",
    intro:
      "Credibility in carbon verification depends on boundary clarity, methodological consistency and what external readers understand they are reviewing. A complete technical file can still invite challenge if disclosure language, scope limits or assumptions are weak. This note summarises how those three layers should be structured before independent technical review intensifies.",
    sections: [
      {
        title: "Clarifying scope and boundaries",
        body:
          "Scope fixes organisational and operational limits, the reporting period and where estimation is applied. A boundary diagram alone is insufficient—the data model, site list and rationale for excluded activities must read as one file. Clear scope prevents reviewers from filling gaps with their own assumptions and makes the claim the statement actually supports visible.",
      },
      {
        title: "Methodological consistency and assumption management",
        body:
          "Methodology is not only formulas; it is a documented decision set for activity classification, emission factors and missing data. Consistency across periods, flagging of sensitive items and controlled management of methodology changes are central to technical review. Assumptions should not be hidden; their effect and sensitivity to reasonable alternatives should be discussed explicitly.",
      },
      {
        title: "Stakeholder expectations and statement reliability",
        body:
          "Investor, buyer and regulatory readers may emphasise completeness, comparability or audit readiness differently. The verification objective must be linked to those expectations in writing: which outcomes are supported, which limitations apply, and what further review would be needed for a stronger tier. Disclosure language must not exceed the evidence depth the file actually carries.",
      },
      {
        title: "Supporting findings with traceable records",
        body:
          "Reconciliations, independent checks on high-impact streams and sign-off on methodology changes strengthen how findings are supported by records. A well-structured technical file presents working papers, source data links and a decision trail together. Issues then surface in internal review rather than at external challenge.",
      },
    ],
    closing:
      "When scope, methodology and stakeholder expectations are defined in one coherent frame, verification becomes a documented, evidence-based test of that frame—not a retrospective debate about what should have been included.",
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
    category: "Technical Review",
    date: "2026-04-19",
    eyebrow: "Technical note",
    title: "Selecting Review Depth For Sustainability Claims",
    intro:
      "Independent review levels frame evidence depth, method controls and the type of conclusion that can be stated. The level should follow use context, decision risk and stakeholder expectations—not templates or marketing language.",
    sections: [
      {
        title: "Limited versus reasonable assurance",
        body:
          "The difference between limited and reasonable assurance is not only a confidence label; it requires different review intensity across data depth, evidence coverage, method controls and stakeholder expectations. Limited assurance relies on inquiry and analytical procedures with narrower evidence depth; reasonable assurance targets broader testing and evidence breadth—without implying absolute certainty.",
      },
      {
        title: "Use context and decision risk",
        body:
          "Use context and decision risk are the primary drivers of an appropriate review depth. The same dataset may support a lighter package for internal management while a prospectus-style claim or buyer gate requires stronger evidence and control maturity. Financial exposure, brand impact and regulatory attention should be read together.",
      },
      {
        title: "Public disclosure and third-party reliance",
        body:
          "Where public disclosure and third-party reliance apply, the statement’s scope, methodology and evidence set should be supported by a stronger technical file structure. Published assurance wording must align with operational reality: which sites, periods, metrics and boundaries were in scope. Marketing language that outruns the technical output is a recurring dispute source.",
      },
      {
        title: "Pre-engagement readiness",
        body:
          "Pre-engagement readiness covers data ownership, methodology records, boundary definitions and verifiable evidence organised for review. Deeper independent review typically requires stronger controls, clearer documentation and more time. Organisations that pick a level first and retrofit evidence rarely achieve consistent outcomes.",
      },
    ],
    closing:
      "Review depth is best chosen as part of a deliberate disclosure strategy: what must be said, to whom, under which technical framework—and whether the evidence architecture can credibly support that posture.",
  },
};
