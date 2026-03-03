import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
    {
        url: "https://skodik-nabytek.cz",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
    },
];
}