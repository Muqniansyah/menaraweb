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
            <p>
              Pastikan Pallet Anda Siap Kirim Tanpa Risiko! Kerjasama hanya
              dengan vendor terpercaya & berpengalaman.
            </p>
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
              src="/images/slider/kemaskayu.png"
              alt="Ekspor bisa ditolak hanya karena kemasan kayu tidak sesuai standar
              ISPM #15!"
            />
            <h3>
              Ekspor bisa ditolak hanya karena kemasan kayu tidak sesuai standar
              ISPM #15!
            </h3>
            <p>
              Ekspor bisa ditolak hanya karena kemasan kayu tidak sesuai standar
              ISPM #15! Pastikan kemasan kayu Anda sudah sesuai aturan
              internasional agar ekspor tidak bermasalah.
            </p>
            <a
              href="https://kemaskayuindonesia.my.id/"
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
