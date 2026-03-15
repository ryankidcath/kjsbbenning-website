# PRD: Halaman Artikel SEO Verifikasi PSU & DPKPP Cirebon

**Project:** kjsbbenning-website  
**Source:** ceo-to-pm-001  
**Status:** Active  
**Date:** 2025-03-15  

---

## 1. Ringkasan Tujuan

Menambah **satu halaman artikel SEO** baru ke website KJSB Benning yang menonjolkan kolaborasi dengan **DPKPP Kabupaten Cirebon** dalam layanan verifikasi luas tanah PSU (prasarana, sarana, utilitas umum) sebelum serah terima ke pemda.

**Outcome:** Halaman live dengan konten SEO yang menarget developer perumahan dan DPKPP/pemda, dengan keyword terintegrasi secara natural.

---

## 2. Scope

| In Scope | Out of Scope |
|----------|--------------|
| Satu halaman baru (format sama dengan layanan existing) | Section blog / multiple articles |
| Naskah artikel SEO lengkap | Backend/API baru |
| Implementasi halaman Next.js App Router | Perubahan arsitektur |
| Link dari halaman terkait (survey-lahan-perumahan-cirebon, homepage) | GlobalNavbar (open question) |

---

## 3. Target Audience

- **Developer perumahan** — calon klien
- **DPKPP / pemda** — calon mitra / pengguna layanan

---

## 4. Keyword SEO (Prioritas)

- "serah terima PSU"
- "PSU pengembang perumahan"
- "fasos fasum" (fasilitas sosial, fasilitas umum)

---

## 5. Deliverables

### 5.1 Naskah Artikel SEO (Growth/Marketing)
- Judul (H1) dan meta title/description
- Konten body dengan struktur H2/H3 logis
- Integrasi keyword secara natural
- CTA ke WhatsApp/konsultasi
- (Opsional) Contoh proyek/angka pengalaman bila relevan

### 5.2 Implementasi Halaman (Frontend Engineer)
- Path URL SEO-friendly: `/verifikasi-psu-dpkpp-cirebon` (atau serupa)
- Metadata (title, description) untuk SEO
- Layout dan komponen mengikuti pola `survey-lahan-perumahan-cirebon`
- Link dari halaman terkait (survey-lahan-perumahan-cirebon, homepage services)

---

## 6. Referensi Teknis

- **Struktur halaman:** `src/app/survey-lahan-perumahan-cirebon/page.tsx`
- **Pola:** Hero → Layanan/Content → Project Experience → Why Us → CTA → Footer
- **Stack:** Next.js App Router, Tailwind CSS

---

## 7. Fase Kerja & Dependency

```
Phase 1 (PARALLEL)
├── Growth/Marketing: Tulis naskah artikel SEO
└── QA Engineer: Tulis acceptance criteria & test plan

Phase 2 (SEQUENTIAL — setelah Growth selesai)
└── Frontend Engineer: Implementasi halaman berdasarkan naskah

Phase 3 (SEQUENTIAL — setelah Frontend selesai)
└── QA Engineer: Validasi implementasi
```

---

## 8. Agent yang Dipanggil vs Di-Skip

| Agent | Status | Alasan |
|-------|--------|--------|
| **System Architect** | SKIP | Tidak ada perubahan arsitektur. Halaman baru mengikuti pola existing. |
| **Backend Engineer** | SKIP | Halaman statis. Tidak ada API, schema, atau business logic baru. |
| **Frontend Engineer** | **CALL** | Implementasi halaman Next.js berdasarkan naskah. |
| **QA Engineer** | **CALL** | Acceptance criteria, validasi SEO, link, metadata. |
| **DevOps** | SKIP | Tidak ada perubahan environment/CI/CD. Deploy mengikuti pipeline existing. |
| **Growth/Marketing** | **CALL** | Menulis naskah artikel SEO dengan keyword integration. |

---

## 9. Open Questions (Eskalasi ke CEO jika perlu)

1. **GlobalNavbar:** Tambah link ke halaman baru di GlobalNavbar atau cukup dari homepage/layanan terkait?
2. **Case study:** Apakah ada proyek spesifik (nama, lokasi) yang boleh disebutkan?

---

## 10. Done When

- [ ] Naskah artikel SEO selesai dan disetujui
- [ ] Halaman baru live dengan metadata SEO
- [ ] Keyword target terintegrasi secara natural
- [ ] Link dari halaman terkait berfungsi
- [ ] QA validation passed
