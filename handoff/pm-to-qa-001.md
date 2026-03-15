# Handoff: Project Manager → QA Engineer

## From
Project Manager

## To
QA Engineer

## Context

CEO meminta tambahan satu halaman artikel SEO baru untuk website **kjsbbenning-website**: verifikasi PSU & kolaborasi DPKPP Cirebon. Halaman akan ditulis naskahnya oleh Growth/Marketing dan diimplementasikan oleh Frontend Engineer.

## Objective

1. **Fase awal (parallel dengan Growth):** Tulis acceptance criteria dan test plan untuk halaman baru.
2. **Fase validasi (setelah Frontend selesai):** Validasi implementasi terhadap kriteria.

## Constraints

- Halaman mengikuti pola `survey-lahan-perumahan-cirebon`
- Path URL: `/verifikasi-psu-dpkpp-cirebon` (atau serupa)
- Target: developer perumahan, DPKPP/pemda

## Deliverables

### Phase 1 (Sekarang)
- **Acceptance criteria** untuk:
  - Naskah artikel (keyword integration, struktur H2/H3, CTA)
  - Implementasi halaman (metadata SEO, layout, link)
- **Test plan** singkat: apa yang divalidasi dan bagaimana

### Phase 2 (Setelah Frontend)
- Validasi halaman live
- Cek metadata (title, description)
- Cek link dari halaman terkait
- Cek keyword terintegrasi dalam konten

## Dependencies

- PRD: `projects/kjsbbenning-website/PRD-verifikasi-psu-001.md`
- Referensi halaman: `src/app/survey-lahan-perumahan-cirebon/page.tsx`

## Keyword Target (untuk validasi)

- "serah terima PSU"
- "PSU pengembang perumahan"
- "fasos fasum"

## Done When

- Acceptance criteria dan test plan selesai (Phase 1)
- Validasi implementasi passed (Phase 2, setelah Frontend)
