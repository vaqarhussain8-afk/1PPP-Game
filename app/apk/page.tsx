import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  BadgeCheck,
  Smartphone,
  CircleHelp,
  PackageOpen,
  CheckCircle2,
  Search,
  UserPlus,
  Gamepad2,
  ChevronLeft,
} from "lucide-react";
import HeaderShell from "../components/HeaderShell";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import JsonLd from "../components/JsonLd";
import { APK_DOWNLOAD_URL } from "../lib/config";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";

const APK_FAQ = [
  {
    q: "Is the 1PPP Games APK safe to install?",
    a: "Every APK guide on this page is reviewed for accuracy so you always have the correct version and required permissions before you begin installing.",
  },
  {
    q: "Why do I need to enable \"install unknown apps\"?",
    a: "Android blocks installs from outside the Play Store by default. Enabling this setting for your browser lets you install the 1PPP Games APK directly from the downloaded file.",
  },
  {
    q: "How do I know which APK version I have?",
    a: "Open the app and check the version listed on the account or settings screen, and compare it against the latest release noted on this page.",
  },
  {
    q: "What if the APK won't install?",
    a: "Confirm \"install unknown apps\" is enabled for your browser, make sure you downloaded the full file without interruption, and try reopening the downloaded file. If it still fails, contact support.",
  },
];

const STEPS = [
  {
    icon: Search,
    title: "Download the APK",
    desc: "Tap the download button on this page to get the current 1PPP Games APK file.",
  },
  {
    icon: Smartphone,
    title: "Allow installation",
    desc: "Open Settings and enable \"Install unknown apps\" for your browser, then open the downloaded file.",
  },
  {
    icon: UserPlus,
    title: "Create your account",
    desc: "Launch the app, tap Sign Up, and enter your details to create a free account in under a minute.",
  },
  {
    icon: Gamepad2,
    title: "Log in & play",
    desc: "Enter your username and password to log in and start exploring the games collection.",
  },
];

export const metadata: Metadata = {
  title: "1PPP Games APK — Download, Version & Install Guide",
  description:
    "Download the 1PPP Games APK, check the latest version and follow a clear step-by-step Android installation guide — from download to your first login.",
  keywords: [
    "1PPP Games APK",
    "1PPP Game APK",
    "1PPP Game APK download",
    "1PPP APK download",
    "1PPP Games download",
    "1PPP Game download",
    "1PPP APK install guide",
    "install 1PPP Game APK",
    "1PPP Game APK for Android",
    "1PPP Game APK latest version",
    "1PPP Games version",
  ],
  alternates: { canonical: "https://1pppgames.pk/apk" },
  openGraph: {
    title: "1PPP Games APK — Download, Version & Install Guide",
    description:
      "Download the 1PPP Games APK, check the latest version and follow a clear step-by-step Android installation guide.",
    type: "website",
    url: "https://1pppgames.pk/apk",
    siteName: "1PPP Games",
    images: [
      { url: "/assets/og-image.png", width: 1200, height: 630, alt: "1PPP Games APK" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1PPP Games APK — Download, Version & Install Guide",
    description:
      "Download the 1PPP Games APK, check the latest version and follow a clear step-by-step Android installation guide.",
    images: ["/assets/og-image.png"],
  },
};

export default function ApkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://1pppgames.pk/" },
          { name: "APK", url: "https://1pppgames.pk/apk" },
        ])}
      />
      <JsonLd data={faqPageSchema(APK_FAQ)} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HeaderShell />
      <main id="main">
        <section className="section" id="apk-page">
          <div className="site-container">
            <Link href="/" className="text-link game-detail-back">
              <ChevronLeft /> Back to home
            </Link>

            <div className="apk-layout">
              <div className="apk-copy">
                <span className="kicker">APK CENTER</span>
                <h1>Download &amp; install the 1PPP Games APK.</h1>
                <p>
                  Everything you need to install 1PPP Games with confidence —
                  version information, Android-focused install steps and
                  practical answers, kept up to date so you always have the
                  correct APK before you begin.
                </p>
                <div className="feature-list">
                  <div>
                    <span>
                      <BadgeCheck />
                    </span>
                    <div>
                      <b>Version information</b>
                      <small>Know what release you are using.</small>
                    </div>
                  </div>
                  <div>
                    <span>
                      <Smartphone />
                    </span>
                    <div>
                      <b>Android-focused guidance</b>
                      <small>Simple steps for mobile installation.</small>
                    </div>
                  </div>
                  <div>
                    <span>
                      <CircleHelp />
                    </span>
                    <div>
                      <b>Practical answers</b>
                      <small>Helpful tips before you get started.</small>
                    </div>
                  </div>
                </div>
                <div className="apk-cta-row">
                  <a className="btn primary" href={APK_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                    <Download /> DOWNLOAD 1PPP GAMES APK
                  </a>
                  <Link className="btn secondary" href="/games">
                    <Gamepad2 /> BROWSE GAMES
                  </Link>
                </div>
              </div>
              <div className="apk-card">
                <div className="apk-card-glow" />
                <div className="apk-icon">
                  <PackageOpen />
                </div>
                <div className="apk-details">
                  <span className="release">LATEST RESOURCE</span>
                  <h3>1PPP APK</h3>
                  <p>Android installation &amp; version guide</p>
                  <div className="meter">
                    <span />
                  </div>
                  <small>
                    <CheckCircle2 /> Mobile-ready information
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section steps-section" id="apk-steps">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">INSTALL GUIDE</span>
                <h2>From download to your first game session.</h2>
                <p>Four simple steps to install the 1PPP Games APK and start playing on Android.</p>
              </div>
            </div>
            <div className="benefit-grid">
              {STEPS.map((step, i) => (
                <article key={step.title}>
                  <span className="benefit-icon">
                    <step.icon />
                  </span>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
            <p className="steps-note">
              Want more detail on account setup or payments? The{" "}
              <Link href="/guides">1PPP Games guides</Link> cover registration
              and bonus questions, and the{" "}
              <Link href="/blog">1PPP Games blog</Link> has practical tips for
              getting more out of the app.
            </p>
          </div>
        </section>

        <section className="section faq-section" id="apk-faq">
          <div className="site-container faq-layout">
            <div className="faq-intro">
              <span className="kicker">APK FAQ</span>
              <h2>Questions about the APK, answered.</h2>
              <p>
                Quick answers about downloading, installing and updating the
                1PPP Games APK on Android.
              </p>
              <Link className="btn secondary" href="/contact">
                <CircleHelp /> CONTACT US
              </Link>
            </div>
            <Faq items={APK_FAQ} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
