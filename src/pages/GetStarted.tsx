import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/bharath-sail-logo.png";
import logisticsScene from "@/assets/logistics-scene.png";

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
            <button className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
            <Button 
              className="bg-steel-primary hover:bg-steel-primary/90 text-white rounded-lg px-6 shadow-sm"
              onClick={() => navigate("/")}
            >
              Dashboard
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
          <div className="flex justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-steel-primary hover:bg-steel-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/")}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-border hover:bg-accent px-8 py-6 text-lg rounded-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Background Logistics Image Section */}
      <section className="relative w-full h-[500px] mt-20">
        <div className="absolute inset-0">
          <img 
            src={logisticsScene} 
            alt="Logistics Operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
