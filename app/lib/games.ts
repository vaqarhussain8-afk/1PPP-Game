export type Game = {
  slug: string;
  name: string;
  tag: string;
  badge: string;
  rating: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
};

export const games: Game[] = [
  {
    slug: "dragon-fortune",
    name: "Dragon Fortune",
    tag: "FEATURED",
    badge: "Popular",
    rating: "4.8",
    image: "/assets/game-dragon.webp",
    summary: "A mythical slot-style adventure with fiery bonus rounds.",
    description:
      "Dragon Fortune blends a mythical Eastern theme with fast, visual gameplay. Explore layered bonus rounds, escalating multipliers and a fiery presentation built for quick mobile sessions.",
    features: [
      "Fast rounds built for mobile sessions",
      "Layered bonus mechanics with escalating multipliers",
      "Crisp, high-contrast visuals optimized for small screens",
      "Simple rules — easy to pick up in under a minute",
    ],
  },
  {
    slug: "cricket-battle",
    name: "Cricket Battle",
    tag: "SPORTS",
    badge: "Trending",
    rating: "4.6",
    image: "/assets/game-cricket.webp",
    summary: "A fast-paced sports title for cricket fans on the go.",
    description:
      "Cricket Battle turns match moments into quick interactive rounds. Built around timing and prediction, it's designed for players who want sports energy without long play sessions.",
    features: [
      "Quick-fire match-style rounds",
      "Timing and prediction based gameplay",
      "Leaderboard-style progress tracking",
      "Lightweight, optimized for low-end devices",
    ],
  },
  {
    slug: "aviator",
    name: "Aviator",
    tag: "ARCADE",
    badge: "Hot",
    rating: "4.7",
    image: "/assets/game-aviator.webp",
    summary: "A rising-multiplier arcade game about timing your exit.",
    description:
      "Aviator is a simple but tense arcade format: a multiplier climbs and players decide when to cash out before it's gone. Easy to understand, hard to master.",
    features: [
      "One-tap, intuitive gameplay",
      "Live rising multiplier visual",
      "Round history so you can track patterns",
      "Built for short, replayable sessions",
    ],
  },
  {
    slug: "color-prediction",
    name: "Color Prediction",
    tag: "CASUAL",
    badge: "Popular",
    rating: "4.5",
    image: "/assets/game-color.webp",
    summary: "A colorful, casual prediction game with instant rounds.",
    description:
      "Color Prediction is a bright, casual pick-and-wait format. Rounds resolve quickly, making it a popular pick for players who want a light, low-commitment casual game.",
    features: [
      "Instant round resolution",
      "Bright, minimal interface",
      "Simple prediction-based mechanic",
      "Great for short breaks between other games",
    ],
  },
  {
    slug: "mines",
    name: "Mines",
    tag: "ARCADE",
    badge: "New",
    rating: "4.4",
    image: "/assets/game-mines.webp",
    summary: "A grid-based risk game — clear tiles, avoid the mines.",
    description:
      "Mines challenges players to reveal tiles on a grid while avoiding hidden mines, with the potential payout climbing the further you go. A clean test of nerve and risk tolerance.",
    features: [
      "Adjustable risk/grid settings",
      "Clean, minimal grid interface",
      "Real-time payout tracking as you play",
      "Fast rounds, easy to restart",
    ],
  },
  {
    slug: "lucky-slots",
    name: "Lucky Slots",
    tag: "CASINO",
    badge: "Popular",
    rating: "4.6",
    image: "/assets/game-slots.webp",
    summary: "A classic reel-spinning slot experience, mobile-optimized.",
    description:
      "Lucky Slots brings the classic spinning-reel format to a clean mobile layout, with smooth animations and a straightforward paytable for players who want familiar casino-style fun.",
    features: [
      "Classic multi-reel layout",
      "Smooth, lightweight spin animations",
      "Clear, readable paytable",
      "Optimized for one-handed mobile play",
    ],
  },
];

export function getGame(slug: string) {
  return games.find((g) => g.slug === slug);
}
