export default function sitemap() {
  return [
    {
      url: "https://menaraweb.vercel.app/",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
