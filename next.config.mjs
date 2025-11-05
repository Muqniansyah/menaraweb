/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)", // berlaku untuk semua route
        headers: [
          // HSTS
          {
            key: "Strict-Transport-Security",
            value: "max-age=15552000; includeSubDomains; preload",
          },
          // Menghilangkan referer sensitif
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Cegah MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Cegah penyematan iframe oleh domain lain
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Batasi fitur browser (Permissions Policy)
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), vr=()",
          },
          // Content Security Policy (Penting!)
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net;
              img-src 'self' data: blob: https:;
              font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com;
              connect-src 'self' https://www.google-analytics.com;
              frame-ancestors 'self';
            `.replace(/\s{2,}/g, " "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
