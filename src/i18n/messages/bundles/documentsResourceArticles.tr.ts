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
          "Güvenilirlik; tesisin nasıl çalıştığı ve emisyonların nasıl izlendiğiyle tutarlı bir sınır modeliyle başlar. Ana faaliyet, yardımcı süreçler ve paylaşılan altyapı arasındaki belirsizlik, sık rastlanan düzeltme nedenidir. Kontrollü bir inceleme; sınır anlatımının, veri modelinin ve tesisin fiziksel gerçekliğinin gizli örtüşme veya boşluk olmadan uyumlu olduğunu doğrular.",
      },
      {
        title: "Kanıt derinliği ve izlenebilirlik",
        body:
          "Rakamlar kaynak kayıtlarıyla bağlantılı olmalıdır: uygun olduğunda ölçüm, aksi halde satın alma ve süreç verisi ve tahminlerin kontrollü işlenmesi. İnceleyen taraf; her malzeme ve enerji akışının nasıl yakalandığını, dönüştürüldüğünü ve toplandığını bağımsız biri tarafından tahmin yürütmeden yeniden kurulabilecek bir denetim iziyle görmek ister.",
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
      "Özetle SKDM hazırlığında güvenilirlik tek bir kapak metrisi değil; sınır netliği, izlenebilir kanıt, şeffaf metodoloji ve kontrollü açıklama birlikte oluşturduğu sistem özelliğidir.",
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
          "Metodoloji yalnızca formül değildir; aktivite sınıflandırması, faktör seçimi ve eksik veri işleme için belgelenmiş gerekçedir. Doğrulama ekipleri; seçimlerin dönem boyunca tutarlı olup olmadığını, hassas durumların işaretlenip işaretlenmediğini ve değişikliklerin kontrollü olup olmadığını test eder. Savunulabilir metodoloji, yalnızca tanıdık olanı değil, izlenebilir kararı ifade eder.",
      },
      {
        title: "Paydaş beklentileri ve abartısız iddia",
        body:
          "Yatırımcı, alıcı ve düzenleyici okuyucular genelde farklı vurgu bekler—bütünlük, karşılaştırılabilirlik veya denetime hazırlık. Hizalama; doğrulama amacını bu beklentilere açıkça eşler: hangi iddiaları desteklediğini, hangilerini desteklemediğini ve daha güçlü bir güvence düzeyi veya farklı kullanım için nelerin gerekli olduğunu netleştirir.",
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
    category: "Güvence",
    date: "2026-04-19",
    eyebrow: "Teknik not",
    title: "Sürdürülebilirlik İddialarında Güvence Seviyesi Seçimi",
    intro:
      "Güvence düzeyleri bağımsız uygulayıcının ne kadar çalışma yürüttüğünü ve hangi tür sonuca mesafeli biçimde varılabileceğini gösterir. Yüksek riskli dış kullanım için çok düşük seviye seçmek itibar ve düzenleyici sürtüşmeyi davet eder; kanıt hazırlığı olmadan çok yüksek seçmek ise kaynak israfıdır. Karar kullanım durumu, önemlilik ve kitleye göre verilmeli—alışkanlık veya şablon dile göre değil.",
    sections: [
      {
        title: "Sınırlı güvence ile makul güvence—fark ne",
        body:
          "Sınırlı güvence sorgu ve analitik prosedürler üzerine kurulur; makul güvence yüksek ancak mutlak olmayan bir güven düzeyi için tasarlanmış daha derin kanıt ve testleri ekler. Aralık sermaye piyasaları, tedarik zinciri programları ve raporu birincil kanıt olarak gören kamu açıklamaları için anlamlıdır.",
      },
      {
        title: "Kullanım bağlamı ve karar riski",
        body:
          "Aynı veri seti iç yönetim için sınırlı güvenceyi haklı çıkarırken, ihraç belgesi tarzı bir iddia veya alıcı sertifikasyon kapısı için daha yüksek çubuğu gerektirebilir. Finansal maruziyet, marka etkisi ve düzenleyici ilgiyi haritalamak, kuruluşun gerçek riskine uygun güvence seviyesini netleştirir.",
      },
      {
        title: "Kamu açıklaması ve üçüncü taraf güveni",
        body:
          "Sürdürülebilirlik bilgisi müşteri, kredi veren veya düzenleyici tarafından atıfta bulunulduğunda güven artar. Güvence metni incelenenlerle eşleşmelidir: hangi tesisler, dönemler, metrikler ve sınırlar. Pazarlama dilinin güvence raporuna göre abartılması sık uyuşmazlık kaynağıdır.",
      },
      {
        title: "Çalışma öncesi hazırlık",
        body:
          "Daha yüksek güvence daha güçlü kontroller, daha net dokümantasyon ve çoğu zaman daha fazla zaman ister. Önce seviye seçip kanıtı sonradan uyduran kuruluşlar temiz sonuç almakta zorlanır. Veri soy ağacı, kontrol tasarımı ve yönetişim sahipliği disiplinli bir hazırlık görünümü hem verimli güvenceyi hem inandırıcı dış iletişimi destekler.",
      },
    ],
    closing:
      "Güvence seviyesi bilinçli bir açıklama stratejisinin parçası olarak seçilir: ne söylenmeli, kime, hangi inceleme altında—ve bu duruşu kanıt mimarisi gerçekten taşıyabilir mi.",
  },
};
