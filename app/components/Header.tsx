"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gamepad2,
  Search,
  Download,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { APK_DOWNLOAD_URL } from "../lib/config";

const LINKS = [
  { href: "/", id: "home", label: "Home" },
  { href: "/games", id: "games", label: "Games" },
  { href: "/apk", id: "apk", label: "APK" },
  { href: "/guides", id: "guides", label: "Guides" },
  { href: "/blog", id: "blog", label: "Blog" },
  { href: "/contact", id: "contact", label: "Contact" },
];

export default function Header({ onSearchOpen }: { onSearchOpen: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      if (pathname.startsWith("/games")) setActive("games");
      else if (pathname.startsWith("/apk")) setActive("apk");
      else if (pathname.startsWith("/guides")) setActive("guides");
      else if (pathname.startsWith("/blog")) setActive("blog");
      else if (pathname.startsWith("/contact")) setActive("contact");
      else setActive("");
      return;
    }
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, pathname]);

  return (
    <header className="header">
      <div className="site-container nav">
        <Link className="brand" href="/" aria-label="1PPP Games home">
          <span className="brand-mark">
            <Gamepad2 />
          </span>
          <span className="brand-copy">
            <b>1PPP</b>
            <small>GAMES</small>
          </span>
        </Link>

        <nav id="nav" aria-label="Primary navigation" className={menuOpen ? "open" : ""}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              className={active === link.id ? "active" : ""}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="icon-btn search-trigger"
            id="searchBtn"
            aria-label="Open search"
            onClick={onSearchOpen}
          >
            <Search />
          </button>
          <a className="nav-cta" href={APK_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            <Download /> GET APK
          </a>
          <button
            className="icon-btn menu"
            id="menuBtn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
