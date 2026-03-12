import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profil KJSB Benning dan Rekan | Surveyor Berlisensi Cirebon",
  description:
    "Profil resmi KJSB Benning dan Rekan, kantor jasa surveyor berlisensi ATR/BPN yang melayani pengukuran tanah dan pemetaan di Cirebon.",
};

const services = [
  {
    title: "Pengukuran Tanah",
    icon: (
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
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
  },
  {
    title: "Pembuatan Peta Bidang Tanah (PBT)",
    icon: (
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
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Pemetaan Topografi",
    icon: (
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
          d="M3.75 13.5 10.5 2.25 12 7.5l3-3.75 2.25 4.5 1.5-1.5 3 6H3.75Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.25h18" />
      </svg>
    ),
  },
  {
    title: "Foto Udara / Drone Mapping",
    icon: (
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
          d="M6.115 5.19 3 3.75l1.44 3.115m15.445-1.675L21 3.75l-1.44 3.115M6.115 18.81 3 20.25l1.44-3.115m15.445 1.675L21 20.25l-1.44-3.115M12 9.75v4.5m0 0h-2.25m2.25 0h2.25"
        />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "GIS (Sistem Informasi Geografis)",
    icon: (
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
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
];

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function ProfilKJSBBenning() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
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
            <span className="text-white">Profil Perusahaan</span>
          </nav>

          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
            Kantor Jasa Surveyor Berlisensi · Cirebon
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Profil KJSB Benning dan Rekan
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Kantor Jasa Surveyor Berlisensi resmi yang melayani pengukuran
            tanah dan pembuatan Peta Bidang Tanah di Kota dan Kabupaten
            Cirebon.
          </p>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Tentang Kami
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
            Siapa KJSB Benning dan Rekan?
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            KJSB Benning dan Rekan adalah Kantor Jasa Surveyor Berlisensi yang
            berkedudukan di Cirebon, Jawa Barat. Kami menyediakan layanan
            pengukuran tanah, pembuatan Peta Bidang Tanah (PBT), pemetaan
            topografi, foto udara menggunakan drone, dan pengolahan data GIS
            secara profesional dan akurat sesuai standar yang ditetapkan oleh
            Kementerian ATR/Badan Pertanahan Nasional (BPN).
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Kami melayani berbagai jenis klien — mulai dari masyarakat individu
            yang membutuhkan pengukuran untuk keperluan sertifikasi tanah,
            perusahaan swasta yang membutuhkan data spasial untuk perencanaan
            proyek, hingga instansi pemerintah yang memerlukan pemetaan kawasan
            secara komprehensif. Kepercayaan klien adalah prioritas utama kami,
            dan kami berkomitmen untuk memberikan hasil yang akurat, transparan,
            dan tepat waktu.
          </p>
        </div>
      </section>

      {/* ── LEGAL STATUS ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Legalitas
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
            Status Hukum dan Lisensi Resmi
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            KJSB Benning dan Rekan beroperasi sebagai Kantor Jasa Surveyor
            Berlisensi (KJSB) yang diakui dan memiliki izin resmi dari
            Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional
            (ATR/BPN). Status KJSB memberikan kewenangan kepada kantor kami
            untuk melaksanakan pekerjaan pengukuran dan pemetaan kadastral yang
            hasilnya dapat digunakan secara resmi dalam proses administrasi
            pertanahan.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Card header */}
            <div className="border-b border-slate-100 bg-[#1e3a5f] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <svg
                    className="h-5 w-5 text-white"
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
                <p className="font-bold text-white">
                  Kantor Jasa Surveyor Berlisensi (KJSB)
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="divide-y divide-slate-100 px-6">
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-slate-500">Nama Kantor</span>
                <span className="font-semibold text-[#0f172a]">
                  KJSB Benning dan Rekan
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-slate-500">Jenis Entitas</span>
                <span className="font-semibold text-[#0f172a]">
                  Kantor Jasa Surveyor Berlisensi
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-slate-500">Lisensi dari</span>
                <span className="font-semibold text-[#0f172a]">
                  Kementerian ATR/BPN RI
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-slate-500">No. SK Lisensi</span>
                <span className="rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-400 italic">
                  ___________________
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-slate-500">Domisili</span>
                <span className="font-semibold text-[#0f172a]">
                  Cirebon, Jawa Barat
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Bidang Keahlian
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Layanan yang Kami Sediakan
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Kami menyediakan rangkaian layanan survei dan pemetaan lengkap
              untuk mendukung berbagai kebutuhan pertanahan dan perencanaan
              spasial.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-white transition-colors group-hover:bg-[#2563eb]">
                  {service.icon}
                </div>
                <p className="font-semibold text-[#0f172a] text-sm leading-snug">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Wilayah Kerja
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Area Layanan
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              KJSB Benning dan Rekan beroperasi dan melayani seluruh wilayah
              Cirebon, baik untuk klien individu, korporasi, maupun instansi
              pemerintah.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {[
              {
                name: "Kota Cirebon",
                desc: "Mencakup seluruh kecamatan dan kelurahan di Kota Cirebon, termasuk kawasan perkotaan dan permukiman.",
              },
              {
                name: "Kabupaten Cirebon",
                desc: "Mencakup seluruh kecamatan dan desa di wilayah Kabupaten Cirebon.",
              },
            ].map((area) => (
              <div
                key={area.name}
                className="flex w-full max-w-sm flex-col items-center rounded-2xl border-2 border-[#2563eb]/20 bg-white px-8 py-10 text-center shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e3a5f] text-white">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f]">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ingin Bekerja Sama dengan Kami?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-blue-100">
              Hubungi KJSB Benning dan Rekan sekarang untuk konsultasi gratis.
              Tim kami siap membantu menjelaskan layanan dan proses yang sesuai
              dengan kebutuhan pertanahan Anda.
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
              Respons cepat · Konsultasi gratis · Tanpa biaya komitmen
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0f2744] px-6 py-8 text-center text-sm text-blue-200">
        <p className="font-semibold text-white">KJSB Benning dan Rekan</p>
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
