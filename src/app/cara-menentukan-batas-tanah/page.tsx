import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cara Menentukan Batas Tanah Sesuai Sertifikat di Cirebon | KJSB Benning dan Rekan",
  description:
    "Panduan lengkap cara menentukan batas tanah sesuai sertifikat di Cirebon. Penyebab batas tanah tidak jelas dan solusi pengukuran ulang oleh surveyor profesional.",
};

const reasons = [
  {
    title: "Hilangnya Patok Batas Tanah",
    desc: "Patok atau tanda batas tanah yang dipasang saat pengukuran awal seringkali hilang karena tercabut, tertutup tanaman, terkena proyek konstruksi, atau dirusak secara tidak sengaja. Tanpa patok fisik, batas tanah menjadi tidak jelas di lapangan.",
  },
  {
    title: "Perubahan Kondisi Lahan",
    desc: "Perubahan fisik di sekitar lahan — seperti pembangunan jalan, normalisasi sungai, atau pembuatan pagar oleh tetangga — dapat menggeser atau mengaburkan titik batas yang semula sudah ditentukan.",
  },
  {
    title: "Pengukuran Lama yang Kurang Presisi",
    desc: "Tanah yang diukur puluhan tahun lalu menggunakan metode konvensional mungkin memiliki tingkat ketelitian yang lebih rendah dibandingkan standar geodetik modern. Akibatnya, data di sertifikat tidak serta merta bisa langsung diterapkan di lapangan tanpa verifikasi ulang.",
  },
  {
    title: "Warisan atau Pemecahan Bidang",
    desc: "Ketika sebidang tanah diwariskan atau dipecah menjadi beberapa bagian, batas-batas baru sering kali belum ditandai dengan patok resmi. Ini memunculkan ketidakjelasan dan potensi sengketa antara ahli waris atau pemilik baru.",
  },
];

const steps = [
  {
    number: "01",
    title: "Siapkan Dokumen Kepemilikan",
    desc: "Kumpulkan sertifikat tanah, gambar ukur, atau dokumen alas hak lainnya. Dokumen ini menjadi acuan data koordinat dan batas tanah secara administratif.",
  },
  {
    number: "02",
    title: "Hubungi Surveyor Berlisensi",
    desc: "Gunakan jasa Kantor Jasa Surveyor Berlisensi (KJSB) yang memiliki kewenangan resmi dari ATR/BPN untuk melaksanakan pengukuran kadastral.",
  },
  {
    number: "03",
    title: "Pengukuran Lapangan",
    desc: "Surveyor turun ke lokasi menggunakan Total Station atau GPS geodetik untuk menentukan koordinat titik-titik batas tanah berdasarkan data yang tercatat.",
  },
  {
    number: "04",
    title: "Konfirmasi dengan Tetangga",
    desc: "Proses penentuan batas idealnya dilakukan dengan dihadiri pemilik tanah yang berbatasan agar semua pihak menyepakati letak batas secara fisik di lapangan.",
  },
];

export default function CaraMenentukanBatasTanah() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── PAGE HEADER ── */}
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-4 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#2563eb] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-500">Artikel</span>
            <span>/</span>
            <span className="text-slate-700">Cara Menentukan Batas Tanah</span>
          </nav>

          <h1 className="text-3xl font-extrabold leading-tight text-[#1e3a5f] sm:text-4xl">
            Cara Menentukan Batas Tanah Sesuai Sertifikat di Cirebon
          </h1>
          <p className="mt-3 text-slate-500">
            Oleh{" "}
            <span className="font-medium text-slate-700">
              KJSB Benning dan Rekan
            </span>{" "}
            · Cirebon, Jawa Barat
          </p>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <article className="mx-auto max-w-3xl px-6 py-14">

        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Sudah Punya Sertifikat, Tapi Tidak Tahu Batas Tanahnya?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Banyak pemilik tanah yang sudah memiliki sertifikat tanah ternyata
            tidak mengetahui dengan pasti di mana batas fisik tanah mereka
            berada. Sertifikat memang memuat data luas dan koordinat, namun
            tanpa pengukuran di lapangan, angka-angka itu sulit diterjemahkan
            menjadi garis batas yang nyata di atas tanah.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Kondisi ini umum terjadi, terutama pada tanah yang sudah lama
            dimiliki atau baru diwarisi. Ketidakjelasan batas tanah bisa
            menimbulkan perselisihan dengan tetangga, mempersulit proses jual
            beli, atau menghambat perencanaan pembangunan. Artikel ini
            menjelaskan penyebab batas tanah menjadi tidak jelas dan langkah
            yang dapat Anda ambil untuk menentukan batas tanah secara sah dan
            akurat.
          </p>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 2. Reasons */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Mengapa Batas Tanah Bisa Menjadi Tidak Jelas?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Ada beberapa faktor yang menyebabkan batas tanah menjadi kabur
            meskipun sertifikat sudah ada:
          </p>

          <ul className="mt-6 space-y-6">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-[#0f172a]">{reason.title}</p>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {reason.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 3. How to determine correctly */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Cara Menentukan Batas Tanah Secara Benar
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Cara yang paling akurat dan sah secara hukum untuk menentukan batas
            tanah adalah melalui pengukuran ulang oleh surveyor berlisensi
            berdasarkan data yang tercatat di BPN. Berikut tahapannya:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="text-3xl font-extrabold text-[#2563eb]/20 leading-none">
                  {step.number}
                </span>
                <p className="mt-2 font-semibold text-[#1e3a5f]">
                  {step.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-relaxed text-slate-600">
            Hasil pengukuran akan berupa laporan teknis disertai koordinat
            titik-titik batas tanah yang kemudian dapat digunakan sebagai dasar
            pemasangan patok dan pengurusan dokumen pertanahan di BPN.
          </p>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 4. Patok tanah */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Pentingnya Memasang Patok Batas Tanah
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Patok tanah adalah tanda fisik yang dipancang di titik-titik sudut
            batas bidang tanah sesuai hasil pengukuran. Pemasangan patok bukan
            sekadar formalitas — ini adalah langkah krusial untuk mewujudkan
            data sertifikat menjadi batas nyata yang dapat dilihat dan
            diidentifikasi di lapangan.
          </p>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
            <p className="font-semibold text-[#1e3a5f]">
              Mengapa patok tanah sangat penting?
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              {[
                "Mencegah pergeseran atau pengurangan lahan oleh pihak lain secara tidak sah.",
                "Memperjelas batas saat berhadapan dengan tetangga yang tanahnya berbatasan langsung.",
                "Memudahkan proses jual beli karena calon pembeli dapat melihat langsung batas tanah.",
                "Menjadi bukti fisik yang dapat dirujuk jika terjadi sengketa di kemudian hari.",
                "Memperlancar proses pengurusan izin mendirikan bangunan (IMB/PBG).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[#2563eb]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 leading-relaxed text-slate-600">
            Patok yang baik terbuat dari bahan yang tahan lama seperti besi
            atau beton bertulang, dan dipasang cukup dalam agar tidak mudah
            tercabut. Setelah patok terpasang, disarankan untuk
            mendokumentasikan posisinya dengan foto dan sketsa sebagai arsip
            pribadi.
          </p>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 5. CTA */}
        <section
          id="contact"
          className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-10 text-center text-white"
        >
          <h2 className="text-2xl font-bold">
            Butuh Jasa Pengukuran dan Pemasangan Patok Tanah di Cirebon?
          </h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-blue-100">
            KJSB Benning dan Rekan siap membantu Anda menentukan batas tanah
            secara akurat sesuai data sertifikat. Hubungi kami untuk konsultasi
            gratis dan informasi biaya pengukuran.
          </p>
          <a
            href="https://wa.me/6281122222122"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5b] hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Konsultasi via WhatsApp
          </a>
          <p className="mt-4 text-sm text-blue-200">
            Respons cepat · Konsultasi gratis · Melayani Kota &amp; Kabupaten
            Cirebon
          </p>
        </section>
      </article>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-100 bg-[#0f2744] px-6 py-8 text-center text-sm text-blue-200">
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
