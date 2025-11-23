import { Card } from "@/components/ui/card";
import RouteMap from "@/components/RouteMap";

const routes = [
  { 
    from: "Paradip Port", 
    to: "Visakhapatnam Steel Plant", 
    fromCoords: [20.2653, 86.6936] as [number, number],
    toCoords: [17.6868, 83.2185] as [number, number],
    distance: "450 km", 
    duration: "18 hours", 
    status: "Active" 
  },
  { 
    from: "Mumbai Port", 
    to: "Bhilai Steel Plant", 
    fromCoords: [18.9388, 72.8354] as [number, number],
    toCoords: [21.2094, 81.4337] as [number, number],
    distance: "1200 km", 
    duration: "3 days", 
    status: "Active" 
  },
  { 
    from: "Chennai Port", 
    to: "Rourkela Steel Plant", 
    fromCoords: [13.0827, 80.2707] as [number, number],
    toCoords: [22.2604, 84.8536] as [number, number],
    distance: "950 km", 
    duration: "2.5 days", 
    status: "Active" 
  },
  { 
    from: "Kolkata Port", 
    to: "Durgapur Steel Plant", 
    fromCoords: [22.5726, 88.3639] as [number, number],
    toCoords: [23.5204, 87.3119] as [number, number],
    distance: "280 km", 
    duration: "12 hours", 
    status: "Active" 
  },
  { 
    from: "Visakhapatnam Port", 
    to: "Bokaro Steel Plant", 
    fromCoords: [17.6868, 83.2185] as [number, number],
    toCoords: [23.6693, 86.1511] as [number, number],
    distance: "850 km", 
    duration: "2 days", 
    status: "Active" 
  },
];

const Routes = () => {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Route Tracking System</h1>
        <p className="text-muted-foreground">
          Real-time shipment tracking with optimized routes from ports to steel plants
        </p>
      </div>

      {/* Interactive Map */}
        <div className="mb-8">
          <RouteMap routes={routes} />
        </div>

        {/* Route Details */}
        <div className="grid gap-6">
          {routes.map((route, index) => (
            <Card key={index} className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {route.from}
                    </h3>
                    <span className="text-muted-foreground">→</span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {route.to}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Distance: </span>
                      <span className="text-foreground font-medium">{route.distance}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration: </span>
                      <span className="text-foreground font-medium">{route.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {route.status}
                </div>
              </div>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default Routes;
