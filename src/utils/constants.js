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

// utils/constants.js
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
