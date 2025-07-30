import React, { useState, useEffect } from "react";
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

import Header from "./components/layout/Header";
import HomePage from "./components/pages/Home";
import GenericPage from "./components/pages/GenericPage";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [featuresExpanded, setFeaturesExpanded] = useState(true);
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  const renderMainContent = () => {
    if (activeItem === "Home") {
      return <HomePage />;
    }
    return <GenericPage activeItem={activeItem} />;
  };

  return (
    <div
      style={{
        backgroundColor: "#343a40",
        color: "white",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        width: "100%",
      }}
    >
      <div style={{ display: "flex" }}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          featuresExpanded={featuresExpanded}
          setFeaturesExpanded={setFeaturesExpanded}
          projectsExpanded={projectsExpanded}
          setProjectsExpanded={setProjectsExpanded}
        />

        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            marginLeft: window.innerWidth >= 992 ? "256px" : "0",
            backgroundColor: "#343a40",
            // width: "100%",
            height: "100%",
          }}
        >
          <Header
            activeItem={activeItem}
            onToggleSidebar={() => setSidebarOpen(true)}
          />

          <main
            style={{
              flexGrow: 1,
              padding: "24px",
            }}
          >
            {renderMainContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
