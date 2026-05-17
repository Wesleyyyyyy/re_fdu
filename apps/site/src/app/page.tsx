const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

const featureCards = [
  {
    label: "Discovery",
    title: "Path-similar discovery",
    body: "Find mentors who have already walked where you are going, matched by trajectory instead of loose tags or cold outreach.",
  },
  {
    label: "Protocol",
    title: "Agent-to-agent protocol",
    body: "Your agent opens the first exchange through structured campus interfaces, so the conversation starts with context instead of awkward asking.",
  },
  {
    label: "Evidence",
    title: "Knowledge-grounded answers",
    body: "Replies are grounded in resumes, notes, experience snippets, and explicit trace, not generic advice detached from real paths.",
  },
  {
    label: "Privacy",
    title: "Privacy tiering",
    body: "Public path data, gated details, and locked context can be revealed deliberately as the conversation becomes more trustworthy.",
  },
  {
    label: "Handoff",
    title: "Human-approved handoff",
    body: "The actual meeting only happens when the mentor approves it. AI protects attention instead of making access noisier.",
  },
  {
    label: "Identity",
    title: "Identity scaffold",
    body: "This is not a static profile page. It is a representable digital presence that keeps learning how to speak for your path.",
  },
] as const;

const interfaceCards = [
  {
    title: "Mentor intro",
    route: "/agents/campus/api/mentor-intro",
    body: "Explainable discovery of path-similar mentors with consent gates, relevance reasons, and clear human authorization boundaries.",
  },
  {
    title: "Research interest match",
    route: "/agents/campus/api/research-interest-match",
    body: "Translate curiosity into executable preparation paths, linking interests to labs, groups, timing, and proof of fit.",
  },
  {
    title: "Lab slot search",
    route: "/agents/campus/api/lab-slot-search",
    body: "Surface scattered campus opportunities into structured objects that can be compared, traced, and handed off responsibly.",
  },
  {
    title: "Alumni referral",
    route: "/agents/campus/api/alumni-referral",
    body: "Navigate alumni access with friction-aware expectations, prerequisites, and respect for the cost of warm introductions.",
  },
] as const;

const detailRows = [
  {
    label: "Platforms",
    value:
      "WeChat, LinkedIn, GitHub, Xiaohongshu, Resume PDF, and a growing set of identity sources. Start on one surface, carry across all.",
  },
  {
    label: "Environments",
    value:
      "Campus, remote, async, privacy-tiered. The agent keeps operating across contexts while staying legible about what it can and cannot reveal.",
  },
  {
    label: "Protocol",
    value:
      "Built around agent-readable identity, discovery, description, and service endpoints so that matching feels deliberate rather than improvised.",
  },
  {
    label: "Handoff",
    value:
      "Recommendation is only the first step. The system keeps the full A2A trace and still treats human approval as the final decision boundary.",
  },
] as const;

const terminalTranscript = `$ mentor_intro --domain summer_camp_application --stage preparing

POST /agents/campus/api/mentor-intro                    1.2s

seekerDid: did:wba:fudan.edu.cn:cs:2024:zhang
goals: ["interview_prep", "research_fit"]
privacyLevel: "tiered"

found 3 path-similar mentors

mentorDid: did:wba:fudan.edu.cn:cs:2022:liu
relevanceReasons:
- same major
- admitted through summer camp 2024
- ACL student workshop author

handoffPolicy: "human_approval_required"
nextStep: "agent_pre_conversation"`;

export default function LandingPage() {
  return (
    <main className="relative z-10">
      <section className="border-b border-border">
        <div className="section-shell grid gap-14 pb-16 pt-24 sm:pt-28 lg:grid-cols-[minmax(0,1.15fr)_minmax(24rem,0.85fr)] lg:gap-12 lg:pb-20 lg:pt-36">
          <div className="flex max-w-[54rem] flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">Agent-native social</span>
              <span className="rounded-full border border-hero-code-border bg-hero-code-bg px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-hero-code-text">
                Second Me × Reconnect Hackathon 2026
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-balance font-heading-expanded text-[clamp(3.9rem,13vw,10rem)] uppercase leading-[0.82] tracking-[0.02em] text-hero-title">
                Your experience,
                <br className="hidden sm:block" />
                before you arrive.
              </h1>
              <p className="text-balance max-w-[38rem] text-[clamp(1.05rem,1.55vw,1.28rem)] leading-[1.62] text-hero-subtitle">
                Your agent meets them first. It carries your path, your
                questions, and your knowledge forward, then comes back with
                answers grounded in real experience. You show up when it
                matters.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-btn border border-transparent bg-hero-cta-primary-bg px-5 py-3 font-heading-compressed text-[0.78rem] uppercase tracking-[0.18em] text-hero-cta-primary-text transition-colors hover:bg-brand-hover"
                href={`${appUrl}/onboarding`}
              >
                Build your agent
              </a>
              <a
                className="rounded-btn border border-hero-cta-secondary-border bg-hero-cta-secondary-bg px-5 py-3 font-heading-compressed text-[0.78rem] uppercase tracking-[0.18em] text-hero-cta-secondary-text transition-colors hover:bg-brand-soft-hover"
                href={`${appUrl}/matching`}
              >
                Find your guide
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-end">
            <div className="rounded-card border border-hero-code-border bg-hero-code-bg p-5 sm:p-6">
              <p className="eyebrow !text-hero-code-text">
                What changes in this model
              </p>
              <ul className="mt-5 grid gap-4 text-sm leading-relaxed text-hero-subtitle">
                <li className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-[0.35rem] h-2 w-2 rounded-full bg-brand-action" />
                  <span>
                    The first message is structured by an agent that already
                    understands your trajectory.
                  </span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-[0.35rem] h-2 w-2 rounded-full bg-brand-action" />
                  <span>
                    Match quality is explained through path similarity, not
                    vague social proximity.
                  </span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-[0.35rem] h-2 w-2 rounded-full bg-brand-action" />
                  <span>
                    Human approval remains the final gate before any real-world
                    handoff happens.
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["Explainable", "Privacy-tiered", "Human-approved"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-chip border border-border bg-surface px-3 py-3 text-center font-heading-compressed text-[0.68rem] uppercase tracking-[0.16em] text-secondary"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="border-b border-border">
        <div className="section-shell py-18 lg:py-24">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">See it in action</p>
              <h2 className="text-balance max-w-[32rem] font-heading-expanded text-[clamp(2.35rem,5vw,5rem)] uppercase leading-[0.86] tracking-[0.02em] text-primary">
                The useful moment happens before the human meeting.
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-relaxed text-muted">
              The landing page is not selling chat. It is selling a more
              prepared first encounter: context distilled, permission bounded,
              and trace preserved.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(21rem,0.92fr)]">
            <div className="arc-border overflow-hidden rounded-card border border-terminal-border bg-terminal-bg">
              <div className="flex items-center justify-between border-b border-terminal-border bg-terminal-header-bg px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-action" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                </div>
                <span className="font-heading-compressed text-[0.68rem] uppercase tracking-[0.2em] text-terminal-subtitle">
                  A2A trace preview
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[0.82rem] leading-[1.68] text-terminal-output">
                  <code>{terminalTranscript}</code>
                </pre>
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-card border border-border bg-surface">
              <img
                src="/assets/hero-bg.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid gap-3 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-heading-compressed text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                    RE:FUDAN signal field
                  </span>
                  <span className="rounded-full border border-border bg-accent-soft px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-secondary">
                    live mock
                  </span>
                </div>
                <p className="max-w-[24rem] font-display text-[1.08rem] leading-[1.45] text-primary">
                  “You are not matched at random. You are introduced with
                  memory, proof, and boundaries already in place.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-border bg-feature-section-bg">
        <div className="section-shell py-18 lg:py-24">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">Features</p>
              <h2 className="text-balance max-w-[30rem] font-heading-expanded text-[clamp(2.15rem,4.6vw,4.5rem)] uppercase leading-[0.9] tracking-[0.02em] text-feature-title">
                Product signals the landing must make immediately legible.
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-relaxed text-muted">
              The visual system should say “protocol-backed, editorial,
              high-trust” before a visitor reads the technical explanation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-card border border-feature-card-border bg-feature-card-bg p-6 transition-all duration-150 hover:border-feature-card-border-hover hover:bg-feature-card-bg-hover hover:shadow-card-hover dark:hover:shadow-card-dark-hover"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-chip bg-feature-tag-bg px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-feature-tag-text">
                    {feature.label}
                  </span>
                  <span className="font-heading-compressed text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 font-heading-expanded text-[1.55rem] uppercase leading-[0.95] tracking-[0.02em] text-feature-title">
                  {feature.title}
                </h3>
                <p className="text-[0.98rem] leading-[1.6] text-feature-body">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="interfaces" className="border-b border-border">
        <div className="section-shell py-18 lg:py-24">
          <div className="mb-10 space-y-4">
            <p className="eyebrow">Interfaces</p>
            <h2 className="text-balance max-w-[34rem] font-heading-expanded text-[clamp(2.15rem,4.8vw,4.4rem)] uppercase leading-[0.9] tracking-[0.02em] text-primary">
              Four interfaces anchor the first believable demo.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {interfaceCards.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-card border border-border bg-surface p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-heading-expanded text-[1.55rem] uppercase leading-[0.96] tracking-[0.02em] text-primary">
                    {item.title}
                  </h3>
                  <span className="rounded-chip border border-border bg-accent-soft px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-secondary">
                    {item.route}
                  </span>
                </div>
                <p className="max-w-[36rem] text-[0.98rem] leading-[1.62] text-body">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="section-shell py-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="dither h-3 w-3 text-secondary" />
            <p className="eyebrow">Operating rules</p>
          </div>
          <div className="grid">
            {detailRows.map((row, index) => (
              <div
                key={row.label}
                className={`detail-row ${index === detailRows.length - 1 ? "border-b-0" : ""}`}
              >
                <span className="font-heading-compressed text-[0.74rem] uppercase tracking-[0.2em] text-secondary">
                  {row.label}
                </span>
                <span className="max-w-[62ch] text-[0.98rem] leading-[1.65] text-body">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="section-shell grid gap-8 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:py-20">
          <p className="font-display text-[clamp(1.7rem,3vw,2.9rem)] leading-[1.2] text-primary">
            “In RE:FUDAN, you are not matched. You are seen again.”
          </p>
          <p className="max-w-[42rem] text-[1.02rem] leading-[1.72] text-body">
            Your agent has the first conversation. It carries your questions
            forward, grounded in real knowledge and real limits. You arrive
            when the room is ready for you, and the meeting that follows is
            finally worth having.
          </p>
        </div>
      </section>

      <footer className="bg-footer-bg text-footer-text">
        <div className="section-shell grid gap-6 border-t border-footer-border py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-chip bg-footer-badge-bg px-3 py-1 font-heading-compressed text-[0.68rem] uppercase tracking-[0.18em] text-footer-badge-text">
                Canonical landing runtime
              </span>
              <span className="rounded-chip bg-footer-badge-bg px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-footer-badge-text">
                apps/site
              </span>
            </div>
            <p className="max-w-[38rem] text-sm leading-relaxed text-footer-text">
              RE:FUDAN v0.1.0 builds a campus agent-native introduction layer:
              explainable match, privacy-aware trace, and human-approved
              handoff.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[0.74rem] uppercase tracking-[0.18em] text-footer-text-muted">
            <span>Second Me × Reconnect Hackathon 2026</span>
            <a
              className="font-heading-compressed text-footer-link transition-colors hover:text-footer-link-hover"
              href={`${appUrl}/onboarding`}
            >
              Enter app
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
