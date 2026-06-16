"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "Who can apply?",
    a: "We accept residents regardless of their current progress and experience — students, researchers, and early-stage founders at UCSB.",
  },
  {
    q: "What is the acceptance rate?",
    a: "Each cohort accepts roughly 3% of applicants. We optimize for ambition, curiosity, and what you will contribute to the house.",
  },
  {
    q: "Where is Playa House?",
    a: "571 Ocean Meadows Lane — The Cove, a gated community in Goleta, minutes from UCSB and away from the distractions of Isla Vista.",
  },
  {
    q: "How do I get in touch?",
    a: "Email us at hello@liveplayahouse.com or reach out through our social channels below.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
          FAQ
        </h2>

        <div className="mt-8 divide-y divide-black/[0.06] border-y border-black/[0.06]">
          {faqItems.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-ink">{q}</span>
                  <span
                    className={`shrink-0 text-lg leading-none text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
