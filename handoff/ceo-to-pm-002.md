# Handoff: CEO → Project Manager

## From
CEO

## To
Project Manager

## Context

Artikel SEO sebelumnya (verifikasi PSU DPKPP) sudah selesai dan live; user sudah request indexing. Sekarang user ingin **artikel SEO baru** dengan fokus berbeda.

**Fokus baru:** Kolaborasi KJSB Benning dengan **BKAD** (Badan Keuangan dan Aset Daerah) dan **DPKPP** (Dinas Perumahan, Kawasan Permukiman, dan Pertanahan) Kabupaten Cirebon.

**Target pembaca:** Dinas dan badan lain di pemda kabupaten cirebon (bukan developer perumahan).

**Contoh pekerjaan dengan BKAD:**
- Pengukuran tanah aset pemda berupa **jalan kabupaten**
- Pengukuran, **inventaris**, dan **identifikasi**
- Menerbitkan **Peta Bidang Tanah (PBT)**
- Membantu mengawal pembuatan **sertifikat di BPN**

## Objective

Tambahkan satu halaman artikel SEO baru yang:
- Menonjolkan kerja sama dengan BKAD dan DPKPP Kabupaten Cirebon
- Menjelaskan layanan pengukuran aset pemda (jalan kabupaten) → inventaris → PBT → sertifikat BPN
- Menarget pembaca: dinas dan badan lain di pemda kabupaten cirebon (calon klien/mitra)

## Constraints

- Satu halaman baru (format sama dengan halaman layanan/artikel existing)
- Struktur dan gaya visual mengikuti pola halaman existing (verifikasi-psu-dpkpp-cirebon, survey-lahan-perumahan-cirebon)
- Naskah + implementasi ke website

## Target Audience

- BKAD, DPKPP, dan dinas/badan lain di pemda kabupaten cirebon
- Fokus: instansi pemerintah yang butuh pengukuran, inventarisasi, dan sertifikasi aset tanah

## Keyword SEO (Saran — bisa disesuaikan Growth/Marketing)

- "pengukuran aset pemda"
- "inventarisasi tanah jalan kabupaten"
- "BKAD Cirebon" / "BKAD Kabupaten Cirebon"
- "PBT aset daerah"
- "sertifikasi tanah pemda"
- "pengukuran jalan kabupaten"

## Deliverables

1. **Naskah artikel SEO** — Copy lengkap untuk halaman, termasuk:
   - Judul (H1) dan meta title/description
   - Konten body: kolaborasi BKAD + DPKPP, alur kerja (pengukuran → inventaris → PBT → sertifikat BPN)
   - Integrasi keyword secara natural
   - CTA ke WhatsApp/konsultasi
   - (Opsional) Contoh proyek/angka pengalaman bila relevan

2. **Implementasi halaman** — File page baru di Next.js App Router:
   - Path URL SEO-friendly (saran: `/pengukuran-aset-pemda-cirebon` atau `/jasa-pengukuran-tanah-bkad-dpkpp-cirebon`)
   - Metadata untuk SEO
   - Layout mengikuti pola halaman existing
   - Link dari halaman terkait (homepage, profil, atau layanan)

## Dependencies

- Struktur halaman existing sebagai referensi
- Konten domain: BKAD, DPKPP, inventaris aset, PBT, sertifikat BPN

## Suggested Sequencing

1. **Growth/Marketing** — Tulis naskah artikel SEO
2. **Frontend Engineer** — Implementasi halaman berdasarkan naskah

## Open Questions

- Apakah perlu link silang ke halaman verifikasi-psu-dpkpp-cirebon (karena sama-sama kolaborasi pemda)?
- Apakah ada proyek spesifik dengan BKAD yang boleh disebutkan?

## Done When

- Naskah artikel SEO selesai dan disetujui
- Halaman baru live di website dengan metadata SEO
- Keyword target terintegrasi secara natural
- Link dari halaman terkait berfungsi
