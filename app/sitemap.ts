import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.fitflowrx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/treatments/tirzepatide",
    "/treatments/semaglutide",
    "/how-it-works",
    "/about",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
