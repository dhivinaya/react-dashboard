import { useState } from "react";

export default function Dashboard() {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = () => {
    alert("✅ Feedback submitted: " + feedback);
    setFeedback("");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#4f46e5",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px" }}>
          🌟 My Dashboard
        </div>
        <nav style={{ flex: 1 }}>
          <a href="#overview" style={linkStyle}>📊 Overview</a>
          <a href="#profile" style={linkStyle}>👤 Profile</a>
          <a href="#settings" style={linkStyle}>⚙️ Settings</a>
          <a href="#analytics" style={linkStyle}>📈 Analytics</a>
          <a href="#support" style={linkStyle}>❓ Help & Support</a>
        </nav>
        <footer style={{ fontSize: "12px", color: "#ddd", marginTop: "auto" }}>
          © 2025 MyCompany
        </footer>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#f9fafb" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#3730a3" }}>Dashboard</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User"
              style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #ccc" }}
            />
            <span style={{ fontSize: "14px", color: "#555" }}>Welcome, User</span>
          </div>
        </header>

        {/* Metrics */}
        <section style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
          {metricCard("Users", "1,240", "+4% this month", "#4338ca")}
          {metricCard("Revenue", "$12,400", "+12% this month", "#059669")}
          {metricCard("Growth", "+8%", "vs last month", "#7c3aed")}
        </section>

        {/* Activity */}
        <section style={cardSection}>
          <h2 style={sectionHeading}>Recent Activity</h2>
          <ul style={{ fontSize: "14px", lineHeight: "1.6" }}>
            <li>✅ John Doe signed up</li>
            <li>✅ Jane upgraded to premium</li>
            <li>✅ Settings updated</li>
            <li>✅ Report downloaded</li>
          </ul>
        </section>

        {/* Feedback */}
        <section style={cardSection}>
          <h2 style={sectionHeading}>Send Feedback</h2>
          <textarea
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "14px",
              marginBottom: "8px",
            }}
            rows="3"
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            onClick={handleFeedback}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4f46e5",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </section>
      </main>
    </div>
  );
}

// reusable helper for metric cards
function metricCard(title, value, note, color) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        flex: "1",
        minWidth: "200px",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ fontSize: "14px", color: "#6b7280" }}>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold", color }}>{value}</p>
      <p style={{ fontSize: "12px", color: "#16a34a" }}>{note}</p>
    </div>
  );
}

const linkStyle = {
  display: "block",
  padding: "8px 12px",
  marginBottom: "4px",
  textDecoration: "none",
  color: "#fff",
  borderRadius: "4px",
  transition: "background 0.3s",
  backgroundColor: "transparent",
  cursor: "pointer",
};

const cardSection = {
  backgroundColor: "#fff",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  marginBottom: "20px",
};

const sectionHeading = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#4f46e5",
  marginBottom: "10px",
};
