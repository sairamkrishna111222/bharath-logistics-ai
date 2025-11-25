import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Ship, TrendingUp, Gauge, MapPin, Package2, ArrowRight } from "lucide-react";
import logo from "@/assets/bharath-sail-logo.png";
import industrialBg from "@/assets/industrial-background.png";
import heroShip from "@/assets/hero-ship.jpg";
import portOps from "@/assets/port-operations.jpg";

const GetStarted = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Ship,
      title: "Real-Time Vessel Tracking",
      description: "Monitor your fleet's movement across Indian ports with live GPS tracking and ETA predictions"
    },
    {
      icon: MapPin,
      title: "Smart Route Optimization",
      description: "AI-powered route planning that reduces transit time and fuel consumption by up to 30%"
    },
    {
      icon: Package2,
      title: "Automated Cargo Management",
      description: "Seamless coordination between steel plants and ports with automated scheduling and load optimization"
    },
    {
      icon: Gauge,
      title: "Performance Analytics",
      description: "Real-time dashboards and insights to track efficiency, delays, and optimize operations"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${industrialBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <img src={logo} alt="Bharath Sail Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent">
                Bharath Sail
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hover-scale">
                Features
              </Button>
              <Button variant="ghost" className="hover-scale">
                Solutions
              </Button>
              <Button variant="ghost" className="hover-scale">
                Contact
              </Button>
              <Button 
                className="bg-gradient-to-r from-steel-primary to-steel-accent hover:opacity-90 transition-all hover-scale"
                onClick={() => navigate("/")}
              >
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-32 md:py-40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-steel-primary/10 border border-steel-primary/20 text-steel-primary text-sm font-medium backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-steel-primary animate-pulse" />
                Next-Generation Logistics Automation
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-steel-primary via-steel-accent to-steel-primary bg-clip-text text-transparent animate-gradient">
                  Steel Logistics
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Intelligent automation platform connecting 5 integrated steel plants with seamless port-to-plant logistics coordination
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-steel-primary to-steel-accent hover:opacity-90 transition-all text-lg px-10 py-7 group hover-scale shadow-glow"
                  onClick={() => navigate("/")}
                >
                  Access Platform
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-7 border-steel-primary/30 hover:bg-steel-primary/10 backdrop-blur-sm hover-scale"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-steel-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-steel-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-steel-primary/20 to-steel-accent/20 w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-steel-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-steel-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl animate-fade-in">
              <img 
                src={heroShip} 
                alt="Vessel Operations" 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Maritime Excellence</h3>
                <p className="text-white/80">24/7 vessel monitoring and coordination</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img 
                src={portOps} 
                alt="Port Operations" 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Port Integration</h3>
                <p className="text-white/80">Seamless port-to-plant connectivity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-card/80 to-steel-primary/5 backdrop-blur-sm border border-border animate-fade-in hover-scale">
                <div className="text-5xl font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent mb-3">
                  99.8%
                </div>
                <div className="text-muted-foreground text-lg">System Uptime</div>
              </div>
              
              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-card/80 to-steel-accent/5 backdrop-blur-sm border border-border animate-fade-in hover-scale" style={{ animationDelay: '100ms' }}>
                <div className="text-5xl font-bold bg-gradient-to-r from-steel-accent to-steel-primary bg-clip-text text-transparent mb-3">
                  30%
                </div>
                <div className="text-muted-foreground text-lg">Cost Reduction</div>
              </div>
              
              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-card/80 to-steel-primary/5 backdrop-blur-sm border border-border animate-fade-in hover-scale" style={{ animationDelay: '200ms' }}>
                <div className="text-5xl font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent mb-3">
                  24/7
                </div>
                <div className="text-muted-foreground text-lg">Live Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-32 mb-20">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-steel-primary/20 to-steel-accent/20 blur-3xl -z-10" />
            <div className="p-16 rounded-3xl bg-gradient-to-r from-steel-primary to-steel-accent shadow-glow backdrop-blur-sm animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Revolutionize Your Operations?
              </h2>
              <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the future of steel logistics with intelligent automation and real-time insights
              </p>
              <Button 
                size="lg" 
                className="bg-white text-steel-primary hover:bg-white/90 transition-all text-xl px-12 py-8 group hover-scale shadow-xl"
                onClick={() => navigate("/")}
              >
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetStarted;
