// import css
import "../css/langkahSection.css";

export default function Langkah() {
  return (
    <section className="langkah-section">
      <div className="langkah-container">
        <h2>🧭 Langkah-Langkah Mengurus Legalitas Ekspor Kayu</h2>
        <p className="langkah-intro">
          Proses mengurus legalitas ekspor kayu mungkin terlihat rumit di awal,
          tapi jika dilakukan dengan langkah yang benar, semuanya bisa berjalan
          lancar.
        </p>

        <div className="langkah-steps">
          <div className="langkah-step">
            <span className="step-icon">🔐</span>
            <p>
              Pastikan sumber bahan baku memiliki izin resmi dari Kementerian
              Lingkungan Hidup dan Kehutanan (KLHK).
            </p>
          </div>
          <div className="langkah-step">
            <span className="step-icon">🏬</span>
            <p>
              Daftarkan perusahaan ke sistem OSS (Online Single Submission)
              untuk mendapatkan NIB dan perizinan dasar.
            </p>
          </div>
          <div className="langkah-step">
            <span className="step-icon">🤳</span>
            <p>
              Ajukan permohonan sertifikasi SVLK melalui lembaga verifikasi yang
              terakreditasi.
            </p>
          </div>
          <div className="langkah-step">
            <span className="step-icon">📝</span>
            <p>
              Lengkapi seluruh dokumen ekspor seperti invoice, PEB, dan SKA
              sesuai ketentuan bea cukai.
            </p>
          </div>
          <div className="langkah-step">
            <span className="step-icon">🚚</span>
            <p>
              Pastikan prosedur pengiriman sesuai standar ekspor internasional
              agar produk diterima tanpa hambatan.
            </p>
          </div>
        </div>

        <div className="langkah-cta">
          <h3>🤝 Butuh Bantuan dalam Proses Legalitas Ekspor Kayu?</h3>
          <p>
            <strong>PT Menara Bekasi</strong> siap menjadi mitra terpercaya
            dalam layanan ekspor kayu.
            <br />
            Kami membantu mulai dari konsultasi dokumen, proses sertifikasi
            SVLK, hingga pengiriman ekspor yang sesuai dengan peraturan nasional
            dan internasional.
          </p>
          <div className="cta-contact">
            <p>
              📞 Hubungi kami untuk panduan profesional dan layanan ekspor yang
              legal dan tepercaya.
            </p>
            <p>✉️sales@menarabekasilestari.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
