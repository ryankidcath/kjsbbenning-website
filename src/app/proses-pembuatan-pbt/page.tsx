import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proses Pembuatan PBT di Cirebon | KJSB Benning dan Rekan",
  description:
    "Pelajari alur lengkap proses pengukuran tanah dan pembuatan Peta Bidang Tanah (PBT) mulai dari pengajuan klien hingga persetujuan BPN.",
};

const kjsbSteps = [
  {
    number: 1,
    title: "Pengajuan oleh Klien",
    description:
      "Klien mengajukan permohonan layanan pengukuran tanah kepada KJSB Benning dan Rekan disertai dokumen pendukung seperti identitas, alas hak, dan data lokasi tanah.",
  },
  {
    number: 2,
    title: "Pemeriksaan Berkas oleh KJSB",
    description:
      "Tim KJSB memeriksa kelengkapan dan keabsahan dokumen yang diajukan untuk memastikan semua persyaratan administrasi terpenuhi sebelum pekerjaan lapangan dimulai.",
  },
  {
    number: 3,
    title: "Pengukuran Lapangan",
    description:
      "Surveyor KJSB turun ke lokasi untuk melakukan pengukuran langsung menggunakan Total Station dan GPS geodetik. Batas-batas bidang tanah ditentukan secara akurat di lapangan.",
  },
  {
    number: 4,
    title: "Pengolahan Data",
    description:
      "Data hasil pengukuran lapangan diolah di kantor menggunakan perangkat lunak geodetik untuk menghasilkan koordinat, luas, dan gambar bidang tanah yang presisi.",
  },
  {
    number: 5,
    title: "Upload Data ke Sistem",
    description:
      "Data pengukuran yang telah diolah diunggah ke sistem informasi pertanahan yang terhubung dengan BPN sebagai tahap awal proses administrasi resmi.",
  },
];

const bpnSteps = [
  {
    number: 6,
    title: "Verifikasi oleh BPN",
    description:
      "Petugas BPN/ATR melakukan verifikasi terhadap data yang diunggah untuk memastikan kesesuaian teknis dan administratif sebelum proses dilanjutkan.",
  },
  {
    number: 7,
    title: "Pembayaran SPS",
    description:
      "Setelah verifikasi disetujui, klien melakukan pembayaran Surat Perintah Setor (SPS) sebagai biaya resmi layanan pengukuran dari negara.",
  },
  {
    number: 8,
    title: "Pemetaan oleh BPN",
    description:
      "BPN melakukan proses pemetaan berdasarkan data yang telah diverifikasi, termasuk pengecekan terhadap peta bidang tanah yang sudah ada di sekitar lokasi.",
  },
  {
    number: 9,
    title: "Penyusunan GU dan PBT",
    description:
      "Gambar Ukur (GU) dan Peta Bidang Tanah (PBT) disusun secara resmi. GU merupakan dokumen teknis pengukuran, sedangkan PBT adalah peta yang menggambarkan bidang tanah secara spasial.",
  },
  {
    number: 10,
    title: "Upload GU dan PBT",
    description:
      "Dokumen GU dan PBT yang telah disusun diunggah ke sistem BPN untuk melalui proses persetujuan akhir oleh pejabat yang berwenang.",
  },
  {
    number: 11,
    title: "Persetujuan oleh BPN",
    description:
      "BPN memberikan persetujuan resmi terhadap GU dan PBT. Dokumen ini selanjutnya dapat digunakan sebagai dasar penerbitan sertifikat tanah atau proses pertanahan lainnya.",
  },
];

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function StepItem({
  step,
  isLast,
}: {
  step: { number: number; title: string; description: string };
  isLast: boolean;
}) {
  return (
    <div className="flex gap-5">
      {/* Number column with connecting line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white shadow-sm">
          {step.number}
        </div>
        {!isLast && (
          <div className="mt-1 w-px flex-1 bg-slate-200" style={{ minHeight: "2rem" }} />
        )}
      </div>
      {/* Content */}
      <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
        <p className="font-bold text-[#0f172a]">{step.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProsesPembuatanPBT() {
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
            <span className="text-blue-200">Layanan</span>
            <span>/</span>
            <span className="text-white">Proses Pembuatan PBT</span>
          </nav>

          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
            Alur Pengukuran Tanah · KJSB Benning dan Rekan
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Proses Pengukuran Tanah dan Pembuatan Peta Bidang Tanah (PBT)
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Pahami alur lengkap dari pengajuan permohonan hingga persetujuan
            resmi BPN, sehingga Anda dapat mempersiapkan dokumen dengan tepat.
          </p>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Mengapa Penting
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
            Dasar Hukum Pengukuran Tanah dan PBT
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Pengukuran tanah dan pembuatan Peta Bidang Tanah (PBT) merupakan
            tahap teknis yang wajib dilalui dalam proses pendaftaran tanah di
            Indonesia. Berdasarkan Peraturan Pemerintah No. 24 Tahun 1997
            tentang Pendaftaran Tanah, setiap bidang tanah yang akan
            didaftarkan harus diukur dan dipetakan terlebih dahulu untuk
            mendapatkan data yuridis dan data fisik yang akurat.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Proses ini melibatkan dua pihak utama: surveyor berlisensi dari
            Kantor Jasa Surveyor Berlisensi (KJSB) yang melaksanakan pengukuran
            lapangan dan pengolahan data, serta Badan Pertanahan Nasional (BPN)
            yang melakukan verifikasi, pemetaan, dan pengesahan dokumen. Memahami
            alur ini akan membantu Anda mempersiapkan dokumen dengan benar dan
            memperkirakan waktu penyelesaian proyek.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Alur Proses
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              11 Tahapan Pengukuran Tanah &amp; Pembuatan PBT
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Proses dibagi menjadi dua fase: pekerjaan oleh KJSB dan proses
              lanjutan di BPN.
            </p>
          </div>

          {/* Phase 1: KJSB */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-[#1e3a5f] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Fase 1
                  </p>
                  <p className="font-bold text-white">
                    Pekerjaan oleh KJSB Benning dan Rekan
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-6">
              {kjsbSteps.map((step, index) => (
                <StepItem
                  key={step.number}
                  step={step}
                  isLast={index === kjsbSteps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Phase 2: BPN */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-[#2563eb] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">
                    Fase 2
                  </p>
                  <p className="font-bold text-white">
                    Proses di Badan Pertanahan Nasional (BPN)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-6">
              {bpnSteps.map((step, index) => (
                <StepItem
                  key={step.number}
                  step={step}
                  isLast={index === bpnSteps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Summary note */}
          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
            <p className="font-semibold text-[#1e3a5f]">
              Catatan penting
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Durasi keseluruhan proses bergantung pada kelengkapan dokumen,
              kondisi lapangan, dan antrian di kantor BPN setempat. KJSB Benning
              dan Rekan akan mendampingi Anda di setiap tahap untuk memastikan
              proses berjalan lancar dan efisien.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Siap Memulai Proses Pengukuran Tanah Anda?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-blue-100">
              Hubungi KJSB Benning dan Rekan sekarang untuk konsultasi gratis.
              Kami siap memandu Anda dari pengajuan dokumen hingga PBT
              disetujui oleh BPN.
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
        <Link href="/" className="font-semibold text-white hover:text-blue-200 transition-colors">
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
