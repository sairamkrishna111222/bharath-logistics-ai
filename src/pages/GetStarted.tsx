import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/bharath-sail-logo.png";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="border-b border-border/30 bg-background">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bharath Sail Logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-steel-primary">
              Bharath Sail
            </span>
          </div>
          <div className="flex items-center gap-8">
            <button className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Features
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Contact
            </button>
            <Button 
              className="relative bg-steel-primary hover:bg-steel-primary/90 text-white rounded-lg px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold overflow-hidden group"
              onClick={() => navigate("/")}
            >
              <span className="relative z-10">Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-steel-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-steel-primary/10 border border-steel-primary/20 text-steel-primary text-sm">
            India's Largest Steel Producer
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Meet, Bharath Sail
            <br />
            <span className="text-steel-primary">
              Integrated Steel Logistics
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive steel production and logistics management across 5 integrated steel plants, delivering excellence in quality and efficiency
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center gap-5 pt-6">
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-steel-primary to-steel-accent hover:from-steel-primary/90 hover:to-steel-accent/90 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 font-bold overflow-hidden group"
              onClick={() => navigate("/")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-steel-accent to-steel-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="relative border-2 border-steel-primary/30 hover:border-steel-primary/60 bg-background/50 backdrop-blur-sm hover:bg-steel-primary/5 px-10 py-7 text-lg rounded-2xl transition-all duration-300 hover:scale-105 font-bold overflow-hidden group shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 text-foreground group-hover:text-steel-primary transition-colors">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
