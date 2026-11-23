import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/portfolio", "/about", "/contact", "/privacy"].map((p) => ({ url: `${site.url}${p}${p ? "/" : ""}` }));
}
