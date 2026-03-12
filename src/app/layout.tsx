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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalNavbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
