import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { OrganizationJsonLd } from "@/components/site/OrganizationJsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mevaglobalcertification.com"),
  themeColor: "#005691",
  title: {
    default: "Meva Global Certification",
    template: "%s | Meva Global Certification",
  },
  description: "Independent verification, validation and technical review services.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Meva Global Certification",
    title: "Meva Global Certification",
    description: "Independent verification, validation and technical review services.",
    url: "/",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Meva Global Certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meva Global Certification",
    description: "Independent verification, validation and technical review services.",
    images: ["/icon.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
