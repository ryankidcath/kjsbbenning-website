import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pemetaan GIS Cirebon | KJSB Benning dan Rekan",
  description:
    "Jasa pemetaan GIS dan pembuatan peta tematik di Cirebon. Analisis data spasial, peta tata ruang, dan pengolahan data geospasial untuk instansi, developer, dan perusahaan.",
};

const layanan = [
  {
    title: "Pembuatan Peta Tematik",
    desc: "Pembuatan peta tematik sesuai kebutuhan, seperti peta penggunaan lahan, peta infrastruktur, peta kawasan, dan peta administrasi wilayah.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    title: "Analisis Data Spasial",
    desc: "Pengolahan dan analisis data geospasial untuk keperluan perencanaan wilayah, identifikasi zona, dan pengambilan keputusan berbasis lokasi.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Pengolahan Data Survey",
    desc: "Konversi dan integrasi data hasil pengukuran lapangan ke dalam sistem GIS untuk menghasilkan peta dan laporan yang siap digunakan.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: "Digitasi dan Georeferensi",
    desc: "Digitasi peta analog atau citra ke dalam format digital vektor yang akurat, serta georeferensi peta ke sistem koordinat yang benar.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
      </svg>
    ),
  },
  {
    title: "Peta Kawasan Perumahan",
    desc: "Pembuatan peta kawasan perumahan yang menampilkan blok kavling, fasilitas umum, jaringan jalan, dan utilitas secara terstruktur.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Peta untuk Perizinan",
    desc: "Penyusunan peta teknis yang diperlukan dalam proses perizinan pembangunan, seperti peta situasi, peta tata letak, dan peta lingkungan.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
];

const klien = [
  {
    title: "Developer Perumahan",
    desc: "Peta kavling, peta fasilitas umum, dan peta kawasan untuk keperluan pemasaran dan perizinan.",
  },
  {
    title: "Instansi Pemerintah",
    desc: "Peta administrasi, peta infrastruktur, dan analisis spasial untuk perencanaan tata ruang wilayah.",
  },
  {
    title: "Perusahaan & Industri",
    desc: "Peta kawasan industri, analisis lokasi, dan inventarisasi aset berbasis data spasial.",
  },
  {
    title: "Konsultan & Kontraktor",
    desc: "Dukungan data GIS untuk dokumen lingkungan, studi kelayakan, dan laporan teknis proyek.",
  },
];

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function PemetaanGIS() {
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
            <span className="text-blue-200">Layanan</span>
            <span>/</span>
            <span className="text-white">Pemetaan GIS</span>
          </nav>

          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
            Sistem Informasi Geografis · Cirebon
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Pemetaan GIS di Cirebon
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Layanan pemetaan berbasis GIS (Geographic Information System) dan
            pembuatan peta tematik di Kota dan Kabupaten Cirebon. Kami
            menyediakan solusi pengolahan data spasial untuk instansi
            pemerintah, developer perumahan, dan perusahaan.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/6281122222122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon />
              Konsultasi WhatsApp
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

      {/* ── 2. LAYANAN ── */}
      <section id="layanan" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Layanan Kami
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Layanan Pemetaan GIS
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Kami menyediakan berbagai layanan pemetaan dan analisis spasial
              yang dapat disesuaikan dengan kebutuhan proyek Anda.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {layanan.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. KLIEN ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Cocok Untuk
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Siapa yang Membutuhkan Layanan GIS?
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {klien.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-[#1e3a5f]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. AREA LAYANAN ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Area Layanan
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Melayani Seluruh Wilayah Cirebon
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {[
              {
                name: "Kota Cirebon",
                desc: "Mencakup seluruh kecamatan dan kelurahan di Kota Cirebon.",
              },
              {
                name: "Kabupaten Cirebon",
                desc: "Mencakup seluruh kecamatan dan desa di wilayah Kabupaten Cirebon.",
              },
            ].map((area) => (
              <div
                key={area.name}
                className="flex w-full max-w-sm flex-col items-center rounded-2xl border-2 border-[#2563eb]/20 bg-blue-50 px-8 py-10 text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e3a5f] text-white">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f]">{area.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Butuh Jasa Pemetaan GIS di Cirebon?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-blue-100">
              Hubungi KJSB Benning dan Rekan untuk konsultasi gratis mengenai
              kebutuhan pemetaan dan analisis data spasial proyek Anda.
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
