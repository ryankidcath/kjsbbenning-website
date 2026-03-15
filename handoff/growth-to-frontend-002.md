# Handoff: Growth/Marketing → Frontend Engineer

## From
Growth/Marketing

## To
Frontend Engineer

## Context

PM meminta naskah artikel SEO untuk halaman kolaborasi BKAD + DPKPP (pengukuran aset pemda). Naskah telah selesai dan disimpan di `content/pengukuran-aset-pemda-bkad-cirebon.md`. Target pembaca: BKAD, DPKPP, dinas/badan lain di pemda kabupaten Cirebon—bukan developer perumahan.

## Objective

Implementasi halaman `/pengukuran-aset-pemda-bkad-cirebon` berdasarkan naskah yang telah disiapkan. Naskah lengkap berisi: H1, meta title/description, struktur H2/H3, copy untuk Hero, body (alur kerja: pengukuran → inventaris → PBT → sertifikat BPN), Project Experience, Why Us, dan CTA.

## Constraints

- Layout dan gaya visual mengikuti `survey-lahan-perumahan-cirebon/page.tsx`
- Path URL: `/pengukuran-aset-pemda-bkad-cirebon`
- Target audience: instansi pemda (BKAD, DPKPP, dinas lain), bukan developer
- Keyword sudah terintegrasi di naskah; jangan ubah struktur konten yang memengaruhi SEO

## Deliverables

- Halaman baru di `src/app/pengukuran-aset-pemda-bkad-cirebon/page.tsx`
- Metadata SEO sesuai naskah (title, description)
- (Opsional) Link silang ke/ dari verifikasi-psu-dpkpp-cirebon—lihat section 8 di naskah; konfirmasi PM/CEO jika perlu

## Dependencies

- Naskah lengkap: `projects/kjsbbenning-website/content/pengukuran-aset-pemda-bkad-cirebon.md`
- Referensi implementasi: `src/app/survey-lahan-perumahan-cirebon/page.tsx`

## Open Questions

- Link silang ke verifikasi-psu-dpkpp-cirebon: naskah menyertakan rekomendasi; keputusan final bisa diserahkan ke PM/CEO

## Done When

- Halaman live dengan konten sesuai naskah
- Metadata SEO terpasang
- Alur kerja (pengukuran → inventaris → PBT → sertifikat) tercakup di konten
