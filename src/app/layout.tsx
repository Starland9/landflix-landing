import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://starland9.github.io/landflix-landing";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LandFlix – Votre passerelle vers l'univers du streaming",
    template: "%s | LandFlix",
  },
  description:
    "Découvrez LandFlix, l'application multiplateforme pour explorer, télécharger et suivre vos films et séries préférés avec une expérience moderne et intuitive.",
  keywords: [
    "LandFlix",
    "streaming",
    "films",
    "séries",
    "téléchargement",
    "Flutter",
    "multiplateforme",
  ],
  authors: [
    { name: "Landry (Starland9)", url: "https://github.com/Starland9" },
  ],
  openGraph: {
    title: "LandFlix – Votre passerelle vers l'univers du streaming",
    description:
      "Profitez de LandFlix sur toutes vos plateformes : découvrez, téléchargez et organisez vos contenus favoris avec style.",
    url: siteUrl,
    siteName: "LandFlix",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LandFlix – Univers du streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LandFlix – Votre passerelle vers l'univers du streaming",
    description:
      "Application multiplateforme moderne pour découvrir et télécharger vos films et séries préférés.",
    images: [`${siteUrl}/twitter-card.jpg`],
    creator: "@Starland9",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B5DFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
