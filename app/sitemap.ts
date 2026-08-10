import type { MetadataRoute } from "next";
import { projects } from "./components/portfolio-data";
import { siteUrl } from "./seo";

const staticRoutes = ["/", "/about"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticRoutes,
    ...projects.flatMap((project) => (project.href ? [project.href] : [])),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/about" ? 0.7 : 0.8,
  }));
}
