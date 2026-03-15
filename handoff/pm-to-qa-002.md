# Handoff: Project Manager → QA Engineer

## From
Project Manager

## To
QA Engineer

## Context

CEO meminta tambahan satu halaman artikel SEO baru untuk website **kjsbbenning-website**: pengukuran aset pemda & kolaborasi BKAD + DPKPP Cirebon. Halaman akan ditulis naskahnya oleh Growth/Marketing dan diimplementasikan oleh Frontend Engineer.

**Target pembaca:** BKAD, DPKPP, dinas/badan lain di pemda kabupaten Cirebon (bukan developer perumahan).

## Objective

1. **Fase awal (parallel dengan Growth):** Tulis acceptance criteria dan test plan untuk halaman baru.
2. **Fase validasi (setelah Frontend selesai):** Validasi implementasi terhadap kriteria.

## Constraints

- Halaman mengikuti pola verifikasi-psu-dpkpp-cirebon, survey-lahan-perumahan-cirebon
- Path URL: `/pengukuran-aset-pemda-cirebon` atau `/jasa-pengukuran-tanah-bkad-dpkpp-cirebon`
- Target: dinas dan badan di pemda kabupaten Cirebon

## Deliverables

### Phase 1 (Sekarang)
- **Acceptance criteria** untuk:
  - Naskah artikel (keyword integration, alur kerja pengukuran→inventaris→PBT→sertifikat, struktur H2/H3, CTA)
  - Implementasi halaman (metadata SEO, layout, link)
- **Test plan** singkat: apa yang divalidasi dan bagaimana

### Phase 2 (Setelah Frontend)
- Validasi halaman live
- Cek metadata (title, description)
- Cek link dari halaman terkait (homepage, profil, layanan)
- Cek keyword terintegrasi dalam konten

## Dependencies

- PRD: `projects/kjsbbenning-website/PRD-aset-pemda-bkad-001.md`
- Referensi halaman: `src/app/verifikasi-psu-dpkpp-cirebon/`, `src/app/survey-lahan-perumahan-cirebon/`

## Keyword Target (untuk validasi)

- "pengukuran aset pemda"
- "inventarisasi tanah jalan kabupaten"
- "BKAD Cirebon" / "BKAD Kabupaten Cirebon"
- "PBT aset daerah"
- "sertifikasi tanah pemda"
- "pengukuran jalan kabupaten"

## Done When

- Acceptance criteria dan test plan selesai (Phase 1)
- Validasi implementasi passed (Phase 2, setelah Frontend)
