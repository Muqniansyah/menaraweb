// import css
import "../css/svlkSection.css";

export default function Svlk() {
  return (
    <section className="svlk-section">
      <div className="svlk-container">
        <h2>✨Memahami SVLK (Sistem Verifikasi Legalitas Kayu)</h2>
        <p className="svlk-intro">
          SVLK (Sistem Verifikasi Legalitas Kayu) adalah sistem nasional yang
          dikembangkan untuk memastikan kayu dan produk turunannya berasal dari
          sumber legal dan dikelola secara lestari.
        </p>

        <div className="svlk-cards">
          <div className="svlk-card">
            <span className="svlk-icon">🔔</span>
            <h3>Tujuan Utama</h3>
            <p>
              Memastikan rantai pasok kayu dari hulu ke hilir terverifikasi
              legal.
            </p>
          </div>

          <div className="svlk-card">
            <span className="svlk-icon">🏢</span>
            <h3>Lembaga Penerbit</h3>
            <p>
              Dikeluarkan oleh Lembaga Verifikasi Legalitas Kayu (LVLK) yang
              telah diakreditasi oleh KAN.
            </p>
          </div>

          <div className="svlk-card">
            <span className="svlk-icon">📦</span>
            <h3>Bukti Kepatuhan</h3>
            <p>
              Perusahaan yang telah tersertifikasi SVLK memiliki kode registrasi
              dan sertifikat resmi.
            </p>
          </div>

          <div className="svlk-card">
            <span className="svlk-icon">🌏</span>
            <h3>Keuntungan Internasional</h3>
            <p>
              Produk bersertifikat SVLK diakui secara global, termasuk oleh Uni
              Eropa (FLEGT license).
            </p>
          </div>
        </div>

        <p className="svlk-closing">
          Dengan memiliki SVLK, eksportir tidak hanya memenuhi syarat hukum,
          tapi juga menunjukkan komitmen terhadap keberlanjutan dan tanggung
          jawab lingkungan. Nah, setelah tahu apa itu SVLK, sekarang waktunya
          memahami bagaimana proses mengurus{" "}
          <strong>legalitas ekspor kayu</strong> secara lengkap.
        </p>
      </div>
    </section>
  );
}
