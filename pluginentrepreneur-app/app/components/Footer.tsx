export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-muted">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-background"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-2.5 w-2.5"
              aria-hidden
            >
              <path d="M9 2v4" />
              <path d="M15 2v4" />
              <path d="M6 6h12v6a6 6 0 0 1-12 0Z" />
              <path d="M12 18v4" />
            </svg>
          </span>
          <span className="font-serif text-base text-foreground">
            Plug<span className="italic text-accent">In</span>Entrepreneur
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:vhalinapoon@gmail.com"
            className="link-under hover:text-foreground"
          >
            vhalinapoon@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/vhp/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-under hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-xs text-muted-2">
          &copy; {year} Plug In Entrepreneur. Built to run.
        </div>
      </div>
    </footer>
  );
}
