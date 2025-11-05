import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.css"; //file CSS global
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Geist dan Geist_Mono adalah font bawaan dari Next.js (Google Fonts).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata ini digunakan untuk SEO dan tag <head> otomatis oleh Next.js.
export const metadata = {
  title:
    "Menara Bekasi | Legalitas Ekspor Kayu: Panduan Lengkap Dokumen, Perizinan, dan Sertifikasi SVLK",
  description:
    "Pelajari panduan lengkap legalitas ekspor kayu di Indonesia. Ketahui dokumen, izin, dan sertifikasi SVLK yang wajib dipenuhi agar ekspor kamu sah dan berkelanjutan.",
  icons: {
    icon: "/images/logo.png",
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
    },
  ],
  verification: {
    google: "vmcHQ8G9ervQgGmZyGjt12V4MyZwzSjyipkAnykNCIM", // ✅ GSC
  },
};

// Root Layout — struktur dasar semua halaman.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* children = semua isi dari halaman (misalnya isi dari page.js). */}
        {/* ✅ Google Analytics */}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
