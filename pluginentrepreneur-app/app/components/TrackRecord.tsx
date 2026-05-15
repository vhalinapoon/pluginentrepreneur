type Role = {
  period: string;
  org: string;
  role: string;
  category: "Founder" | "Operator" | "Programmes" | "Strategy";
  description: string;
  highlights?: string[];
};

const roles: Role[] = [
  {
    period: "Now",
    org: "The Fundraising Accelerator",
    role: "Co-founder",
    category: "Founder",
    description:
      "Co-founded with a 20-year investor. Built the brand, the website, the marketing engine and the operational backbone from scratch.",
    highlights: [
      "Converted first paying clients within months",
      "Drove 5-figures in revenue in the early days",
      "Built a community of 2,000+ founders",
    ],
  },
  {
    period: "Past",
    org: "Alpaca Coffee",
    role: "Founder & CEO (Exited)",
    category: "Founder",
    description:
      "Built a plastic-free D2C coffee brand from a Kickstarter campaign, bootstrapped to six figures in revenue with zero prior business experience. Exited the company.",
    highlights: [
      "Recognised by The Telegraph & NatWest as one of the '100 Female Entrepreneurs to Watch'",
      "Bootstrapped. No outside funding.",
    ],
  },
  {
    period: "Recent",
    org: "Samaritans",
    role: "Entrepreneur in Residence",
    category: "Strategy",
    description:
      "Developed new product concepts for mental health innovation, bringing founder-style speed and rigour to a 70-year-old institution.",
  },
  {
    period: "Recent",
    org: "European Institute of Innovation and Technology",
    role: "Interim Investment Officer",
    category: "Programmes",
    description:
      "Built a pipeline of 30+ startups for investment and accelerator programmes across Europe.",
  },
  {
    period: "Past",
    org: "Hult Prize Foundation · United Nations",
    role: "Programmes Lead, Shanghai",
    category: "Programmes",
    description:
      "Ran startup programmes connecting founders, students and the UN's Sustainable Development Goals across Greater China.",
  },
  {
    period: "Past",
    org: "Bits x Bites",
    role: "Accelerator Coordinator",
    category: "Programmes",
    description:
      "Coordinated China's first food-tech accelerator, sourcing and scaling early-stage food and ag-tech founders.",
  },
  {
    period: "Past",
    org: "Royal Danish Consulate",
    role: "Campaign Lead, Zero Waste Food",
    category: "Strategy",
    description:
      "Designed and executed a Zero Waste food campaign in partnership with the Royal Danish Consulate.",
  },
];

const categoryColor: Record<Role["category"], string> = {
  Founder: "bg-accent text-background",
  Operator: "bg-foreground text-background",
  Programmes: "bg-accent-soft text-foreground",
  Strategy: "bg-line text-foreground",
};

export default function TrackRecord() {
  return (
    <section id="track-record" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32 border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted">
              Track record
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
              I&rsquo;ve built, scaled and shipped across{" "}
              <span className="italic text-accent">consumer</span>,{" "}
              <span className="italic text-accent">venture</span> and{" "}
              <span className="italic text-accent">impact</span>.
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted leading-relaxed">
            A decade of operating chops, from bootstrapping a coffee brand
            to exit, to running pan-European investment pipelines.
          </p>
        </div>

        <ol className="relative">
          {/* spine */}
          <span
            aria-hidden
            className="absolute left-[7.5rem] top-2 bottom-2 hidden md:block w-px bg-line"
          />

          {roles.map((r, i) => (
            <li
              key={`${r.org}-${i}`}
              className="group relative grid grid-cols-1 md:grid-cols-[7.5rem_1fr] gap-x-8 gap-y-3 py-8 sm:py-10 border-t border-line first:border-t-0"
            >
              <div className="md:pt-2 flex md:block items-center gap-3">
                <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-muted-2">
                  {r.period}
                </span>
                <span
                  aria-hidden
                  className="hidden md:block absolute left-[7.5rem] top-12 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-background border border-foreground transition-colors group-hover:bg-accent group-hover:border-accent"
                />
              </div>

              <div className="md:pl-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] ${categoryColor[r.category]}`}
                  >
                    {r.category}
                  </span>
                  <span className="text-sm text-muted">{r.role}</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl sm:text-3xl leading-tight tracking-tight">
                  {r.org}
                </h3>

                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {r.description}
                </p>

                {r.highlights && (
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
                    {r.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent shrink-0"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
