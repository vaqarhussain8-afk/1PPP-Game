import type { FaqItem } from "./faq";
import type { Game } from "./games";

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function gameItemListSchema(games: Game[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: games.map((game, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://1pppgames.pk/games/${game.slug}`,
      name: game.name,
    })),
  };
}

export function softwareAppSchema(
  reviews: { name: string; rating: number; quote: string }[]
) {
  const ratingCount = reviews.length;
  const ratingValue =
    reviews.reduce((sum, r) => sum + r.rating, 0) / ratingCount;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "1PPP Games",
    applicationCategory: "GameApplication",
    operatingSystem: "ANDROID",
    url: "https://1pppgames.pk/",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      ratingCount,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.quote,
    })),
  };
}

export function videoGameSchema(game: Game) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.name,
    description: game.description,
    genre: game.tag,
    image: `https://1pppgames.pk${game.image}`,
    url: `https://1pppgames.pk/games/${game.slug}`,
    applicationCategory: "Game",
    operatingSystem: "ANDROID",
  };
}

export function blogPostingListSchema(
  articles: { slug: string; title: string; desc: string; image: string; datePublished: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: "https://1pppgames.pk/blog",
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.desc,
      image: `https://1pppgames.pk${article.image}`,
      datePublished: article.datePublished,
      url: `https://1pppgames.pk/blog#${article.slug}`,
      author: { "@type": "Organization", name: "1PPP Games" },
    })),
  };
}
