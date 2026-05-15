import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "What I do" },
  { href: "#track-record", label: "Track record" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-line/60">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Plug In Entrepreneur, home"
          >
            <span
              aria-hidden
              className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-6"
            >
              <PlugMark className="h-3.5 w-3.5" />
            </span>
            <span className="font-serif text-[1.15rem] leading-none tracking-tight">
              Plug<span className="italic text-accent">In</span>Entrepreneur
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-under hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-accent"
          >
            <span>Plug me in</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function PlugMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M6 6h12v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6V6Z" />
      <path d="M12 18v4" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}
