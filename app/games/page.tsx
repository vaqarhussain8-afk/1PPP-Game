import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ChevronRight,
  Swords,
  Crown,
  Trophy,
  Joystick,
  CarFront,
  Layers,
  ShieldCheck,
  Zap,
  RefreshCcw,
  Smartphone,
  Download,
} from "lucide-react";
import HeaderShell from "../components/HeaderShell";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { games } from "../lib/games";
import { gameItemListSchema, breadcrumbSchema } from "../lib/schema";

const CATEGORIES = [
  { icon: Swords, label: "Action" },
  { icon: Crown, label: "Casino" },
  { icon: Trophy, label: "Sports" },
  { icon: Joystick, label: "Arcade" },
  { icon: CarFront, label: "Racing" },
  { icon: Layers, label: "Card" },
];

const WHY_PLAY = [
  { icon: ShieldCheck, title: "Vetted picks", desc: "Every game listed is reviewed for a clean, reliable mobile experience." },
  { icon: Zap, title: "Fast to load", desc: "Lightweight pages and optimized images keep browsing quick on any connection." },
  { icon: RefreshCcw, title: "Regularly refreshed", desc: "The collection is updated as new titles and versions become available." },
  { icon: Smartphone, title: "Mobile-first", desc: "Every detail page is built and tested for phones first, desktop second." },
];

export const metadata: Metadata = {
  title: "Games — 1PPP Games",
  description:
    "Browse the full 1PPP Games collection: dragon, cricket, aviator, color prediction, mines and slots — each with details, features and an install guide.",
  keywords: [
    "1PPP Games",
    "1PPP Game",
    "1PPP Games list",
    "1PPP Game collection",
    "1PPP Game slots",
    "1PPP Game casino games",
    "1PPP Game arcade games",
    "1PPP Game sports games",
    "1PPP Game card games",
    "1PPP Game racing games",
    "1PPP slot games",
    "1PPP casino games",
    "mobile game collection",
  ],
  alternates: { canonical: "https://1pppgames.pk/games" },
  openGraph: {
    title: "Games — 1PPP Games",
    description:
      "Browse the full 1PPP Games collection: dragon, cricket, aviator, color prediction, mines and slots — each with details, features and an install guide.",
    type: "website",
    url: "https://1pppgames.pk/games",
    siteName: "1PPP Games",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "1PPP Games collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Games — 1PPP Games",
    description:
      "Browse the full 1PPP Games collection: dragon, cricket, aviator, color prediction, mines and slots — each with details, features and an install guide.",
    images: ["/assets/og-image.png"],
  },
};

export default function GamesPage() {
  return (
    <>
      <JsonLd data={gameItemListSchema(games)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://1pppgames.pk/" },
          { name: "Games", url: "https://1pppgames.pk/games" },
        ])}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HeaderShell />
      <main id="main">
        <section className="section" id="games-index">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">FULL COLLECTION</span>
                <h1>All games.</h1>
                <p>
                  Every title in the 1PPP catalog, with a details page covering
                  features, category and rating for each one.
                </p>
              </div>
            </div>
            <div className="games-list-grid">
              {games.map((game) => (
                <Link key={game.slug} href={`/games/${game.slug}`} className="guide-card games-list-card">
                  <div className="games-list-thumb">
                    <Image src={game.image} alt={`${game.name} mobile game`} fill sizes="(max-width: 780px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <span className="guide-number">{game.tag}</span>
                  <h3>{game.name}</h3>
                  <p>{game.summary}</p>
                  <span className="games-list-meta">
                    <Star /> {game.rating} · {game.badge}
                  </span>
                  <span className="games-list-link">
                    View details <ChevronRight />
                  </span>
                </Link>
              ))}
            </div>

            <div className="category-row">
              <span>Browse by category</span>
              {CATEGORIES.map(({ icon: Icon, label }) => (
                <Link key={label} href="/games">
                  <Icon /> {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section benefits-section" id="why-games">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">WHY PLAY HERE</span>
                <h2>A collection built for mobile players.</h2>
                <p>Every listing is reviewed and organized so you can find something worth playing in seconds.</p>
              </div>
            </div>
            <div className="benefit-grid">
              {WHY_PLAY.map(({ icon: Icon, title, desc }, i) => (
                <article key={title}>
                  <span className="benefit-icon">
                    <Icon />
                  </span>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-banner">
          <div className="site-container support-banner-inner">
            <span className="support-banner-icon">
              <Download />
            </span>
            <h2>Ready to play on your device?</h2>
            <p>
              Get the 1PPP Games APK, follow the install guide and you can be
              in your first game within minutes.
            </p>
            <Link className="btn primary" href="/apk">
              <Download /> GET THE APK
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
