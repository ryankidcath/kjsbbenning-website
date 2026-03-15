# Handoff: CEO → Project Manager

## From
CEO

## To
Project Manager

## Context

User ingin menambah **satu halaman artikel SEO** baru ke website **kjsbbenning-website**. Halaman ini menekankan kolaborasi KJSB Benning dengan **DPKPP Kabupaten Cirebon** (Dinas Perumahan, Kawasan Permukiman, dan Pertanahan) dalam verifikasi luas tanah PSU sebelum serah terima ke pemda.

**Peran perusahaan:** Verifikasi di lapangan apakah luas tanah PSU (prasarana, sarana, utilitas umum) yang diklaim developer perumahan di BAST sudah sesuai dengan kondisi aktual.

**Referensi existing:** Halaman `/survey-lahan-perumahan-cirebon` sudah menyebut verifikasi PSU dan DPKPP secara singkat; halaman baru ini fokus khusus pada topik tersebut dengan konten lebih mendalam.

## Objective

Tambahkan satu halaman baru (format sama dengan halaman layanan lain) berisi artikel SEO yang:
- Menonjolkan kerja sama dengan DPKPP Kabupaten Cirebon
- Menjelaskan layanan verifikasi luas PSU untuk proses BAST
- Menarget pembaca: developer perumahan dan DPKPP/pemda
- Mengintegrasikan keyword SEO yang ditarget

## Constraints

- Satu halaman baru (bukan section blog)
- Struktur dan gaya visual mengikuti halaman layanan existing (contoh: `survey-lahan-perumahan-cirebon`)
- Naskah + implementasi ke website (bukan copy saja)
- Boleh menyebut contoh proyek (dengan discretion bila sensitif)

## Target Audience

- Developer perumahan (calon klien)
- DPKPP / pemda (calon mitra / pengguna layanan)

## Keyword SEO (Prioritas)

- "serah terima PSU"
- "PSU pengembang perumahan"
- "fasos fasum" (fasilitas sosial, fasilitas umum — istilah terkait PSU)

## Deliverables

1. **Naskah artikel SEO** — Copy lengkap untuk halaman, termasuk:
   - Judul (H1) dan meta title/description
   - Konten body dengan struktur H2/H3 yang logis
   - Integrasi keyword secara natural
   - CTA ke WhatsApp/konsultasi
   - (Opsional) Contoh proyek/angka pengalaman bila relevan

2. **Implementasi halaman** — File page baru di Next.js App Router:
   - Path URL yang SEO-friendly (saran: `/verifikasi-psu-dpkpp-cirebon` atau serupa)
   - Metadata (title, description) untuk SEO
   - Layout dan komponen mengikuti pola halaman layanan existing
   - Link dari halaman terkait (misalnya dari `/survey-lahan-perumahan-cirebon` atau homepage)

## Dependencies

- Struktur halaman existing (survey-lahan-perumahan-cirebon, dll.) sebagai referensi
- Konten/pengetahuan domain: verifikasi PSU, BAST, DPKPP, fasos fasum

## Suggested Sequencing

1. **Growth/Marketing** — Tulis naskah artikel SEO (copy) dengan keyword integration
2. **Frontend Engineer** — Implementasi halaman berdasarkan naskah, mengikuti pola existing

## Open Questions

- Apakah perlu menambah link ke halaman baru ini di GlobalNavbar atau cukup dari homepage/layanan terkait?
- Apakah ada proyek spesifik (nama, lokasi) yang boleh disebutkan sebagai case study?

## Done When

- Naskah artikel SEO selesai dan disetujui
- Halaman baru live di website dengan metadata SEO
- Keyword target terintegrasi secara natural dalam konten
- Link dari halaman terkait berfungsi
