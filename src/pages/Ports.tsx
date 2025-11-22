import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const ports = [
  { name: "Mumbai Port", location: "Maharashtra", vessels: 12, status: "Operational" },
  { name: "Chennai Port", location: "Tamil Nadu", vessels: 8, status: "Operational" },
  { name: "Visakhapatnam Port", location: "Andhra Pradesh", vessels: 15, status: "Operational" },
  { name: "Paradip Port", location: "Odisha", vessels: 10, status: "Operational" },
  { name: "Kolkata Port", location: "West Bengal", vessels: 6, status: "Operational" },
];

const Ports = () => {
  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      <main className="container px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Port Information
          </h1>
          <p className="text-muted-foreground">
            Major Indian ports handling steel and raw material cargo
          </p>
        </div>

        <div className="grid gap-6">
          {ports.map((port) => (
            <Card key={port.name} className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {port.name}
                  </h3>
                  <p className="text-muted-foreground">{port.location}</p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{port.vessels}</p>
                    <p className="text-sm text-muted-foreground">Vessels</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {port.status}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Ports;
