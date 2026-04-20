import type { Locale } from "@/i18n/locales";

/**
 * Service catalogue rows (titles/summaries for cards + routing). Which slugs appear on `/verification-services`
 * and in which group/order is defined only in `src/lib/verification/verificationServiceRegistry.ts`.
 * Detail page copy lives in i18n `pages.serviceDetails[slug]` (merged in `loadServiceDetailContext`).
 */

export type Service = {
  slug:
    | "iso-14064-1"
    | "iso-14064-2"
    | "ghg-protocol-review-support"
    | "iso-14067"
    | "iso-14046"
    | "lca-review"
    | "epd-verification"
    | "cbam-verification-support"
    | "eu-ets-verification-review"
    | "eu-ets-mrv-assurance-support"
    | "shipping-emissions-mrv-review"
    | "aviation-emissions-readiness-review"
    | "verification-readiness-gap-analysis"
    | "data-evidence-readiness-review"
    | "dpp-readiness-preverification"
    | "sustainability-reporting-evidence-review"
    | "f-gases-reporting-review"
    | "f-gases-verification-review"
    | "maritime-mrv-verification-review"
    | "asi-readiness-review"
    | "custom-verification"
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
    | "non-financial-data-control-review";
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  typicalUse: Record<Locale, string[]>;
  whatWeDo: Record<Locale, string[]>;
  deliverables: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    slug: "iso-14064-1",
    title: {
      en: "ISO 14064-1 Corporate Greenhouse Gas Verification",
      tr: "ISO 14064-1 Kurumsal Sera Gazı Doğrulaması",
      nl: "ISO 14064-1 Organisatorische Broeikasgasverificatie",
    },
    summary: {
      en: "Independent verification of corporate GHG inventories—organisational boundaries, consolidation, and traceable calculation logic.",
      tr: "Kurumsal sera gazı envanterinde sınırlar, konsolidasyon ve izlenebilir hesaplama mantığı üzerinde bağımsız doğrulama.",
      nl: "Onafhankelijke verificatie van organisatorische broeikasgasinventarissen: grenzen, consolidatie en traceerbare rekenlogica.",
    },
    typicalUse: {
      en: ["Corporate reporting", "Investor disclosures", "Baseline years"],
      tr: ["Kurumsal raporlama", "Yatırımcı açıklamaları", "Baz yılları"],
      nl: ["Corporate rapportage", "Investeerdersdisclosures", "Baselinejaren"],
    },
    whatWeDo: {
      en: ["Boundary and consolidation review", "Evidence-led testing and recalculation checks", "Traceable findings and closure discipline"],
      tr: ["Sınır ve konsolidasyon incelemesi", "Kanıt odaklı test ve yeniden hesaplama kontrolleri", "İzlenebilir bulgular ve kapanış disiplini"],
      nl: ["Grens- en consolidatiereview", "Bewijsgerichte tests en herberekening", "Traceerbare bevindingen en sluitingsdiscipline"],
    },
    deliverables: {
      en: ["Verification statement with reference number", "Findings log and closure record"],
      tr: ["Referans numaralı doğrulama beyanı", "Bulgu kaydı ve kapanış kaydı"],
      nl: ["Verificatieverklaring met referentienummer", "Bevindingenlog en sluitingsdossier"],
    },
  },
  {
    slug: "iso-14064-2",
    title: {
      en: "ISO 14064-2 Project Greenhouse Gas Verification",
      tr: "ISO 14064-2 Proje Sera Gazı Doğrulaması",
      nl: "ISO 14064-2 Projectbroeikasgasverificatie",
    },
    summary: {
      en: "Independent verification of project-level reduction and removal claims—monitoring logic, evidence, and reporting discipline.",
      tr: "Proje düzeyinde azaltım ve giderim beyanlarında izleme mantığı, kanıt ve raporlama disiplinine yönelik bağımsız doğrulama.",
      nl: "Onafhankelijke verificatie van projectclaims over reductie en verwijdering: monitoringlogica, bewijs en rapportagediscipline.",
    },
    typicalUse: {
      en: ["Reduction projects", "Carbon programmes", "Monitoring plans"],
      tr: ["Azaltım projeleri", "Karbon programları", "İzleme planları"],
      nl: ["Reductieprojecten", "Carbonprogramma’s", "Monitoringplannen"],
    },
    whatWeDo: {
      en: ["Baseline and scenario plausibility", "Sampling on core parameters", "Independent decision workflow"],
      tr: ["Baz ve senaryo makullüğü", "Temel parametrelerde örnekleme", "Bağımsız karar iş akışı"],
      nl: ["Plausibiliteit baseline en scenario", "Steekproeven op kernparameters", "Onafhankelijke besluitworkflow"],
    },
    deliverables: {
      en: ["Verification statement with reference number", "Technical review record"],
      tr: ["Referans numaralı doğrulama beyanı", "Teknik inceleme kaydı"],
      nl: ["Verificatieverklaring met referentienummer", "Technisch reviewdossier"],
    },
  },
  {
    slug: "iso-14068-readiness-review",
    title: {
      en: "ISO 14068 Carbon Neutrality And Net-Zero Verification",
      tr: "ISO 14068 Karbon Nötrlüğü Ve Net-Sıfır Doğrulaması",
      nl: "ISO 14068 Koolstofneutraliteit En Net-Zero-Verificatie",
    },
    summary: {
      en: "Verification-led technical assessment of neutrality and net-zero claims—methodology, evidence depth, and disclosure-ready language.",
      tr: "Karbon nötrlüğü ve net-sıfır beyanlarında metodoloji, kanıt derinliği ve dış kullanıma uygun dil üzerine doğrulama odaklı teknik değerlendirme.",
      nl: "Verificatiegerichte technische beoordeling van neutraliteit en net-zero: methodiek, bewijsdiepte en disclosure-klare formulering.",
    },
    typicalUse: {
      en: ["Neutrality / net-zero disclosures", "Investor and stakeholder scrutiny", "Board and ESG oversight"],
      tr: ["Karbon nötrlüğü / net-sıfır açıklamaları", "Yatırımcı ve paydaş incelemesi", "Yönetim kurulu ve ESG denetimi"],
      nl: ["Disclosures over neutraliteit en net-zero", "Investeerders- en stakeholderdruk", "Board- en ESG-toezicht"],
    },
    whatWeDo: {
      en: ["Statement scope and emissions architecture review", "Evidence-led review of reduction pathways and balancing", "Independent verification judgement with traceable findings"],
      tr: ["Beyan kapsamı ve emisyon mimarisi incelemesi", "Azaltım yolları ve dengeleme için kanıt odaklı inceleme", "İzlenebilir bulgularla bağımsız doğrulama değerlendirmesi"],
      nl: ["Beoordeling van verklaringsomvang en emissiearchitectuur", "Bewijsgerichte review van reductieroutes en balancing", "Onafhankelijke verificatie-oordelen met traceerbare bevindingen"],
    },
    deliverables: {
      en: ["Verification outputs aligned to agreed scope", "Findings register and closure record"],
      tr: ["Üzerinde anlaşılan kapsamla uyumlu doğrulama çıktıları", "Bulgu kaydı ve kapanış kaydı"],
      nl: ["Verificatie-output passend bij de overeengekomen scope", "Bevindingenlog en sluitingsdossier"],
    },
  },
  {
    slug: "ghg-protocol-review-support",
    title: {
      en: "GHG Protocol Review Support",
      tr: "GHG Protocol İnceleme Desteği",
      nl: "GHG Protocol Beoordelingsondersteuning",
    },
    summary: {
      en: "Independent, structured technical review support for GHG Protocol inventories and reports—strengthening boundaries, methodology, evidence quality and disclosure readiness without replacing programme governance or scheme-specific requirements.",
      tr: "GHG Protocol çerçevesinde hazırlanan envanter ve raporlar için bağımsız ve yapılandırılmış teknik inceleme desteği; sınırlar, metodoloji, kanıt kalitesi ve açıklama hazırlığını güçlendirir—kurumsal program yönetiminin veya şemaya özgü kuralların yerini almaz.",
      nl: "Onafhankelijke, gestructureerde technische beoordelingsondersteuning voor inventarissen en rapporten volgens het GHG Protocol—versterkt grenzen, methodiek, bewijskwaliteit en disclosure-gereedheid; geen vervanging van programmagovernance of schemespecifieke eisen.",
    },
    typicalUse: {
      en: ["Consolidated group reporting", "Investor- and buyer-facing disclosures", "Verification preparation"],
      tr: ["Konsolide grup raporlaması", "Yatırımcı ve alıcı odaklı açıklamalar", "Doğrulama hazırlığı"],
      nl: ["Geconsolideerde groepsrapportage", "Disclosures richting investeerders en afnemers", "Voorbereiding op verificatie"],
    },
    whatWeDo: {
      en: ["Boundary, scope and consolidation review against Protocol expectations", "Evidence-led testing of activity data, factors and calculation logic", "Clear findings to support next review or verification steps"],
      tr: ["Protokol beklentilerine göre sınır, kapsam ve konsolidasyon incelemesi", "Aktivite verileri, faktörler ve hesaplama mantığı üzerinde kanıt odaklı test", "Sonraki inceleme veya doğrulama adımlarını destekleyen net bulgular"],
      nl: ["Review van grens, scope en consolidatie tegen Protocol-verwachtingen", "Bewijsgerichte tests op activiteitsdata, factoren en rekenlogica", "Duidelijke bevindingen voor vervolgstappen in review of verificatie"],
    },
    deliverables: {
      en: ["Structured review outputs aligned to agreed scope", "Findings register with improvement themes"],
      tr: ["Üzerinde anlaşılan kapsamla uyumlu yapılandırılmış inceleme çıktıları", "İyileştirme temaları içeren bulgu kaydı"],
      nl: ["Gestructureerde review-output passend bij de overeengekomen scope", "Bevindingenlog met verbeteringsthema’s"],
    },
  },
  {
    slug: "iso-14067",
    title: {
      en: "ISO 14067 Product Carbon Footprint Verification",
      tr: "ISO 14067 Ürün Karbon Ayak İzi Doğrulaması",
      nl: "ISO 14067 Product Carbon Footprint-Verificatie",
    },
    summary: {
      en: "Product carbon footprint verification—system boundaries, data quality, emission factors, and how results are positioned for external stakeholders.",
      tr: "Ürün karbon ayak izi doğrulaması; sistem sınırları, veri kalitesi, emisyon faktörleri ve sonuçların dış paydaşlara nasıl sunulduğu.",
      nl: "Verificatie van product carbon footprint: systeemgrenzen, datakwaliteit, emissiefactoren en framing richting externe stakeholders.",
    },
    typicalUse: {
      en: ["Buyer questionnaires", "Green procurement", "Product comparisons"],
      tr: ["Alıcı anketleri", "Yeşil satın alma", "Ürün karşılaştırmaları"],
      nl: ["Afnemervragenlijsten", "Groene inkoop", "Productvergelijkingen"],
    },
    whatWeDo: {
      en: ["System boundary and hotspot review", "Data quality and factor checks", "Claim wording vs evidence"],
      tr: ["Sistem sınırı ve sıcak nokta incelemesi", "Veri kalitesi ve faktör kontrolleri", "İddia dili ve kanıt uyumu"],
      nl: ["Review systeemgrens en hotspots", "Datakwaliteit en factorchecks", "Afstemming claimtekst en bewijs"],
    },
    deliverables: {
      en: ["Verification statement where in scope", "Findings and improvement notes"],
      tr: ["Kapsamda doğrulama beyanı", "Bulgular ve iyileştirme notları"],
      nl: ["Verificatieverklaring waar in scope", "Bevindingen en verbeterpunten"],
    },
  },
  {
    slug: "iso-14046",
    title: {
      en: "ISO 14046 Water Footprint Verification",
      tr: "ISO 14046 Su Ayak İzi Doğrulaması",
      nl: "ISO 14046 Verificatie water footprint",
    },
    summary: {
      en: "Independent technical verification of water footprint data through system boundaries, data structure, and methodological conformity.",
      tr: "Su ayak izi verilerinin sistem sınırları, veri yapısı ve metodolojik uygunluğu üzerinden bağımsız teknik doğrulama.",
      nl: "Onafhankelijke technische verificatie van water footprint-data op basis van systeemgrenzen, datastructuur en methodologische conformiteit.",
    },
    typicalUse: {
      en: ["Site and product disclosures", "Sustainability reporting", "Stakeholder Q&A"],
      tr: ["Tesis ve ürün açıklamaları", "Sürdürülebilirlik raporlaması", "Paydaş soru-cevap"],
      nl: ["Locatie- en productdisclosures", "Duurzaamheidsrapportage", "Stakeholder Q&A"],
    },
    whatWeDo: {
      en: ["Boundary and allocation review", "Data quality and evidence checks", "Limitations clarity for external use"],
      tr: ["Sınır ve tahsis incelemesi", "Veri kalitesi ve kanıt kontrolleri", "Dış kullanım için sınırlılık netliği"],
      nl: ["Review grens en allocatie", "Datakwaliteit en bewijschecks", "Helderheid beperkingen voor extern gebruik"],
    },
    deliverables: {
      en: ["Review statement where applicable", "Findings summary and closure actions"],
      tr: ["Uygunsa inceleme beyanı", "Bulgular özeti ve kapanış aksiyonları"],
      nl: ["Reviewverklaring waar van toepassing", "Bevindingensamenvatting en sluitingsacties"],
    },
  },
  {
    slug: "lca-review",
    title: {
      en: "LCA Technical Review",
      tr: "LCA Teknik İncelemesi",
      nl: "LCA Technische Beoordeling",
    },
    summary: {
      en: "Independent technical review of goal and scope, data and modelling choices, and interpretation—strengthening the reliability of LCA-based environmental disclosures.",
      tr: "Amaç ve kapsam, veri ve modelleme tercihleri ile yorum katmanının bağımsız teknik incelenmesi; LCA temelli çevresel açıklamaların güvenilirliğini güçlendirir.",
      nl: "Onafhankelijke technische beoordeling van doel en scope, data- en modelleerkeuzes en interpretatie—ter versterking van de betrouwbaarheid van LCA-gebaseerde milieuverklaringen.",
    },
    typicalUse: {
      en: ["Environmental marketing", "EPD background studies", "Comparative assertions"],
      tr: ["Çevresel pazarlama", "EPD arka plan çalışmaları", "Karşılaştırmalı iddialar"],
      nl: ["Milieumarketing", "EPD-achtergrondstudies", "Vergelijkende beweringen"],
    },
    whatWeDo: {
      en: ["Goal & scope coherence", "Assumptions, allocation, sensitivity", "Claim suitability and limitations"],
      tr: ["Amaç ve kapsam tutarlılığı", "Varsayımlar, tahsis, duyarlılık", "İddia uygunluğu ve sınırlılıklar"],
      nl: ["Coherentie doel & scope", "Aannames, allocatie, sensitiviteit", "Geschiktheid claims en beperkingen"],
    },
    deliverables: {
      en: ["Critical review report", "Findings log and closure actions"],
      tr: ["Kritik inceleme raporu", "Bulgu kaydı ve kapanış aksiyonları"],
      nl: ["Critical review-rapport", "Bevindingenlog en sluitingsacties"],
    },
  },
  {
    slug: "epd-verification",
    title: {
      en: "EPD Verification",
      tr: "EPD Doğrulaması",
      nl: "EPD Verificatie",
    },
    summary: {
      en: "Independent verification of Environmental Product Declarations—PCR and programme conformity, evidence traceability, and publication-ready rigour.",
      tr: "Çevresel Ürün Beyanlarında PCR ve program uyumu, kanıt izlenebilirliği ve yayıma hazır disiplin üzerine bağımsız doğrulama.",
      nl: "Onafhankelijke verificatie van Environmental Product Declarations: PCR- en programma-conformiteit, bewijstraceerbaarheid en publicatierijpe discipline.",
    },
    typicalUse: {
      en: ["EPD publication", "Green procurement", "Product category rules"],
      tr: ["EPD yayımlama", "Yeşil satın alma", "Ürün kategorisi kuralları"],
      nl: ["EPD-publicatie", "Groene inkoop", "Productcategorieregels"],
    },
    whatWeDo: {
      en: ["PCR alignment and scope checks", "Input consistency and evidence pack", "Findings closure before release"],
      tr: ["PCR uyumu ve kapsam kontrolleri", "Girdi tutarlılığı ve kanıt paketi", "Yayından önce bulgu kapanışı"],
      nl: ["PCR-alignment en scopechecks", "Inputconsistentie en bewijspakket", "Sluiting bevindingen vóór release"],
    },
    deliverables: {
      en: ["Verification statement with reference number", "Non-conformity log where applicable"],
      tr: ["Referans numaralı doğrulama beyanı", "Uygunsa uygunsuzluk kaydı"],
      nl: ["Verificatieverklaring met referentienummer", "Non-conformitylog indien van toepassing"],
    },
  },
  {
    slug: "cbam-verification-support",
    title: {
      en: "CBAM Emissions Verification",
      tr: "SKDM (CBAM) Emisyon Doğrulaması",
      nl: "CBAM Emissieverificatie",
    },
    summary: {
      en: "Verification-oriented assessment of embedded emissions data and reporting logic for border carbon regimes—traceability, factors, and defensible submissions.",
      tr: "Sınır karbon düzenlemeleri için gömülü emisyon verisi ve raporlama mantığında izlenebilirlik, faktör kalitesi ve savunulabilir beyan odağında doğrulama.",
      nl: "Verificatiegerichte beoordeling van embedded emissions en rapportagelogica voor grenskoolstofregimes: traceerbaarheid, factoren en onderbouwde indiening.",
    },
    typicalUse: {
      en: ["Exporter quarterly reporting", "Supplier data mapping", "Pre-submission hardening"],
      tr: ["İhracatçı dönemsel raporlama", "Tedarikçi veri eşleştirme", "Başvuru öncesi sıkılaştırma"],
      nl: ["Exporteursrapportage", "Leveranciersdata-mapping", "Aanscherping vóór indiening"],
    },
    whatWeDo: {
      en: ["Methodology and boundary plausibility", "Evidence mapping and sampling", "Assurance-ready documentation guidance"],
      tr: ["Metodoloji ve sınır makullüğü", "Kanıt eşleştirme ve örnekleme", "Güvenceye hazır dokümantasyon kurgusu"],
      nl: ["Plausibiliteit methodiek en grens", "Bewijs-mapping en steekproef", "Richtlijn assurance-ready documentatie"],
    },
    deliverables: {
      en: ["Verification readiness note", "Findings log and recommendations"],
      tr: ["Doğrulama hazırlık notu", "Bulgu kaydı ve öneriler"],
      nl: ["Verificatiegereedheidsnotitie", "Bevindingenlog en aanbevelingen"],
    },
  },
  {
    slug: "eu-ets-verification-review",
    title: {
      en: "EU ETS Emissions Verification Review",
      tr: "EU ETS Emisyon Doğrulama İncelemesi",
      nl: "EU ETS Emissieverificatiebeoordeling",
    },
    summary: {
      en: "Verification-led technical review of EU ETS emissions data, installation boundaries, monitoring logic, and supporting record structures.",
      tr: "EU ETS kapsamındaki emisyon verileri, tesis sınırları, izleme mantığı ve destekleyici kayıt yapısı üzerinde doğrulama odaklı teknik inceleme.",
      nl: "Verificatiegerichte technische beoordeling van EU ETS-emissiedata, installatiegrenzen, monitoringlogica en ondersteunende registratiestructuur.",
    },
    typicalUse: {
      en: ["EU ETS installations", "MRV preparation", "Pre-verifier evidence packs"],
      tr: ["EU ETS tesisleri", "MRV hazırlığı", "Ön-doğrulayıcı kanıt paketleri"],
      nl: ["EU ETS-installaties", "MRV-voorbereiding", "Bewijspakketten vóór verificatie"],
    },
    whatWeDo: {
      en: ["Boundary and monitoring plausibility", "Activity data and factor traceability", "Technical review of submission-ready files"],
      tr: ["Sınır ve izleme makullüğü", "Aktivite verisi ve faktör izlenebilirliği", "Sunuma hazır dosyanın teknik kontrolü"],
      nl: ["Plausibiliteit grens en monitoring", "Traceerbaarheid activiteitendata en factoren", "Technische review van indieningsklare dossiers"],
    },
    deliverables: {
      en: ["Structured review findings", "Prioritized control and evidence themes"],
      tr: ["Yapılandırılmış inceleme bulguları", "Önceliklendirilmiş kontrol ve kanıt temaları"],
      nl: ["Gestructureerde bevindingen", "Geprioriteerde control- en bewijsthema’s"],
    },
  },
  {
    slug: "f-gases-verification-review",
    title: {
      en: "F-Gases Verification Review",
      tr: "F-Gazları Doğrulama İncelemesi",
      nl: "F-gassen Verificatiebeoordeling",
    },
    summary: {
      en: "Verification-led technical review of F-gas equipment records, gas quantities, service trails, and supporting documentation.",
      tr: "F-gazı ekipman kayıtları, gaz miktarları, servis izleri ve destekleyici dokümantasyon üzerinde doğrulama odaklı teknik inceleme.",
      nl: "Verificatiegerichte technische beoordeling van F-gas-apparatuurregistraties, gasvolumes, service-sporen en ondersteunende documentatie.",
    },
    typicalUse: {
      en: ["HVAC/R fleets", "Compliance preparation", "Evidence pack hardening"],
      tr: ["HVAC/R filoları", "Uyum hazırlığı", "Kanıt paketi sıkılaştırma"],
      nl: ["HVAC/R-vloten", "Compliance-voorbereiding", "Aanscherping bewijspakket"],
    },
    whatWeDo: {
      en: ["Equipment register plausibility", "Service and leak trail review", "Submission file technical checks"],
      tr: ["Ekipman kaydı makullüğü", "Servis ve sızıntı izi incelemesi", "Sunum dosyası teknik kontrolleri"],
      nl: ["Plausibiliteit apparatuurregister", "Review service- en leksporen", "Technische dossiercontroles"],
    },
    deliverables: {
      en: ["Structured findings", "Evidence and control themes"],
      tr: ["Yapılandırılmış bulgular", "Kanıt ve kontrol temaları"],
      nl: ["Gestructureerde bevindingen", "Bewijs- en controlthema’s"],
    },
  },
  {
    slug: "maritime-mrv-verification-review",
    title: {
      en: "Maritime MRV Verification Review",
      tr: "Maritime MRV Doğrulama İncelemesi",
      nl: "Maritime MRV Verificatiebeoordeling",
    },
    summary: {
      en: "Verification-led technical review of ship-based emissions data, fuel consumption, voyage records, and supporting documentation.",
      tr: "Gemi bazlı emisyon verileri, yakıt tüketimi, sefer kayıtları ve destekleyici dokümantasyon üzerinde doğrulama odaklı teknik inceleme.",
      nl: "Verificatiegerichte technische beoordeling van scheepsgebonden emissiedata, brandstofverbruik, reisregistraties en ondersteunende documentatie.",
    },
    typicalUse: {
      en: ["Fleet operators", "MRV reporting cycles", "Pre-verification file hardening"],
      tr: ["Filo operatörleri", "MRV raporlama döngüleri", "Ön-doğrulama dosyası sıkılaştırma"],
      nl: ["Vlootoperateurs", "MRV-rapportagecycli", "Aanscherping dossier vóór verificatie"],
    },
    whatWeDo: {
      en: ["Voyage and fuel data plausibility", "Monitoring logic and source records", "Technical review of submission-ready MRV files"],
      tr: ["Sefer ve yakıt verisi makullüğü", "İzleme mantığı ve kaynak kayıtları", "Sunuma hazır MRV dosyasının teknik kontrolü"],
      nl: ["Plausibiliteit reis- en brandstofdata", "Monitoringlogica en brongegevens", "Technische review van indieningsklare MRV-dossiers"],
    },
    deliverables: {
      en: ["Structured review findings", "Evidence and data-flow themes"],
      tr: ["Yapılandırılmış inceleme bulguları", "Kanıt ve veri akışı temaları"],
      nl: ["Gestructureerde bevindingen", "Thema’s rond bewijs en dataflow"],
    },
  },
  {
    slug: "eu-ets-mrv-assurance-support",
    title: {
      en: "EU ETS & MRV — assurance support",
      tr: "AB ETS ve MRV — güvence desteği",
      nl: "EU ETS & MRV — assurance-ondersteuning",
    },
    summary: {
      en: "Independent technical review support focused on data flows, control structure and evidence quality for emissions monitoring, reporting and verification processes, particularly in shipping and other regulated sectors.",
      tr: "Denizcilik başta olmak üzere ilgili sektörlerde emisyon izleme, raporlama ve doğrulama süreçleri için veri akışı, kontrol yapısı ve kanıt kalitesine odaklanan bağımsız teknik inceleme desteği.",
      nl: "Onafhankelijke technische beoordelingsondersteuning gericht op datastromen, beheersmaatregelen en bewijskwaliteit voor emissiemonitoring-, rapportage- en verificatieprocessen, met name in de scheepvaart en andere gereguleerde sectoren.",
    },
    typicalUse: {
      en: ["ETS installations", "Shipping operators’ fuel data", "Pre-verification evidence packs"],
      tr: ["ETS tesisleri", "Denizcilik operatörlerinin yakıt verisi", "Ön-doğrulama kanıt paketleri"],
      nl: ["ETS-installaties", "Brandstofdata scheepvaart", "Bewijspakketten vóór verificatie"],
    },
    whatWeDo: {
      en: ["Source stream and parameter risk screening", "Cross-checks to primary records", "Prioritized closure actions"],
      tr: ["Kaynak akışı ve parametre risk taraması", "Birincil kayıtlarla çapraz kontroller", "Önceliklendirilmiş kapanış aksiyonları"],
      nl: ["Risicoscreening bronstromen en parameters", "Kruiscontroles met primaire records", "Geprioriteerde sluitingsacties"],
    },
    deliverables: {
      en: ["Technical findings memo", "Evidence gap list"],
      tr: ["Teknik bulgular notu", "Kanıt boşluk listesi"],
      nl: ["Technische bevindingennotitie", "Gap-lijst bewijs"],
    },
  },
  {
    slug: "shipping-emissions-mrv-review",
    title: {
      en: "Shipping emissions — MRV review support",
      tr: "Denizcilik emisyonları — MRV inceleme desteği",
      nl: "Scheepvaartemissies — MRV-reviewondersteuning",
    },
    summary: {
      en: "Technical review of monitoring plans, data structure and reporting logic for maritime emissions under the EU MRV framework.",
      tr: "Deniz taşımacılığı emisyonlarının AB MRV gereklilikleri kapsamında izleme planı, veri toplama yapısı ve raporlama mantığı açısından teknik gözden geçirilmesi.",
      nl: "Technische beoordeling van monitoringplannen, datastructuur en rapportagelogica voor scheepvaartemissies binnen het EU-MRV-kader.",
    },
    typicalUse: {
      en: ["Fleet fuel compilation", "BDN and operational records", "Assurance-ready files"],
      tr: ["Filo yakıt derlemesi", "BDN ve operasyonel kayıtlar", "Güvenceye hazır dosyalar"],
      nl: ["Brandstofcompilatie vloot", "BDN en operationele records", "Assurance-ready dossiers"],
    },
    whatWeDo: {
      en: ["Representative voyage sampling", "Plausibility of consumption and factors", "Governance and gap closure"],
      tr: ["Temsilî seyahat örneklemesi", "Tüketim ve faktörlerin makullüğü", "Yönetişim ve boşluk kapanışı"],
      nl: ["Steekproef representatieve reizen", "Plausibiliteit verbruik en factoren", "Governance en gap-sluiting"],
    },
    deliverables: {
      en: ["Review summary", "Prioritized remediation list"],
      tr: ["İnceleme özeti", "Önceliklendirilmiş iyileştirme listesi"],
      nl: ["Reviewsamenvatting", "Geprioriteerde herstellijst"],
    },
  },
  {
    slug: "aviation-emissions-readiness-review",
    title: {
      en: "Aviation emissions — readiness (CORSIA / EU ETS)",
      tr: "Havacılık emisyonları — hazırlık (CORSIA / AB ETS)",
      nl: "Luchtvaartemissies — gereedheid (CORSIA / EU ETS)",
    },
    summary: {
      en: "Pre-review of emissions data structure, reporting readiness and supporting documentation in aviation contexts linked to CORSIA and EU ETS expectations.",
      tr: "Havacılık sektöründe CORSIA ve EU ETS bağlamında emisyon veri yapısı, raporlama hazırlığı ve destekleyici kayıt düzeninin ön değerlendirmesi.",
      nl: "Voorbeoordeling van emissiedatastructuur, rapportagegereedheid en ondersteunende documentatie in luchtvaartcontexten die samenhangen met CORSIA en EU ETS.",
    },
    typicalUse: {
      en: ["Airline fuel & flight data", "Pre-audit preparation", "Internal sign-off support"],
      tr: ["Havayolu yakıt ve uçuş verisi", "Ön denetim hazırlığı", "İç onay desteği"],
      nl: ["Brandstof- en vluchtdata airline", "Voorbereiding pre-audit", "Ondersteuning interne accordering"],
    },
    whatWeDo: {
      en: ["Applicability snapshot", "Targeted sampling on material routes", "Readiness memo with actions"],
      tr: ["Uygulanabilirlik anlık görüntüsü", "Önemli hatlarda hedefli örnekleme", "Aksiyonlu hazırlık notu"],
      nl: ["Momentopname toepasbaarheid", "Gerichte steekproef op materiële routes", "Gereedheidsnotitie met acties"],
    },
    deliverables: {
      en: ["Readiness assessment note", "Gap register"],
      tr: ["Hazırlık değerlendirme notu", "Boşluk kaydı"],
      nl: ["Gereedheidsbeoordeling", "Gap-register"],
    },
  },
  {
    slug: "verification-readiness-gap-analysis",
    title: {
      en: "Verification Readiness / Gap Analysis",
      tr: "Doğrulamaya Hazırlık / Boşluk Analizi",
      nl: "Verificatiegereedheid / Gapanalyse",
    },
    summary: {
      en: "Before formal verification, datasets, methodology, control points and supporting records are reviewed to identify gaps, weaknesses and priority risk areas.",
      tr: "Resmi doğrulama öncesinde veri setleri, metodoloji, kontrol noktaları ve destekleyici kayıtlar gözden geçirilerek eksikler ve risk alanları belirlenir.",
      nl: "Voorafgaand aan formele verificatie worden datasets, methodologie, controlepunten en ondersteunende documentatie beoordeeld om hiaten, zwakke punten en prioritaire risicogebieden vast te stellen.",
    },
    typicalUse: {
      en: ["First-time verification", "Post-merger data breaks", "After internal audit findings"],
      tr: ["İlk kez doğrulama", "Birleşme sonrası veri kopuklukları", "İç denetim bulguları sonrası"],
      nl: ["Eerste verificatie", "Data-breuken na fusie", "Na interne auditbevindingen"],
    },
    whatWeDo: {
      en: ["Severity-ranked gap register", "Remediation sequencing", "Optional follow-on support"],
      tr: ["Önem dereceli boşluk kaydı", "İyileştirme sıralaması", "İsteğe bağlı takip desteği"],
      nl: ["Gap-register met ernst", "Volgorde herstel", "Optionele vervolgondersteuning"],
    },
    deliverables: {
      en: ["Gap analysis report", "Roadmap to verification entry"],
      tr: ["Boşluk analizi raporu", "Doğrulama girişine yol haritası"],
      nl: ["Gap-analyserapport", "Roadmap naar verificatie-ingang"],
    },
  },
  {
    slug: "data-evidence-readiness-review",
    title: {
      en: "Data & evidence readiness review",
      tr: "Veri ve kanıt hazırlığı incelemesi",
      nl: "Data- en bewijsgereedheidsreview",
    },
    summary: {
      en: "Independent technical assessment of data sources, supporting records and traceability structure prior to reporting or public claims.",
      tr: "Raporlama veya beyan öncesinde veri kaynakları, destekleyici kayıtlar ve izlenebilirlik yapısının bağımsız teknik değerlendirmesi.",
      nl: "Onafhankelijke technische beoordeling van databronnen, ondersteunende documentatie en traceerbaarheidsstructuur voorafgaand aan rapportage of publieke claims.",
    },
    typicalUse: {
      en: ["Multi-site manufacturing", "New carbon tools / ETL", "Buyer audit preparation"],
      tr: ["Çok tesisli imalat", "Yeni karbon araçları / ETL", "Alıcı denetimi hazırlığı"],
      nl: ["Multi-site productie", "Nieuwe carbon-tools / ETL", "Voorbereiding afnemeraudit"],
    },
    whatWeDo: {
      en: ["Lineage and control-point mapping", "Material stream end-to-end tests", "Metadata and versioning recommendations"],
      tr: ["Soyut çizgi ve kontrol noktası haritalaması", "Önemli akışlarda uçtan uca testler", "Üst veri ve sürümleme önerileri"],
      nl: ["Mapping lineage en controles", "End-to-end tests materiële stromen", "Aanbevelingen metadata en versioning"],
    },
    deliverables: {
      en: ["Readiness memo", "Risk-ranked actions"],
      tr: ["Hazırlık notu", "Risk sıralı aksiyonlar"],
      nl: ["Gereedheidsnotitie", "Acties gerangschikt op risico"],
    },
  },
  {
    slug: "dpp-readiness-preverification",
    title: {
      en: "Digital Product Data Readiness & Pre-Review",
      tr: "Dijital Ürün Verisi Hazırlığı ve Ön İnceleme",
      nl: "Gereedheid van Digitale Productdata en Voorbeoordeling",
    },
    summary: {
      en: "Pre-review of data structure, traceability and supporting evidence files in preparation for digital product passport requirements and product-level declarations.",
      tr: "Dijital ürün pasaportu ve ürün düzeyi beyanlara hazırlık amacıyla veri yapısı, izlenebilirlik ve destekleyici kanıt dosyalarının ön değerlendirmesi.",
      nl: "Voorbeoordeling van datastructuur, traceerbaarheid en ondersteunende bewijsdossiers ter voorbereiding op digitale productpaspoortvereisten en productniveauverklaringen.",
    },
    typicalUse: {
      en: ["EU market pilots", "SKU-level data packages", "Alignment with PCF / EPD work"],
      tr: ["AB pazarı pilotları", "SKU düzeyinde veri paketleri", "PCF / EPD çalışmasıyla hizalama"],
      nl: ["Pilots EU-markt", "Datapakketten op SKU-niveau", "Afstemming met PCF/EPD-werk"],
    },
    whatWeDo: {
      en: ["Attribute mapping workshop", "Sample SKU review", "Pre-verification checklist"],
      tr: ["Öznitelik haritalama atölyesi", "Örnek SKU incelemesi", "Ön-doğrulama kontrol listesi"],
      nl: ["Workshop attributen-mapping", "Review voorbeeld-SKU", "Pre-verificatie-checklist"],
    },
    deliverables: {
      en: ["Readiness checklist", "Gap list for passport data"],
      tr: ["Hazırlık kontrol listesi", "Pasaport verisi için boşluk listesi"],
      nl: ["Gereedheidschecklist", "Gap-lijst passport-data"],
    },
  },
  {
    slug: "sustainability-reporting-evidence-review",
    title: {
      en: "Sustainability reporting — evidence review",
      tr: "Sürdürülebilirlik raporlaması — kanıt incelemesi",
      nl: "Duurzaamheidsrapportage — bewijsreview",
    },
    summary: {
      en: "Review of datasets, indicators and supporting evidence structures used in sustainability and ESG reporting before external use.",
      tr: "Sürdürülebilirlik ve ESG raporlamasında kullanılan veri setleri, göstergeler ve destekleyici kanıt yapısının dış kullanım öncesinde gözden geçirilmesi.",
      nl: "Beoordeling van datasets, indicatoren en ondersteunende bewijsstructuren die worden gebruikt in duurzaamheids- en ESG-rapportage vóór extern gebruik.",
    },
    typicalUse: {
      en: ["Annual sustainability reports", "CSRD transition", "Board / comms sign-off support"],
      tr: ["Yıllık sürdürülebilirlik raporları", "CSRD geçişi", "Yönetim kurulu / iletişim onayı desteği"],
      nl: ["Jaarlijkse duurzaamheidsrapporten", "CSRD-transitie", "Ondersteuning board/comms-sign-off"],
    },
    whatWeDo: {
      en: ["Materiality-based metric selection", "Spot checks and documentation", "Wording discipline vs evidence"],
      tr: ["Önemlilik temelli metrik seçimi", "Nokta kontrolleri ve dokümantasyon", "Kanıta karşı dil disiplini"],
      nl: ["Selectie metrics op basis van materialiteit", "Steekproeven en documentatie", "Discipline in woordkeuze t.o.v. bewijs"],
    },
    deliverables: {
      en: ["Findings register", "Optional bounded comfort memo"],
      tr: ["Bulgu kaydı", "İsteğe bağlı sınırlı güven notu"],
      nl: ["Bevindingenregister", "Optionele begrensde comfortnotitie"],
    },
  },
  {
    slug: "f-gases-reporting-review",
    title: {
      en: "F-gases reporting — review support",
      tr: "F-gaz raporlaması — inceleme desteği",
      nl: "F-gassen rapportage — reviewondersteuning",
    },
    summary: {
      en: "Technical review of fluorinated greenhouse gas data collection, calculation and reporting processes, with a focus on traceability and regulatory alignment.",
      tr: "Florlu sera gazları kapsamındaki veri toplama, hesaplama ve raporlama süreçlerinin teknik gözden geçirilmesi; izlenebilirlik ve mevzuat uyumu odağında.",
      nl: "Technische beoordeling van processen voor gegevensverzameling, berekening en rapportage van gefluoreerde broeikasgassen, met focus op traceerbaarheid en aansluiting op regelgeving.",
    },
    typicalUse: {
      en: ["Industrial HVAC/R fleets", "Heat pump roll-outs", "GHG inventory alignment"],
      tr: ["Endüstriyel HVAC/R filoları", "Isı pompası yayılımı", "Sera gazı envanteri ile hizalama"],
      nl: ["Industriële HVAC/R-vloten", "Uitrol warmtepompen", "Afstemming GHG-inventaris"],
    },
    whatWeDo: {
      en: ["Equipment baseline screening", "Purchase vs service log reconciliation", "Factor and unit consistency"],
      tr: ["Ekipman baz çizgisi taraması", "Satın alma ve servis kaydı mutabakatı", "Faktör ve birim tutarlılığı"],
      nl: ["Screening apparatuurbaseline", "Afstemming inkoop vs. servicelog", "Consistentie factor en eenheid"],
    },
    deliverables: {
      en: ["Findings memo", "Remediation guidance"],
      tr: ["Bulgular notu", "İyileştirme yönlendirmesi"],
      nl: ["Bevindingennotitie", "Herstelrichting"],
    },
  },
  {
    slug: "mock-verification-review",
    title: {
      en: "Mock Verification Review",
      tr: "Ön Doğrulama Simülasyonu",
      nl: "Mock Verification Review",
    },
    summary: {
      en: "Limited-scope independent review designed to test readiness and identify weaknesses before formal verification.",
      tr: "Resmi doğrulama öncesinde denetime hazırlık düzeyini görmek amacıyla sınırlı kapsamlı bağımsız inceleme ve prova değerlendirmesi.",
      nl: "Beperkte onafhankelijke beoordeling bedoeld om de gereedheid te testen en zwakke punten vast te stellen vóór formele verificatie.",
    },
    typicalUse: {
      en: ["Large first-time engagements", "New teams", "Board assurance requests"],
      tr: ["İlk kez büyük kapsam", "Yeni ekipler", "Yönetim kurulu güvence talepleri"],
      nl: ["Grote eerste trajecten", "Nieuwe teams", "Board-assurancevragen"],
    },
    whatWeDo: {
      en: ["Sampling on material streams", "Findings without formal statement", "Prioritized remediation"],
      tr: ["Önemli akışlarda örnekleme", "Formal beyan olmadan bulgular", "Önceliklendirilmiş iyileştirme"],
      nl: ["Steekproef op materiële stromen", "Bevindingen zonder formele verklaring", "Geprioriteerd herstel"],
    },
    deliverables: {
      en: ["Mock review memo", "Risk-ranked actions"],
      tr: ["Simülasyon inceleme notu", "Risk sıralı aksiyonlar"],
      nl: ["Mock-reviewnotitie", "Acties gerangschikt op risico"],
    },
  },
  {
    slug: "asi-readiness-review",
    title: {
      en: "ASI (Aluminium Stewardship Initiative) Verification Review",
      tr: "ASI (Aluminium Stewardship Initiative) Doğrulama İncelemesi",
      nl: "ASI (Aluminium Stewardship Initiative) Verificatiebeoordeling",
    },
    summary: {
      en: "Independent verification review for ASI-related readiness—evidence structures, criteria alignment, documentation discipline, and defensible disclosure language across the aluminium value chain.",
      tr: "Alüminyum değer zincirinde ASI ile ilişkili hazırlık için bağımsız doğrulama incelemesi; kanıt yapıları, kriter uyumu, dokümantasyon disiplini ve savunulabilir açıklama dili.",
      nl: "Onafhankelijke verificatiebeoordeling voor ASI-gerelateerde gereedheid—bewijsstructuren, criteria-afstemming, documentatiediscipline en verdedigbare disclosure-taal in de aluminiumketen.",
    },
    typicalUse: {
      en: ["Aluminium value chain", "Multi-site programmes", "Customer proof points"],
      tr: ["Alüminyum değer zinciri", "Çok tesisli programlar", "Müşteri kanıt noktaları"],
      nl: ["Aluminiumketen", "Multi-site programma’s", "Bewijspunten voor afnemers"],
    },
    whatWeDo: {
      en: ["Criterion-to-evidence mapping", "Prioritized gap actions", "Interview-style readiness checks"],
      tr: ["Kriterden kanıta eşleme", "Önceliklendirilmiş boşluk aksiyonları", "Görüşme tarzı hazırlık kontrolleri"],
      nl: ["Mapping criteria naar bewijs", "Geprioriteerde gap-acties", "Gereedheidschecks interview-stijl"],
    },
    deliverables: {
      en: ["Readiness report", "Not an ASI statement"],
      tr: ["Hazırlık raporu", "ASI beyanı değildir"],
      nl: ["Gereedheidsrapport", "Geen ASI-verklaring"],
    },
  },
  {
    slug: "custom-verification",
    title: {
      en: "Custom and Second-Party Verification",
      tr: "Özel ve İkinci Taraf Doğrulama",
      nl: "Maatwerk- en Second-Party Verificatie",
    },
    summary: {
      en: "Tailored criteria, sampling and statements for non-standard scopes—governed review pathways for procurement programmes and stakeholder assurance needs.",
      tr: "Standart dışı kapsamlar için uyarlanmış kriterler, örnekleme ve beyanlar—satın alma programları ve paydaş güvence ihtiyaçları için yönetişimli inceleme yolları.",
      nl: "Maatwerkcriteria, steekproeven en statements voor niet-standaard scopes—governance review-paden voor inkoopprogramma’s en stakeholder assurance.",
    },
    typicalUse: {
      en: ["Supplier programmes", "Methodology reviews", "Controlled external statements"],
      tr: ["Tedarikçi programları", "Metodoloji incelemeleri", "Kontrollü dış beyanlar"],
      nl: ["Leveranciersprogramma’s", "Methodiekreviews", "Gecontroleerde externe statements"],
    },
    whatWeDo: {
      en: ["Criteria and intended-use definition", "Evidence-based assessment", "Statement pathway aligned to risk"],
      tr: ["Kriter ve kullanım amacı tanımı", "Kanıta dayalı değerlendirme", "Riske uygun beyan yolu"],
      nl: ["Definitie criteria en beoogd gebruik", "Op bewijs gebaseerde beoordeling", "Statementpad afgestemd op risico"],
    },
    deliverables: {
      en: ["Custom statement where applicable", "Findings log and disclosure note"],
      tr: ["Uygunsa özel beyan", "Bulgu kaydı ve açıklama notu"],
      nl: ["Maatwerkstatement waar van toepassing", "Bevindingenlog en disclosure-notitie"],
    },
  },
  {
    slug: "buyer-value-chain-review",
    title: {
      en: "Buyer / Value Chain Review Support",
      tr: "Alıcı ve Değer Zinciri İnceleme Desteği",
      nl: "Ondersteuning bij Koper- en Waardeketenbeoordeling",
    },
    summary: {
      en: "Adapted technical review model designed for customer requirements, supply-chain expectations and second-party review contexts.",
      tr: "Müşteri talepleri, tedarik zinciri beklentileri ve ikinci taraf inceleme ihtiyaçları için uyarlanmış teknik değerlendirme modeli.",
      nl: "Aangepast technisch beoordelingsmodel voor klantvereisten, verwachtingen in de waardeketen en second-party beoordelingscontexten.",
    },
    typicalUse: {
      en: ["OEM supplier development", "Sector templates", "Quarterly assurance cycles"],
      tr: ["OEM tedarikçi geliştirme", "Sektör şablonları", "Üç aylık güvence döngüleri"],
      nl: ["OEM leveranciersontwikkeling", "Sectorsjablonen", "Kwartaal assurance-cycli"],
    },
    whatWeDo: {
      en: ["Pilot then scale design", "Calibration with suppliers", "Trend reporting for buyers"],
      tr: ["Pilot sonra ölçek tasarımı", "Tedarikçilerle kalibrasyon", "Alıcılar için trend raporlama"],
      nl: ["Ontwerp pilot dan opschaling", "Kalibratie met leveranciers", "Trendrapportage voor afnemers"],
    },
    deliverables: {
      en: ["Programme review report", "Supplier scorecards where agreed"],
      tr: ["Program inceleme raporu", "Anlaşıldıysa tedarikçi skor kartları"],
      nl: ["Programma-reviewrapport", "Leveranciersscorekaarten indien afgesproken"],
    },
  },
  {
    slug: "green-claim-review",
    title: {
      en: "Environmental Claim / Green Claim Review",
      tr: "Çevresel Beyan ve Green Claim İncelemesi",
      nl: "Beoordeling van Milieuclaims / Green Claims",
    },
    summary: {
      en: "Review of environmental claims, product declarations and communication language with focus on evidence sufficiency, claim boundaries and overstatement risk.",
      tr: "Çevresel iddialar, ürün beyanları ve iletişim dilinde kanıt yeterliliği, beyan sınırları ve abartılı ifade riskine yönelik bağımsız teknik gözden geçirme.",
      nl: "Beoordeling van milieuclaims, productverklaringen en communicatietaal met focus op voldoende onderbouwing, claimgrenzen en risico op overdrijving.",
    },
    typicalUse: {
      en: ["Marketing and product copy", "Packaging and B2B claims", "Pre-publication checks"],
      tr: ["Pazarlama ve ürün metinleri", "Ambalaj ve B2B iddiaları", "Yayın öncesi kontroller"],
      nl: ["Marketing- en producttekst", "Verpakking en B2B-claims", "Controles vóór publicatie"],
    },
    whatWeDo: {
      en: ["Claim-to-evidence mapping", "Boundary and language discipline", "Risk-ranked findings"],
      tr: ["İddia–kanıt eşlemesi", "Sınır ve dil disiplini", "Risk sıralı bulgular"],
      nl: ["Claim-naar-bewijs mapping", "Grenzen en taalbeheersing", "Bevindingen gerangschikt op risico"],
    },
    deliverables: {
      en: ["Review memo", "Suggested wording safeguards"],
      tr: ["İnceleme notu", "Önerilen ifade güvenceleri"],
      nl: ["Reviewnotitie", "Voorgestelde woordkeuzes en waarborgen"],
    },
  },
  {
    slug: "iso-14064-3-review-support",
    title: {
      en: "ISO 14064-3 — Greenhouse Gas Verification And Validation Support",
      tr: "ISO 14064-3 — Sera Gazı Doğrulama Ve Geçerli Kılma Süreçleri",
      nl: "ISO 14064-3 — Ondersteuning Bij Broeikasgasverificatie En Validatie",
    },
    summary: {
      en: "Structured support for GHG verification and validation processes—process design, evidence chains, and reviewer-ready documentation.",
      tr: "Sera gazı doğrulama ve geçerli kılma süreçlerinde süreç tasarımı, kanıt zinciri ve incelemeye hazır dokümantasyon üzerine yapılandırılmış teknik destek.",
      nl: "Gestructureerde ondersteuning bij GHG-verificatie en -validatie: procesontwerp, bewijsketen en reviewer-ready documentatie.",
    },
    typicalUse: {
      en: ["V&V teams", "Assurance programmes", "Accreditation preparation"],
      tr: ["D&G ekipleri", "Güvence programları", "Akreditasyon hazırlığı"],
      nl: ["V&V-teams", "Assurance-programma’s", "Accreditatievoorbereiding"],
    },
    whatWeDo: {
      en: ["Process design review", "Evidence chain testing", "Reviewer-ready documentation"],
      tr: ["Süreç tasarımı incelemesi", "Kanıt zinciri testleri", "İncelemeye hazır dokümantasyon"],
      nl: ["Review procesontwerp", "Toetsing bewijsketen", "Reviewer-ready documentatie"],
    },
    deliverables: {
      en: ["Technical review outputs", "Findings register"],
      tr: ["Teknik inceleme çıktıları", "Bulgu kaydı"],
      nl: ["Technische review-output", "Bevindingenregister"],
    },
  },
  {
    slug: "net-zero-sbti-technical-review",
    title: {
      en: "Net-Zero and SBTi Technical Verification",
      tr: "Net-Sıfır ve SBTi Teknik Doğrulaması",
      nl: "Net-Zero en SBTi Technische Verificatie",
    },
    summary: {
      en: "Independent technical verification for net-zero roadmaps and SBTi-related target frameworks—pathway logic, data foundations, and disclosure-ready credibility.",
      tr: "Net-sıfır yol haritaları ve SBTi ile ilişkili hedef çerçeveleri için bağımsız teknik doğrulama; geçiş mantığı, veri dayanağı ve açıklamaya hazır güvenilirlik odağında.",
      nl: "Onafhankelijke technische verificatie van net-zero-roadmaps en SBTi-gerelateerde doelstructuren—transitielogica, databasis en disclosure-gereed vertrouwen.",
    },
    typicalUse: {
      en: ["Corporate climate targets", "Investor disclosures", "Executive sign-off"],
      tr: ["Kurumsal iklim hedefleri", "Yatırımcı açıklamaları", "Üst yönetim onayı"],
      nl: ["Corporate klimaatdoelen", "Investeerdersdisclosures", "Bestuurlijke accordering"],
    },
    whatWeDo: {
      en: ["Pathway plausibility", "Framework alignment review", "Evidence expectations"],
      tr: ["Yol haritası makullüğü", "Çerçeve uyum incelemesi", "Kanıt beklentileri"],
      nl: ["Plausibiliteit routes", "Framework-alignmentreview", "Bewijsverwachtingen"],
    },
    deliverables: {
      en: ["Review memo", "Prioritized themes"],
      tr: ["İnceleme notu", "Önceliklendirilmiş temalar"],
      nl: ["Reviewnotitie", "Geprioriteerde thema’s"],
    },
  },
  {
    slug: "recycled-content-verification",
    title: {
      en: "Recycled Content Verification",
      tr: "Geri Dönüştürülmüş İçerik Doğrulaması",
      nl: "Verificatie van gerecyclede inhoud",
    },
    summary: {
      en: "Independent verification of recycled content claims—mass balance, chain of custody, evidence traceability, and disclosure discipline.",
      tr: "Geri dönüştürülmüş içerik beyanlarında kütle dengesi, zincir izi, kanıt izlenebilirliği ve kontrollü beyan disiplinine yönelik bağımsız doğrulama.",
      nl: "Onafhankelijke verificatie van claims over gerecyclede inhoud: massabalans, chain of custody, bewijstraceerbaarheid en disclosure-discipline.",
    },
    typicalUse: {
      en: ["Product claims", "Buyer audits", "Procurement"],
      tr: ["Ürün beyanları", "Alıcı denetimleri", "Satın alma"],
      nl: ["Productclaims", "Afnemeraudits", "Inkoop"],
    },
    whatWeDo: {
      en: ["Chain-of-custody review", "Sampling and matching", "Statement pathway"],
      tr: ["Zincir izi incelemesi", "Örnekleme ve eşleştirme", "Beyan yolu"],
      nl: ["Chain-of-custody-review", "Steekproeven en matching", "Statementpad"],
    },
    deliverables: {
      en: ["Verification outputs", "Findings log"],
      tr: ["Doğrulama çıktıları", "Bulgu kaydı"],
      nl: ["Verificatie-output", "Bevindingenlog"],
    },
  },
  {
    slug: "bio-based-content-verification",
    title: {
      en: "Bio-based Content Verification",
      tr: "Biyobazlı İçerik Doğrulaması",
      nl: "Verificatie van biobased inhoud",
    },
    summary: {
      en: "Independent verification of bio-based content claims—methodology fit, supplier evidence, system boundaries, and disclosure-ready language.",
      tr: "Biyobazlı içerik beyanlarında metodoloji uyumu, tedarikçi kanıtı, sistem sınırları ve dış kullanıma uygun beyan dili üzerine bağımsız doğrulama.",
      nl: "Onafhankelijke verificatie van claims over biobased inhoud: methodepassendheid, leveranciersbewijs, systeemgrenzen en disclosure-klare taal.",
    },
    typicalUse: {
      en: ["Materials suppliers", "Brand claims", "Technical files"],
      tr: ["Malzeme tedarikçileri", "Marka beyanları", "Teknik dosyalar"],
      nl: ["Materiaalleveranciers", "Merkclaims", "Technische dossiers"],
    },
    whatWeDo: {
      en: ["Method review", "Supplier evidence", "Communication wording"],
      tr: ["Metot incelemesi", "Tedarikçi kanıtı", "İletişim dili"],
      nl: ["Methodereview", "Leveranciersbewijs", "Communicatietekst"],
    },
    deliverables: {
      en: ["Verification statement where applicable", "Improvement notes"],
      tr: ["Uygunsa doğrulama beyanı", "İyileştirme notları"],
      nl: ["Verificatieverklaring waar van toepassing", "Verbeterpunten"],
    },
  },
  {
    slug: "product-carbon-footprint-review",
    title: {
      en: "Product Carbon Footprint Verification",
      tr: "Ürün Karbon Ayak İzi Doğrulaması",
      nl: "Product Carbon Footprint-Verificatie",
    },
    summary: {
      en: "Structured verification of PCF models—hotspots, data lineage, and how figures are positioned in customer-facing materials.",
      tr: "PCF modellerinde sıcak noktalar, veri soyut çizgisi ve rakamların müşteriye dönük materyallerde nasıl sunulduğu üzerine yapılandırılmış doğrulama.",
      nl: "Gestructureerde verificatie van PCF-modellen: hotspots, datalijn en positionering in klantgerichte materialen.",
    },
    typicalUse: {
      en: ["Customer questionnaires", "Tenders", "Pre-verification"],
      tr: ["Müşteri anketleri", "İhaleler", "Ön doğrulama"],
      nl: ["Klantvragenlijsten", "Aanbestedingen", "Vóór verificatie"],
    },
    whatWeDo: {
      en: ["Model coherence", "Factor and data checks", "Public wording"],
      tr: ["Model tutarlılığı", "Faktör ve veri kontrolleri", "Kamuya dönük dil"],
      nl: ["Coherentie model", "Factor- en datachecks", "Publieke woordkeuze"],
    },
    deliverables: {
      en: ["Verification outputs", "Action list"],
      tr: ["Doğrulama çıktıları", "Aksiyon listesi"],
      nl: ["Verificatie-output", "Actielijst"],
    },
  },
  {
    slug: "indoor-air-quality-voc-review",
    title: {
      en: "Indoor Air Quality and VOC Verification Review",
      tr: "İç Mekân Hava Kalitesi ve VOC Doğrulama İncelemesi",
      nl: "Verificatiebeoordeling binnenluchtkwaliteit en VOC",
    },
    summary: {
      en: "Independent verification review of VOC test scope, laboratory traceability, and disclosure-ready language for interior products and export specifications.",
      tr: "VOC test kapsamı, laboratuvar izlenebilirliği ve iç mekân ürünleri için dış kullanıma uygun beyan dili üzerine bağımsız doğrulama incelemesi.",
      nl: "Onafhankelijke verificatiebeoordeling van VOC-testscope, laboratoriumtraceerbaarheid en disclosure-klare taal voor interieurproducten en exporteisen.",
    },
    typicalUse: {
      en: ["Interior products", "Export markets", "Specification packs"],
      tr: ["İç mekân ürünleri", "İhracat pazarları", "Şartname paketleri"],
      nl: ["Interieurproducten", "Exportmarkten", "Specificatiepakketten"],
    },
    whatWeDo: {
      en: ["Test report review", "Plausibility checks", "Documentation readiness"],
      tr: ["Test raporu incelemesi", "Makullük kontrolleri", "Dokümantasyon hazırlığı"],
      nl: ["Review testverslagen", "Plausibiliteitschecks", "Documentatiegereedheid"],
    },
    deliverables: {
      en: ["Findings memo", "Remediation themes"],
      tr: ["Bulgular notu", "İyileştirme temaları"],
      nl: ["Bevindingennotitie", "Herstelthema’s"],
    },
  },
  {
    slug: "hpd-review",
    title: {
      en: "HPD (Health Product Declaration) Verification Review",
      tr: "HPD (Health Product Declaration) Doğrulama İncelemesi",
      nl: "HPD (Health Product Declaration) Verificatiebeoordeling",
    },
    summary: {
      en: "Independent verification review of HPD disclosures—composition data, disclosure boundaries, hazard communication, and evidence-backed statements for external use.",
      tr: "HPD beyanları için bağımsız doğrulama incelemesi—bileşen verileri, açıklama sınırları, tehlike iletişimi ve dış kullanıma esas kanıt yapısı.",
      nl: "Onafhankelijke verificatiebeoordeling van HPD-disclosures—samenstellingsdata, disclosure-grenzen, gevarencommunicatie en bewijsgedragen verklaringen voor extern gebruik.",
    },
    typicalUse: {
      en: ["Building products", "Green building", "Supplier coordination"],
      tr: ["Yapı ürünleri", "Yeşil bina", "Tedarikçi koordinasyonu"],
      nl: ["Bouwproducten", "Groene bouw", "Leverancierscoördinatie"],
    },
    whatWeDo: {
      en: ["Structure completeness", "Evidence consistency", "Risk notes"],
      tr: ["Yapı tamlığı", "Kanıt tutarlılığı", "Risk notları"],
      nl: ["Volledigheid structuur", "Consistentie bewijs", "Risiconotities"],
    },
    deliverables: {
      en: ["Review outputs", "Remediation list"],
      tr: ["İnceleme çıktıları", "İyileştirme listesi"],
      nl: ["Review-output", "Herstellijst"],
    },
  },
  {
    slug: "material-health-composition-review",
    title: {
      en: "Material Health and Ingredient Transparency Verification Review",
      tr: "Malzeme Sağlığı ve İçerik Şeffaflığı Doğrulama İncelemesi",
      nl: "Verificatiebeoordeling van materiaalgezondheid en transparantie van ingrediënten",
    },
    summary: {
      en: "Independent verification review of composition data, hazard communication, and externally oriented ingredient transparency disclosures.",
      tr: "Bileşim verileri, tehlike iletişimi ve dış kullanıma esas içerik şeffaflığı beyanları için bağımsız doğrulama incelemesi.",
      nl: "Onafhankelijke verificatiebeoordeling van samenstellingsdata, gevarencommunicatie en extern gerichte transparantie over ingrediënten.",
    },
    typicalUse: {
      en: ["Manufacturers", "Regulatory files", "Marketing alignment"],
      tr: ["Üreticiler", "Mevzuat dosyaları", "Pazarlama hizalaması"],
      nl: ["Fabrikanten", "Regelgevingsdossiers", "Afstemming marketing"],
    },
    whatWeDo: {
      en: ["Composition mapping", "Hazard communication", "Claim boundaries"],
      tr: ["Bileşim haritalaması", "Tehlike iletişimi", "Beyan sınırları"],
      nl: ["Mapping samenstelling", "Gevaarscommunicatie", "Claimgrenzen"],
    },
    deliverables: {
      en: ["Technical review note", "Wording safeguards"],
      tr: ["Teknik inceleme notu", "İfade güvenceleri"],
      nl: ["Technische reviewnotitie", "Woordkeuzewaarborgen"],
    },
  },
  {
    slug: "green-building-documentation-review",
    title: {
      en: "Green Building Documentation Verification Review",
      tr: "Yeşil Bina Teknik Dokümantasyon Doğrulama İncelemesi",
      nl: "Verificatiebeoordeling van green building-documentatie",
    },
    summary: {
      en: "Independent verification review of green building submission files—scope completeness, evidence consistency, and criterion alignment.",
      tr: "Yeşil bina başvuru dosyaları için bağımsız doğrulama incelemesi—kapsam bütünlüğü, kanıt tutarlılığı ve kriter uyumu.",
      nl: "Onafhankelijke verificatiebeoordeling van green building-dossiers: scopevolledigheid, bewijsconsistentie en criteria-afstemming.",
    },
    typicalUse: {
      en: ["Manufacturers", "Project bids", "Certification pathways"],
      tr: ["Üreticiler", "Proje teklifleri", "Sertifikasyon yolları"],
      nl: ["Fabrikanten", "Projectbiedingen", "Certificatiepaden"],
    },
    whatWeDo: {
      en: ["Pack completeness", "Cross-discipline consistency", "Gap analysis"],
      tr: ["Paket tamlığı", "Disiplinler arası tutarlılık", "Boşluk analizi"],
      nl: ["Volledigheid pakket", "Consistentie tussen disciplines", "Gapanalyse"],
    },
    deliverables: {
      en: ["Documentation review memo", "Prioritized actions"],
      tr: ["Dokümantasyon inceleme notu", "Önceliklendirilmiş aksiyonlar"],
      nl: ["Documentatiereviewnotitie", "Geprioriteerde acties"],
    },
  },
  {
    slug: "fsc-pefc-eudr-readiness",
    title: {
      en: "FSC / PEFC / EUDR Readiness and Documentation Verification Review",
      tr: "FSC / PEFC / EUDR Hazırlık ve Dokümantasyon Doğrulama İncelemesi",
      nl: "FSC / PEFC / EUDR Voorbereidings- en Documentatieverificatiebeoordeling",
    },
    summary: {
      en: "Independent verification review of FSC / PEFC / EUDR-related readiness—traceability, due diligence files, supplier evidence, and controlled disclosure positioning.",
      tr: "FSC / PEFC / EUDR ile ilişkili hazırlık için bağımsız doğrulama incelemesi; zincir izi, due diligence dosyaları, tedarikçi kanıtı ve kontrollü beyan konumlandırması.",
      nl: "Onafhankelijke verificatiebeoordeling van FSC / PEFC / EUDR-gereedheid—traceerbaarheid, due diligence, leveranciersbewijs en gecontroleerde disclosure.",
    },
    typicalUse: {
      en: ["Paper & packaging", "EU trade", "Supplier evidence"],
      tr: ["Kâğıt ve ambalaj", "AB ticareti", "Tedarikçi kanıtı"],
      nl: ["Papier en verpakkingen", "EU-handel", "Leveranciersbewijs"],
    },
    whatWeDo: {
      en: ["Traceability architecture", "Due diligence documentation", "Gap identification"],
      tr: ["İzlenebilirlik mimarisi", "Due diligence dokümantasyonu", "Boşluk tespiti"],
      nl: ["Traceerbaarheidsarchitectuur", "Due diligence-documentatie", "Gap-identificatie"],
    },
    deliverables: {
      en: ["Readiness memo", "Prioritized actions"],
      tr: ["Hazırlık notu", "Önceliklendirilmiş aksiyonlar"],
      nl: ["Gereedheidsnotitie", "Geprioriteerde acties"],
    },
  },
  {
    slug: "responsible-mining-irma-readiness",
    title: {
      en: "Responsible Mining And IRMA Verification Readiness",
      tr: "Sorumlu Madencilik Ve IRMA Doğrulama Hazırlığı",
      nl: "Verantwoorde Mijnbouw En IRMA Verificatiegereedheid",
    },
    summary: {
      en: "Verification readiness for responsible mining expectations—site evidence, governance themes, and gap closure.",
      tr: "Sorumlu madencilik beklentileri için saha kanıtı, yönetişim temaları ve boşluk kapanışı üzerine doğrulama hazırlığı.",
      nl: "Verificatiegereedheid voor verantwoorde mijnbouw: locatiebewijs, governance en gap-sluiting.",
    },
    typicalUse: {
      en: ["Mining operators", "Investor scrutiny", "Site documentation"],
      tr: ["Maden operatörleri", "Yatırımcı incelemesi", "Saha dokümantasyonu"],
      nl: ["Mijnbouwoperators", "Investeerdersscrutiny", "Locatiedocumentatie"],
    },
    whatWeDo: {
      en: ["Maturity snapshot", "Evidence mapping", "Gap themes"],
      tr: ["Olgunluk görüntüsü", "Kanıt haritalaması", "Boşluk temaları"],
      nl: ["Volwassenheidssnapshot", "Bewijs-mapping", "Gap-thema’s"],
    },
    deliverables: {
      en: ["Review support memo", "Findings log"],
      tr: ["İnceleme desteği notu", "Bulgu kaydı"],
      nl: ["Notitie beoordelingsondersteuning", "Bevindingenlog"],
    },
  },
  {
    slug: "textile-traceability-recycled-review",
    title: {
      en: "Textile Traceability And Recycled Material Verification",
      tr: "Tekstil İzlenebilirliği Ve Geri Dönüştürülmüş Malzeme Doğrulaması",
      nl: "Textieltraceerbaarheid En Gerecycled Materiaal Verificatie",
    },
    summary: {
      en: "Verification of chain structures, mass-balance logic, and certificate cross-checks for textile sustainability claims.",
      tr: "Tekstil sürdürülebilirlik iddiaları için zincir yapıları, kütle dengesi mantığı ve sertifika çapraz kontrollerinin doğrulanması.",
      nl: "Verificatie van ketenstructuren, massabalanslogica en certificaatcontroles voor textielclaims.",
    },
    typicalUse: {
      en: ["Fashion brands", "Supplier tiers", "Audit preparation"],
      tr: ["Moda markaları", "Tedarikçi katmanları", "Denetim hazırlığı"],
      nl: ["Mode merken", "Leverancierslagen", "Auditvoorbereiding"],
    },
    whatWeDo: {
      en: ["Chain mapping", "Mass balance plausibility", "Certificate cross-checks"],
      tr: ["Zincir haritalaması", "Kütle dengesi makullüğü", "Sertifika çapraz kontrolleri"],
      nl: ["Ketenmapping", "Plausibiliteit massabalans", "Kruiscontroles certificaten"],
    },
    deliverables: {
      en: ["Assessment memo", "Remediation roadmap"],
      tr: ["Değerlendirme notu", "İyileştirme yol haritası"],
      nl: ["Beoordelingsnotitie", "Herstel-roadmap"],
    },
  },
  {
    slug: "zero-waste-review",
    title: {
      en: "Zero Waste Verification Review",
      tr: "Sıfır Atık Doğrulama İncelemesi",
      nl: "Zero Waste Verificatiereview",
    },
    summary: {
      en: "Verification-led review of diversion logic, recovery evidence, and how zero-waste narratives align with operational data.",
      tr: "Yönlendirme mantığı, geri kazanım kanıtı ve sıfır atık anlatısının operasyonel verilerle uyumu üzerine doğrulama odaklı değerlendirme.",
      nl: "Verificatiegerichte review van divergentielogica, terugwinbewijs en afstemming op operationele data.",
    },
    typicalUse: {
      en: ["Manufacturing", "Multi-site reporting", "Public claims"],
      tr: ["İmalat", "Çok tesisli raporlama", "Kamusal beyanlar"],
      nl: ["Productie", "Multi-site rapportage", "Publieke claims"],
    },
    whatWeDo: {
      en: ["Boundary definition", "Recovery rate plausibility", "Wording vs methodology"],
      tr: ["Sınır tanımı", "Geri kazanım oranı makullüğü", "İfade ve metodoloji uyumu"],
      nl: ["Begrenzing", "Plausibiliteit terugwinningspercentages", "Afstemming woordkeuze en methodiek"],
    },
    deliverables: {
      en: ["Review memo", "Corrective themes"],
      tr: ["İnceleme notu", "Düzeltici temalar"],
      nl: ["Reviewnotitie", "Correctiethema’s"],
    },
  },
  {
    slug: "gri-esrs-data-assurance",
    title: {
      en: "GRI / ESRS Data Verification",
      tr: "GRI / ESRS Veri Doğrulaması",
      nl: "GRI / ESRS Dataverificatie",
    },
    summary: {
      en: "Independent verification review of GRI / ESRS-scoped sustainability data—indicator definitions, evidence trails, control points, and disclosure alignment.",
      tr: "GRI / ESRS kapsamındaki sürdürülebilirlik verileri için bağımsız doğrulama incelemesi; gösterge tanımları, kanıt izleri, kontrol noktaları ve açıklama uyumu.",
      nl: "Onafhankelijke verificatiebeoordeling van GRI/ESRS-data—indicatordefinities, bewijssporen, controles en disclosure-afstemming.",
    },
    typicalUse: {
      en: ["Corporate reporting", "Framework transitions", "Data governance"],
      tr: ["Kurumsal raporlama", "Çerçeve geçişleri", "Veri yönetişimi"],
      nl: ["Corporate rapportage", "Frameworktransities", "Datagovernance"],
    },
    whatWeDo: {
      en: ["Indicator and data-flow review", "Evidence and control checks", "Disclosure consistency"],
      tr: ["Gösterge ve veri akışı incelemesi", "Kanıt ve kontrol kontrolleri", "Açıklama tutarlılığı"],
      nl: ["Indicator- en dataflow-review", "Bewijs- en controletoetsen", "Disclosure-consistentie"],
    },
    deliverables: {
      en: ["Structured review outputs", "Findings register"],
      tr: ["Yapılandırılmış inceleme çıktıları", "Bulgu kaydı"],
      nl: ["Gestructureerde review-output", "Bevindingenregister"],
    },
  },
  {
    slug: "sustainability-kpi-evidence-review",
    title: {
      en: "Sustainability KPI Evidence Verification",
      tr: "Sürdürülebilirlik KPI Kanıt Doğrulaması",
      nl: "Verificatie Van Sustainability KPI-bewijs",
    },
    summary: {
      en: "Independent verification review of sustainability KPI evidence—definitions, source data, trails, and disclosure language.",
      tr: "Sürdürülebilirlik KPI kanıtı için bağımsız doğrulama incelemesi; tanımlar, kaynak veri, izler ve açıklama dili.",
      nl: "Onafhankelijke verificatiebeoordeling van sustainability KPI-bewijs—definities, brondata, sporen en disclosure.",
    },
    typicalUse: {
      en: ["Sustainability reporting", "Management disclosures", "Stakeholder communications"],
      tr: ["Sürdürülebilirlik raporlaması", "Yönetim açıklamaları", "Paydaş iletişimi"],
      nl: ["Duurzaamheidsrapportage", "Management disclosures", "Stakeholdercommunicatie"],
    },
    whatWeDo: {
      en: ["KPI definition review", "Source-to-report trails", "Evidence file checks"],
      tr: ["KPI tanımı incelemesi", "Kaynaktan rapora izler", "Kanıt dosyası kontrolleri"],
      nl: ["Review KPI-definities", "Sporen bron-naar-rapport", "Toets bewijsbestanden"],
    },
    deliverables: {
      en: ["Structured verification outputs", "Findings register"],
      tr: ["Yapılandırılmış doğrulama çıktıları", "Bulgu kaydı"],
      nl: ["Gestructureerde verificatie-output", "Bevindingenregister"],
    },
  },
  {
    slug: "limited-assurance-readiness",
    title: {
      en: "Limited Assurance Readiness Review",
      tr: "Sınırlı Güvence Doğrulama Hazırlığı",
      nl: "Beoordeling Voor Limited Assurance Readiness",
    },
    summary: {
      en: "Structured technical review of control environment, evidence, and process discipline ahead of limited assurance—not a substitute for the assurance engagement or a formal opinion.",
      tr: "Sınırlı güvence öncesi kontrol ortamı, kanıt ve süreç disiplini için yapılandırılmış teknik inceleme; güvence sürecinin veya resmi görüşün yerine geçmez.",
      nl: "Gestructureerde technische review van beheersing, bewijs en procesdiscipline vóór limited assurance—geen vervanging van de assurance-opdracht of formele conclusie.",
    },
    typicalUse: {
      en: ["Pre-assurance preparation", "Control maturity", "Reporting teams"],
      tr: ["Güvence öncesi hazırlık", "Kontrol olgunluğu", "Raporlama ekipleri"],
      nl: ["Voorbereiding vóór assurance", "Volwassenheid beheersing", "Rapportageteams"],
    },
    whatWeDo: {
      en: ["Readiness gap review", "Evidence structure", "Process ownership"],
      tr: ["Hazırlık boşluğu incelemesi", "Kanıt yapısı", "Süreç sahipliği"],
      nl: ["Review gereedheidsgaps", "Bewijsstructuur", "Proceseigenaarschap"],
    },
    deliverables: {
      en: ["Readiness findings", "Prioritized improvement themes"],
      tr: ["Hazırlık bulguları", "Önceliklendirilmiş iyileştirme temaları"],
      nl: ["Bevindingen gereedheid", "Geprioriteerde verbeteringsthema’s"],
    },
  },
  {
    slug: "non-financial-data-control-review",
    title: {
      en: "Non-financial Data Control Verification",
      tr: "Finansal Olmayan Veri Kontrol Doğrulaması",
      nl: "Verificatie Van Niet-financiële Datacontroles",
    },
    summary: {
      en: "Independent verification review of non-financial data definitions, controls, sampling discipline, and disclosure structure.",
      tr: "Finansal olmayan veri tanımları, kontroller, örnekleme disiplini ve açıklama yapısı için bağımsız doğrulama incelemesi.",
      nl: "Onafhankelijke verificatiebeoordeling van niet-financiële definities, controles, steekproefdiscipline en disclosure-structuur.",
    },
    typicalUse: {
      en: ["ESG reporting", "Operational KPIs", "Governance forums"],
      tr: ["ESG raporlaması", "Operasyonel KPI’lar", "Yönetişim forumları"],
      nl: ["ESG-rapportage", "Operationele KPI’s", "Governance-fora"],
    },
    whatWeDo: {
      en: ["Definition & control mapping", "Trail sampling", "Disclosure checks"],
      tr: ["Tanım ve kontrol eşlemesi", "İz örnekleme", "Açıklama kontrolleri"],
      nl: ["Mapping definities en controls", "Steekproeven op sporen", "Disclosure-toetsen"],
    },
    deliverables: {
      en: ["Verification findings", "Prioritized control themes"],
      tr: ["Doğrulama bulguları", "Önceliklendirilmiş kontrol temaları"],
      nl: ["Verificatiebevindingen", "Geprioriteerde controlthema’s"],
    },
  },
];

export function getService(slug: Service["slug"]) {
  return services.find((s) => s.slug === slug) || null;
}
