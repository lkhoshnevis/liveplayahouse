"use client";

import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ApplyButton, ImagePlaceholder, LogoPlaceholder, SectionLabel } from "./ui";
import { VisionForFuture } from "./VisionForFuture";
import { FaqAccordion } from "./FaqAccordion";

const ROLES = [
  "students",
  "engineers",
  "researchers",
  "founders",
  "inventors",
  "builders",
] as const;

const BELIEFS = [
  {
    number: 1,
    text: "History has shown over and over again that dense groups of talent always lead to outsized outcomes.",
    leftLabel: "Group photo 1",
    rightLabel: "Group photo 2",
  },
  {
    number: 2,
    text: "Visionary ideas are insanely hard to pursue — being surrounded by likeminded people makes it a little less hard.",
    leftLabel: "Group photo 3",
    rightLabel: "Group photo 4",
  },
  {
    number: 3,
    text: "Young people are shaped more by their surroundings than older people, so there is no better time to find inspiring peers than now.",
    leftLabel: "Group photo 5",
    rightLabel: "Group photo 6",
  },
] as const;

const FUNDERS = ["Funder 1", "Funder 2", "Funder 3", "Funder 4"];

const ROLE_INTERVAL_MS = 2200;
/** Total scroll height for the pinned hero + beliefs sequence */
const SCROLL_VH = 700;

export function HomeScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRole, setActiveRole] = useState(0);
  const [phase, setPhase] = useState<"hero" | "belief-intro" | "belief">("hero");
  const [activeBelief, setActiveBelief] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.18) {
      setPhase("hero");
      setActiveBelief(-1);
    } else if (v < 0.28) {
      setPhase("belief-intro");
      setActiveBelief(-1);
    } else {
      setPhase("belief");
      const beliefProgress = (v - 0.28) / 0.62;
      const idx = Math.min(
        BELIEFS.length - 1,
        Math.floor(beliefProgress * BELIEFS.length)
      );
      setActiveBelief(idx);
    }
  });

  // Auto-rotate the hero role word
  useEffect(() => {
    if (phase !== "hero") return;
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % ROLES.length);
    }, ROLE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [phase]);

  return (
    <>
      {/* Scroll-driven hero + beliefs */}
      <div ref={containerRef} style={{ height: `${SCROLL_VH}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* Side images — cut in during belief phase */}
          <AnimatePresence mode="sync">
            {phase === "belief" && activeBelief >= 0 && (
              <>
                <motion.div
                  key={`left-${activeBelief}`}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-4 top-1/2 hidden w-[18vw] max-w-[220px] -translate-y-1/2 md:block lg:left-10 lg:max-w-[260px]"
                >
                  <ImagePlaceholder
                    className="aspect-[3/4] w-full"
                    label={BELIEFS[activeBelief].leftLabel}
                  />
                </motion.div>
                <motion.div
                  key={`right-${activeBelief}`}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-4 top-1/2 hidden w-[18vw] max-w-[220px] -translate-y-1/2 md:block lg:right-10 lg:max-w-[260px]"
                >
                  <ImagePlaceholder
                    className="aspect-[3/4] w-full"
                    label={BELIEFS[activeBelief].rightLabel}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Hero copy — exits to the left on scroll, no fade */}
          <AnimatePresence>
            {phase === "hero" && (
              <motion.div
                key="hero"
                initial={{ x: 0 }}
                exit={{ x: "-110%" }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="relative z-10 mx-auto max-w-4xl px-6 text-center"
              >
                <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.35em] text-faint/80">
                  Playa House
                </p>

                <h1 className="font-serif text-balance text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.15] tracking-tight text-ink">
                  UCSB&apos;s home for the most ambitious{" "}
                  <span className="relative inline-block min-w-[11ch] text-center align-baseline">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={ROLES[activeRole]}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block font-semibold"
                      >
                        {ROLES[activeRole]}
                      </motion.span>
                    </AnimatePresence>
                  </span>{" "}
                  to accelerate and change the world.
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* "Our Belief" — brief intro moment only, not a persistent background */}
          <AnimatePresence>
            {phase === "belief-intro" && (
              <motion.div
                key="belief-intro"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
              >
                <SectionLabel>Our Belief</SectionLabel>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Belief statements */}
          <AnimatePresence mode="wait">
            {phase === "belief" && activeBelief >= 0 && (
              <motion.div
                key={activeBelief}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-1/2 z-10 mx-auto max-w-2xl -translate-y-1/2 px-6 text-center md:max-w-3xl"
              >
                <span className="font-serif text-5xl font-semibold text-ink md:text-6xl">
                  {BELIEFS[activeBelief].number}.
                </span>
                <p className="mt-4 font-serif text-balance text-xl leading-snug tracking-tight text-ink md:text-2xl lg:text-[1.75rem]">
                  {BELIEFS[activeBelief].text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Post-scroll sections */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:px-10">
        <SectionLabel>Not just community…</SectionLabel>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">
          We help you access capital at the earliest stages.
        </h2>

        <p className="mt-12 text-sm text-muted">Our previous funders</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {FUNDERS.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-32 md:px-10">
          <VisionForFuture />

          <div className="mt-20 border-t border-black/[0.06] pt-16">
            <p className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
              It&apos;s never too early to apply.
            </p>
            <p className="mt-4 max-w-lg text-muted">
              We accept residents regardless of their current progress and
              experience.
            </p>
            <div className="mt-8">
              <ApplyButton />
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  );
}
