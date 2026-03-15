# QA: Halaman Artikel SEO Pengukuran Aset Pemda & BKAD Cirebon

**Project:** kjsbbenning-website  
**Source:** pm-to-qa-002  
**Status:** Phase 1 (AC & Test Plan)  
**Date:** 2025-03-15  

---

## 1. Ringkasan Objective

Memastikan halaman artikel SEO baru untuk **pengukuran aset pemda** memenuhi kriteria kualitas untuk:
- **Naskah artikel:** keyword integration, alur kerja (pengukuran→inventaris→PBT→sertifikat), struktur H2/H3, CTA
- **Implementasi halaman:** metadata SEO, layout, link dari homepage, profil, layanan

**Target pembaca:** BKAD, DPKPP, dinas/badan lain di pemda kabupaten Cirebon (bukan developer perumahan).

---

## 2. Acceptance Criteria

### 2.1 Naskah Artikel (Content)

| ID | Kriteria | Testable |
|----|----------|----------|
| AC-1.1 | Judul H1 mengandung "pengukuran aset pemda" dan "BKAD" atau "DPKPP Cirebon" | Ya |
| AC-1.2 | Meta title mengandung keyword utama dan brand; panjang ≈50–60 karakter | Ya |
| AC-1.3 | Meta description mengandung minimal 2 keyword target; panjang 150–160 karakter | Ya |
| AC-1.4 | Keyword "pengukuran aset pemda" muncul minimal 2x dalam konten body | Ya |
| AC-1.5 | Keyword "inventarisasi tanah jalan kabupaten" atau varian natural muncul minimal 1x | Ya |
| AC-1.6 | Keyword "BKAD Cirebon" atau "BKAD Kabupaten Cirebon" muncul minimal 2x | Ya |
| AC-1.7 | Keyword "PBT aset daerah" atau "PBT" dalam konteks aset daerah muncul minimal 1x | Ya |
| AC-1.8 | Keyword "sertifikasi tanah pemda" atau varian natural muncul minimal 1x | Ya |
| AC-1.9 | Keyword "pengukuran jalan kabupaten" atau varian natural muncul minimal 1x | Ya |
| AC-1.10 | Alur kerja dijelaskan: pengukuran → inventaris → PBT → sertifikat BPN | Ya |
| AC-1.11 | Struktur H2/H3 logis: minimal 5 H2 (Apa itu, Peran KJSB, Kolaborasi BKAD+DPKPP, Layanan/Alur, Why Us, CTA) | Ya |
| AC-1.12 | CTA section ada dengan tombol "Konsultasi via WhatsApp" mengarah ke https://wa.me/6281122222122 | Ya |
| AC-1.13 | Breadcrumb: Beranda / Layanan / [nama halaman] | Ya |

### 2.2 Implementasi Halaman (Technical)

| ID | Kriteria | Testable |
|----|----------|----------|
| AC-2.1 | Path URL: `/pengukuran-aset-pemda-cirebon` atau `/jasa-pengukuran-tanah-bkad-dpkpp-cirebon` (sesuai keputusan PM) | Ya |
| AC-2.2 | Metadata Next.js: `title` dan `description` terpasang dan sesuai naskah | Ya |
| AC-2.3 | Layout mengikuti pola verifikasi-psu-dpkpp-cirebon: Hero → Content → Project Experience → Why Us → CTA → Footer | Ya |
| AC-2.4 | Link dari homepage ke halaman baru ada | Ya |
| AC-2.5 | Link dari halaman profil ke halaman baru ada | Ya |
| AC-2.6 | Link dari halaman layanan (survey-lahan atau halaman layanan lain) ke halaman baru ada | Ya |
| AC-2.7 | Halaman responsive (mobile, tablet, desktop) | Ya |
| AC-2.8 | Tidak ada broken link, gambar, atau error di console | Ya |

---

## 3. Test Plan

### 3.1 Happy Path (HP)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| HP-1 | Halaman dapat diakses | Buka path URL halaman baru | Halaman load, H1 tampil |
| HP-2 | Metadata SEO | View page source / inspect `<title>`, `<meta name="description">` | Title dan description sesuai AC-1.2, AC-1.3 |
| HP-3 | Keyword dalam konten | Cari 6 keyword target di body | Minimal sesuai AC-1.4 s/d AC-1.9 |
| HP-4 | Alur kerja tercakup | Cek konten body | Pengukuran→inventaris→PBT→sertifikat disebutkan |
| HP-5 | CTA berfungsi | Klik "Konsultasi via WhatsApp" | Buka WhatsApp dengan nomor 6281122222122 |
| HP-6 | Link dari homepage | Buka `/`, cari link ke halaman pengukuran aset pemda | Link ada dan mengarah ke path yang benar |
| HP-7 | Link dari profil | Buka halaman profil, cari link ke layanan/halaman baru | Link ada dan mengarah ke path yang benar |
| HP-8 | Link dari layanan | Buka halaman layanan terkait, cari link ke halaman baru | Link ada dan mengarah ke path yang benar |
| HP-9 | Breadcrumb navigasi | Klik "Beranda" di breadcrumb | Redirect ke `/` |

### 3.2 Edge Cases (EC)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| EC-1 | Direct URL access | Akses path URL tanpa melalui homepage | Halaman load normal |
| EC-2 | Trailing slash | Akses path URL dengan trailing slash | Redirect atau load sama, tidak 404 |
| EC-3 | Mobile view | Buka di viewport mobile (375px) | Layout tidak pecah, CTA tetap klikable |
| EC-4 | Target audience jelas | Baca konten | Fokus BKAD/DPKPP/dinas pemda, bukan developer perumahan |

### 3.3 Negative Cases (NC)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| NC-1 | URL salah | Akses path typo atau salah | 404 page |
| NC-2 | Link mati | Cek semua link di halaman | Tidak ada href kosong atau 404 |

### 3.4 Regression (R)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| R-1 | Homepage tidak rusak | Buka `/` | Layout dan konten tetap normal |
| R-2 | Halaman profil tidak rusak | Buka halaman profil | Layout dan konten tetap normal |
| R-3 | Halaman verifikasi-psu tidak rusak | Buka `/verifikasi-psu-dpkpp-cirebon` | Layout dan konten tetap normal |
| R-4 | Footer konsisten | Bandingkan footer halaman baru vs referensi | Sama (brand, copyright) |

---

## 4. Keyword Validation Checklist

| Keyword | Lokasi yang Harus Ada |
|---------|------------------------|
| pengukuran aset pemda | Meta, H1/H2, body |
| inventarisasi tanah jalan kabupaten | Meta atau body |
| BKAD Cirebon / BKAD Kabupaten Cirebon | H1, meta, H2, body |
| PBT aset daerah | Body (dalam konteks alur kerja) |
| sertifikasi tanah pemda | Meta atau body |
| pengukuran jalan kabupaten | Meta atau body |

---

## 5. Alur Kerja Validation

Konten harus menjelaskan alur:

1. **Pengukuran** — pengukuran tanah aset pemda (jalan kabupaten, dll)
2. **Inventaris** — inventarisasi aset
3. **PBT** — Peta Bidang Tanah untuk proses sertifikasi
4. **Sertifikat** — sertifikat BPN

---

## 6. Phase 2: Validasi (Setelah Frontend Selesai)

Saat Frontend selesai implementasi, jalankan:

1. **Smoke test:** HP-1, HP-2, HP-5
2. **Full test:** Semua HP, EC, NC, R
3. **Keyword audit:** Checklist Section 4
4. **Alur kerja audit:** Section 5
5. **Release readiness:** Semua AC passed → RELEASE READY

---

## 7. Risk & Notes

| Risk | Level | Mitigasi |
|------|-------|----------|
| Keyword stuffing | LOW | Keyword harus natural, tidak dipaksa berulang berlebihan |
| Path URL final | OPEN | PM/CEO putuskan: `/pengukuran-aset-pemda-cirebon` vs `/jasa-pengukuran-tanah-bkad-dpkpp-cirebon` |
| Link silang ke verifikasi-psu | OPEN | Tergantung keputusan CEO/PM (PRD open question) |
| Target audience tercampur | MEDIUM | Pastikan konten fokus pemda, bukan developer perumahan |

---

## 8. Done When (Phase 1)

- [x] Acceptance criteria tertulis
- [x] Test plan tertulis
- [ ] Phase 2: Validasi implementasi passed (setelah Frontend selesai)
