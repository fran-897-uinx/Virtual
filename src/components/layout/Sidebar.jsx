// components/layout/Sidebar.jsx

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
const NAV_ITEMS = {
  main: [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: BarChart3 },
    { name: "Project", icon: FolderOpen },
    { name: "My Task", icon: CheckSquare },
    { name: "Members", icon: Users },
    { name: "Goal", icon: Target },
    { name: "Setting", icon: Settings },
  ],
  features: [
    { name: "Stratascratch", icon: Shield },
    { name: "AlertSec", icon: AlertTriangle },
  ],
  projects: [
    { name: "Apvaision", icon: Shield },
    { name: "AlertSec", icon: AlertTriangle },
    { name: "Bomand Cold Dozz", icon: FolderOpen },
    { name: "Danycon", icon: Users },
  ],
};
import NavItem from "../common/Navitem";
import SectionHeader from "../common/SectionHeader";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeItem,
  setActiveItem,
  featuresExpanded,
  setFeaturesExpanded,
  projectsExpanded,
  setProjectsExpanded,
}) => (
  <>
    <div
      style={{
        position: window.innerWidth < 992 ? "fixed" : "static",
        top: 0,
        left: 0,
        width: "256px",
        height: "100vh",
        backgroundColor: "#212529",
        borderRight: "1px solid #495057",
        transform:
          window.innerWidth < 992
            ? sidebarOpen
              ? "translateX(0)"
              : "translateX(-100%)"
            : "none",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1050,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          borderBottom: "1px solid #495057",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Shield style={{ color: "#0d6efd", marginRight: "12px" }} size={28} />
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            VIRTUAL_DUX
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          style={{
            display: window.innerWidth < 992 ? "block" : "none",
            padding: "4px",
            border: "1px solid #495057",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "#adb5bd",
            cursor: "pointer",
          }}
        >
          <X size={24} />
        </button>
      </div>

      <nav
        style={{
          padding: "16px",
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        {NAV_ITEMS.main.map((item) => (
          <NavItem
            key={item.name}
            item={item}
            isActive={activeItem === item.name}
            onClick={() => {
              setActiveItem(item.name);
              setSidebarOpen(false);
            }}
          />
        ))}

        <div style={{ marginTop: "24px" }}>
          <SectionHeader
            title="Features"
            expanded={featuresExpanded}
            onToggle={() => setFeaturesExpanded(!featuresExpanded)}
          />
          {featuresExpanded && (
            <div>
              {NAV_ITEMS.features.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeItem === item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    setSidebarOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: "16px" }}>
          <SectionHeader
            title="Projects"
            expanded={projectsExpanded}
            onToggle={() => setProjectsExpanded(!projectsExpanded)}
          />
          {projectsExpanded && (
            <div>
              {NAV_ITEMS.projects.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeItem === item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    setSidebarOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>

    {/* Mobile overlay */}
    {sidebarOpen && window.innerWidth < 992 && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1040,
        }}
        onClick={() => setSidebarOpen(false)}
      />
    )}
  </>
);

export default Sidebar;
