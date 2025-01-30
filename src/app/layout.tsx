import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "LYS Metaverse | Growth Hacking e Consultoria Estratégica",
  description: "Consultoria estratégica especializada em lançamento e growth hacking de marcas. Transformando pequenas marcas em negócios escaláveis.",
  keywords: ["growth hacking", "consultoria estratégica", "marketing digital", "lançamento de marcas"],
  authors: [{ name: "LYS Metaverse" }],
  openGraph: {
    title: "LYS Metaverse | Growth Hacking e Consultoria Estratégica",
    description: "Consultoria estratégica especializada em lançamento e growth hacking de marcas.",
    url: "https://lysmetaverse.com",
    siteName: "LYS Metaverse",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
