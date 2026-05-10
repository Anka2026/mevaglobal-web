import { BRAND_POSITIONING_LINE } from "../brandPositioning";
import type { Dictionary } from "../types";
import { documentsResourceArticlesTr } from "./bundles/documentsResourceArticles.tr";
import { newServiceDetailsTr } from "./extras/newServiceDetailsTr";
import { serviceDetailsExtraTr } from "./extras/serviceDetailsExtra.tr";

export const tr: Dictionary = {
  meta: {
    siteName: "Meva Global Certification",
    siteDescription: "Bağımsız doğrulama, validasyon ve teknik inceleme hizmetleri.",
    pages: {
      home: {
        title: "Bağımsız Doğrulama, Validasyon ve Teknik İnceleme",
        description:
          "Karbon, ürün ve sürdürülebilirlik açıklamaları için bağımsız bağımsız doğrulama, validasyon ve teknik inceleme; metodolojik tutarlılık, izlenebilir kanıt ve dış paydaşlara yönelik güvenilir açıklamalar odağında.",
      },
      about: {
        title: "Meva Global Hakkında",
        description:
          "Bağımsız bağımsız doğrulama, validasyon ve teknik inceleme; teknik bütünlük, tarafsızlık ve uluslararası teslim disipliniyle desteklenen kurumsal bir yaklaşım.",
      },
      services: {
        title: "Hizmetler",
        description:
          "Bağımsız doğrulama ve teknik inceleme: iklim verisi, ürün beyanları, çevresel iddialar, sorumlu tedarik zincirleri ve sürdürülebilirlik raporlaması için teknik inceleme odaklı hizmetler.",
      },
      cbam: {
        title: "SKDM (CBAM) Çözümleri",
        description:
          "SKDM’ye yönelik emisyon bilgisinde teknik değerlendirme—tesis düzeyinde izlenebilirlik, tedarikçi kanıtları, net kapsam ve beyan ile teknik dosya disiplini.",
      },
      process: {
        title: "Akreditasyon",
        description:
          "Meva Global Certification kapsamında akreditasyon hazırlıkları ve doğrulama yönetişim çerçevesi—devam eden ISO/IEC 17029 akreditasyon süreçleri (kesin sonuçlar yetkili akreditasyon kurumuna bağlıdır); kalite sistemi, kanıt disiplini ve yapılandırılmış teknik inceleme ile desteklenir.",
      },
      statementSearch: {
        title: "Beyan kayıtları ve durum sorgulama",
        description:
          "Yayımlanmış beyan kayıtlarına referans bilgileriyle erişin. Özet ve durum alanları kamuya açık referans kontrolü içindir; hukuki görüş veya bağlayıcı karar değildir.",
      },
      documents: {
        title: "Bilgi Merkezi | Meva Global",
        description:
          "Doğrulama, validasyon, SKDM, ürün beyanları ve sürdürülebilirlik raporlamasında kanıt disiplini, dokümantasyon kalitesi ve teknik hazırlık üzerine düzenli içerikler.",
      },
      insights: {
        title: "İçgörüler",
        description:
          "SKDM, karbon doğrulama ve teknik incelemeye hazır raporlama üzerine kısa teknik notlar—profesyonel paydaşlar için.",
      },
      contact: {
        title: "İletişim",
        description:
          "İhtiyacınıza uygun ofisle iletişime geçin. Kapsam, standart ve zamanlamayı paylaşın; bağımsız doğrulama, validasyon veya teknik inceleme için net adımlarla dönüş yapalım.",
      },
    },
  },
  brand: {
    name: "Meva Global",
    legalName: "Meva Global Certification B.V.",
    taglineTopBar: BRAND_POSITIONING_LINE.tr,
  },
  shared: {
    offices: {
      turkey: "Türkiye — Ankara Ofisi",
      netherlands: "Hollanda — Utrecht Ofisi",
    },
    ui: {
      optional: "Opsiyonel",
      fileTypePdf: "PDF",
    },
  },
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    cbam: "SKDM (CBAM)",
    process: "Akreditasyon",
    representations: "Temsilciliklerimiz",
    statementSearch: "Beyan Sorgulama",
    documents: "Bilgi Merkezi",
    insights: "İçgörüler",
    contact: "İletişim",
  },
  ctas: {
    verifyStatement: "Beyan Sorgulama",
    requestQuote: "Teklif Talep Et",
    contact: "İletişim",
    learnMore: "Detayları İncele",
    exploreCbam: "SKDM Çözümlerini İnceleyin",
    exploreServices: "Hizmetleri İncele",
    search: "Ara",
    submit: "Gönder",
  },
  footer: {
    description:
      "Karbon verileri, çevresel beyanlar ve SKDM (CBAM) raporlaması için bağımsız doğrulama, validasyon ve teknik inceleme kuruluşu.",
    linkedInLabel: "LinkedIn’de Meva Global",
    offices: "Ofislerimiz",
    quickLinks: "Keşfet",
    contactTitle: "İletişim",
    trustFootnote:
      "Utrecht ve Ankara ofisleri uluslararası koordinasyon ile yerel iletişimi birlikte yürütür.",
    rights: "Tüm hakları saklıdır.",
  },
  home: {
    hero: {
      eyebrow: BRAND_POSITIONING_LINE.tr,
      title: "Güvenilir Beyanlar İçin Bağımsız Teknik İnceleme",
      subtitle:
        "Meva Global; sera gazı verileri, ürün beyanları, SKDM (CBAM) raporlaması ve sürdürülebilirlik raporlaması için izlenebilir kanıt, disiplinli kapsam ve teknik çıktı tutarlılığı ekseninde bağımsız doğrulama, validasyon ve teknik inceleme sunar.",
      heroImageAlt:
        "Meva Global teknik değerlendiricilerinin endüstriyel bir tesiste kanıt, kayıt ve süreç kontrollerini yerinde incelemesi.",
      primaryCta: "Teklif Talep Et",
      secondaryCta: "Hizmetleri İncele",
    },
    trustHighlightsTitle: "Güvenin Temeli",
    trustHighlights: [
      {
        title: "Tarafsızlık Kontrolleri",
        description:
          "Bağımsızlık kontrolleri, net rol ayrımı ve dokümante karar yollarıyla desteklenen disiplinli bir inceleme modeli.",
      },
      {
        title: "Kanıta Dayalı Teknik Değerlendirme",
        description:
          "Metodoloji, veri, hesaplama mantığı ve destekleyici kayıtların bütünsel olarak incelendiği yapılandırılmış değerlendirme.",
      },
      {
        title: "İzlenebilir Kayıt Yapısı",
        description:
          "Belge izleri, veri akışları ve kritik varsayımların dayanağını görünür kılan; dış incelemeye uygun dokümantasyon.",
      },
      {
        title: "Uluslararası Uyum Disiplini",
        description:
          "Sınır ötesi raporlama ve çok paydaşlı açıklama beklentilerine uygun, standart odaklı çalışma düzeni.",
      },
    ],
    serviceAreasTitle: "Temel Hizmet Alanları",
    serviceAreasIntro:
      "Bağımsız doğrulama, validasyon ve teknik inceleme hizmetlerimizi; iklim ve karbon yönetimi, ürün ve çevresel beyanlar, malzeme sağlığı, sorumlu tedarik zincirleri ve ESG verisi etrafında yapılandırılmış hizmet grupları halinde sunuyoruz.",
    serviceAreas: [
      {
        title: "İklim ve Karbon Teknik İncelemesi",
        description:
          "Kurumsal ve proje bazlı sera gazı beyanları, ürün karbon verileri, gömülü emisyon incelemeleri ve net-sıfır hazırlıkları için metodoloji ve kanıt odaklı doğrulama yaklaşımı.",
      },
      {
        title: "Ürün ve Çevresel Beyan Doğrulaması",
        description:
          "EPD, yaşam döngüsü değerlendirmesi, geri dönüştürülmüş içerik ve ürün çevresel iddiaları için veri izlenebilirliği ve program uyumu odaklı hizmetler.",
      },
      {
        title: "İç Mekân Kalitesi ve Malzeme Sağlığı",
        description:
          "İç mekân hava kalitesi ve VOC verileri, HPD yapısı, malzeme bileşimi ve yeşil bina dokümantasyonu için doğrulama temelli teknik inceleme; emisyon profili ve içerik şeffaflığı odağında.",
      },
      {
        title: "Sorumlu Tedarik Zincirleri ve Sektörel Hazırlık",
        description:
          "ASI, FSC, PEFC, EUDR ve benzeri sektör beklentileri için izlenebilirlik, kaynak beyanı ve teknik hazırlık değerlendirmeleri.",
      },
      {
        title: "ESG ve Raporlama Teknik İncelemesi",
        description:
          "GRI ve ESRS kapsamındaki sürdürülebilirlik verileri, KPI’lar ve finansal olmayan açıklamalar için kontrol altyapısı ve kanıt yapısı incelemesi.",
      },
    ],
    whyTitle: "Neden Meva Global",
    whyItems: [
      {
        title: "Kıdemli ve Odaklı Teknik Liderlik",
        description:
          "Çalışmalarımız; kapsam netliği, metodolojik disiplin ve kanıta dayalı inceleme yaklaşımıyla kıdemli teknik gözetim altında yürütülür.",
      },
      {
        title: "Sınır Ötesi Çalışma Disiplini",
        description:
          "Türkiye ve Hollanda’daki yapılanmamız; uluslararası müşteri beklentilerine uygun, disiplinli ve kurumsal bir teslim modelini destekler.",
      },
      {
        title: "Dokümante ve İzlenebilir Süreçler",
        description:
          "İnceleme adımlarımız, bulgu yapımız ve dışa dönük karar dili; dış kullanıma uygun güvenilir kayıt ve güçlü dokümantasyon disipliniyle şekillenir.",
      },
      {
        title: "Bağlama Uygun İnceleme Derinliği",
        description:
          "İnceleme kapsamı ve kanıt beklentileri; risk seviyesi, kullanım amacı, veri olgunluğu ve raporlama bağlamına göre uyarlanır.",
      },
    ],
    processTitle: "Teknik Değerlendirme ve İnceleme Süreci",
    processIntro:
      "Her görevi; net kapsam, izlenebilir kanıt ve belgelenmiş karar disiplini ile yapılandırılmış teknik değerlendirme akışı üzerinden yürütürüz.",
    processSteps: [
      {
        title: "İlk Başvuru",
        description: "Talep, kullanım amacı ve temel bağlam alınır; uygunluk ve zamanlama açısından ön değerlendirme yapılır.",
      },
      {
        title: "Kapsam Tanımı",
        description: "Sınırlar, kriterler, ilgili standartlar ve beyanın kullanım amacı yazılı olarak netleştirilir.",
      },
      {
        title: "Doküman ve Veri İncelemesi",
        description: "Kanıt paketi, hesaplama yapısı, tamlık kontrolleri ve veri izi sistematik biçimde gözden geçirilir.",
      },
      {
        title: "Teknik Değerlendirme",
        description: "Örnekleme, yeniden hesaplama, metodoloji testi ve kritik varsayımlar için makullük kontrolleri yürütülür.",
      },
      {
        title: "Saha veya Uzaktan İnceleme",
        description: "Uygun olduğunda operasyonel yürüyüşler, görüşmeler ve kontrol noktaları üzerinden ilave inceleme adımları uygulanır.",
      },
      {
        title: "İç Teknik Gözden Geçirme",
        description: "Bulgular, karar mantığı ve çıktı dili; nihai sonuç öncesinde bağımsız iç teknik kontrolden geçirilir.",
      },
      {
        title: "Sonuçlandırma",
        description:
          "Hizmet modeline uygun şekilde beyan, görüş, bulgu seti veya ilgili çıktı; belgelenmiş teknik kontroller sonrasında netleştirilir.",
      },
    ],
    statementPreviewTitle: "Beyan Sorgulama",
    statementPreviewIntro:
      "Referans numarasıyla beyan ve sertifika kayıtlarını sorgulayın; yayımlandıysa kamu kapsam özetini inceleyin.",
    cbamEyebrow: "SKDM (CBAM) • Ön Doğrulama Hazırlığı",
    cbamTitle: "SKDM (CBAM) Ön Doğrulama İçin Teknik Hazırlık",
    cbamIntro:
      "SKDM raporlamasında yalnızca emisyon değerinin hesaplanması yeterli değildir. Resmi doğrulama öncesinde tesis verisi, tedarikçi kanıtları, sistem sınırları, yöntem seçimi ve raporlama dosyasının teknik açıdan tutarlı, izlenebilir ve incelemeye hazır hale getirilmesi gerekir.",
    cbamBullets: [
      "Tesis sınırları, veri kaynakları ve hesaplama yaklaşımının gözden geçirilmesi",
      "Tedarikçi verileri ve destekleyici kanıt yapısının teknik kontrolü",
      "Metodoloji, emisyon mantığı ve raporlama kurgusunun tutarlılık değerlendirmesi",
      "Resmi doğrulama öncesi dosya yapısı ve dokümantasyon olgunluğunun güçlendirilmesi",
    ],
    cbamCardTitle: "Ön Doğrulama Odağı",
    cbamCardText:
      "İhracatçı ve üreticiler için SKDM dosyalarında veri kalitesi, izlenebilirlik, metodoloji netliği ve dokümantasyon düzenini bağımsız teknik inceleme ile değerlendiriyoruz. Bu çalışma resmi doğrulamanın yerine geçmez; doğrulama öncesi hazırlık seviyesini güçlendirir.",
    globalTitle: "Ofislerimiz",
    ctaTitle: "Kapsamlı inceleme talep edin",
    ctaIntro:
      "Kapsamınızı, uygulanabilir standartları ve takviminizi paylaşın. Raporlama bağlamınıza ve dış kullanım amacınıza uygun inceleme planı, kanıt beklentileri ve net zaman çizelgesiyle dönüş yapalım.",
  },
  pages: {
    about: {
      eyebrow: BRAND_POSITIONING_LINE.tr,
      title: "Meva Global Hakkında",
      intro: [
        "Meva Global Certification B.V., bağımsız doğrulama, validasyon ve teknik inceleme hizmetleri sunan; teknik bütünlüğü, tarafsızlığı ve belgelenmiş karar yapısını esas alan uluslararası bir kuruluştur.",
        "Sürdürülebilirlik, iklim ve ESG beklentileri iş dünyasında giderek daha belirleyici hale gelirken; kuruluşların karbon, çevresel ve sürdürülebilirlik odaklı açıklamalarını güvenilir veri, izlenebilir kanıt ve net metodoloji üzerinden güçlendiririz.",
        "Yaklaşımımız; bağımsız değerlendirme, örnekleme temelli inceleme, açık kapsam tanımı ve dokümantasyon disiplini üzerine kuruludur. Amaç; dış paydaş incelemesine uygun beyanlar ve teknik dosyalar için tutarlı, izlenebilir bir çıktı zemini oluşturmaktır.",
      ],
      sectionTitle: "Meva Global Hakkında",
      sections: [
        {
          title: "Bağımsızlık ve Tarafsızlık",
          bullets: [
            "Tarafsızlık Kontrolleri ve çıkar çatışması kontrolleriyle desteklenen çalışma modeli",
            "İnceleme, teknik değerlendirme ve karar sorumluluklarının açık biçimde ayrıştırılması",
            "Tutarlı ve güvenilir sonuçlar için dokümante edilmiş karar yapısı",
          ],
        },
        {
          title: "Sürdürülebilirlik ve ESG Odağı",
          bullets: [
            "Sürdürülebilirlik ve ESG odaklı açıklamaların güvenilirliğini güçlendiren teknik inceleme yaklaşımı",
            "Şeffaflık, hesap verebilirlik ve dış paydaş güveni için izlenebilir kanıt yapısı",
            "Alıcı, yatırımcı ve diğer paydaş beklentilerine daha güçlü yanıt verilmesini destekleyen çerçeve",
          ],
        },
        {
          title: "Uluslararası Çalışma Disiplini",
          bullets: [
            "Türkiye ve Hollanda merkezli yapılanmayı destekleyen disiplinli teslim modeli",
            "İhracatçılar, üreticiler ve çok paydaşlı yapılar için net koordinasyon ve profesyonel süreç yönetimi",
            "Uluslararası beklentilere uyumlu yönetişim, inceleme ve teslim disiplini",
          ],
        },
        {
          title: "Kanıt ve İzlenebilirlik",
          bullets: [
            "İzlenebilir kanıt eşleştirme ve örnekleme temelli teknik test yaklaşımı",
            "Net kapsam tanımı, açık metodoloji ve ölçülü beyan dili",
            "Denetime hazırlık ve tekrar edilebilirlik için yapılandırılmış kayıt mantığı",
          ],
        },
        {
          title: "Gizlilik ve Erişim Disiplini",
          bullets: [
            "Müşteri verileri, kanıt dosyaları ve destekleyici belgeler için belgelenmiş erişim ve yetkilendirme yaklaşımı",
            "Kayıtlar, örnekleme çıktıları ve teknik dokümantasyonun güvenli yönetimi",
            "Kamuya açık bilgi paylaşımının hizmet kapsamı ve açıklama seviyesiyle sınırlı tutulması",
          ],
        },
        {
          title: "Kalite ve Teknik Dürüstlük",
          bullets: [
            "Yetkinliğe dayalı değerlendirici ataması ve kıdemli teknik gözetim",
            "Tutarlı kriterler, sağlam örnekleme mantığı ve metodolojik disiplin",
            "İç gözden geçirme dahil olmak üzere sonuç öncesi kalite kontrolleri",
          ],
        },
      ],
    },
    services: {
      title: "Hizmetler",
      heroEyebrow: BRAND_POSITIONING_LINE.tr,
      intro:
        "Portföyümüz; iklim ve karbon verisi, ürün ve çevresel beyanlar, sorumlu tedarik zincirleri ile sürdürülebilirlik raporlamasında bağımsız doğrulama, validasyon ve teknik inceleme disiplinini tek çatı altında sunar. Her görevde net kapsam, izlenebilir kanıt, belgelenmiş karar disiplini ve kullanım amacına orantılı çıktı esastır.",
      introSupport:
        "Tek tip teknik çerçeve: ölçütleri yazılı netleştirmek, kanıt zincirini sınamak, bulguları ölçülü dil ile aktarmak ve metni dış paydaş incelemesine uygun tutmak—kurumsal sera gazı dosyalarından ürün beyanlarına ve ESG veri yapılarına kadar.",
      heroImageAlt:
        "İklim, ürünler, iç mekân kalitesi ve malzeme sağlığı, sorumlu tedarik zincirleri ve ESG raporlama bağlamlarında teknik inceleme odaklı kurumsal görsel dil.",
      groups: {
        climateAndCarbonAssurance: {
          title: "İklim ve Karbon Teknik İncelemesi",
          intro:
            "Kurumsal ve proje bazlı sera gazı beyanlarından ürün karbon verilerine, gömülü emisyon incelemelerinden net-sıfır hazırlıklarına kadar uzanan bu hizmet grubu; metodoloji, veri kalitesi ve dış açıklama güvenilirliğini birlikte değerlendirir.",
        },
        productAndEnvironmentalClaims: {
          title: "Ürün ve Çevresel Beyan Doğrulaması",
          intro:
            "Ürün seviyesindeki çevresel performans, içerik iddiaları ve beyan altyapısı; yalnızca sonuçlarla değil, veri kaynakları, metodolojik tercihler ve kanıt yapısıyla birlikte değerlendirilmelidir. Bu grup, ürün odaklı doğrulama ve inceleme ihtiyaçlarına odaklanır.",
        },
        builtEnvironmentAndMaterialHealth: {
          title: "İç Mekân Kalitesi ve Malzeme Sağlığı",
          intro:
            "İç mekân ürünleri, yüzey kaplamaları, yapı malzemeleri ve sağlık odaklı ürün açıklamalarında yalnızca çevresel performans değil; emisyon profili, içerik şeffaflığı ve teknik dokümantasyon kalitesi de kritik önemdedir. Bu hizmet grubu, özellikle ihracatçı üreticiler ve proje odaklı teknik dosya hazırlayan kuruluşlar için daha güvenilir ve daha profesyonel bir açıklama zemini sağlar.",
        },
        responsibleSupplyChainsAndSectorSchemes: {
          title: "Sorumlu Tedarik Zincirleri ve Sektörel Hazırlık",
          intro:
            "Sektörel beklentiler ve tedarik zinciri programları; izlenebilirlik, kaynak iddiaları, sorumlu üretim ve dokümantasyon disiplininde belirleyicidir. Bu grup; farklı endüstrilerde hazırlık değerlendirmesi ve teknik inceleme ihtiyaçlarına odaklanır.",
        },
        esgAndReportingAssurance: {
          title: "ESG ve Raporlama Teknik İncelemesi",
          intro:
            "Kurumsal sürdürülebilirlik verisinin güvenilirliği artık yalnızca rapor yayımlamak için değil; yatırımcı, müşteri, finansman ve yönetişim beklentileri açısından da belirleyicidir. Bu grup; ESG verisi, sürdürülebilirlik KPI’ları ve finansal olmayan raporlama altyapısı için yapılandırılmış teknik inceleme sunar.",
        },
      },
      cardCta: "Detayları İncele",
      serviceGroupNav: {
        ariaLabel: "Hizmet grupları",
        climateCarbon: "İklim ve karbon",
        productDeclarations: "Ürün beyanları",
        indoorMaterials: "İç mekân ve malzeme",
        supplyChain: "Tedarik zinciri",
        esgReporting: "ESG ve raporlama",
      },
      whyIndependent: {
        title: "Bağımsız Teknik İnceleme Disiplininin Önemi",
        items: [
          {
            title: "Dış Paydaş Güvenilirliği",
            description:
              "Çıktılar; düzenleyici kurumlar, alıcılar, finans ekipleri ve teknik paydaşların beklentilerine uygun açıklık ve disiplinle yapılandırılır.",
          },
          {
            title: "Daha Güçlü Açıklama Çerçevesi",
            description:
              "İnceleme süreci; kapsamı, yöntemi, veri mantığını ve kullanılan dili netleştirerek dış kullanıma daha uygun bir açıklama zemini oluşturur.",
          },
          {
            title: "İzlenebilirlik ve Kontrol",
            description:
              "Kanıt odaklı teknik testler; kayıtlardan hesaplamalara ve raporlanan sonuçlara uzanan zincirdeki zayıf alanları görünür hale getirir.",
          },
          {
            title: "Dış İnceleme Döngülerine Erken Hizalama",
            description:
              "Öncelikli konular erken ele alınır; doğrulama, sınırlı bağımsız inceleme veya paydaş incelemesi öncesinde geç kalma riski azalır.",
          },
        ],
      },
      howWeWork: {
        title: "Nasıl Çalışıyoruz",
        intro: "Özet yol haritası—tam metodoloji, roller ve tarafsızlık kontrolleri için Doğrulama Süreci sayfasına bakınız.",
        steps: [
          {
            title: "Kapsam ve Risk Hizalaması",
            description:
              "Sınırlar, standartlar, raporlama dönemi ve kullanım amacı netleştirilir; inceleme derinliği açıklama bağlamınıza ve paydaş riskine göre ayarlanır.",
          },
          {
            title: "Teknik Çalışma Planı",
            description:
              "Örnekleme mantığı, kanıt beklentileri ve kilometre taşları ayrıntılı test öncesinde kararlaştırılır; efor önemlilikle uyumludur.",
          },
          {
            title: "Kanıt Odaklı İnceleme",
            description:
              "Kayıtlar, hesaplamalar ve yönetişim üzerinde yapılandırılmış inceleme—kanıttan rakamlara ve beyan diline izlenebilir bağ.",
          },
          {
            title: "Bağımsız Teknik Değerlendirme",
            description:
              "Bulgular, sınırlılıklar ve ifade üzerinde tarafsız değerlendirme—karar disiplininin çekirdeği.",
          },
          {
            title: "Ölçülü Çıktılar",
            description:
              "Bulgu kaydı, kapanış ve—kapsam dahilinde—üzerinde anlaşılan inceleme amacına uyumlu doğrulama veya değerlendirme çıktıları.",
          },
        ],
      },
      listingRecoverableError: {
        title: "Hizmet Listesi Şu Anda Gösterilemiyor",
        body:
          "Doğrulama hizmet grupları mevcut kayıt verisinden oluşturulamadı. Site düzeni çalışıyor—lütfen sayfayı yenileyin. Sorun sürerse kayıt yapılandırmasını İletişim kanalından bildirebilirsiniz.",
      },
    },
    serviceDetails: {
      "iso-14064-1": {
        heroEyebrow: "Kurumsal envanter doğrulaması",
        title: "ISO 14064-1 — Kurumsal Sera Gazı Doğrulaması",
        intro:
          "Kurumsal sera gazı envanterinin dış paydaşlar önünde güvenilir olması yalnızca hesaplama sonucuna bağlı değildir; organizasyon sınırları, emisyon kaynakları, faktör seçimleri ve kanıt bağlantıları aynı disiplinle yönetilmelidir. Meva Global, ISO 14064-1 ile uyumlu beyanlar için bağımsız ve yapılandırılmış teknik doğrulama sunar; raporlama sınırları, hesaplama mantığı, veri akışı ve kanıt dosyası tek bir teknik çerçevede ele alınır.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Organizasyonel sınırlar, operasyonel kontrol yaklaşımı, konsolidasyon, raporlama dönemi ve envanter kapsamının teknik çerçevesi",
            "Kapsam 1 ve 2 miktarlandırması çekirdek çalışma; veri yapısı ve bağlam uygun olduğunda seçili Kapsam 3 kategorileri",
            "Yalnızca rakamları doğrulamak değil; beyanın arkasındaki metodolojik bütünlük ve kanıt mimarisini güçlendirmek",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Sürdürülebilirlik, finans ve regülasyon raporlarında kurumsal envanter paylaşan organizasyonlar",
            "Müşteri, yatırımcı ve tedarik zinciri sorularına güvenilir karbon performansı anlatması gereken ekipler",
            "Çok tesisli veya çok ülkeli yapıda veri standardizasyonu ve iç kontrolleri güçlendirmek isteyen yönetimler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Veri toplama altyapısı, hesaplama araçları, emisyon faktörleri ve aktivite verisi kaynakları; belge izi ve iç kontroller tek sistem olarak",
            "Gerektiğinde örnekleme, yeniden hesaplama, kayıt eşleştirme ve kanıt testleri",
            "Toplam emisyonun yanı sıra değerin nasıl üretildiği ve ne ölçüde savunulabildiği",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "Kurumsal GHG verisi; sürdürülebilirlik ötesinde müşteri, finans ve kamu alanında kritik ve paydaş riskini belirginleştirir",
            "Disiplinli doğrulama; raporlanan emisyonlara güveni artırır ve iç kontrol tasarımını güçlendirir",
            "İyileştirme planları, baz yılı ve uzun vadeli raporlama olgunluğu için daha net bir zemin sunar",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Kanıta dayalı teknik inceleme, izlenebilir kayıt yapısı ve bağımsız karar disiplini; kontrol listesi değil",
            "Beyanın güçlü olduğu noktalar, netleşmesi gereken alanlar ve güvenilirliği artıracak geliştirmelerin görünür kılınması",
            "Mevcut raporlama dönemi için daha sağlam açıklama; ileriye dönük sera gazı yönetimi için daha olgun altyapı",
          ],
        },
        cta: {
          title: "",
          body: "Organizasyon sınırlarınızı, raporlama yılınızı ve mevcut envanter yapınızı paylaşın; dış kullanım bağlamınıza uygun inceleme derinliği ile doğrulama stratejisini birlikte şekillendirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "iso-14064-2": {
        heroEyebrow: "Proje bazlı sera gazı doğrulaması",
        title: "ISO 14064-2 — Proje Sera Gazı Doğrulaması",
        intro:
          "Proje bazlı sera gazı beyanlarının güvenilirliği; yalnızca bildirilen azaltım veya giderim miktarlarına değil, aynı zamanda baz senaryonun sağlamlığına, proje sınırlarının netliğine, miktarlandırma yaklaşımının tutarlılığına ve izleme sisteminin kanıt üretme kapasitesine bağlıdır. Meva Global, ISO 14064-2 ile uyumlu proje sera gazı beyanları için bağımsız ve yapılandırılmış bir teknik doğrulama yaklaşımı sunar. Bu hizmet; proje mantığının, izleme düzeninin, hesaplama metodolojisinin ve destekleyici kayıt yapısının sistematik biçimde değerlendirilmesi yoluyla raporlanan sonuçların güvenilirliğini ve teknik dosya tutarlılığını güçlendirir.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Proje sınırları, baz senaryo, azaltım veya giderim mantığı, miktarlandırma yöntemi, raporlama dönemi ve teknik varsayımlar",
            "İzleme planı, veri kaynakları, hesaplama yapısı ve sonucu belirleyen temel parametreler bir bütün olarak",
            "Yalnızca bildirilen sonucu kontrol etmek değil; teknik zemini ve kanıtla desteklenme derecesini netleştirmek",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Karbon kredisi veya program başvurularına hazırlanan proje sahipleri ve geliştiriciler",
            "Proje sonuçlarını teknik dosya ve kanıt zeminiyle paylaşan ekipler",
            "İzleme disiplinini ve raporlama olgunluğunu güçlendirmek isteyen proje operasyonları",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Baz senaryonun makullüğü, faaliyet tanımı, veri akışı, izleme kontrolleri, hesaplama ve belge izi birlikte",
            "Gerektiğinde örnekleme, yeniden hesaplama, veri eşleştirme ve kanıt incelemesi",
            "Nihai sonuç ile üretim, izleme ve kanıt hattının teknik tutarlılığı",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "Proje beyanları; program, paydaş raporu, finans ve karbon piyasası hazırlığında giderek belirleyici",
            "Disiplinli doğrulama; sonuca güveni artırır, metodolojik boşlukları görünür kılar ve karar riskini düşürür",
            "Veri kalitesi, izleme disiplini ve sonraki raporlama dönemleri için daha sağlam temel",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Metodoloji odaklı teknik değerlendirme, izlenebilir kanıt yapısı ve bağımsız karar disiplini",
            "Yalnızca raporlanan sonuç değil; baz senaryo, izleme güvenilirliği, veri akışı ve varsayımlar birlikte",
            "Güncel beyanı güçlü zeminde sunma ve sonraki dönemler için sağlam izleme altyapısı",
          ],
        },
        cta: {
          title: "",
          body: "Baz senaryonuzu, izleme planınızı ve raporlama döneminizi paylaşın; projenize uygun doğrulama kapsamını ve kanıt beklentilerini birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "iso-14067": {
        heroEyebrow: "Ürün düzeyinde karbon teknik incelemesi",
        title: "ISO 14067 — Ürün Karbon Ayak İzi (PCF) Doğrulaması",
        intro:
          "Ürünün karbon profili tek bir rakamda toplanmaz: yaşam döngüsü kapsamı, sınır ve tahsis kararları, aktivite verileri ve varsayımların kaynağı, emisyon faktörleri ile hesap zinciri ve raporlama dilinin uyumu birlikte okunur. Meva Global, ISO 14067 ile uyumlu PCF çalışmalarında model mantığını, kayıt izini ve beyan katmanını bağımsız teknik çerçevede değerlendirir; satın alma ve paydaş görüşmelerine uygun net bir ürün karbon teknik dosyası oluşturmayı hedefler.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Fonksiyonel birim, sistem sınırları, tahsis ilkeleri ve dışlanan kalemlerin netliği",
            "Aktivite verileri, arka plan veri setleri, varsayımlar ve veri kalitesinin yapılandırılması",
            "Hesap çıktılarının tablo, özet metin ve dipnotlarla teknik içerikle uyumu",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Tedarikçi anketleri ve alıcı taleplerine yanıt veren üretim ile sürdürülebilirlik ekipleri",
            "Ürün gamında karbon hesabını tek bir çerçeveye oturtmak isteyen markalar ve operasyonlar",
            "Satış, pazarlama ve teknik dokümantasyonda tutarlı bir ürün karbon hikâyesi hedefleyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Modelde yaşam döngüsü sınırları, veri yoğun aşamalar ve sıcak noktaların tutarlılığı",
            "Örnekleme ve yeniden hesaplama ile aktivite verisi, faktör seçimi ve yöntem bağlantısı",
            "Kamuya açık özet ve tabloların, arkasındaki varsayımlarla çelişmeden sunulması",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "Ürün seçimi ve envanter yönetiminde kullanılan rakamların arkasındaki mantığı görünür kılar",
            "Yanlış yorumlanabilecek gri alanları daraltır; teknik sorulara daha hazırlıklı bir dil sunar",
            "Genişleyen çevresel beyan ve ürün düzeyi raporlama beklentileri için zemini güçlendirir",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "PCF’yi parça parça değil; sınır, veri hattı ve kanıt zinciri olarak bir arada ele alırız",
            "Yalnızca sonuç tablosuna değil, izlenebilirlik ile anlatım bütünlüğüne odaklanırız",
            "Bulguları, kapsamınızı ve kullanım amacınızı yansıtacak şekilde disiplinli biçimde netleştiririz",
          ],
        },
        cta: {
          title: "",
          body: "PCF özetinizi, veri kaynaklarınızı ve kullanacağınız beyan formatını paylaşın; ürün ve pazar bağlamınıza uygun inceleme derinliği ile doğrulama stratejisini birlikte şekillendirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "iso-14046": {
        heroEyebrow: "Su ayak izi teknik incelemesi",
        title: "ISO 14046 — Su Ayak İzi Doğrulaması",
        intro:
          "Su ayak izi çalışmalarının güvenilirliği; yalnızca hesaplanan toplam sonuca değil, aynı zamanda sistem sınırlarının netliğine, veri kaynaklarının uygunluğuna, metodolojinin standarda uyumuna, su kullanımı ve su etkilerine ilişkin veri yapısının sağlamlığına ve açıklama çerçevesinin izlenebilirliğine bağlıdır. Meva Global, ISO 14046 ile uyumlu su ayak izi çalışmaları ve ilgili beyanlar için bağımsız ve yapılandırılmış bir teknik doğrulama yaklaşımı sunar. Bu hizmet; miktarlandırma çerçevesinin, veri akışının, varsayımların, hesaplama mantığının ve destekleyici kayıtların sistematik biçimde değerlendirilmesi yoluyla alıcı beklentileri ve dış kullanım bağlamları açısından daha güvenilir ve daha profesyonel bir açıklama zemini oluşturur.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Ürün, süreç veya organizasyon bağlamında su ayak izi çalışmasının kapsamı ve sistem sınırları",
            "Veri kaynakları, metodolojik yaklaşım, varsayımlar ve hesaplama yapısının teknik değerlendirilmesi",
            "Açıklama dili, sonuç yapısı ve destekleyici kanıtların dış kullanıma uygunluk açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Su ayak izi verilerini dış paydaşlara daha güvenilir biçimde sunmak isteyen üreticiler",
            "Müşteri, yatırımcı veya teknik dosya beklentileri için su etkisi verilerini güçlendirmek isteyen ekipler",
            "Çevresel beyanlarını ürün veya süreç düzeyinde daha disiplinli hale getirmek isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Sistem sınırları, veri akışı ve su ayak izi metodolojisinde makullük değerlendirmesi",
            "Aktivite verileri, emisyon / karakterizasyon faktörleri ve varsayımlarda örnekleme",
            "Sonuç tablosu ve dış açıklama kurgusunun metodolojik tutarlılık açısından incelenmesi",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "Su ayak izi verilerinin güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Metodolojik belirsizlikleri ve açıklama riskini azaltır",
            "Çevresel beyanlar, tedarik zinciri değerlendirmeleri ve ihracat odaklı teknik dosyalar için daha güçlü temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Sistem sınırları, veri yapısı ve destekleyici kayıtları birlikte ele alan bağımsız teknik doğrulama yaklaşımı",
            "Sonuç tablosunun ötesine geçerek metodoloji, veri izi ve açıklama güvenilirliğine odaklanan inceleme disiplini",
            "Kuruluşların mevcut su ayak izi açıklamalarını güçlendiren ve sonraki dönemlere hazırlık sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Su ayak izi çalışmanızın sistem sınırlarını, veri yapısını ve mevcut açıklama çerçevenizi paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "lca-review": {
        heroEyebrow: "Hizmetler",
        title: "LCA Teknik İncelemesi",
        intro:
          "Yaşam döngüsü değerlendirmesi çalışmalarının güvenilirliği; yalnızca nihai sonuç tablolarına değil, aynı zamanda amaç ve kapsam tanımının netliğine, fonksiyonel birimin doğruluğuna, sistem sınırlarının uygunluğuna, veri kaynaklarının kalitesine, modelleme tercihlerinin tutarlılığına ve sonuçların doğru yorumlanmasına bağlıdır. Meva Global, LCA çalışmaları ve bunlara dayalı çevresel açıklamalar için bağımsız ve yapılandırılmış bir teknik inceleme yaklaşımı sunar. Bu hizmet; metodolojik çerçevenin, veri akışının, varsayımların, modelleme mantığının ve destekleyici kayıtların sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir açıklama zemini oluşturur.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Amaç ve kapsam tanımı, fonksiyonel birim ve sistem sınırlarının teknik değerlendirilmesi",
            "Veri kaynakları, modelleme tercihleri, tahsis yaklaşımı ve metodolojik varsayımların gözden geçirilmesi",
            "Sonuç yapısı, yorum bölümü ve dış kullanıma esas açıklama çerçevesinin incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Çevresel beyanlarını daha güçlü metodolojik temelde sunmak isteyen kuruluşlar",
            "Ürün karşılaştırmaları, teknik dosyalar veya sürdürülebilirlik açıklamaları için LCA kullanan ekipler",
            "EPD, ürün çevresel iddiaları veya kurumsal karar süreçleri için LCA kalitesini artırmak isteyen üreticiler",
          ],
        },
        typicalScope: {
          title: "Teknik İnceleme Kapsamı",
          bullets: [
            "Amaç ve kapsam kurgusu, veri akışı ve modelleme mantığında makullük değerlendirmesi",
            "Kritik veri setleri, varsayımlar, tahsis yaklaşımı ve sonuç yapısında örnekleme",
            "Sonuçların yorumlanması, açıklama dili ve dış kullanım riskine ilişkin teknik kontroller",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "LCA sonuçlarının güvenilirliğini, tutarlılığını ve izlenebilirliğini güçlendirir",
            "Metodolojik belirsizlikleri ve açıklama riskini azaltır",
            "EPD, çevresel iddialar ve ürün bazlı sürdürülebilirlik açıklamaları için daha sağlam temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Metodoloji, veri yapısı ve modelleme tercihlerini birlikte ele alan bağımsız teknik inceleme yaklaşımı",
            "Sonuç tablosunun ötesine geçerek kapsam, veri izi ve yorum kalitesine odaklanan inceleme disiplini",
            "Kuruluşların mevcut LCA çalışmalarını güçlendiren ve sonraki çevresel beyan hazırlıklarına katkı sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "LCA çalışmanızın amaç ve kapsam yapısını, veri setlerinizi ve mevcut modelleme çerçevenizi paylaşın; kullanım bağlamınıza uygun teknik inceleme kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "epd-verification": {
        heroEyebrow: "Hizmetler",
        title: "EPD Doğrulaması",
        intro:
          "Ürün beyanlarının güvenilirliği model çıktısından çok daha fazlasına dayanır; PCR uyumu, veri izlenebilirliği, tahsis kararları ve senaryo varsayımları dış inceleme karşısında tutarlı biçimde savunulabilmelidir. Meva Global, EPD çalışmaları ve ilgili beyanlar için bağımsız doğrulama odaklı inceleme sunar; metodoloji, veri akışı, raporlama yapısı ve kanıt dosyası yayıma hazır çıktı için birlikte test edilir.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "PCR ve program kurallarına uyumun, beyan kapsamının ve raporlama çerçevesinin değerlendirilmesi",
            "Veri setleri, modelleme tercihleri, varsayımlar ve destekleyici dokümantasyon yapısının gözden geçirilmesi",
            "Yayıma esas teknik içeriğin, metodolojik tutarlılığın ve beyan yapısının doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "EPD yayımlamaya hazırlanan ve teknik dosyalarını daha güvenilir hale getirmek isteyen üreticiler",
            "Yeşil satın alma, çevresel ürün bilgisi ve dış paydaş beklentilerine yanıt veren kuruluşlar",
            "Ürün çevresel açıklamalarında metodolojik tutarlılık ve yayımlama disiplini hedefleyen ekipler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "PCR uyumu, sistem sınırları ve beyan edilen göstergelerde makullük değerlendirmesi",
            "Kritik girdiler, veri kaynakları, modelleme yaklaşımı ve hesaplama yapısında örnekleme",
            "Yayımlama öncesi teknik tutarlılık, açıklama dili ve kanıt dosyası üzerinde doğrulama kontrolleri",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "EPD dokümantasyonunun yayıma ve dış paydaş incelemesine daha güvenilir biçimde hazırlanmasını sağlar",
            "Metodolojik belirsizlikleri ve alıcı / paydaş itiraz riskini azaltır",
            "Sonraki güncellemeler, ürün varyasyonları ve çevresel beyan süreçleri için daha sağlam temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Program kuralları, veri yapısı ve destekleyici kanıtları birlikte ele alan bağımsız doğrulama yaklaşımı",
            "Sonuç tablosunun ötesine geçerek metodoloji, izlenebilirlik ve beyan güvenilirliğine odaklanan inceleme disiplini",
            "Kuruluşların mevcut EPD çalışmalarını güçlendiren ve yayımlama sürecini daha düzenli hale getiren profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "PCR yapınızı, beyan kapsamınızı ve mevcut EPD modelinizi paylaşın; yayımlama bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "recycled-content-verification": {
        heroEyebrow: "Hizmetler",
        title: "Geri Dönüştürülmüş İçerik Doğrulaması",
        intro:
          "Geri dönüştürülmüş içerik beyanlarının güvenilirliği; yalnızca açıklanan oranlara değil, aynı zamanda kütle dengesi yaklaşımının doğruluğuna, zincir izi disiplinine, veri kaynaklarının yeterliliğine, destekleyici kanıt yapısının izlenebilirliğine ve kullanılan beyan dilinin ölçülü olmasına bağlıdır. Meva Global, geri dönüştürülmüş içerik oranı ve buna dayalı açıklamalar için bağımsız ve yapılandırılmış bir doğrulama yaklaşımı sunar. Bu hizmet; veri akışının, kütle dengesi kurgusunun, belge yapısının ve dış kullanıma esas açıklama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir beyan zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "Geri dönüştürülmüş içerik oranının hesaplanma mantığı, sistem sınırları ve izleme yapısının değerlendirilmesi",
            "Kütle dengesi yaklaşımı, tedarikçi girdileri, malzeme akışı ve destekleyici kayıtların gözden geçirilmesi",
            "Beyan dili, kapsam tanımı ve dış kullanıma esas açıklama çerçevesinin doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Geri dönüştürülmüş içerik oranını dış paydaşlara daha güvenilir biçimde sunmak isteyen üreticiler",
            "Ürün, ambalaj veya malzeme bazında içerik iddialarını güçlendirmek isteyen ekipler",
            "Zincir izi, tedarikçi verisi ve disiplinli beyan disiplini oluşturmak isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Kütle dengesi yaklaşımı, sistem sınırları ve zincir izi yapısında makullük değerlendirmesi",
            "Tedarikçi kayıtları, malzeme girdileri, hesaplama yapısı ve destekleyici belgelerde örnekleme",
            "Dış kullanıma yönelik içerik beyanlarının açıklama dili ve kanıt dosyası üzerinde doğrulama kontrolleri",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "Geri dönüştürülmüş içerik beyanlarının güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Yanlış yorumlanma, itiraz ve açıklama riskini azaltır",
            "Alıcı beklentileri, sürdürülebilirlik beyanları ve ürün iletişimi için daha sağlam bir temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Kütle dengesi, veri yapısı ve destekleyici kanıtları birlikte ele alan bağımsız doğrulama yaklaşımı",
            "Yalnızca oran sonucuna değil, bu sonucun hangi belge ve izleme yapısıyla desteklendiğine odaklanan inceleme disiplini",
            "Kuruluşların mevcut içerik beyanlarını güçlendiren ve sonraki dönemlerde daha düzenli sistem kurmasına katkı sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut içerik beyanınızı, kütle dengesi yapınızı ve destekleyici kayıtlarınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "bio-based-content-verification": {
        heroEyebrow: "Hizmetler",
        title: "Biyobazlı İçerik Doğrulaması",
        intro:
          "Biyobazlı içerik beyanlarının güvenilirliği; yalnızca açıklanan paya değil, aynı zamanda kullanılan metodolojinin uygunluğuna, tedarikçi kanıtlarının yeterliliğine, sistem sınırlarının netliğine, veri kaynaklarının izlenebilirliğine ve dış kullanıma esas açıklama dilinin ölçülü olmasına bağlıdır. Meva Global, biyobazlı içerik oranı ve buna dayalı açıklamalar için bağımsız ve yapılandırılmış bir doğrulama yaklaşımı sunar. Bu hizmet; veri yapısının, metodolojik tercihlerinin, destekleyici kanıtların ve beyan çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir açıklama zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "Biyobazlı içerik oranının belirlenme yöntemi, sistem sınırları ve veri yapısının değerlendirilmesi",
            "Tedarikçi beyanları, destekleyici belgeler, hesaplama yaklaşımı ve metodolojik dayanakların gözden geçirilmesi",
            "Açıklama dili, kapsam tanımı ve dış kullanıma esas beyan çerçevesinin doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Biyobazlı içerik oranını dış paydaşlara daha güvenilir biçimde sunmak isteyen üreticiler",
            "Ürün, ambalaj veya malzeme bazında biyobazlı içerik iddialarını güçlendirmek isteyen ekipler",
            "Tedarikçi kanıtı, metodoloji ve disiplinli beyan disiplini oluşturmak isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Metodolojik yaklaşım, sistem sınırları ve veri yapısında makullük değerlendirmesi",
            "Tedarikçi kayıtları, içerik hesaplamaları ve destekleyici belgelerde örnekleme",
            "Dış kullanıma yönelik biyobazlı içerik beyanlarının açıklama dili ve kanıt dosyası üzerinde doğrulama kontrolleri",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "Biyobazlı içerik beyanlarının güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Yanlış yorumlanma, itiraz ve açıklama riskini azaltır",
            "Alıcı beklentileri, sürdürülebilirlik beyanları ve ürün iletişimi için daha sağlam bir temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Metodoloji, veri yapısı ve destekleyici kanıtları birlikte ele alan bağımsız doğrulama yaklaşımı",
            "Yalnızca açıklanan paya değil, bu sonucun hangi belge ve hesaplama yapısıyla desteklendiğine odaklanan inceleme disiplini",
            "Kuruluşların mevcut biyobazlı içerik beyanlarını güçlendiren ve sonraki dönemlerde daha düzenli sistem kurmasına katkı sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut biyobazlı içerik beyanınızı, metodolojik yapınızı ve destekleyici kayıtlarınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "asi-readiness-review": {
        heroEyebrow: "Hizmetler",
        title: "ASI (Aluminium Stewardship Initiative) Doğrulama İncelemesi",
        intro:
          "Alüminyum değer zincirinde ASI beklentilerine dayalı beyanların ve hazırlık dosyalarının güvenilirliği; yalnızca mevcut belgelerin varlığına değil, kanıt yapısının tutarlılığına, kriter uyumunun netliğine, dokümantasyon disiplinine ve ölçülü beyan diline bağlıdır. Meva Global, ASI çerçevesiyle ilişkili hazırlık ve teknik değerlendirme için bağımsız ve yapılandırılmış doğrulama incelemesi sunar. Kayıtlar, operasyonel kanıtlar, tedarik zinciri bağlantıları ve kriter bazlı dosya yapısı sistematik biçimde gözden geçirilir. Bu çalışma resmi ASI sertifikasyon kararının veya şema sahibi doğrulamasının yerini almaz; teknik hazırlık düzeyini güçlendirmeyi hedefler.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "ASI ile ilişkili kriter setleri, mevcut dokümantasyon yapısı ve kanıt bütünlüğünün değerlendirilmesi",
            "Tesis, merkez ve tedarik zinciri seviyesindeki kayıtların ilgili beklentilerle eşleştirilmesi",
            "Beyan dili, kapsam tanımı ve dış kullanıma esas hazırlık çerçevesinin doğrulama incelemesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "ASI sürecine daha düzenli ve daha güçlü teknik dosyalarla hazırlanmak isteyen alüminyum üreticileri",
            "Çok tesisli yapılarda kanıt disiplinini ve kriter eşleşmesini güçlendirmek isteyen sürdürülebilirlik ekipleri",
            "Tedarik zinciri, izlenebilirlik ve sorumlu üretim anlatısını daha düzenli bir yapıya oturtmak isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Kriter bazlı mevcut durum analizi, kanıt eşleştirmesi ve dokümantasyon yapısında makullük değerlendirmesi",
            "Tesis kayıtları, politika setleri, tedarik zinciri verileri ve destekleyici belgeler üzerinde örnekleme",
            "Hazırlık dosyasının açıklık, tutarlılık ve dış incelemeye uygunluk açısından teknik kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "ASI hazırlık dosyalarının güvenilirliğini ve incelemeye hazırlık seviyesini güçlendirir",
            "Eksik kanıt, dağınık kayıt ve kriter uyumsuzluğu riskini azaltır",
            "Alıcı beklentileri, sürdürülebilirlik beyanları ve sorumlu tedarik zinciri iletişimi için daha sağlam temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Kriterler, kanıt yapısı ve operasyonel kayıtları birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca belge varlığına değil, bu belgelerin ilgili ASI beklentileriyle nasıl ilişkilendirildiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut hazırlık seviyesini güçlendiren ve sonraki değerlendirme süreçlerine katkı sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut ASI hazırlık dosyanızı, politika ve kayıt setlerinizi paylaşın; kullanım bağlamınıza uygun doğrulama inceleme kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "fsc-pefc-eudr-readiness": {
        heroEyebrow: "Hizmetler",
        title: "FSC / PEFC / EUDR Hazırlık ve Dokümantasyon Doğrulama İncelemesi",
        intro:
          "FSC, PEFC ve EUDR ile ilişkili beyanların ve hazırlık dosyalarının güvenilirliği; yalnızca mevcut belgelerin varlığına değil, aynı zamanda zincir izi yapısının tutarlılığına, due diligence yaklaşımının açıklığına, tedarik zinciri kayıtlarının izlenebilirliğine ve dış kullanıma esas açıklama dilinin ölçülü olmasına bağlıdır. Meva Global, FSC / PEFC / EUDR çerçevesiyle ilişkili hazırlık ve teknik değerlendirme süreçleri için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; mevcut kayıtların, tedarikçi belgelerinin, izlenebilirlik yapısının ve kriter bazlı dosya kurgusunun sistematik biçimde gözden geçirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir hazırlık zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "Zincir izi kayıtları, due diligence dosyaları ve mevcut dokümantasyon yapısının değerlendirilmesi",
            "Tedarikçi beyanları, kaynak bilgileri, destekleyici belgeler ve izlenebilirlik akışının gözden geçirilmesi",
            "Dış kullanıma esas açıklama çerçevesinin ve hazırlık dosyasının doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "FSC / PEFC / EUDR süreçlerine daha güçlü teknik dosyalarla hazırlanmak isteyen üreticiler ve ihracatçılar",
            "Tedarik zinciri izlenebilirliğini ve kanıt disiplinini güçlendirmek isteyen sürdürülebilirlik ekipleri",
            "Kaynak iddialarını ve düzenleyici hazırlık seviyesini daha düzenli bir yapıya oturtmak isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Zincir izi, kaynak bilgisi ve mevcut kayıt yapısında makullük değerlendirmesi",
            "Tedarikçi belgeleri, due diligence paketleri ve destekleyici kayıtlar üzerinde örnekleme",
            "Dış incelemeye sunulacak hazırlık dosyasının açıklık, tutarlılık ve kanıt gücü açısından teknik kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "Hazırlık dosyalarının güvenilirliğini ve incelemeye hazırlık seviyesini güçlendirir",
            "Eksik kayıt, zayıf izlenebilirlik ve beyan riski kaynaklı itirazları azaltır",
            "Alıcı beklentileri, ihracat dosyaları ve tedarik zinciri iletişimi için daha sağlam temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Zincir izi, kaynak belgeleri ve dokümantasyon mantığını birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca dosya varlığına değil, bu dosyaların ilgili çerçevelerle nasıl ilişkilendirildiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut hazırlık seviyesini güçlendiren ve sonraki değerlendirme süreçlerine katkı sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut FSC / PEFC / EUDR hazırlık dosyalarınızı, tedarikçi kayıtlarınızı ve izlenebilirlik yapınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "gri-esrs-data-assurance": {
        heroEyebrow: "Hizmetler",
        title: "GRI / ESRS Veri Doğrulaması",
        intro:
          "GRI ve ESRS ile ilişkili sürdürülebilirlik verilerinin güvenilirliği; yalnızca yayımlanan göstergelere değil, aynı zamanda gösterge tanımlarının tutarlılığına, veri kaynaklarının açıklığına, kontrol noktalarının yeterliliğine, hesaplama mantığının izlenebilirliğine ve açıklama çerçevesinin standart beklentileriyle uyumuna bağlıdır. Meva Global, GRI / ESRS kapsamındaki sürdürülebilirlik verileri için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; veri akışının, gösterge mantığının, destekleyici kanıtların ve raporlama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir açıklama zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "GRI / ESRS kapsamındaki gösterge tanımları, veri kaynakları ve raporlama yapısının değerlendirilmesi",
            "Hesaplama mantığı, destekleyici veri setleri, kontrol noktaları ve açıklama çerçevesinin gözden geçirilmesi",
            "Dış kullanıma esas sürdürülebilirlik verilerinin doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "GRI veya ESRS kapsamında yayımladıkları verileri daha güvenilir hale getirmek isteyen kuruluşlar",
            "Sürdürülebilirlik raporlarında gösterge mantığını ve kanıt yapısını güçlendirmek isteyen ekipler",
            "Veri kalitesi, iç kontrol ve raporlama olgunluğunu artırmak isteyen şirketler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Gösterge tanımı, veri akışı ve açıklama uyumunda makullük değerlendirmesi",
            "Kaynak veri, destekleyici kayıtlar, hesaplama yapısı ve kontrol noktaları üzerinde örnekleme",
            "Dış kullanıma yönelik sürdürülebilirlik verilerinin açıklama dili ve kanıt dosyası üzerinde doğrulama kontrolleri",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "GRI / ESRS verilerinin güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Yanlış yorumlanma, veri tutarsızlığı ve açıklama riskini azaltır",
            "Yatırımcı, alıcı ve paydaş incelemesine uygun raporlama zemini oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Gösterge mantığı, veri kaynakları ve destekleyici kanıtları birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca son rakama değil, bu sonucun hangi veri ve kontrol yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut sürdürülebilirlik veri yapısını güçlendiren profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "GRI / ESRS veri setlerinizi, gösterge tanımlarınızı ve destekleyici kayıtlarınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "sustainability-kpi-evidence-review": {
        heroEyebrow: "Hizmetler",
        title: "Sürdürülebilirlik KPI Kanıt Doğrulaması",
        intro:
          "Sürdürülebilirlik KPI’larının güvenilirliği; yalnızca yayımlanan rakamlara değil, aynı zamanda KPI tanımının netliğine, veri kaynağının uygunluğuna, hesaplama mantığının tutarlılığına, destekleyici kanıt yapısının yeterliliğine ve kurum içi raporlama disiplinine bağlıdır. Meva Global, sürdürülebilirlik KPI’larını destekleyen veri ve kanıt yapısı için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; KPI tanımlarının, veri akışının, kaynak belgelerin ve destekleyici açıklamaların sistematik biçimde değerlendirilmesi yoluyla daha güvenilir ve daha profesyonel bir açıklama zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "KPI tanımları, veri kaynakları ve hesaplama mantığının değerlendirilmesi",
            "Kaynak belgeler, veri izleri, kontrol noktaları ve raporlama yapısının gözden geçirilmesi",
            "Dış kullanıma esas KPI açıklamalarının doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Sürdürülebilirlik KPI’larını dış paydaşlara daha güvenilir biçimde sunmak isteyen kuruluşlar",
            "KPI tanımları ile kaynak verileri arasındaki bağı güçlendirmek isteyen ekipler",
            "Yönetim raporları, sürdürülebilirlik açıklamaları ve yatırımcı iletişimi için veri disiplinini artırmak isteyen şirketler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "KPI tanımı, veri akışı ve hesaplama mantığında makullük değerlendirmesi",
            "Kaynak veriler, destekleyici belgeler ve kontrol noktaları üzerinde örnekleme",
            "Dış kullanıma yönelik KPI açıklamalarının açıklama dili ve kanıt dosyası üzerinde doğrulama kontrolleri",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "KPI güvenilirliğini ve kanıt yapısını güçlendirir",
            "Veri tutarsızlığı, yanlış yorumlanma ve açıklama riskini azaltır",
            "Yönetim, yatırımcı ve paydaş iletişimi için daha sağlam temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "KPI tanımları, veri kaynakları ve destekleyici kanıtları birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca son rakama değil, bu sonucun hangi veri ve iz yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların KPI veri yapısını güçlendiren ve raporlama olgunluğunu artıran profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "KPI tanımlarınızı, kaynak veri setlerinizi ve destekleyici belgelerinizi paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "limited-assurance-readiness": {
        heroEyebrow: "Hizmetler",
        title: "Sınırlı Bağımsız İnceleme (Limited Assurance) Hazırlığı",
        intro:
          "Sınırlı bağımsız inceleme sürecine hazırlığın kalitesi; yalnızca raporlanacak verilerin varlığına değil, kontrol ortamına, kanıt yapısına, kaynak kayıtların izlenebilirliğine, süreç sahipliğine ve açıklama çerçevesinin disiplinli kuruluşuna bağlıdır. Meva Global, ilgili doğrulama öncesi hazırlık için bağımsız ve yapılandırılmış teknik inceleme sunar. Mevcut veri ve kontrol yapısı, belgeler, sorumluluk akışı ve hazırlık seviyesi sistematik biçimde değerlendirilir; düzenli ve denetime hazır bir hazırlık zemini hedeflenir. Bu çalışma resmi doğrulama görüşünün veya limited assurance sürecinde oluşan bir görüşün yerini almaz.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "Sınırlı bağımsız inceleme öncesi veri, kontrol ve kanıt yapısının değerlendirilmesi",
            "Süreç sahipliği, kaynak kayıtlar, belge disiplini ve raporlama akışının gözden geçirilmesi",
            "Doğrulama öncesi hazırlık seviyesinin ve açıklama çerçevesinin incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Sınırlı bağımsız inceleme sürecine düzenli ve güçlü hazırlıkla girmek isteyen kuruluşlar",
            "Veri, kontrol ve kanıt yapısındaki boşlukları önceden görmek isteyen ekipler",
            "Doğrulama öncesi iç hazırlığını güçlendirmek isteyen sürdürülebilirlik ve raporlama ekipleri",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Kontrol ortamı, veri akışı ve kanıt yapısında makullük değerlendirmesi",
            "Kaynak veriler, destekleyici belgeler ve süreç sahipliği üzerinde örnekleme",
            "Sınırlı bağımsız incelemeye giriş öncesi kritik boşlukların ve iyileştirme alanlarının teknik kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "Doğrulama öncesi hazırlık seviyesini güçlendirir",
            "Eksik kanıt, zayıf kontrol ve süreç dağınıklığı kaynaklı riskleri azaltır",
            "İlgili doğrulama sürecinin daha düzenli, öngörülebilir ve verimli ilerlemesine katkı sağlar",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Veri, kontrol ve destekleyici kanıtları birlikte ele alan bağımsız hazırlık incelemesi",
            "Yalnızca son açıklamaya değil, bu açıklamanın hangi süreç altyapısıyla desteklendiğine odaklanan değerlendirme disiplini",
            "Hazırlık seviyesini güçlendiren profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut raporlama yapınızı, kontrol noktalarınızı ve destekleyici belgelerinizi paylaşın; sınırlı bağımsız inceleme öncesi hazırlık kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "non-financial-data-control-review": {
        heroEyebrow: "Hizmetler",
        title: "Finansal Olmayan Veri Kontrol Doğrulaması",
        intro:
          "Finansal olmayan verilerin güvenilirliği; yalnızca açıklanan metriklere değil, aynı zamanda veri tanımlarının tutarlılığına, kontrol mekanizmalarının yeterliliğine, örnekleme disiplinine, kaynak kayıtların izlenebilirliğine ve açıklama yapısının disiplinli biçimde kurulmasına bağlıdır. Meva Global, finansal olmayan veri kontrolleri için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; veri tanımlarının, kontrol noktalarının, destekleyici kayıtların ve açıklama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir ve daha profesyonel bir raporlama zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "Finansal olmayan metriklerde veri tanımları, kontrol noktaları ve kaynak kayıt yapısının değerlendirilmesi",
            "Örnekleme yaklaşımı, destekleyici belgeler ve açıklama çerçevesinin gözden geçirilmesi",
            "Dış kullanıma esas veri kontrollerinin doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Finansal olmayan verilerini daha güvenilir biçimde yöneten ve açıklamak isteyen kuruluşlar",
            "Kontrol mekanizmalarını ve veri disiplinini güçlendirmek isteyen raporlama ekipleri",
            "Sürdürülebilirlik, ESG veya operasyonel veri yapısında tutarlılığı artırmak isteyen şirketler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Veri tanımı, kontrol akışı ve örnekleme disiplininde makullük değerlendirmesi",
            "Kaynak kayıtlar, destekleyici belgeler ve veri giriş noktaları üzerinde örnekleme",
            "Dış kullanıma yönelik finansal olmayan veri açıklamalarının açıklama dili ve kontrol yapısı üzerinde doğrulama kontrolleri",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "Finansal olmayan verilerin güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Tanım tutarsızlığı, zayıf kontrol ve açıklama riski kaynaklı itirazları azaltır",
            "Kurumsal raporlama ve paydaş iletişimi için daha sağlam temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Veri tanımları, kontrol mekanizmaları ve destekleyici kayıtları birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca açıklanan metriğe değil, bu sonucun hangi veri ve kontrol yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların finansal olmayan veri yapısını güçlendiren profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut finansal olmayan veri setlerinizi, kontrol noktalarınızı ve destekleyici kayıtlarınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "indoor-air-quality-voc-review": {
        heroEyebrow: "Hizmetler",
        title: "İç Mekân Hava Kalitesi ve VOC Doğrulama İncelemesi",
        intro:
          "İç mekân hava kalitesi ve VOC emisyon beyanlarının güvenilirliği; yalnızca ölçüm sonuçlarına değil, aynı zamanda test kapsamının uygunluğuna, ilgili standarda uyuma, numune tanımının doğruluğuna, laboratuvar verilerinin izlenebilirliğine ve sonuçların dış kullanıma nasıl aktarıldığına bağlıdır. Meva Global, iç mekân hava kalitesi ve VOC emisyon verileri için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; test raporlarının, teknik veri akışının, açıklama dilinin ve destekleyici kanıt yapısının sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir beyan zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "VOC emisyon verileri, test kapsamı, ürün tanımı ve ilgili standarda uyumun değerlendirilmesi",
            "Laboratuvar raporları, teknik dokümantasyon, numune bilgileri ve destekleyici kayıt yapısının gözden geçirilmesi",
            "Açıklama dili, kullanım sınırları ve dış paydaşlara sunulan beyan çerçevesinin incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "İç mekân ürünlerini ihracat pazarlarına daha güvenilir teknik dosyalarla sunmak isteyen üreticiler",
            "Yapı malzemesi, yüzey kaplaması, mobilya veya benzeri ürünlerde VOC verilerini doğrulama temelli sunmak isteyen ekipler",
            "Teknik test sonuçlarını ölçülü açıklama diliyle desteklemek isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Test raporları, ölçüm kapsamı ve ürün tanımında makullük değerlendirmesi",
            "Laboratuvar verileri, numune ilişkisi, teknik kayıtlar ve destekleyici belgelerde örnekleme",
            "Dış kullanıma yönelik VOC ve indoor air quality beyanlarının açıklama dili ve teknik tutarlılığı üzerinde kontrol",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "İç mekân hava kalitesi ve VOC açıklamalarının güvenilirliğini güçlendirir",
            "Yanlış yorumlanma, teknik itiraz ve açıklama riskini azaltır",
            "İhracat dosyaları, proje bazlı teknik şartnameler ve ürün iletişimi için daha güçlü temel oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Teknik test verileri, dokümantasyon yapısı ve açıklama dilini birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca rapor sonucuna değil, bu sonucun hangi test ve kanıt yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut iç mekân hava kalitesi açıklamalarını güçlendiren ve sonraki teknik beyan süreçlerine katkı sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut VOC test raporlarınızı, ürün tanımınızı ve açıklama çerçevenizi paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "cbam-verification-support": {
        title: "SKDM (CBAM) Emisyon Doğrulaması",
        intro:
          "CBAM raporlamasında güvenilirlik yalnızca emisyon değerinin hesaplanmasıyla oluşmaz; tesis verisi, tedarikçi kanıtı, yöntem seçimi ve raporlama dosyası aynı izlenebilir zincir içinde ele alınmalıdır. Meva Global, SKDM (CBAM) için hazırlanan emisyon verileri ve ilgili açıklamalarda bağımsız teknik doğrulama desteği sunar; veri akışı, metodoloji ve dokümantasyonu birlikte kontrol eder.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Raporlama sınırları, ürün ve tesis bağlamı ile kullanılan metodolojik yaklaşım",
            "Tedarikçi verileri, aktivite verileri, emisyon faktörleri ve destekleyici kayıt yapısı",
            "Açıklama dili, veri izi ve dış kullanıma esas teknik çerçevenin değerlendirilmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "SKDM kapsamında emisyon verilerini daha güvenilir biçimde sunmak isteyen ihracatçılar",
            "Tedarikçi girdilerini ve gömülü emisyon verilerini daha düzenli yöneten üreticiler",
            "Dış paydaşlara açıklama yapmadan önce veri ve dokümantasyon yapısını güçlendirmek isteyen ekipler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Sistem sınırları, veri akışı ve hesaplama mantığında makullük değerlendirmesi",
            "Tedarikçi girdileri, emisyon faktörleri ve destekleyici belgelerde örnekleme",
            "Raporlanan sonuçların dış kullanıma uygunluğu ve açıklama riskine ilişkin teknik kontroller",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "SKDM bağlamında kullanılan emisyon verilerinin güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Metodolojik belirsizlikleri ve açıklama riskini azaltır",
            "Tedarik zinciri, alıcı ve düzenleyici beklentiler karşısında daha düzenli bir veri altyapısı oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Metodoloji, veri yapısı ve kanıt dosyalarını birlikte ele alan bağımsız teknik doğrulama yaklaşımı",
            "Sonuç tablosunun ötesine geçerek veri kaynağı, izlenebilirlik ve açıklama güvenilirliğine odaklanan inceleme disiplini",
            "Kuruluşların mevcut CBAM verilerini güçlendiren ve sonraki raporlama dönemlerine hazırlık sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "SKDM kapsamındaki veri yapınızı, tedarikçi girdilerinizi ve mevcut emisyon hesaplama çerçevenizi paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "eu-ets-verification-review": {
        heroEyebrow: "Hizmetler",
        title: "EU ETS Emisyon Doğrulama İncelemesi",
        intro:
          "EU ETS kapsamındaki emisyon verilerinin güvenilirliği; yalnızca raporlanan toplam değerlere değil, aynı zamanda tesis sınırlarının doğruluğuna, izleme yaklaşımının tutarlılığına, aktivite verilerinin izlenebilirliğine, hesaplama mantığının açıklığına ve destekleyici kanıt yapısının yeterliliğine bağlıdır. Meva Global, EU ETS ile ilişkili emisyon verileri ve hazırlık dosyaları için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; veri akışının, izleme planı mantığının, tesis bazlı kayıtların ve açıklama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir hazırlık zemini oluşturur. Bu çalışma resmi doğrulama kararının yerini almaz; teknik hazırlık düzeyini güçlendirmeyi hedefler.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "EU ETS ile ilişkili emisyon verileri, tesis sınırları ve izleme yaklaşımının değerlendirilmesi",
            "Aktivite verileri, emisyon faktörleri, hesaplama mantığı ve destekleyici kayıt yapısının gözden geçirilmesi",
            "Dış kullanıma veya resmi incelemeye esas hazırlık dosyasının doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "EU ETS kapsamındaki emisyon verilerini daha güvenilir ve daha düzenli sunmak isteyen tesisler",
            "İzleme planı, veri akışı ve kanıt yapısını güçlendirmek isteyen sürdürülebilirlik ve çevre ekipleri",
            "Resmi inceleme öncesinde teknik hazırlık seviyesini artırmak isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Tesis sınırları, izleme mantığı ve veri akışında makullük değerlendirmesi",
            "Aktivite verileri, hesaplama yapısı, destekleyici kayıtlar ve emisyon girdileri üzerinde örnekleme",
            "Dış incelemeye sunulacak emisyon dosyasının açıklık, tutarlılık ve kanıt gücü açısından teknik kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "EU ETS emisyon beyanlarında güvenilirlik ve teknik dosya tutarlılığını güçlendirir",
            "Eksik kayıt, zayıf izleme mantığı ve veri tutarsızlığı kaynaklı riskleri azaltır",
            "Resmi doğrulama öncesi hazırlık seviyesini ve iç kontrol olgunluğunu artırır",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Tesis verileri, izleme mantığı ve destekleyici kayıtları birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca son emisyon rakamına değil, bu sonucun hangi veri ve süreç yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut emisyon veri yapısını güçlendiren ve sonraki resmi süreçlere katkı sağlayan profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut EU ETS veri setlerinizi, izleme planınızı ve destekleyici kayıtlarınızı paylaşın; kullanım bağlamınıza uygun doğrulama inceleme kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "f-gases-verification-review": {
        heroEyebrow: "Hizmetler",
        title: "F-Gazları Doğrulama İncelemesi",
        intro:
          "F-gazları ile ilişkili kayıtların ve beyanların güvenilirliği; yalnızca ekipman listelerine değil, aynı zamanda gaz türü ve miktar bilgilerinin doğruluğuna, servis ve sızıntı kayıtlarının izlenebilirliğine, raporlama mantığının tutarlılığına ve destekleyici kanıt yapısının yeterliliğine bağlıdır. Meva Global, F-gazlarıyla ilişkili veri ve hazırlık dosyaları için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; ekipman kayıtlarının, bakım ve servis izlerinin, gaz hareketlerinin ve açıklama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir hazırlık zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "F-gazları ile ilişkili ekipman kayıtları, gaz miktarları ve raporlama yapısının değerlendirilmesi",
            "Servis, bakım, dolum, geri kazanım ve sızıntı kayıtlarının gözden geçirilmesi",
            "Dış kullanıma veya resmi incelemeye esas hazırlık dosyasının doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "F-gazları kayıtlarını daha güvenilir ve daha düzenli hale getirmek isteyen kuruluşlar",
            "Ekipman envanteri, servis izleri ve kanıt yapısını güçlendirmek isteyen teknik ekipler",
            "Resmi kontrol veya uyum süreçleri öncesinde hazırlık seviyesini artırmak isteyen yapılar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Ekipman envanteri, gaz kayıtları ve raporlama mantığında makullük değerlendirmesi",
            "Servis kayıtları, teknik dokümanlar, destekleyici belgeler ve miktar bilgileri üzerinde örnekleme",
            "Dış incelemeye sunulacak dosyanın açıklık, tutarlılık ve kanıt gücü açısından teknik kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "F-gazları ile ilişkili kayıtların güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Eksik servis izi, zayıf kayıt yapısı ve beyan riski kaynaklı sorunları azaltır",
            "Teknik ve uyum ekipleri için düzenli, izlenebilir bir veri zemini oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Ekipman kayıtları, servis izleri ve destekleyici belgeleri birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca bildirilen miktarlara değil, bu kayıtların hangi teknik ve operasyonel izlerle desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut F-gazı veri yapısını güçlendiren profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut F-gazları kayıtlarınızı, ekipman envanterinizi ve servis belgelerinizi paylaşın; kullanım bağlamınıza uygun doğrulama inceleme kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "maritime-mrv-verification-review": {
        heroEyebrow: "Hizmetler",
        title: "Denizcilik MRV Doğrulama İncelemesi",
        intro:
          "Denizcilik MRV ile ilişkili emisyon ve yakıt verilerinin güvenilirliği; yalnızca raporlanan toplam değerlere değil, aynı zamanda gemi bazlı veri akışının doğruluğuna, yakıt tüketimi kayıtlarının tutarlılığına, sefer bilgilerinin izlenebilirliğine, izleme mantığının açıklığına ve destekleyici kanıt yapısının yeterliliğine bağlıdır. Meva Global, Denizcilik MRV ile ilişkili veri ve hazırlık dosyaları için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; gemi bazlı kayıtların, yakıt izlerinin, sefer verilerinin ve açıklama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir hazırlık zemini oluşturur.",
        covers: {
          title: "Hizmetin Kapsamı",
          bullets: [
            "Denizcilik MRV ile ilişkili emisyon, yakıt tüketimi ve sefer kayıtlarının değerlendirilmesi",
            "İzleme yaklaşımı, veri kaynakları, destekleyici belgeler ve açıklama çerçevesinin gözden geçirilmesi",
            "Dış kullanıma veya resmi incelemeye esas hazırlık dosyasının doğrulama açısından incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Denizcilik MRV veri yapısını daha güvenilir ve daha düzenli hale getirmek isteyen işletmeler",
            "Gemi bazlı kayıtlarını, yakıt verilerini ve izleme mantığını güçlendirmek isteyen teknik ekipler",
            "Resmi inceleme öncesinde hazırlık seviyesini artırmak isteyen kuruluşlar",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Gemi bazlı veri akışı, yakıt tüketimi ve sefer kayıtlarında makullük değerlendirmesi",
            "Destekleyici belgeler, kaynak kayıtlar, raporlama mantığı ve hesaplama yapısı üzerinde örnekleme",
            "Dış incelemeye sunulacak Denizcilik MRV dosyasının açıklık, tutarlılık ve kanıt gücü açısından teknik kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemlidir",
          bullets: [
            "Denizcilik MRV ile ilişkili veri yapısının güvenilirliğini ve izlenebilirliğini güçlendirir",
            "Eksik kayıt, zayıf yakıt izi ve açıklama riski kaynaklı sorunları azaltır",
            "Resmi doğrulama öncesi hazırlık seviyesini ve veri disiplinini artırır",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Gemi bazlı kayıtlar, yakıt verileri ve destekleyici belgeleri birlikte ele alan bağımsız doğrulama incelemesi",
            "Yalnızca son raporlanan değere değil, bu sonucun hangi veri ve operasyonel izlerle desteklendiğine odaklanan değerlendirme disiplini",
            "Kuruluşların mevcut Denizcilik MRV hazırlık seviyesini güçlendiren profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut Denizcilik MRV veri setlerinizi, yakıt kayıtlarınızı ve destekleyici belgelerinizi paylaşın; kullanım bağlamınıza uygun doğrulama inceleme kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "custom-verification": {
        title: "Özel ve İkinci Taraf Doğrulama",
        intro:
          "Standart dışı kapsamlar ve alıcı/paydaş ihtiyaçları için uyarlanmış bağımsız doğrulama ve ikinci taraf inceleme modelleri; netlik, yönetişim ve ölçülü kamusal dil odağında.",
        covers: {
          title: "Hizmet kapsamı",
          bullets: [
            "Özel kapsam tanımı, kriterler ve kullanım amacı",
            "Kanıta dayalı teknik değerlendirme ve örnekleme mantığı",
            "Ölçülü dış kullanıma uygun karar yolu ve beyan formatı",
          ],
        },
        forWho: {
          title: "Kimler için",
          bullets: [
            "İkinci taraf veya özel bağımsız inceleme ihtiyacı olan kuruluşlar",
            "Özel kriterli satın alma ve tedarikçi programları",
            "İddia, metodoloji ve kanıt paketlerini değerlendiren ekipler",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Kriter tanımı ve kapsam sınırı teyidi",
            "Kanıt eşleştirme ve makullük kontrolleri",
            "Karar önerisi ve beyan/sertifika düzenleme yolu",
          ],
        },
        whyMatters: {
          title: "Neden önemli",
          bullets: [
            "Standartların tek başına yeterli olmadığı alanlarda teknik çerçeve sunar",
            "Paydaşlar için şeffaflığı ve teknik tutarlılığı artırır",
            "Programlar arasında tutarlı karar vermeyi destekler",
          ],
        },
        approach: {
          title: "Meva yaklaşımı",
          bullets: [
            "Özel kriterler ve kararlar için yapılandırılmış yönetişim",
            "İzlenebilir kayıtlarla kanıt odaklı inceleme",
            "Kapsam ve sınırlılıklarla uyumlu net beyan dili",
          ],
        },
        cta: {
          title: "Özel kapsamınızı tanımlayın",
          body: "Kriterlerinizi, sınırlarınızı ve kullanım amacınızı paylaşın. Bağımsız inceleme modeli ve takvim önerelim.",
        },
      },
      "iso-14064-3-review-support": {
        heroEyebrow: "Hizmetler",
        title: "ISO 14064-3 — Sera Gazı Doğrulama ve Geçerli Kılma Süreçleri",
        intro:
          "Sera gazı doğrulama ve geçerli kılma süreçlerinin güvenilirliği; yalnızca nihai beyana değil, aynı zamanda inceleme kapsamının netliğine, kriterlerin doğru tanımlanmasına, kanıt yapısının yeterliliğine, süreç tasarımının uygunluğuna ve teknik karar mantığının tutarlılığına bağlıdır. Meva Global, ISO 14064-3 bağlamında yürütülen doğrulama ve geçerli kılma süreçleri için bağımsız ve yapılandırılmış bir teknik inceleme yaklaşımı sunar. Bu hizmet; süreç kurgusunun, kanıt akışının, değerlendirme mantığının ve ilgili dokümantasyon yapısının sistematik biçimde gözden geçirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir doğrulama altyapısı oluşturmayı hedefler.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Doğrulama veya geçerli kılma sürecinin amacı, kapsamı ve uygulanacak kriterleri",
            "Kanıt yapısı, veri setleri, metodolojik dayanak ve değerlendirme sınırları",
            "Süreç tasarımı, dokümantasyon disiplini ve karar altyapısının teknik yeterliliği",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Sera gazı beyanlarını daha düzenli doğrulama yapısıyla desteklemek isteyen kuruluşlar",
            "Doğrulama veya geçerli kılma sürecine hazırlanan ekipler",
            "Teknik dosya, kanıt zinciri ve süreç tasarımını güçlendirmek isteyen program sahipleri ve proje ekipleri",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Kapsam tanımı, kriter seti ve süreç mantığının gözden geçirilmesi",
            "Kanıt dosyaları, veri akışı ve teknik değerlendirme yapısında örnekleme",
            "Bulguların, karar mantığının ve çıktı kurgusunun makullük kontrolü",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "Doğrulama ve geçerli kılma süreçlerinin güvenilirliğini ve teknik tutarlılığını güçlendirir",
            "Bulguların, kararların ve açıklama çıktılarının daha düzenli temellendirilmesini sağlar",
            "Sonraki inceleme, beyan ve dış paydaş iletişimi için daha sağlam bir süreç altyapısı oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Süreç tasarımı, kriterler ve kanıt yapısını birlikte ele alan bağımsız teknik değerlendirme",
            "Yalnızca sonuca değil, kararın nasıl üretildiğine odaklanan inceleme disiplini",
            "Kuruluşların doğrulama ve geçerli kılma uygulamalarını daha güçlü ve daha izlenebilir hale getiren profesyonel yaklaşım",
          ],
        },
        cta: {
          title: "",
          body: "Mevcut doğrulama veya geçerli kılma sürecinizi, kriter yapınızı ve kanıt dosyalarınızı paylaşın; kullanım bağlamınıza uygun inceleme kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      "net-zero-sbti-technical-review": {
        heroEyebrow: "Hizmetler",
        title: "Net-Sıfır ve SBTi Teknik Doğrulaması",
        intro:
          "Net-sıfır yol haritaları ve SBTi ile ilişkili hedef çerçevelerinin güvenilirliği; yalnızca açıklanan hedeflere değil, aynı zamanda geçiş yolunun tutarlılığına, azaltım mantığının inandırıcılığına, kapsam tanımının netliğine, veri yapısının yeterliliğine ve destekleyici kanıtların açıklığına bağlıdır. Meva Global, net-sıfır ve SBTi bağlamındaki teknik hedef yapıları için bağımsız ve yapılandırılmış bir teknik doğrulama yaklaşımı sunar. Bu hizmet; hedef kurgusunun, azaltım yolunun, veri dayanağının ve ilgili açıklama çerçevesinin sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha düzenli ve daha profesyonel bir açıklama zemini oluşturur. Bu çalışma resmi hedef onay sürecinin yerini almaz; ancak kuruluşların açıklamalarını ve hazırlık seviyelerini daha güçlü bir teknik temele oturtmayı hedefler.",
        covers: {
          title: "Hizmet Kapsamı",
          bullets: [
            "Geçiş yolu, hedef yapısı, kapsam seçimi ve azaltım mantığının teknik değerlendirilmesi",
            "Veri dayanağı, metodolojik çerçeve, varsayımlar ve destekleyici kayıt yapısının gözden geçirilmesi",
            "Açıklama dili, hedef ifadesi ve dış kullanıma esas güvenilirlik çerçevesinin incelenmesi",
          ],
        },
        forWho: {
          title: "Kimler İçin",
          bullets: [
            "Net-sıfır yol haritalarını daha güvenilir bir teknik zeminde sunmak isteyen kuruluşlar",
            "SBTi ile ilişkili hedef çerçevelerini iç ve dış paydaşlara açıklamadan önce güçlendirmek isteyen ekipler",
            "Geçiş planı, veri yapısı ve azaltım mantığını daha düzenli hale getirmek isteyen sürdürülebilirlik, finans ve operasyon ekipleri",
          ],
        },
        typicalScope: {
          title: "İncelemenin Odak Noktaları",
          bullets: [
            "Hedef çerçevesi, kapsam tanımı ve azaltım yolunda makullük değerlendirmesi",
            "Veri dayanakları, varsayımlar ve teknik destek yapısında örnekleme",
            "Açıklama metni, hedef kurgusu ve dış kullanım riskine ilişkin teknik kontroller",
          ],
        },
        whyMatters: {
          title: "Neden Önemli",
          bullets: [
            "Net-sıfır ve hedef bazlı iklim açıklamalarının güvenilirliğini güçlendirir",
            "Hedef kurgusundaki metodolojik belirsizlikleri ve açıklama riskini azaltır",
            "Yatırımcı, alıcı ve diğer paydaş beklentileri karşısında daha düzenli bir açıklama altyapısı oluşturur",
          ],
        },
        approach: {
          title: "Meva Yaklaşımı",
          bullets: [
            "Geçiş yolu, veri yapısı ve destekleyici kanıtları birlikte ele alan bağımsız teknik doğrulama yaklaşımı",
            "Yalnızca hedef ifadesine değil, bu hedefin hangi teknik dayanakla kurulduğuna odaklanan inceleme disiplini",
            "Kuruluşların mevcut net-sıfır ve SBTi açıklamalarını güçlendiren ve sonraki dönemlere hazırlık sağlayan profesyonel yapı",
          ],
        },
        cta: {
          title: "",
          body: "Geçiş yolunuzu, hedef çerçevenizi ve mevcut teknik dayanaklarınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
          primaryButton: "Teklif Talep Et",
          secondaryButton: "Hizmetlere Dön",
          detailLink: "Detayları İncele",
        },
      },
      ...newServiceDetailsTr,
      ...serviceDetailsExtraTr,
    },
    cbam: {
      heroEyebrow: "SKDM (CBAM)",
      title: "SKDM (CBAM) Çözümleri",
      intro:
        "Karbon sınır düzenlemesi, emisyon bilgisini yalnızca toplam rakamlar üzerinden değil; tesis ve süreç düzeyindeki kayıtlarla birlikte okunmasını bekler. İhracatçı ve üreticilerle, teknik inceleme odaklı teknik inceleme çerçevesinde kapsamı, izlenebilirliği, tedarikçi kanıtlarını, tesis bazlı hesaplama yollarını ve dış kullanıma esas dosyaların yapısını netleştiriyoruz. Amaç, raporlama döngüleri ve dış denetim öncesi veri mimarisi ile açıklama disiplinini güçlendirmektir; bu çalışma düzenleyici onay veya zorunlu doğrulamanın yerine geçmez.",
      heroImageAlt:
        "SKDM (CBAM) teknik dokümanları, emisyon grafikleri ve liman lojistiği bağlamı içeren çalışma görünümü",
      sections: [
        {
          title: "Güvenilir veri, SKDM inandırıcılığının omurgası",
          bullets: [
            "Beklenen açıklamalar, toplamları destekleyen tesis ve süreç kayıtlarıyla birlikte değerlendirilir; yalnız sayılar yeterli değildir",
            "Zayıf izlenebilirlik, belirsiz sınırlar veya opak veri akışı CBAM’a dönük materyallerin güvenilirliğini zedeler",
            "Erken dönemde tutarlı bir mimari, sonradan yaşanacak revizyon yükünü ve itiraz riskini azaltır",
          ],
        },
        {
          title: "Yaygın raporlama ve kanıt açıkları",
          bullets: [
            "Tesis, ürün veya dönemler arasında hizasız sistem sınırları",
            "Yeniden kurulması zor tahsis mantığı, faktör seçimi ve hesaplama izleri",
            "Tedarikçi kanıtının zayıf kalması, kaynak dokümantasyon eksikliği ve kritik sürücülerde yetersiz delil",
          ],
        },
        {
          title: "İncelemenin odaklandığı alanlar",
          bullets: [
            "Kapsam tanımı, ürün odaklı veri tasarımı ve tesis bazlı hesaplama yaklaşımının teknik okuması",
            "Kaynak veriler, destekleyici kayıtlar ve kritik girdiler üzerinde hedefli örnekleme",
            "Dış kullanıma esas SKDM paketinde iç tutarlılık, netlik ve teknik dosya kontrolü",
          ],
        },
        {
          title: "Tedarikçi verisi ve tesis düzeyinde sıkı okuma",
          bullets: [
            "Önemli tedarikçi girdilerinde kanıt eşleştirme ve makullük kontrolleri",
            "Tesis bazında aktivite verisi, proses mantığı ve hesaplama zincirinin incelenmesi",
            "Sunum veya devir öncesi boşlukları kapatmak için yapılandırılmış bulgu çıktısı",
          ],
        },
        {
          title: "Meva’nın teknik inceleme odaklı çalışma modeli",
          bullets: [
            "SKDM bilgisinin nasıl okunması beklendiğiyle hizalı bağımsız teknik inceleme duruşu",
            "Kanıt kalitesi, veri yapıları ve açıklama sınırlarını aynı çerçevede ele alan disiplin",
            "Bugünkü hazırlığı güçlendirirken sonraki doğrulama veya güncelleme döngülerine uyum sağlayan profesyonel iskele",
          ],
        },
      ],
      cta: {
        title: "",
        body: "Güncel veri setlerinizi, tesis bazlı hesaplama tasarımınızı ve tedarikçi kanıt durumunuzu paylaşın; inceleme derinliğini raporlama bağlamınız ve takviminizle hizalayalım.",
        primaryLabel: "Teklif Talep Et",
        secondaryLabel: "Hizmetleri İncele",
        tertiaryLabel: "Detayları İncele",
      },
    },
    process: {
      accreditation: {
        eyebrow: "Bağımsızlık • Teknik Yetkinlik • Kurumsal Disiplin",
        title: "Akreditasyon",
        status: "Akreditasyon hazırlıkları sürmektedir",
        body:
          "MEVA Global Certification; kalite yönetim sistemi, metodolojik tutarlılık, kayıt disiplini, tarafsızlık kontrolleri ve teknik yetkinlik ekseninde uluslararası akreditasyon altyapısını güçlendirmeye yönelik çalışmalarını sürdürmektedir—buna ISO/IEC 17029 akreditasyon sürecine ilişkin faaliyetler de dahildir; kesin statü ve kapsam beyanı yalnızca yetkili akreditasyon kurumunun resmî değerlendirmesi ve yürürlükteki açıklama kuralları çerçevesinde yapılır. Bu hazırlıklar; hizmet sunumunun daha izlenebilir, daha tutarlı ve ilgili standart beklentileriyle daha güçlü uyumlu yürütülmesini destekler. Akreditasyon çıktıları kesinleştiğinde geçerli kapsam bilgileri ve resmî dokümantasyon bu alanda yayımlanır.",
        heroImageAlt:
          "Doğrulama süreci incelemesi; düzenli dokümantasyon, kontrol listesi ve süreç akışı bağlamında kurumsal çalışma görünümü",
      },
      accreditationPageNav: {
        navAriaLabel: "Akreditasyon sayfası bölümleri",
        accreditation: "Akreditasyon",
        verificationProcess: "Doğrulama Süreci",
        documents: "Kurumsal Dokümanlar",
      },
      verificationProcessHeroVisual: {
        ariaLabel:
          "Doğrulama süreci incelemesi; süreç, kanıt, kontrol listesi ve inceleme akışı aşamalarını gösteren görsel özet.",
        title: "Doğrulama Süreci İncelemesi",
        tabs: ["Süreç", "Kanıt", "Kontrol Listesi", "İnceleme Akışı"] as const,
        evidenceCard: {
          title: "Kanıt",
          line1: "Süreç Kayıtları",
          line2: "Veriler & Belgeler",
        },
        checklistTitle: "Kontrol Listesi",
        checklistRows: ["Süreç", "Kanıt", "Kontrol Listesi", "İnceleme Akışı"] as const,
        reviewFlowStrip: "İnceleme Akışı",
        flowBoxes: ["Süreç", "Kanıt", "Kontrol Listesi", "İnceleme Akışı"] as const,
      },
      corporateDocumentsSection: {
        title: "Kurumsal Dokümanlar",
        intro:
          "Doğrulama, geçerli kılma, tarafsızlık, gizlilik ve beyan kullanımına ilişkin temel kurumsal dokümanlarımızı bu bölümde inceleyebilirsiniz.",
        fileUnavailableNote:
          "Bu dokümanın güncel PDF dosyası şu anda bu ortamda bulunmuyor. İlgili içeriklere bilgi merkezinden veya iletişim kanalından ulaşabilirsiniz.",
        knowledgeHubLinkLabel: "Bilgi Merkezini İncele",
        labels: {
          publicationStatus: "Yayın durumu",
          firstPublished: "İlk yayın",
          documentLanguage: "Dil",
          view: "Görüntüle",
          download: "PDF indir",
        },
        publicationStatusFirst: "İlk yayın",
        languageValue: "EN · TR · NL",
      },
      verification: {
        title: "Doğrulama Süreci",
        body:
          "Her çalışma; kapsamın açık tanımı, kanıtın izlenebilirliği ve teknik kararların belgelenmiş gerekçeyle yürütülmesi için yapılandırılmış bir inceleme akışı içinde ilerler. Süreç; tanımlı roller, uygun metodoloji ve tarafsızlık kontrolleri altında yürütülür.",
      },
      steps: [
        {
          title: "Ön Uygunluk Değerlendirmesi",
          description: "Talebin kapsamı, uygulanabilir standartları ve hedef takvimi açısından ilk teknik uygunluk değerlendirmesi yapılır.",
        },
        {
          title: "Kapsam ve Kriterlerin Netleştirilmesi",
          description: "Sistem sınırları, referans kriterler, varsayımlar, kullanım amacı ve beklenen çıktılar yazılı olarak kesinleştirilir.",
        },
        {
          title: "Doküman ve Kanıt İncelemesi",
          description: "Kanıt paketi; tamlık, tutarlılık, veri izi ve destekleyici kayıtlar bakımından sistematik olarak gözden geçirilir.",
        },
        {
          title: "Teknik Doğrulama Testleri",
          description: "Örnekleme, yeniden hesaplama, çapraz kontrol ve kritik belirleyiciler üzerinde makullük testleri uygulanır.",
        },
        {
          title: "Saha Ziyareti ve Görüşmeler",
          description: "Uygun olduğu durumlarda operasyonel akış, sorumlular ve kontrol noktaları yerinde incelenir.",
        },
        {
          title: "Bağımsız İç Teknik Gözden Geçirme",
          description: "Taslak karar ve beyan, nihai yayım öncesinde bağımsız iç teknik değerlendirmeye alınır.",
        },
        {
          title: "Beyan Veya Sertifika Düzenleme",
          description:
            "Uygulanabilir kapsama göre referans numaralı beyan, doğrulama çıktısı veya sertifika düzenlenir; gerekli olduğunda sınırlı kamusal kayıt bilgileri yayımlanır.",
        },
      ],
      cta: {
        eyebrow: BRAND_POSITIONING_LINE.tr,
        title: "Kapsamlı Teknik İnceleme Talep Edin",
        body:
          "Kapsamınızı, uygulanacak standartları ve hedef takviminizi paylaşın. Raporlama bağlamınıza uygun inceleme yaklaşımı, kanıt beklentileri ve net zaman çizelgesiyle size geri dönelim.",
        primaryLabel: "Teklif Talep Et",
        secondaryLabel: "Hizmetleri İncele",
      },
    },
    statementSearch: {
      title: "Beyan Kayıtları Ve Durum Sorgulama",
      intro:
        "Yayımlanmış beyan kayıtlarını referans bilgileri üzerinden sorgulayabilirsiniz. Bu alanda yer alan kayıt özeti ve durum bilgileri, kamuya açık referans kontrolü amacıyla sunulur; hukuki görüş, resmî danışmanlık veya tek başına bağlayıcı karar niteliği taşımaz.",
      heroEyebrow: "Beyan Kayıtları • Durum Sorgulama • Referans Kontrolü",
      heroImageAlt:
        "Masaüstünde beyan kaydı sorgulama ekranı ve doğrulanmış kayıt özeti—doğrulama kuruluşu kayıt görünümü.",
      panelTitle: "Kayıt sorgulama",
      note:
        "Görüntülenen alanlar şeffaflık için sınırlıdır; hukuki danışmanlık veya tek başına resmi kabul anlamına gelmez. Yazışmalarda referans numarasını belirtiniz.",
      fields: {
        statementNumber: "Referans no.",
        companyName: "Şirket Adı",
        standard: "Standart",
        reportingYear: "Raporlama Yılı",
      },
      placeholders: {
        statementNumber: "Örn: MG-VER-2026-001",
        companyName: "Örn: Şirket adı",
      },
      labels: {
        status: "Durum",
        verifiedValue: "Doğrulanan Değer",
        office: "Ofis",
        schemeType: "Hizmet türü",
        clear: "Temizle",
        resultsCount: "Kayıt",
        issuedBy: "Düzenleyen",
      },
      values: {
        status: {
          Active: "Geçerli",
          Expired: "Süresi dolmuş",
          Withdrawn: "Geri çekilmiş",
        },
        office: {
          Türkiye: "Türkiye",
          Netherlands: "Hollanda (Utrecht)",
        },
        schemeType: {
          verification: "Doğrulama",
          validation: "Validasyon",
          assurance: "Bağımsız teknik inceleme",
        },
      },
      resultTitle: "Sonuçlar",
      noResults: "Geçerli filtrelerle eşleşen kayıt bulunamadı. Arama ölçütlerinizi gözden geçirin.",
      emptyState: {
        line1: "Yayımlanmış kayıtları referans numarası veya ilgili beyan bilgileri üzerinden sorgulayabilirsiniz.",
        line2:
          "Kayıt görünmüyorsa referans bağlamınızla birlikte iletişim kanalından yönlendirme talep edebilirsiniz.",
      },
    },
    documents: {
      title: "Bilgi Merkezi",
      hero: {
        eyebrow: "Kaynaklar • Rehberlik • Teknik Notlar",
        title: "Doğrulama ve Regülasyon Hazırlığı İçin Bilgi Merkezi",
        body:
          "Doğrulama, validasyon, SKDM, ürün beyanları ve sürdürülebilirlik raporlaması alanlarında kanıt disiplini, dokümantasyon kalitesi ve teknik hazırlık üzerine düzenli içerikler paylaşıyoruz.",
        heroImageAlt:
          "Standart referansları, düzenli ciltler, LCA materyalleri ve analitik notların bulunduğu kurumsal çalışma alanı.",
      },
      sectionLabel: "Öne Çıkan İçerikler",
      cards: [
        {
          category: "SKDM",
          date: "2026-04-19",
          title: "SKDM Hazırlığında “Güvenilir Emisyon Verisi” Gerçekte Ne Anlama Gelir?",
          body:
            "Beyan öncesi sınır disiplini, kanıt yeterliliği ve veri kalitesinin teknik inceleme açısından nasıl okunacağına dair özlü bir çerçeve.",
          cta: "Teknik Notu İncele",
          href: "/documents/cbam-reliable-emissions-data",
        },
        {
          category: "Karbon",
          date: "2026-04-19",
          title: "Karbon Doğrulamada Kapsam, Metodoloji ve Paydaş Beklentileri Nasıl Hizalanır?",
          body:
            "İzlenebilir varsayımlar, açık kontrol noktaları ve bilinçli metodoloji seçiminin teknik tartışmaya dayanıklı raporlamaya nasıl dönüştüğü.",
          cta: "Teknik Notu İncele",
          href: "/documents/carbon-verification-alignment",
        },
        {
          category: "EPD / LCA",
          date: "2026-04-19",
          title: "EPD ve LCA Kritik İncelemede En Sık Karşılaşılan Zayıflıklar",
          body:
            "PCR hizası, ön plan izlenebilirliği, tahsis savunulabilirliği, senaryo şeffaflığı ve modelden rapora tutarlılık gibi tekrar eden inceleme temaları.",
          cta: "Teknik Notu İncele",
          href: "/documents/epd-lca-critical-weaknesses",
        },
        {
          category: "Teknik İnceleme",
          date: "2026-04-19",
          title: "Sürdürülebilirlik İddialarında İnceleme Derinliği Neden Kritik?",
          body:
            "Sınırlı ve daha derin bağımsız inceleme düzeyleri; karar riski, üçüncü taraf güveni ve kullanılacak teknik dilin ima ettiği kanıt derinliği ile birlikte değerlendirilir.",
          cta: "Teknik Notu İncele",
          href: "/documents/sustainability-assurance-levels",
        },
      ],
      bottomCta: {
        eyebrow: "Teknik Değerlendirme • Bağımsız Yaklaşım",
        title: "Belirli Bir Konuda Daha Derin Teknik İnceleme Mi Gerekiyor?",
        body:
          "Raporlama bağlamınızı, uygulanabilir standardı ve bilginin dışarıda nasıl kullanılacağını paylaşın; inceleme derinliği, kanıt beklentisi ve takvimi birlikte hizalayalım.",
        primary: "İletişime Geç",
        secondary: "Hizmetleri İncele",
      },
      resourceArticles: documentsResourceArticlesTr,
    },
    insights: {
      title: "İçgörüler",
      intro: "SKDM, karbon doğrulama ve teknik incelemeye hazır raporlama üzerine kısa teknik notlar—kanıt, kapsam sınırları ve açıklama disiplini odağında.",
      readMore: "Devamını oku",
    },
    contact: {
      title: "İletişim",
      intro:
        "Talebinize en uygun ofisle iletişime geçebilirsiniz. Kapsamı, uygulanabilir standart veya program kurallarını ve zamanlamayı paylaşın; bağımsız doğrulama, validasyon veya teknik inceleme için yapılandırılmış geri dönüşle genelde bir–iki iş günü içinde yanıt veririz.",
      heroImageAlt:
        "Aydınlık ofis ortamında iletişim not defteri, telefon ve Meva Certification materyalleri içeren kurumsal masa üstü görünümü.",
      officesTitle: "Ofisler",
      formsTitle: "Başvuru",
      validation: {
        required: "Zorunlu",
        invalidEmail: "Geçersiz e-posta",
        submitted: "Teşekkürler. Mesajınız alınmıştır. En kısa sürede size dönüş yapacağız.",
      },
      contactForm: {
        title: "Genel başvuru",
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        company: "Şirket",
        message: "Mesaj",
      },
      contactPlaceholders: {
        name: "Örn: Ad Soyad",
        email: "Örn: ad@firma.com",
        phone: "Örn: +90 5xx xxx xx xx",
        company: "Örn: Şirket unvanı",
        message: "Kapsam, standartlar, raporlama yılı ve hedef teslim tarihini kısaca paylaşın.",
      },
      quoteForm: {
        title: "Teklif Talebi",
        service: "Hizmet Alanı",
        standard: "Standart / Şema",
        reportingYear: "Raporlama Yılı",
        details: "Kapsam Detayları",
      },
      quotePlaceholders: {
        standard: "Örn: ISO 14064-1, ISO 14067, SKDM (CBAM)",
        reportingYear: "Örn: 2025",
        details: "Ne incelenecek, hangi tarihe kadar ve hangi kitle için?",
        email: "Örn: ad@firma.com",
      },
      helper: {
        responseTime: "Tipik geri dönüş süresi: 1–2 iş günü.",
        privacyNote: "Başvuru detaylarını gizli kabul eder, yalnızca inceleme kapsamını belirlemek için kullanırız.",
      },
      cta: {
        title: "Kapsamlı bir teklif mi gerekiyor?",
        body: "Kapsam ve teslim tarihinizi iletin. İnceleme yolu, kanıt beklentileri ve takvimi içeren net bir öneri sunalım; beyan kullanım amacınıza göre hizalayalım.",
        primaryLabel: "Teklif Talep Et",
        secondaryLabel: "Hizmetleri İncele",
      },
    },
  },
  serviceDetail: {
    backToServices: "Hizmetlere dön",
    typicalUse: "Tipik kullanım",
    whatWeDo: "Ne yapıyoruz",
    deliverables: "Çıktılar",
    relatedServicesTitle: "İlgili Hizmetler",
  },
};

