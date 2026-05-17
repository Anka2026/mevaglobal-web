import type { ResourceArticleDetail } from "@/i18n/types";
import type { ResourceArticleSlug } from "@/data/resourceArticleSlugs";

export const documentsResourceArticlesTr: Record<ResourceArticleSlug, ResourceArticleDetail> = {
  "cbam-reliable-emissions-data": {
    category: "SKDM",
    date: "2026-05-17",
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
    date: "2026-05-10",
    eyebrow: "Teknik not",
    title: "Karbon Doğrulamada Kapsam, Metodoloji ve Paydaş Beklentileri",
    intro:
      "Karbon doğrulamasında güvenilirlik; kapsam netliği, metodolojik tutarlılık ve dış okuyucunun neyi gördüğünü anlaması birlikte oluşur. Teknik dosya eksiksiz görünse bile beyan dili, kapsam sınırları veya varsayımlar zayıfsa inceleme kolayca itiraza açık hale gelir. Bu not; bağımsız teknik inceleme öncesinde bu üç katmanın nasıl birlikte yapılandırılması gerektiğini özetler.",
    sections: [
      {
        title: "Kapsam ve sınırların netleştirilmesi",
        body:
          "Kapsam; organizasyonel ve operasyonel sınırları, raporlama dönemini ve tahminin nerede devreye girdiğini yazılı olarak sabitler. Sınır şeması tek başına yeterli değildir—veri modeli, tesis listesi ve dışlanan faaliyetlerin gerekçesi aynı dosyada okunabilir olmalıdır. Net kapsam; inceleyenin boşlukları kendi varsayımlarıyla doldurmasını engeller ve beyanın hangi iddiayı taşıdığını görünür kılar.",
      },
      {
        title: "Metodolojik tutarlılık ve varsayım yönetimi",
        body:
          "Metodoloji; formüllerden ibaret değil, aktivite sınıflandırması, emisyon faktörü seçimi ve eksik veri işleme için belgelenmiş karar setidir. Dönemler arası tutarlılık, hassas kalemlerin işaretlenmesi ve metodoloji değişikliklerinin kontrollü yönetimi teknik incelemenin merkezindedir. Varsayımlar gizlenmemeli; etkileri ve makul alternatiflere duyarlılık açıkça tartışılmalıdır.",
      },
      {
        title: "Paydaş beklentileri ve beyan güvenilirliği",
        body:
          "Yatırımcı, alıcı ve düzenleyici okuyucular farklı vurgu bekleyebilir: bütünlük, karşılaştırılabilirlik veya denetime hazırlık. Doğrulama amacı bu beklentilere açıkça bağlanmalı; hangi sonuçların desteklendiği, hangi sınırlamaların geçerli olduğu ve daha derin inceleme için ne gerektiği net yazılmalıdır. Abartılı iddia dili, teknik dosyanın taşıdığı kanıt derinliğini aşmamalıdır.",
      },
      {
        title: "Bulguların izlenebilir kayıtlarla desteklenmesi",
        body:
          "Mutabakatlar, yüksek etkili akışlarda bağımsız kontroller ve metodoloji değişikliklerinde onay adımları; bulguların kayıtlarla desteklenmesini güçlendirir. İyi yapılandırılmış teknik dosya; çalışma kağıtları, kaynak veri bağlantıları ve karar izini bir arada sunar. Böylece sorunlar dış itirazda değil, iç gözden geçirmede erken aşamada görünür hale gelir.",
      },
    ],
    closing:
      "Kapsam, metodoloji ve paydaş beklentileri tek tutarlı çerçevede tanımlandığında doğrulama; sonradan tartışılan bir kapsam meselesi değil, o çerçevenin kanıt temelli ve belgelenmiş testine dönüşür.",
  },
  "epd-lca-critical-weaknesses": {
    category: "EPD / LCA",
    date: "2026-04-28",
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
    date: "2026-04-15",
    eyebrow: "Teknik not",
    title: "Sürdürülebilirlik İddialarında İnceleme Derinliği Seçimi",
    intro:
      "Bağımsız inceleme düzeyleri; kanıt derinliği, yöntem kontrolleri ve ifade edilebilecek sonuç türünü çerçeveler. Seviye; kullanım bağlamı, karar riski ve paydaş beklentilerine göre seçilmelidir—şablona veya pazarlama diline göre değil.",
    sections: [
      {
        title: "Limited assurance ile reasonable assurance arasındaki fark",
        body:
          "Limited assurance ile reasonable assurance arasındaki fark yalnızca güvence seviyesi değildir; veri derinliği, kanıt kapsamı, yöntem kontrolleri ve paydaş beklentileri açısından farklı inceleme yoğunlukları gerektirir. Sınırlı inceleme sorgu ve analitik prosedürlerle sınırlı kanıt derinliğini ifade eder; makul düzeyde inceleme daha geniş test ve kanıt genişliği hedefler—mutlak kesinlik değildir.",
      },
      {
        title: "Kullanım bağlamı ve karar riski",
        body:
          "Kullanım bağlamı ve karar riski, hangi inceleme derinliğinin uygun olduğunu belirleyen temel unsurlardır. Aynı veri seti iç yönetim için daha hafif bir paketi gerektirirken; ihraç belgesi tarzı bir iddia veya alıcı kapısı daha derin kanıt ve kontrol olgunluğu isteyebilir. Finansal maruziyet, marka etkisi ve düzenleyici ilgi birlikte okunmalıdır.",
      },
      {
        title: "Kamu açıklaması ve üçüncü taraf güveni",
        body:
          "Kamu açıklaması ve üçüncü taraf güveni söz konusu olduğunda, beyanın kapsamı, metodolojisi ve kanıt seti daha güçlü bir teknik dosya yapısıyla desteklenmelidir. Yayımlanan inceleme metni ile operasyonel gerçeklik uyumlu olmalıdır: hangi tesisler, dönemler, metrikler ve sınırlar kapsam dahilindedir. Pazarlama dilinin teknik çıktıya göre abartılması sık uyuşmazlık kaynağıdır.",
      },
      {
        title: "Çalışma öncesi hazırlık",
        body:
          "Çalışma öncesi hazırlık; veri sahipliği, metodoloji kayıtları, sınır tanımları ve doğrulanabilir kanıtların düzenli hale getirilmesini kapsar. Daha derin bağımsız inceleme daha güçlü kontroller, daha net dokümantasyon ve çoğu zaman daha fazla zaman ister. Önce seviye seçip kanıtı sonradan uyduran kuruluşlar tutarlı sonuç almakta zorlanır.",
      },
    ],
    closing:
      "İnceleme derinliği bilinçli bir açıklama stratejisinin parçası olarak seçilir: ne söylenmeli, kime, hangi teknik çerçevede—ve bu duruşu kanıt mimarisi gerçekten taşıyabilir mi.",
  },
};
