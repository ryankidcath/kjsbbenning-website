# Handoff: Project Manager → Frontend Engineer

## From
Project Manager

## To
Frontend Engineer

## Context

CEO meminta tambahan satu halaman artikel SEO baru untuk website **kjsbbenning-website**: pengukuran aset pemda & kolaborasi BKAD + DPKPP Cirebon. Naskah artikel akan disiapkan oleh Growth/Marketing. Tugas Frontend: implementasi halaman berdasarkan naskah tersebut.

**PENTING:** Handoff ini dikirim sekarang agar Frontend siap. Implementasi baru dimulai **setelah naskah dari Growth/Marketing selesai**. Tunggu file naskah atau handoff dari Growth sebelum mulai coding.

## Objective

Implementasi halaman baru di Next.js App Router mengikuti pola halaman layanan existing (verifikasi-psu-dpkpp-cirebon, survey-lahan-perumahan-cirebon).

## Constraints

- Satu halaman baru (bukan section blog)
- Struktur dan gaya visual mengikuti verifikasi-psu-dpkpp-cirebon, survey-lahan-perumahan-cirebon
- Path URL SEO-friendly: `/pengukuran-aset-pemda-cirebon` atau `/jasa-pengukuran-tanah-bkad-dpkpp-cirebon` (sesuai saran Growth)

## Deliverables

1. **File page baru**
   - Lokasi: `src/app/pengukuran-aset-pemda-cirebon/page.tsx` (atau path yang disepakati)
   - Metadata: `export const metadata` dengan title dan description dari naskah Growth

2. **Layout & komponen**
   - Hero section (breadcrumb, H1, intro, CTA)
   - Section konten (H2/H3 dari naskah, alur: pengukuran → inventaris → PBT → sertifikat BPN)
   - CTA WhatsApp
   - Footer (ikuti pola existing)

3. **Link dari halaman terkait**
   - Tambah link ke halaman baru dari homepage services
   - Pertimbangkan link dari profil-kjsb-benning
   - Open question: link silang ke verifikasi-psu-dpkpp-cirebon? (sementara bisa tambahkan—sama-sama kolaborasi pemda)

## Dependencies

- **Blocker:** Naskah artikel dari Growth/Marketing (handoff pm-to-growth-002)
- Referensi: `src/app/verifikasi-psu-dpkpp-cirebon/page.tsx`, `src/app/survey-lahan-perumahan-cirebon/page.tsx`
- Stack: Next.js App Router, Tailwind CSS

## Open Questions

- **Link silang:** Apakah perlu link ke verifikasi-psu-dpkpp-cirebon? CEO belum putuskan. Sementara bisa tambahkan (keduanya kolaborasi pemda).

## Done When

- Halaman baru live dengan metadata SEO dari naskah
- Layout mengikuti pola existing
- Link dari halaman terkait berfungsi
- Siap divalidasi QA
