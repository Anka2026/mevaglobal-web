import type { Dictionary } from "../../types";

type Detail = Dictionary["pages"]["serviceDetails"][keyof Dictionary["pages"]["serviceDetails"]];

export const serviceDetailsExtraNl: Record<
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
    eyebrow: "Diensten",
    title: "GHG Protocol Beoordelingsondersteuning",
    intro:
      "De betrouwbaarheid van broeikasgasinventarissen en bijbehorende verklaringen die zijn opgesteld volgens het GHG Protocol hangt niet alleen af van de totale gerapporteerde emissies, maar ook van de duidelijkheid van organisatorische grenzen, de consistentie van scopekeuzes, de juiste behandeling van categorieën, de verdedigbaarheid van de rekenlogica en de traceerbaarheid van ondersteunende documentatie. Meva Global biedt onafhankelijke en gestructureerde technische beoordelingsondersteuning voor inventarissen en rapporten die zijn opgesteld in lijn met het GHG Protocol. Deze dienst helpt organisaties om hun datastructuur, methodologische keuzes en bewijsbasis systematisch te beoordelen in relatie tot hun rapportageniveau en beoogde externe gebruik.",
    sections: [
      {
        title: "Reikwijdte Van De Dienst",
        body: "Binnen deze dienst worden de organisatorische grenzen, operationele benadering, consolidatielogica, rapportagescope, relevante broeikasgascategorieën en het algemene rekenkader technisch beoordeeld. Inventarisstructuren op groeps- of faciliteitsniveau, datastromen, de keuze van emissiefactoren en belangrijke methodologische keuzes worden gezamenlijk getoetst aan de relevante verwachtingen van het GHG Protocol. Het doel is niet alleen om de bestaande inventaris te beoordelen, maar ook om duidelijk te maken in hoeverre deze klaar is voor extern gebruik en waar versterking nodig is.",
      },
      {
        title: "Focus Van De Beoordeling",
        body: "De beoordeling richt zich op grensafbakening, scopekeuze, waardeketencategorieën, activiteitsdata, rekenlogica, emissiefactoren, documentatiespoor en interne beheersmaatregelen als één samenhangend systeem. Waar relevant kan het proces steekproeven, herberekeningen, datavergelijkingen en beoordeling van ondersteunende documentatie omvatten. Daardoor gaat de beoordeling verder dan het gerapporteerde emissiecijfer en wordt zichtbaar hoe het resultaat is opgebouwd, welke methodologische keuzes eraan ten grondslag liggen en in welke mate het robuust onderbouwd kan worden.",
      },
      {
        title: "Waarom Dit Belangrijk Is",
        body: "Op het GHG Protocol gebaseerde broeikasgasdata worden steeds belangrijker in investeerderscommunicatie, klantverzoeken, ketenbeoordelingen, vrijwillige rapportagekaders en de voorbereiding op formele verificatie. Een goed gestructureerd beoordelingsproces vermindert het risico op inconsistentie tussen interne berekeningen en externe verklaringen, versterkt de traceerbaarheid en creëert een stevigere basis voor een volgende beoordelings- of verificatiestap. Tegelijk biedt het organisaties een duidelijker route naar betere datakwaliteit, sterkere documentatiediscipline en een hogere rapportagevolwassenheid.",
      },
      {
        title: "De Meva-Aanpak",
        body: "Meva Global levert deze dienst via heldere scopeafbakening, methodologiegerichte technische beoordeling, traceerbare bewijsstructuren en een onafhankelijke beoordelingsbenadering. Onze aanpak gaat verder dan het opstellen van een lijst met hiaten; wij maken duidelijk welke rapportagekeuzes al sterk zijn, waar nog zwakke punten bestaan en welke verbeteringen de betrouwbaarheid van de verklaring het meest versterken. Zo helpt deze aanpak organisaties om hun huidige inventarissen en rapporten beter verdedigbaar te maken en tegelijk sterker voorbereid te zijn op formele verificatie, beoordeling door derden of externe stakeholdercommunicatie.",
      },
    ],
    bottomCta:
      "Deel uw organisatorische grenzen, rapportagejaar, opgenomen categorieën en huidige rekenstructuur met ons, dan bepalen we samen een passende beoordelingsdiepte voor uw rapportagecontext.",
    primaryButton: "Offerte Aanvragen",
    secondaryButton: "Terug Naar Diensten",
    detailLink: "Details",
  },
  "eu-ets-mrv-assurance-support": {
    title: "EU ETS & MRV — assurance-ondersteuning",
    intro:
      "Onafhankelijke, assurance-georiënteerde technische review voor monitoring-, rapportage- en verificatiedatasets (MRV) in EU ETS-context—met focus op methodiekplausibiliteit, bewijstraceerbaarheid en documentatiediscipline. Geen vervanging van bevoegd gezag of wettelijke verificateursrollen.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Logica van het monitoringplan, dekking van emissiebronnen en tier-keuzes waar van toepassing",
        "Datastromen, meting en schattingsaanpakken voor materiële stromen",
        "Kruiscontroles tussen gerapporteerde cijfers en onderliggende bewijsrecords",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Installaties en scheepvaartexploitanten die MRV-aangiften en brandstofdata op schipniveau voorbereiden",
        "Energie-intensieve sectoren (bv. metalen, cement) die locatie-bewijspakketen aanscherpen",
        "Teams die locatiedata, kalibratielogboeken en niet-routine documentatie coördineren",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Risicogebaseerde steekproef op impactvolle parameters en ondersteunende documentatie",
        "Plausibiliteitschecks op allocatie, biomassafracties en rekenketens waar relevant",
        "Bevindingenlog met geprioriteerde sluitingsacties vóór externe indiening of reviewvensters",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "MRV-fouten en zwakke traceerbaarheid vergroten compliance- en reputatierisico",
        "Sterkere bewijsstructuur versnelt dialoog met verificateurs en interne accordering",
        "Stemt operationele data af op wat toezichthouders en schemes verwachten in het dossier",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Scope gekoppeld aan installatie of vlootsegment, rapportageperiode en toepasselijke regelset",
        "Onafhankelijke reviewer mindset: aannames uitdagen, traceerbaarheid testen",
        "Gecontroleerde woordkeuze—assurance-ondersteuning, geen vervanging van wettelijke verificatie",
      ],
    },
    cta: {
      title: "Bespreek je MRV-context",
      body: "Deel installatie- of vlootscope, monitoringaanpak en deadline. We stemmen reviewediepte af op risico en timing.",
    },
  },
  "shipping-emissions-mrv-review": {
    title: "Scheepvaartemissies — MRV-reviewondersteuning",
    intro:
      "Technische review-ondersteuning voor schip- en vlootemissiedata in EU MRV en aanverwante rapportagecontexten—nadruk op kwaliteit van reisdata, plausibiliteit van brandstofbalansen en verdedigbare documentatie voor externe bevraging.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Grenscontroles voor reizen, brandstofsoorten en perioden in de rapportage",
        "Plausibiliteit van verbruik, emissiefactoren en allocatie bij meerdere brandstoffen",
        "Documentatietrails van operationele records naar gerapporteerde totalen",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Reders en managers die noon reports, bunker delivery notes en BDN-bewijs consolideren",
        "Technisch management dat vlootinstrumenten afstemt op regelgevende templates",
        "Organisaties die assurance-ready dossiers voor charterpartijen of autoriteiten bouwen",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Steekproef over representatieve reizen en brandstofstromen",
        "Kruiscontroles tussen gerapporteerde data en primaire records waar beschikbaar",
        "Gap-lijst voor ontbrekend bewijs, onduidelijke allocatie of zwakke governance",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Scheepvaartdata zijn zichtbaar voor toezichthouders en commerciële tegenpartijen",
        "Sterke traceerbaarheid ondersteunt charter- en afnemervertrouwen",
        "Vermindert last-minute herstel vóór rapportagedeadlines",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Risicoscreening op vloot- en reisniveau vóór diepe steekproef",
        "Praktische focus op hoe data ontstaat, niet alleen op eindtotalen",
        "Outputs als review-ondersteuning met expliciete beperkingen",
      ],
    },
    cta: {
      title: "Deel je vlootrapportagescope",
      body: "Lever scheepslijst, rapportagejaar, brandstoffen en huidige datacompilatiemethode. We stellen steekproeflogica en bewijsverwachtingen voor.",
    },
  },
  "aviation-emissions-readiness-review": {
    title: "Luchtvaartemissies — gereedheidsreview (CORSIA / EU ETS)",
    intro:
      "Gereedheidsgerichte technische review voor monitoring en rapportage van luchtvaartemissies waar CORSIA en/of EU ETS van toepassing kan zijn—focus op schemaparameters, datagovernance en bewijsstructuur. Voorbereiding, geen scheme-accreditatie of officiële goedkeuring.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "High-level mapping van toepasselijkheid: welke scheme-elementen voor jouw operatie relevant kunnen zijn",
        "Data- en documentatiechecks voor brandstof, activiteit en allocatie zoals vaak bevraagd",
        "Gap-identificatie tegen typische externe reviewverwachtingen",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Luchtvaartmaatschappijen en exploitanten die brandstof- en vluchtdata voor scheme-rapportage bundelen",
        "Teams die vluchtoperaties, brandstofinkoop en duurzaamheidsrapportage verbinden",
        "Organisaties die gestructureerde voorbereiding zoeken vóór wettelijke verificatiecycli",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Gestructureerde vragenlijst en documentreview tegen je operatiemodel",
        "Gerichte steekproef op materiële routes, brandstoffen of datainterfaces",
        "Gereedheidsnotitie met geprioriteerde acties—zonder formele verificatie-uitkomst te claimen",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Scheme-rapportage is bewijsintensief; zwakke dossiers leveren bevindingen en vertraging",
        "Heldere voorbereiding vermindert wrijving met verificateurs en interne accordering",
        "Ondersteunt accurate interne vs. externe communicatie over gereedheid",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Expliciete afbakening van CORSIA vs EU ETS-onderwerpen die je vraagt",
        "Geen vervanging van regelgevingsinterpretatie—focus op technische traceerbaarheid en documentatie",
        "Professioneel ingetogen formulering van status en vervolgstappen",
      ],
    },
    cta: {
      title: "Verduidelijk je operatiecontext",
      body: "Deel vlootprofiel, relevante schemes en rapportagetijdlijn. We scopen een gereedheidsreview die past bij je risicoprofiel.",
    },
  },
  "verification-readiness-gap-analysis": {
    title: "Verificatiegereedheid & gap-analyse",
    intro:
      "Een gestructureerde pre-verificatiedienst voor organisaties die nog niet klaar zijn voor formele review—prioriteit aan hiaten in grenzen, methoden, data en documentatie zodat je efficiënt kunt sluiten vóór volledige verificatie.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Snelle diagnose tegen de standaard of het programma dat je voor ogen hebt (bv. ISO 14064-1, PCF, EPD-regels)",
        "Identificatie van hoog-risicogaten: ontbrekende records, onduidelijke allocatie, zwakke controls",
        "Roadmap: volgorde van herstelwerk en bewijsverzameling",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Eersteverificatieklanten die een bewijspakket uit gefragmenteerde systemen bouwen",
        "Teams na M&A of systeemwijzigingen die historische continuïteit verstoord is",
        "Organisaties met interne auditbevindingen die een extern georiënteerde gap-view zoeken",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Kick-off workshop en documentintake-checklist",
        "Gerichte sessies over grens, methodiek en data-architectuur",
        "Geschreven gap-register met ernstclassificatie en voorgestelde eigenaren",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Formele verificatie met grote hiaten kost tijd en budget",
        "Vroege zichtbaarheid vermindert verrassingen bij externe review",
        "Stemt technische, IT- en duurzaamheidsteams af op één bewijsmodel",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Uitkomst is diagnostisch—geen verificatieverklaring",
        "Pragmatische prioritering: must-fix vs. nice-to-have",
        "Optionele vervolgondersteuning afzonderlijk te scopen",
      ],
    },
    cta: {
      title: "Start met een beperkte diagnose",
      body: "Beschrijf je doelstandaard, rapportagejaar en huidige datalandschap. We stellen diepte en duur van de gap-analyse voor.",
    },
  },
  "data-evidence-readiness-review": {
    title: "Data- en bewijsgereedheidsreview",
    intro:
      "Gerichte review van hoe emissie-, milieu- en duurzaamheidsdata worden verzameld, getransformeerd en bewaard—gericht op traceerbaarheid van ruw bewijs naar gerapporteerde cijfers. Geschikt vóór verificatie, assurance of grote disclosures.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Data lineage: systemen, spreadsheets, meters en handmatige invoer",
        "Controlepunten: accordering, versioning, changelogs en toegangsgovernance",
        "Geschiktheid van steekproefstrategie voor de claims die je wilt maken",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Productiegroepen met verdeelde locaties en heterogene ERP-exporten",
        "Teams die nieuwe carbon accounting tools of ETL-pipelines invoeren",
        "Organisaties die afnemeraudits op datakwaliteit en documentatie verwachten",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Proces walkthrough en identificatie van single points of failure",
        "End-to-end tests op geselecteerde materiële datastromen",
        "Aanbevelingen om bewijspakketten en metadata te versterken",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Verificatie is maar zo sterk als de keten van bewijs naar claim",
        "Datagovernance-gaten zijn een veelvoorkomende bron van bevindingen",
        "Verbetert herhaalbaarheid voor jaar-op-jaar rapportage",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Samenwerkende sessies met IT, operations en duurzaamheid leads",
        "Risicogebaseerde focus op materiële stromen, geen uitputtende IT-certificatie",
        "Duidelijke scheiding van formele ISAE-style engagements tenzij apart afgesproken",
      ],
    },
    cta: {
      title: "Map je bewijsketen",
      body: "Deel rapportagegrens, kernsystemen en voorbeeldperiode. We passen de review aan je disclosure-pad aan.",
    },
  },
  "dpp-readiness-preverification": {
    title: "Digital Product Passport — data-gereedheid & pre-verificatie",
    intro:
      "Vooruitstrevende technische ondersteuning om milieu- en traceability-gerelateerde data te structureren voor Digital Product Passport-verwachtingen—nadruk op datakwaliteit, identifiers en verdedigbare claims zonder te impliceren dat een paspoort ‘geverifieerd’ is buiten afgesproken scope.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Mapping van data-attributen: welke PCF-, materiaal- en compliancevelden je wilt tonen",
        "Checks op herkomstdocumentatie en koppeling tussen productvarianten en datasets",
        "Governance voor updates, correcties en versiebeheer in passport-context",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Fabrikanten die DPP piloten voor EU-marktcategorieën uitvoeren",
        "Merken die leveranciers, LCA-teams en IT-platforms coördineren",
        "Teams die passport-data afstemmen op bestaande EPD/PCF-werkzaamheden",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Workshop over beoogde passport-scope en momentopname van regelgevingsverwachtingen",
        "Review van voorbeeld-SKU datapakketten",
        "Pre-verificatie-checklist afgestemd op wat latere onafhankelijke review zou testen",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Passport-data krijgt afnemer- en autoriteitsscrutiny—zwakke schakels vallen snel op",
        "Vroege structurering voorkomt dure rework wanneer regels aanscherpen",
        "Ondersteunt geloofwaardige productcommunicatie zonder greenwashing",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Regelgevingsbewust maar geen juridisch advies—focus op technische verdedigbaarheid",
        "Expliciete uitleg wat pre-verificatie wel en niet certificeert",
        "Integratie met bestaand ISO-gesteld milieuwerk waar relevant",
      ],
    },
    cta: {
      title: "Definieer je passport-pilot",
      body: "Deel productcategorie, markten en huidige milieudatasets. We stellen een gereedheidspad voor.",
    },
  },
  "sustainability-reporting-evidence-review": {
    title: "Duurzaamheidsrapportage — bewijsreview",
    intro:
      "Gestructureerde bewijsreview voor duurzaamheidsrapporten, bijlagen en geselecteerde KPI-disclosures—ondersteunt consistentie tussen narratieve claims en onderliggende berekeningen, zonder statutaire assurance tenzij formeel onder afgesproken criteria.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Kruiscontroles tussen gepubliceerde cijfers en werkboeken of derde partij-data",
        "Steekproeven op CO₂-, energie-, water- en afvalmetrics waar materieel",
        "Narratieve afstemming: geen ongefundeerde superlatieven of overdreven zekerheid",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Beursgenoteerde en grote private bedrijven met geïntegreerde of standalone duurzaamheidsrapporten",
        "Teams die CSRD-achtige verwachtingen koppelen aan legacy rapportageprocessen",
        "Communicatie- en duurzaamheidsleads die een extern georiënteerde technische review zoeken",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Materialiteitsgebaseerde selectie van te testen metrics en claims",
        "Gedocumenteerde bevindingen en managementresponses",
        "Optionele comfort-taal—begrensd en expliciet",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Stakeholders vergelijken verhalen met cijfers—inconsistentie ondermijnt vertrouwen",
        "Vermindert greenwashing-risico door gedisciplineerde taal en bewijs",
        "Bereidt voor op diepere assurance-cycli indien gewenst",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Geschreven protocol: metrics in scope, bewijstypen, steekproefaanpak",
        "Onafhankelijke reviewer-discipline los van communicatie-sign-off",
        "Geen wettelijke auditopinie—grenzen transparant",
      ],
    },
    cta: {
      title: "Stem scope af op je rapport",
      body: "Deel concept-metrictabel, ondersteunende bestanden en publicatietijdlijn. We stellen een begrensde review voor.",
    },
  },
  "f-gases-reporting-review": {
    title: "F-gassen rapportage — reviewondersteuning",
    intro:
      "Technische data- en documentatiereview voor fluorinated gas (F-gas) rapportagecontexten—ondersteunt volledigheid, methodiekplausibiliteit en traceerbaarheid voor regelgevende of interne compliance-dossiers. Reviewondersteuning, geen vervanging van juridische compliance-ondertekening.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Apparatuurinventarissen, vullingsrecords en lekveronderstellingen waar van toepassing",
        "Kruiscontroles tussen ingekochte hoeveelheden, servicelogboeken en gerapporteerde emissies",
        "Documentatie geschikt voor inspectie-achtige review",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Industriële sites met substantiële HVAC/R- en warmtepompvloten",
        "Teams die onderhoudscontractanten en koelmiddelinkoopdata coördineren",
        "Organisaties die F-gas-data afstemmen op bredere broeikasgasinventarissen",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Steekproef over hoog-gewicht apparatuur en materiële inkoopstromen",
        "Plausibiliteitschecks op emissiefactorgebruik en eenheidconsistentie",
        "Bevindingenregister met herstelrichting",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "F-gasemissies zijn gereguleerd en steeds zichtbaarder in corporate reporting",
        "Zwakke records vergroten compliance-risico en inventarisinconsistentie",
        "Ondersteunt afstemming tussen onderhoudspraktijk en gerapporteerde cijfers",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Gegrond in je apparatuurregister en beschikbare data",
        "Heldere communicatie wanneer engineering of juridische input ook nodig is",
        "Outputs als technische review, geen vertegenwoordiging bij toezichthouder",
      ],
    },
    cta: {
      title: "Deel je apparatuurbaseline",
      body: "Lever inventarisscope, koelmiddeltypes en rapportageperiode. We scopen steekproef en bewijsverwachtingen.",
    },
  },
  "buyer-value-chain-review": {
    title: "Ondersteuning bij Koper- en Waardeketenbeoordeling",
    intro:
      "Aangepast technisch beoordelingsmodel voor klantvereisten, verwachtingen in de waardeketen en second-party beoordelingscontexten—waar afgesproken maatwerkcriteria, steekproeflogica en gedocumenteerde uitkomsten. Geen vervanging van publieke certificeringsschema’s wanneer zo gebruikt; scope en criteria worden schriftelijk bevestigd.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Criteria-ontwerp: KPI’s, bewijstypen, slaag-/faal- of gegradeerde uitkomsten",
        "Leveranciersbewijsreview over locaties, producten of zendingenpartijen zoals afgesproken",
        "Rapportageformats voor inkoopboards en leveranciersontwikkelprogramma’s",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Industriële afnemers die consistente GHG- en milieubewijs van leveranciers eisen",
        "OEM’s met decarbonisatieprogramma’s en audit-achtige opvolging",
        "Branchesecretariaten die sectorbrede reviewtemplates coördineren",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Pilot op leverancierssubset, daarna opschaling",
        "Kalibratiesessies zodat leveranciers bewijsverwachtingen begrijpen",
        "Kwartaal- of jaarlijkse reviewcycli met trendrapportage",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Kwaliteit van ketendata is vaak de zwakste schakel in productclaims",
        "Onafhankelijke structuur verhoogt eerlijkheid en vermindert geschil",
        "Creëert herhaalbaar governance-model voorbij eenmalige audits",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Governance eerst: criteria, belangenverstrengeling en escalatie schriftelijk vastgelegd",
        "Bewijsgerichte tests met traceerbare bevindingen",
        "Outputs afgestemd op beoogd gebruik—vaak intern of gecontroleerd extern",
      ],
    },
    cta: {
      title: "Ontwerp programmacriteria",
      body: "Deel afnemerdoelen, leveranciersuniversum en risicobereidheid. We stellen een reviewmodel en pilotscope voor.",
    },
  },
  "iso-14068-readiness-review": {
    heroEyebrow: "Koolstofneutraliteit en net-zero",
    title: "ISO 14068 — Verificatie Van Koolstofneutraliteit En Net-Zero",
    intro:
      "De geloofwaardigheid van verklaringen over koolstofneutraliteit en net-zero hangt niet alleen af van de gerapporteerde emissieresultaten, maar ook van de afbakening van de grenzen, de consistentie van de reductiestrategie, de geschiktheid van een eventuele balansbenadering en de duidelijkheid van de ondersteunende bewijsstructuur. Meva Global biedt een onafhankelijke en gestructureerde technische verificatieaanpak voor verklaringen over koolstofneutraliteit en net-zero die verband houden met ISO 14068. Deze dienst versterkt de betrouwbaarheid en verdedigbaarheid van disclosures via een systematische beoordeling van emissiegrenzen, reductielogica, ondersteunende mechanismen en de bredere opbouw van de verklaring.",
    covers: {
      title: "Dienstomvang",
      bullets: [
        "Verklaringsgrenzen, emissieomvang, basisjaar- en prestatiebenadering, reductiestrategie, transitielogica en eventuele balancerende elementen",
        "Methodologisch kader, datastructuur en kernaannames achter neutraliteit of net-zero als één geheel",
        "Niet enkel de formulering toetsen, maar de technische en bewijsbare grondslag scherp krijgen",
      ],
    },
    forWho: {
      title: "Voor Wie",
      bullets: [
        "Duurzaamheids- en directieteams die neutraliteits- en net-zero-communicatie sturen",
        "Organisaties die investeerderswaardige en internationaal geloofwaardige klimaatclaims nastreven",
        "Teams die afbakening, reductiepad en balancerende elementen in één verhaal willen laten samenkomen",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Emissieomvang, databronnen, kwantificeringsstructuur, reductielogica, rol van balansbenadering, documentatiespoor en toelichting—integraal",
        "Steekproeven, dossierafstemming, methodologische controles en bewijstoetsing waar passend",
        "De claim en hoe zij tot stand kwam—en in hoeverre onderbouwing haalbaar is",
      ],
    },
    whyMatters: {
      title: "Waarom Het Ertoe Doet",
      bullets: [
        "Deze verklaringen zitten centraal in klantdialoog, duurzaamheidsrapportage, investeerdersreview en internationale verwachtingen",
        "Strakke verificatie vergroot vertrouwen, beperkt misinterpretatie en reputatierisico en versterkt disclosure-discipline",
        "Betere basis voor datagovernance, transitieplanning en volwassenere rapportage",
      ],
    },
    approach: {
      title: "De Meva-Aanpak",
      bullets: [
        "Methodiekgerichte technische beoordeling, traceerbare bewijsarchitectuur en onafhankelijke besluitvorming",
        "Niet alleen de tekst—afbakening, reductiearchitectuur, ondersteunende mechanismen en onderliggende datastromen",
        "Sterkere actuele communicatie én veerkrachtigere infrastructuur voor klimaatclaims voor wat volgt",
      ],
    },
    cta: {
      title: "",
      body: "Deel uw verklaringsafgrenzing, rapportageaanpak en huidige bewijsstructuur; samen stemmen we verificatieomvang en beoordelingsverwachtingen af op uw situatie.",
      primaryButton: "Offerte Aanvragen",
      secondaryButton: "Terug Naar Diensten",
      detailLink: "Details",
    },
  },
  "mock-verification-review": {
    title: "Mock Verification Review",
    intro:
      "Beperkte onafhankelijke beoordeling om de gereedheid te testen en zwakke punten vast te stellen vóór formele verificatie—verificatie-achtige scherpte op geselecteerde materiële stromen zonder formele verificatieverklaring.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Steekproefachtige tests op prioritaire datasets, controls en berekeningsstappen",
        "Bevindingen gestructureerd zoals bij verificatie, zonder formele verklaring",
        "Geprioriteerde remediëring vóór de echte opdracht",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Eerste verificatietrajecten en complexe multi-site organisaties",
        "Programma’s waar leiding assurance wil vóór volledige inzet",
        "Situaties met strakke disclosure-deadlines en weinig ruimte voor verrassing",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Afgesproken steekproefplan op materiële bronnen of productlijnen",
        "Interview-achtige checks op governance en recordkeeping",
        "Mock-bevindingennotitie met ernst-rangschikking",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Verrassingen tijdens formele verificatie zijn duur en reputatierisico",
        "Bouwt vertrouwdheid met bewijsverwachtingen in het team",
        "Verbetert de kwaliteit van het uiteindelijke bewijsdossier",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Transparante scope: mock is geen vervanging voor formele verificatie",
        "Onafhankelijke reviewerdiscipline in lijn met assurance-principes",
        "Output gericht op leren, niet op compliance-theater",
      ],
    },
    cta: {
      title: "Bepaal wat u wilt stress-testen",
      body: "Deel systemen, locaties of producten die u wilt laten beoordelen en uw beoogde verificatievenster. We stellen steekproefdiepte en planning voor.",
    },
  },
  "green-claim-review": {
    title: "Beoordeling van Milieuclaims / Green Claims",
    intro:
      "Onafhankelijke technische beoordeling van milieuclaims, productverklaringen en communicatietaal—focus op voldoende onderbouwing, claimgrenzen en risico op overdrijving vóór publicatie of verspreiding naar afnemers.",
    covers: {
      title: "Wat dit omvat",
      bullets: [
        "Mapping van claims naar onderliggende studies, inventarissen en certificaten",
        "Controles op grenzen, vergelijkingsuitspraken en superlatieven",
        "Risiconotities bij greenwashing in door u aangegeven kernmarkten",
      ],
    },
    forWho: {
      title: "Voor wie",
      bullets: [
        "Marketing- en productteams die verpakking, datasheets en campagnes voorbereiden",
        "Duurzaamheidsteams die publieke taal afstemmen op geverifieerd bewijs",
        "Legal/compliance-teams die een onafhankelijke technische lezing zoeken",
      ],
    },
    typicalScope: {
      title: "Focus Van De Beoordeling",
      bullets: [
        "Claim-inventaris over geselecteerde kanalen en SKU’s",
        "Bewijsvoldoendeheid tegen de gestelde grenzen",
        "Voorgestelde woordkeuzes en escalatiepunten",
      ],
    },
    whyMatters: {
      title: "Waarom het telt",
      bullets: [
        "Toezichthouders en afnemers bevragen milieuboodschappen steeds vaker",
        "Niet-afgestemde taal kan anders geloofwaardig technisch werk ondermijnen",
        "Vroege review vermindert recall- en reputatierisico",
      ],
    },
    approach: {
      title: "Zo werkt Meva",
      bullets: [
        "Technische review, geen juridisch advies—rollen waar nodig scherp gescheiden",
        "Bewijs eerst, met expliciete beperkingen op marketinginterpretatie",
        "Pragmatische output voor multidisciplinaire goedkeuring",
      ],
    },
    cta: {
      title: "Stuur conceptclaims en bewijsverwijzingen",
      body: "Deel de claimset, doelgroep en ondersteunende studies of verificatiereferenties. We bepalen een evenredige review.",
    },
  },
};
