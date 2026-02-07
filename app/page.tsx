"use client";
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0a0a0a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <h1 style={{
        fontSize: "48px",
        marginBottom: "20px"
      }}>
        The Reservation
      </h1>

      <p style={{
        fontSize: "20px",
        maxWidth: "600px",
        marginBottom: "30px",
        color: "#ccc"
      }}>
        A creator agency built on consistency, accountability, and protecting your peace.
        We help creators grow their TikTok Live presence with real structure and support.
      </p>

      <button
        onClick={() => alert("Application form coming soon")}
        style={{
          backgroundColor: "#2563eb",
          border: "none",
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Apply to Join
      </button>

      <p style={{
        marginTop: "40px",
        fontSize: "14px",
        color: "#666"
      }}>
        © 2026 The Reservation
      </p>

    </main>
  );
}
