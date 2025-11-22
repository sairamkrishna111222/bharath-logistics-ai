import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const vessels = [
  { name: "MV Steel Carrier", type: "Bulk Carrier", cargo: "Iron Ore", status: "In Transit", eta: "2 days" },
  { name: "MV Ocean Giant", type: "Bulk Carrier", cargo: "Coal", status: "Loading", eta: "4 days" },
  { name: "MV Maritime Express", type: "Container Ship", cargo: "Steel Products", status: "In Port", eta: "Ready" },
  { name: "MV Coastal Star", type: "Bulk Carrier", cargo: "Limestone", status: "In Transit", eta: "1 day" },
  { name: "MV Indian Pride", type: "Bulk Carrier", cargo: "Iron Ore", status: "Unloading", eta: "6 hours" },
];

const Vessels = () => {
  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      <main className="container px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Vessel Information
          </h1>
          <p className="text-muted-foreground">
            Real-time tracking of vessels carrying steel and raw materials
          </p>
        </div>

        <div className="grid gap-6">
          {vessels.map((vessel) => (
            <Card key={vessel.name} className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {vessel.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Type: </span>
                      <span className="text-foreground font-medium">{vessel.type}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Cargo: </span>
                      <span className="text-foreground font-medium">{vessel.cargo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-1">
                      {vessel.status}
                    </div>
                    <p className="text-xs text-muted-foreground">ETA: {vessel.eta}</p>
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

export default Vessels;
