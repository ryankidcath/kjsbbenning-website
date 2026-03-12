"use client";

import Image from "next/image";
import Link from "next/link";

export default function GlobalNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo + nama → homepage */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo KJSB Benning dan Rekan"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <div>
            <span className="text-lg font-bold text-[#1e3a5f]">KJSB</span>
            <span className="text-lg font-semibold text-slate-600">
              {" "}Benning dan Rekan
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          <Link href="/#services" className="hover:text-[#2563eb] transition-colors">
            Layanan
          </Link>
          <Link href="/profil-kjsb-benning" className="hover:text-[#2563eb] transition-colors">
            Profil
          </Link>
          <a
            href="https://wa.me/6281122222122"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2563eb] px-5 py-2 text-white hover:bg-[#1d4ed8] transition-colors"
          >
            Konsultasi Sekarang
          </a>
        </nav>

        {/* Mobile CTA */}
        <a
          href="https://wa.me/6281122222122"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8] transition-colors sm:hidden"
        >
          Konsultasi
        </a>
      </div>
    </header>
  );
}
