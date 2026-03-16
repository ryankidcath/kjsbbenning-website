# Handoff: Project Manager → QA Engineer

## From
Project Manager

## To
QA Engineer

## Context

CEO (ceo-to-pm-003) melaporkan update informasi kontak di website kjsbbenning-website yang **telah diimplementasikan**. Perubahan: email dan alamat kantor. PM meminta QA melakukan verifikasi opsional untuk memastikan tampilan dan link berfungsi.

## Objective

Verifikasi bahwa update kontak tampil benar dan link email berfungsi.

## Constraints

- Verifikasi bersifat opsional (perubahan sudah selesai)
- Cukup smoke test, tidak perlu test suite lengkap

## Deliverables

1. **Verifikasi tampilan**
   - Homepage: alamat lengkap tampil di section Contact CTA
   - Profil: alamat tampil di field Domisili

2. **Verifikasi link email**
   - Tombol "Kirim Email" di homepage membuka client email dengan `mailto:admin@kjsbbenning.id`

## Dependencies

- Dokumentasi: `projects/kjsbbenning-website/docs/CHANGELOG-kontak-003.md`
- File yang diubah: `src/app/page.tsx`, `src/app/profil-kjsb-benning/page.tsx`

## Done When

- Tampilan alamat dan email sesuai di homepage dan profil
- Link mailto berfungsi (klik membuka client email dengan admin@kjsbbenning.id)
