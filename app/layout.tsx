import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://1pppgames.pk"),
  title: "1PPP Game Online — 1PPP Game APK Download & Guides",
  description:
    "1PPP Game Online is a mobile games hub — download the 1PPP Game APK and explore install guides, gaming tips, bonuses and fresh updates in one modern hub.",
  keywords: [
    // Brand / core
    "1PPP Game",
    "1PPP Games",
    "1PPP Game Online",
    "1PPP APK",
    // Download & install cluster
    "1PPP Game APK",
    "1PPP Game APK download",
    "1PPP Game download",
    "1PPP Game latest version",
    "install 1PPP Game APK",
    "1PPP Game APK for Android",
    // Account cluster
    "1PPP Games login",
    "1PPP Game register",
    "1PPP Game sign up",
    "create 1PPP Game account",
    // Games cluster
    "1PPP Game slots",
    "1PPP Game casino games",
    "1PPP Game aviator",
    "1PPP Game cricket",
    "mobile slot games",
    // Bonus & location cluster
    "1PPP Game bonus",
    "1PPP Game deposit",
    "1PPP Games Pakistan",
    "APK guides",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://1pppgames.pk/" },
  openGraph: {
    title: "1PPP Game Online — 1PPP Game APK Download & Guides",
    description:
      "Download the 1PPP Game APK and explore guides, resources and gaming updates on 1PPP Game Online.",
    type: "website",
    url: "https://1pppgames.pk/",
    siteName: "1PPP Games",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "1PPP Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1PPP Game Online — 1PPP Game APK Download & Guides",
    description:
      "Download the 1PPP Game APK and explore guides, resources and gaming updates on 1PPP Game Online.",
    images: ["/assets/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

const THEME_INIT_SCRIPT = `
(function(){
  try{
    var stored=localStorage.getItem("theme");
    var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
    document.documentElement.setAttribute("data-theme",theme);
  }catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "1PPP Games",
              alternateName: "1PPP Game",
              url: "https://1pppgames.pk/",
              description:
                "1PPP Game Online — 1PPP Game APK download, install guides and mobile games.",
              publisher: { "@id": "https://1pppgames.pk/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://1pppgames.pk/#organization",
              name: "1PPP Games",
              url: "https://1pppgames.pk/",
              logo: "https://1pppgames.pk/assets/logo-512.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@1pppgames.pk",
                contactType: "customer support",
                url: "https://1pppgames.pk/contact",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
