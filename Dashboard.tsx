import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SecurityToggle } from "@/components/SecurityToggle";
import { Shield, LogOut, Settings, Activity, Users } from "lucide-react";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-security-primary" />
            <span className="text-xl font-bold">SecureGuard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Activity className="h-4 w-4" />
            </Button>
            <Button variant="ghost" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Security Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and control your system protection status
            </p>
          </div>

          {/* Security Toggle - Main Feature */}
          <div className="max-w-2xl mx-auto">
            <SecurityToggle />
          </div>

          {/* Additional Security Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="security-card p-6 space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-security-primary" />
                <h3 className="font-semibold">Firewall Status</h3>
              </div>
              <p className="text-2xl font-bold text-security-accent">Active</p>
              <p className="text-sm text-muted-foreground">All ports secured</p>
            </div>

            <div className="security-card p-6 space-y-3">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-security-primary" />
                <h3 className="font-semibold">Network Scans</h3>
              </div>
              <p className="text-2xl font-bold text-security-accent">247</p>
              <p className="text-sm text-muted-foreground">Today's activity</p>
            </div>

            <div className="security-card p-6 space-y-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-security-primary" />
                <h3 className="font-semibold">Connected Devices</h3>
              </div>
              <p className="text-2xl font-bold text-security-accent">7</p>
              <p className="text-sm text-muted-foreground">All protected</p>
            </div>

            <div className="security-card p-6 space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-security-primary" />
                <h3 className="font-semibold">Security Score</h3>
              </div>
              <p className="text-2xl font-bold text-security-accent">98/100</p>
              <p className="text-sm text-muted-foreground">Excellent protection</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
