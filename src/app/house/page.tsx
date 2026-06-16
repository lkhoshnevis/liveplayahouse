import { ApplyButton, ImagePlaceholder, SectionLabel } from "@/components/ui";
import { VisionForFuture } from "@/components/VisionForFuture";

const HOUSE_IMAGES = [
  "Exterior",
  "Living room",
  "Kitchen",
  "Workspace",
  "Bedroom",
  "Outdoor",
];

export default function HousePage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>House</SectionLabel>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          The nicest home in all of UCSB.
        </h1>
      </header>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
            <iframe
              title="Playa House location — The Cove, Goleta"
              src="https://maps.google.com/maps?q=571+Ocean+Meadows+Lane,+Goleta,+CA+93117&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 grayscale-[30%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="font-serif text-xl leading-relaxed tracking-tight text-ink md:text-2xl">
              Playa House lives at{" "}
              <span className="font-normal text-muted">The Cove</span>,{" "}
              <a
                href="https://maps.google.com/?q=571+Ocean+Meadows+Lane,+Goleta,+CA+93117"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-faint underline-offset-4 transition-colors hover:decoration-ink"
              >
                571 Ocean Meadows Lane
              </a>{" "}
              <span className="text-muted">
                (10 person · 5 bed · 5.5 bath)
              </span>
              , a gated and secluded area away from the distractions of Isla
              Vista.{" "}
              <a
                href="https://www.thecoveatgoleta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline decoration-faint underline-offset-4 transition-colors hover:decoration-ink"
              >
                More info → The Cove
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOUSE_IMAGES.map((label) => (
              <ImagePlaceholder
                key={label}
                className="aspect-[4/3] w-full"
                label={label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <VisionForFuture />
          <div className="mt-10">
            <ApplyButton />
          </div>
        </div>
      </section>
    </div>
  );
}
