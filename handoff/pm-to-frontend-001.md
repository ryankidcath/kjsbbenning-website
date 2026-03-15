# Handoff: Project Manager → Frontend Engineer

## From
Project Manager

## To
Frontend Engineer

## Context

CEO meminta tambahan satu halaman artikel SEO baru untuk website **kjsbbenning-website**: verifikasi PSU & kolaborasi DPKPP Cirebon. Naskah artikel akan disiapkan oleh Growth/Marketing. Tugas Frontend: implementasi halaman berdasarkan naskah tersebut.

**PENTING:** Handoff ini dikirim sekarang agar Frontend siap. Implementasi baru dimulai **setelah naskah dari Growth/Marketing selesai**. Tunggu file naskah atau handoff dari Growth sebelum mulai coding.

## Objective

Implementasi halaman baru di Next.js App Router mengikuti pola halaman layanan existing (`survey-lahan-perumahan-cirebon`).

## Constraints

- Satu halaman baru (bukan section blog)
- Struktur dan gaya visual mengikuti `survey-lahan-perumahan-cirebon`
- Path URL SEO-friendly: `/verifikasi-psu-dpkpp-cirebon` (atau sesuai saran Growth)

## Deliverables

1. **File page baru**
   - Lokasi: `src/app/verifikasi-psu-dpkpp-cirebon/page.tsx` (atau path yang disepakati)
   - Metadata: `export const metadata` dengan title dan description dari naskah Growth

2. **Layout & komponen**
   - Hero section (breadcrumb, H1, intro, CTA)
   - Section konten (H2/H3 dari naskah)
   - CTA WhatsApp
   - Footer (ikuti pola existing)

3. **Link dari halaman terkait**
   - Tambah link ke halaman baru dari `/survey-lahan-perumahan-cirebon` (di section Verifikasi Luas PSU atau area relevan)
   - Pertimbangkan link dari homepage services jika sesuai (lihat PRD)

## Dependencies

- **Blocker:** Naskah artikel dari Growth/Marketing (handoff pm-to-growth-001)
- Referensi: `src/app/survey-lahan-perumahan-cirebon/page.tsx`
- Stack: Next.js App Router, Tailwind CSS

## Open Questions

- **GlobalNavbar:** Apakah halaman baru perlu ditambah di GlobalNavbar? CEO belum putuskan. Sementara bisa skip; cukup link dari survey-lahan-perumahan dan homepage.

## Done When

- Halaman baru live dengan metadata SEO dari naskah
- Layout mengikuti pola survey-lahan-perumahan-cirebon
- Link dari halaman terkait berfungsi
- Siap divalidasi QA
