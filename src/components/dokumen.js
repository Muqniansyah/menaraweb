import "../css/dokumenSection.css";

export default function Dokumen() {
  return (
    <section className="docs-section">
      <div className="docs-container">
        <h2>📑 Dokumen Wajib dalam Proses Ekspor Kayu</h2>

        <div className="docs-content">
          {/* Kolom kanan: gambar */}
          <div className="docs-image">
            <img
              src="/images/dokumen.jpeg"
              alt="Dokumen Ekspor Kayu"
              loading="lazy"
            />
          </div>
          {/* Kolom kiri: teks */}
          <div className="docs-text">
            <p className="intro">
              Dalam proses ekspor kayu, kelengkapan dokumen adalah kunci utama
              kelancaran pengiriman. Tanpa dokumen yang benar, produk berisiko
              tertahan di bea cukai atau bahkan ditolak oleh negara tujuan.
            </p>

            <div className="docs-list">
              <div className="doc-card">
                <span className="icon">📄</span>
                <h3>Invoice dan Packing List</h3>
                <p>Menjelaskan rincian produk, jumlah, dan nilai transaksi.</p>
              </div>

              <div className="doc-card">
                <span className="icon">🌍</span>
                <h3>Surat Keterangan Asal (SKA)</h3>
                <p>Membuktikan bahwa produk berasal dari Indonesia.</p>
              </div>

              <div className="doc-card">
                <span className="icon">📑</span>
                <h3>Dokumen SVLK</h3>
                <p>Menunjukkan bahwa kayu berasal dari sumber legal.</p>
              </div>

              <div className="doc-card">
                <span className="icon">🧾</span>
                <h3>Pemberitahuan Ekspor Barang (PEB)</h3>
                <p>
                  Diajukan melalui sistem bea cukai untuk izin ekspor resmi.
                </p>
              </div>

              <div className="doc-card">
                <span className="icon">🔥</span>
                <h3>Sertifikat Fumigasi / Heat Treatment</h3>
                <p>
                  Diperlukan jika negara tujuan mewajibkan pengendalian hama
                  pada produk kayu.
                </p>
              </div>
            </div>

            <p className="closing">
              Dengan dokumen yang lengkap dan sesuai, kamu bisa memperlancar
              seluruh proses logistik dan meminimalkan biaya tambahan akibat
              kesalahan administratif. Setelah memahami dokumen yang wajib
              disiapkan, mari kita lihat lebih dalam mengenai salah satu syarat
              utama legalitas ekspor kayu yaitu{" "}
              <strong>sertifikasi SVLK</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
