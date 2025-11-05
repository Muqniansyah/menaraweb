import "../css/header.css";
import "../css/footer.css";
// import komponen
import LegalitasSection from "@/components/legalitas";
import DokumenSection from "@/components/dokumen";
import SvlkSection from "@/components/svlk";
import LangkahSection from "@/components/langkah";
import FaqSection from "@/components/faq";
import SwiperSection from "@/components/swiper";

export default function BlogPage() {
  return (
    // Simbol <></> di React (termasuk di Next.js) disebut React Fragment
    <>
      {/* ===== Hero Section ===== */}
      <section className="hero-full">
        <div className="hero-image-vertical">
          <img src="/images/menara.jpeg" alt="Legalitas Ekspor Kayu" />
        </div>

        <div className="hero-text">
          <p className="tagline">#EKSPORKAYULEGAL</p>
          <h1>
            Panduan Legalitas Ekspor Kayu <br />
            <span className="highlight">
              Dokumen, Perizinan, dan Sertifikasi SVLK
            </span>
          </h1>
          <p className="subtitle">
            Pahami langkah-langkah memastikan ekspor kayu Anda sah, sesuai hukum
            Indonesia, dan diterima di pasar internasional.
          </p>

          <a
            href="https://menarabekasilestari.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Lihat Selengkapnya →
          </a>
        </div>
      </section>

      {/* ===== Legalitas Section ===== */}
      <LegalitasSection />

      {/* ===== Dokumen Section ===== */}
      <DokumenSection />

      {/* ===== SVLK Section ===== */}
      <SvlkSection />

      {/* ===== Langkah Section ===== */}
      <LangkahSection />

      {/* ===== Faq Section ===== */}
      <FaqSection />

      {/* ===== Swiper Section ===== */}
      <SwiperSection />

      {/* ✅ Website Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
                  {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Menara Bekasi",
                    "url": "https://menaraweb.vercel.app/",
                    "description": "Panduan lengkap legalitas ekspor kayu, dokumen, perizinan, dan sertifikasi SVLK.",
                    "publisher": {
                      "@type": "Organization",
                      "name": "PT Menara Bekasi",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://menaraweb.vercel.app/images/logo.png"
                      }
                    }
                  }
                  `,
        }}
      />

      {/* ✅ FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
                    {
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": [
                        {
                          "@type": "Question",
                          "name": "Apa itu SVLK?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SVLK adalah Sistem Verifikasi Legalitas Kayu yang memastikan kayu berasal dari sumber legal dan dikelola secara lestari."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Mengapa SVLK penting dalam ekspor kayu?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Karena SVLK merupakan syarat legalitas wajib agar kayu dapat diterima di pasar internasional, termasuk Uni Eropa."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Apa dokumen dasar untuk ekspor kayu?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Minimal harus memiliki NIB, RIPH bila diperlukan, dokumen penjualan, sertifikat SVLK, dan PEB melalui sistem INSW."
                          }
                        }
                      ]
                    }
                    `,
        }}
      />

      {/* ===== Footer ===== */}
      <footer className="site-footer">
        <div className="footer-container">
          {/* <!-- Brand --> */}
          <div className="footer-brand">
            <img
              src="/images/logo.png"
              alt="Logo PT Menara Bekasi"
              className="footer-logo"
            />
            <p>
              PT Menara Bekasi. Mitra ekspor kayu terpercaya yang memastikan
              setiap proses legalitas, sertifikasi, dan pengiriman berjalan
              lancar serta sesuai regulasi.
            </p>
          </div>

          {/* <!-- Social Share --> */}
          <div className="footer-social">
            <h4>Bagikan Halaman Ini</h4>
            <div className="share-bar">
              {/* <!-- Facebook --> */}
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://blogmenara.pages.dev/"
                title="Bagikan ke Facebook"
                className="share-btn fb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter (X) --> */}
              <a
                href="https://twitter.com/intent/tweet?url=https://blogmenara.pages.dev/&text=Panduan%20Lengkap%20Legalitas%20Ekspor%20Kayu%20di%20Indonesia"
                title="Bagikan ke Twitter"
                className="share-btn tw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* <!-- LinkedIn --> */}
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://blogmenara.pages.dev/"
                title="Bagikan ke LinkedIn"
                className="share-btn in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* <!-- WhatsApp --> */}
              <a
                href="https://api.whatsapp.com/send?text=Yuk%20baca%20panduan%20lengkap%20legalitas%20ekspor%20kayu%20di%20Indonesia!%20https://blogmenara.pages.dev/"
                title="Bagikan ke WhatsApp"
                className="share-btn wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>

              {/* <!-- Email --> */}
              <a
                href="mailto:?subject=Panduan%20Legalitas%20Ekspor%20Kayu&body=Yuk%20baca%20panduan%20lengkap%20legalitas%20ekspor%20kayu%20di%20Indonesia:%20https://blogmenara.pages.dev/"
                title="Bagikan lewat Email"
                className="share-btn em"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 PT Menara Bekasi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
