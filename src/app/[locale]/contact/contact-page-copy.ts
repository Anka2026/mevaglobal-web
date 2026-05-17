import type { Locale } from "@/i18n/locales";
import type { ContactEnquiryFormCopy } from "@/components/contact/ContactEnquiryForm";

export type SupportCard = { title: string; description: string };
export type NextStep = { title: string; body: string };

export type ContactPageCopy = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  companyCard: {
    title: string;
    description: string;
    labels: { email: string; company: string; headOffice: string; kvk: string };
  };
  officesCard: {
    title: string;
    nlTitle: string;
    trTitle: string;
  };
  support: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: readonly [SupportCard, SupportCard, SupportCard];
  };
  formIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  form: ContactEnquiryFormCopy;
  sidePanel: {
    topicsTitle: string;
    topics: readonly string[];
    frameworkTitle: string;
    frameworkBullets: readonly string[];
  };
  nextSteps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: readonly [NextStep, NextStep, NextStep];
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const CONTACT_PAGE_COPY: Record<Locale, ContactPageCopy> = {
  tr: {
    hero: {
      eyebrow: "İletişim",
      title: "Doğrulama ve Teknik İnceleme İhtiyaçlarınızı Birlikte Netleştirelim",
      subtitle:
        "Kapsamınızı, uygulanabilir standardı ve dokümantasyon durumunuzu paylaşın; size en uygun doğrulama, teknik inceleme veya hazırlık çerçevesini netleştirelim.",
      primaryCta: "Mesaj Gönderin",
      secondaryCta: "Hizmetleri İnceleyin",
    },
    companyCard: {
      title: "Meva Global Certification B.V.",
      description:
        "Hollanda merkezli yapımızla doğrulama, validasyon, teknik inceleme ve sertifikasyon hazırlığı süreçlerinde kurumlara yapılandırılmış teknik değerlendirme sunarız.",
      labels: {
        email: "E-posta",
        company: "Şirket",
        headOffice: "Merkez",
        kvk: "KvK No",
      },
    },
    officesCard: {
      title: "Ofislerimiz",
      nlTitle: "Hollanda Merkezi",
      trTitle: "Türkiye Koordinasyon Ofisi",
    },
    support: {
      eyebrow: "İlk Temas",
      title: "Doğrulama ve Teknik İnceleme Talepleri",
      subtitle:
        "Hangi beyanı veya dosyayı hazırladığınızı paylaştığınızda teknik kapsamı, kanıt beklentisini ve doğru iletişim yolunu birlikte netleştiririz.",
      cards: [
        {
          title: "Doğrulama ve Bağımsız İnceleme Talepleri",
          description:
            "Sera gazı, ürün beyanı, sürdürülebilirlik verisi veya teknik beyan dosyalarınız için doğrulama ve inceleme kapsamını birlikte değerlendiririz.",
        },
        {
          title: "CBAM ve Regülasyon Hazırlığı",
          description:
            "Gömülü emisyon verisi, tedarikçi kanıtları, hesaplama yapısı ve raporlama dosyası için denetime hazır teknik hazırlık çerçevesi oluşturur; kanıt yapısı ve dosya düzeni teknik olarak netleştirilir.",
        },
        {
          title: "Sertifikasyon Hazırlığı ve Teknik Dosya",
          description:
            "Standart, program kuralı veya üçüncü taraf inceleme beklentilerine göre dokümantasyon ve kanıt yapınızı gözden geçirebiliriz.",
        },
      ],
    },
    formIntro: {
      eyebrow: "Mesajınızı İletin",
      title: "Talebinizi Bizimle Paylaşın",
      subtitle:
        "Konu, kapsam ve hedef takviminizi kısaca iletin. İlk değerlendirmede uygun hizmet çerçevesi, kanıt beklentisi ve zaman çizelgesini netleştirelim.",
    },
    form: {
      mailtoSubject: "Meva Global — iletişim talebi",
      labels: {
        name: "Ad Soyad",
        company: "Şirket",
        email: "E-posta",
        country: "Ülke",
        service: "İlgilendiğiniz Hizmet",
        message: "Mesaj",
        consent: "KVKK/GDPR kapsamında kişisel verilerimin talep amacıyla işlenmesini kabul ediyorum.",
        submit: "Mesaj Gönderin",
      },
      bodyFieldLabels: {
        name: "Ad Soyad",
        company: "Şirket",
        email: "E-posta",
        country: "Ülke",
        service: "İlgilendiğiniz Hizmet",
        message: "Mesaj",
        consent: "KVKK/GDPR onayı",
      },
      privacyNote:
        "Paylaştığınız bilgiler yalnızca talebinizi değerlendirmek ve size geri dönüş sağlamak amacıyla kullanılır.",
      servicePlaceholder: "Seçiniz",
      serviceOptions: [
        { value: "verification", label: "Bağımsız doğrulama ve teknik inceleme" },
        { value: "cbam", label: "CBAM / SKDM hazırlığı" },
        { value: "product", label: "Ürün ve çevresel beyanlar" },
        { value: "sustainability", label: "Sürdürülebilirlik raporlaması" },
        { value: "certification", label: "Sertifikasyon hazırlığı" },
        { value: "cooperation", label: "Uluslararası iş birliği" },
        { value: "other", label: "Diğer" },
      ],
      validationRequired: "Bu alan gereklidir.",
      validationEmail: "Geçerli bir e-posta adresi girin.",
      validationConsent: "Devam etmek için onayı işaretleyin.",
      mailtoBehaviorNote:
        "Gönder, e-posta uygulamanızı seçtiğiniz içerikle açar; mesaj sunucumuza otomatik iletilmez—gönderimi siz tamamlarsınız.",
    },
    sidePanel: {
      topicsTitle: "Sık Konuştuğumuz Konular",
      topics: [
        "Sera gazı doğrulaması ve emisyon verileri",
        "CBAM / SKDM raporlama hazırlığı",
        "EPD, LCA ve ürün beyanları",
        "Sürdürülebilirlik raporlaması ve veri doğruluğu",
        "Tedarik zinciri ve kanıt dosyası",
        "Sertifikasyon hazırlığı ve teknik dokümantasyon",
      ],
      frameworkTitle: "Yanıt Çerçevemiz",
      frameworkBullets: [
        "Talebinizi kapsam ve öncelik açısından değerlendiririz.",
        "Uygun hizmet veya teknik inceleme çerçevesini netleştiririz.",
        "Gerekirse kısa bir görüşme planlayarak iş akışını ve takvimi belirleriz.",
      ],
    },
    nextSteps: {
      eyebrow: "Sonrasında Ne Olur?",
      title: "Talebinizden Sonra Net Bir Yol İzleriz",
      subtitle: "İlk değerlendirme sürecimiz, kapsamı ve beklentileri hızlıca netleştirmek üzerine kuruludur.",
      steps: [
        {
          title: "İlk Değerlendirme",
          body: "Talebinizi, sektörünüzü ve ilgili çalışma alanını inceleriz.",
        },
        {
          title: "Kapsam Netleştirme",
          body: "Uygulanabilir standart, veri durumu, dokümantasyon seviyesi ve hedef takvimi birlikte netleştiririz.",
        },
        {
          title: "Teklif ve İş Akışı",
          body: "Gerekli olduğunda görüşme planlar, uygun hizmet çerçevesi ve teklif yaklaşımını paylaşırız.",
        },
      ],
    },
    finalCta: {
      title: "Doğru Doğrulama Çerçevesini Birlikte Oluşturalım",
      subtitle:
        "Talebinizi paylaşın; kapsam, kanıt beklentisi ve zaman çizelgesi için net bir çerçeve sunalım.",
      primaryCta: "Mesaj Gönderin",
      secondaryCta: "Hizmetleri İnceleyin",
    },
  },
  en: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s Clarify Your Verification And Technical Review Needs",
      subtitle:
        "Share your scope, applicable standard and documentation status so we can identify the right verification, technical review or readiness pathway.",
      primaryCta: "Send an Enquiry",
      secondaryCta: "Explore Services",
    },
    companyCard: {
      title: "Meva Global Certification B.V.",
      description:
        "Based in the Netherlands, Meva Global supports organisations with structured verification, validation, technical review and certification-readiness processes.",
      labels: {
        email: "Email",
        company: "Company",
        headOffice: "Head Office",
        kvk: "KvK No",
      },
    },
    officesCard: {
      title: "Our Offices",
      nlTitle: "Netherlands Head Office",
      trTitle: "Türkiye Coordination Office",
    },
    support: {
      eyebrow: "First Contact",
      title: "How Can We Support You?",
      subtitle:
        "We can quickly clarify the right technical scope and contact pathway based on the nature of your enquiry.",
      cards: [
        {
          title: "Verification And Independent Technical Review",
          description:
            "We can help clarify the review scope for greenhouse gas data, product declarations, sustainability information or technical disclosures.",
        },
        {
          title: "CBAM And Regulatory Readiness",
          description:
            "We establish a defensible readiness framework for embedded emissions data, supplier evidence, calculation structure and reporting files—clarifying evidence structure and file discipline.",
        },
        {
          title: "Certification Readiness and Technical Files",
          description:
            "We can review your documentation and evidence structure against standards, programme rules or third-party review expectations.",
        },
      ],
    },
    formIntro: {
      eyebrow: "Send Your Message",
      title: "Share Your Enquiry With Us",
      subtitle:
        "Briefly describe your topic, scope and target timeline. Our initial review will help clarify the suitable service framework, evidence expectations and delivery sequencing.",
    },
    form: {
      mailtoSubject: "Meva Global — contact enquiry",
      labels: {
        name: "Name",
        company: "Company",
        email: "Email",
        country: "Country",
        service: "Service Interest",
        message: "Message",
        consent: "I consent to the processing of my personal data under GDPR for the purpose of handling this enquiry.",
        submit: "Send Message",
      },
      bodyFieldLabels: {
        name: "Name",
        company: "Company",
        email: "Email",
        country: "Country",
        service: "Service interest",
        message: "Message",
        consent: "GDPR consent",
      },
      privacyNote: "The information you share is used only to assess your enquiry and respond to you.",
      servicePlaceholder: "Select",
      serviceOptions: [
        { value: "verification", label: "Independent verification and technical review" },
        { value: "cbam", label: "CBAM readiness" },
        { value: "product", label: "Product and environmental declarations" },
        { value: "sustainability", label: "Sustainability reporting" },
        { value: "certification", label: "Certification readiness" },
        { value: "cooperation", label: "International cooperation" },
        { value: "other", label: "Other" },
      ],
      validationRequired: "This field is required.",
      validationEmail: "Enter a valid email address.",
      validationConsent: "Please confirm consent to continue.",
      mailtoBehaviorNote:
        "Submit opens your email app with this draft; nothing is transmitted through our website until you send the email.",
    },
    sidePanel: {
      topicsTitle: "Common Discussion Topics",
      topics: [
        "Greenhouse gas verification and emissions data",
        "CBAM reporting readiness",
        "EPD, LCA and product declarations",
        "Sustainability reporting and disclosure quality",
        "Supply chain evidence files",
        "Certification readiness and technical documentation",
      ],
      frameworkTitle: "Our Response Framework",
      frameworkBullets: [
        "We review your enquiry by scope and priority.",
        "We clarify the appropriate service or technical review pathway.",
        "Where useful, we schedule a short discussion to align scope and timing.",
      ],
    },
    nextSteps: {
      eyebrow: "What Happens Next?",
      title: "A Clear Pathway After Your Enquiry",
      subtitle: "Our first review is designed to clarify the scope and expectations quickly.",
      steps: [
        {
          title: "Initial Review",
          body: "We review your enquiry, sector and relevant workstream.",
        },
        {
          title: "Scope Clarification",
          body: "We clarify the applicable standard, data status, documentation maturity and target timeline.",
        },
        {
          title: "Proposal And Engagement Shape",
          body: "Where appropriate, we schedule a discussion and share the suitable service framework or proposal approach.",
        },
      ],
    },
    finalCta: {
      title: "Let’s Define the Right Verification Pathway",
      subtitle: "Share your enquiry and we will help clarify the scope, evidence expectations and delivery timeline.",
      primaryCta: "Send an Enquiry",
      secondaryCta: "Explore Services",
    },
  },
  nl: {
    hero: {
      eyebrow: "Contact",
      title: "Laten We Verificatie En Technische Beoordeling Samen Afstemmen",
      subtitle:
        "Deel uw scope, toepasselijke norm en documentatiestatus, zodat we het juiste traject voor verificatie, technische beoordeling of voorbereiding kunnen bepalen.",
      primaryCta: "Stuur een aanvraag",
      secondaryCta: "Bekijk diensten",
    },
    companyCard: {
      title: "Meva Global Certification B.V.",
      description:
        "Meva Global is gevestigd in Nederland en ondersteunt organisaties met gestructureerde processen voor verificatie, validatie, technische beoordeling en certificeringsvoorbereiding.",
      labels: {
        email: "E-mail",
        company: "Bedrijf",
        headOffice: "Hoofdkantoor",
        kvk: "KvK-nummer",
      },
    },
    officesCard: {
      title: "Onze kantoren",
      nlTitle: "Nederlands hoofdkantoor",
      trTitle: "Coördinatiekantoor Türkiye",
    },
    support: {
      eyebrow: "Eerste Contact",
      title: "Verificatie En Onafhankelijke Technische Review",
      subtitle:
        "Deel wat u wilt verifiëren of voorbereiden; dan stemmen we technische scope, bewijsverwachtingen en het juiste contacttraject af.",
      cards: [
        {
          title: "Verificatie En Technische Review",
          description:
            "We helpen de beoordelingsscope te verduidelijken voor broeikasgasgegevens, productverklaringen, duurzaamheidsinformatie of technische disclosures.",
        },
        {
          title: "CBAM En Voorbereiding Op Regelgeving",
          description:
            "We ondersteunen een gedisciplineerd voorbereidingskader voor ingebedde emissiegegevens, leveranciersbewijs, berekeningsstructuur en rapportagedossiers.",
        },
        {
          title: "Certificeringsvoorbereiding en technische dossiers",
          description:
            "We beoordelen uw documentatie- en bewijsstructuur aan de hand van normen, programmaregels of verwachtingen van externe beoordeling.",
        },
      ],
    },
    formIntro: {
      eyebrow: "Stuur uw bericht",
      title: "Deel uw aanvraag met ons",
      subtitle:
        "Beschrijf kort uw onderwerp, scope en gewenste planning. In de eerste beoordeling verduidelijken we het passende dienstkader, de bewijsverwachtingen en het leveringsplan.",
    },
    form: {
      mailtoSubject: "Meva Global — contactaanvraag",
      labels: {
        name: "Naam",
        company: "Bedrijf",
        email: "E-mail",
        country: "Land",
        service: "Dienstinteresse",
        message: "Bericht",
        consent:
          "Ik geef toestemming voor de verwerking van mijn persoonsgegevens onder de AVG voor de afhandeling van deze aanvraag.",
        submit: "Bericht verzenden",
      },
      bodyFieldLabels: {
        name: "Naam",
        company: "Bedrijf",
        email: "E-mail",
        country: "Land",
        service: "Dienstinteresse",
        message: "Bericht",
        consent: "AVG-toestemming",
      },
      privacyNote:
        "De informatie die u deelt wordt uitsluitend gebruikt om uw aanvraag te beoordelen en contact met u op te nemen.",
      servicePlaceholder: "Kies",
      serviceOptions: [
        { value: "verification", label: "Onafhankelijke verificatie en technische review" },
        { value: "cbam", label: "CBAM-voorbereiding" },
        { value: "product", label: "Product- en milieuverklaringen" },
        { value: "sustainability", label: "Duurzaamheidsrapportage" },
        { value: "certification", label: "Certificeringsvoorbereiding" },
        { value: "cooperation", label: "Internationale samenwerking" },
        { value: "other", label: "Anders" },
      ],
      validationRequired: "Dit veld is verplicht.",
      validationEmail: "Voer een geldig e-mailadres in.",
      validationConsent: "Bevestig de toestemming om door te gaan.",
      mailtoBehaviorNote:
        "Verzenden opent uw e-mailprogramma met deze concepttekst; er wordt niets via onze site verstuurd tot u de mail zelf verzendt.",
    },
    sidePanel: {
      topicsTitle: "Veelbesproken onderwerpen",
      topics: [
        "Broeikasgasverificatie en emissiegegevens",
        "Voorbereiding op CBAM-rapportage",
        "EPD, LCA en productverklaringen",
        "Duurzaamheidsrapportage en disclosure-kwaliteit",
        "Bewijsdossiers in de toeleveringsketen",
        "Certificeringsvoorbereiding en technische documentatie",
      ],
      frameworkTitle: "Ons reactiekader",
      frameworkBullets: [
        "We beoordelen uw aanvraag op scope en prioriteit.",
        "We verduidelijken het passende dienst- of beoordelingskader.",
        "Waar zinvol plannen we een kort gesprek om scope en planning af te stemmen.",
      ],
    },
    nextSteps: {
      eyebrow: "Wat gebeurt er daarna?",
      title: "Een duidelijk vervolg na uw aanvraag",
      subtitle: "Onze eerste beoordeling is erop gericht de scope en verwachtingen snel te verduidelijken.",
      steps: [
        {
          title: "Eerste beoordeling",
          body: "We bekijken uw aanvraag, sector en relevante werkstroom.",
        },
        {
          title: "Scopeverduidelijking",
          body: "We verduidelijken de toepasselijke norm, datastatus, documentatiematuriteit en gewenste planning.",
        },
        {
          title: "Voorstel En Opdrachtvorm",
          body: "Waar passend plannen we een gesprek en delen we het geschikte dienstkader of voorsteltraject.",
        },
      ],
    },
    finalCta: {
      title: "Laten we het juiste verificatietraject bepalen",
      subtitle: "Deel uw aanvraag; wij helpen de scope, bewijsverwachtingen en het leveringsplan te verduidelijken.",
      primaryCta: "Stuur een aanvraag",
      secondaryCta: "Bekijk diensten",
    },
  },
};
