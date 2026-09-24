import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Azan Ahmed Khan | Full Stack Developer & Software Engineer",
  description:
    "Azan Ahmed Khan is a full stack developer building modern web apps, SaaS products, APIs, and scalable digital experiences with Next.js, React, TypeScript, and Node.js.",
  keywords: [
    "Azan Ahmed Khan portfolio",
    "Full Stack Developer Pakistan",
    "Software Engineer Portfolio",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js engineer",
    "SaaS developer",
    "Frontend developer",
    "Backend developer",
    "Web application developer",
    "Modern portfolio website",
  ],
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-US": SITE.url,
    },
  },
  openGraph: {
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
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
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${SITE.name} | ${SITE.title}`,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    url: SITE.url,
  },
  publisher: {
    "@type": "Person",
    name: SITE.name,
  },
  mainEntity: {
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    url: SITE.url,
    knowsAbout: ["Full Stack Development", "Next.js", "React", "TypeScript", "Node.js", "SaaS Product Development", "Modern Web Applications"],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <HomePage />
    </>
  );
}
