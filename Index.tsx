import { useState } from "react";
import { LandingPage } from "@/components/LandingPage";
import { LoginForm } from "@/components/LoginForm";
import { Dashboard } from "@/pages/Dashboard";

type AppState = "landing" | "login" | "dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<AppState>("landing");

  const handleGetStarted = () => {
    setCurrentView("login");
  };

  const handleLogin = () => {
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setCurrentView("landing");
  };

  switch (currentView) {
    case "login":
      return <LoginForm onLogin={handleLogin} />;
    case "dashboard":
      return <Dashboard onLogout={handleLogout} />;
    default:
      return <LandingPage onGetStarted={handleGetStarted} />;
  }
};

export default Index;
