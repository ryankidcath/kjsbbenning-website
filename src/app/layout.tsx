import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import GlobalNavbar from "./components/GlobalNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KJSB Benning dan Rekan | Jasa Pengukuran dan Pemetaan Tanah Cirebon",
  description:
    "KJSB Benning dan Rekan menyediakan layanan pengukuran tanah, Peta Bidang Tanah (PBT), pemetaan topografi, foto udara drone, GIS, dan konsultasi pertanahan di Cirebon.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    siteName: "KJSB Benning dan Rekan",
  },
  applicationName: "KJSB Benning dan Rekan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KJSB Benning dan Rekan",
    url: "https://kjsbbenning.id",
  };

  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <GlobalNavbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
