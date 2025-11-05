export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://menaraweb.vercel.app/sitemap.xml",
  };
}
