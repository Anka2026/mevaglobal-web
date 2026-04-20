import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
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
  icons: {
    icon: "/icon",
  },
  title: {
    default: "Meva Global Certification B.V.",
    template: "%s | Meva Global Certification B.V.",
  },
  description:
    "Independent verification, validation and assurance body for carbon, environmental claims and CBAM-related reporting contexts—delivered through structured technical review and evidence discipline.",
  metadataBase: new URL("https://mevaglobalcertification.com"),
  openGraph: {
    type: "website",
    siteName: "Meva Global Certification B.V.",
    title: "Meva Global Certification B.V.",
    description:
      "Independent verification, validation and assurance body for carbon, environmental claims and CBAM-related reporting contexts—delivered through structured technical review and evidence discipline.",
    url: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
