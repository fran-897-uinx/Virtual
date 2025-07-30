import React, { useState } from "react";
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

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [featuresExpanded, setFeaturesExpanded] = useState(true);
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  const mainNavItems = [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: BarChart3 },
    { name: "Project", icon: FolderOpen },
    { name: "My Task", icon: CheckSquare },
    { name: "Members", icon: Users },
    { name: "Goal", icon: Target },
    { name: "Setting", icon: Settings },
  ];

  const featureItems = [
    { name: "Stratascratch", icon: Shield },
    { name: "AlertSec", icon: AlertTriangle },
  ];

  const projectItems = [
    { name: "Apvaision", icon: Shield },
    { name: "AlertSec", icon: AlertTriangle },
    { name: "Bomand Cold Dozz", icon: FolderOpen },
    { name: "Danycon", icon: Users },
  ];

  const NavItem = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 rounded-lg mx-2 mb-1 ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        <Icon size={20} className="mr-3" />
        <span className="font-medium">{item.name}</span>
      </button>
    );
  };

  const SectionHeader = ({ title, expanded, onToggle }) => (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 mx-2 mb-2"
    >
      <span className="text-sm font-semibold uppercase tracking-wider">
        {title}
      </span>
      {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    </button>
  );

  const renderMainContent = () => {
    if (activeItem === "Home") {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to VIRTUAL_DUX</h1>
            <p className="text-xl opacity-90">
              Your comprehensive project management solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Analytics</h3>
              </div>
              <p className="text-gray-400">
                Track your project performance and metrics
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                <CheckSquare className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Task Management
                </h3>
              </div>
              <p className="text-gray-400">
                Organize and prioritize your tasks efficiently
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Team Collaboration
                </h3>
              </div>
              <p className="text-gray-400">
                Work together seamlessly with your team
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                <span className="text-gray-300">
                  New project "Apvaision" created
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Task completed in AlertSec project
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Team member added to Danycon
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-4">{activeItem}</h1>
        <p className="text-gray-400 text-lg">
          This is the {activeItem.toLowerCase()} section. Content for this
          section would be implemented here.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Quick Actions
            </h3>
            <p className="text-gray-400 mb-4">
              Manage your {activeItem.toLowerCase()} efficiently
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Statistics
            </h3>
            <p className="text-gray-400 mb-4">
              View detailed analytics and reports
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <div className="flex items-center">
            <Shield className="text-blue-400 mr-3" size={28} />
            <span className="text-xl font-bold text-white">VIRTUAL_DUX</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          {mainNavItems.map((item) => (
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

          <div className="pt-4">
            <SectionHeader
              title="Features"
              expanded={featuresExpanded}
              onToggle={() => setFeaturesExpanded(!featuresExpanded)}
            />
            {featuresExpanded && (
              <div className="space-y-1">
                {featureItems.map((item) => (
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

          <div className="pt-4">
            <SectionHeader
              title="Projects"
              expanded={projectsExpanded}
              onToggle={() => setProjectsExpanded(!projectsExpanded)}
            />
            {projectsExpanded && (
              <div className="space-y-1">
                {projectItems.map((item) => (
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
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold text-white">
                {activeItem}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
