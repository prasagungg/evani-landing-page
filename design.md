# Evani Community - Website Design & Architecture Document

## 1. Project Overview
Website resmi untuk **Evani Community**, komunitas NPC & Cosplayer yang mendukung talenta lokal, merayakan budaya pop Jepang, dan menjadi wadah berkreasi. Website ini dibangun untuk performa tinggi dan kemudahan pengelolaan konten menggunakan arsitektur berbasis Markdown.

## 2. Tech Stack & Architecture
* **Framework Utama:** Astro.js (SSG - Static Site Generation)
* **Styling:** Tailwind CSS
* **Content Management:** Astro Content Collections (Markdown/MDX)
* **Schema Validation:** Zod (terintegrasi di Astro)

## 3. Design System (Visual Identity)

### A. Konsep & Vibe
* **Tema:** Japanese Modern Dark, Energetic, Community-driven.
* **Kesan:** Berani (Bold), inklusif, identik dengan kultur Otaku/Gamer/Cosplayer.
* **Motif Visual:** Pola awan tradisional Jepang (Kumo), aksen coretan kuas (*brush stroke*), dan garis teknis asimetris.

### B. Color Palette
| Nama | Kode Hex | Penggunaan |
| :--- | :--- | :--- |
| **Primary Red** | `#BA121A` | Tombol utama, aksen garis, hover state, elemen *highlight*. |
| **Background Dark**| `#121212` | Warna dasar seluruh halaman website (*Dark Mode* utama). |
| **Surface Dark** | `#1E1E1E` | Latar belakang komponen *Card*, *Navbar*, atau *Footer*. |
| **Text Primary** | `#FFFFFF` | Teks utama, judul, dan paragraf utama. |
| **Text Secondary** | `#A0A0A0` | Teks pendukung, deskripsi kecil, dan meta data konten. |

### C. Typography
* **Heading / Display Font:** `Rampart One` (atau alternatif `Permanent Marker`).
  * Digunakan untuk *Hero Title*, nama section (cth: "VISI MISI", "OPEN MEMBER"), dan judul acara.
* **Body / UI Font:** `Poppins` (atau alternatif `Inter`).
  * Digunakan untuk isi artikel, deskripsi acara, menu navigasi, dan tombol. Bersih dan mudah dibaca.

## 4. Content Architecture (Markdown Structure)
Konten dinamis dikelola menggunakan Markdown di dalam direktori `src/content/`.

### A. Collection: Events (`src/content/events/`)
Menyimpan dokumentasi acara dan jadwal kegiatan mendatang.
**Frontmatter Schema:**
```yaml
title: string          # Judul acara (cth: "Bukber Part 1: Kedai Jun")
date: date             # Tanggal acara (Format: YYYY-MM-DD)
location: string       # Lokasi acara
coverImage: string     # Path gambar cover acara
tags: array[string]    # Kategori (cth: ["Gathering", "Coswalk"])
isUpcoming: boolean    # True jika acara belum terjadi
```

### B. Collection: Articles (`src/content/articles/`)

Menyimpan artikel blog, pengumuman, atau sejarah komunitas.
**Frontmatter Schema:**

```yaml
title: string          # Judul artikel
date: date             # Tanggal publikasi
author: string         # Penulis/Admin
coverImage: string     # (Opsional) Path gambar cover
```

## 5. UI Components Guide

### A. Buttons (Tombol)

* **Primary:** Background `#BA121A`, teks `#FFFFFF` (Poppins, Bold), bentuk *slightly rounded* (border-radius: 4px). Hover effect: background sedikit lebih terang.
* **Outline/Secondary:** Transparent background, border 2px solid `#BA121A`, teks `#BA121A`.

### B. Cards (Event/Article Layout)

* **Warna Dasar:** `#1E1E1E` dengan efek *shadow* tipis.
* **Aksen:** Border bawah tebal (4px) berwarna `#BA121A`.
* **Struktur:** Gambar di bagian atas, diikuti meta data (tanggal & lokasi) berwarna teks sekunder, lalu Judul utama dengan *font display*.

### C. Markdown Prose (Isi Artikel)

Menggunakan plugin `@tailwindcss/typography` dengan konfigurasi kustom untuk *dark mode* (`prose-invert`) dan *link* berwarna merah:

* Judul di dalam artikel (H2, H3) berwarna putih murni.
* Teks paragraf menggunakan `Poppins` berwarna abu-abu terang.
* Kutipan (*Blockquote*) memiliki garis tepi kiri berwarna `#BA121A`.

## 6. Development Workflow

1. **Tambah Kegiatan Baru:** Buat file `.md` baru di `src/content/events/`. Isi *frontmatter* dan tulis ringkasan acara di bagian *body*.
2. **Tambah Artikel Baru:** Buat file `.md` baru di `src/content/articles/`.
3. Astro akan secara otomatis memvalidasi data dengan Zod dan men-generate halaman HTML statis pada rute yang sesuai (misal: `/events/nama-file`).
