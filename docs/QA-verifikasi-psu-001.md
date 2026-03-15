# QA: Halaman Artikel SEO Verifikasi PSU & DPKPP Cirebon

**Project:** kjsbbenning-website  
**Source:** pm-to-qa-001  
**Status:** Phase 1 (AC & Test Plan)  
**Date:** 2025-03-15  

---

## 1. Ringkasan Objective

Memastikan halaman artikel SEO baru `/verifikasi-psu-dpkpp-cirebon` memenuhi kriteria kualitas untuk:
- **Naskah artikel:** keyword integration, struktur H2/H3, CTA
- **Implementasi halaman:** metadata SEO, layout, link dari halaman terkait

---

## 2. Acceptance Criteria

### 2.1 Naskah Artikel (Content)

| ID | Kriteria | Testable |
|----|----------|----------|
| AC-1.1 | Judul H1: "Verifikasi PSU dan Serah Terima ke DPKPP Kabupaten Cirebon" | Ya |
| AC-1.2 | Meta title mengandung keyword utama dan brand: "Verifikasi PSU & Serah Terima ke DPKPP Cirebon \| KJSB Benning" (≈58 karakter) | Ya |
| AC-1.3 | Meta description mengandung "serah terima PSU", "PSU pengembang perumahan", "fasos fasum" atau varian natural; panjang 150–160 karakter | Ya |
| AC-1.4 | Keyword "serah terima PSU" muncul minimal 2x dalam konten body | Ya |
| AC-1.5 | Keyword "PSU pengembang perumahan" muncul minimal 2x dalam konten body | Ya |
| AC-1.6 | Keyword "fasos fasum" muncul minimal 1x dalam konten body | Ya |
| AC-1.7 | Struktur H2/H3 logis: minimal 5 H2 (Apa Itu PSU, Peran KJSB, Kolaborasi DPKPP, Layanan, Why Us, CTA) | Ya |
| AC-1.8 | CTA section ada dengan tombol "Konsultasi via WhatsApp" mengarah ke https://wa.me/6281122222122 | Ya |
| AC-1.9 | Breadcrumb: Beranda / Layanan / Verifikasi PSU DPKPP Cirebon | Ya |

### 2.2 Implementasi Halaman (Technical)

| ID | Kriteria | Testable |
|----|----------|----------|
| AC-2.1 | Path URL: `/verifikasi-psu-dpkpp-cirebon` | Ya |
| AC-2.2 | Metadata Next.js: `title` dan `description` terpasang dan sesuai naskah | Ya |
| AC-2.3 | Layout mengikuti pola `survey-lahan-perumahan-cirebon`: Hero → Content → Project Experience → Why Us → CTA → Footer | Ya |
| AC-2.4 | Link dari `/survey-lahan-perumahan-cirebon` ke halaman baru ada (di section Verifikasi Luas PSU / layanan no. 06) | Ya |
| AC-2.5 | Link dari homepage ke halaman baru ada (jika PM/CEO putuskan; open question) | Conditional |
| AC-2.6 | Halaman responsive (mobile, tablet, desktop) | Ya |
| AC-2.7 | Tidak ada broken link, gambar, atau error di console | Ya |

---

## 3. Test Plan

### 3.1 Happy Path (HP)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| HP-1 | Halaman dapat diakses | Buka `/verifikasi-psu-dpkpp-cirebon` | Halaman load, H1 tampil |
| HP-2 | Metadata SEO | View page source / inspect `<title>`, `<meta name="description">` | Title dan description sesuai AC-1.2, AC-1.3 |
| HP-3 | Keyword dalam konten | Cari "serah terima PSU", "PSU pengembang perumahan", "fasos fasum" di body | Minimal sesuai AC-1.4, AC-1.5, AC-1.6 |
| HP-4 | CTA berfungsi | Klik "Konsultasi via WhatsApp" | Buka WhatsApp dengan nomor 6281122222122 |
| HP-5 | Link dari survey-lahan | Buka `/survey-lahan-perumahan-cirebon`, cari link ke Verifikasi PSU | Link ada dan mengarah ke `/verifikasi-psu-dpkpp-cirebon` |
| HP-6 | Breadcrumb navigasi | Klik "Beranda" di breadcrumb | Redirect ke `/` |

### 3.2 Edge Cases (EC)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| EC-1 | Direct URL access | Akses `/verifikasi-psu-dpkpp-cirebon` tanpa melalui homepage | Halaman load normal |
| EC-2 | Trailing slash | Akses `/verifikasi-psu-dpkpp-cirebon/` | Redirect atau load sama, tidak 404 |
| EC-3 | Case sensitivity | Akses `/Verifikasi-PSU-DPKPP-Cirebon` (jika ada) | 404 atau redirect ke canonical URL |
| EC-4 | Mobile view | Buka di viewport mobile (375px) | Layout tidak pecah, CTA tetap klikable |

### 3.3 Negative Cases (NC)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| NC-1 | URL salah | Akses `/verifikasi-psu` atau typo | 404 page |
| NC-2 | Link mati | Cek semua link di halaman | Tidak ada href kosong atau 404 |

### 3.4 Regression (R)

| ID | Skenario | Langkah | Expected |
|----|----------|---------|----------|
| R-1 | Halaman survey-lahan tidak rusak | Buka `/survey-lahan-perumahan-cirebon` | Layout dan konten tetap normal |
| R-2 | Homepage tidak rusak | Buka `/` | Layout dan konten tetap normal |
| R-3 | Footer konsisten | Bandingkan footer halaman baru vs survey-lahan | Sama (brand, copyright) |

---

## 4. Keyword Validation Checklist

| Keyword | Lokasi yang Harus Ada |
|---------|------------------------|
| serah terima PSU | Meta, H1/H2, body, CTA |
| PSU pengembang perumahan | Meta, Hero, body |
| fasos fasum | Meta, body (H2 pertama) |
| DPKPP Cirebon / DPKPP Kabupaten Cirebon | H1, meta, H2, body |
| verifikasi PSU | H1, meta, seluruh section |

---

## 5. Phase 2: Validasi (Setelah Frontend Selesai)

Saat Frontend selesai implementasi, jalankan:

1. **Smoke test:** HP-1, HP-2, HP-4
2. **Full test:** Semua HP, EC, NC, R
3. **Keyword audit:** Checklist Section 4
4. **Release readiness:** Semua AC passed → RELEASE READY

---

## 6. Risk & Notes

| Risk | Level | Mitigasi |
|------|-------|----------|
| Keyword stuffing | LOW | Keyword harus natural, tidak dipaksa berulang berlebihan |
| Link dari homepage | OPEN | Tergantung keputusan CEO/PM (GlobalNavbar) |
| Layout drift dari referensi | MEDIUM | Bandingkan visual dengan survey-lahan-perumahan-cirebon |

---

## 7. Done When (Phase 1)

- [x] Acceptance criteria tertulis
- [x] Test plan tertulis
- [ ] Phase 2: Validasi implementasi passed (setelah Frontend selesai)
