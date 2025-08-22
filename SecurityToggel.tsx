import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Power } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SecurityToggle = () => {
  const [isSecure, setIsSecure] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const toggleSecurity = async () => {
    setIsLoading(true);
    
    // Simulate security activation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSecure(!isSecure);
    setIsLoading(false);
    
    toast({
      title: isSecure ? "Security Deactivated" : "Security Activated",
      description: isSecure 
        ? "Your system is now unprotected" 
        : "Your system is now fully protected",
      variant: isSecure ? "destructive" : "default"
    });
  };

  return (
    <div className="security-card p-8 text-center space-y-6">
      <div className="flex justify-center">
        {isSecure ? (
          <ShieldCheck className="w-24 h-24 text-security-accent" />
        ) : (
          <Shield className="w-24 h-24 text-muted-foreground" />
        )}
      </div>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">
          Security Status: {isSecure ? "PROTECTED" : "INACTIVE"}
        </h2>
        <p className="text-muted-foreground">
          {isSecure 
            ? "Your system is fully protected and monitoring threats"
            : "Click below to activate comprehensive protection"
          }
        </p>
      </div>

      <div className="pt-4">
        <Button
          onClick={toggleSecurity}
          disabled={isLoading}
          variant={isSecure ? "destructive" : "security-accent"}
          size="xl"
          className="min-w-[200px]"
        >
          <Power className="mr-2 h-5 w-5" />
          {isLoading ? "Processing..." : (isSecure ? "Turn Off" : "Activate Security")}
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 text-sm">
        <div className="security-card p-4">
          <div className="text-security-primary font-semibold">Threats Blocked</div>
          <div className="text-2xl font-bold">{isSecure ? "1,247" : "0"}</div>
        </div>
        <div className="security-card p-4">
          <div className="text-security-primary font-semibold">Active Shields</div>
          <div className="text-2xl font-bold">{isSecure ? "7" : "0"}</div>
        </div>
        <div className="security-card p-4">
          <div className="text-security-primary font-semibold">Uptime</div>
          <div className="text-2xl font-bold">{isSecure ? "99.9%" : "0%"}</div>
        </div>
      </div>
    </div>
  );
};
