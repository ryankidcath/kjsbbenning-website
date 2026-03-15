import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pengukuran Aset Pemda & BKAD Cirebon | KJSB Benning",
  description:
    "Layanan pengukuran aset pemda, inventarisasi tanah jalan kabupaten, PBT aset daerah, dan sertifikasi tanah pemda. Kolaborasi BKAD dan DPKPP Cirebon.",
};

const whyUs = [
  "Lisensi KJSB resmi dari Kementerian ATR/BPN—hasil pekerjaan diakui secara hukum",
  "Pengalaman kolaborasi dengan BKAD Cirebon dan DPKPP",
  "Alur kerja terstruktur: pengukuran → inventaris → PBT → sertifikat BPN",
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

export default function PengukuranAsetPemdaBkadCirebon() {
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
            <span className="text-white">Pengukuran Aset Pemda BKAD Cirebon</span>
          </nav>

          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium text-blue-300">
            Pengukuran Aset Pemda · BKAD &amp; DPKPP Cirebon
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Pengukuran Aset Pemda dan Kolaborasi BKAD DPKPP Kabupaten Cirebon
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            KJSB Benning dan Rekan berkolaborasi dengan BKAD (Badan Keuangan dan
            Aset Daerah) dan DPKPP Kabupaten Cirebon dalam layanan pengukuran
            aset pemda, inventarisasi tanah jalan kabupaten, hingga penerbitan
            PBT aset daerah dan pengawalan sertifikasi tanah pemda di BPN. Kami
            mendukung dinas dan badan di pemda kabupaten Cirebon dalam
            pengelolaan aset tanah yang akurat dan terdokumentasi.
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
              Peran BKAD dan DPKPP dalam Pengelolaan Aset Pemda
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                BKAD (Badan Keuangan dan Aset Daerah) Kabupaten Cirebon
                bertanggung jawab atas pengelolaan keuangan dan aset daerah,
                termasuk tanah milik pemda seperti jalan kabupaten dan fasilitas
                umum lainnya. DPKPP (Dinas Perumahan, Kawasan Permukiman, dan
                Pertanahan) mengurusi aspek pertanahan dan permukiman. Keduanya
                membutuhkan data pengukuran yang akurat untuk inventarisasi dan
                sertifikasi tanah pemda.
              </p>
              <p>
                Pengukuran aset pemda—terutama pengukuran jalan kabupaten dan
                tanah milik daerah—merupakan langkah awal yang kritis. Tanpa data
                ukur yang valid, proses inventarisasi tanah jalan kabupaten dan
                penerbitan sertifikat di BPN akan terhambat. KJSB Benning dan
                Rekan mendukung BKAD Cirebon dan instansi terkait dengan layanan
                pengukuran teknis yang diakui secara hukum.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Alur Kerja: Dari Pengukuran hingga Sertifikat BPN
            </h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  1. Pengukuran Aset Pemda di Lapangan
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Langkah pertama adalah pengukuran jalan kabupaten dan aset
                  tanah pemda lainnya di lapangan. Kami melakukan pengukuran
                  batas, luas, dan posisi bidang tanah menggunakan peralatan
                  survey modern. Hasil pengukuran menjadi dasar untuk langkah
                  selanjutnya.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  2. Inventarisasi Tanah Jalan Kabupaten
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Data hasil pengukuran diolah menjadi dokumen inventaris yang
                  sistematis. Inventarisasi tanah jalan kabupaten mencakup
                  identifikasi lokasi, luas, batas, dan status aset. Dokumen ini
                  mendukung BKAD Cirebon dalam pengelolaan dan pelaporan aset
                  daerah.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  3. Penerbitan PBT Aset Daerah
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Peta Bidang Tanah (PBT) adalah dokumen teknis yang diperlukan
                  untuk proses sertifikasi di BPN. Kami menyusun PBT aset daerah
                  berdasarkan hasil pengukuran dan inventarisasi. PBT yang akurat
                  memperlancar proses permohonan sertifikat tanah pemda.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  4. Pengawalan Sertifikasi Tanah Pemda di BPN
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  KJSB Benning dan Rekan dapat membantu mengawal proses
                  sertifikasi tanah pemda di BPN. Dengan dokumen pengukuran dan
                  PBT yang lengkap, proses permohonan sertifikat dapat berjalan
                  lebih efisien.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
              Layanan untuk BKAD Cirebon dan Instansi Pemda
            </h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  Pengukuran Jalan Kabupaten
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Pengukuran jalan kabupaten meliputi pengukuran batas, lebar,
                  panjang, dan luas jalan milik pemda. Data digunakan untuk
                  inventarisasi aset dan keperluan administrasi pertanahan.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  Inventaris dan Identifikasi Aset Tanah
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Penyusunan dokumen inventaris aset tanah pemda, termasuk
                  identifikasi lokasi, status, dan kondisi. Mendukung BKAD dalam
                  tugas pengelolaan aset daerah.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-bold text-[#0f172a]">
                  PBT dan Sertifikasi BPN
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Penerbitan Peta Bidang Tanah (PBT) dan pendampingan proses
                  sertifikasi tanah pemda di BPN. Hasil pekerjaan diakui secara
                  hukum dan siap digunakan dalam administrasi pertanahan.
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
              KJSB Benning dan Rekan memiliki pengalaman berkolaborasi dengan
              BKAD dan DPKPP Kabupaten Cirebon dalam pekerjaan pengukuran aset
              pemda. Proyek yang ditangani mencakup pengukuran jalan kabupaten,
              inventarisasi tanah milik daerah, penerbitan PBT aset daerah, dan
              pengawalan sertifikasi tanah pemda di BPN. Kami memahami prosedur
              dan kebutuhan administrasi instansi pemda.
            </p>
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
              Mengapa Memilih KJSB Benning untuk Pengukuran Aset Pemda?
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
                    Kementerian ATR/BPN, sehingga hasil pekerjaan pengukuran
                    aset pemda kami diakui secara hukum dan dapat digunakan
                    langsung dalam administrasi pemda.
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

      {/* ── 5. LAYANAN TERKAIT (Link Silang) ── */}
      <section className="bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-slate-600 leading-relaxed">
            Untuk layanan verifikasi PSU pengembang perumahan sebelum serah
            terima ke DPKPP, lihat{" "}
            <Link
              href="/verifikasi-psu-dpkpp-cirebon"
              className="font-semibold text-[#2563eb] hover:text-[#1e3a5f] underline underline-offset-2 transition-colors"
            >
              Verifikasi PSU &amp; DPKPP Cirebon
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Konsultasikan Kebutuhan Pengukuran Aset Pemda Anda
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-blue-100">
              BKAD, DPKPP, dan dinas terkait di Kabupaten Cirebon—hubungi tim kami
              untuk konsultasi pengukuran aset pemda, inventarisasi tanah jalan
              kabupaten, PBT aset daerah, dan sertifikasi tanah pemda. Kami siap
              mendukung pengelolaan aset daerah yang akurat dan terdokumentasi.
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
              Respons cepat · Konsultasi gratis · Melayani instansi pemda
              Kabupaten &amp; Kota Cirebon
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
