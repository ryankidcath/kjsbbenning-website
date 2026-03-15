import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verifikasi PSU & Serah Terima ke DPKPP Cirebon | KJSB Benning",
  description:
    "Layanan verifikasi luas PSU pengembang perumahan sebelum serah terima ke DPKPP Kabupaten Cirebon. Kolaborasi KJSB Benning dengan pemda untuk fasos fasum.",
};

const whyUs = [
  "Pengalaman verifikasi PSU pengembang perumahan di Kabupaten Cirebon",
  "Pemahaman proses serah terima PSU dan persyaratan DPKPP",
  "Lisensi KJSB resmi dari Kementerian ATR/BPN",
  "Tim survey berpengalaman dengan peralatan modern",
  "Dokumentasi rapi dan siap untuk administrasi pemda",
];

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function VerifikasiPsuDpkppCirebon() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-6 pb-20 pt-14 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/survey-lahan-perumahan-cirebon" className="hover:text-white transition-colors">
              Layanan
            </Link>
            <span>/</span>
            <span className="text-white">Verifikasi PSU DPKPP Cirebon</span>
          </nav>

          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
            Verifikasi PSU · Kolaborasi DPKPP Cirebon
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Verifikasi PSU dan Serah Terima ke DPKPP Kabupaten Cirebon
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            KJSB Benning dan Rekan berkolaborasi dengan DPKPP Kabupaten Cirebon
            dalam layanan verifikasi luas PSU pengembang perumahan sebelum serah
            terima ke pemerintah daerah. Kami memverifikasi di lapangan apakah
            luas prasarana, sarana, dan utilitas umum (PSU) yang tercantum dalam
            BAST sesuai dengan kondisi aktual di lokasi.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/6281122222122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon />
              Konsultasi via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BODY CONTENT ── */}
      <section id="layanan" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Apa Itu PSU dan Mengapa Verifikasi Penting?
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                PSU (prasarana, sarana, dan utilitas umum) adalah kewajiban
                pengembang perumahan untuk menyediakan fasilitas sosial dan
                fasilitas umum (fasos fasum) seperti jalan lingkungan, drainase,
                taman, dan utilitas lainnya. Sebelum serah terima PSU ke
                pemerintah daerah, luas dan kelengkapan fasilitas tersebut harus
                diverifikasi agar sesuai dengan perjanjian dan site plan yang
                disetujui.
              </p>
              <p>
                Verifikasi luas PSU pengembang perumahan dilakukan untuk
                memastikan bahwa apa yang diklaim developer dalam Berita Acara
                Serah Terima (BAST) sesuai dengan kondisi di lapangan.
                Ketidaksesuaian dapat menunda proses serah terima ke pemda dan
                berpotensi menimbulkan masalah administrasi di kemudian hari.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Peran KJSB Benning dalam Verifikasi PSU
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Sebagai Kantor Jasa Surveyor Berlisensi (KJSB), KJSB Benning dan
                Rekan memiliki kewenangan untuk melakukan pengukuran dan
                verifikasi teknis yang diakui secara hukum. Dalam konteks serah
                terima PSU, kami melakukan pengukuran ulang di lapangan untuk
                memastikan luas jalan, drainase, taman, dan fasos fasum lainnya
                sesuai dengan dokumen perencanaan.
              </p>
              <p>
                Hasil verifikasi kami dapat digunakan sebagai lampiran atau
                pendukung dalam proses administrasi serah terima PSU ke DPKPP
                Kabupaten Cirebon. Data pengukuran yang akurat dan terdokumentasi
                membantu memperlancar proses penyerahan aset ke pemerintah daerah.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Kolaborasi dengan DPKPP Kabupaten Cirebon
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                DPKPP (Dinas Perumahan, Kawasan Permukiman, dan Pertanahan)
                Kabupaten Cirebon adalah instansi yang menerima serah terima PSU
                dari pengembang perumahan. KJSB Benning dan Rekan memahami
                prosedur dan persyaratan yang berlaku di DPKPP Cirebon, sehingga
                hasil verifikasi kami disusun sesuai kebutuhan administrasi pemda.
              </p>
              <p>
                Kolaborasi ini memungkinkan developer perumahan di Kabupaten dan
                Kota Cirebon untuk menyiapkan dokumen verifikasi PSU dengan lebih
                efisien. Dengan data pengukuran yang valid dari KJSB, proses
                serah terima ke DPKPP dapat berjalan lebih lancar.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Layanan Verifikasi PSU yang Kami Tawarkan
            </h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  Pengukuran Luas PSU di Lapangan
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Pengukuran aktual luas prasarana (jalan, drainase), sarana
                  (taman, fasilitas umum), dan utilitas sesuai site plan. Hasil
                  pengukuran dibandingkan dengan klaim dalam BAST.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  Dokumentasi untuk Serah Terima ke Pemda
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Penyusunan laporan dan peta hasil verifikasi yang dapat
                  dilampirkan dalam proses serah terima PSU ke DPKPP Kabupaten
                  Cirebon.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  Koordinasi dengan Proses Administrasi
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Pemahaman terhadap alur dan persyaratan DPKPP Cirebon, sehingga
                  output verifikasi siap digunakan dalam tahap administrasi pemda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROJECT EXPERIENCE ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Rekam Jejak
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Pengalaman dan Rekam Jejak
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Pada tahun 2025, KJSB Benning dan Rekan menangani pekerjaan
              verifikasi dan survey untuk sekitar{" "}
              <strong className="text-[#1e3a5f]">20 proyek perumahan</strong> di
              Kabupaten Cirebon, termasuk verifikasi PSU untuk persiapan serah
              terima ke DPKPP. Proyek mencakup berbagai skala pengembangan dari
              perumahan subsidi hingga perumahan komersial, dengan luas lahan
              mulai dari{" "}
              <strong className="text-[#1e3a5f]">5.000 m² hingga puluhan hektar</strong>.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "20+", label: "Proyek Perumahan", sub: "Tahun 2025" },
                { value: "5.000 m² – 40+ Ha", label: "Skala Luas Proyek", sub: "Per proyek" },
                { value: "Kabupaten Cirebon", label: "Wilayah Proyek", sub: "Jawa Barat" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#2563eb]/20 bg-blue-50 px-6 py-5 text-center"
                >
                  <p className="text-xl font-extrabold text-[#1e3a5f]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-semibold text-[#1e3a5f]">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Keunggulan Kami
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Mengapa Memilih KJSB Benning untuk Verifikasi PSU?
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-l-4 border-[#2563eb] p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">
                    Kantor Jasa Surveyor Berlisensi (KJSB)
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    KJSB Benning dan Rekan memiliki lisensi resmi dari
                    Kementerian ATR/BPN, sehingga hasil pekerjaan verifikasi PSU
                    kami diakui secara hukum dan dapat digunakan langsung dalam
                    proses administrasi serah terima ke DPKPP.
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                    {whyUs.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#2563eb]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Konsultasikan Verifikasi PSU Anda
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-blue-100">
              Persiapkan serah terima PSU ke DPKPP Kabupaten Cirebon dengan
              verifikasi yang akurat. Hubungi tim kami untuk konsultasi kebutuhan
              verifikasi luas PSU pengembang perumahan Anda.
            </p>
            <a
              href="https://wa.me/6281122222122"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5b] hover:shadow-xl"
            >
              <WhatsAppIcon />
              Konsultasi via WhatsApp
            </a>
            <p className="mt-4 text-sm text-blue-200">
              Respons cepat · Konsultasi gratis · Melayani Kota &amp; Kabupaten
              Cirebon
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0f2744] px-6 py-8 text-center text-sm text-blue-200">
        <Link
          href="/"
          className="font-semibold text-white hover:text-blue-200 transition-colors"
        >
          KJSB Benning dan Rekan
        </Link>
        <p className="mt-1">
          Jasa Pengukuran dan Pemetaan Tanah · Cirebon, Jawa Barat
        </p>
        <p className="mt-3 text-blue-300/60">
          &copy; {new Date().getFullYear()} KJSB Benning dan Rekan. Hak cipta
          dilindungi.
        </p>
      </footer>
    </div>
  );
}
