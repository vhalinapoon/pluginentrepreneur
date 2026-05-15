const pillars = [
  {
    no: "01",
    verb: "Operationalise",
    title: "What's messy",
    description:
      "I get into the weeds, mapping how the business actually runs, where it leaks energy, and what's quietly costing you weekends.",
    points: [
      "Ops audits & process mapping",
      "Team rituals & operating cadence",
      "Hiring plans, roles & accountability",
      "Tooling & internal systems",
    ],
    icon: "ops",
  },
  {
    no: "02",
    verb: "Productise",
    title: "What's stuck",
    description:
      "I take ambitious-but-bespoke services and shape them into something repeatable, sellable, and scalable, without flattening the magic.",
    points: [
      "Service & offer design",
      "Pricing, packaging & positioning",
      "Sales motion & GTM playbooks",
      "Brand, narrative & launch",
    ],
    icon: "product",
  },
  {
    no: "03",
    verb: "Build the systems",
    title: "That fuel growth",
    description:
      "I plug in long enough to design, ship and embed the systems that turn momentum into compounding growth, and to train your team to run them without me.",
    points: [
      "Revenue & funnel architecture",
      "Community & retention engines",
      "Reporting, dashboards & rhythms",
      "Founder leverage & delegation",
    ],
    icon: "growth",
  },
];

export default function Services() {
  return (
    <section id="work" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32 border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted">
              What I do
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
              Three ways I plug in.
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted leading-relaxed">
            Most engagements are a blend of all three, sequenced to whatever
            is hurting most right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
          {pillars.map((p) => (
            <article
              key={p.no}
              className="group relative bg-card p-8 sm:p-10 transition-colors hover:bg-background"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-muted-2">
                  {p.no}
                </span>
                <PillarIcon kind={p.icon} />
              </div>

              <h3 className="mt-10 font-serif text-3xl sm:text-[2rem] leading-tight tracking-tight">
                {p.verb}{" "}
                <span className="italic text-accent">{p.title.toLowerCase()}</span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Engagement strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-sm">
          <EngageRow
            label="How I work"
            value="Fractional, embedded. Usually 1 to 3 days a week."
          />
          <EngageRow
            label="Engagement length"
            value="3-month sprint minimum. Most clients stay 6+ months."
          />
          <EngageRow
            label="Best fit"
            value="Founders post-revenue, scaling 1 → 10 with messy ops or stalled growth."
          />
        </div>
      </div>
    </section>
  );
}

function EngageRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-6">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-2">
        {label}
      </div>
      <div className="mt-2 text-foreground leading-relaxed">{value}</div>
    </div>
  );
}

function PillarIcon({ kind }: { kind: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7 text-foreground transition-colors group-hover:text-accent",
    "aria-hidden": true,
  };
  if (kind === "ops") {
    return (
      <svg {...common}>
        <path d="M3 7h12" />
        <path d="M3 12h18" />
        <path d="M3 17h9" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="15" cy="17" r="2" />
      </svg>
    );
  }
  if (kind === "product") {
    return (
      <svg {...common}>
        <path d="M3 7l9-4 9 4-9 4-9-4Z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 17l9 4 9-4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}
