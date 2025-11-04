"use client";

// import css
import "../css/faqSection.css";

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">❓ Pertanyaan yang Sering Diajukan (FAQ)</h2>

      <div className="faq-container">
        {[
          {
            question: "Apa yang dimaksud dengan legalitas ekspor kayu?",
            answer:
              "Legalitas ekspor kayu adalah pembuktian bahwa produk kayu yang diekspor berasal dari sumber yang sah dan terverifikasi. Ini memastikan bahwa proses produksinya mematuhi hukum dan tidak berasal dari pembalakan liar.",
          },
          {
            question:
              "Dokumen apa saja yang wajib disiapkan untuk ekspor kayu?",
            answer:
              "Beberapa dokumen wajib antara lain: Invoice, Packing List, Surat Keterangan Asal (SKA), Dokumen SVLK, Pemberitahuan Ekspor Barang (PEB), serta Sertifikat Fumigasi jika diperlukan.",
          },
          {
            question: "Apa itu sertifikat SVLK dan mengapa penting?",
            answer:
              "SVLK (Sistem Verifikasi Legalitas Kayu) menjamin bahwa kayu berasal dari sumber yang legal. Sertifikat ini diakui secara internasional, termasuk oleh Uni Eropa melalui lisensi FLEGT.",
          },
          {
            question:
              "Bagaimana langkah-langkah mengurus legalitas ekspor kayu?",
            answer:
              "Mulai dari memastikan izin bahan baku dari KLHK, mendaftarkan perusahaan di OSS, mengurus sertifikasi SVLK, melengkapi dokumen ekspor, hingga memastikan pengiriman sesuai standar internasional.",
          },
        ].map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={(e) => {
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle("active");
              }}
            >
              {item.question}
              <span className="faq-icon">▾</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
