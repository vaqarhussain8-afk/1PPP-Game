import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import HeaderShell from "../components/HeaderShell";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, blogPostingListSchema } from "../lib/schema";

const ARTICLES = [
  {
    slug: "popular-mobile-games-worth-exploring",
    image: "/assets/article-1.webp",
    tag: "GUIDES · 2026",
    title: "Popular mobile games worth exploring",
    desc: "Understand different game styles and what makes them engaging on mobile.",
    body: "Mobile gaming spans a wide range of styles, from fast-paced arcade titles to strategy-driven card and table games. Exploring a mix of categories is a good way to find what fits your play style, whether that's short, quick sessions or longer, more involved rounds. The 1PPP Games collection is organized by category to make that exploration simple.",
    datePublished: "2026-01-12",
    href: "/games",
    cta: "Browse the collection",
  },
  {
    slug: "how-to-understand-bonus-offers",
    image: "/assets/article-2.webp",
    tag: "BONUSES · 2026",
    title: "How to understand bonus offers",
    desc: "Key details to review before using any promotional or reward offer.",
    body: "Before using any bonus or promotional offer, take a moment to review the conditions attached to it — including any activity requirements and how the reward is applied to your account. Reading the details up front means fewer surprises later and a clearer picture of how the offer actually benefits you.",
    datePublished: "2026-02-03",
    href: "/guides",
    cta: "See payment guides",
  },
  {
    slug: "simple-tips-for-better-gameplay",
    image: "/assets/article-3.webp",
    tag: "TIPS · 2026",
    title: "Simple tips for better gameplay",
    desc: "Practical ideas for a smoother, more informed mobile gaming experience.",
    body: "A few habits make mobile gaming smoother overall: keep the app updated to the latest version, review game details before jumping in, and set a comfortable pace for your sessions. Small, consistent habits like these lead to a more enjoyable, less stressful experience over time.",
    datePublished: "2026-03-18",
    href: "/apk",
    cta: "Check the APK Center",
  },
];

export const metadata: Metadata = {
  title: "1PPP Games Blog — Tips, Bonuses & Mobile Gaming Reads",
  description:
    "Read practical articles about mobile games, bonus offers and gameplay tips from the 1PPP Games blog.",
  keywords: [
    "1PPP Games blog",
    "1PPP Game blog",
    "1PPP Games tips",
    "1PPP Game tips",
    "1PPP Games bonuses",
    "1PPP Game bonus",
    "1PPP Game bonus offers",
    "mobile gaming articles",
    "mobile gaming tips",
  ],
  alternates: { canonical: "https://1pppgames.pk/blog" },
  openGraph: {
    title: "1PPP Games Blog — Tips, Bonuses & Mobile Gaming Reads",
    description:
      "Read practical articles about mobile games, bonus offers and gameplay tips from the 1PPP Games blog.",
    type: "website",
    url: "https://1pppgames.pk/blog",
    siteName: "1PPP Games",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "1PPP Games Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "1PPP Games Blog — Tips, Bonuses & Mobile Gaming Reads",
    description:
      "Read practical articles about mobile games, bonus offers and gameplay tips from the 1PPP Games blog.",
    images: ["/assets/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://1pppgames.pk/" },
          { name: "Blog", url: "https://1pppgames.pk/blog" },
        ])}
      />
      <JsonLd data={blogPostingListSchema(ARTICLES)} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HeaderShell />
      <main id="main">
        <section className="section" id="blog-page">
          <div className="site-container">
            <Link href="/" className="text-link game-detail-back">
              <ChevronLeft /> Back to home
            </Link>
            <div className="section-head">
              <div>
                <span className="kicker">FROM THE BLOG</span>
                <h1>Fresh reads for mobile players.</h1>
                <p>
                  Helpful articles built around common questions, trends and
                  better gaming habits — including tips for getting the most
                  out of your 1PPP Games account.
                </p>
              </div>
            </div>
            <div className="blog-grid">
              {ARTICLES.map((article) => (
                <article key={article.slug} id={article.slug}>
                  <Image src={article.image} alt={article.title} width={400} height={165} />
                  <div>
                    <span>{article.tag}</span>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <Link href={article.href}>
                      {article.cta} <ChevronRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-banner">
          <div className="site-container support-banner-inner">
            <span className="support-banner-icon">
              <MessageCircle />
            </span>
            <h2>Have a topic you&apos;d like covered?</h2>
            <p>Reach out and let us know what you&apos;d like to read about next.</p>
            <Link className="btn primary" href="/contact">
              <MessageCircle /> CONTACT US
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
