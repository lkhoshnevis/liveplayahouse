import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a
              href="mailto:hello@liveplayahouse.com"
              className="transition-colors hover:text-ink"
            >
              Contact
            </a>
            <Link href="/people" className="transition-colors hover:text-ink">
              People
            </Link>
            <Link href="/house" className="transition-colors hover:text-ink">
              House
            </Link>
            <Link href="/future" className="transition-colors hover:text-ink">
              Future
            </Link>
          </div>

          <div className="flex gap-6 text-sm text-muted">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-faint">
          © {new Date().getFullYear()} Playa House. UCSB, Goleta, CA.
        </p>
      </div>
    </footer>
  );
}
