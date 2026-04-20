import { standardServiceDetail } from "./serviceDetailStandardStub";

const lab = {
  covers: "Kapsam",
  forWho: "Kimler için",
  typicalScope: "İncelemenin Odak Noktaları",
  whyMatters: "Neden önemli",
  approach: "Meva yaklaşımı",
};

/** Paylaşılan, premium tonlu bölüm metinleri — hizmete özgü giriş üstte verilir. */
const B = {
  covers: [
    "Raporlama sınırı, yöntem seçimi ve kullanım amacına göre yapılandırılmış teknik değerlendirme.",
    "Kanıt dosyaları, kayıt düzeni ve hesaplama izinin tutarlılığı.",
    "Bulgular bağımsız inceleme çıktıları olarak çerçevelenir; sınırlılıklar açıkça belirtilir.",
  ],
  forWho: [
    "Dış paydaş beklentisi yüksek kurumsal ve teknik ekipler",
    "Doğrulama, güvence veya üçüncü taraf incelemesine hazırlanan kuruluşlar",
    "Sürdürülebilirlik, finans ve operasyonlar arasında tutarlılık arayan yönetim yapıları",
  ],
  typicalScope: [
    "Örneklemeye dayalı kayıt ve veri kontrolleri",
    "Önem ve etkiye göre önceliklendirilmiş bulgular",
    "Kapanış ve iyileştirme için net öneriler",
  ],
  whyMatters: [
    "Zayıf kanıt yapısı güven ve ticari itibar riskini artırır",
    "Erken düzeltme, ileri aşama doğrulama ve denetim yükünü azaltır",
    "Savunulabilir açıklamalar için metodoloji ve veri disiplinini güçlendirir",
  ],
  approach: [
    "Kapsam; standart, süre ve iletişim kanallarıyla birlikte netleştirilir",
    "Şablon kontrol listesi yerine kanıta dayalı sorgulama",
    "Bağımsız incelemenin bağlamınızda ne sonuçlandırabileceği konusunda ölçülü dil",
  ],
} as const;

const ctaBody =
  "Kapsamınızı, zaman çizelgenizi ve mevcut dosyalarınızı paylaşın; uygun inceleme derinliğini birlikte belirleyelim.";

function mk(title: string, intro: string, ctaTitle: string) {
  return standardServiceDetail(title, intro, { ...lab, ctaTitle }, B, ctaBody);
}

export const newServiceDetailsTr = {
  "product-carbon-footprint-review": mk(
    "Ürün Karbon Ayak İzi Doğrulaması",
    "PCF modellerinde sıcak noktalar, veri soyut çizgisi ve müşteriye dönük sunum üzerine yapılandırılmış doğrulama; gerektiğinde ISO 14067 beklentileriyle hizalanır, program yönetişiminin yerini almaz.",
    "PCF modelinizi paylaşın",
  ),
  "hpd-review": {
    heroEyebrow: "Hizmetler",
    title: "HPD (Health Product Declaration) Doğrulama İncelemesi",
    intro:
      "HPD beyanlarının güvenilirliği; yalnızca içerik listesinin yayımlanmasına değil, aynı zamanda bileşen verilerinin doğruluğuna, açıklama sınırlarının netliğine, tehlike iletişiminin tutarlılığına, destekleyici kanıt yapısının yeterliliğine ve dış kullanıma esas beyan dilinin kontrollü biçimde kurulmasına bağlıdır. Meva Global, HPD çerçevesiyle ilişkili içerik şeffaflığı ve sağlık odaklı ürün beyanları için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; içerik verilerinin, destekleyici teknik dokümantasyonun, tedarikçi kaynaklarının ve açıklama mantığının sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha kontrollü ve daha profesyonel bir beyan zemini oluşturur.",
    covers: {
      title: "Hizmetin Kapsamı",
      bullets: [
        "HPD kapsamında açıklanan içerik verileri, bileşen yapısı ve destekleyici dokümantasyonun değerlendirilmesi",
        "Tedarikçi kaynakları, beyan sınırları, veri kalitesi ve içerik şeffaflığı yaklaşımının gözden geçirilmesi",
        "Dış kullanıma esas HPD açıklama çerçevesinin doğrulama açısından incelenmesi",
      ],
    },
    forWho: {
      title: "Kimler İçin",
      bullets: [
        "HPD beyanlarını daha güvenilir ve daha profesyonel biçimde sunmak isteyen üreticiler",
        "İçerik şeffaflığı, malzeme sağlığı ve sağlık odaklı ürün açıklamalarını güçlendirmek isteyen ekipler",
        "Tedarikçi verilerini ve destekleyici kanıt yapısını daha kontrollü hale getirmek isteyen kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "İçerik verileri, bileşen açıklamaları ve beyan sınırlarında makullük değerlendirmesi",
        "Tedarikçi bilgileri, destekleyici belgeler ve açıklama mantığı üzerinde örnekleme",
        "Dış kullanıma sunulacak HPD beyanlarının açıklık, tutarlılık ve kanıt gücü açısından teknik kontrolü",
      ],
    },
    whyMatters: {
      title: "Neden Önemlidir",
      bullets: [
        "HPD beyanlarının güvenilirliğini ve savunulabilirliğini güçlendirir",
        "Eksik içerik açıklaması, zayıf kanıt yapısı ve açıklama riski kaynaklı sorunları azaltır",
        "Alıcı beklentileri, ürün şeffaflığı ve sağlık odaklı iletişim için daha sağlam temel oluşturur",
      ],
    },
    approach: {
      title: "Meva Yaklaşımı",
      bullets: [
        "İçerik verileri, tedarikçi kaynakları ve destekleyici belgeleri birlikte ele alan bağımsız doğrulama incelemesi",
        "Yalnızca açıklanan içeriğe değil, bu açıklamanın hangi veri ve belge yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
        "Kuruluşların mevcut HPD hazırlığını ve açıklama kalitesini güçlendiren profesyonel yaklaşım",
      ],
    },
    cta: {
      title: "",
      body: "Mevcut HPD dosyanızı, içerik verilerinizi ve destekleyici tedarikçi belgelerinizi paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
      primaryButton: "Teklif Talep Et",
      secondaryButton: "Hizmetlere Dön",
      detailLink: "Detaylar",
    },
  },
  "material-health-composition-review": {
    heroEyebrow: "Hizmetler",
    title: "Malzeme Sağlığı ve İçerik Şeffaflığı Doğrulama İncelemesi",
    intro:
      "Malzeme sağlığı ve içerik şeffaflığına ilişkin beyanların güvenilirliği; yalnızca içerik listesinin sunulmasına değil, aynı zamanda bileşen verilerinin doğruluğuna, tehlike iletişiminin açıklığına, destekleyici kanıt yapısının yeterliliğine, kullanılan terminolojinin tutarlılığına ve dış kullanıma esas açıklama çerçevesinin kontrollü olmasına bağlıdır. Meva Global, malzeme sağlığı ve içerik şeffaflığı odaklı teknik beyanlar için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; bileşim verilerinin, destekleyici belgelerin, tehlike iletişimi yaklaşımının ve açıklama mantığının sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha kontrollü ve daha profesyonel bir beyan zemini oluşturur.",
    covers: {
      title: "Hizmetin Kapsamı",
      bullets: [
        "Ürün veya malzemeye ait bileşim verileri, içerik beyanı çerçevesi ve teknik dokümantasyon yapısının değerlendirilmesi",
        "Tehlike iletişimi, madde açıklamaları, destekleyici kayıtlar ve veri kaynaklarının gözden geçirilmesi",
        "Dış kullanıma esas içerik şeffaflığı anlatısının doğrulama açısından incelenmesi",
      ],
    },
    forWho: {
      title: "Kimler İçin",
      bullets: [
        "Malzeme içeriklerini dış paydaşlara daha güvenilir biçimde sunmak isteyen üreticiler",
        "Ürün şeffaflığı, sağlık odaklı içerik açıklamaları ve teknik dosya kalitesini güçlendirmek isteyen ekipler",
        "Malzeme sağlığı beyanlarını daha kontrollü ve daha profesyonel bir yapıya oturtmak isteyen kuruluşlar",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Bileşim verileri, içerik açıklamaları ve tehlike iletişiminde makullük değerlendirmesi",
        "Destekleyici belgeler, tedarikçi verileri ve teknik kayıt yapısında örnekleme",
        "Dış kullanıma yönelik içerik şeffaflığı beyanlarının açıklama dili ve kanıt dosyası üzerinde doğrulama kontrolleri",
      ],
    },
    whyMatters: {
      title: "Neden Önemlidir",
      bullets: [
        "Malzeme sağlığı ve içerik şeffaflığı beyanlarının güvenilirliğini güçlendirir",
        "Teknik itiraz, yanlış yorumlanma ve açıklama riskini azaltır",
        "Alıcı beklentileri, teknik şartnameler ve sağlık odaklı ürün iletişimi için daha sağlam temel oluşturur",
      ],
    },
    approach: {
      title: "Meva Yaklaşımı",
      bullets: [
        "Bileşim verileri, tehlike iletişimi ve destekleyici kanıtları birlikte ele alan bağımsız doğrulama incelemesi",
        "Yalnızca açıklanan içeriğe değil, bu açıklamanın hangi belge ve veri yapısıyla desteklendiğine odaklanan değerlendirme disiplini",
        "Kuruluşların mevcut içerik şeffaflığı beyanlarını güçlendiren ve sonraki teknik beyan süreçlerine katkı sağlayan profesyonel yapı",
      ],
    },
    cta: {
      title: "",
      body: "Mevcut içerik şeffaflığı dokümanlarınızı, bileşim verilerinizi ve destekleyici kayıtlarınızı paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
      primaryButton: "Teklif Talep Et",
      secondaryButton: "Hizmetlere Dön",
      detailLink: "Detaylar",
    },
  },
  "green-building-documentation-review": {
    heroEyebrow: "Hizmetler",
    title: "Yeşil Bina Teknik Dokümantasyon Doğrulama İncelemesi",
    intro:
      "Yeşil bina sertifikasyon süreçlerinde kullanılan teknik dokümantasyonun güvenilirliği; yalnızca sunulan belgelerin varlığına değil, aynı zamanda kapsam bütünlüğüne, kanıt yapısının tutarlılığına, ilgili kredi veya kriterlerle ilişkisinin açıklığına ve destekleyici teknik dosyaların izlenebilirliğine bağlıdır. Meva Global, yeşil bina başvuruları ve ilgili teknik dosyalar için bağımsız ve yapılandırılmış bir doğrulama incelemesi sunar. Bu hizmet; doküman paketlerinin, kanıt kayıtlarının, teknik beyanların ve başvuru mantığının sistematik biçimde değerlendirilmesi yoluyla daha güvenilir, daha kontrollü ve daha profesyonel bir başvuru zemini oluşturur.",
    covers: {
      title: "Hizmetin Kapsamı",
      bullets: [
        "Sertifikasyon başvurusu kapsamında sunulan teknik dokümanların, kanıt paketlerinin ve açıklama çerçevesinin değerlendirilmesi",
        "Kredi veya kriter bazında beyanların, teknik kayıtların ve destekleyici dosyaların gözden geçirilmesi",
        "Başvuru dosyasının bütünlüğü, tutarlılığı ve dış incelemeye uygunluğu açısından doğrulama incelemesi",
      ],
    },
    forWho: {
      title: "Kimler İçin",
      bullets: [
        "Yeşil bina sertifikasyon başvurularını daha güvenilir teknik dosyalarla sunmak isteyen proje ekipleri",
        "Mimarlık, mühendislik, danışmanlık ve yatırım tarafında başvuru kalitesini güçlendirmek isteyen kuruluşlar",
        "Kredi bazlı teknik dosyalarını daha kontrollü, daha izlenebilir ve daha profesyonel hale getirmek isteyen ekipler",
      ],
    },
    typicalScope: {
      title: "İncelemenin Odak Noktaları",
      bullets: [
        "Başvuru dosyalarında kapsam bütünlüğü, belge tutarlılığı ve kriter eşleştirmesinde makullük değerlendirmesi",
        "Teknik çizimler, hesaplamalar, ürün belgeleri ve destekleyici kayıtlar üzerinde örnekleme",
        "Dış incelemeye sunulacak dokümantasyonun açıklık, tutarlılık ve kanıt gücü açısından kontrolü",
      ],
    },
    whyMatters: {
      title: "Neden Önemlidir",
      bullets: [
        "Başvuru dosyalarının güvenilirliğini ve incelemeye hazırlık seviyesini güçlendirir",
        "Eksik belge, tutarsız beyan ve teknik itiraz riskini azaltır",
        "Proje ekipleri, yatırımcılar ve sertifikasyon değerlendirmeleri için daha sağlam bir teknik zemin oluşturur",
      ],
    },
    approach: {
      title: "Meva Yaklaşımı",
      bullets: [
        "Teknik dokümanlar, kanıt paketleri ve başvuru mantığını birlikte ele alan bağımsız doğrulama incelemesi",
        "Yalnızca dosya varlığına değil, bu dosyaların kriterlerle nasıl ilişkilendirildiğine odaklanan değerlendirme disiplini",
        "Projelerin mevcut başvuru paketlerini güçlendiren ve sonraki sertifikasyon süreçlerine katkı sağlayan profesyonel yapı",
      ],
    },
    cta: {
      title: "",
      body: "Mevcut yeşil bina başvuru dosyanızı, teknik kayıtlarınızı ve destekleyici belgelerinizi paylaşın; kullanım bağlamınıza uygun doğrulama kapsamını birlikte netleştirelim.",
      primaryButton: "Teklif Talep Et",
      secondaryButton: "Hizmetlere Dön",
      detailLink: "Detaylar",
    },
  },
  "responsible-mining-irma-readiness": mk(
    "Sorumlu Madencilik Ve IRMA Doğrulama Hazırlığı",
    "Sorumlu madencilik beklentileri için saha kanıtı, yönetişim temaları ve boşluk kapanışı üzerine doğrulama hazırlığı; resmi şema sahibi güvence sonuçlarının yerini almaz.",
    "Saha ve kapsamınızı paylaşın",
  ),
  "textile-traceability-recycled-review": mk(
    "Tekstil İzlenebilirliği Ve Geri Dönüştürülmüş Malzeme Doğrulaması",
    "Tekstil sürdürülebilirlik iddiaları için zincir yapıları, kütle dengesi mantığı ve sertifika çapraz kontrollerinin doğrulanması.",
    "Ürün ve tedarikçi katmanlarınızı paylaşın",
  ),
  "zero-waste-review": mk(
    "Sıfır Atık Doğrulama İncelemesi",
    "Yönlendirme mantığı, geri kazanım kanıtı ve sıfır atık anlatısının operasyonel verilerle uyumu üzerine doğrulama odaklı değerlendirme.",
    "Tesis ve metriklerinizi paylaşın",
  ),
};
