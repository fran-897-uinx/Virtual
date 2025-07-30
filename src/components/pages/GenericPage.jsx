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
const GenericPage = ({ activeItem }) => (
  <div style={{ padding: "0 16px" }}>
    <div
      style={{
        backgroundColor: "#212529",
        color: "white",
        border: "1px solid #495057",
        borderRadius: "12px",
        padding: "48px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginBottom: "16px",
          margin: "0 0 16px 0",
        }}
      >
        {activeItem}
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "#6c757d",
          marginBottom: "40px",
          margin: "0 0 40px 0",
        }}
      >
        This is the {activeItem.toLowerCase()} section. Content for this section
        would be implemented here.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(108, 117, 125, 0.1)",
            border: "none",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <h5
            style={{
              color: "white",
              marginBottom: "12px",
              margin: "0 0 12px 0",
            }}
          >
            Quick Actions
          </h5>
          <p
            style={{
              color: "#6c757d",
              marginBottom: "24px",
              margin: "0 0 24px 0",
            }}
          >
            Manage your {activeItem.toLowerCase()} efficiently
          </p>
          <button
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Get Started
          </button>
        </div>
        <div
          style={{
            backgroundColor: "rgba(108, 117, 125, 0.1)",
            border: "none",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <h5
            style={{
              color: "white",
              marginBottom: "12px",
              margin: "0 0 12px 0",
            }}
          >
            Statistics
          </h5>
          <p
            style={{
              color: "#6c757d",
              marginBottom: "24px",
              margin: "0 0 24px 0",
            }}
          >
            View detailed analytics and reports
          </p>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#0d6efd",
              border: "1px solid #0d6efd",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default GenericPage;
