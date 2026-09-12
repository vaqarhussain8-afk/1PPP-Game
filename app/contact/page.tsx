import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock3, Gamepad2, Download, BookOpen, ChevronRight } from "lucide-react";
import HeaderShell from "../components/HeaderShell";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import JsonLd from "../components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "../lib/schema";

const SUPPORT_TOPICS = [
  { icon: Gamepad2, title: "Games & listings", desc: "Questions about a specific game, its category or rating.", href: "/games" },
  { icon: Download, title: "APK & installation", desc: "Version details, install steps and Android guidance.", href: "/apk" },
  { icon: BookOpen, title: "Guides & account help", desc: "Registration, payments and general how-to questions.", href: "/guides" },
];

const CONTACT_FAQ = [
  {
    q: "How long does a reply take?",
    a: "Most messages are answered within 24 hours. Complex APK or account questions may take a little longer.",
  },
  {
    q: "Can I report an issue with a game listing?",
    a: "Yes — use the form below with the game name in the subject line and describe what you found.",
  },
  {
    q: "Do you offer live support?",
    a: "Live chat is available through the search & help menu during active hours; otherwise the contact form is the fastest way to reach us.",
  },
];

export const metadata: Metadata = {
  title: "Contact — 1PPP Games",
  description:
    "Get in touch with the 1PPP Games team — questions about games, APK resources or guides.",
  keywords: [
    "1PPP Games support",
    "1PPP Game support",
    "1PPP Games contact",
    "contact 1PPP Game",
    "1PPP Games help",
    "1PPP Game customer service",
  ],
  alternates: { canonical: "https://1pppgames.pk/contact" },
  openGraph: {
    title: "Contact — 1PPP Games",
    description:
      "Get in touch with the 1PPP Games team — questions about games, APK resources or guides.",
    type: "website",
    url: "https://1pppgames.pk/contact",
    siteName: "1PPP Games",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "1PPP Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — 1PPP Games",
    description:
      "Get in touch with the 1PPP Games team — questions about games, APK resources or guides.",
    images: ["/assets/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — 1PPP Games",
          url: "https://1pppgames.pk/contact",
          about: { "@id": "https://1pppgames.pk/#organization" },
        }}
      />
      <JsonLd data={faqPageSchema(CONTACT_FAQ)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://1pppgames.pk/" },
          { name: "Contact", url: "https://1pppgames.pk/contact" },
        ])}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HeaderShell />
      <main id="main">
        <section className="section" id="contact-page">
          <div className="site-container faq-layout">
            <div className="faq-intro">
              <span className="kicker">GET IN TOUCH</span>
              <h1>We&apos;d love to hear from you.</h1>
              <p>
                Questions about games, APK resources or guides? Send a
                message and the 1PPP team will get back to you.
              </p>
              <div className="contact-info">
                <div>
                  <span className="trust-icon">
                    <Mail />
                  </span>
                  <div>
                    <b>Email</b>
                    <small>support@1pppgames.pk</small>
                  </div>
                </div>
                <div>
                  <span className="trust-icon">
                    <MessageCircle />
                  </span>
                  <div>
                    <b>Live chat</b>
                    <small>Available through the search &amp; help menu</small>
                  </div>
                </div>
                <div>
                  <span className="trust-icon">
                    <Clock3 />
                  </span>
                  <div>
                    <b>Response time</b>
                    <small>Usually within 24 hours</small>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section dark-section" id="support-topics">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">BROWSE FIRST</span>
                <h2>Find it faster.</h2>
                <p>Many questions are already covered in these sections.</p>
              </div>
            </div>
            <div className="guide-grid">
              {SUPPORT_TOPICS.map(({ icon: Icon, title, desc, href }) => (
                <article className="guide-card" key={title}>
                  <div className="guide-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link href={href}>
                    Go there <ChevronRight />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="contact-faq">
          <div className="site-container faq-layout">
            <div className="faq-intro">
              <span className="kicker">FAQ</span>
              <h2>Before you write in.</h2>
              <p>A few quick answers that might save you a message.</p>
            </div>
            <Faq items={CONTACT_FAQ} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
