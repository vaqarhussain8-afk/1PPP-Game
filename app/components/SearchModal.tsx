"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Search } from "lucide-react";

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className={`search-modal${open ? " open" : ""}`}
      id="searchModal"
      aria-hidden={!open}
    >
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-panel" role="dialog" aria-modal="true" aria-label="Site search">
        <div className="search-head">
          <b>Search 1PPP</b>
          <button className="icon-btn" aria-label="Close search" onClick={onClose}>
            <X />
          </button>
        </div>
        <label className="search-field">
          <Search />
          <input
            ref={inputRef}
            id="searchInput"
            type="search"
            placeholder="Search games, APKs, guides..."
            autoComplete="off"
          />
        </label>
        <div className="search-suggestions">
          <span>Popular</span>
          <Link href="/games" onClick={onClose}>Games</Link>
          <Link href="/apk" onClick={onClose}>APK</Link>
          <Link href="/#deposit" onClick={onClose}>Deposit</Link>
          <Link href="/guides" onClick={onClose}>Guides</Link>
          <Link href="/blog" onClick={onClose}>Gaming tips</Link>
          <Link href="/#faq" onClick={onClose}>FAQ</Link>
        </div>
      </div>
    </div>
  );
}
