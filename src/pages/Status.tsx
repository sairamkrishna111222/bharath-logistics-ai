import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const statusUpdates = [
  { 
    time: "10:30 AM", 
    event: "Shipment Arrived", 
    description: "Iron ore shipment (5000 tonnes) arrived at Visakhapatnam Port",
    priority: "high"
  },
  { 
    time: "09:15 AM", 
    event: "Loading Started", 
    description: "Coal loading commenced at Mumbai Port for Bhilai Steel Plant",
    priority: "medium"
  },
  { 
    time: "08:45 AM", 
    event: "Vessel Departed", 
    description: "MV Steel Carrier departed Chennai Port with steel products",
    priority: "low"
  },
  { 
    time: "07:20 AM", 
    event: "Inventory Alert", 
    description: "Limestone stock below 30% at Rourkela Steel Plant",
    priority: "high"
  },
  { 
    time: "06:00 AM", 
    event: "Route Optimized", 
    description: "New optimal route calculated for Paradip-Durgapur shipment",
    priority: "medium"
  },
];

const Status = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      <main className="container px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Status Information
          </h1>
          <p className="text-muted-foreground">
            Live updates for all logistics operations
          </p>
        </div>

        <div className="grid gap-6">
          {statusUpdates.map((update, index) => (
            <Card key={index} className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-sm text-muted-foreground font-medium whitespace-nowrap pt-1">
                  {update.time}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {update.event}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(update.priority)}`}>
                      {update.priority}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {update.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Status;
