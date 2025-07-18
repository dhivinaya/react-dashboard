import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f0eaff, #d6e0ff)",
        color: "#333",
        fontFamily: "Segoe UI",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "#4f46e5" }}>
        🌟 Welcome
      </h1>
      <p style={{ marginBottom: "20px", fontSize: "18px" }}>
        to your professional dashboard
      </p>
      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "12px 24px",
          backgroundColor: "#4f46e5",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Get Started →
      </button>
    </div>
  );
}
