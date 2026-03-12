import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biaya Pengukuran Tanah di Cirebon | KJSB Benning dan Rekan",
  description:
    "Informasi lengkap tentang biaya pengukuran tanah di Cirebon. Faktor penentu biaya, kapan pengukuran diperlukan, dan cara konsultasi dengan KJSB Benning dan Rekan.",
};

export default function BiayaPengukuranTanah() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#2563eb] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-500">Artikel</span>
            <span>/</span>
            <span className="text-slate-700">Biaya Pengukuran Tanah</span>
          </nav>

          <h1 className="text-3xl font-extrabold leading-tight text-[#1e3a5f] sm:text-4xl">
            Biaya Pengukuran Tanah di Cirebon
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

      {/* Article Body */}
      <article className="mx-auto max-w-3xl px-6 py-14">

        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Berapa Biaya Pengukuran Tanah di Cirebon?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Sebelum mengurus sertifikat tanah, melakukan jual beli, atau
            merencanakan pembangunan, banyak masyarakat bertanya-tanya:{" "}
            <em>berapa biaya pengukuran tanah?</em> Pertanyaan ini wajar, karena
            biaya pengukuran tanah bisa berbeda-beda tergantung sejumlah faktor.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Artikel ini akan menjelaskan secara lengkap faktor-faktor yang
            memengaruhi biaya pengukuran tanah di Cirebon, kapan pengukuran
            tanah diperlukan, serta bagaimana cara mendapatkan estimasi biaya
            yang akurat untuk kebutuhan Anda.
          </p>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 2. Factors Affecting Cost */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Faktor-Faktor yang Memengaruhi Biaya Pengukuran Tanah
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Tidak ada tarif tunggal yang berlaku untuk semua jenis pengukuran
            tanah. Biaya ditentukan oleh sejumlah variabel yang berkaitan dengan
            kondisi dan kebutuhan proyek:
          </p>

          <ul className="mt-6 space-y-5">
            {[
              {
                title: "Luas Tanah",
                desc: "Semakin luas bidang tanah yang diukur, semakin banyak waktu dan sumber daya yang dibutuhkan. Tanah dengan luas besar umumnya memiliki biaya total yang lebih tinggi, meskipun biaya per meter persegi bisa lebih efisien.",
              },
              {
                title: "Bentuk Tanah",
                desc: "Bidang tanah dengan bentuk tidak beraturan atau banyak sudut memerlukan lebih banyak titik pengukuran dibandingkan tanah berbentuk persegi. Hal ini berdampak pada durasi pekerjaan dan biaya yang dikeluarkan.",
              },
              {
                title: "Aksesibilitas Lokasi",
                desc: "Tanah yang berada di lokasi sulit dijangkau — seperti di perbukitan, lahan sempit, atau daerah terpencil — memerlukan usaha ekstra di lapangan, yang dapat meningkatkan biaya pengukuran.",
              },
              {
                title: "Tujuan Pengukuran",
                desc: "Pengukuran untuk keperluan sertifikasi tanah, pemecahan bidang, transaksi jual beli, atau perencanaan konstruksi masing-masing memiliki standar dan tingkat ketelitian yang berbeda, sehingga biayanya pun bervariasi.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-[#0f172a]">{item.title}</p>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 3. Estimated Cost */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Estimasi Biaya Pengukuran Tanah
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Biaya pengukuran tanah di Indonesia, termasuk di Cirebon, bervariasi
            tergantung pada cakupan pekerjaan dan kondisi lapangan. Secara umum,
            komponen biaya meliputi:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 pl-2 leading-relaxed text-slate-600">
            <li>Biaya mobilisasi tim surveyor ke lokasi</li>
            <li>Biaya operasional alat ukur (Total Station, GPS geodetik)</li>
            <li>Biaya pengolahan data dan pembuatan peta</li>
            <li>Biaya administrasi dan pengurusan dokumen (jika diperlukan)</li>
          </ul>
          <p className="mt-4 leading-relaxed text-slate-600">
            Karena setiap proyek memiliki karakteristik yang berbeda, estimasi
            biaya yang akurat hanya dapat diberikan setelah survei lokasi atau
            konsultasi langsung dengan tim ahli kami. Kami berkomitmen untuk
            memberikan penawaran yang transparan dan sesuai dengan kebutuhan
            Anda.
          </p>
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
            <p className="font-semibold text-[#1e3a5f]">
              Ingin mengetahui estimasi biaya untuk tanah Anda?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Hubungi kami melalui WhatsApp untuk konsultasi gratis. Kami akan
              membantu menghitung kebutuhan dan biaya secara tepat berdasarkan
              kondisi aktual lahan Anda.
            </p>
          </div>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 4. When Survey Is Needed */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Kapan Pengukuran Tanah Diperlukan?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Pengukuran tanah bukan hanya untuk keperluan sertifikat. Ada banyak
            situasi di mana jasa pengukuran profesional dibutuhkan:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Pembuatan Sertifikat Tanah",
                desc: "Proses pendaftaran tanah di BPN/ATR memerlukan data ukuran dan batas tanah yang akurat sebagai dasar penerbitan sertifikat.",
              },
              {
                title: "Pemecahan Bidang Tanah",
                desc: "Ketika satu bidang tanah akan dibagi menjadi beberapa bagian, misalnya untuk warisan atau pengembangan kavling.",
              },
              {
                title: "Jual Beli Tanah",
                desc: "Pengukuran ulang diperlukan untuk memastikan luas tanah yang diperjualbelikan sesuai dengan dokumen dan tidak terjadi sengketa.",
              },
              {
                title: "Perencanaan Pembangunan",
                desc: "Sebelum membangun rumah, gedung, atau infrastruktur, diperlukan data topografi dan batas lahan yang tepat.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-semibold text-[#1e3a5f]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 5. PBT */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Apa Itu Peta Bidang Tanah (PBT)?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            <strong className="text-[#0f172a]">
              Peta Bidang Tanah (PBT)
            </strong>{" "}
            adalah dokumen peta resmi yang menggambarkan letak, bentuk, dan
            batas-batas suatu bidang tanah berdasarkan hasil pengukuran di
            lapangan. PBT merupakan salah satu dokumen teknis yang sering
            dibutuhkan dalam proses administrasi pertanahan.
          </p>
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold text-[#1e3a5f]">
              PBT diperlukan dalam proses:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#2563eb]">→</span>
                Pendaftaran tanah pertama kali (PTSL / program sertifikasi)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#2563eb]">→</span>
                Pemecahan, pemisahan, atau penggabungan bidang tanah
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#2563eb]">→</span>
                Peralihan hak atas tanah (jual beli, hibah, waris)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#2563eb]">→</span>
                Penyelesaian sengketa batas tanah
              </li>
            </ul>
          </div>
          <p className="mt-4 leading-relaxed text-slate-600">
            KJSB Benning dan Rekan berpengalaman dalam pembuatan PBT yang akurat
            dan sesuai dengan standar BPN/ATR, sehingga proses administrasi
            pertanahan Anda dapat berjalan lancar.
          </p>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 6. Service Area */}
        <section>
          <h2 className="text-2xl font-bold text-[#1e3a5f]">
            Area Layanan: Wilayah Cirebon
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            KJSB Benning dan Rekan melayani jasa pengukuran dan pemetaan tanah
            di seluruh wilayah Cirebon, meliputi:
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            {[
              {
                name: "Kota Cirebon",
                desc: "Mencakup seluruh kecamatan di Kota Cirebon, termasuk kawasan perkotaan dan permukiman.",
              },
              {
                name: "Kabupaten Cirebon",
                desc: "Mencakup seluruh kecamatan dan desa di wilayah Kabupaten Cirebon.",
              },
            ].map((area) => (
              <div
                key={area.name}
                className="flex flex-1 items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-white">
                  <svg
                    className="h-5 w-5"
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
                <div>
                  <p className="font-semibold text-[#1e3a5f]">{area.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* 7. CTA */}
        <section
          id="contact"
          className="rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#1e4976] px-8 py-10 text-center text-white"
        >
          <h2 className="text-2xl font-bold">
            Konsultasikan Kebutuhan Pengukuran Tanah Anda
          </h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-blue-100">
            Tidak perlu bingung soal biaya. Hubungi KJSB Benning dan Rekan
            sekarang untuk mendapatkan informasi biaya yang transparan dan
            konsultasi gratis tanpa komitmen.
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
            Respons cepat · Konsultasi gratis · Tanpa biaya komitmen
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-[#0f2744] px-6 py-8 text-center text-sm text-blue-200">
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
