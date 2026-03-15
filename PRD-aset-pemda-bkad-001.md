# PRD: Halaman Artikel SEO Pengukuran Aset Pemda & BKAD Cirebon

**Project:** kjsbbenning-website  
**Source:** ceo-to-pm-002  
**Status:** Active  
**Date:** 2025-03-15  

---

## 1. Ringkasan Tujuan

Menambah **satu halaman artikel SEO** baru ke website KJSB Benning yang menonjolkan kolaborasi dengan **BKAD** (Badan Keuangan dan Aset Daerah) dan **DPKPP** Kabupaten Cirebon dalam layanan pengukuran aset pemda.

**Fokus:** Pengukuran tanah aset pemda (jalan kabupaten) → inventaris → PBT → sertifikat BPN.

**Outcome:** Halaman live dengan konten SEO yang menarget dinas dan badan lain di pemda kabupaten Cirebon (calon klien/mitra).

---

## 2. Scope

| In Scope | Out of Scope |
|----------|--------------|
| Satu halaman baru (format sama dengan layanan existing) | Section blog / multiple articles |
| Naskah artikel SEO lengkap | Backend/API baru |
| Implementasi halaman Next.js App Router | Perubahan arsitektur |
| Link dari halaman terkait (homepage, profil, layanan) | GlobalNavbar (open question) |

---

## 3. Target Audience

- **BKAD, DPKPP** — dinas dan badan di pemda kabupaten Cirebon
- **Dinas/badan lain di pemda** — instansi yang butuh pengukuran, inventarisasi, sertifikasi aset tanah

**Bukan:** Developer perumahan (beda dengan artikel verifikasi PSU).

---

## 4. Keyword SEO (Prioritas)

- "pengukuran aset pemda"
- "inventarisasi tanah jalan kabupaten"
- "BKAD Cirebon" / "BKAD Kabupaten Cirebon"
- "PBT aset daerah"
- "sertifikasi tanah pemda"
- "pengukuran jalan kabupaten"

---

## 5. Deliverables

### 5.1 Naskah Artikel SEO (Growth/Marketing)
- Judul (H1) dan meta title/description
- Konten body: kolaborasi BKAD + DPKPP, alur kerja (pengukuran → inventaris → PBT → sertifikat BPN)
- Integrasi keyword secara natural
- CTA ke WhatsApp/konsultasi
- (Opsional) Contoh proyek/angka pengalaman bila relevan

### 5.2 Implementasi Halaman (Frontend Engineer)
- Path URL SEO-friendly: `/pengukuran-aset-pemda-cirebon` atau `/jasa-pengukuran-tanah-bkad-dpkpp-cirebon`
- Metadata untuk SEO
- Layout mengikuti pola verifikasi-psu-dpkpp-cirebon, survey-lahan-perumahan-cirebon
- Link dari halaman terkait (homepage, profil, layanan)

---

## 6. Referensi Teknis

- **Struktur halaman:** `src/app/verifikasi-psu-dpkpp-cirebon/`, `src/app/survey-lahan-perumahan-cirebon/`
- **Pola:** Hero → Content → Project Experience → Why Us → CTA → Footer
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

1. **Link silang:** Apakah perlu link ke halaman verifikasi-psu-dpkpp-cirebon (sama-sama kolaborasi pemda)?
2. **Case study:** Apakah ada proyek spesifik dengan BKAD yang boleh disebutkan?

---

## 10. Done When

- [ ] Naskah artikel SEO selesai dan disetujui
- [ ] Halaman baru live dengan metadata SEO
- [ ] Keyword target terintegrasi secara natural
- [ ] Link dari halaman terkait berfungsi
- [ ] QA validation passed
