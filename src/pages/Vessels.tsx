import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Navigation, Package } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const vessels = [
  { name: "MV Steel Carrier", type: "Bulk Carrier", cargo: "Iron Ore", status: "In Transit", eta: "2 days", speed: 15 },
  { name: "MV Ocean Giant", type: "Bulk Carrier", cargo: "Coal", status: "Loading", eta: "4 days", speed: 0 },
  { name: "MV Maritime Express", type: "Container Ship", cargo: "Steel Products", status: "In Port", eta: "Ready", speed: 0 },
  { name: "MV Coastal Star", type: "Bulk Carrier", cargo: "Limestone", status: "In Transit", eta: "1 day", speed: 18 },
  { name: "MV Indian Pride", type: "Bulk Carrier", cargo: "Iron Ore", status: "Unloading", eta: "6 hours", speed: 0 },
];

const vesselMovementData = [
  { time: "00:00", count: 42 },
  { time: "04:00", count: 38 },
  { time: "08:00", count: 52 },
  { time: "12:00", count: 58 },
  { time: "16:00", count: 55 },
  { time: "20:00", count: 48 },
  { time: "24:00", count: 45 },
];

const Vessels = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-blue-500/10 text-blue-600";
      case "Loading":
        return "bg-yellow-500/10 text-yellow-600";
      case "In Port":
        return "bg-green-500/10 text-green-600";
      case "Unloading":
        return "bg-purple-500/10 text-purple-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Vessel Information</h1>
        <p className="text-muted-foreground">
          Active vessels transporting steel raw materials
        </p>
      </div>

      {/* Vessel Movement Chart */}
      <Card>
        <CardHeader>
          <CardTitle>24-Hour Vessel Movement Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vesselMovementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Vessels List */}
      <div className="grid gap-4">
        {vessels.map((vessel) => (
          <Card key={vessel.name} className="hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Ship className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {vessel.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Navigation className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Type: </span>
                        <span className="text-foreground font-medium">{vessel.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Cargo: </span>
                        <span className="text-foreground font-medium">{vessel.cargo}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{vessel.speed}</p>
                    <p className="text-sm text-muted-foreground">knots</p>
                  </div>
                  <div className="text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-1 ${getStatusColor(vessel.status)}`}>
                      {vessel.status}
                    </div>
                    <p className="text-xs text-muted-foreground">ETA: {vessel.eta}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vessels;
