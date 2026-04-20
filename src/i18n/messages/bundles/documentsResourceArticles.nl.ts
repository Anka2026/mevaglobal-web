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
          "Betrouwbaarheid begint met een grensmodel dat past bij hoe de installatie werkt en hoe emissies worden toegeschreven. Onduidelijkheid tussen hoofdactiviteit, hulpprocessen en gedeelde infrastructuur leidt vaak tot herzieningen. Een gecontroleerde review toetst of het grensverhaal, het datamodel en de fysieke realiteit zonder verborgen overlappingen of hiaten op elkaar aansluiten.",
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
      "Samengevat is betrouwbaarheid voor CBAM-voorbereiding een systeemeigenschap—heldere grenzen, traceerbaar bewijs, transparante methodologie en gecontroleerde openbaarmaking—niet één kwaliteitsgetal op een voorblad.",
  },
  "carbon-verification-alignment": {
    category: "Koolstof",
    date: "2026-04-19",
    eyebrow: "Technische notitie",
    title: "Scope, Methodologie En Stakeholderverwachtingen Op Één Lijn Bij Koolstofverificatie",
    intro:
      "Koolstofverificatie faalt stilletjes als scope, methodologie en publiek uit de pas lopen: het technische dossier kan compleet zijn terwijl het externe verhaal nog weerbaar blijft. Sterke trajecten brengen drie lagen in één kader—wat binnen scope valt, welke norm en methode gelden, en wat externe lezers menen te zien—voordat bewijstests versnellen.",
    sections: [
      {
        title: "Scope als contract",
        body:
          "Scope is meer dan een grensdiagram. Het legt organisatorische en operationele grenzen, rapportageperioden en de rol van schattingen vast. Blijft scope impliciet, dan vullen reviewers en stakeholders gaten met eigen aannames. Een sterke voorbereiding definieert scope schriftelijk, koppelt die aan datastructuren en noemt uitsluitingen die voor interpretatie tellen.",
      },
      {
        title: "Methodologie als besluitspoor",
        body:
          "Methodologie is niet alleen formules; het is de gedocumenteerde onderbouwing voor activiteitsclassificatie, factorkeuze en omgaan met ontbrekende gegevens. Verificatieteams testen of keuzes stabiel over de periode zijn, gevoelige gevallen worden gemarkeerd en wijzigingen gecontroleerd verlopen. Dat spoor maakt een methodologie verdedigbaar in plaats van alleen bekend.",
      },
      {
        title: "Stakeholders zonder overclaim",
        body:
          "Investeerders, inkopers en toezichthouders leggen vaak andere nadruk—volledigheid, vergelijkbaarheid of auditgereedheid. Afstemming betekent het verificatiedoel expliciet te mappen: welke claims worden ondersteund, welke niet, en wat nodig is voor een hoger assurance-niveau of een ander gebruikscontext.",
      },
      {
        title: "Controlepunten die integriteit beschermen",
        body:
          "Goed ontworpen controlepunten—afstemmingen, onafhankelijke checks op grootste stromen, vastleggen van methodologiewijzigingen—verkleinen de kans op late verrassingen. Ze verkorten ook cycli omdat issues eerder in interne review naar boven komen dan bij externe weerlegging.",
      },
    ],
    closing:
      "Als scope, methodologie en verwachtingen in één coherent kader staan, wordt verificatie een gestructureerde toets van dat kader—geen achteraf debat over wat had moeten worden meegenomen.",
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
    category: "Assurance",
    date: "2026-04-19",
    eyebrow: "Technische notitie",
    title: "Waarom De Keuze Van Het Assurance-Niveau Ertoe Doet Bij Duurzaamheidsclaims",
    intro:
      "Assurance-niveaus geven aan hoeveel werk een onafhankelijke beoefenaar heeft verricht en welk type conclusie verantwoord kan worden getrokken. Te laag kiezen voor hoogrisico extern gebruik nodigt reputatie- en regelgevingsfrictie uit; te hoog kiezen zonder bewijs gereedheid verspilt moeite. De keuze hoort te volgen op gebruiksgeval, materialiteit en publiek—niet op gewoonte of sjabloontaal.",
    sections: [
      {
        title: "Beperkte versus redelijke assurance—wat verandert er",
        body:
          "Beperkte assurance draait om vragen en analytische procedures; redelijke assurance voegt bewijsdiepte en tests toe die zijn ontworpen om een hoge maar niet absolute mate van zekerheid te bereiken. Het verschil weegt voor kapitaalmarkten, ketenprogramma’s en publieke verklaringen waar lezers het rapport als primair bewijs lezen.",
      },
      {
        title: "Gebruikscontext en beslissingsrisico",
        body:
          "Dezelfde dataset kan beperkte assurance rechtvaardigen voor intern management en een hogere lat vereisen voor prospectusachtige claims of een inkoper-certificatiedrempel. Het in kaart brengen van beslissingsrisico—financiële blootstelling, merkimpact en regelgevende aandacht—maakt duidelijk welk niveau past bij de echte blootstelling van de organisatie.",
      },
      {
        title: "Openbare openbaarmaking en derdenvertrouwen",
        body:
          "Wanneer duurzaamheidsinformatie door klanten, kredietverstrekkers of toezichthouders wordt geciteerd, neemt afhankelijkheid toe. Assurance-tekst moet matchen met wat feitelijk is onderzocht: welke sites, perioden, metrieken en grenzen. Overschat geruststelling in marketing ten opzichte van het assurance-rapport is een terugkerende bron van geschillen.",
      },
      {
        title: "Gereedheid vóór de opdracht",
        body:
          "Hogere assurance vraagt sterkere controls, duidelijkere documentatie en vaak meer tijd. Organisaties die eerst een niveau kiezen en bewijs achteraf bijpassen, slagen zelden schoon. Een gedisciplineerd gereedheidsoverzicht—datalijnage, control-ontwerp en eigenaarschap in governance—ondersteunt zowel efficiënte assurance als geloofwaardige externe communicatie.",
      },
    ],
    closing:
      "Het assurance-niveau wordt het best gekozen als onderdeel van een bewuste openbaarmakingsstrategie: wat u moet zeggen, aan wie, onder welke scrutinite—en welke bewijsarchitectuur die houding geloofwaardig draagt.",
  },
};
