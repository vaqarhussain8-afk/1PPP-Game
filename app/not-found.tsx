import Link from "next/link";
import { Gamepad2, Download, MessageCircle } from "lucide-react";
import HeaderShell from "./components/HeaderShell";
import Footer from "./components/Footer";

export const metadata = {
  title: "Page not found — 1PPP Games",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <HeaderShell />
      <main id="main">
        <section className="section" style={{ textAlign: "center", padding: "120px 0" }}>
          <div className="site-container">
            <span className="kicker">404</span>
            <h1>This page wandered off.</h1>
            <p style={{ maxWidth: 460, margin: "0 auto 28px" }}>
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
              Try one of these instead.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/games" className="btn primary">
                <Gamepad2 /> Browse games
              </Link>
              <Link href="/apk" className="btn secondary">
                <Download /> APK center
              </Link>
              <Link href="/contact" className="btn secondary">
                <MessageCircle /> Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
