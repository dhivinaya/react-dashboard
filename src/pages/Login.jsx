import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        backgroundColor: "#dbeafe", // lighter blue
      }}
    >
      <div
        style={{
          width: "300px",
          backgroundColor: "#f3e8ff", // soft lilac
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          color: "#1f2937",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e0e7ff",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
          alt="Login"
          style={{
            width: "48px",
            height: "48px",
            marginBottom: "8px",
          }}
        />
        <h2
          style={{
            margin: "8px 0 16px",
            fontSize: "20px",
            fontWeight: "600",
            color: "#4c1d95",
          }}
        >
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "80%",
              padding: "8px",
              margin: "6px 0",
              border: "1px solid #cbd5e1",
              borderRadius: "6px",
              fontSize: "13px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: "80%",
              padding: "8px",
              margin: "6px 0",
              border: "1px solid #cbd5e1",
              borderRadius: "6px",
              fontSize: "13px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "12px",
              backgroundColor: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#4f46e5")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#6366f1")
            }
          >
            Login →
          </button>
        </form>

        <p
          style={{
            fontSize: "12px",
            marginTop: "12px",
            color: "#475569",
          }}
        >
          Don’t have an account?{" "}
          <span
            style={{
              color: "#6366f1",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
