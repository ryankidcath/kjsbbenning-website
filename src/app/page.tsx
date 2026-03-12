import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <ProjectExperience />
      <Services />
      <ServiceArea />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <span className="text-lg font-bold text-[#1e3a5f]">KJSB</span>
          <span className="text-lg font-semibold text-slate-600">
            {" "}Benning dan Rekan
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          <a href="#services" className="hover:text-[#2563eb] transition-colors">
            Layanan
          </a>
          <a href="#area" className="hover:text-[#2563eb] transition-colors">
            Area Layanan
          </a>
          <a href="#why-us" className="hover:text-[#2563eb] transition-colors">
            Mengapa Kami
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#2563eb] px-5 py-2 text-white hover:bg-[#1d4ed8] transition-colors"
          >
            Konsultasi Sekarang
          </a>
        </nav>
        {/* Mobile CTA */}
        <a
          href="#contact"
          className="rounded-full bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8] transition-colors sm:hidden"
        >
          Konsultasi
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-6 py-24 text-white">
      {/* Decorative grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
          Jasa Pengukuran Tanah Profesional · Cirebon
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Jasa Pengukuran dan Pemetaan Tanah di Cirebon
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
          KJSB Benning dan Rekan menyediakan layanan pengukuran tanah, Peta
          Bidang Tanah (PBT), pemetaan topografi, foto udara drone, GIS, dan
          konsultasi pertanahan untuk individu, perusahaan, dan instansi
          pemerintah.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#2563eb] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[#1d4ed8] transition-colors"
          >
            Konsultasi Sekarang
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            Lihat Layanan Kami
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
const services = [
  {
    title: "Jasa Ukur Tanah",
    description:
      "Layanan pengukuran luas tanah untuk kebutuhan sertifikat, jual beli tanah, pematokan batas tanah, dan verifikasi luas lahan.",
    href: "/jasa-ukur-tanah-cirebon",
    label: "Lihat Detail",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Peta Bidang Tanah (PBT)",
    description:
      "Pembuatan peta bidang tanah resmi untuk kebutuhan sertifikasi dan administrasi pertanahan.",
    href: "/jasa-pengukuran-tanah-cirebon",
    label: "Lihat Detail",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    title: "Survey Topografi",
    description:
      "Pemetaan kontur dan elevasi permukaan tanah untuk perencanaan proyek konstruksi dan infrastruktur.",
    href: "/survey-topografi-cirebon",
    label: "Lihat Detail",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 2.25 12 7.5l3-3.75 2.25 4.5 1.5-1.5 3 6H3.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.25h18" />
      </svg>
    ),
  },
  {
    title: "Pemetaan Drone",
    description:
      "Pengambilan citra udara beresolusi tinggi menggunakan drone untuk pemetaan area luas dan inspeksi lahan.",
    href: "/pemetaan-drone-cirebon",
    label: "Lihat Detail",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19 3 3.75l1.44 3.115m15.445-1.675L21 3.75l-1.44 3.115M6.115 18.81 3 20.25l1.44-3.115m15.445 1.675L21 20.25l-1.44-3.115M12 9.75v4.5m0 0h-2.25m2.25 0h2.25" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Pemetaan GIS",
    description:
      "Pengolahan dan analisis data spasial berbasis GIS untuk pemetaan tematik dan perencanaan tata ruang.",
    href: "/pemetaan-gis-cirebon",
    label: "Lihat Detail",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Survey Lahan Perumahan",
    description:
      "Layanan survey lengkap untuk pengembang perumahan, mulai dari verifikasi luas tanah sebelum pembelian, survey topografi, pematokan boundary lahan, stake out site plan, hingga verifikasi luas PSU sebelum penyerahan ke pemerintah daerah.",
    href: "/survey-lahan-perumahan-cirebon",
    label: "Pelajari Layanan",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Konsultasi Pertanahan",
    description:
      "Layanan konsultasi mengenai proses sertifikasi, pemecahan bidang tanah, dan permasalahan pertanahan lainnya.",
    href: "/konsultasi-pertanahan-cirebon",
    label: "Lihat Detail",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Layanan Kami
          </span>
          <h2 className="mt-2 text-3xl font-bold text-[#0f172a] sm:text-4xl">
            Solusi Pengukuran & Pemetaan Terpadu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Kami menyediakan layanan survei dan pemetaan lengkap dengan standar
            profesional untuk berbagai kebutuhan pertanahan Anda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-[#0f172a]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
              {"href" in service && service.href && (
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                >
                  {"label" in service ? service.label : "Lihat Detail"}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICE AREA
───────────────────────────────────────────── */
function ServiceArea() {
  return (
    <section id="area" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Area Layanan
          </span>
          <h2 className="mt-2 text-3xl font-bold text-[#0f172a] sm:text-4xl">
            Melayani Wilayah Cirebon
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            KJSB Benning dan Rekan beroperasi dan melayani klien di seluruh
            wilayah Cirebon, baik individu, perusahaan swasta, maupun instansi
            pemerintah.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          {[
            {
              name: "Kota Cirebon",
              desc: "Mencakup seluruh kecamatan dan kelurahan di Kota Cirebon.",
            },
            {
              name: "Kabupaten Cirebon",
              desc: "Mencakup seluruh kecamatan dan desa di Kabupaten Cirebon.",
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
              <p className="mt-2 text-sm text-slate-500">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE US
───────────────────────────────────────────── */
const reasons = [
  {
    title: "Tim Profesional",
    description:
      "Didukung oleh tenaga ahli berpengalaman di bidang geodesi, survei, dan pertanahan yang bersertifikat.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: "Peralatan Pengukuran Modern",
    description:
      "Menggunakan Total Station, GPS geodetik, dan drone beresolusi tinggi untuk hasil pengukuran yang akurat.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Pengalaman Proyek Pertanahan",
    description:
      "Telah menyelesaikan berbagai proyek pengukuran dan pemetaan untuk klien individu, korporasi, dan instansi pemerintah.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    title: "Konsultasi Profesional",
    description:
      "Memberikan solusi dan rekomendasi terbaik yang disesuaikan dengan kebutuhan dan kondisi pertanahan klien.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Mengapa Memilih Kami
          </span>
          <h2 className="mt-2 text-3xl font-bold text-[#0f172a] sm:text-4xl">
            Kepercayaan yang Dibangun di Atas Keahlian
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Kami berkomitmen memberikan layanan pengukuran dan pemetaan yang
            akurat, profesional, dan tepat waktu.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f] text-white">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold text-[#0f172a]">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/profil-kjsb-benning"
            className="inline-flex items-center gap-2 rounded-full border border-[#1e3a5f] px-7 py-3 text-sm font-semibold text-[#1e3a5f] transition-colors hover:bg-[#1e3a5f] hover:text-white"
          >
            Lihat Profil Kami
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT CTA
───────────────────────────────────────────── */
function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Siap Memulai Proyek Anda?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-blue-100">
          Hubungi kami sekarang untuk konsultasi gratis. Tim kami siap membantu
          mewujudkan kebutuhan pengukuran dan pemetaan tanah Anda.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6282xxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[#1ebe5b] transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp Kami
          </a>
          <a
            href="mailto:info@kjsbbenning.com"
            className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Kirim Email
          </a>
        </div>

        <p className="mt-8 text-sm text-blue-200">
          Atau kunjungi kantor kami di <strong className="text-white">Cirebon, Jawa Barat</strong>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#0f2744] px-6 py-8 text-center text-sm text-blue-200">
      <p className="font-semibold text-white">KJSB Benning dan Rekan</p>
      <p className="mt-1">Jasa Pengukuran dan Pemetaan Tanah · Cirebon, Jawa Barat</p>
      <p className="mt-3 text-blue-300/60">
        &copy; {new Date().getFullYear()} KJSB Benning dan Rekan. Hak cipta dilindungi.
      </p>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PROJECT EXPERIENCE
───────────────────────────────────────────── */
function ProjectExperience() {
  const stats = [
    {
      value: "20+",
      label: "Proyek Perumahan Tahun 2025",
    },
    {
      value: "5.000 m² – 40 Ha",
      label: "Luas Proyek",
    },
    {
      value: "Kabupaten Cirebon",
      label: "Wilayah Proyek",
    },
  ];

  const projectServices = [
    "Verifikasi luas untuk penyerahan PSU",
    "Survey topografi lahan",
    "Stake out site plan ke lapangan",
    "Pemetaan untuk kebutuhan pengembangan perumahan",
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left column — text content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Pengalaman Lapangan
            </span>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#1e3a5f] sm:text-4xl">
              Pengalaman Pengukuran Proyek Perumahan
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              KJSB Benning dan Rekan berpengalaman dalam pengukuran dan
              pemetaan untuk proyek pengembangan perumahan di Kabupaten
              Cirebon.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Pada tahun 2025 kami mengerjakan lebih dari 20 proyek perumahan
              dengan luas proyek mulai dari 5.000 meter persegi hingga 40
              hektar.
            </p>

            <ul className="mt-6 space-y-3">
              {projectServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/10 text-[#2563eb]">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — stat cards */}
          <div className="flex flex-col justify-center gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5"
              >
                <p className="text-2xl font-extrabold text-[#1e3a5f] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
