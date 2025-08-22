import { Button } from "@/components/ui/button";
import { Shield, Lock, Zap, Eye, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/security-hero.jpg";

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-security-primary" />
            <span className="text-xl font-bold">SecureGuard</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm hover:text-security-primary transition-smooth">Features</a>
            <a href="#security" className="text-sm hover:text-security-primary transition-smooth">Security</a>
            <a href="#pricing" className="text-sm hover:text-security-primary transition-smooth">Pricing</a>
          </nav>
          <Button variant="security-outline" onClick={onGetStarted}>
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ultimate 
                <span className="block security-gradient bg-clip-text text-transparent">
                  Cyber Protection
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Advanced threat detection and real-time protection for your digital assets. 
                One click to activate comprehensive security across all your devices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="security" size="xl" onClick={onGetStarted}>
                Get Protected Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="security-outline" size="xl">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-security-accent" />
                <span>99.9% Threat Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-security-accent" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-security-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="security-card p-8">
              <img 
                src={heroImage} 
                alt="Security Dashboard"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Advanced Security Features</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive protection with military-grade encryption
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="security-card p-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full security-gradient">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Real-time Protection</h3>
            <p className="text-muted-foreground">
              Continuous monitoring and instant threat neutralization across all endpoints
            </p>
          </div>

          <div className="security-card p-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full accent-gradient">
                <Lock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Advanced Encryption</h3>
            <p className="text-muted-foreground">
              Military-grade AES-256 encryption protects your sensitive data
            </p>
          </div>

          <div className="security-card p-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full security-gradient">
                <Eye className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Smart Detection</h3>
            <p className="text-muted-foreground">
              AI-powered threat analysis identifies and blocks sophisticated attacks
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="security-card p-12 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Secure Your Digital Life?</h2>
            <p className="text-xl text-muted-foreground">
              Join over 1 million users who trust SecureGuard for their protection
            </p>
          </div>
          <Button variant="security" size="xl" onClick={onGetStarted}>
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SecureGuard. All rights reserved. Your security is our priority.</p>
        </div>
      </footer>
    </div>
  );
};