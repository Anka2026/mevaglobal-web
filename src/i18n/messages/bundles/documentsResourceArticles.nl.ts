import type { ResourceArticleDetail } from "@/i18n/types";
import type { ResourceArticleSlug } from "@/data/resourceArticleSlugs";

export const documentsResourceArticlesNl: Record<ResourceArticleSlug, ResourceArticleDetail> = {
  "cbam-reliable-emissions-data": {
    category: "CBAM",
    date: "2026-04-19",
    eyebrow: "Technische notitie",
    title: "Wat “Betrouwbare Emissiegegevens” In De Praktijk Betekent Bij CBAM-Voorbereiding",
    intro:
      "Voor CBAM-gerelateerde verklaringen is “betrouwbaar” geen slogan maar een bundel technische eigenschappen: grenzen die passen bij de werkelijke installatie, activiteitsgegevens die naar bewijs te herleiden zijn, expliciet vastgelegde factoren en aannames, en een rapportage-opbouw die standhoudt bij douane en commerciële tegenpartijen. Hieronder staat hoe beoordelaars die eigenschappen toetsen voordat een aangifte als verdedigbaar wordt gezien.",
    sections: [
      {
        title: "Grenzen en installatielogica",
        body:
          "Betrouwbaarheid begint met een grensmodel dat past bij hoe de installatie werkt en hoe emissies worden toegeschreven. Onduidelijkheid tussen hoofdactiviteit, hulpprocessen en gedeelde infrastructuur leidt vaak tot herzieningen. Een systematische review toetst of het grensverhaal, het datamodel en de fysieke realiteit zonder verborgen overlappingen of hiaten op elkaar aansluiten.",
      },
      {
        title: "Bewijsdiepte en traceerbaarheid",
        body:
          "Cijfers moeten naar brondocumenten leiden: meting waar passend, inkoop- en procesdata waar niet, en een heldere omgang met schattingen. Beoordelaars zoeken een audittrail die beschrijft hoe elke materiaal- en energiestroom wordt vastgelegd, getransformeerd en geaggregeerd—niet alleen dat een totaal bestaat, maar dat een onafhankelijke partij het zonder giswerk kan reconstrueren.",
      },
      {
        title: "Methodologie, factoren en aannames",
        body:
          "Standaardfactoren, landspecifieke waarden en installatiemetingen hebben elk gebruiksvoorwaarden. Betrouwbaarheid vereist dat de factorkeuze gedocumenteerd is, consistent over perioden tenzij wijziging onderbouwd is, en aansluit op de verklaarde systeemgrenzen. Aannames moeten zichtbaar zijn: waar ze het resultaat raken en hoe gevoelig uitkomsten zijn voor andere verdedigbare keuzes.",
      },
      {
        title: "Openbaarmakingsdiscipline voor extern gebruik",
        body:
          "Tot slot omvat betrouwbaarheid taaldiscipline: wat wel of niet is geverifieerd versus gemodelleerd, wat uit ontwerp is uitgesloten en hoe onzekerheid wordt gecommuniceerd voor inkoop- en compliance-lezers. Een verklaring die precies klinkt maar grenzen verzwijgt, faalt bij stakeholders zelfs als de rekenkunde klopt.",
      },
    ],
    closing:
      "Samengevat is betrouwbaarheid voor CBAM-voorbereiding een systeemeigenschap—heldere grenzen, traceerbaar bewijs, transparante methodologie en gedisciplineerde openbaarmaking—niet één kwaliteitsgetal op een voorblad.",
  },
  "carbon-verification-alignment": {
    category: "Koolstof",
    date: "2026-04-19",
    eyebrow: "Technische notitie",
    title: "Scope, methodologie en stakeholderverwachtingen bij koolstofverificatie",
    intro:
      "Geloofwaardigheid bij koolstofverificatie hangt af van grenshelderheid, methodologische consistentie en wat externe lezers begrijpen te beoordelen. Een compleet technisch dossier kan toch kwetsbaar blijven als toelichting, scopegrenzen of aannames zwak zijn. Deze notitie vat samen hoe die drie lagen worden opgebouwd vóór onafhankelijke technische beoordeling verscherpt.",
    sections: [
      {
        title: "Afbakening van scope en grenzen",
        body:
          "Scope legt organisatorische en operationele grenzen, de rapportageperiode en waar schatting wordt toegepast vast. Een grensdiagram alleen volstaat niet—datamodel, vestigingenlijst en motivering van uitgesloten activiteiten moeten als één dossier leesbaar zijn. Heldere scope voorkomt dat reviewers gaten invullen met eigen aannames.",
      },
      {
        title: "Methodologische consistentie en beheer van aannames",
        body:
          "Methodologie is niet alleen formules; het is een gedocumenteerde besluitenset voor activiteitsclassificatie, emissiefactoren en ontbrekende gegevens. Consistentie over perioden, markering van gevoelige posten en gecontroleerd beheer van wijzigingen staan centraal. Aannames blijven zichtbaar; effect en gevoeligheid voor redelijke alternatieven worden expliciet besproken.",
      },
      {
        title: "Verwachtingen van belanghebbenden en betrouwbaarheid van verklaringen",
        body:
          "Investeerders, inkopers en toezichthouders kunnen volledigheid, vergelijkbaarheid of auditgereedheid anders benadrukken. Het verificatiedoel moet daar expliciet op worden afgestemd: welke uitkomsten worden ondersteund, welke beperkingen gelden en welke verdere beoordeling nodig is. Toelichting mag de bewijsdiepte van het dossier niet overschrijden.",
      },
      {
        title: "Onderbouwing van bevindingen met traceerbare registraties",
        body:
          "Afstemmingen, onafhankelijke controles op grootste stromen en vastlegging van methodologiewijzigingen versterken hoe bevindingen door registraties worden gedragen. Een goed dossier presenteert werkdocumenten, bronkoppelingen en een besluitenspoor samen. Issues komen dan naar voren in interne review in plaats van bij externe weerlegging.",
      },
    ],
    closing:
      "Wanneer scope, methodologie en verwachtingen in één coherent kader zijn vastgelegd, wordt verificatie een gedocumenteerde, op bewijs gebaseerde toets van dat kader—geen achteraf debat over wat had moeten worden meegenomen.",
  },
  "epd-lca-critical-weaknesses": {
    category: "EPD / LCA",
    date: "2026-04-19",
    eyebrow: "Technische notitie",
    title: "Veelvoorkomende Zwakke Plekken Bij EPD- En LCA-Critical Review",
    intro:
      "Critical review bij EPD- en LCA-werk is geen cosmetische poort; hier komen methodologische keuzes onder externe druk. Thema’s keren terug over programma’s en productcategorieën: onduidelijk doel en scope, kwetsbare data voor impactrijke fasen, allocatieshortcuts en interpretatie die voorbij het model reikt. Deze patronen vroeg herkennen vermindert rework en beschermt publicatiekwaliteit.",
    sections: [
      {
        title: "Doel, scope en functionele eenheid",
        body:
          "Zwakke studies claimen vergelijkbaarheid zonder functionele eenheid die neutrale lezers accepteren. Critical review toetst of de eenheid past bij de vraag die de studie beantwoordt en of systeemgrenzen nog kloppen als het product in de echte marktcontext wordt geplaatst.",
      },
      {
        title: "Datakwaliteit en traceerbaarheid van voorgrondgegevens",
        body:
          "Achtergronddatabases zijn nodig; voorgronddatakwaliteit bepaalt vaak geloofwaardigheid. Reviewers letten op representatieve tijdvensters, leveranciersspecifiek versus generiek data en behandeling van uitbijters. Een dun bewijsspoor voor de grootste massa- of energiestromen is een veelvoorkomende bevinding.",
      },
      {
        title: "Allocatie en multifunctionaliteit",
        body:
          "Allocatieregels die modelleren vergemakkelijken maar technisch zwak zijn, komen vaak voor. Critical review onderzoekt of allocatie fysieke causaliteit of economische relaties weerspiegelt zoals de PCR vereist, en of andere verdedigbare allocaties conclusies materieel zouden veranderen.",
      },
      {
        title: "Scenario’s, interpretatie en rapportageconsistentie",
        body:
          "Scenariodefinities moeten reproduceerbaar zijn en resultaatentabellen moeten aansluiten op narratieve claims. Inconsistente afronding, wisselen tussen scenario’s zonder duidelijke regels of taal die bredere conclusies suggereert dan het model draagt, zijn typische bevindingen.",
      },
    ],
    closing:
      "Sterke critical-review-resultaten hangen minder af van het polijsten van tabellen dan van het aanscherpen van de logische keten van doel en scope via data naar interpretatie—voordat de verklaring publieke stakeholders bereikt.",
  },
  "sustainability-assurance-levels": {
    category: "Technische beoordeling",
    date: "2026-04-19",
    eyebrow: "Technische notitie",
    title: "Keuze Van Beoordelingsdiepte Bij Duurzaamheidsclaims",
    intro:
      "Onafhankelijke beoordelingsniveaus kaderen bewijsdiepte, methodcontroles en het type conclusie dat kan worden geformuleerd. Het niveau moet volgen op gebruikscontext, beslissingsrisico en verwachtingen van belanghebbenden—niet op sjablonen of marketingtaal.",
    sections: [
      {
        title: "Beperkte versus redelijke assurance",
        body:
          "Het verschil tussen beperkte en redelijke assurance is niet alleen een label; het vereist verschillende beoordelingsintensiteit op het gebied van datadiepte, bewijsdekking, methodcontroles en verwachtingen van belanghebbenden. Beperkte assurance steunt op vragen en analytische procedures met smallere bewijsdiepte; redelijke assurance richt zich op bredere tests en bewijsbreedte—zonder absolute zekerheid te suggereren.",
      },
      {
        title: "Gebruikscontext en beslissingsrisico",
        body:
          "Gebruikscontext en beslissingsrisico zijn de belangrijkste drijfveren van een passende beoordelingsdiepte. Dezelfde dataset kan een lichter pakket rechtvaardigen voor intern management, terwijl een prospectusachtige claim of inkopersdrempel sterkere bewijzen en control-volwassenheid vereist. Financiële blootstelling, merkimpact en regelgevende aandacht horen samen te worden gelezen.",
      },
      {
        title: "Openbare openbaarmaking en vertrouwen van derden",
        body:
          "Waar openbare openbaarmaking en vertrouwen van derden spelen, moeten scope, methodologie en bewijsset van de verklaring worden ondersteund door een sterkere technische dossierstructuur. Gepubliceerde assurance-tekst moet aansluiten op de operationele werkelijkheid: welke locaties, perioden, metrieken en grenzen in scope waren. Marketingtaal die de technische output overtreft, is een terugkerende bron van geschillen.",
      },
      {
        title: "Voorbereiding vóór de opdracht",
        body:
          "Voorbereiding vóór de opdracht omvat data-eigenaarschap, methodologieregistraties, grensdefinities en verifieerbaar bewijs dat is geordend voor beoordeling. Diepere onafhankelijke beoordeling vraagt doorgaans sterkere controls, duidelijkere documentatie en meer tijd. Organisaties die eerst een niveau kiezen en bewijs achteraf bijpassen, bereiken zelden consistente uitkomsten.",
      },
    ],
    closing:
      "Beoordelingsdiepte wordt het best gekozen als onderdeel van een bewuste openbaarmakingsstrategie: wat moet worden gezegd, aan wie, onder welk technisch kader—en of de bewijsarchitectuur die houding geloofwaardig draagt.",
  },
};
