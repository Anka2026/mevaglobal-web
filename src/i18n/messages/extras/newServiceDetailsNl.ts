import { standardServiceDetail } from "./serviceDetailStandardStub";

const lab = {
  covers: "Wat dit omvat",
  forWho: "Voor wie",
  typicalScope: "Focus Van De Beoordeling",
  whyMatters: "Waarom het telt",
  approach: "Hoe Meva dit aanpakt",
};

const B = {
  covers: [
    "Technische beoordeling afgestemd op scope, methodiek en beoogd gebruik.",
    "Traceerbaarheid en documentatiediscipline rond databronnen en berekeningen.",
    "Bevindingen als onafhankelijke review-output; beperkingen expliciet verwoord.",
  ],
  forWho: [
    "Organisaties met sterke externe stakeholderdruk",
    "Teams die zich voorbereiden op verificatie, assurance of third-party review",
    "Directies die consistentie zoeken tussen duurzaamheid, finance en operations",
  ],
  typicalScope: [
    "Steekproef- en dossiercontroles op materiële onderdelen",
    "Geprioriteerde bevindingen naar impact en risico",
    "Concrete vervolgstappen voor sluiting en verbetering",
  ],
  whyMatters: [
    "Zwak bewijs ondermijnt vertrouwen en vergroot claimrisico",
    "Vroege correctie voorkomt dure verrassingen later in assurance-cycli",
    "Betere data- en methodediscipline maakt disclosures verdedigbaarder",
  ],
  approach: [
    "Scope wordt expliciet afgestemd op norm, periode en communicatiekanaal",
    "Bewijsgerichte toetsing in plaats van checklist-theater",
    "Heldere taal over wat onafhankelijke review wel en niet kan concluderen",
  ],
} as const;

const ctaBody =
  "Deel uw scope, planning en beschikbare dossiers; dan bepalen we samen de passende reviewediepte.";

function mk(title: string, intro: string, ctaTitle: string) {
  return standardServiceDetail(title, intro, { ...lab, ctaTitle }, B, ctaBody);
}

export const newServiceDetailsNl = {
  "product-carbon-footprint-review": mk(
    "Product Carbon Footprint-Verificatie",
    "Gestructureerde verificatie van PCF-modellen: hotspots, datalijn en positionering in klantgerichte materialen; sluit aan op ISO 14067 waar relevant.",
    "Deel uw PCF-model",
  ),
  "hpd-review": {
    heroEyebrow: "Diensten",
    title: "HPD (Health Product Declaration) Verificatiebeoordeling",
    intro:
      "De geloofwaardigheid van HPD-verklaringen hangt niet alleen af van het publiceren van een inhoudslijst, maar ook van de juistheid van samenstellingsdata, de duidelijkheid van disclosure-grenzen, de consistentie van gevarencommunicatie, de toereikendheid van ondersteunend bewijs en de gecontroleerde opbouw van verklaringen voor extern gebruik. Meva Global biedt een onafhankelijke en gestructureerde verificatiebeoordeling voor HPD-gerelateerde ingrediëntentransparantie en gezondheidsgerichte productverklaringen. Deze dienst creëert via een systematische beoordeling van samenstellingsdata, ondersteunende technische documentatie, leveranciersbronnen en disclosure-logica een betrouwbaarder, gecontroleerder en professioneler verklaringskader.",
    covers: {
      title: "Reikwijdte van de dienst",
      bullets: [
        "Beoordeling van gedeclareerde inhoudsgegevens, samenstellingsstructuur en ondersteunende documentatie in de HPD-context",
        "Review van leveranciersbronnen, disclosure-grenzen, datakwaliteit en de aanpak van ingrediëntentransparantie",
        "Verificatiegerichte toets van het HPD-disclosurekader voor extern gebruik",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Producenten die HPD-verklaringen geloofwaardiger en professioneler willen presenteren",
        "Teams die ingrediëntentransparantie, materiaalgezondheid en gezondheidsgerichte productclaims willen versterken",
        "Organisaties die leveranciersdata en ondersteunende bewijsstructuren gecontroleerder willen maken",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Plausibiliteitsbeoordeling van samenstellingsdata, componentdisclosures en disclosure-grenzen",
        "Steekproeven op leveranciersinformatie, ondersteunende documenten en disclosure-logica",
        "Technische controle op HPD-verklaringen voor extern gebruik—helderheid, consistentie en bewijskracht",
      ],
    },
    whyMatters: {
      title: "Waarom dit belangrijk is",
      bullets: [
        "Versterkt de geloofwaardigheid en verdedigbaarheid van HPD-disclosures",
        "Vermindert risico door onvolledige inhoudsbeschrijvingen, zwakke bewijsstructuren en disclosure-risico",
        "Bouwt een stevigere basis voor afnemerverwachtingen, producttransparantie en gezondheidsgerichte communicatie",
      ],
    },
    approach: {
      title: "De Meva-aanpak",
      bullets: [
        "Onafhankelijke verificatiebeoordeling waarin samenstellingsdata, leveranciersbronnen en ondersteunende documenten samen worden bezien",
        "Beoordelingsdiscipline gericht niet alleen op wat wordt verklaard, maar op de data- en documentatiestructuur erachter",
        "Professionele structuur die de huidige HPD-volwassenheid en disclosurekwaliteit van organisaties versterkt",
      ],
    },
    cta: {
      title: "",
      body: "Deel uw huidige HPD-dossier, samenstellingsdata en ondersteunende leveranciersdocumenten; samen verduidelijken we een verificatiescope die past bij uw gebruikscontext.",
      primaryButton: "Offerte aanvragen",
      secondaryButton: "Terug naar diensten",
      detailLink: "Details",
    },
  },
  "material-health-composition-review": {
    heroEyebrow: "Diensten",
    title: "Verificatiebeoordeling van materiaalgezondheid en transparantie van ingrediënten",
    intro:
      "De geloofwaardigheid van verklaringen over materiaalgezondheid en transparantie van ingrediënten hangt niet alleen af van het tonen van een inhoudslijst, maar ook van de juistheid van samenstellingsdata, de helderheid van gevarencommunicatie, de toereikendheid van ondersteunend bewijs, de consistentie van terminologie en de gecontroleerde opbouw van disclosures voor extern gebruik. Meva Global biedt een onafhankelijke en gestructureerde verificatiebeoordeling voor technische verklaringen gericht op materiaalgezondheid en transparantie van ingrediënten. Deze dienst creëert via een systematische beoordeling van samenstellingsdata, ondersteunende documentatie, gevarencommunicatie en disclosure-logica een betrouwbaarder, gecontroleerder en professioneler kader voor extern gebruik.",
    covers: {
      title: "Reikwijdte van de dienst",
      bullets: [
        "Beoordeling van samenstellingsdata, het kader voor inhoudsverklaringen en de structuur van technische documentatie op product- of materiaalniveau",
        "Review van gevarencommunicatie, stofbeschrijvingen, ondersteunende registraties en databronnen",
        "Verificatiegerichte toets van extern gerichte verklaringen over transparantie van ingrediënten",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Producenten die materiaalinhoud geloofwaardiger aan externe stakeholders willen presenteren",
        "Teams die producttransparantie, gezondheidsgerichte inhoudsverklaringen en technische dossierkwaliteit willen versterken",
        "Organisaties die materiaalgezondheidsclaims in een gecontroleerdere en professionelere structuur willen plaatsen",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Plausibiliteitsbeoordeling van samenstellingsdata, inhoudsverklaringen en gevarencommunicatie",
        "Steekproeven op ondersteunende documentatie, leveranciersdata en technische registratiestructuur",
        "Verificatiecontroles op disclosure-taal en het bewijsbestand achter extern gerichte verklaringen over transparantie van ingrediënten",
      ],
    },
    whyMatters: {
      title: "Waarom dit belangrijk is",
      bullets: [
        "Versterkt de geloofwaardigheid van verklaringen over materiaalgezondheid en transparantie van ingrediënten",
        "Vermindert risico op technische weerlegging, verkeerde uitleg en disclosure-exposure",
        "Bouwt een stevigere basis voor afnemerverwachtingen, technische bestekken en gezondheidsgerichte productcommunicatie",
      ],
    },
    approach: {
      title: "De Meva-aanpak",
      bullets: [
        "Onafhankelijke verificatiebeoordeling waarin samenstellingsdata, gevarencommunicatie en ondersteunend bewijs samen worden bezien",
        "Een reviewdiscipline gericht niet alleen op wat wordt verklaard, maar op welke documentatie en datastructuren die verklaring onderbouwen",
        "Een professionele structuur die bestaande disclosures over transparantie van ingrediënten versterkt en volgende technische verklaringcycli ondersteunt",
      ],
    },
    cta: {
      title: "",
      body: "Deel uw huidige documentatie over transparantie van ingrediënten, samenstellingsdata en ondersteunende registraties; samen bepalen we een verificatiescope die past bij uw gebruikscontext.",
      primaryButton: "Offerte aanvragen",
      secondaryButton: "Terug naar diensten",
      detailLink: "Details",
    },
  },
  "green-building-documentation-review": {
    heroEyebrow: "Diensten",
    title: "Verificatiebeoordeling van green building-documentatie",
    intro:
      "De geloofwaardigheid van technische documentatie die wordt gebruikt in green building-certificeringsprocessen hangt niet alleen af van de aanwezigheid van ingediende documenten, maar ook van de volledigheid van de scope, de consistentie van bewijsstructuren, de duidelijkheid van de koppeling met relevante credits of criteria en de traceerbaarheid van ondersteunende technische registraties. Meva Global biedt een onafhankelijke en gestructureerde verificatiebeoordeling voor green building-aanvragen en bijbehorende technische documentatie. Deze dienst creëert via een systematische beoordeling van documentpakketten, bewijsregistraties, technische disclosures en aanvraaglogica een betrouwbaarder, gecontroleerder en professioneler indieningskader.",
    covers: {
      title: "Reikwijdte van de dienst",
      bullets: [
        "Beoordeling van technische documentatie, bewijspakketten en het toelichtingskader binnen de certificatie-aanvraag",
        "Review van op credits of criteria gebaseerde verklaringen, technische registraties en ondersteunende bestanden tegen de gestelde eisen",
        "Verificatiegerichte beoordeling van de integriteit, consistentie en geschiktheid van het aanvraagdossier voor externe review",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Projectteams die green building-certificatieaanvragen met sterkere technische dossiers willen indienen",
        "Organisaties die aanvraagkwaliteit willen versterken over architectuur, engineering, advies en investeerders heen",
        "Teams die credit-gerichte technische dossiers gecontroleerder, traceerbaarder en professioneler willen maken",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Plausibiliteitsbeoordeling van scopevolledigheid, documentconsistentie en criteriakoppeling in aanvraagdossiers",
        "Steekproeven op technische tekeningen, berekeningen, productdocumentatie en ondersteunende registraties",
        "Controles op helderheid, consistentie en bewijskracht van documentatie voor externe beoordeling",
      ],
    },
    whyMatters: {
      title: "Waarom dit belangrijk is",
      bullets: [
        "Versterkt de geloofwaardigheid van aanvraagdossiers en de gereedheid voor review",
        "Vermindert risico op ontbrekende stukken, inconsistente verklaringen en technische weerlegging",
        "Bouwt een stevigere technische basis voor projectteams, investeerders en certificatiebeoordeling",
      ],
    },
    approach: {
      title: "De Meva-aanpak",
      bullets: [
        "Onafhankelijke verificatiebeoordeling waarin technische documenten, bewijspakketten en aanvraaglogica samen worden bezien",
        "Een reviewdiscipline gericht niet alleen op aanwezigheid van dossiers, maar op hoe die aan criteria worden gekoppeld",
        "Een professionele structuur die bestaande aanvraagpakketten versterkt en volgende certificatiecycli ondersteunt",
      ],
    },
    cta: {
      title: "",
      body: "Deel uw huidige green building-aanvraagdossier, technische registraties en ondersteunende documenten; samen bepalen we een verificatiescope die past bij uw gebruikscontext.",
      primaryButton: "Offerte aanvragen",
      secondaryButton: "Terug naar diensten",
      detailLink: "Details",
    },
  },
  "responsible-mining-irma-readiness": mk(
    "Verantwoorde Mijnbouw En IRMA Verificatiegereedheid",
    "Verificatiegereedheid voor verantwoorde mijnbouw: locatiebewijs, governance en gap-sluiting; geen formele scheme-conclusie.",
    "Deel locatie en scope",
  ),
  "textile-traceability-recycled-review": mk(
    "Textieltraceerbaarheid En Gerecycled Materiaal Verificatie",
    "Verificatie van ketenstructuren, massabalanslogica en certificaatcontroles voor textielclaims.",
    "Deel product- en leverancierslagen",
  ),
  "zero-waste-review": mk(
    "Zero Waste Verificatiereview",
    "Verificatiegerichte review van divergentielogica, terugwinbewijs en afstemming op operationele data.",
    "Deel locaties en metrics",
  ),
};
