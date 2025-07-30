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

const SectionHeader = ({ title, expanded, onToggle }) => (
  <button
    onClick={onToggle}
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px",
      marginBottom: "8px",
      border: "none",
      backgroundColor: "transparent",
      color: "#6c757d",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#6c757d";
    }}
  >
    <span>{title}</span>
    {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
  </button>
);

export default SectionHeader;
