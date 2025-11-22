import Header from "@/components/Header";
import DashboardCard from "@/components/DashboardCard";
import { Factory, Anchor, Ship, Route, Activity } from "lucide-react";

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
      <main className="container px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Maritime Logistics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrated steel production and maritime logistics management system
          </p>
        </div>

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
