import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-soft/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-72 right-1/3 h-[18rem] w-[18rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-7">
            <div className="rise rise-d1 mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
              <span className="inline-block h-px w-8 bg-muted-2" />
              <span>Fractional operator · Exited founder</span>
            </div>

            <h1 className="rise rise-d2 font-serif text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
              I&rsquo;m a{" "}
              <span className="italic text-accent">builder.</span>
              <br className="hidden sm:block" /> I plug into businesses
              <br className="hidden sm:block" /> to make them{" "}
              <em className="not-italic relative inline-block">
                run
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2 sm:h-3 text-accent"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 50 2, 150 12, 198 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
              .
            </h1>

            <div className="rise rise-d3 mt-10 max-w-2xl">
              <p className="text-lg sm:text-xl leading-relaxed text-muted">
                I work with scaling companies to{" "}
                <span className="text-foreground">
                  operationalise what&rsquo;s messy
                </span>
                ,{" "}
                <span className="text-foreground">
                  productise what&rsquo;s stuck
                </span>
                , and{" "}
                <span className="text-foreground">
                  build the systems that fuel growth.
                </span>
              </p>
            </div>

            <div className="rise rise-d4 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-accent"
              >
                <span>Let&rsquo;s build something</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#track-record"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                See the track record
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <div className="lg:col-span-5 mt-28 sm:mt-32 lg:mt-0">
            <PortraitPanel />
          </div>
        </div>

        {/* Stat strip */}
        <div className="rise rise-d5 mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line/80 border border-line rounded-2xl overflow-hidden">
          <Stat
            number="£100K+"
            label="D2C brand bootstrapped, built, and exited"
          />
          <Stat
            number="2,000+"
            label="Founder community built from zero"
          />
          <Stat
            number="100"
            label="Female Entrepreneurs to Watch · Telegraph & NatWest"
          />
        </div>
      </div>
    </section>
  );
}

function PortraitPanel() {
  return (
    <div className="rise rise-d3 relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-square rounded-[2rem] bg-accent overflow-hidden shadow-[0_30px_80px_-30px_rgba(185,74,44,0.45)]">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-[#8f3520]"
        />
        <div
          aria-hidden
          className="absolute -top-20 -left-20 h-[22rem] w-[22rem] rounded-full bg-accent-soft/40 blur-3xl"
        />

        <div className="absolute top-6 right-6 z-10 text-right text-xs uppercase tracking-[0.22em] text-background/70">
          <div>Hello,</div>
          <div className="mt-1.5 font-serif text-2xl sm:text-3xl normal-case tracking-tight text-background">
            I&rsquo;m Victoria.
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
        <div className="relative w-[105%] translate-x-2 translate-y-5 aspect-[878/1055]">
          <Image
            src="/victoria-cropped.png"
            alt="Victoria, Plug In Entrepreneur"
            fill
            priority
            unoptimized
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 90vw"
            className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(26,22,18,0.18)]"
          />
        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-background/70 backdrop-blur-sm p-6 sm:p-7">
      <div className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
        {number}
      </div>
      <div className="mt-2 text-xs sm:text-sm text-muted leading-snug">
        {label}
      </div>
    </div>
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
