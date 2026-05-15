const trustedBy = [
  "The Telegraph",
  "NatWest",
  "Samaritans",
  "European Institute of Innovation & Technology",
  "Hult Prize Foundation",
  "United Nations",
  "Bits x Bites",
  "Royal Danish Consulate",
];

export default function Recognition() {
  return (
    <section className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-28 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-muted">
              Recognition
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Named one of the{" "}
              <span className="italic text-accent">
                100 Female Entrepreneurs to Watch
              </span>{" "}
              by The Telegraph &amp; NatWest.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
              For building Alpaca Coffee from a Kickstarter campaign into a
              six-figure plastic-free brand, and exiting it.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-card p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-2 mb-6">
                Trusted by · worked with
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-4">
                {trustedBy.map((name) => (
                  <li
                    key={name}
                    className="font-serif text-lg sm:text-xl leading-snug tracking-tight border-b border-line pb-3"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 -mx-6 sm:-mx-10 overflow-hidden">
          <div className="flex w-max marquee-track">
            {[...trustedBy, ...trustedBy].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-10 px-10"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground/80">
                  {name}
                </span>
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
