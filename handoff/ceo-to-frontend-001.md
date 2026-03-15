# Handoff: CEO → Frontend Engineer

## From
CEO

## To
Frontend Engineer

## Context

Website **kjsbbenning.id** saat ini menampilkan **logo Vercel** sebagai favicon di hasil pencarian Google (dan di tab browser). User ingin menggantinya dengan **logo perusahaan KJSB Benning dan Rekan**.

**Penyebab:** Proyek Next.js yang di-deploy di Vercel tanpa favicon custom akan memakai favicon default Vercel.

**Aset:** Logo perusahaan sudah ada di `public/logo.png` (digunakan di navbar dan footer).

## Objective

Ganti favicon website dari logo Vercel menjadi **logo perusahaan KJSB Benning dan Rekan**.

## Constraints

- Next.js 14/16 (App Router)
- Tetap gunakan logo existing (`logo.png`)

## Deliverables

1. **Setup favicon** — Tambahkan favicon di Next.js App Router:
   - Opsi A: `app/favicon.ico` atau `app/icon.png` (copy/convert dari logo.png)
   - Opsi B: Tambah `icons` di `metadata` di `layout.tsx`:
     ```ts
     export const metadata = {
       ...existing,
       icons: {
         icon: '/logo.png',
       },
     };
     ```

2. **Format favicon** — Google dan browser memakai favicon dalam berbagai ukuran. Untuk hasil terbaik:
   - Sediakan `favicon.ico` (32x32 atau 16x16) atau
   - `icon.png` (min 32x32, ideal 48x48 atau 192x192)
   - Logo perusahaan mungkin perlu di-resize/optimize agar tidak terlalu detail di ukuran kecil

3. **Validasi** — Setelah deploy, pastikan:
   - Tab browser menampilkan logo perusahaan
   - Google akan re-crawl; favicon di hasil pencarian bisa butuh waktu (bisa hari/minggu)

## Dependencies

- `public/logo.png` (existing)
- Tool untuk convert PNG ke ICO bila perlu (optional)

## Open Questions

- Apakah logo.png cukup sederhana untuk favicon kecil? Bila terlalu kompleks, pertimbangkan versi simplified (hanya ikon/simbol) untuk favicon.

## Done When

- Favicon tidak lagi menampilkan logo Vercel
- Tab browser dan (setelah cache) hasil pencarian Google menampilkan logo perusahaan
