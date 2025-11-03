import "../css/header.css";
import "../css/legalSection.css";
import "../css/dokumenSection.css";
import "../css/svlkSection.css";
import "../css/langkahSection.css";
import "../css/faqSection.css";
import "../css/footer.css";

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

          <a href="#artikel" className="cta-btn">
            Baca Selengkapnya →
          </a>
        </div>
      </section>

      {/* ===== Legalitas Section ===== */}
      <section id="legalitas" className="legalitas-section">
        <div className="legalitas-container">
          <h2>🌿 Apa Itu Legalitas Ekspor Kayu?</h2>
          <p className="intro">
            Legalitas ekspor kayu adalah pembuktian bahwa produk kayu yang
            diekspor berasal dari sumber yang sah dan terverifikasi. Ini berarti
            kayu tidak berasal dari pembalakan liar, dan proses produksinya
            telah memenuhi ketentuan hukum yang berlaku di Indonesia.
          </p>

          <p className="subtitle">
            Legalitas ini melibatkan beberapa aspek penting seperti:
          </p>

          <ul className="legalitas-list">
            <li>✅ Asal-usul bahan baku yang jelas</li>
            <li>✅ Proses produksi yang berizin</li>
            <li>✅ Kepatuhan terhadap regulasi ekspor nasional</li>
          </ul>

          <div className="legalitas-footer">
            <p>
              Dengan memastikan semua aspek tersebut, eksportir bisa membangun
              kepercayaan pembeli internasional dan menghindari potensi
              penolakan produk di pelabuhan tujuan.
            </p>
            <a href="#dokumen" className="next-link">
              🔗 Lanjut ke Dokumen Wajib →
            </a>
          </div>
        </div>
      </section>

      {/* ===== Dokumen Section ===== */}
      <section class="docs-section">
        <div class="docs-container">
          <h2>📑 Dokumen Wajib dalam Proses Ekspor Kayu</h2>
          <p class="intro">
            Dalam proses ekspor kayu, kelengkapan dokumen adalah kunci utama
            kelancaran pengiriman. Tanpa dokumen yang benar, produk berisiko
            tertahan di bea cukai atau bahkan ditolak oleh negara tujuan.
          </p>

          <div class="docs-list">
            <div class="doc-card">
              <span class="icon">📄</span>
              <h3>Invoice dan Packing List</h3>
              <p>Menjelaskan rincian produk, jumlah, dan nilai transaksi.</p>
            </div>

            <div class="doc-card">
              <span class="icon">🌍</span>
              <h3>Surat Keterangan Asal (SKA)</h3>
              <p>Membuktikan bahwa produk berasal dari Indonesia.</p>
            </div>

            <div class="doc-card">
              <span class="icon">🪵</span>
              <h3>Dokumen SVLK</h3>
              <p>Menunjukkan bahwa kayu berasal dari sumber legal.</p>
            </div>

            <div class="doc-card">
              <span class="icon">🧾</span>
              <h3>Pemberitahuan Ekspor Barang (PEB)</h3>
              <p>Diajukan melalui sistem bea cukai untuk izin ekspor resmi.</p>
            </div>

            <div class="doc-card">
              <span class="icon">🔥</span>
              <h3>Sertifikat Fumigasi / Heat Treatment</h3>
              <p>
                Diperlukan jika negara tujuan mewajibkan pengendalian hama pada
                produk kayu.
              </p>
            </div>
          </div>

          <p class="closing">
            Dengan dokumen yang lengkap dan sesuai, kamu bisa memperlancar
            seluruh proses logistik dan meminimalkan biaya tambahan akibat
            kesalahan administratif.
          </p>

          <p class="next">
            🔗 Setelah memahami dokumen yang wajib disiapkan, mari kita lihat
            lebih dalam mengenai salah satu syarat utama legalitas ekspor kayu
            yaitu <strong>sertifikasi SVLK</strong>.
          </p>
        </div>
      </section>

      {/* ===== SVLK Section ===== */}
      <section class="svlk-section">
        <div class="svlk-container">
          <h2>🪪 Memahami SVLK (Sistem Verifikasi Legalitas Kayu)</h2>
          <p class="svlk-intro">
            SVLK (Sistem Verifikasi Legalitas Kayu) adalah sistem nasional yang
            dikembangkan untuk memastikan kayu dan produk turunannya berasal
            dari sumber legal dan dikelola secara lestari.
          </p>

          <div class="svlk-cards">
            <div class="svlk-card">
              <span class="svlk-icon">🌲</span>
              <h3>Tujuan Utama</h3>
              <p>
                Memastikan rantai pasok kayu dari hulu ke hilir terverifikasi
                legal.
              </p>
            </div>

            <div class="svlk-card">
              <span class="svlk-icon">🏢</span>
              <h3>Lembaga Penerbit</h3>
              <p>
                Dikeluarkan oleh Lembaga Verifikasi Legalitas Kayu (LVLK) yang
                telah diakreditasi oleh KAN.
              </p>
            </div>

            <div class="svlk-card">
              <span class="svlk-icon">📦</span>
              <h3>Bukti Kepatuhan</h3>
              <p>
                Perusahaan yang telah tersertifikasi SVLK memiliki kode
                registrasi dan sertifikat resmi.
              </p>
            </div>

            <div class="svlk-card">
              <span class="svlk-icon">🌏</span>
              <h3>Keuntungan Internasional</h3>
              <p>
                Produk bersertifikat SVLK diakui secara global, termasuk oleh
                Uni Eropa (FLEGT license).
              </p>
            </div>
          </div>

          <p class="svlk-closing">
            Dengan memiliki SVLK, eksportir tidak hanya memenuhi syarat hukum,
            tapi juga menunjukkan komitmen terhadap keberlanjutan dan tanggung
            jawab lingkungan.
          </p>

          <p class="svlk-next">
            🔗 Nah, setelah tahu apa itu SVLK, sekarang waktunya memahami
            bagaimana proses mengurus
            <strong>legalitas ekspor kayu</strong> secara lengkap.
          </p>
        </div>
      </section>

      {/* ===== Langkah Section ===== */}
      <section class="langkah-section">
        <div class="langkah-container">
          <h2>🧭 Langkah-Langkah Mengurus Legalitas Ekspor Kayu</h2>
          <p class="langkah-intro">
            Proses mengurus legalitas ekspor kayu mungkin terlihat rumit di
            awal, tapi jika dilakukan dengan langkah yang benar, semuanya bisa
            berjalan lancar.
          </p>

          <div class="langkah-steps">
            <div class="langkah-step">
              <span class="step-icon">🪵</span>
              <p>
                Pastikan sumber bahan baku memiliki izin resmi dari Kementerian
                Lingkungan Hidup dan Kehutanan (KLHK).
              </p>
            </div>
            <div class="langkah-step">
              <span class="step-icon">🧰</span>
              <p>
                Daftarkan perusahaan ke sistem OSS (Online Single Submission)
                untuk mendapatkan NIB dan perizinan dasar.
              </p>
            </div>
            <div class="langkah-step">
              <span class="step-icon">🧾</span>
              <p>
                Ajukan permohonan sertifikasi SVLK melalui lembaga verifikasi
                yang terakreditasi.
              </p>
            </div>
            <div class="langkah-step">
              <span class="step-icon">📤</span>
              <p>
                Lengkapi seluruh dokumen ekspor seperti invoice, PEB, dan SKA
                sesuai ketentuan bea cukai.
              </p>
            </div>
            <div class="langkah-step">
              <span class="step-icon">🚢</span>
              <p>
                Pastikan prosedur pengiriman sesuai standar ekspor internasional
                agar produk diterima tanpa hambatan.
              </p>
            </div>
          </div>

          <div class="langkah-cta">
            <h3>🤝 Butuh Bantuan dalam Proses Legalitas Ekspor Kayu?</h3>
            <p>
              <strong>PT Menara Bekasi</strong> siap menjadi mitra terpercaya
              dalam layanan ekspor kayu.
              <br />
              Kami membantu mulai dari konsultasi dokumen, proses sertifikasi
              SVLK, hingga pengiriman ekspor yang sesuai dengan peraturan
              nasional dan internasional.
            </p>
            <div class="cta-contact">
              <p>
                📞 Hubungi kami untuk panduan profesional dan layanan ekspor
                yang legal dan tepercaya.
              </p>
              <p>
                🌐{" "}
                <a href="https://www.menarabekasi.com" target="_blank">
                  www.menarabekasi.com
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@menarabekasi.com">info@menarabekasi.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-brand">
            <img
              src="/images/logo.png"
              alt="Logo PT Menara Bekasi"
              class="footer-logo"
            />
            <p>
              PT Menara Bekasi — Mitra ekspor kayu terpercaya yang memastikan
              setiap proses legalitas, sertifikasi, dan pengiriman berjalan
              lancar serta sesuai regulasi.
            </p>
          </div>

          <div class="footer-social">
            <h4>Bagikan Halaman Ini</h4>
            <div class="share-bar">
              <a href="#" title="Facebook" class="share-btn fb">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" title="Twitter" class="share-btn tw">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" title="LinkedIn" class="share-btn in">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" title="WhatsApp" class="share-btn wa">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="#" title="Email" class="share-btn em">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 PT Menara Bekasi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
