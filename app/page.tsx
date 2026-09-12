import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Bell,
  MoreHorizontal,
  ChevronRight,
  Home as HomeIcon,
  Gamepad2,
  Download,
  UserRound,
  BookOpen,
  Smartphone,
  Star,
  TrendingUp,
  Flame,
  Swords,
  Crown,
  Trophy,
  Joystick,
  CarFront,
  Layers,
  BadgeCheck,
  CircleHelp,
  PackageOpen,
  CheckCircle2,
  UserPlus,
  WalletCards,
  LayoutGrid,
  MousePointerClick,
  MessageCircle,
  Compass,
  PlayCircle,
  Quote,
} from "lucide-react";
import HeaderShell from "./components/HeaderShell";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { games } from "./lib/games";
import { APK_DOWNLOAD_URL } from "./lib/config";
import { DEFAULT_FAQ_ITEMS } from "./lib/faq";
import { faqPageSchema, gameItemListSchema, softwareAppSchema } from "./lib/schema";

const CATEGORY_DETAILS = [
  {
    icon: Swords,
    name: "Action",
    desc: "Fast-reflex mobile games built for quick, high-energy sessions on 1PPP Games. Expect sharp reaction-time challenges, escalating difficulty and short rounds that reward quick thinking over long grinding sessions.",
    examples: "Popular picks: reflex duels, combo challenges, arena battles.",
  },
  {
    icon: Crown,
    name: "Casino",
    desc: "Slot-style and casino-inspired titles with bonus rounds and visual flair. Layered multipliers, animated reels and themed presentations make each session feel polished without adding unnecessary complexity.",
    examples: "Popular picks: fortune slots, multiplier bonus rounds, themed reels.",
  },
  {
    icon: Trophy,
    name: "Sports",
    desc: "Match-style sports games for cricket, prediction and timing-based play. Built around quick decision-making, these titles turn familiar sports moments into fast, replayable interactive rounds.",
    examples: "Popular picks: cricket predictors, timing challenges, match rounds.",
  },
  {
    icon: Joystick,
    name: "Arcade",
    desc: "Classic arcade formats reimagined for mobile — easy to learn, fun to master. Simple controls and clear objectives make this category a great starting point for new players exploring the collection.",
    examples: "Popular picks: rising-multiplier games, tap challenges, mini arcades.",
  },
  {
    icon: CarFront,
    name: "Racing",
    desc: "Racing and speed-based titles designed for short, competitive rounds. Every race focuses on tight timing and quick reflexes rather than long tracks, keeping sessions punchy and repeatable.",
    examples: "Popular picks: sprint races, speed challenges, checkpoint runs.",
  },
  {
    icon: Layers,
    name: "Card",
    desc: "Card and table game formats brought to a clean, mobile-first interface. Familiar rules paired with a modern layout make it easy to jump between rounds without a steep learning curve.",
    examples: "Popular picks: classic card rounds, table formats, quick-deal games.",
  },
];

const PLAY_STEPS = [
  {
    icon: Compass,
    title: "Pick a category",
    desc: "Browse action, casino, sports, arcade, racing or card games and choose what matches your mood.",
  },
  {
    icon: PlayCircle,
    title: "Open a game",
    desc: "Tap any title on 1PPP Games to view its details, rating and what makes it worth playing.",
  },
  {
    icon: Zap,
    title: "Learn the rules fast",
    desc: "Every game is built around simple, mobile-first rules you can pick up in under a minute.",
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    desc: "Keep an eye on your activity and revisit favorites as you explore more of the collection.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahsan R.",
    role: "Android player",
    rating: 5,
    quote:
      "Downloading 1PPP Games was straightforward and the APK guide made installation painless. I was playing within minutes.",
  },
  {
    name: "Fatima K.",
    role: "Mobile gamer",
    rating: 5,
    quote:
      "I like how 1PPP Games organizes everything by category — finding a new game to try never takes long.",
  },
  {
    name: "Bilal M.",
    role: "Returning user",
    rating: 4,
    quote:
      "The guides answered every question I had about setting up my account and understanding bonus offers.",
  },
];

const homeGames = games.filter((g) =>
  ["dragon-fortune", "cricket-battle", "aviator", "color-prediction"].includes(g.slug)
);

const SLOT_IMAGES: Record<string, string> = {
  "Fortune Mouse": "/assets/slot-fortune-mouse.webp",
  "Party Night": "/assets/slot-party-night.webp",
  "Master Tiger": "/assets/slot-master-tiger.webp",
  "Witches Night": "/assets/slot-witches-night.webp",
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(DEFAULT_FAQ_ITEMS)} />
      <JsonLd data={gameItemListSchema(homeGames)} />
      <JsonLd data={softwareAppSchema(TESTIMONIALS)} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <HeaderShell />

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-noise" />
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
          <div className="hero-lines" />

          <div className="site-container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" /> THE MOBILE GAMING HUB
              </div>
              <h1>
                1PPP Game Online — download your next{" "}
                <span>favorite 1PPP Game APK.</span>
              </h1>
              <p className="hero-lead">
                1PPP Game Online is a cleaner way to explore mobile games, APK
                information, practical guides, bonuses and the latest gaming
                updates — built around a fast, mobile-first experience.
                Download the 1PPP Game APK, create your account and log in
                within minutes to start playing.
              </p>
              <div className="hero-actions">
                <a href={APK_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn primary btn-download">
                  <Download /> DOWNLOAD APK
                </a>
                <a href="#games" className="btn secondary">
                  <Gamepad2 /> EXPLORE GAMES
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>100+</strong>
                  <span>Topics &amp; games</span>
                </div>
                <i />
                <div>
                  <strong>24/7</strong>
                  <span>Content access</span>
                </div>
                <i />
                <div>
                  <strong>Mobile</strong>
                  <span>First design</span>
                </div>
                <i />
                <div>
                  <strong>6+</strong>
                  <span>Game categories</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Mobile gaming preview">
              <div className="visual-badge badge-one">
                <span className="badge-icon">
                  <Zap />
                </span>
                <div>
                  <b>Fast updates</b>
                  <small>Fresh game information</small>
                </div>
              </div>
              <div className="visual-badge badge-two">
                <span className="badge-icon">
                  <ShieldCheck />
                </span>
                <div>
                  <b>Simple &amp; clear</b>
                  <small>Guides made to scan</small>
                </div>
              </div>

              <div className="device-shadow" />
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <b>1PPP</b>
                    <span>
                      <Bell />
                      <MoreHorizontal />
                    </span>
                  </div>
                  <div className="phone-feature">
                    <small>FEATURED TODAY</small>
                    <strong>
                      PLAY
                      <br />
                      SMARTER
                    </strong>
                    <button>
                      EXPLORE <ArrowUpRight />
                    </button>
                  </div>
                  <div className="phone-title">
                    <span>Popular games</span>
                    <ChevronRight />
                  </div>
                  <div className="phone-games">
                    <div>
                      <Image src="/assets/game-dragon.webp" alt="" width={120} height={80} priority />
                      <span>Dragon</span>
                    </div>
                    <div>
                      <Image src="/assets/game-cricket.webp" alt="" width={120} height={80} priority />
                      <span>Cricket</span>
                    </div>
                    <div>
                      <Image src="/assets/game-aviator.webp" alt="" width={120} height={80} />
                      <span>Aviator</span>
                    </div>
                    <div>
                      <Image src="/assets/game-color.webp" alt="" width={120} height={80} />
                      <span>Color</span>
                    </div>
                  </div>
                  <div className="phone-nav">
                    <span className="active">
                      <HomeIcon />
                      <small>Home</small>
                    </span>
                    <span>
                      <Gamepad2 />
                      <small>Games</small>
                    </span>
                    <span>
                      <Download />
                      <small>APK</small>
                    </span>
                    <span>
                      <UserRound />
                      <small>Profile</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="site-container trust-grid">
            <div>
              <span className="trust-icon">
                <Gamepad2 />
              </span>
              <div>
                <b>100+ Games</b>
                <small>Popular titles &amp; topics</small>
              </div>
            </div>
            <div>
              <span className="trust-icon">
                <Download />
              </span>
              <div>
                <b>APK Resources</b>
                <small>Version &amp; install help</small>
              </div>
            </div>
            <div>
              <span className="trust-icon">
                <BookOpen />
              </span>
              <div>
                <b>Helpful Guides</b>
                <small>Clear answers &amp; tips</small>
              </div>
            </div>
            <div>
              <span className="trust-icon">
                <Smartphone />
              </span>
              <div>
                <b>Mobile First</b>
                <small>Designed for every screen</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="games">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">DISCOVER</span>
                <h2>Find a game for every mood.</h2>
                <p>
                  Explore a curated mix of popular mobile game styles with a
                  visual, easy-to-browse layout on 1PPP Game Online. The 1PPP
                  Game collection spans action, casino, sports, arcade,
                  racing and card titles, so whether you want quick arcade
                  sessions or in-depth casino play, download the 1PPP Game
                  APK and there is a game ready for every mood.
                </p>
              </div>
              <Link className="text-link" href="/games">
                View collection <ArrowUpRight />
              </Link>
            </div>
            <div className="game-grid">
              {homeGames.map((game, i) => {
                const BadgeIcon = [Star, TrendingUp, Flame, Sparkles][i] ?? Sparkles;
                return (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    className={`game-card${i === 0 ? " featured" : ""}`}
                  >
                    <Image
                      src={game.image}
                      alt={`${game.name} mobile game`}
                      fill
                      sizes={i === 0 ? "(max-width: 780px) 100vw, 35vw" : "(max-width: 780px) 50vw, 22vw"}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="game-shade" />
                    <div className="game-info">
                      <span>{game.tag}</span>
                      <h3>{game.name}</h3>
                      <small>
                        <BadgeIcon /> {i === 0 ? `${game.rating} · ${game.badge}` : game.badge}
                      </small>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="category-row">
              <span>Browse by category</span>
              <Link href="/games">
                <Swords /> Action
              </Link>
              <Link href="/games">
                <Crown /> Casino
              </Link>
              <Link href="/games">
                <Trophy /> Sports
              </Link>
              <Link href="/games">
                <Joystick /> Arcade
              </Link>
              <Link href="/games">
                <CarFront /> Racing
              </Link>
              <Link href="/games">
                <Layers /> Card
              </Link>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="categories">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">GAME CATEGORIES</span>
                <h2>Every category 1PPP Games has to offer.</h2>
                <p>
                  1PPP Games groups its mobile game collection into six clear
                  categories, so you can jump straight to the style of play
                  you enjoy most instead of scrolling through everything.
                </p>
              </div>
            </div>
            <div className="guide-grid">
              {CATEGORY_DETAILS.map((cat, i) => (
                <Link className="guide-card" href="/games" key={cat.name}>
                  <span className="guide-number">{String(i + 1).padStart(2, "0")}</span>
                  <div className="guide-icon">
                    <cat.icon />
                  </div>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <small className="category-examples">{cat.examples}</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="providers">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">COLLECTIONS</span>
                <h2>Browse games by provider.</h2>
                <p>
                  1PPP Games brings together titles from all the top game
                  providers, organized into easy-to-browse collections.
                </p>
              </div>
            </div>
            <div className="provider-grid">
              {[
                "All Slot",
                "JILI",
                "PG",
                "PP",
                "JDB",
                "Spribe",
                "FaChai",
                "CP",
                "BTG",
                "PGSOFT",
                "PLAYSON",
                "RUBYPLAY",
                "Inoosi",
                "FASTSPIN",
                "PANDA",
                "TOPPLAYER",
                "PLAYBGO",
                "YELLOWBAT",
                "KAGAMING",
              ].map((name, i) => (
                <Link
                  key={name}
                  href="/games"
                  className={`provider-chip${i === 1 ? " active" : ""}`}
                >
                  <span className="provider-chip-icon">
                    {name.slice(0, 2).toUpperCase()}
                  </span>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section" id="slots">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">POPULAR SLOTS</span>
                <h2>Trending slot games right now.</h2>
                <p>
                  A snapshot of the slot titles players are exploring most on
                  1PPP Games this week.
                </p>
              </div>
              <Link className="text-link" href="/games">
                View all games <ArrowUpRight />
              </Link>
            </div>
            <div className="slot-grid">
              {["Fortune Mouse", "Party Night", "Master Tiger", "Witches Night"].map((name) => (
                <Link key={name} href="/games" className="slot-tile">
                  <Image
                    src={SLOT_IMAGES[name]}
                    alt={`${name} slot game`}
                    fill
                    sizes="130px"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section" id="apk">
          <div className="site-container apk-layout">
            <div className="apk-copy">
              <span className="kicker">APK CENTER</span>
              <h2>Everything you need to install with confidence.</h2>
              <p>
                Keep APK information, version details and installation steps
                together in one polished resource. No clutter — just the
                information users actually need to download the 1PPP Game
                APK and install it safely on Android. Every 1PPP Game APK
                guide is reviewed for accuracy so you always have the
                correct version and permissions before you begin.
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
                <Link className="btn secondary" href="/apk">
                  VIEW APK GUIDE
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
        </section>

        <section className="section dark-section" id="deposit">
          <div className="site-container deposit-layout">
            <div className="deposit-mock">
              <div className="deposit-mock-head">
                <span>
                  <WalletCards />
                </span>
                <b>Deposit</b>
              </div>
              <div className="deposit-mock-online">Online Deposit</div>
              <small className="deposit-mock-label">Payment</small>
              <div className="payment-badges">
                <div className="payment-badge">
                  JazzCash <Flame />
                  <span className="badge-tag">+0.30%</span>
                </div>
                <div className="payment-badge">
                  Easypaisa <Flame />
                  <span className="badge-tag">RECO</span>
                </div>
              </div>
              <small className="deposit-mock-label">Deposit Channels</small>
              <div className="payment-badges">
                <div className="payment-badge">
                  Hot <Flame /> U2
                  <span className="badge-tag">RECO</span>
                </div>
                <div className="payment-badge">
                  Hot <Flame /> WD
                  <span className="badge-tag">RECO</span>
                </div>
              </div>
              <div className="amount-grid">
                {[
                  { v: "100.00", b: null },
                  { v: "200.00", b: "+7.00 bonus" },
                  { v: "500.00", b: "+37.00 bonus" },
                  { v: "1,000.00", b: "+77.00 bonus" },
                  { v: "2,000.00", b: "+77.00 bonus" },
                  { v: "3,000.00", b: "+117.00 bonus" },
                ].map((t) => (
                  <div className="amount-tile" key={t.v}>
                    <b>{t.v}</b>
                    {t.b && <small>{t.b}</small>}
                  </div>
                ))}
              </div>
              <span className="deposit-now-btn">Deposit Now</span>
            </div>
            <div className="deposit-copy">
              <span className="kicker">DEPOSITS &amp; BONUSES</span>
              <h2>Fast deposits with instant bonuses.</h2>
              <p>
                Top up your 1PPP Game account through trusted local payment
                methods and unlock bonus credit on every deposit tier —
                clear amounts, clear bonuses, no surprises.
              </p>
              <div className="feature-list">
                <div>
                  <span>
                    <WalletCards />
                  </span>
                  <div>
                    <b>JazzCash &amp; Easypaisa</b>
                    <small>Popular local payment methods supported.</small>
                  </div>
                </div>
                <div>
                  <span>
                    <Flame />
                  </span>
                  <div>
                    <b>Recommended deposit channels</b>
                    <small>Fast, verified channels for smoother transfers.</small>
                  </div>
                </div>
                <div>
                  <span>
                    <CheckCircle2 />
                  </span>
                  <div>
                    <b>Bonus on every tier</b>
                    <small>Extra credit added automatically on qualifying deposits.</small>
                  </div>
                </div>
              </div>
              <Link className="btn primary" href="/contact">
                <WalletCards /> VIEW DEPOSIT OPTIONS
              </Link>
            </div>
          </div>
        </section>

        <section className="section steps-section" id="get-started">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">GET STARTED</span>
                <h2>How to download, create an account &amp; log in to 1PPP Games.</h2>
                <p>
                  Three simple steps to start playing 1PPP Games on your
                  Android device today.
                </p>
              </div>
            </div>
            <div className="steps-grid">
              <div className="step-item">
                <span className="step-num">01</span>
                <h3>Download 1PPP Games</h3>
                <p>
                  Get the 1PPP Games APK from the download link, then allow
                  installation from unknown sources in your Android settings.
                </p>
                <ul className="step-list">
                  <li>Tap the APK download button on the APK Center.</li>
                  <li>Open Settings and enable “Install unknown apps” for your browser.</li>
                  <li>Open the downloaded file and confirm the install.</li>
                </ul>
                <a className="step-download" href={APK_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download /> Download APK
                </a>
              </div>
              <div className="step-item">
                <span className="step-num">02</span>
                <h3>Create an account</h3>
                <p>
                  Open the app, tap Sign Up, and fill in your details to
                  create your free 1PPP Games account in under a minute.
                </p>
                <ul className="step-list">
                  <li>Launch 1PPP Games and select “Sign Up” on the home screen.</li>
                  <li>Enter your mobile number or email and set a password.</li>
                  <li>Verify your details to activate your account.</li>
                </ul>
              </div>
              <div className="step-item">
                <span className="step-num">03</span>
                <h3>Log in &amp; play</h3>
                <p>
                  Enter your username and password to log in to 1PPP Games
                  and start exploring games right away.
                </p>
                <ul className="step-list">
                  <li>Tap “Log In” and enter your registered credentials.</li>
                  <li>Enable “Remember me” for faster access next time.</li>
                  <li>Browse the games hub and start playing instantly.</li>
                </ul>
              </div>
            </div>
            <p className="steps-note">
              New to 1PPP Games? The download, sign-up and login process takes
              only a few minutes, and all guides above are kept up to date
              with the latest app version. If you are wondering how to
              download 1PPP Games safely, how to create a 1PPP Games account,
              or how to log in to 1PPP Games after installing the APK, the
              steps above cover every part of the process from first install
              to your first game session.
            </p>
          </div>
        </section>

        <section className="section" id="how-to-play">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">HOW TO PLAY</span>
                <h2>Playing 1PPP Games, step by step.</h2>
                <p>
                  Once you are logged in, getting into your first game on
                  1PPP Games only takes a few taps. Here is what that looks
                  like in practice.
                </p>
              </div>
            </div>
            <div className="benefit-grid">
              {PLAY_STEPS.map((step, i) => (
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
          </div>
        </section>

        <section className="section" id="guides">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">LEARN &amp; PLAY</span>
                <h2>Guides that make the next step easy.</h2>
                <p>
                  Short, practical resources covering downloads, setup,
                  payments and everyday gaming questions — written to help
                  both new and returning 1PPP Games players get the most out
                  of every visit.
                </p>
              </div>
              <Link className="text-link" href="/guides">
                All guides <ArrowUpRight />
              </Link>
            </div>
            <div className="guide-grid">
              <article className="guide-card">
                <span className="guide-number">01</span>
                <div className="guide-icon">
                  <Download />
                </div>
                <h3>How to download an APK</h3>
                <p>
                  Follow a straightforward path to download 1PPP Games,
                  from finding the correct APK to installing it on Android.
                </p>
                <Link href="/apk">
                  Read guide <ChevronRight />
                </Link>
              </article>
              <article className="guide-card">
                <span className="guide-number">02</span>
                <div className="guide-icon">
                  <UserPlus />
                </div>
                <h3>Register &amp; get started</h3>
                <p>
                  Understand the common steps to create a 1PPP Games account
                  and log in for the first time before you begin using the
                  app.
                </p>
                <Link href="/guides">
                  Read guide <ChevronRight />
                </Link>
              </article>
              <article className="guide-card">
                <span className="guide-number">03</span>
                <div className="guide-icon">
                  <WalletCards />
                </div>
                <h3>Payments &amp; withdrawals</h3>
                <p>
                  Learn what details and conditions to check before requesting
                  a transaction.
                </p>
                <Link href="/guides">
                  Read guide <ChevronRight />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section benefits-section" id="why">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">WHY 1PPP</span>
                <h2>Built around a better browsing experience.</h2>
                <p>
                  Strong hierarchy, useful content and a modern interface help
                  visitors find what matters faster. 1PPP Games is designed
                  so downloading, creating an account and logging in feel
                  effortless from the very first visit.
                </p>
              </div>
            </div>
            <div className="benefit-grid">
              <article>
                <span className="benefit-icon">
                  <LayoutGrid />
                </span>
                <b>01</b>
                <h3>Everything in one place</h3>
                <p>
                  Games, APK resources, guides and updates are organized into
                  one focused destination.
                </p>
              </article>
              <article>
                <span className="benefit-icon">
                  <MousePointerClick />
                </span>
                <b>02</b>
                <h3>Clear actions</h3>
                <p>
                  Strong calls to action make it easier to move from
                  discovery to useful information.
                </p>
              </article>
              <article>
                <span className="benefit-icon">
                  <Zap />
                </span>
                <b>03</b>
                <h3>Fast to scan</h3>
                <p>
                  Compact cards and visual sections keep the experience clean
                  without feeling empty.
                </p>
              </article>
              <article>
                <span className="benefit-icon">
                  <ShieldCheck />
                </span>
                <b>04</b>
                <h3>Useful information</h3>
                <p>
                  Practical content helps users understand downloads, updates
                  and important terms.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="support-banner">
          <div className="site-container support-banner-inner">
            <span className="support-banner-icon">
              <MessageCircle />
            </span>
            <h2>We support 24/7 chat support.</h2>
            <p>
              Have a question about 1PPP Games, downloads, accounts or
              anything else? Our team is available around the clock to help.
            </p>
            <Link className="btn primary" href="/contact">
              <MessageCircle /> CHAT WITH US
            </Link>
          </div>
        </section>

        <section className="stats-section">
          <div className="site-container stats">
            <div>
              <strong>100+</strong>
              <span>Games &amp; topics</span>
            </div>
            <div>
              <strong>6+</strong>
              <span>Categories</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Content access</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Simple destination</span>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">PLAYER FEEDBACK</span>
                <h2>What players say about 1PPP Games.</h2>
                <p>
                  Real feedback from people who downloaded 1PPP Games,
                  created an account and started exploring the collection.
                </p>
              </div>
            </div>
            <div className="blog-grid">
              {TESTIMONIALS.map((t) => (
                <article className="testimonial-card" key={t.name}>
                  <Quote className="testimonial-quote-icon" />
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={i < t.rating ? "filled" : ""} />
                    ))}
                  </div>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <b>{t.name}</b>
                    <small>{t.role}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="blog">
          <div className="site-container">
            <div className="section-head">
              <div>
                <span className="kicker">FROM THE BLOG</span>
                <h2>Fresh reads for mobile players.</h2>
                <p>
                  Helpful articles built around common questions, trends and
                  better gaming habits — including tips for getting the most
                  out of your 1PPP Games account.
                </p>
              </div>
              <Link className="text-link" href="/blog">
                Visit blog <ArrowUpRight />
              </Link>
            </div>
            <div className="blog-grid">
              <article>
                <Image src="/assets/article-1.webp" alt="Mobile games guide" width={400} height={165} />
                <div>
                  <span>GUIDES · 2026</span>
                  <h3>Popular mobile games worth exploring</h3>
                  <p>
                    Understand different game styles and what makes them
                    engaging on mobile.
                  </p>
                  <Link href="/blog">
                    Read article <ChevronRight />
                  </Link>
                </div>
              </article>
              <article>
                <Image src="/assets/article-2.webp" alt="Gaming bonus guide" width={400} height={165} />
                <div>
                  <span>BONUSES · 2026</span>
                  <h3>How to understand bonus offers</h3>
                  <p>
                    Key details to review before using any promotional or
                    reward offer.
                  </p>
                  <Link href="/blog">
                    Read article <ChevronRight />
                  </Link>
                </div>
              </article>
              <article>
                <Image src="/assets/article-3.webp" alt="Mobile gaming tips" width={400} height={165} />
                <div>
                  <span>TIPS · 2026</span>
                  <h3>Simple tips for better gameplay</h3>
                  <p>
                    Practical ideas for a smoother, more informed mobile
                    gaming experience.
                  </p>
                  <Link href="/blog">
                    Read article <ChevronRight />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="site-container faq-layout">
            <div className="faq-intro">
              <span className="kicker">FAQ</span>
              <h2>Questions, answered.</h2>
              <p>
                Quick answers to common questions about 1PPP Games, including
                how to download 1PPP Games, how to create an account, how to
                log in, APK resources and the website.
              </p>
              <Link className="btn secondary" href="/contact">
                <MessageCircle /> CONTACT US
              </Link>
            </div>
            <Faq />
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="site-container cta-inner">
            <div>
              <span className="kicker">READY TO EXPLORE?</span>
              <h2>Your next game is closer than you think.</h2>
              <p>Browse games, explore guides and keep up with new 1PPP resources.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn primary" href="/games">
                <Gamepad2 /> EXPLORE GAMES
              </Link>
              <Link className="btn secondary" href="/apk">
                <Download /> APK CENTER
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
