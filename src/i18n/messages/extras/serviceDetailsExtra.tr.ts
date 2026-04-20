import type { Dictionary } from "../../types";

type Detail = Dictionary["pages"]["serviceDetails"][keyof Dictionary["pages"]["serviceDetails"]];

export const serviceDetailsExtraTr: Record<
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
    eyebrow: "Hizmetler",
    title: "GHG Protocol İnceleme Desteği",
    intro:
      "GHG Protocol ile hazırlanan sera gazı envanterleri ve ilgili açıklamaların güvenilirliği; yalnızca toplam emisyon sonuçlarına değil, aynı zamanda organizasyonel sınırların netliğine, kapsam seçiminin tutarlılığına, kategori yaklaşımının doğruluğuna, hesaplama mantığının savunulabilirliğine ve destekleyici kayıt yapısının izlenebilirliğine bağlıdır. Meva Global, GHG Protocol çerçevesinde hazırlanan envanter ve raporlar için bağımsız ve yapılandırılmış bir teknik inceleme desteği sunar. Bu hizmet, raporlama seviyenize ve dış kullanım bağlamınıza göre veri yapısının, metodolojik tercihlerin ve kanıt altyapısının sistematik biçimde gözden geçirilmesine yardımcı olur.",
    sections: [
      {
        title: "Hizmetin Kapsamı",
        body: "Bu hizmet kapsamında organizasyonel sınırlar, operasyonel yaklaşım, konsolidasyon mantığı, raporlama kapsamı, ilgili sera gazı kategorileri ve hesaplama çerçevesi teknik açıdan değerlendirilir. Grup veya tesis düzeyindeki envanter yapısı, veri akışları, emisyon faktörü seçimleri ve kullanılan metodolojik tercihlerin GHG Protocol beklentileriyle ne ölçüde uyumlu olduğu birlikte ele alınır. Amaç yalnızca mevcut tabloyu gözden geçirmek değil, raporlamanın dış kullanıma ne kadar hazır olduğunu ve hangi alanlarda güçlendirme gerektiğini netleştirmektir.",
      },
      {
        title: "İnceleme Odağı",
        body: "İnceleme sürecinde sınır tanımı, kapsam seçimi, değer zinciri kategorileri, aktivite verileri, hesaplama mantığı, emisyon faktörleri, belge izi ve iç kontrol yapısı bir bütün olarak değerlendirilir. Gerekli görülen alanlarda örnekleme, yeniden hesaplama, veri eşleştirme ve destekleyici dokümantasyon taraması yapılır. Böylece yalnızca raporlanan emisyon sonucu değil, bu sonucun hangi metodolojik tercihlerle oluşturulduğu ve ne ölçüde savunulabildiği de görünür hale gelir.",
      },
      {
        title: "Neden Önemlidir",
        body: "GHG Protocol temelli sera gazı verileri; yatırımcı iletişiminde, müşteri taleplerinde, tedarik zinciri değerlendirmelerinde, gönüllü raporlama çerçevelerinde ve resmi doğrulama hazırlığında giderek daha önemli hale gelmektedir. İyi yapılandırılmış bir inceleme süreci, iç hesaplamalar ile dışa dönük açıklamalar arasındaki tutarsızlık riskini azaltır, izlenebilirliği güçlendirir ve sonraki doğrulama veya inceleme adımlarına daha sağlam bir zemin hazırlar. Aynı zamanda veri kalitesi, dokümantasyon disiplini ve raporlama olgunluğu açısından kuruluşlara daha net bir yol haritası sunar.",
      },
      {
        title: "Meva Yaklaşımı",
        body: "Meva Global bu hizmeti; açık kapsam tanımı, metodoloji odaklı teknik değerlendirme, izlenebilir kanıt yapısı ve bağımsız inceleme mantığı üzerine kurar. Yaklaşımımız yalnızca eksik listesi çıkarmakla sınırlı değildir; hangi raporlama tercihlerinin güçlü olduğunu, hangi alanlarda boşluk bulunduğunu ve hangi iyileştirmelerin açıklama güvenilirliğini artıracağını net biçimde ortaya koyar. Bu sayede kuruluşlar hem mevcut envanter ve raporlarını daha savunulabilir hale getirir hem de resmi doğrulama, üçüncü taraf inceleme veya dış paydaş iletişimi için daha güçlü bir hazırlık düzeyi kazanır.",
      },
    ],
    bottomCta:
      "Organizasyonel sınırlarınızı, raporlama yılınızı, kapsamdaki kategorileri ve mevcut hesaplama yapınızı paylaşın; açıklama bağlamınıza uygun inceleme derinliğini birlikte netleştirelim.",
    primaryButton: "Teklif Talep Et",
    secondaryButton: "Hizmetlere Dön",
    detailLink: "Detaylar",
  },
  "eu-ets-mrv-assurance-support": {
    title: "AB ETS ve MRV — Güvence Desteği",
    intro:
      "AB ETS kapsamında izleme, raporlama ve doğrulama (MRV) veri setleri için bağımsız, güvence odaklı teknik inceleme—metodoloji makullüğü, kanıt izlenebilirliği ve dokümantasyon disiplinine odaklanır. Yetkili merci kararlarının veya zorunlu doğrulayıcı rollerinin yerine geçmez.",
    covers: {
      title: "Kapsam",
      bullets: [
        "İzleme planı mantığı, emisyon kaynağı kapsanı ve uygun olduğunda seviye seçimleri",
        "Önemli akışlar için veri yolları, ölçüm ve tahmin yaklaşımları",
        "Raporlanan rakamlar ile temel kayıtlar arasında çapraz kontroller",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "MRV beyanlarını ve gemi düzeyinde yakıt verilerini hazırlayan tesisler ve denizcilik operatörleri",
        "Metal, çimento gibi enerji yoğun sektörlerde tesis kanıt paketini sıkılaştıran ekipler",
        "Tesis verisi, kalibrasyon kayıtları ve olağandışı olay dokümantasyonunu koordine eden yapılar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Yüksek etkili parametreler ve destekleyici dokümantasyon üzerinde risk temelli örnekleme",
        "Uygun olduğunda tahsis, biyokütle payları ve hesaplama zincirleri üzerinde makullük kontrolleri",
        "Harici başvuru veya inceleme dönemlerinden önce önceliklendirilmiş kapatma aksiyonları içeren bulgu kaydı",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "MRV hataları ve zayıf izlenebilirlik uyum ve itibar riskini artırır",
        "Güçlü kanıt yapısı doğrulayıcılar ve iç onay süreçleriyle diyalogu hızlandırır",
        "Operasyonel veriyi düzenleyici ve şema beklentileriyle uyumlu hale getirir",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Kapsam; tesis veya filo segmenti, raporlama dönemi ve ilgili kural setine bağlanır",
        "Bağımsız değerlendirici bakış açısı: varsayımları sorgulama, izlenebilirliği doğrulama",
        "Çıktılarda kontrollü dil—güvence desteği, zorunlu doğrulamanın yerine geçmez",
      ],
    },
    cta: {
      title: "MRV bağlamınızı paylaşın",
      body: "Tesis veya filo kapsamı, uygulanabilir izleme yaklaşımı ve raporlama son tarihini iletin. Risk ve zamanlamaya uygun inceleme derinliğini hizalayalım.",
    },
  },
  "shipping-emissions-mrv-review": {
    title: "Denizcilik Emisyonları — MRV İnceleme Desteği",
    intro:
      "AB MRV ve ilgili raporlama bağlamları için gemi ve filo düzeyinde emisyon verilerine yönelik teknik inceleme desteği—seyahat veri kalitesi, yakıt dengesi makullüğü ve dış incelemeye dayanıklı dokümantasyon ön plandadır.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Raporlamaya dahil edilen seyahatler, yakıt türleri ve dönemler için sınır kontrolleri",
        "Birden fazla yakıtın geçerli olduğu durumlarda yakıt tüketimi, emisyon faktörleri ve tahsis makullüğü",
        "Operasyonel kayıtlardan raporlanan toplamlara dokümantasyon izi",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Öğle raporları, bunker teslim notları ve BDN kanıtını birleştiren gemi işletmecileri ve yöneticileri",
        "Filolarını düzenleyici şablonlarla hizalayan teknik müdürlükler",
        "Sefain veya otoriteler için güvenceye hazır dosya hazırlayan kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Temsilî seyahatler ve yakıt akışları arasında örnekleme",
        "Mevcut olduğunda birincil kayıtlarla raporlanan verinin çapraz kontrolü",
        "Eksik kanıt, belirsiz tahsis veya zayıf yönetişim noktaları için boşluk listesi",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Denizcilik veri hataları düzenleyiciler ve ticari taraflarca görünür",
        "Güçlü izlenebilirlik time charter ve alıcı güvenini destekler",
        "Raporlama son tarihlerinden önce son dakika düzeltme ihtiyacını azaltır",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Derin örneklemeden önce filo ve seyahat düzeyinde risk taraması",
        "Yalnızca nihai toplamlar değil, verinin nasıl üretildiğine pratik odak",
        "Sınırlılıkları açıkça belirten inceleme desteği olarak çerçevelenmiş çıktılar",
      ],
    },
    cta: {
      title: "Filo raporlama kapsamını paylaşın",
      body: "Gemi listesi, raporlama yılı, yakıt türleri ve mevcut veri derleme yönteminizi paylaşın. Örnekleme mantığı ve kanıt beklentilerini önerelim.",
    },
  },
  "aviation-emissions-readiness-review": {
    title: "Havacılık Emisyonları — Hazırlık İncelemesi (CORSIA / AB ETS)",
    intro:
      "CORSIA ve/veya AB ETS yükümlülüklerinin geçerli olabileceği havacılık emisyon izleme ve raporlama için hazırlık odaklı teknik inceleme—şema parametreleri, veri yönetişimi ve kanıt yapısına odaklanır. Resmi şema akreditasyonu veya onayı değildir.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Operasyonunuz için hangi şema unsurlarının tetiklenebileceğine yönelik üst düzey haritalama",
        "Yakıt, faaliyet ve tahsis yaklaşımları için tipik dış inceleme beklentilerine yönelik kontroller",
        "Harici inceleme beklentilerine karşı boşluk tanımlama",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Şema raporlaması için yakıt ve uçuş verilerini birleştiren havayolları ve operatörler",
        "Uçuş operasyonları, yakıt satın alma ve sürdürülebilirlik raporlaması arasında köprü kuran ekipler",
        "Zorunlu doğrulama döngülerinden önce yapılandırılmış hazırlık arayan kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "İşletme modelinize göre yapılandırılmış anket ve doküman incelemesi",
        "Önemli hatlar, yakıt türleri veya veri arayüzleri üzerinde hedefli örnekleme",
        "Resmi doğrulama sonucunu abartmadan öncelikli aksiyonlar içeren hazırlık notu",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Şema raporlaması kanıt yoğun; zayıf dosyalar bulgu ve gecikme getirir",
        "Net hazırlık doğrulayıcılar ve iç onaylarla sürtüşmeyi azaltır",
        "Hazırlık düzeyi konusunda iç ve dış iletişimi doğru konumlandırır",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Talep ettiğiniz CORSIA ve AB ETS hazırlık konularının açık ayrımı",
        "Hukuki yorumun yerine geçmez—teknik izlenebilirlik ve dokümantasyona odak",
        "Durum ve sonraki adımlar için ölçülü, profesyonel dil",
      ],
    },
    cta: {
      title: "Operasyonel bağlamı netleştirin",
      body: "Filo profili, değerlendirilen şemalar ve raporlama zaman çizelgesini paylaşın. Risk profilinize uygun hazırlık incelemesi kapsamı önerelim.",
    },
  },
  "verification-readiness-gap-analysis": {
    title: "Doğrulama Hazırlığı ve Boşluk Analizi",
    intro:
      "Resmi incelemeye henüz hazır olmayan kuruluşlar için yapılandırılmış ön-doğrulama hizmeti—sınırlar, yöntemler, veri ve dokümantasyondaki boşlukları önceliklendirerek tam doğrulamadan önce verimli kapatma imkânı sunar.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Hedeflediğiniz standart veya programa (ör. ISO 14064-1, PCF, EPD kuralları) karşı hızlı tanı",
        "Yüksek riskli boşluklar: eksik kayıtlar, belirsiz tahsis, zayıf kontroller",
        "Yol haritası: iyileştirme işleri ve kanıt toplama sıralaması",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Dağınık sistemlerden kanıt paketi oluşturan ilk kez doğrulama müşterileri",
        "Tarihsel veri sürekliliğini bozan M&A veya sistem değişiklikleri sonrası ekipler",
        "İç denetim bulguları sonrası dışa dönük boşluk görüşüne ihtiyaç duyan kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Başlangıç çalıştayı ve doküman alım kontrol listesi",
        "Sınır, metodoloji ve veri mimarisi üzerinde hedefli oturumlar",
        "Önem dereceli yazılı boşluk kaydı ve önerilen sorumlular",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Büyük boşluklarla resmi doğrulama zaman ve bütçe kaybettirir",
        "Erken görünürlük dış incelemede sürprizleri azaltır",
        "Teknik, IT ve sürdürülebilirlik ekiplerini tek kanıt modelinde hizalar",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Sonuç tanılayıcıdır—doğrulama beyanı değildir",
        "Pragmatik önceliklendirme: düzeltilmesi şart olanlar vs. iyi olur düzeyi",
        "İsteğe bağlı takip desteği ayrı kapsamda",
      ],
    },
    cta: {
      title: "Kapsamlı tanı ile başlayın",
      body: "Hedef standart, raporlama yılı ve mevcut veri ortamınızı anlatın. Boşluk analizi derinliği ve süresi için öneri sunalım.",
    },
  },
  "data-evidence-readiness-review": {
    title: "Veri ve Kanıt Hazırlığı İncelemesi",
    intro:
      "Emisyon, çevresel ve sürdürülebilirlik verilerinin nasıl üretildiği, dönüştürüldüğü ve saklandığına odaklı inceleme—ham kanıttan raporlanan rakamlara izlenebilirlik. Doğrulama, güvence veya büyük açıklamalardan önce uygundur.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Veri soyut çizgisi: sistemler, tablolar, sayaçlar ve manuel girdiler",
        "Kontrol noktaları: onaylar, sürümleme, değişiklik kayıtları ve erişim yönetişimi",
        "Yapmayı planladığınız iddialar için örnekleme stratejisinin uygunluğu",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Dağınık tesisleri ve heterojen ERP çıktıları olan imalat grupları",
        "Yeni karbon muhasebe araçları veya ETL hatları devreye alan ekipler",
        "Veri kalitesi ve dokümantasyon konusunda alıcı denetimleriyle karşılaşan kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Süreç yürüyüşü ve tek nokta arıza tespiti",
        "Seçilen önemli veri akışlarında uçtan uca testler",
        "Kanıt paketlerini ve üst veriyi güçlendirme önerileri",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Doğrulama, kanıttan iddiaya zincir kadar güçlüdür",
        "Veri yönetişimi boşlukları sık bulgu kökenidir",
        "Yıldan yıla raporlamada tekrarlanabilirliği artırır",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "IT, operasyon ve sürdürülebilirlik liderleriyle işbirlikçi oturumlar",
        "Kapsamlı IT sertifikasyonu değil—önemli akışlara risk temelli odak",
        "Ayrıca kararlaştırılmadıkça resmi ISAE tarzı güvencenin yerine geçmez",
      ],
    },
    cta: {
      title: "Kanıt zincirinizi haritalayın",
      body: "Raporlama sınırı, ana sistemleriniz ve örnek dönemi paylaşın. Açıklama yolunuza göre incelemeyi uyarlayalım.",
    },
  },
  "dpp-readiness-preverification": {
    title: "Dijital Ürün Pasaportu — Veri Hazırlığı ve Ön-Doğrulama",
    intro:
      "Dijital Ürün Pasaportu (DPP) beklentileri için çevresel ve izlenebilirlik odaklı verilerin yapılandırılmasına yönelik ileri görüşlü teknik destem—veri kalitesi, tanımlayıcılar ve kapsamı netleştirilmiş iddialar. Kararlaştırılmış kapsamın ötesinde pasaportun “doğrulandığı” izlenimini vermeyecek şekilde konumlandırılır.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Hangi PCF, malzeme ve uyum alanlarını açmayı planladığınıza dair veri öznitelik haritalaması",
        "Menşe dokümantasyonu ve varyantlar ile veri setleri arası bağlantı kontrolleri",
        "Pasaport bağlamında güncelleme, düzeltme ve sürüm kontrolü yönetişimi",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "AB pazarı kategorileri için DPP pilotu yürüten üreticiler",
        "Tedarikçileri, LCA ekiplerini ve IT platformlarını koordine eden markalar",
        "Mevcut EPD / PCF çalışmalarıyla pasaport verisini hizalayan ekipler",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Düzenleyici beklentilerin anlık görüntüsü ve planlanan pasaport kapsamı üzerine atölye",
        "Örnek SKU düzeyinde veri paketleri incelemesi",
        "Sonraki bağımsız incelemenin test edeceği unsurlarla uyumlu ön-doğrulama kontrol listesi",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Pasaport verisi alıcı ve otorite incelemesine açık—zayıf halkalar hızlı ortaya çıkar",
        "Erken yapılandırma kurallar kesildiğinde maliyetli yeniden işi önler",
        "Yeşil yıkamadan kaçınarak ürün düzeyinde savunulabilir anlatıyı destekler",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Düzenleme bilincine sahip; hukuki danışmanlık değil—teknik savunulabilirlik odağı",
        "Ön-doğrulamanın neyi sertifikalayıp neyi sertifikalamadığı açık ifade",
        "Uygun olduğunda mevcut ISO uyumlu çevresel çalışmalarla entegrasyon",
      ],
    },
    cta: {
      title: "Pilotinizi tanımlayın",
      body: "Ürün kategorisi, pazarlar ve mevcut çevresel veri setlerinizi paylaşın. Hazırlık yol haritası önerelim.",
    },
  },
  "sustainability-reporting-evidence-review": {
    title: "Sürdürülebilirlik Raporlaması — Kanıt İncelemesi",
    intro:
      "Sürdürülebilirlik raporları, ekler ve seçili KPI açıklamaları için yapılandırılmış kanıt incelemesi—anlatı iddiaları ile temel hesaplamalar arasında tutarlılığı destekler. Aksi açıkça kararlaştırılmadıkça yasal güvence sunmaz.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Yayımlanan rakamlar ile çalışma kitapları veya üçüncü taraf veriler arasında çapraz kontroller",
        "Önemli olduğu ölçüde karbon, enerji, su ve atık metriklerinde nokta kontrolleri",
        "Narratif uyum: desteksiz ünlem ve aşırı kesinlikten kaçınma",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Entegre veya bağımsız sürdürülebilirlik raporu hazırlayan halka açık ve büyük özel şirketler",
        "CSRD tarzı beklentileri eski raporlama süreçleriyle köprüleyen ekipler",
        "Dışa dönük teknik incelemeye ihtiyaç duyan iletişim ve sürdürülebilirlik liderleri",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Test edilecek metrik ve iddiaların önemlilik temelli seçimi",
        "Dokümante bulgular ve yönetim yanıtları",
        "İsteğe bağlı, açıkça sınırlı güven notu dili",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Paydaşlar anlatıyı rakamlarla karşılaştırır—tutarsızlık güveni zedeler",
        "Disiplinli dil ve kanıt ile yeşil yıkama riskini azaltır",
        "İstenirse sonraki daha derin güvence döngülerine hazırlık",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Kapsamda metrikler, kanıt türleri ve örnekleme yaklaşımını yazılı protokol",
        "İletişim onayından ayrı bağımsız inceleyici disiplini",
        "Yasal denetim görüşü değil—sınırlar şeffaf",
      ],
    },
    cta: {
      title: "Raporunuzla kapsamı hizalayın",
      body: "Taslak metrik tablosu, destek dosyaları ve yayın zaman çizelgesini paylaşın. Sınırlı inceleme planı önerelim.",
    },
  },
  "f-gases-reporting-review": {
    title: "F-Gaz Raporlaması — İnceleme Desteği",
    intro:
      "Florlu gaz (F-gaz) raporlama bağlamları için teknik veri ve dokümantasyon incelemesi—tamlık, metodoloji makullüğü ve düzenleyici veya iç uyum dosyaları için izlenebilirlik. Hukuki uyum onayının yerine geçmez.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Uygun olduğunda ekipman envanterleri, dolum kayıtları ve sızıntı varsayımları",
        "Satın alınan miktarlar, servis kayıtları ve raporlanan emisyonlar arasında çapraz kontroller",
        "Denetim tarzı inceleme için dokümantasyon",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Önemli HVAC/R ve ısı pompası filolarına sahip endüstriyel tesisler",
        "Bakım yüklenicileri ve soğutucu satın alma verilerini koordine eden ekipler",
        "F-gaz verisini daha geniş sera gazı envanteri beyanlarıyla hizalayan kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Yüksek dolumlu ekipman ve önemli satın alma akışları arasında örnekleme",
        "Emisyon faktörü kullanımı ve birim tutarlılığı üzerinde makullük kontrolleri",
        "İyileştirme yönlendirmesi içeren bulgu kaydı",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "F-gaz emisyonları düzenlenir ve kurumsal raporlamada giderek daha görünür",
        "Zayıf kayıtlar uyum riski ve envanter tutarsızlığı yaratır",
        "Bakım gerçeği ile raporlanan rakamlar arasında uyumu destekler",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Ekipman envanteriniz ve gerçek veri kullanılabilirliğinize dayalı",
        "Mühendislik veya hukuki uzmanlık gerektiğinde açık iletişim",
        "Düzenleyici temsil değil—teknik inceleme olarak çerçevelenmiş çıktılar",
      ],
    },
    cta: {
      title: "Ekipman baz çizgisini paylaşın",
      body: "Envanter kapsamı, soğutucu türleri ve raporlama dönemini iletin. Örnekleme ve kanıt beklentilerini kapsamlandıralım.",
    },
  },
  "buyer-value-chain-review": {
    title: "Alıcı ve Değer Zinciri İnceleme Desteği",
    intro:
      "Müşteri talepleri, tedarik zinciri beklentileri ve ikinci taraf inceleme ihtiyaçları için uyarlanmış teknik değerlendirme modeli—uygun olduğunda özel kriterler, örnekleme mantığı ve kararlaştırılmış dokümante sonuçlar. Genel sertifikasyon şemalarının yerine geçmez; kapsam ve kriterler yazılı olarak netleştirilir.",
    covers: {
      title: "Kapsam",
      bullets: [
        "KPI’lar, kanıt türleri, geçer/kalır veya dereceli sonuçlar için kriter tasarımı",
        "Kararlaştırıldığı gibi tesisler, ürünler veya sevkiyat partileri arasında tedarikçi kanıt incelemesi",
        "Satın alma kurulları ve tedarikçi geliştirme programları için raporlama formatları",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Tedarikçilerinden tutarlı sera gazı ve çevresel kanıt isteyen endüstriyel alıcılar",
        "Denetim tarzı takip ile dekarbonizasyon programı yürüten OEM’ler",
        "Sektör düzeyinde inceleme şablonları koordine eden sektör kuruluşları",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Tedarikçi alt kümesinde pilot, ardından ölçekli yayılım",
        "Tedarikçilerin kanıt beklentilerini anlaması için kalibrasyon oturumları",
        "Trend raporlamalı üç aylık veya yıllık inceleme döngüleri",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Değer zinciri veri kalitesi ürün iddialarında en zayıf halka olabilir",
        "Bağımsız yapı adaleti artırır ve anlaşmazlığı azaltır",
        "Tek seferlik denetimlerin ötesinde tekrarlanabilir bir yönetişim modeli oluşturur",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Önce yönetişim: kriterler, çıkar çatışması ve eskalasyon yolları yazılı tanımlanır",
        "İzlenebilir bulgularla kanıta dayalı test",
        "Çıktılar genellikle iç veya kontrollü dış kullanıma göre hizalanır",
      ],
    },
    cta: {
      title: "Program kriterlerini tasarlayın",
      body: "Alıcı hedeflerinizi, tedarikçi evren büyüklüğünü ve risk iştahını paylaşın. İnceleme modeli ve pilot kapsamı önerelim.",
    },
  },
  "iso-14068-readiness-review": {
    heroEyebrow: "Karbon nötrlüğü ve net-sıfır beyanı",
    title: "ISO 14068 — Karbon Nötrlüğü Ve Net-Sıfır Doğrulaması",
    intro:
      "Karbon nötrlüğü ve net-sıfır beyanlarının güvenilirliği; yalnızca bildirilen emisyon sonuçlarına değil, aynı zamanda kapsam tanımına, azaltım stratejisinin tutarlılığına, dengeleme yaklaşımının uygunluğuna ve destekleyici kanıt yapısının açıklığına bağlıdır. Meva Global, ISO 14068 ile ilişkili karbon nötrlüğü ve net-sıfır beyanları için bağımsız ve yapılandırılmış bir teknik doğrulama yaklaşımı sunar. Bu hizmet; emisyon sınırlarının, azaltım mantığının, kullanılan destek mekanizmalarının ve ilgili beyan altyapısının sistematik biçimde değerlendirilmesi yoluyla açıklamaların güvenilirliğini ve savunulabilirliğini güçlendirir.",
    covers: {
      title: "Hizmet Kapsamı",
      bullets: [
        "Beyan sınırları, emisyon kapsamı, baz yıl ve performans yaklaşımı, azaltım stratejisi, geçiş mantığı ve varsa dengeleme unsurları",
        "Metodolojik çerçeve, veri yapısı ve temel varsayımlar; karbon nötrlüğü veya net-sıfır iddiasını bir bütün olarak",
        "Yalnızca ifadeyi gözden geçirmek değil; teknik ve kanıta dayalı zemini netleştirmek",
      ],
    },
    forWho: {
      title: "Kimler İçin",
      bullets: [
        "Karbon nötrlüğü ve net-sıfır iletişimini yürüten kurumsal sürdürülebilirlik ve üst yönetim ekipleri",
        "Yatırımcı ve uluslararası beklentilere uygun iklim beyanı hedefleyen organizasyonlar",
        "Beyan kapsamı, azaltım yolu ve dengeleme unsurlarını tek çizgide tutmak isteyen ekipler",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Emisyon kapsamı, veri kaynakları, miktarlandırma, azaltım yolunun mantığı, dengeleme rolü, belge izi ve açıklama dili birlikte",
        "Gerektiğinde örnekleme, kayıt eşleştirme, metodoloji kontrolü ve kanıt incelemesi",
        "Beyanın kendisi ile oluşturulma biçimi ve desteklenebilirlik derecesi",
      ],
    },
    whyMatters: {
      title: "Neden Önemli",
      bullets: [
        "Bu beyanlar müşteri iletişimi, sürdürülebilirlik raporu, yatırımcı incelemesi ve küresel paydaş beklentilerinde belirleyici",
        "Yapılandırılmış doğrulama güveni artırır; yanlış yorum ve itibar riskini düşürür; açıklama disiplinini güçlendirir",
        "Veri yönetişimi, geçiş planları ve olgun raporlama yapıları için daha sağlam temel",
      ],
    },
    approach: {
      title: "Meva Yaklaşımı",
      bullets: [
        "Metodoloji odaklı teknik değerlendirme, izlenebilir kanıt yapısı ve bağımsız karar disiplini",
        "Yalnızca metin değil; kapsam netliği, azaltım tutarlılığı, destek mekanizmaları ve veri akışı birlikte",
        "Güncel açıklamayı güçlü zeminde sunma ve sonraki dönemler için dayanıklı iklim beyanı altyapısı",
      ],
    },
    cta: {
      title: "",
      body: "Beyan kapsamınızı, raporlama yaklaşımınızı ve mevcut kanıt yapınızı paylaşın; size uygun doğrulama kapsamını ve inceleme beklentilerini birlikte netleştirelim.",
      primaryButton: "Teklif Talep Et",
      secondaryButton: "Hizmetlere Dön",
      detailLink: "Detaylar",
    },
  },
  "mock-verification-review": {
    title: "Ön Doğrulama Simülasyonu",
    intro:
      "Resmi doğrulama öncesinde denetime hazırlık düzeyini görmek amacıyla sınırlı kapsamlı bağımsız inceleme ve prova değerlendirmesi—formal doğrulama beyanı olmadan seçilen önemli akışlarda doğrulama tarzı inceleme.",
    covers: {
      title: "Kapsam",
      bullets: [
        "Öncelikli veri setleri, kontroller ve hesaplama adımlarında örnekleme tarzı test",
        "Formal beyan olmadan doğrulama çıktılarına benzer yapılandırılmış bulgular",
        "Asıl süreç öncesi boşlukları kapatmak için önceliklendirilmiş iyileştirme aksiyonları",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "İlk kez doğrulama yapan ekipler ve karmaşık çok tesisli kuruluşlar",
        "Tam döngüye bağlanmadan önce güvence isteyen yönetimler",
        "Sürprize yer bırakmayan sıkı açıklama takvimleri olan durumlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Önemli emisyon kaynakları veya ürün hatlarında kararlaştırılmış örnekleme planı",
        "Yönetişim ve kayıt tutma üzerine görüşme tarzı kontroller",
        "Önem dereceli mock bulgular notu",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Resmi doğrulama sırasında sürprizler maliyetli ve itibara zarar vericidir",
        "Ekibin kanıt beklentilerine alışmasını sağlar",
        "Nihai kanıt dosyasının kalitesini artırır",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Şeffaf kapsam: mock inceleme formal doğrulamanın yerine geçmez",
        "Güvence ilkeleriyle uyumlu bağımsız inceleme disiplini",
        "Uyumluluk gösterisinden çok öğrenmeye ayarlı çıktılar",
      ],
    },
    cta: {
      title: "Stres test etmek istediğiniz alanı tanımlayın",
      body: "İncelemek istediğiniz sistemleri, tesisleri veya ürünleri ve hedef doğrulama pencerenizi paylaşın. Örnekleme derinliği ve zaman çizelgesi önerelim.",
    },
  },
  "green-claim-review": {
    title: "Çevresel Beyan ve Green Claim İncelemesi",
    intro:
      "Çevresel iddiaların, ürün beyanlarının ve iletişim dilinin kanıt yeterliliği, sınır dili ve aşırı beyan riski odağında bağımsız teknik inceleme—yayın veya alıcı paylaşımı öncesinde.",
    covers: {
      title: "Kapsam",
      bullets: [
        "İddiaların altındaki çalışmalara, envanterlere ve sertifikalara eşleme",
        "Sınır dili, karşılaştırma ifadeleri ve üstünlük tonu üzerinde kontroller",
        "Belirttiğiniz ana pazarlarda greenwashing maruziyeti için risk notları",
      ],
    },
    forWho: {
      title: "Kimler için",
      bullets: [
        "Ambalaj, veri sayfası ve kampanya hazırlayan pazarlama ve ürün ekipleri",
        "Kamu dilini doğrulanmış kanıtla hizalamak isteyen sürdürülebilirlik ekipleri",
        "Bağımsız teknik okuma arayan hukuk/uyum ekipleri",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Seçilen kanallar ve SKU’lar genelinde iddia envanteri",
        "Belirtilen sınırlara karşı kanıt yeterliliği incelemesi",
        "Önerilen ifade güvenceleri ve eskalasyon maddeleri",
      ],
    },
    whyMatters: {
      title: "Neden önemli",
      bullets: [
        "Düzenleyiciler ve alıcılar çevresel mesajlara giderek daha çok itiraz ediyor",
        "Uyumsuz dil, aksi halde güvenilir teknik çalışmayı zayıflatabilir",
        "Erken inceleme geri çağırma ve itibar riskini azaltır",
      ],
    },
    approach: {
      title: "Meva yaklaşımı",
      bullets: [
        "Teknik inceleme; hukuki tavsiye değil—gerektiğinde roller net ayrılır",
        "Pazarlama yorumu yerine kanıt öncelikli inceleme ve açık sınırlamalar",
        "Çapraz fonksiyonel onaya uygun pragmatik çıktılar",
      ],
    },
    cta: {
      title: "Taslak iddiaları ve kanıt referanslarını gönderin",
      body: "İddia setini, hedef kitlenizi ve destekleyici çalışma veya doğrulama referanslarını paylaşın. Orantılı bir inceleme kapsamı önerelim.",
    },
  },
};
