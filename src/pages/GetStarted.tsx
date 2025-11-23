import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Factory, Zap, Globe, Shield, TrendingUp, Package } from "lucide-react";
import logo from "@/assets/bharath-sail-logo.png";

const GetStarted = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Hot Rolled Steel",
      description: "High-quality hot rolled coils and sheets for automotive, construction, and engineering industries",
      icon: Factory,
      features: ["Thickness: 1.2mm - 25mm", "Width: 900mm - 2100mm", "Grade: Various IS standards"]
    },
    {
      title: "Cold Rolled Steel",
      description: "Premium cold rolled products with superior surface finish for appliances and automotive sector",
      icon: Zap,
      features: ["Thickness: 0.3mm - 3mm", "Width: 600mm - 1850mm", "Excellent formability"]
    },
    {
      title: "Structural Steel",
      description: "Heavy structural sections including beams, channels, and angles for infrastructure projects",
      icon: Shield,
      features: ["Rails & Beams", "Channels & Angles", "Construction grade"]
    },
    {
      title: "Wire Rods",
      description: "High-tensile wire rods for wire drawing, fasteners, and reinforcement applications",
      icon: Package,
      features: ["Diameter: 5.5mm - 16mm", "Grade: Fe-415, Fe-500", "Consistent quality"]
    },
    {
      title: "Plates & Sheets",
      description: "Heavy plates and sheets for shipbuilding, pressure vessels, and heavy engineering",
      icon: Globe,
      features: ["Thickness: 5mm - 150mm", "Width: Up to 4000mm", "Special grades available"]
    },
    {
      title: "Special Steels",
      description: "Customized steel products including alloy steels, stainless steel, and specialty grades",
      icon: TrendingUp,
      features: ["Alloy steels", "Stainless steel", "Custom specifications"]
    }
  ];

  const plants = [
    { name: "Bhilai Steel Plant", capacity: "4.0 MT/Year", location: "Chhattisgarh" },
    { name: "Rourkela Steel Plant", capacity: "2.0 MT/Year", location: "Odisha" },
    { name: "Durgapur Steel Plant", capacity: "1.6 MT/Year", location: "West Bengal" },
    { name: "Bokaro Steel Plant", capacity: "2.5 MT/Year", location: "Jharkhand" },
    { name: "Visakhapatnam Steel Plant", capacity: "3.0 MT/Year", location: "Andhra Pradesh" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-steel-primary/5">
      {/* Header */}
      <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bharath Sail Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent">
              Bharath Sail
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/")}>
              Features
            </Button>
            <Button variant="ghost">
              About
            </Button>
            <Button variant="ghost">
              Contact
            </Button>
            <Button 
              className="bg-gradient-to-r from-steel-primary to-steel-accent hover:opacity-90 transition-opacity"
              onClick={() => navigate("/")}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-steel-primary/10 border border-steel-primary/20 text-steel-primary text-sm font-medium mb-4">
            India's Largest Steel Producer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Meet, Bharath Sail
            <br />
            <span className="bg-gradient-to-r from-steel-primary via-steel-accent to-steel-primary bg-clip-text text-transparent">
              Integrated Steel Logistics
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive steel production and logistics management across 5 integrated steel plants, delivering excellence in quality and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-steel-primary to-steel-accent hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={() => navigate("/")}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-steel-primary/30 hover:bg-steel-primary/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Steel Products</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive range of steel products manufactured across our facilities
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-steel-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-steel-primary/10 to-steel-accent/10 w-fit group-hover:scale-110 transition-transform">
                <product.icon className="h-6 w-6 text-steel-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-steel-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Plants Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Manufacturing Network</h2>
          <p className="text-muted-foreground text-lg">
            5 integrated steel plants strategically located across India
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {plants.map((plant, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-card to-steel-primary/5 border border-border hover:border-steel-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <h3 className="font-semibold mb-2 text-foreground">{plant.name}</h3>
              <p className="text-sm text-steel-primary font-medium mb-1">{plant.capacity}</p>
              <p className="text-sm text-muted-foreground">{plant.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-steel-primary/5 border border-border">
            <div className="text-4xl font-bold text-steel-primary mb-2">13+ MT</div>
            <div className="text-muted-foreground">Annual Capacity</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-steel-accent/5 border border-border">
            <div className="text-4xl font-bold text-steel-accent mb-2">5</div>
            <div className="text-muted-foreground">Steel Plants</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-steel-primary/5 border border-border">
            <div className="text-4xl font-bold text-steel-primary mb-2">50+</div>
            <div className="text-muted-foreground">Product Varieties</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-steel-accent/5 border border-border">
            <div className="text-4xl font-bold text-steel-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Operations</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 mb-16">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-steel-primary to-steel-accent shadow-glow">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Steel Operations?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join India's most advanced steel production and logistics platform
          </p>
          <Button 
            size="lg" 
            className="bg-white text-steel-primary hover:bg-white/90 transition-colors text-lg px-10 py-6"
            onClick={() => navigate("/")}
          >
            Access Dashboard Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
