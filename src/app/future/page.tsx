import { ApplyButton, ImagePlaceholder, LogoPlaceholder, SectionLabel } from "@/components/ui";

const COMPANIES = [
  {
    name: "Nobel Laureates",
    description: "Research & discovery at the frontier of science",
  },
  {
    name: "ChipAgents",
    description: "AI agents for semiconductor design",
  },
  {
    name: "Scop",
    description: "Building the next generation of tools",
  },
];

export default function FuturePage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>Future</SectionLabel>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          A small step toward the inevitable future for Goleta and UCSB on the
          map of tech and innovation.
        </h1>
      </header>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            For years UCSB has been labeled as a party school, yet some of the
            smartest people and most impactful companies are serving humanity in
            the dark.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {COMPANIES.map(({ name, description }) => (
              <div key={name} className="flex flex-col items-start gap-4">
                <LogoPlaceholder name={name} />
                <p className="text-xs leading-relaxed text-faint">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="max-w-3xl font-serif text-2xl leading-snug tracking-tight text-ink md:text-3xl">
            26,000 students a year from all over the world come here for random
            reasons. The majority do not stay. We want to create the force that
            allows the best to be surrounded by the best from day one.
          </p>

          <p className="mt-12 font-serif text-3xl tracking-tight md:text-4xl">
            For us that means the{" "}
            <span className="line-through-future">Playa House</span>{" "}
            <span className="text-ink">&ldquo;name&rdquo;</span>
          </p>
        </div>
      </section>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-sm">
            <ImagePlaceholder
              className="h-full w-full"
              label="Mini video — full vision (placeholder)"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-ink/20 backdrop-blur-sm">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <p className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
            Apply to be a house leader starting 27–28 school year.
          </p>
          <div className="mt-8">
            <ApplyButton>Apply for House Leader</ApplyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
