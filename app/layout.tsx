import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { SITE } from "@/constants/site";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: `${SITE.name} | ${SITE.title}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AzanKhanDev",
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-US": SITE.url,
    },
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
      jobTitle: SITE.title,
      email: SITE.email,
      description: SITE.description,
      sameAs: ["https://github.com/HafizAzan", "https://www.linkedin.com/in/azan-ahmed-khan-6126ba3b7/", "https://www.instagram.com/azan_khan.26"],
      knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Full Stack Development", "SaaS Platforms"],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
      },
    },
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="PStbG5iF1qiiaCRtKejAwuheaKw6XKfo3pcB0AhOE44" />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
