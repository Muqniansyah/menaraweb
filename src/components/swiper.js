"use client";

// import css
import "../css/swiperSection.css";

// Import dari Swiper, tapi ubah alias agar tidak bentrok
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ubah nama fungsi agar tidak sama dengan komponen Swiper
export default function SwiperSection() {
  return (
    <section className="swiper-section">
      <h2 className="swiper-title">Artikel Terkait Ekspor Kayu</h2>

      <SwiperCore
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* ======= Swiper Items (SEO-friendly cards) ======= */}
        <SwiperSlide>
          <article className="swiper-card">
            <img
              src="/images/slider/kemas.png"
              alt="Website Resmi PT.Kemas Kayu Indonesia"
            />
            <h3>Website Resmi PT.Kemas Kayu Indonesia</h3>
            <p>
              Kami selalu memastikan kualitas kayu sesuai standar internasional.
            </p>
            <a
              href="https://menarabekasilestari.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Lihat Selengkapnya →
            </a>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="swiper-card">
            <img
              src="/images/slider/menarabekasi.png"
              alt="Pastikan Pallet Anda Siap Kirim Tanpa Risiko!"
            />
            <h3>Pastikan Pallet Anda Siap Kirim Tanpa Risiko!</h3>
            <p>Kerjasama hanya dengan vendor terpercaya & berpengalaman.</p>
            <a
              href="https://kemaskayuindonesia.my.id/menarabekasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Lihat Selengkapnya →
            </a>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="swiper-card">
            <img
              src="/images/slider/web-9.jpg"
              alt="Pembuatan Pallet Kayu Ekspor: Proses dan Standar ISPM 15"
            />
            <h3>Pembuatan Pallet Kayu Ekspor: Proses dan Standar ISPM 15</h3>
            <p>
              Lihat bagaimana proses pengolahan kayu menjadi pallet ekspor yang
              memenuhi regulasi.
            </p>
            <a
              href="https://blogwebmenara.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Lihat Selengkapnya →
            </a>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="swiper-card">
            <img
              src="/images/slider/web-7.jpeg"
              alt="Langkah Cerdas Melakukan Riset Vendor Sebelum Kerjasama Bisnis"
            />
            <h3>
              Langkah Cerdas Melakukan Riset Vendor Sebelum Kerjasama Bisnis
            </h3>
            <p>
              Pelajari strategi menilai kredibilitas vendor sebelum menjalin
              kontrak kerja sama.
            </p>
            <a
              href="https://webmenara.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Lihat Selengkapnya →
            </a>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="swiper-card">
            <img
              src="/images/slider/web-12.jpg"
              alt="Inovasi Teknologi dalam Industri Kayu Ekspor Modern"
            />
            <h3>Inovasi Teknologi dalam Industri Kayu Ekspor Modern</h3>
            <p>
              Temukan teknologi terbaru dalam pengolahan kayu dan sistem smart
              treatment ISPM 15.
            </p>
            <a
              href="https://menara-bekasiweb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Lihat Selengkapnya →
            </a>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="swiper-card">
            <img
              src="/images/slider/web-4.jpg"
              alt="Perbedaan Kayu ISPM 15 dan Non ISPM 15 untuk Ekspor"
            />
            <h3>Perbedaan Kayu ISPM 15 dan Non ISPM 15 untuk Ekspor</h3>
            <p>
              Pahami perbedaan penting antara kayu bersertifikat dan
              non-sertifikat sebelum ekspor.
            </p>
            <a
              href="https://blogmenara.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Lihat Selengkapnya →
            </a>
          </article>
        </SwiperSlide>
      </SwiperCore>
    </section>
  );
}
