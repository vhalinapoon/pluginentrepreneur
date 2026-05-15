import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Operator card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative rounded-3xl border border-line bg-card p-8 sm:p-10 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_30px_60px_-30px_rgba(26,22,18,0.2)]">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  <span>Operator card</span>
                  <span>No. 001</span>
                </div>

                <div className="mt-8 flex items-end gap-5">
                  <div className="relative">
                    <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-foreground">
                      <Image
                        src="/victoria-headshot.jpg"
                        alt="Victoria, headshot"
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <span
                      aria-hidden
                      className="absolute -right-1.5 -bottom-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-background ring-2 ring-card"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M9 2v4" />
                        <path d="M15 2v4" />
                        <path d="M6 6h12v6a6 6 0 0 1-12 0Z" />
                        <path d="M12 18v4" />
                      </svg>
                    </span>
                  </div>
                  <div className="pb-1">
                    <div className="font-serif text-2xl leading-none tracking-tight">
                      Victoria
                    </div>
                    <div className="mt-1.5 text-sm text-muted">
                      Plug In Entrepreneur
                    </div>
                  </div>
                </div>

                <dl className="mt-10 space-y-4 text-sm">
                  <Row label="Role">
                    Fractional operator
                  </Row>
                  <Row label="Specialty">
                    Operations, GTM, productisation
                  </Row>
                  <Row label="Stage">
                    Pre-seed → Series A scaling
                  </Row>
                  <Row label="Based">
                    Brighton & London · Working globally
                  </Row>
                  <Row label="Status">
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      Open to new plug-ins
                    </span>
                  </Row>
                </dl>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Operator",
                    "Builder",
                    "Founder",
                    "Connector",
                    "Systems thinker",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-muted">
              About
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Long story short, I&rsquo;m a builder who plugs in to{" "}
              <span className="italic text-accent">make things run.</span>
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted max-w-2xl">
              <p>
                I&rsquo;ve spent the last decade building from zero, across
                consumer brands, accelerators, investment programmes and
                non-profits. I started without a business background, sold a
                company before I turned thirty, and learned that I love the
                messy middle most of all.
              </p>
              <p>
                The bit between an ambitious vision and the systems that make
                it real. The bit that&rsquo;s usually held together by founders
                running on fumes. That&rsquo;s where I show up.
              </p>
              <p>
                I work as a <span className="text-foreground">fractional operator</span>{" "}
                with scaling companies who are stuck in the gap between
                strategy and execution. I write the playbook, build the rituals,
                productise the service, untangle the ops, then I stay plugged
                in long enough to make sure it sticks.
              </p>
            </div>

            {/* Pull quote */}
            <figure className="mt-14 border-l-2 border-accent pl-6 sm:pl-8 max-w-2xl">
              <blockquote className="font-serif text-2xl sm:text-3xl leading-snug tracking-tight italic">
                &ldquo;If it&rsquo;s messy, stuck, or held together with
                duct-tape, that&rsquo;s exactly where I want to be.&rdquo;
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
      <dt className="col-span-1 text-xs uppercase tracking-[0.18em] text-muted-2">
        {label}
      </dt>
      <dd className="col-span-2 text-foreground">{children}</dd>
    </div>
  );
}
