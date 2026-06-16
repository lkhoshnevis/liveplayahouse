import Link from "next/link";
import { ApplyButton, LogoPlaceholder, SectionLabel } from "@/components/ui";

type Badge = { label: string; type: "school" | "company" | "role" };

type Person = {
  name: string;
  title: string;
  company?: string;
  logo?: string;
  badges?: Badge[];
};

const alumni: Person[] = [
  {
    name: "Arthur",
    title: "Full-time founder",
    company: "Narion Tech",
    logo: "Narion Tech",
  },
  {
    name: "Nag",
    title: "Full-time founder",
    company: "CAFX",
    logo: "CAFX",
  },
  {
    name: "Bryan",
    title: "Ex-YC founder",
    company: "Shofo AI",
    logo: "Shofo AI",
  },
];

const cohort02: Person[] = [
  {
    name: "Leon",
    title: "Founder",
    company: "Playa House",
    logo: "Playa House",
  },
];

const supporters: Person[] = [
  {
    name: "Nader Khalil",
    title: "UCSB alum · Brev founder · NVIDIA director",
    badges: [
      { label: "UCSB", type: "school" },
      { label: "Brev", type: "company" },
      { label: "NVIDIA", type: "company" },
    ],
  },
  {
    name: "Nick Linck",
    title: "Live the Residency founder",
    badges: [
      { label: "Live the Residency", type: "company" },
    ],
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group flex flex-col gap-4 border-t border-black/[0.06] py-8 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-serif text-xl tracking-tight text-ink">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{person.title}</p>
        {person.badges && (
          <div className="mt-3 flex flex-wrap gap-2">
            {person.badges.map((badge) => (
              <span key={badge.label} className="badge">
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
      {person.logo && <LogoPlaceholder name={person.logo} />}
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>People</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
          The network behind Playa House
        </h1>
      </header>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-2xl tracking-tight text-ink">
              Cohort
            </h2>
            <p className="text-sm text-muted">3% acceptance each batch</p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className="font-serif text-2xl tracking-tight text-ink">
            Alumni
          </h2>
          <div className="mt-4">
            {alumni.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className="font-serif text-2xl tracking-tight text-ink">
            Cohort 02 — 2026–27
          </h2>
          <div className="mt-4">
            {cohort02.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className="font-serif text-2xl tracking-tight text-ink">
            Supporters
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            People who have been an integral part of our network.
          </p>
          <div className="mt-8">
            {supporters.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <ApplyButton />
        </div>
      </section>
    </div>
  );
}
