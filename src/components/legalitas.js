// import css
import "../css/legalSection.css";

export default function Legalitas() {
  return (
    <section id="legalitas" className="legalitas-section">
      <div className="legalitas-container">
        <h2>📝 Apa Itu Legalitas Ekspor Kayu?</h2>
        <p className="intro">
          Legalitas ekspor kayu adalah pembuktian bahwa produk kayu yang
          diekspor berasal dari sumber yang sah dan terverifikasi. Ini berarti
          kayu tidak berasal dari pembalakan liar, dan proses produksinya telah
          memenuhi ketentuan hukum yang berlaku di Indonesia.
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
            kepercayaan pembeli internasional dan menghindari potensi penolakan
            produk di pelabuhan tujuan.
          </p>
          <a
            href="https://wa.me/6285817298071"
            target="_blank"
            rel="noopener noreferrer"
            className="next-link"
          >
            🔗 Hubungi Sekarang →
          </a>
        </div>
      </div>
    </section>
  );
}
