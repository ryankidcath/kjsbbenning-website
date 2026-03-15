# Handoff: Growth/Marketing → Frontend Engineer

## From
Growth/Marketing

## To
Frontend Engineer

## Context

PM meminta naskah artikel SEO untuk halaman verifikasi PSU & kolaborasi DPKPP Cirebon. Naskah telah selesai dan disimpan di `content/verifikasi-psu-dpkpp-cirebon.md`. Frontend dapat melanjutkan implementasi halaman sesuai pm-to-frontend-001.

## Objective

Implementasi halaman `/verifikasi-psu-dpkpp-cirebon` berdasarkan naskah yang telah disiapkan. Naskah lengkap berisi: H1, meta title/description, struktur H2/H3, copy untuk Hero, body, Project Experience, Why Us, dan CTA.

## Constraints

- Layout dan gaya visual mengikuti `survey-lahan-perumahan-cirebon/page.tsx`
- Path URL: `/verifikasi-psu-dpkpp-cirebon`
- Keyword sudah terintegrasi di naskah; jangan ubah struktur konten yang memengaruhi SEO

## Deliverables

- Halaman baru di `src/app/verifikasi-psu-dpkpp-cirebon/page.tsx`
- Metadata SEO sesuai naskah (title, description)
- Link dari `/survey-lahan-perumahan-cirebon` ke halaman baru (di section Verifikasi Luas PSU)

## Dependencies

- Naskah lengkap: `projects/kjsbbenning-website/content/verifikasi-psu-dpkpp-cirebon.md`
- Referensi implementasi: `src/app/survey-lahan-perumahan-cirebon/page.tsx`

## Open Questions

- Tidak ada

## Done When

- Halaman live dengan konten sesuai naskah
- Metadata SEO terpasang
- Link dari halaman survey-lahan-perumahan-cirebon berfungsi
