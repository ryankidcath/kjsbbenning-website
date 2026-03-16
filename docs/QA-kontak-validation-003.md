# QA Validation: Update Informasi Kontak

**Project:** kjsbbenning-website  
**Source:** pm-to-qa-003  
**Date:** 2025-03-15  
**Type:** Smoke test (code review)

---

## Ringkasan

Verifikasi update kontak (email dan alamat kantor) yang telah diimplementasikan. QA melakukan code review terhadap file yang diubah.

---

## Hasil Verifikasi

### 1. Homepage — Section Contact CTA

| Item | Expected | Actual (Code) | Status |
|------|----------|---------------|--------|
| Alamat lengkap | Jl. Brigjen Darsono No. 72A, Desa Kertawinangun, Kec. Kedawung, Kab. Cirebon, Jawa Barat | `page.tsx` line 311: "Atau kunjungi kantor kami di **Jl. Brigjen Darsono No. 72A, Desa Kertawinangun, Kec. Kedawung, Kab. Cirebon, Jawa Barat**" | ✅ PASS |
| Tombol "Kirim Email" | `mailto:admin@kjsbbenning.id` | `page.tsx` line 297: `href="mailto:admin@kjsbbenning.id"` | ✅ PASS |

### 2. Profil — Field Domisili

| Item | Expected | Actual (Code) | Status |
|------|----------|---------------|--------|
| Alamat di Domisili | Jl. Brigjen Darsono No. 72A, Desa Kertawinangun, Kec. Kedawung, Kab. Cirebon, Jawa Barat | `profil-kjsb-benning/page.tsx` line 215-216: Domisili field berisi alamat lengkap | ✅ PASS |

---

## Smoke Test Checklist (Manual — untuk User/PM)

QA (AI) tidak dapat mengoperasikan browser. Untuk verifikasi tampilan live, User/PM dapat menjalankan:

1. **Homepage**
   - [ ] Buka `/` → scroll ke section Contact CTA
   - [ ] Cek: alamat "Jl. Brigjen Darsono No. 72A, Desa Kertawinangun, Kec. Kedawung, Kab. Cirebon, Jawa Barat" tampil
   - [ ] Klik "Kirim Email" → client email terbuka dengan `admin@kjsbbenning.id`

2. **Profil**
   - [ ] Buka `/profil-kjsb-benning` → scroll ke card Legalitas
   - [ ] Cek: field Domisili menampilkan alamat lengkap yang sama

---

## Verdict

| Aspek | Status |
|-------|--------|
| Code review | ✅ PASS — Semua nilai sesuai CHANGELOG |
| Tampilan (manual) | ⏳ Pending — User/PM jalankan checklist di atas |

**Kesimpulan:** Implementasi sesuai spesifikasi. Code review PASS. Verifikasi manual opsional untuk memastikan tampilan di browser.
