import Header from "@/components/Header";
import DashboardCard from "@/components/DashboardCard";
import { Factory, Anchor, Ship, Route, Activity } from "lucide-react";
import heroShip from "@/assets/hero-ship.jpg";

const Index = () => {
  const sections = [
    {
      title: "Steel Plants",
      icon: Factory,
      link: "/steel-plants",
      description: "Monitor India's 5 major steel plants - capacity, raw materials, and production status",
    },
    {
      title: "Port Info",
      icon: Anchor,
      link: "/ports",
      description: "Track port operations, cargo handling, and vessel schedules",
    },
    {
      title: "Vessel Info",
      icon: Ship,
      link: "/vessels",
      description: "Real-time vessel tracking, location, and cargo information",
    },
    {
      title: "Route Data",
      icon: Route,
      link: "/routes",
      description: "Optimize shipping routes, distances, and estimated arrival times",
    },
    {
      title: "Status Info",
      icon: Activity,
      link: "/status",
      description: "Live status updates for shipments, deliveries, and operations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroShip} 
            alt="Cargo ships" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        <div className="relative container px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-lg">
            Steel Logistics
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl drop-shadow">
            Comprehensive logistics management for India's steel industry
          </p>
        </div>
      </div>

      <main className="container px-6 py-12">
        <div className="grid gap-6 max-w-4xl mx-auto">
          {sections.map((section) => (
            <DashboardCard key={section.title} {...section} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
