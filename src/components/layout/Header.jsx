// components/layout/Header.jsx
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
const Header = ({ activeItem, onToggleSidebar }) => (
  <header
    style={{
      backgroundColor: "#212529",
      borderBottom: "1px solid #495057",
      padding: "16px 24px",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={onToggleSidebar}
          style={{
            display: window.innerWidth < 992 ? "block" : "none",
            marginRight: "16px",
            padding: "8px",
            border: "1px solid #495057",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "#adb5bd",
            cursor: "pointer",
          }}
        >
          <Menu size={24} />
        </button>
        <h2
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "600",
            color: "white",
          }}
        >
          {activeItem}
        </h2>
      </div>
      <button
        style={{
          padding: "8px",
          border: "1px solid #495057",
          borderRadius: "4px",
          backgroundColor: "transparent",
          color: "#adb5bd",
          cursor: "pointer",
        }}
      >
        <Settings size={20} />
      </button>
    </div>
  </header>
);

export default Header;
