# Changelog: Update Informasi Kontak

**Source:** ceo-to-pm-003  
**Date:** 2025-03-15  
**Status:** Selesai (implementasi sudah dilakukan)

---

## Ringkasan

Update informasi kontak di website kjsbbenning-website: email dan alamat kantor.

---

## Perubahan yang Dilakukan

### 1. Email Kontak

| Item | Sebelum | Sesudah |
|------|---------|---------|
| Email | `info@kjsbbenning.com` | `admin@kjsbbenning.id` |

**Lokasi:**
- `src/app/page.tsx` — tombol "Kirim Email" (href mailto)

### 2. Alamat Kantor

| Item | Sebelum | Sesudah |
|------|---------|---------|
| Alamat | Cirebon, Jawa Barat | Jl. Brigjen Darsono No. 72A, Desa Kertawinangun, Kec. Kedawung, Kab. Cirebon, Jawa Barat |

**Lokasi:**
- `src/app/page.tsx` — section Contact CTA ("Atau kunjungi kantor kami di...")
- `src/app/profil-kjsb-benning/page.tsx` — field Domisili

---

## Deliverables

- [x] Update email
- [x] Update alamat kantor di homepage dan profil

---

## Done When

- [x] Perubahan sudah diimplementasikan
- [ ] Perubahan sudah di-deploy
- [ ] (Opsional) QA verifikasi tampilan dan link email berfungsi

---

## Catatan

- Footer di halaman lain tetap memakai "Jasa Pengukuran dan Pemetaan Tanah · Cirebon, Jawa Barat" sebagai tagline branding (bukan alamat lengkap).
- Untuk verifikasi: pastikan link `mailto:admin@kjsbbenning.id` berfungsi dan alamat tampil benar di homepage serta halaman profil.
