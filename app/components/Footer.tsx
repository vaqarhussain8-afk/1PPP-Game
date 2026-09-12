import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer>
      <div className="site-container footer-main">
        <div className="footer-about">
          <Link className="brand" href="/">
            <span className="brand-mark">
              <Gamepad2 />
            </span>
            <span className="brand-copy">
              <b>1PPP</b>
              <small>GAMES</small>
            </span>
          </Link>
          <p>
            Mobile games, APK resources, practical guides and useful gaming
            content — presented in a cleaner, faster experience.
          </p>
          <div className="social">
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Twitter">
              <XIcon />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/games">Games</Link>
          <Link href="/apk">APK Center</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#why">Why 1PPP</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Popular topics</h4>
          <Link href="/games">Sports Games</Link>
          <Link href="/games">Arcade Games</Link>
          <Link href="/apk">Mobile APKs</Link>
          <Link href="/blog">Gaming Tips</Link>
        </div>
      </div>
      <div className="site-container copyright">© 2026 1PPP Games. All rights reserved.</div>
    </footer>
  );
}
