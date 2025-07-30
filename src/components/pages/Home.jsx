import React from "react";
import {
  Home,
  BarChart3,
  FolderOpen,
  CheckSquare,
  Users,
  Target,
  Settings,
  Shield,
  AlertTriangle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
// components/pages/Home.jsx
const HomePage = () => (
  <div style={{ padding: "0 16px" }}>
    <div style={{ marginBottom: "32px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)",
          color: "white",
          padding: "48px",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "16px",
            margin: 0,
          }}
        >
          Welcome to VIRTUAL_DUX
        </h1>
        <p
          style={{
            fontSize: "20px",
            opacity: 0.9,
            margin: 0,
          }}
        >
          Your comprehensive project management solution
        </p>
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          backgroundColor: "#212529",
          color: "white",
          border: "1px solid #495057",
          borderRadius: "12px",
          padding: "24px",
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <BarChart3
            style={{ color: "#17a2b8", marginRight: "12px" }}
            size={24}
          />
          <h5 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
            Analytics
          </h5>
        </div>
        <p style={{ color: "#6c757d", margin: 0 }}>
          Track your project performance and metrics
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#212529",
          color: "white",
          border: "1px solid #495057",
          borderRadius: "12px",
          padding: "24px",
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <CheckSquare
            style={{ color: "#ffc107", marginRight: "12px" }}
            size={24}
          />
          <h5 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
            Task Management
          </h5>
        </div>
        <p style={{ color: "#6c757d", margin: 0 }}>
          Organize and prioritize your tasks efficiently
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#212529",
          color: "white",
          border: "1px solid #495057",
          borderRadius: "12px",
          padding: "24px",
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Users style={{ color: "#28a745", marginRight: "12px" }} size={24} />
          <h5 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
            Team Collaboration
          </h5>
        </div>
        <p style={{ color: "#6c757d", margin: 0 }}>
          Work together seamlessly with your team
        </p>
      </div>
    </div>

    <div
      style={{
        backgroundColor: "#212529",
        color: "white",
        border: "1px solid #495057",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <h5
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "24px",
          margin: "0 0 24px 0",
        }}
      >
        Recent Activity
      </h5>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "rgba(108, 117, 125, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#17a2b8",
              borderRadius: "50%",
              marginRight: "16px",
            }}
          ></div>
          <span style={{ color: "white" }}>
            New project "Apvaision" created
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "rgba(108, 117, 125, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#28a745",
              borderRadius: "50%",
              marginRight: "16px",
            }}
          ></div>
          <span style={{ color: "white" }}>
            Task completed in AlertSec project
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "rgba(108, 117, 125, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#ffc107",
              borderRadius: "50%",
              marginRight: "16px",
            }}
          ></div>
          <span style={{ color: "white" }}>Team member added to Danycon</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
