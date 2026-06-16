import Link from "next/link";

type ApplyButtonProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export function ApplyButton({
  href = "https://forms.gle/placeholder",
  children = "Apply",
  className = "",
}: ApplyButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-ink/85 hover:scale-[1.02] active:scale-[0.98]";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
      {children}
    </p>
  );
}

export function ImagePlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`img-placeholder relative overflow-hidden rounded-sm ${className}`}
      aria-hidden={!label}
      aria-label={label}
    >
      {label && (
        <span className="absolute inset-0 flex items-center justify-center text-xs text-muted/60">
          {label}
        </span>
      )}
    </div>
  );
}

export function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-12 w-28 items-center justify-center rounded border border-black/[0.06] bg-white px-3">
      <span className="text-[10px] font-medium uppercase tracking-wider text-faint">
        {name}
      </span>
    </div>
  );
}
