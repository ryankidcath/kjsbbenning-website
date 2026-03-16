# Handoff: CEO → Project Manager

## From
CEO

## To
Project Manager

## Context

User meminta update informasi kontak di website kjsbbenning-website. Perubahan telah diimplementasikan.

## Objective

Dokumentasi perubahan yang telah selesai (untuk referensi dan validasi).

## Perubahan yang Dilakukan

1. **Email kontak**
   - Sebelum: `info@kjsbbenning.com`
   - Sesudah: `admin@kjsbbenning.id`
   - Lokasi: `src/app/page.tsx` (tombol "Kirim Email")

2. **Alamat kantor**
   - Sebelum: Cirebon, Jawa Barat
   - Sesudah: Jl. Brigjen Darsono No. 72A, Desa Kertawinangun, Kec. Kedawung, Kab. Cirebon, Jawa Barat
   - Lokasi:
     - `src/app/page.tsx` (section Contact CTA: "Atau kunjungi kantor kami di...")
     - `src/app/profil-kjsb-benning/page.tsx` (field Domisili)

## Constraints

- Tidak ada

## Deliverables

- [x] Update email
- [x] Update alamat kantor di homepage dan profil

## Done When

- Perubahan sudah di-deploy
- (Opsional) QA verifikasi tampilan dan link email berfungsi
