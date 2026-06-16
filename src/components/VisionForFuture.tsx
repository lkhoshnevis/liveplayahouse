import Link from "next/link";

export function VisionForFuture() {
  return (
    <p className="max-w-3xl font-serif text-3xl leading-snug tracking-tight text-ink md:text-4xl">
      Our vision for the{" "}
      <Link href="/future" className="group inline-flex items-baseline gap-2.5">
        <span className="font-bold">future</span>
        <span className="inline-flex -rotate-2 items-center self-center rounded-sm bg-ink px-2.5 py-1 font-sans text-[11px] font-bold tracking-wide text-cream transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
          click here
        </span>
      </Link>
    </p>
  );
}
