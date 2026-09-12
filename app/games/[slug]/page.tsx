import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  CheckCircle2,
  Download,
  ChevronLeft,
  Search,
  UserPlus,
  Gamepad2,
} from "lucide-react";
import HeaderShell from "../../components/HeaderShell";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
import JsonLd from "../../components/JsonLd";
import { games, getGame } from "../../lib/games";
import { videoGameSchema, faqPageSchema, breadcrumbSchema } from "../../lib/schema";

const STEPS = [
  { icon: Search, title: "Find the APK guide", desc: "Head to the APK Center for the current version and install steps." },
  { icon: UserPlus, title: "Set up your account", desc: "Follow the quick registration steps covered in the guides section." },
  { icon: Gamepad2, title: "Start playing", desc: "Open the game and jump straight into your first session." },
];

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  const url = `https://1pppgames.pk/games/${game.slug}`;
  const image = `https://1pppgames.pk${game.image}`;
  return {
    title: `${game.name} — 1PPP Games`,
    description: game.summary,
    keywords: [
      game.name,
      `${game.name} 1PPP Games`,
      `${game.name} 1PPP Game`,
      `play ${game.name}`,
      `${game.name} APK`,
      `${game.name} game download`,
      "1PPP Games",
      "1PPP Game",
      "1PPP Game APK",
      "1PPP Game Online",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${game.name} — 1PPP Games`,
      description: game.summary,
      type: "website",
      url,
      siteName: "1PPP Games",
      images: [{ url: image, width: 1200, height: 630, alt: `${game.name} mobile game` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.name} — 1PPP Games`,
      description: game.summary,
      images: [image],
    },
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const otherGames = games.filter((g) => g.slug !== game.slug).slice(0, 3);

  const faqItems = [
    {
      q: `Is ${game.name} free to explore?`,
      a: `Yes. The ${game.name} listing is a free resource covering details, features and install information — no signup required to browse.`,
    },
    {
      q: `What category is ${game.name} in?`,
      a: `${game.name} is listed under ${game.tag.toLowerCase()}, alongside similar titles you can browse from the full games collection.`,
    },
    {
      q: "How do I install the APK?",
      a: "Visit the APK Center from the main navigation for the current version, install steps and Android-focused guidance.",
    },
  ];

  return (
    <>
      <JsonLd data={videoGameSchema(game)} />
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://1pppgames.pk/" },
          { name: "Games", url: "https://1pppgames.pk/games" },
          { name: game.name, url: `https://1pppgames.pk/games/${game.slug}` },
        ])}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HeaderShell />
      <main id="main">
        <section className="section" id="game-detail">
          <div className="site-container">
            <Link href="/games" className="text-link game-detail-back">
              <ChevronLeft /> Back to all games
            </Link>

            <div className="game-detail-layout">
              <div className="game-detail-media">
                <Image src={game.image} alt={`${game.name} mobile game`} fill sizes="(max-width: 780px) 100vw, 45vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div className="game-detail-copy">
                <span className="kicker">{game.tag}</span>
                <h1>{game.name}</h1>
                <p className="game-detail-rating">
                  <Star /> {game.rating} · {game.badge}
                </p>
                <p className="game-detail-desc">{game.description}</p>
                <ul className="game-detail-features">
                  {game.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="hero-actions">
                  <Link href="/apk" className="btn primary">
                    <Download /> GET APK GUIDE
                  </Link>
                  <Link href="/contact" className="btn secondary">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="how-to-start">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">GET STARTED</span>
                <h2>Three steps to your first session.</h2>
              </div>
            </div>
            <div className="guide-grid">
              {STEPS.map(({ icon: Icon, title, desc }, i) => (
                <article className="guide-card" key={title}>
                  <span className="guide-number">{String(i + 1).padStart(2, "0")}</span>
                  <div className="guide-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <p className="steps-note">
              Need more detail? The <Link href="/guides">1PPP Games guides</Link>{" "}
              walk through account setup and payments step by step.
            </p>
          </div>
        </section>

        <section className="section faq-section" id="game-faq">
          <div className="site-container faq-layout">
            <div className="faq-intro">
              <span className="kicker">FAQ</span>
              <h2>{game.name} questions.</h2>
              <p>Quick answers specific to this game.</p>
            </div>
            <Faq items={faqItems} />
          </div>
        </section>

        <section className="section dark-section" id="related-games">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">KEEP EXPLORING</span>
                <h2>More games you might like.</h2>
              </div>
            </div>
            <div className="game-grid game-grid-related">
              {otherGames.map((related) => (
                <Link key={related.slug} href={`/games/${related.slug}`} className="game-card">
                  <Image src={related.image} alt={`${related.name} mobile game`} fill sizes="(max-width: 780px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <div className="game-shade" />
                  <div className="game-info">
                    <span>{related.tag}</span>
                    <h3>{related.name}</h3>
                    <small>
                      <Star /> {related.rating} · {related.badge}
                    </small>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
