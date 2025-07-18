import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ⭐️ Welcome Page
function Welcome() {
  const navigate = useNavigate();

  const backgroundImage =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80";

  const quote =
    "“The secret of getting ahead is getting started.” — Mark Twain";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(6px)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
            letterSpacing: "1px",
            color: "#fbbf24"
          }}
        >
          🚀 Welcome to Your Dashboard
        </h1>

        <p style={{ fontSize: "16px", marginBottom: "25px", lineHeight: "1.6" }}>
          Take control of your productivity, monitor your progress, and stay ahead.
        </p>

        <blockquote
          style={{
            fontStyle: "italic",
            fontSize: "15px",
            color: "#e0e7ff",
            marginBottom: "20px"
          }}
        >
          {quote}
        </blockquote>

        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "12px 30px",
            backgroundColor: "#3b82f6",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "15px",
            color: "white",
            cursor: "pointer",
            transition: "transform 0.3s"
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}

// 🔑 Login Page
function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const backgroundImage =
    "https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"; // Nice office workspace image

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        color: "#fff",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          textAlign: "center"
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
          alt="Login Icon"
          style={{
            width: "48px",
            height: "48px",
            marginBottom: "10px",
            filter: "invert(1)"
          }}
        />

        <h2 style={{ margin: "10px 0 5px", fontSize: "20px", fontWeight: "600" }}>
          Welcome Back
        </h2>

        <p style={{ fontSize: "12px", marginBottom: "20px", fontStyle: "italic", color: "#ddd" }}>
          “Productivity is never an accident.”
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "80%",
              padding: "10px",
              margin: "8px 0",
              borderRadius: "6px",
              border: "none"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: "80%",
              padding: "10px",
              margin: "8px 0",
              borderRadius: "6px",
              border: "none"
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "12px",
              margin: "8px 0",
              color: "#ccc"
            }}
          >
            <label>
              <input type="checkbox" style={{ marginRight: "5px" }} />
              Remember me
            </label>
            <a href="#" style={{ color: "#fbbf24", textDecoration: "underline" }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "12px",
             backgroundColor: "#93c5fd",  // soft blue

              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Login →
          </button>
        </form>

        <div style={{ marginTop: "20px", fontSize: "12px", color: "#ccc" }}>
          Or sign in with
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "10px"
          }}
        >
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: "#db4437",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "12px",
              cursor: "pointer"
            }}
          >
            Google
          </button>

          <button
            style={{
              padding: "6px 12px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "12px",
              cursor: "pointer"
            }}
          >
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}

// 📊 Dashboard
function Dashboard() {
  const navigate = useNavigate();
  const [liveUsers, setLiveUsers] = useState(120);
  const [revenueGrowth, setRevenueGrowth] = useState(5);
  const [pendingTasks, setPendingTasks] = useState(8);
  const [notifications, setNotifications] = useState(3);
  const [newSignups, setNewSignups] = useState(12);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const userInterval = setInterval(() => {
      setLiveUsers((prev) => prev + Math.floor(Math.random() * 5 - 2));
    }, 3000);

    const growthInterval = setInterval(() => {
      setRevenueGrowth((Math.random() * 10).toFixed(1));
    }, 5000);

    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(userInterval);
      clearInterval(growthInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Active Users",
        data: [100, 120, 150, 170, 160, 180, 200],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" } },
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const preview = document.getElementById("preview");
        preview.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc", // milder color
        padding: "20px",
        fontFamily: "Segoe UI",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#4f46e5",
          }}
        >
          Dashboard
        </h1>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "14px", color: "#4b5563" }}>
            🕒 {time.toLocaleTimeString()}
          </div>
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "5px",
              padding: "6px 12px",
              backgroundColor: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Metrics Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <MetricCard title="Live Users" value={liveUsers} color="#4f46e5" />
        <MetricCard
          title="Revenue Growth"
          value={`${revenueGrowth}%`}
          color="#10b981"
        />
        <MetricCard title="Pending Tasks" value={pendingTasks} color="#f59e0b" />
        <MetricCard title="System Status" value="🟢 Online" color="#10b981" />
        <MetricCard title="Notifications" value={notifications} color="#f43f5e" />
        <MetricCard title="New Signups" value={newSignups} color="#8b5cf6" />
      </section>

      {/* User Activity Chart */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#6d28d9",
            marginBottom: "10px",
          }}
        >
          📊 User Activity
        </h2>
        <Line data={chartData} options={chartOptions} />
      </section>

      {/* Recent Activity */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#6d28d9",
            marginBottom: "10px",
          }}
        >
          💬 Recent Activity
        </h2>
        <ul style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>
          <li>✅ User John completed a task</li>
          <li>📥 New file uploaded by admin</li>
          <li>📝 3 new support tickets created</li>
          <li>👥 2 new users signed up</li>
        </ul>
      </section>

      {/* Profile Picture Upload */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#6d28d9",
            marginBottom: "10px",
          }}
        >
          📁 Upload Profile Picture
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            marginBottom: "10px",
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />

        <div style={{ marginTop: "10px" }}>
          <img
            id="preview"
            src="https://via.placeholder.com/100"
            alt="Profile Preview"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ddd",
            }}
          />
        </div>
      </section>
    </div>
  );
}

function MetricCard({ title, value, color }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "12px",
        borderRadius: "6px",
        textAlign: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ fontSize: "13px", color: "#6b7280" }}>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold", color }}>{value}</p>
    </div>
  );
}



// 🌐 App
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
