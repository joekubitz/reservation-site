"use client";

export default function Home() {
  const APPLY_URL = "https://www.tiktok.com/t/ZMkXPvyy2/";
  const DISCORD_URL = "PASTE_YOUR_DISCORD_INVITE_LINK_HERE"; // TODO: replace later

  const cardStyle: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    padding: 16,
    borderRadius: 16,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.08), transparent 60%), #0a0a0a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(10,10,10,0.75)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>The Reservation</div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="/requirements"
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "10px 14px",
                borderRadius: 10,
                fontSize: 14,
              }}
            >
              Requirements
            </a>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                background: "#2563eb",
                padding: "10px 14px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Apply to Join
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 18px 24px", textAlign: "left" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
          {["Community-first growth", "Safe + supportive", "Built for consistency"].map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                padding: "8px 12px",
                borderRadius: 999,
                fontSize: 12,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <h1 style={{ fontSize: 50, lineHeight: 1.05, margin: "0 0 12px" }}>
          Build your Live community — without doing it alone.
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: 860, margin: "0 0 18px" }}>
          The Reservation is a creator agency built around consistency, accountability, and protecting your peace.
          We help creators grow with structure, support, and a team that actually shows up.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              background: "#2563eb",
              padding: "14px 18px",
              borderRadius: 12,
              fontWeight: 800,
            }}
          >
            Apply to Join
          </a>

          <a
            href="/requirements"
            style={{
              textDecoration: "none",
              color: "white",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "14px 18px",
              borderRadius: 12,
              fontWeight: 700,
            }}
          >
            View Requirements
          </a>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "14px 18px",
              borderRadius: 12,
              fontWeight: 700,
              opacity: DISCORD_URL.includes("PASTE_") ? 0.6 : 1,
              pointerEvents: DISCORD_URL.includes("PASTE_") ? "none" : "auto",
            }}
            title={DISCORD_URL.includes("PASTE_") ? "Paste your Discord invite link in the code first" : ""}
          >
            Join our Discord
          </a>
        </div>

        <div style={{ ...cardStyle }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>Ask How to Join!</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
            Click <b>Apply to Join</b> and we’ll reach out. Want faster answers? Jump in Discord once the invite is added.
          </div>
        </div>
      </section>

      {/* What you get */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "8px 18px 10px" }}>
        <h2 style={{ fontSize: 26, marginBottom: 12 }}>What you get</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {[
            { title: "Clear expectations", desc: "Simple standards that keep it fair and drama-free." },
            { title: "Strategy + structure", desc: "Planning, templates, and weekly focus to grow on purpose." },
            { title: "Community support", desc: "Team pushes, battles, and real people who show up." },
            { title: "Promotion help", desc: "Learn how to recruit and build your Live the right way." },
          ].map((c) => (
            <div key={c.title} style={cardStyle}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>{c.title}</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12, color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
          Not affiliated with TikTok. Results vary by creator.
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "34px 18px 10px" }}>
        <h2 style={{ fontSize: 26, marginBottom: 12 }}>Creator Wins</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {[
            {
              quote:
                "I finally got consistent and stopped feeling like I was doing Live alone. The structure helped me show up and grow.",
              who: "Creator Name / @handle",
            },
            {
              quote:
                "The Reservation protected my peace. Clear rules, real support, and people who actually show up.",
              who: "Creator Name / @handle",
            },
            {
              quote:
                "I learned how to plan my Lives, talk about my goals, and build momentum without the chaos.",
              who: "Creator Name / @handle",
            },
          ].map((t, i) => (
            <div key={i} style={cardStyle}>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.78)" }}>“{t.quote}”</div>
              <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>— {t.who}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
          (Replace these with real testimonials when you’re ready.)
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "34px 18px 44px" }}>
        <h2 style={{ fontSize: 26, marginBottom: 12 }}>FAQ</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {[
            { q: "Do I need a big following?", a: "No. We care more about consistency and coachability than follower count." },
            { q: "Do you require spending money on gifts?", a: "No. We don’t pressure creators to spend money." },
            { q: "Where can I see requirements?", a: "Click Requirements in the top menu." },
            { q: "How do I apply?", a: "Click Apply to Join and fill out the application." },
          ].map((f) => (
            <div key={f.q} style={cardStyle}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>{f.q}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{f.a}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          © {new Date().getFullYear()} The Reservation
        </div>
      </section>
    </main>
  );
}
