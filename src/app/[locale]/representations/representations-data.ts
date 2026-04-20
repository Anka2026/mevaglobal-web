import type { Locale } from "@/i18n/locales";
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
    title: "Temsilciliklerimiz",
    intro:
      "Uluslararası doğrulama, teknik değerlendirme ve sürdürülebilirlik ekosistemindeki temsil yapılarımız ve çözüm ortaklıklarımızı tek bir sayfada sunuyoruz. Bu yapı, müşterilerimize daha güçlü uzmanlık ağı, daha geniş coğrafi erişim ve daha bütüncül hizmet kabiliyeti sağlamamıza katkı sunar.",
    representationsTitle: "Temsilciliklerimiz",
    representationsBody:
      "Uluslararası doğrulama, teknik değerlendirme ve kurumsal iş birliği ekosistemindeki temsil ağımızı ve iş birliklerimizi yansıtır.",
    solutionTitle: "Çözüm Ortaklarımız",
    solutionBody:
      "Tamamlayıcı uzmanlık alanlarıyla daha bütüncül bir hizmet yapısına katkı sağlayan çözüm ortaklarımızı içerir.",
    ui: {
      viewDetails: "Detayları Gör",
      close: "Kapat",
      summaryHeading: "Kısa Özet",
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
        cardSummary:
          "Sürdürülebilirlik doğrulaması, denetim ve değerlendirme hizmetlerinde farklı coğrafyalarda faaliyet gösteren uluslararası bir uygunluk ve güvence kuruluşudur.",
        modalSummary:
          "Cetizion Verifica; denetim, değerlendirme ve doğrulama hizmetlerinde Hindistan, Amerika, Avrupa, Orta Doğu ve Afrika’da faaliyet gösteren uluslararası bir kuruluştur.",
        corporateProfile:
          "Kuruluş, sürdürülebilirlik, tedarik zinciri, çevresel performans ve kurumsal güvence alanlarında geniş hizmet kapsamına sahiptir.",
        serviceAreas: [
          "ASI Performans Standardı denetimleri",
          "ASI Chain of Custody (CoC) denetimleri",
          "Su verimliliği ve çevresel performans değerlendirmeleri",
          "Ürün yaşam döngüsü değerlendirmesi",
          "Geri dönüşüm içeriği ve sıfır atık yaklaşımları",
          "Karbon tarafsızlığı ve sürdürülebilirlik raporu güvencesi",
          "Tedarik zinciri durum tespiti",
          "CDP ve EcoVadis ön değerlendirmeleri",
          "CAHRA durum tespiti",
          "ISO 26000 boşluk analizi",
        ],
        accreditationAndCompetence:
          "Cetizion Verifica, ASI tarafından akredite denetim kuruluşu olarak tanınmakta ve geniş bir coğrafyada ASI Performans Standardı ile Gözetim Zinciri (CoC) denetimleri gerçekleştirmektedir. Bu yetkinlik, özellikle alüminyum ve ilişkili tedarik zincirlerinde sürdürülebilirlik güvencesi arayan kuruluşlar açısından önemli bir uzmanlık alanı oluşturmaktadır.",
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
        cardSummary:
          "Raporlama, uyum, karbon yönetimi ve uygulama süreçlerini güçlendirmeye odaklanan stratejik sürdürülebilirlik danışmanlığı ve dijital çözüm ortağıdır.",
        modalSummary:
          "ANKA Sustainability Consulting B.V., kuruluşların sürdürülebilirlik raporlaması, regülasyon uyumu, karbon yönetimi ve uygulama süreçlerini güçlendirmelerine destek olan stratejik bir sürdürülebilirlik danışmanlık firmasıdır.",
        corporateProfile:
          "Danışmanlık yaklaşımını dijital çözümlerle birleştirerek daha sistematik, izlenebilir ve uygulanabilir yapılar geliştirmeye odaklanır.",
        serviceAreas: [
          "ESG ve sürdürülebilirlik raporlaması",
          "Karbon ve iklim yönetimi",
          "Ürün sürdürülebilirliği ve döngüsellik",
          "Regülasyon ve tedarik zinciri uyumu",
          "Pazar ve paydaş hazırlığı",
          "Sertifikasyon ve izlenebilirlik yapıları",
        ],
        sectorExperience:
          "İmalat ve sanayi, ambalaj, inşaat, alüminyum ve metaller, gıda ve tarım, kimyasallar, enerji ve çok uluslu kurumsal yapılar dahil farklı sektörlerde uzmanlaşmış destek sunmaktadır.",
        corporateStructure:
          "Şirketin merkezi Hollanda’nın Utrecht şehrindedir. Türkiye’de ise İstanbul Ümraniye’de genel merkez ve Avcılar Teknopark’ta şube yapılanması bulunmaktadır.",
      },
    ],
  },
  en: {
    title: "Our Representations",
    intro:
      "We present our representation structures and solution partnerships across the international verification, technical assessment, and sustainability ecosystem on a single page. This structure helps us deliver a stronger expert network, broader geographic reach, and more holistic service capability for our clients.",
    representationsTitle: "Our Representations",
    representationsBody:
      "Reflects our representation network and collaborations across the international verification, technical assessment, and institutional cooperation ecosystem.",
    solutionTitle: "Solution Partners",
    solutionBody:
      "Includes solution partners whose complementary expertise contributes to a more holistic service structure.",
    ui: {
      viewDetails: "View Details",
      close: "Close",
      summaryHeading: "Summary",
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
        cardSummary:
          "An international conformity and assurance organization operating across geographies in sustainability verification, audit, and assessment services.",
        modalSummary:
          "Cetizion Verifica is an international organization providing audit, assessment, and verification services in India, the Americas, Europe, the Middle East, and Africa.",
        corporateProfile:
          "The organization has a broad service scope across sustainability, supply chain, environmental performance, and corporate assurance.",
        serviceAreas: [
          "ASI Performance Standard audits",
          "ASI Chain of Custody (CoC) audits",
          "Water efficiency and environmental performance assessments",
          "Product life cycle assessment",
          "Recycled content and zero-waste approaches",
          "Carbon neutrality and sustainability report assurance",
          "Supply chain due diligence",
          "CDP and EcoVadis pre-assessments",
          "CAHRA due diligence",
          "ISO 26000 gap analysis",
        ],
        accreditationAndCompetence:
          "Cetizion Verifica is recognized by ASI as an accredited audit organization and conducts ASI Performance Standard and Chain of Custody (CoC) audits across a wide geography. This competence forms a significant area of expertise for organizations seeking sustainability assurance in aluminium and related supply chains.",
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
        cardSummary:
          "A strategic sustainability advisory and digital solutions partner focused on strengthening reporting, compliance, carbon management, and implementation processes.",
        modalSummary:
          "ANKA Sustainability Consulting B.V. is a strategic sustainability advisory firm that supports organizations in strengthening sustainability reporting, regulatory compliance, carbon management, and implementation processes.",
        corporateProfile:
          "It focuses on developing more systematic, traceable, and implementable structures by combining advisory approaches with digital solutions.",
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
    title: "Onze Vertegenwoordigingen",
    intro:
      "Wij presenteren onze vertegenwoordigingsstructuren en oplossingspartnerschappen binnen het internationale ecosysteem van verificatie, technische beoordeling en duurzaamheid op één pagina. Deze structuur draagt bij aan een sterkere expertisenetwerk, bredere geografische dekking en een holistischere dienstverleningscapaciteit voor onze klanten.",
    representationsTitle: "Onze Vertegenwoordigingen",
    representationsBody:
      "Weerspiegelt ons vertegenwoordigingsnetwerk en samenwerkingen binnen het internationale ecosysteem van verificatie, technische beoordeling en institutionele samenwerking.",
    solutionTitle: "Oplossingspartners",
    solutionBody:
      "Omvat oplossingspartners waarvan de aanvullende expertise bijdraagt aan een meer holistische dienstverleningsstructuur.",
    ui: {
      viewDetails: "Details Bekijken",
      close: "Sluiten",
      summaryHeading: "Korte samenvatting",
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
        cardSummary:
          "Een internationale conformiteits- en assurance-organisatie die in verschillende regio’s actief is in duurzaamheidsverificatie, audit en beoordeling.",
        modalSummary:
          "Cetizion Verifica is een internationale organisatie die audit-, beoordelings- en verificatiediensten levert in India, de Amerika’s, Europa, het Midden-Oosten en Afrika.",
        corporateProfile:
          "De organisatie heeft een breed dienstverleningsbereik op het gebied van duurzaamheid, toeleveringsketen, milieuprestaties en corporate assurance.",
        serviceAreas: [
          "Audits tegen de ASI Performance Standard",
          "ASI Chain of Custody (CoC) audits",
          "Beoordelingen van waterefficiëntie en milieuprestaties",
          "Levenscyclusbeoordeling van producten",
          "Gerecycled gehalte en zero-waste-benaderingen",
          "Koolstofneutraliteit en assurance van duurzaamheidsrapporten",
          "Due diligence van toeleveringsketens",
          "Voorbeoordelingen voor CDP en EcoVadis",
          "CAHRA due diligence",
          "ISO 26000 gap-analyse",
        ],
        accreditationAndCompetence:
          "Cetizion Verifica wordt door ASI erkend als geaccrediteerde auditorganisatie en voert ASI Performance Standard- en Chain of Custody (CoC)-audits uit in een brede geografische spreiding. Deze competentie vormt een belangrijk expertisegebied voor organisaties die duurzaamheidsassurance zoeken in aluminium en gerelateerde toeleveringsketens.",
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
        cardSummary:
          "Een strategische duurzaamheidsadvies- en digitale oplossingspartner gericht op het versterken van rapportage, naleving, koolstofbeheer en implementatieprocessen.",
        modalSummary:
          "ANKA Sustainability Consulting B.V. is een strategisch duurzaamheidsadviesbureau dat organisaties ondersteunt bij het versterken van duurzaamheidsrapportage, regelgevingsnaleving, koolstofbeheer en implementatieprocessen.",
        corporateProfile:
          "Zij richt zich op het ontwikkelen van meer systematische, traceerbare en uitvoerbare structuren door adviesbenaderingen te combineren met digitale oplossingen.",
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

export function getRepresentationsPageBundle(locale: Locale): RepresentationsPageBundle {
  return bundles[locale];
}
