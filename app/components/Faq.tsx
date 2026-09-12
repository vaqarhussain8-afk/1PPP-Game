"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { DEFAULT_FAQ_ITEMS, type FaqItem } from "../lib/faq";

export type { FaqItem };

export default function Faq({ items = DEFAULT_FAQ_ITEMS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.q}
              <Plus />
            </button>
            <p>{item.a}</p>
          </div>
        );
      })}
    </div>
  );
}
