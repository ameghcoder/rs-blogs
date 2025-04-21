import { DefaultSeoProps } from "next-seo";

const siteConfig = {
  title: "My Blog",
  description: "A personal blog built with Next.js",
  url: "https://myblog.com", // Replace with your actual domain
  siteName: "My Blog",
  twitterHandle: "@yourusername", // Replace with your Twitter handle
  locale: "en_US",
  type: "website",
};

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: `%s | ${siteConfig.title}`,
  defaultTitle: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`, // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
};
