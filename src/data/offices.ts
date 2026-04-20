export type Office = {
  id: "tr" | "nl";
  name: string;
  addressLines: string[];
  email?: string;
  phone?: string;
  country: string;
};

export const offices: Office[] = [
  {
    id: "nl",
    name: "Meva Global Certification B.V.",
    addressLines: ["Newtonlaan 115", "3584 BH Utrecht", "Netherlands"],
    email: "info@mevaglobalcertification.com",
    phone: "+90 530 665 10 77",
    country: "Netherlands",
  },
  {
    id: "tr",
    name: "Meva Global",
    addressLines: [
      "İşçi Blokları Mah. Muhsin Yazıcıoğlu Cad. No: 45 A",
      "Çankaya / Ankara",
      "Türkiye",
    ],
    email: "info@mevaglobalcertification.com",
    phone: "+90 530 665 10 77",
    country: "Türkiye",
  },
];

