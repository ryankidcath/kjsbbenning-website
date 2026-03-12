import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Pengukuran Tanah & PBT di Cirebon | KJSB Benning dan Rekan",
  description:
    "Layanan pengukuran tanah dan pembuatan Peta Bidang Tanah (PBT) di Kota dan Kabupaten Cirebon. Untuk sertifikasi, pecah bidang, dan pemetaan lahan.",
};

const services = [
  {
    title: "Pengukuran Luas Tanah",
    description:
      "Pengukuran akurat luas dan batas bidang tanah menggunakan peralatan geodetik berstandar tinggi untuk memastikan data yang presisi.",
    icon: (
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
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
  },
  {
    title: "Pembuatan Peta Bidang Tanah (PBT)",
    description:
      "Pembuatan Peta Bidang Tanah resmi yang sesuai standar BPN/ATR, diperlukan untuk proses pendaftaran dan sertifikasi tanah.",
    icon: (
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
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Pengukuran untuk Pecah Sertifikat",
    description:
      "Pengukuran dan pembuatan peta untuk keperluan pemecahan satu bidang tanah menjadi beberapa bidang terpisah dengan sertifikat masing-masing.",
    icon: (
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
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Pemetaan Lahan",
    description:
      "Pemetaan lengkap kondisi lahan meliputi batas, kontur, dan informasi spasial lainnya untuk mendukung perencanaan penggunaan lahan.",
    icon: (
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
          d="M3.75 13.5 10.5 2.25 12 7.5l3-3.75 2.25 4.5 1.5-1.5 3 6H3.75Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.25h18" />
      </svg>
    ),
  },
];

export default function JasaPengukuranTanah() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-6 pb-20 pt-14 text-white">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-200">Layanan</span>
            <span>/</span>
            <span className="text-white">Pengukuran Tanah</span>
          </nav>

          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
            Layanan Profesional · Cirebon
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Jasa Pengukuran Tanah &amp; Pembuatan Peta Bidang Tanah (PBT) di
            Cirebon
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Melayani pengukuran tanah untuk kebutuhan sertifikat, pecah bidang,
            dan pembuatan Peta Bidang Tanah di Kota dan Kabupaten Cirebon.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/6281122222122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5b]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
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

      {/* ── 2. EXPLANATION ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Tentang Layanan
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
            Apa Itu Pengukuran Tanah dan Peta Bidang Tanah?
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            <strong className="text-[#0f172a]">Pengukuran tanah</strong> adalah
            proses menentukan luas, batas, dan posisi suatu bidang tanah secara
            akurat menggunakan instrumen geodetik seperti Total Station dan GPS
            geodetik. Hasil pengukuran ini menjadi dasar data teknis yang
            diperlukan dalam berbagai proses administrasi pertanahan.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            <strong className="text-[#0f172a]">
              Peta Bidang Tanah (PBT)
            </strong>{" "}
            adalah dokumen peta resmi yang dihasilkan dari pengukuran lapangan,
            menggambarkan letak, bentuk, dan batas bidang tanah secara spasial.
            PBT merupakan salah satu syarat teknis penting dalam proses
            pendaftaran tanah di Badan Pertanahan Nasional (BPN/ATR), termasuk
            untuk pembuatan sertifikat baru, pemecahan bidang tanah, maupun
            balik nama akibat jual beli atau pewarisan.
          </p>
          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
            <p className="font-semibold text-[#1e3a5f]">
              Mengapa memilih layanan profesional?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Kesalahan dalam pengukuran tanah dapat menyebabkan sengketa batas,
              dokumen ditolak BPN, atau kerugian di kemudian hari. Tim surveyor
              bersertifikat KJSB Benning dan Rekan memastikan setiap pengukuran
              dilakukan dengan teliti dan hasilnya dapat dipertanggungjawabkan
              secara hukum.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section id="layanan" className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Layanan Kami
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Layanan Pengukuran & Pemetaan Tanah
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Kami menyediakan layanan lengkap sesuai kebutuhan pertanahan Anda,
              mulai dari pengukuran sederhana hingga pembuatan dokumen resmi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICE AREA ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Area Layanan
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Melayani Seluruh Wilayah Cirebon
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              KJSB Benning dan Rekan siap melayani klien di seluruh Cirebon,
              baik individu, perusahaan, maupun instansi pemerintah.
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
                className="flex w-full max-w-sm flex-col items-center rounded-2xl border-2 border-[#2563eb]/20 bg-blue-50 px-8 py-10 text-center"
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

      {/* ── 5. CTA ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Butuh Jasa Pengukuran Tanah di Cirebon?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-blue-100">
              Hubungi KJSB Benning dan Rekan sekarang untuk konsultasi gratis.
              Kami siap membantu Anda menyelesaikan kebutuhan pengukuran tanah
              dan pembuatan PBT dengan cepat dan profesional.
            </p>
            <a
              href="https://wa.me/6281122222122"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5b] hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
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
