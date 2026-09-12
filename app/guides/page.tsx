import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  UserPlus,
  WalletCards,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import HeaderShell from "../components/HeaderShell";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";

const GUIDES = [
  {
    icon: Download,
    title: "How to download an APK",
    desc: "Follow a straightforward path to download 1PPP Games, from finding the correct APK to installing it on Android.",
    body: "Downloading 1PPP Games starts with getting the current APK file from the APK Center rather than an unverified third-party source. Once the file finishes downloading, Android will ask you to allow installs from your browser before the app can be opened. This one-time permission keeps the process safe and repeatable for every future update.",
    href: "/apk",
    cta: "Open the APK Center",
  },
  {
    icon: UserPlus,
    title: "Register & get started",
    desc: "Understand the common steps to create a 1PPP Games account and log in for the first time before you begin using the app.",
    body: "After installing the app, creating an account takes under a minute — tap Sign Up, enter your details and confirm. From there, logging in is as simple as entering your username and password. Keep your login details somewhere safe so returning to the app is quick every time.",
    href: "/apk",
    cta: "See the install guide",
  },
  {
    icon: WalletCards,
    title: "Payments & withdrawals",
    desc: "Learn what details and conditions to check before requesting a transaction.",
    body: "Before making a deposit or requesting a withdrawal, always double-check the payment method details, any minimum or maximum limits, and expected processing times. Reviewing these conditions up front helps you avoid delays and keeps your account activity easy to track.",
    href: "/contact",
    cta: "Ask our support team",
  },
];

export const metadata: Metadata = {
  title: "1PPP Games Guides — Download, Setup & Payment Help",
  description:
    "Practical guides for 1PPP Games covering APK downloads, account setup and payments — written to help new and returning players get started quickly.",
  keywords: [
    "1PPP Games guides",
    "1PPP Game guides",
    "1PPP Games download guide",
    "1PPP Games account setup",
    "1PPP Game login",
    "1PPP Game register",
    "1PPP Game sign up",
    "create 1PPP Game account",
    "1PPP Games payments",
    "1PPP Game deposit guide",
  ],
  alternates: { canonical: "https://1pppgames.pk/guides" },
  openGraph: {
    title: "1PPP Games Guides — Download, Setup & Payment Help",
    description:
      "Practical guides for 1PPP Games covering APK downloads, account setup and payments.",
    type: "website",
    url: "https://1pppgames.pk/guides",
    siteName: "1PPP Games",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "1PPP Games Guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "1PPP Games Guides — Download, Setup & Payment Help",
    description:
      "Practical guides for 1PPP Games covering APK downloads, account setup and payments.",
    images: ["/assets/og-image.png"],
  },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://1pppgames.pk/" },
          { name: "Guides", url: "https://1pppgames.pk/guides" },
        ])}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HeaderShell />
      <main id="main">
        <section className="section" id="guides-page">
          <div className="site-container">
            <Link href="/" className="text-link game-detail-back">
              <ChevronLeft /> Back to home
            </Link>
            <div className="section-head">
              <div>
                <span className="kicker">LEARN &amp; PLAY</span>
                <h1>Guides that make the next step easy.</h1>
                <p>
                  Short, practical resources covering downloads, setup,
                  payments and everyday gaming questions — written to help
                  both new and returning 1PPP Games players get the most out
                  of every visit.
                </p>
              </div>
            </div>
            <div className="guide-grid">
              {GUIDES.map((guide, i) => (
                <article className="guide-card" key={guide.title}>
                  <span className="guide-number">{String(i + 1).padStart(2, "0")}</span>
                  <div className="guide-icon">
                    <guide.icon />
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.body}</p>
                  <Link href={guide.href}>
                    {guide.cta} <ChevronRight />
                  </Link>
                </article>
              ))}
            </div>
            <p className="steps-note">
              Ready to play? Browse the{" "}
              <Link href="/games">full games collection</Link> or read more
              tips on the <Link href="/blog">1PPP Games blog</Link>.
            </p>
          </div>
        </section>

        <section className="section dark-section" id="guides-links">
          <div className="site-container">
            <div className="category-row">
              <span>Keep exploring</span>
              <Link href="/games">
                <Gamepad2 /> Browse Games
              </Link>
              <Link href="/blog">
                <BookOpen /> Read the Blog
              </Link>
            </div>
          </div>
        </section>

        <section className="support-banner">
          <div className="site-container support-banner-inner">
            <span className="support-banner-icon">
              <MessageCircle />
            </span>
            <h2>Still have a question?</h2>
            <p>
              Our team is available around the clock to help with downloads,
              accounts, payments or anything else about 1PPP Games.
            </p>
            <Link className="btn primary" href="/contact">
              <MessageCircle /> CHAT WITH US
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
