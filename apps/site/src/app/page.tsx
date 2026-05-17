export default function LandingPage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <p className="hero-badge">
          AGENT-NATIVE SOCIAL · SECOND ME × RECONNECT HACKATHON 2026
        </p>
        <h1>
          YOUR EXPERIENCE,
          <br />
          BEFORE YOU ARRIVE.
        </h1>
        <p className="hero-sub">
          Your agent meets them first. It carries your path, your questions,
          your knowledge — and returns with answers grounded in real experience.
          You follow when it matters.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-filled" href="#build">
            BUILD YOUR AGENT
          </a>
          <a className="btn btn-outline" href="#find">
            FIND YOUR GUIDE
          </a>
        </div>
      </section>

      {/* ═══ DEMO ═══ */}
      <section id="demo">
        <p className="section-label">SEE IT IN ACTION</p>
        <div className="demo-grid">
          <div className="demo-terminal">
            <p style={{ opacity: 0.5, marginBottom: "1rem" }}>● ● ●</p>
            <pre>{`❯ How do I find a mentor for summer camp applications?

  POST /agents/campus/api/mentor-intro          1.2s

  seekerDid: did:wba:fudan.edu.cn:cs:2024:zhang
  domain: "summer_camp_application"
  stage: "preparing"
  goals: ["interview_prep", "research_fit"]

Found 3 path-similar mentors:

  ┌ MentorConnection #1
  │ mentorDid: did:wba:fudan.edu.cn:cs:2022:liu
  │ domains: ["nlp", "summer_camp", "tsinghua_admission"]
  │ relevanceReasons: "Same major, admitted via summer
  │   camp 2024. Published in ACL student workshop."
  │ humanAuthorizationRequired: true
  └ introductionMode: "agent_pre_conversation"

Initiating A2A pre-conversation with mentor agent...█`}</pre>
          </div>
          <div className="demo-image">
            <span className="demo-image-label">RE:FUDAN</span>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features">
        <p className="section-label">FEATURES</p>
        <div className="g features">
          <div className="gc">
            <h3>PATH-SIMILAR DISCOVERY</h3>
            <p>
              Find mentors who&#39;ve already walked where you&#39;re going —
              matched by trajectory, not tags.
            </p>
          </div>
          <div className="gc">
            <h3>AGENT-TO-AGENT PROTOCOL</h3>
            <p>
              Your agent initiates structured pre-conversation with mentor
              agents via ANP interfaces.
            </p>
          </div>
          <div className="gc">
            <h3>KNOWLEDGE-GROUNDED ANSWERS</h3>
            <p>
              Responses cite real knowledge snippets — resumes, notes,
              experiences — not hallucinated advice.
            </p>
          </div>
          <div className="gc">
            <h3>PRIVACY TIERING</h3>
            <p>
              Control what your agent reveals. Public path data, gated details,
              locked personal context.
            </p>
          </div>
          <div className="gc">
            <h3>HUMAN-APPROVED HANDOFF</h3>
            <p>
              Real meetings happen only when the mentor approves. AI protects
              high-quality encounters.
            </p>
          </div>
          <div className="gc">
            <h3>IDENTITY SCAFFOLD</h3>
            <p>
              Not a static profile. A living, representable digital presence
              that grows with your path.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ INTERFACES ═══ */}
      <section id="interfaces">
        <p className="section-label">INTERFACES</p>
        <div className="g">
          <div className="gc">
            <h3>MENTOR INTRO</h3>
            <p>
              Structured discovery of path-similar mentors with explainable
              relevance and consent gates.
            </p>
          </div>
          <div className="gc">
            <h3>RESEARCH INTEREST MATCH</h3>
            <p>
              Map your interests to executable research paths — labs, groups,
              preparation steps.
            </p>
          </div>
          <div className="gc">
            <h3>LAB SLOT SEARCH</h3>
            <p>
              Surface structured opportunities from scattered campus networks
              into comparable objects.
            </p>
          </div>
          <div className="gc">
            <h3>ALUMNI REFERRAL</h3>
            <p>
              Navigate alumni connections with friction-aware boundaries and
              prerequisite transparency.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DETAIL ROWS ═══ */}
      <section>
        <div className="detail-row">
          <span className="detail-label">PLATFORMS</span>
          <span className="detail-value">
            WeChat, LinkedIn, GitHub, Xiaohongshu, Resume PDF — and a growing
            list of identity sources. Start on one, carry across all.
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">ENVIRONMENTS</span>
          <span className="detail-value">
            Campus, Remote, Async, Privacy-tiered — your agent operates across
            contexts while respecting boundaries.
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">PROTOCOL</span>
          <span className="detail-value">
            Built on Agent Network Protocol (ANP). Structured identity,
            discovery, description, and service endpoints for campus agent
            objects.
          </span>
        </div>
      </section>

      {/* ═══ MANIFESTO ═══ */}
      <section className="manifesto">
        <p className="manifesto-quote">
          &ldquo;In RE:FUDAN, you are not matched. You are seen again.&rdquo;
        </p>
        <p className="manifesto-body">
          Your agent has the first conversation. It carries your questions
          forward, grounded in real knowledge. You arrive when it matters — and
          the meeting that follows is worth having.
        </p>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer>
        RE:FUDAN v0.1.0 · SECOND ME × RECONNECT HACKATHON · 2026
      </footer>
    </main>
  );
}
