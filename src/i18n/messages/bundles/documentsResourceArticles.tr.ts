import type { ResourceArticleDetail } from "@/i18n/types";
import type { ResourceArticleSlug } from "@/data/resourceArticleSlugs";

export const documentsResourceArticlesTr: Record<ResourceArticleSlug, ResourceArticleDetail> = {
  "cbam-reliable-emissions-data": {
    category: "SKDM",
    date: "2026-04-19",
    eyebrow: "Teknik not",
    title: "SKDM Hazırlığında “Güvenilir Emisyon Verisi” Ne Anlama Gelir?",
    intro:
      "SKDM ile ilişkili açıklamalarda “güvenilir” bir slogan değildir; kurulumun gerçeğiyle örtüşen sınırlar, kanıtlara bağlanabilen aktivite verisi, açıkça yazılmış faktör ve varsayımlar ile gümrük ve ticari karşı tarafların incelemesine dayanabilecek bir raporlama yapısı anlamına gelir. Aşağıdaki bölümler, bir beyanın savunulabilir kabul edilmeden önce bu özelliklerin nasıl test edildiğini özetler.",
    sections: [
      {
        title: "Sınırlar ve tesis mantığı",
        body:
          "Güvenilirlik; tesisin nasıl çalıştığı ve emisyonların nasıl izlendiğiyle tutarlı bir sınır modeliyle başlar. Ana faaliyet, yardımcı süreçler ve paylaşılan altyapı arasındaki belirsizlik, sık rastlanan düzeltme nedenidir. Yapılandırılmış teknik inceleme; sınır anlatımının, veri modelinin ve tesisin fiziksel gerçekliğinin gizli örtüşme veya boşluk olmadan uyumlu olduğunu doğrular.",
      },
      {
        title: "Kanıt derinliği ve izlenebilirlik",
        body:
          "Rakamlar kaynak kayıtlarıyla bağlantılı olmalıdır: uygun olduğunda ölçüm, aksi halde satın alma ve süreç verisi ve tahminlerin disiplinli işlenmesi. İnceleyen taraf; her malzeme ve enerji akışının nasıl yakalandığını, dönüştürüldüğünü ve toplandığını bağımsız biri tarafından tahmin yürütmeden yeniden kurulabilecek bir denetim iziyle görmek ister.",
      },
      {
        title: "Metodoloji, faktörler ve varsayımlar",
        body:
          "Varsayılan faktörler, ülkeye özgü değerler ve tesis ölçümlerinin her biri kullanım koşulları taşır. Güvenilirlik; faktör seçiminin belgeli, dönemler arası tutarlı (değişim gerekçelendirilmiş) ve tanımlanan sistem sınırlarıyla uyumlu olmasını gerektirir. Varsayımlar görünür olmalı; sonuca etkisi ve savunulabilir alternatiflere duyarlılık açıkça tartışılmalıdır.",
      },
      {
        title: "Dış kullanım için açıklama disiplini",
        body:
          "Son olarak güvenilirlik dil disiplinini içerir: neyin doğrulandığı veya modellediği, tasarım gereği nelerin dışarıda bırakıldığı ve tedarik ile uyum okuyucuları için belirsizliğin nasıl iletildiği. Aritmetik doğru olsa bile kapsam sınırlarını saklayan bir beyan, paydaş testlerinde başarısız olur.",
      },
    ],
    closing:
      "Özetle SKDM hazırlığında güvenilirlik tek bir kapak metrisi değil; sınır netliği, izlenebilir kanıt, şeffaf metodoloji ve ölçülü açıklama birlikte oluşturduğu sistem özelliğidir.",
  },
  "carbon-verification-alignment": {
    category: "Karbon",
    date: "2026-04-19",
    eyebrow: "Teknik not",
    title: "Karbon Doğrulamada Kapsam, Metodoloji ve Paydaş Beklentileri",
    intro:
      "Karbon doğrulama; kapsam, metodoloji ve okuyucu beklentileri ayrıştığında sessizce zayıflar: teknik dosya eksiksiz görünürken dışarıya dönük anlatım hâlâ itiraza açık kalabilir. Güçlü süreçler; kanıt testleri yoğunlaşmadan önce nelerin kapsamda olduğunu, hangi standardın ve yöntemin geçerli olduğunu ve dış okuyucunun ne gördüğünü tek çerçevede hizalar.",
    sections: [
      {
        title: "Kapsam sözleşme gibi ele alınır",
        body:
          "Kapsam yalnızca bir sınır şeması değildir; kurumsal ve operasyonel limitleri, raporlama dönemlerini ve tahminin rolünü sabitler. Kapsam örtük bırakıldığında inceleyenler ve paydaşlar boşlukları kendi varsayımlarıyla doldurur. İyi hazırlık; kapsamı yazılı tanımlar, veri yapılarına bağlar ve yorum için önemli istisnaları açıkça belirtir.",
      },
      {
        title: "Metodoloji karar kaydıdır",
        body:
          "Metodoloji yalnızca formül değildir; aktivite sınıflandırması, faktör seçimi ve eksik veri işleme için belgelenmiş gerekçedir. Doğrulama ekipleri; seçimlerin dönem boyunca tutarlı olup olmadığını, hassas durumların işaretlenip işaretlenmediğini ve değişikliklerin disiplinli biçimde yönetilip yönetilmediğini test eder. Savunulabilir metodoloji, yalnızca tanıdık olanı değil, izlenebilir kararı ifade eder.",
      },
      {
        title: "Paydaş beklentileri ve abartısız iddia",
        body:
          "Yatırımcı, alıcı ve düzenleyici okuyucular genelde farklı vurgu bekler—bütünlük, karşılaştırılabilirlik veya denetime hazırlık. Hizalama; doğrulama amacını bu beklentilere açıkça eşler: hangi iddiaları desteklediğini, hangilerini desteklemediğini ve daha derin bir bağımsız inceleme düzeyi veya farklı kullanım için nelerin gerekli olduğunu netleştirir.",
      },
      {
        title: "Bütünlüğü koruyan kontrol noktaları",
        body:
          "İyi tasarlanmış mutabakatlar, yüksek etkili akışlarda bağımsız kontroller ve metodoloji değişikliklerinde onay gibi kontrol noktaları geç sürpriz riskini azaltır. Sorunlar dış itirazda değil, iç gözden geçirmede erken yüzeye çıkar.",
      },
    ],
    closing:
      "Kapsam, metodoloji ve beklentiler tek tutarlı çerçevede birleştiğinde doğrulama, sonradan “neler dahil edilmeliydi” tartışması değil o çerçevenin yapılandırılmış testine dönüşür.",
  },
  "epd-lca-critical-weaknesses": {
    category: "EPD / LCA",
    date: "2026-04-19",
    eyebrow: "Teknik not",
    title: "EPD ve LCA Kritik İncelemede Sık Görülen Zayıf Alanlar",
    intro:
      "EPD ve LCA çalışmalarında kritik inceleme süs amaçlı bir kapı değildir; metodolojik seçimlerin dış denetimle buluştuğu yerdir. Programlar ve ürün kategorileri arasında tekrar eden temalar vardır: belirsiz hedef ve kapsam, yüksek etkili aşamalarda kırılgan veri, tahsis kısayolları ve modeli aşan yorum. Bu örüntüleri erken görmek yeniden işi azaltır ve yayın kalitesini korur.",
    sections: [
      {
        title: "Amaç, kapsam ve fonksiyonel birim",
        body:
          "Zayıf çalışmalar karşılaştırılabilirlik iddia ederken tarafsız okuyucunun kabul edeceği bir fonksiyonel birim sunmayabilir. Kritik inceleme; birimin çalışmanın iddia ettiği soruya uyup uymadığını ve ürün gerçek pazar bağlamına konduğunda sistem sınırlarının hâlâ anlamlı olup olmadığını sınar.",
      },
      {
        title: "Veri kalitesi ve ön plan izlenebilirliği",
        body:
          "Arka plan veri tabanları gereklidir; ön plan veri kalitesi sıklıkla inandırıcılığı belirler. İnceleme; temsil zaman pencerelerini, tedarikçiye özgü ile genel veriyi ve aykırı değer işlemeyi odağa alır. En büyük kütle veya enerji akışlarında ince bir kanıt izi yaygın bir bulgudur.",
      },
      {
        title: "Tahsis ve çok işlevlilik",
        body:
          "Modelleme için uygun ama teknik olarak zayıf gerekçelendirilmiş tahsis kuralları sık zayıflıktır. Kritik inceleme; tahsisin PCR’nin gerektirdiği fiziksel nedensellik veya ekonomik ilişkileri yansıtıp yansıtmadığını ve savunulabilir alternatif tahsislerin sonuçları kökten değiştirip değiştirmediğini sorgular.",
      },
      {
        title: "Senaryolar, yorum ve raporlama tutarlılığı",
        body:
          "Senaryo tanımları yeniden üretilebilir olmalı; sonuç tabloları anlatı iddialarıyla uyumlu olmalıdır. Yuvarlamada tutarsızlık, kurallar olmadan senaryo değiştirme veya modelden daha geniş sonuçlar ima eden dil tipik bulgulardır.",
      },
    ],
    closing:
      "Güçlü kritik inceleme sonuçları tabloları cilalamaktan çok; kamusal paydaşlara ulaşmadan önce hedef ve kapsamdan veriye ve yoruma giden mantıksal zinciri sıkılaştırmaya bağlıdır.",
  },
  "sustainability-assurance-levels": {
    category: "Teknik İnceleme",
    date: "2026-04-19",
    eyebrow: "Teknik not",
    title: "Sürdürülebilirlik İddialarında İnceleme Derinliği Seçimi",
    intro:
      "Bağımsız inceleme düzeyleri (ör. limited assurance ile reasonable assurance); uygulayıcının kanıt derinliğini ve ifade edilebilecek sonuç türünü çerçeveler. Yüksek riskli dış kullanımda yüzeysel bir paket itibar ve düzenleyici sürtüşme riskini artırır; kanıt altyapısı olmadan aşırı iddialı bir paket ise kaynak kaybına yol açar. Seviye; kullanım durumu, önemlilik ve paydaş beklentilerine göre seçilmeli—şablona veya pazarlama diline göre değil.",
    sections: [
      {
        title: "Limited assurance ile reasonable assurance",
        body:
          "Limited assurance (sınırlı bağımsız inceleme) sorgu ve analitik prosedürlerle sınırlı kanıt derinliğini ifade eder. Reasonable assurance (makul düzeyde bağımsız inceleme) daha derin test ve kanıt genişliği hedefler; mutlak kesinlik değildir. Aralık sermaye piyasaları, tedarik zinciri programları ve raporu birincil kanıt olarak kullanan kamu açıklamalarında bu ayrım pratikte belirleyicidir.",
      },
      {
        title: "Kullanım bağlamı ve karar riski",
        body:
          "Aynı veri seti iç yönetim için sınırlı paketi gerektirirken; ihraç belgesi tarzı bir iddia veya alıcı sertifikasyon kapısı daha derin kanıt ve kontrol olgunluğu isteyebilir. Finansal maruziyet, marka etkisi ve düzenleyici ilgiyi haritalamak, kuruluşun gerçek riskine uygun inceleme derinliğini netleştirir.",
      },
      {
        title: "Kamu açıklaması ve üçüncü taraf güveni",
        body:
          "Sürdürülebilirlik bilgisi müşteri, kredi veren veya düzenleyici tarafından atıfta bulunulduğunda güven artar. Yayımlanan inceleme metni ile operasyonel gerçeklik uyumlu olmalıdır: hangi tesisler, dönemler, metrikler ve sınırlar. Pazarlama dilinin teknik çıktıya göre abartılması sık uyuşmazlık kaynağıdır.",
      },
      {
        title: "Çalışma öncesi hazırlık",
        body:
          "Daha derin bağımsız inceleme daha güçlü kontroller, daha net dokümantasyon ve çoğu zaman daha fazla zaman ister. Önce seviye seçip kanıtı sonradan uyduran kuruluşlar temiz sonuç almakta zorlanır. Veri soy ağacı, kontrol tasarımı ve yönetişim sahipliği disiplinli bir hazırlık görünümü hem verimli süreci hem inandırıcı dış iletişimi destekler.",
      },
    ],
    closing:
      "İnceleme derinliği bilinçli bir açıklama stratejisinin parçası olarak seçilir: ne söylenmeli, kime, hangi teknik çerçevede—ve bu duruşu kanıt mimarisi gerçekten taşıyabilir mi.",
  },
};
