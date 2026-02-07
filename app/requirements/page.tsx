export default function RequirementsPage() {
  const APPLY_URL = "https://www.tiktok.com/t/ZMkXPvyy2/";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.08), transparent 60%), #0a0a0a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(10,10,10,0.75)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "14px 18px", display: "flex", justifyContent: "space-between" }}>
          <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: 800 }}>← Back</a>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none", fontWeight: 700 }}
          >
            Apply
          </a>
        </div>
      </div>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "44px 18px" }}>
        <h1 style={{ fontSize: 42, margin: "0 0 10px" }}>Requirements</h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginTop: 0 }}>
          These requirements help keep our culture fair, supportive, and consistent.
          (You can edit these anytime.)
        </p>

        <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
          <Card title="1) Respect + Safety" items={[
            "No harassment, bullying, or constant drama.",
            "Protect the vibe. Be coachable and respectful.",
          ]} />

          <Card title="2) Consistency" items={[
            "Show up regularly (a schedule you can realistically maintain).",
            "Communicate if life happens — we work with you when you communicate.",
          ]} />

          <Card title="3) Accountability" items={[
            "Follow agency rules and team processes.",
            "If you commit to a battle/event, show up or give notice.",
          ]} />

          <Card title="4) Team Participation" items={[
            "Support team pushes when you can (likes, shares, presence).",
            "No pressure to spend money. Support can be time + energy.",
          ]} />

          <Card title="5) Recruiting (if applicable)" items={[
            "Recruit honestly — no false promises.",
            "Focus on bringing in creators that fit the culture.",
          ]} />
        </div>

        <div style={{ marginTop: 18, color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
          Not affiliated with TikTok. Requirements are subject to change as we grow.
        </div>
      </section>
    </main>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 16 }}>
      <div style={{ fontWeight: 900, marginBottom: 8 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.78)", fontSize: 14 }}>
        {items.map((t) => (
          <li key={t} style={{ marginBottom: 6 }}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
