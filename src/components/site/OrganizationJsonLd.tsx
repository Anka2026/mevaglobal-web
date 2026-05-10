const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meva Global Certification",
  url: "https://mevaglobalcertification.com",
  logo: "https://mevaglobalcertification.com/icon.png",
  email: "info@mevaglobalcertification.com",
  sameAs: ["https://www.linkedin.com/company/meva-global-certification/"],
} as const;

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
