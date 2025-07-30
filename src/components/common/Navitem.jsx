// components/common/NavItem.jsx

import React from "react";

const NavItem = ({ item, isActive, onClick }) => {
  //   const NAV_ITEMS = {
  //     main: [
  //       { name: "Home", icon: Home },
  //       { name: "Dashboard", icon: BarChart3 },
  //       { name: "Project", icon: FolderOpen },
  //       { name: "My Task", icon: CheckSquare },
  //       { name: "Members", icon: Users },
  //       { name: "Goal", icon: Target },
  //       { name: "Setting", icon: Settings },
  //     ],
  //     features: [
  //       { name: "Stratascratch", icon: Shield },
  //       { name: "AlertSec", icon: AlertTriangle },
  //     ],
  //     projects: [
  //       { name: "Apvaision", icon: Shield },
  //       { name: "AlertSec", icon: AlertTriangle },
  //       { name: "Bomand Cold Dozz", icon: FolderOpen },
  //       { name: "Danycon", icon: Users },
  //     ],
  //   };

  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        marginBottom: "8px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: isActive ? "#0d6efd" : "transparent",
        color: isActive ? "white" : "#adb5bd",
        textAlign: "left",
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontSize: "14px",
        fontWeight: "500",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.target.style.backgroundColor = "#495057";
          e.target.style.color = "white";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#adb5bd";
        }
      }}
    >
      <Icon size={20} style={{ marginRight: "12px" }} />
      <span>{item.name}</span>
    </button>
  );
};

export default NavItem;
