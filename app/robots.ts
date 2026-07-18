import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.fitflowrx.com/sitemap.xml",
  };
}
Same steps: create new file, name it app/robots.ts, paste, commit.
