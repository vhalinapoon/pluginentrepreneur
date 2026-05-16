export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32 border-t border-line">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-8 sm:p-14 md:p-20">
          {/* Decorative shapes */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-20 h-[22rem] w-[22rem] rounded-full bg-accent-soft/15 blur-3xl"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.22em] text-background/60">
                Contact
              </div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                Got something messy,
                <br />
                stuck, or about to{" "}
                <span className="italic text-accent-soft">break</span>?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">
                I take on a small handful of fractional engagements at a time.
                If we&rsquo;re a fit, I&rsquo;ll write back within 48 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:vhalinapoon@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-background text-foreground px-6 py-4 text-base font-medium transition-colors hover:bg-accent hover:text-background"
                >
                  <span>vhalinapoon@gmail.com</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vhp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-4 text-base font-medium text-background transition-colors hover:bg-background/10"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ul className="space-y-5 text-sm text-background/70">
                <ContactRow label="Best for" value="Founders post-revenue scaling 1 → 10" />
                <ContactRow label="Engagements" value="Fractional · 3 months minimum" />
                <ContactRow label="Capacity" value="2 new clients per quarter" />
                <ContactRow label="Based" value="Brighton & London · Working globally" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between gap-6 border-b border-background/10 pb-4">
      <span className="text-xs uppercase tracking-[0.18em] text-background/50">
        {label}
      </span>
      <span className="text-right text-background">{value}</span>
    </li>
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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.86 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v7.46h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H8.08V8z" />
    </svg>
  );
}
