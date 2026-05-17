import type { Locale } from "@/i18n/locales";
import { resolvePartnerLogoPath } from "@/lib/resolvePublicImage";
import type { OrganizationEntity, RepresentationsUiCopy } from "./RepresentationsCards";

export type RepresentationsPageBundle = {
  title: string;
  intro: string;
  representationsTitle: string;
  representationsBody: string;
  solutionTitle: string;
  solutionBody: string;
  ui: RepresentationsUiCopy;
  representations: OrganizationEntity[];
  partners: OrganizationEntity[];
};

const bundles: Record<Locale, RepresentationsPageBundle> = {
  tr: {
    title: "Temsilcilikler ve uluslararası teknik koordinasyon",
    intro:
      "Temsilcilik yapısı yerel iletişim ve dokümantasyon koordinasyonunu destekler; teknik değerlendirme, karar disiplini ve kurumsal yönetişim Meva Global’in merkezi süreçleri altında yürütülür.",
    representationsTitle: "Temsilciliklerimiz",
    representationsBody:
      "Türkiye başta olmak üzere Avrupa, Asya, Afrika ve Kafkasya bölgelerinde yerel iletişim, belge koordinasyonu ve doğrulama süreçlerinin merkezi koordinasyonu.",
    solutionTitle: "İş Birliği Kanalları ve Ortaklar",
    solutionBody:
      "Tamamlayıcı uzmanlık alanlarıyla iş birliği yürütülen ortak yapılar.",
    ui: {
      viewDetails: "Temsilcilik Detaylarını İncele",
      close: "Kapat",
      summaryHeading: "İş birliği özeti",
      cooperationScopeLabel: "İş Birliği Kapsamı",
      localCoordinationLabel: "Yerel Koordinasyon",
      localCoordinationScope:
        "Türkiye başta olmak üzere Avrupa, Asya, Afrika ve Kafkasya bölgelerinde yerel iletişim ve belge akışı koordinasyonu.",
      documentCoordinationLabel: "Belge Koordinasyonu",
      applicationRoutingLabel: "Başvuru ve Süreç Yönlendirme",
      verificationCoordinationLabel: "Doğrulama Süreci Koordinasyonu",
      applicationRoutingNote:
        "Başvuru ve dosya iletimi yerel kanaldan yürütülür; kapsam ve süreç eşlemesi Meva Global merkezinde netleştirilir.",
      verificationCoordinationNote:
        "Doğrulama kapsamı, teknik inceleme ve çıktılar Meva Global’in merkezi süreçleri altında koordine edilir.",
      judgementBoundaryNote:
        "Temsilcilik yapısı yerel iletişim ve belge koordinasyonunu kolaylaştırır; teknik değerlendirme, karar mantığı ve çıktılar Meva Global’in merkezi süreçleri altında yürütülür.",
      corporateProfile: "Kurumsal Profil",
      serviceAndCompetenceAreas: "Hizmet ve Yetkinlik Alanları",
      accreditationAndCompetence: "Akreditasyon ve Yetkinlik",
      geographicScope: "Coğrafi Kapsam",
      corporateScale: "Kurumsal Ölçek",
      milestones: "Öne Çıkan Kilometre Taşları",
      referenceWorks: "Referans Niteliğinde Çalışmalar",
      sectorExperience: "Sektörel Deneyim",
      corporateStructure: "Kurumsal Yapı ve Ofisler",
    },
    representations: [
      {
        id: "emicert",
        name: "EmiCert",
        logoSrc: "/partner-logos/emicert.png",
        region:
          "Yunanistan, İrlanda, Bulgaristan ve Kıbrıs; Avrupa genelinde müşteri erişimi",
        networkRole:
          "Sera gazı doğrulaması ve emisyon raporlaması süreçlerinde temsil ve koordinasyon kanalı",
        technicalFocus:
          "Endüstriyel emisyonlar, havacılık (EU ETS, CORSIA), denizcilik MRV, F-Gas ve ilişkili doğrulama bağlamları",
        cardSummary:
          "Sera gazı doğrulaması, emisyon raporlaması ve regülasyon uyumu alanlarında güçlü uzmanlığa sahip uluslararası bir doğrulama kuruluşudur.",
        modalSummary:
          "EmiCert, sera gazı doğrulaması alanında 20 yılı aşkın uzmanlığa sahip, çok sayıda baş denetçiden oluşan teknik ekibiyle faaliyet gösteren uluslararası bir doğrulama kuruluşudur.",
        corporateProfile:
          "EmiCert; endüstriyel emisyonlar, havacılık ve denizcilik alanlarında doğrulama hizmetleri sunan, sera gazı raporlaması ve emisyon doğrulaması konusunda güçlü uzmanlık yapısına sahip bir kuruluştur.",
        serviceAreas: [
          "Endüstriyel emisyon regülasyonlarına uygun ön doğrulama",
          "Yıllık emisyon raporu doğrulama",
          "Faaliyet seviyesi doğrulama",
          "Havacılıkta EU ETS ve CORSIA kapsamındaki yıllık emisyon raporu doğrulaması",
          "F-Gaz yıllık raporlarının doğrulanması",
        ],
        accreditationAndCompetence:
          "EmiCert, sera gazı doğrulaması ve emisyon raporlaması alanında güçlü teknik uzmanlığa sahiptir. Kuruluş, ISO 17029:2019 ve ilgili AB mevzuatlarıyla uyumlu doğrulama hizmetleri sunmakta; özellikle F-Gaz yıllık raporları, havacılık emisyonları ve endüstriyel emisyon raporları alanlarında yetkin bir yapı ortaya koymaktadır.",
        corporateScale:
          "EmiCert, Yunanistan, İrlanda, Bulgaristan ve Kıbrıs’ta faaliyet göstermekte; Avrupa genelinde geniş müşteri ağına hizmet sunmaktadır. Kuruluşun sanayi, havacılık ve denizcilik alanlarında güçlü bir teknik doğrulama ağı bulunmaktadır.",
        milestones: [
          "Aralık 2016’da, Avrupa Tüzüğü 2015/757 (EU MRV) kapsamında Shipping MRV doğrulayıcısı olarak akreditasyon kapsamını genişleten dünya genelindeki ilk kuruluşlardan biri olmuştur.",
          "2024 yılında UK ETS ve UK MRV kapsamında havacılık ve denizcilik doğrulamaları için UKAS akreditasyonu elde ederek yetkinlik alanını daha da güçlendirmiştir.",
        ],
      },
      {
        id: "cetizion-verifica",
        name: "Cetizion Verifica",
        logoSrc: "/partner-logos/cetizion-verifica.png",
        region:
          "Amerika, Asya, Avrupa ve Orta Doğu başta olmak üzere çok bölgeli yapı; Türkiye dahil",
        networkRole:
          "Sürdürülebilirlik doğrulaması, denetim koordinasyonu ve uygunluk değerlendirmelerinde iş birliği kanalı",
        technicalFocus:
          "ASI Performans Standardı ve Gözetim Zinciri, tedarik zinciri ön değerlendirmeleri, çevresel ve sürdürülebilirlik değerlendirmeleri",
        cardSummary:
          "Sürdürülebilirlik doğrulaması, denetim ve uygunluk değerlendirmelerinde çok bölgeli çalışan uluslararası bir kuruluştur.",
        modalSummary:
          "Cetizion Verifica; denetim, değerlendirme ve doğrulama hizmetlerinde Hindistan, Amerika, Avrupa, Orta Doğu ve Afrika’da faaliyet gösteren uluslararası bir kuruluştur.",
        corporateProfile:
          "Kuruluş; sürdürülebilirlik, tedarik zinciri, çevresel performans ve kurumsal uygunluk değerlendirmeleri alanlarında geniş hizmet kapsamına sahiptir.",
        serviceAreas: [
          "ASI Performans Standardı denetimleri",
          "ASI Chain of Custody (CoC) denetimleri",
          "Su verimliliği ve çevresel performans değerlendirmeleri",
          "Ürün yaşam döngüsü değerlendirmesi",
          "Geri dönüşüm içeriği ve sıfır atık yaklaşımları",
          "Karbon tarafsızlığı ve sürdürülebilirlik raporu doğrulaması",
          "Tedarik zinciri durum tespiti",
          "CDP ve EcoVadis ön değerlendirmeleri",
          "CAHRA durum tespiti",
          "ISO 26000 boşluk analizi",
        ],
        accreditationAndCompetence:
          "Cetizion Verifica, ASI tarafından akredite denetim kuruluşu olarak tanınmakta ve geniş bir coğrafyada ASI Performans Standardı ile Gözetim Zinciri (CoC) denetimleri gerçekleştirmektedir. Bu yetkinlik, özellikle alüminyum ve ilişkili tedarik zincirlerinde sürdürülebilirlik doğrulaması ve denetimi arayan kuruluşlar için belirgin bir uzmanlık alanı oluşturur.",
        geographicScope:
          "Cetizion Verifica; Amerika, Asya, Avrupa ve Orta Doğu’da geniş bir coğrafi kapsam içinde hizmet sunmaktadır. Türkiye dahil birçok ülkede sürdürülebilirlik ve uygunluk değerlendirme faaliyetleri yürütmektedir.",
        referenceWorks:
          "Kuruluş, Mısır Alüminyum Şirketi’nin (Egyptalum) ASI Performans Standardı V3 sertifikasyon sürecindeki bağımsız üçüncü taraf denetimini gerçekleştirmiştir.",
      },
    ],
    partners: [
      {
        id: "anka-sustainability",
        name: "ANKA Sustainability",
        logoSrc: "/partner-logos/anka-sustainability.png",
        region: "Hollanda (Utrecht); Türkiye (İstanbul ofis yapılanması)",
        networkRole:
          "Doğrulama ve teknik inceleme süreçlerine yönlendirme; dokümantasyon koordinasyonu ve yerel iletişim desteği",
        technicalFocus:
          "ESG raporlaması, karbon ve iklim yönetimi, regülasyon uyumu, sertifikasyon ve izlenebilirlik hazırlığı",
        cardSummary:
          "ESG raporlaması, uyum, karbon yönetimi ve uygulama süreçlerinde iş birliği ve teknik koordinasyon desteği sunan ortak yapıdır.",
        modalSummary:
          "ANKA Sustainability Consulting B.V.; sürdürülebilirlik raporlaması, regülasyon uyumu, karbon yönetimi ve uygulama süreçlerinde iş birliği ve teknik koordinasyon sağlayan bir ortaktır.",
        corporateProfile:
          "Dijital araçlarla desteklenen yapılandırılmış süreçler üzerinden izlenebilir ve uygulanabilir raporlama hazırlığına odaklanır.",
        serviceAreas: [
          "ESG ve sürdürülebilirlik raporlaması",
          "Karbon ve iklim yönetimi",
          "Ürün sürdürülebilirliği ve döngüsellik",
          "Regülasyon ve tedarik zinciri uyumu",
          "Pazar ve paydaş hazırlığı",
          "Sertifikasyon ve izlenebilirlik yapıları",
        ],
        sectorExperience:
          "İmalat ve sanayi, ambalaj, inşaat, alüminyum ve metaller, gıda ve tarım, kimyasallar, enerji ve çok uluslu kurumsal yapılar dahil çok sektörlü teknik koordinasyon deneyimi.",
        corporateStructure:
          "Şirketin merkezi Hollanda’nın Utrecht şehrindedir. Türkiye’de ise İstanbul Ümraniye’de genel merkez ve Avcılar Teknopark’ta şube yapılanması bulunmaktadır.",
      },
    ],
  },
  en: {
    title: "Representations and international technical coordination",
    intro:
      "Representatives support local communication and documentation coordination. Technical assessment, decision discipline and governance follow Meva Global’s central technical processes.",
    representationsTitle: "Representations",
    representationsBody:
      "Local contact, document coordination and central coordination of verification processes across Türkiye, Europe, Asia, Africa and the Caucasus.",
    solutionTitle: "Cooperation Partners And Channels",
    solutionBody:
      "Partners engaged where complementary expertise supports delivery while technical assessment and decision discipline remain governed by Meva Global’s central processes.",
    ui: {
      viewDetails: "View Representation Details",
      close: "Close",
      summaryHeading: "Cooperation summary",
      cooperationScopeLabel: "Cooperation Scope",
      localCoordinationLabel: "Local Coordination",
      localCoordinationScope:
        "Local contact and document flow coordination across Türkiye, Europe, Asia, Africa and the Caucasus.",
      documentCoordinationLabel: "Document Coordination",
      applicationRoutingLabel: "Application and Process Routing",
      verificationCoordinationLabel: "Verification Process Coordination",
      applicationRoutingNote:
        "Applications and file transmission run through the local channel; scope and process mapping are clarified centrally by Meva Global.",
      verificationCoordinationNote:
        "Verification scope, technical review and outputs are coordinated under Meva Global’s central processes.",
      judgementBoundaryNote:
        "Representatives facilitate local contact and document coordination; technical assessment, decision logic and outputs are managed under Meva Global’s central processes.",
      corporateProfile: "Corporate Profile",
      serviceAndCompetenceAreas: "Service and Competence Areas",
      accreditationAndCompetence: "Accreditation and Competence",
      geographicScope: "Geographic Coverage",
      corporateScale: "Corporate Scale",
      milestones: "Key Milestones",
      referenceWorks: "Reference Engagements",
      sectorExperience: "Sector Experience",
      corporateStructure: "Corporate Structure and Offices",
    },
    representations: [
      {
        id: "emicert",
        name: "EmiCert",
        logoSrc: "/partner-logos/emicert.png",
        region: "Greece, Ireland, Bulgaria and Cyprus; European delivery footprint",
        networkRole: "Cooperation channel for greenhouse gas verification and emissions-reporting coordination",
        technicalFocus:
          "Industrial emissions, aviation (EU ETS, CORSIA), maritime MRV, F-Gas reports and related verification contexts",
        cardSummary:
          "An international verification body with strong expertise in greenhouse gas verification, emissions reporting, and regulatory compliance.",
        modalSummary:
          "EmiCert is an international verification body with more than 20 years of expertise in greenhouse gas verification, operating with a technical team comprising numerous lead verifiers.",
        corporateProfile:
          "EmiCert provides verification services for industrial emissions, aviation, and maritime sectors, with a strong expertise structure in greenhouse gas reporting and emissions verification.",
        serviceAreas: [
          "Pre-verification aligned with industrial emissions regulations",
          "Annual emissions report verification",
          "Activity level verification",
          "Annual emissions report verification for aviation under EU ETS and CORSIA",
          "Verification of annual F-Gas reports",
        ],
        accreditationAndCompetence:
          "EmiCert has strong technical expertise in greenhouse gas verification and emissions reporting. The organization delivers verification services aligned with ISO 17029:2019 and relevant EU legislation, demonstrating competence particularly in annual F-Gas reports, aviation emissions, and industrial emissions reports.",
        corporateScale:
          "EmiCert operates in Greece, Ireland, Bulgaria, and Cyprus, serving a broad customer base across Europe. The organization maintains a strong technical verification network across industry, aviation, and maritime sectors.",
        milestones: [
          "In December 2016, it was among the first organizations worldwide to expand accreditation scope as a Shipping MRV verifier under EU Regulation 2015/757 (EU MRV).",
          "In 2024, it strengthened its competence scope by obtaining UKAS accreditation for aviation and maritime verifications under UK ETS and UK MRV.",
        ],
      },
      {
        id: "cetizion-verifica",
        name: "Cetizion Verifica",
        logoSrc: "/partner-logos/cetizion-verifica.png",
        region: "Multi-region presence across the Americas, Asia, Europe and the Middle East, including Türkiye",
        networkRole:
          "Cooperation channel for sustainability verification, audit coordination and conformity-related assessments",
        technicalFocus:
          "ASI Performance Standard and Chain of Custody, supply-chain due diligence, environmental and sustainability assessments",
        cardSummary:
          "An international conformity assessment organization operating across geographies in sustainability verification, audit, and technical assessment services.",
        modalSummary:
          "Cetizion Verifica is an international organization providing audit, assessment, and verification services in India, the Americas, Europe, the Middle East, and Africa.",
        corporateProfile:
          "The organization has a broad service scope across sustainability, supply chain, environmental performance, and corporate reporting verification.",
        serviceAreas: [
          "ASI Performance Standard audits",
          "ASI Chain of Custody (CoC) audits",
          "Water efficiency and environmental performance assessments",
          "Product life cycle assessment",
          "Recycled content and zero-waste approaches",
          "Carbon neutrality programmes and sustainability report verification",
          "Supply chain due diligence",
          "CDP and EcoVadis pre-assessments",
          "CAHRA due diligence",
          "ISO 26000 gap analysis",
        ],
        accreditationAndCompetence:
          "Cetizion Verifica is recognized by ASI as an accredited audit organization and conducts ASI Performance Standard and Chain of Custody (CoC) audits across a wide geography. This competence forms a significant area of expertise for organizations seeking independent verification and audit support in aluminium and related supply chains.",
        geographicScope:
          "Cetizion Verifica delivers services across a broad geographic scope in the Americas, Asia, Europe, and the Middle East. It carries out sustainability and conformity assessment activities in many countries, including Türkiye.",
        referenceWorks:
          "The organization performed the independent third-party audit within the ASI Performance Standard V3 certification process for Egyptalum (Egypt Aluminium Company).",
      },
    ],
    partners: [
      {
        id: "anka-sustainability",
        name: "ANKA Sustainability",
        logoSrc: "/partner-logos/anka-sustainability.png",
        region: "Netherlands (Utrecht); Türkiye (Istanbul offices)",
        networkRole:
          "Cooperation channel for process routing, documentation coordination and local contact aligned with Meva Global technical review pathways",
        technicalFocus:
          "ESG reporting, carbon and climate management, regulatory compliance, certification and traceability readiness",
        cardSummary:
          "A cooperation partner supporting reporting, compliance, carbon management and implementation readiness through structured technical coordination.",
        modalSummary:
          "ANKA Sustainability Consulting B.V. supports organizations in sustainability reporting, regulatory compliance, carbon management and implementation processes through structured cooperation with Meva Global.",
        corporateProfile:
          "It focuses on systematic, traceable and implementable structures supported by digital tooling for documentation and reporting readiness.",
        serviceAreas: [
          "ESG and sustainability reporting",
          "Carbon and climate management",
          "Product sustainability and circularity",
          "Regulatory and supply chain compliance",
          "Market and stakeholder readiness",
          "Certification and traceability structures",
        ],
        sectorExperience:
          "It provides specialized support across sectors including manufacturing and industry, packaging, construction, aluminium and metals, food and agriculture, chemicals, energy, and multinational corporate structures.",
        corporateStructure:
          "The company is headquartered in Utrecht, the Netherlands. In Türkiye, it has its headquarters in Ümraniye, Istanbul, and a branch structure at Avcılar Technopark.",
      },
    ],
  },
  nl: {
    title: "Vertegenwoordigingen en internationale technische coördinatie",
    intro:
      "Vertegenwoordigers ondersteunen lokale communicatie en documentatiecoördinatie. Technische beoordeling, besluitdiscipline en governance worden centraal door Meva Global uitgevoerd.",
    representationsTitle: "Vertegenwoordigingen",
    representationsBody:
      "Lokale contact, documentcoördinatie en centrale coördinatie van verificatieprocessen in Türkiye, Europa, Azië, Afrika en de Kaukasus.",
    solutionTitle: "Samenwerkingspartners en -kanalen",
    solutionBody:
      "Partners waar aanvullende expertise de uitvoering ondersteunt, met technisch oordeel volgens de vastgelegde routes van Meva Global.",
    ui: {
      viewDetails: "Bekijk vertegenwoordigingsdetails",
      close: "Sluiten",
      summaryHeading: "Samenvatting samenwerking",
      cooperationScopeLabel: "Samenwerkingsomvang",
      localCoordinationLabel: "Lokale coördinatie",
      localCoordinationScope:
        "Coördinatie van lokaal contact en documentstromen in Türkiye, Europa, Azië, Afrika en de Kaukasus.",
      documentCoordinationLabel: "Documentcoördinatie",
      applicationRoutingLabel: "Aanvraag- en procesdoorverwijzing",
      verificationCoordinationLabel: "Coördinatie van verificatieprocessen",
      applicationRoutingNote:
        "Aanvragen en dossieroverdracht lopen via het lokale kanaal; scope en proceskoppeling worden centraal door Meva Global vastgelegd.",
      verificationCoordinationNote:
        "Verificatiescope, technische beoordeling en outputs worden gecoördineerd binnen de centrale processen van Meva Global.",
      judgementBoundaryNote:
        "Vertegenwoordigers ondersteunen lokaal contact en documentcoördinatie; technische beoordeling, beslislogica en outputs worden centraal door Meva Global beheerd.",
      corporateProfile: "Bedrijfsprofiel",
      serviceAndCompetenceAreas: "Dienstverlening en competentiegebieden",
      accreditationAndCompetence: "Accreditatie en competentie",
      geographicScope: "Geografische dekking",
      corporateScale: "Organisatorische schaal",
      milestones: "Belangrijke mijlpalen",
      referenceWorks: "Referentiewerkzaamheden",
      sectorExperience: "Sectorexpertise",
      corporateStructure: "Bedrijfsstructuur en kantoren",
    },
    representations: [
      {
        id: "emicert",
        name: "EmiCert",
        logoSrc: "/partner-logos/emicert.png",
        region: "Griekenland, Ierland, Bulgarije en Cyprus; Europese leveringsvoetafdruk",
        networkRole:
          "Samenwerkingskanaal voor broeikasgasverificatie en coördinatie rond emissierapportage",
        technicalFocus:
          "Industriële emissies, luchtvaart (EU ETS, CORSIA), maritieme MRV, F-gasrapporten en verwante verificatiecontexten",
        cardSummary:
          "Een internationale verificatie-instelling met sterke expertise op het gebied van broeikasgasverificatie, emissierapportage en regelgevingsnaleving.",
        modalSummary:
          "EmiCert is een internationale verificatie-instelling met meer dan 20 jaar expertise in broeikasgasverificatie, met een technisch team van talrijke hoofdverificateurs.",
        corporateProfile:
          "EmiCert levert verificatiediensten voor industriële emissies, luchtvaart en maritieme sector, met een sterke expertise-structuur rond broeikasgasrapportage en emissieverificatie.",
        serviceAreas: [
          "Pre-verificatie in lijn met industriële emissieregelgeving",
          "Verificatie van jaarlijkse emissierapporten",
          "Verificatie op activiteitenniveau",
          "Verificatie van jaarlijkse emissierapporten voor luchtvaart onder EU ETS en CORSIA",
          "Verificatie van jaarlijkse F-gasrapporten",
        ],
        accreditationAndCompetence:
          "EmiCert beschikt over sterke technische expertise in broeikasgasverificatie en emissierapportage. De organisatie levert verificatiediensten in lijn met ISO 17029:2019 en relevante EU-wetgeving, met name op het gebied van jaarlijkse F-gasrapporten, luchtvaartemissies en industriële emissierapporten.",
        corporateScale:
          "EmiCert is actief in Griekenland, Ierland, Bulgarije en Cyprus en bedient een breed klantenbestand in Europa. De organisatie heeft een sterk technisch verificatienetwerk in industrie, luchtvaart en maritieme sector.",
        milestones: [
          "In december 2016 behoorde zij tot de eerste organisaties wereldwijd die het accreditatiescope uitbreidden als Shipping MRV-verificateur onder EU-verordening 2015/757 (EU MRV).",
          "In 2024 versterkte zij het competentiegebied met UKAS-accreditatie voor luchtvaart- en maritieme verificaties onder UK ETS en UK MRV.",
        ],
      },
      {
        id: "cetizion-verifica",
        name: "Cetizion Verifica",
        logoSrc: "/partner-logos/cetizion-verifica.png",
        region:
          "Aanwezigheid in meerdere regio’s, waaronder Amerika, Azië, Europa en het Midden-Oosten, inclusief Türkiye",
        networkRole:
          "Samenwerkingskanaal voor duurzaamheidsverificatie, auditcoördinatie en conformiteitsgerelateerde beoordelingen",
        technicalFocus:
          "ASI Performance Standard en Chain of Custody, due diligence in ketens, milieu- en duurzaamheidsbeoordelingen",
        cardSummary:
          "Een internationale conformiteitsbeoordelingsorganisatie die in verschillende regio’s actief is in duurzaamheidsverificatie, audit en technische beoordeling.",
        modalSummary:
          "Cetizion Verifica is een internationale organisatie die audit-, beoordelings- en verificatiediensten levert in India, de Amerika’s, Europa, het Midden-Oosten en Afrika.",
        corporateProfile:
          "De organisatie heeft een breed dienstverleningsbereik op het gebied van duurzaamheid, toeleveringsketen, milieuprestaties en bedrijfsmatige rapportageverificatie.",
        serviceAreas: [
          "Audits tegen de ASI Performance Standard",
          "ASI Chain of Custody (CoC) audits",
          "Beoordelingen van waterefficiëntie en milieuprestaties",
          "Levenscyclusbeoordeling van producten",
          "Gerecycled gehalte en zero-waste-benaderingen",
          "Koolstofneutraliteit en verificatie van duurzaamheidsrapporten",
          "Due diligence van toeleveringsketens",
          "Voorbeoordelingen voor CDP en EcoVadis",
          "CAHRA due diligence",
          "ISO 26000 gap-analyse",
        ],
        accreditationAndCompetence:
          "Cetizion Verifica wordt door ASI erkend als geaccrediteerde auditorganisatie en voert ASI Performance Standard- en Chain of Custody (CoC)-audits uit in een brede geografische spreiding. Deze competentie vormt een belangrijk expertisegebied voor organisaties die onafhankelijke verificatie en auditondersteuning zoeken in aluminium en gerelateerde toeleveringsketens.",
        geographicScope:
          "Cetizion Verifica levert diensten binnen een brede geografische dekking in de Amerika’s, Azië, Europa en het Midden-Oosten. Zij voert duurzaamheids- en conformiteitsbeoordelingen uit in vele landen, waaronder Türkiye.",
        referenceWorks:
          "De organisatie voerde de onafhankelijke derde-partij audit uit binnen het ASI Performance Standard V3-certificatieproces voor Egyptalum (Egypt Aluminium Company).",
      },
    ],
    partners: [
      {
        id: "anka-sustainability",
        name: "ANKA Sustainability",
        logoSrc: "/partner-logos/anka-sustainability.png",
        region: "Nederland (Utrecht); Türkiye (kantoren in Istanbul)",
        networkRole:
          "Samenwerkingskanaal voor procesdoorverwijzing, documentatiecoördinatie en lokaal contact in lijn met de technische beoordelingsroutes van Meva Global",
        technicalFocus:
          "ESG-rapportage, koolstof- en klimaatbeheer, regelgevingsnaleving, certificatie- en traceerbaarheidsgereedheid",
        cardSummary:
          "Samenwerkingspartner die rapportage, naleving, koolstofbeheer en implementatiegereedheid ondersteunt via gestructureerde technische coördinatie.",
        modalSummary:
          "ANKA Sustainability Consulting B.V. ondersteunt organisaties bij duurzaamheidsrapportage, regelgevingsnaleving, koolstofbeheer en implementatieprocessen via gestructureerde samenwerking met Meva Global.",
        corporateProfile:
          "Zij richt zich op systematische, traceerbare en uitvoerbare structuren met digitale ondersteuning voor documentatie- en rapportagegereedheid.",
        serviceAreas: [
          "ESG- en duurzaamheidsrapportage",
          "Koolstof- en klimaatbeheer",
          "Productduurzaamheid en circulariteit",
          "Regelgevings- en toeleveringsketennaleving",
          "Markt- en stakeholder-gereedheid",
          "Certificatie- en traceerbaarheidsstructuren",
        ],
        sectorExperience:
          "Zij levert gespecialiseerde ondersteuning in sectoren waaronder productie en industrie, verpakking, bouw, aluminium en metalen, voeding en landbouw, chemicaliën, energie en multinationale bedrijfsstructuren.",
        corporateStructure:
          "Het hoofdkantoor bevindt zich in Utrecht, Nederland. In Türkiye zijn het hoofdkantoor in Ümraniye, Istanbul, en een vestiging in Avcılar Technopark.",
      },
    ],
  },
};

function mapLogos(entities: OrganizationEntity[]): OrganizationEntity[] {
  return entities.map((e) => ({ ...e, logoSrc: resolvePartnerLogoPath(e.id, e.logoSrc) }));
}

export function getRepresentationsPageBundle(locale: Locale): RepresentationsPageBundle {
  const b = bundles[locale];
  return {
    ...b,
    representations: mapLogos(b.representations),
    partners: mapLogos(b.partners),
  };
}
