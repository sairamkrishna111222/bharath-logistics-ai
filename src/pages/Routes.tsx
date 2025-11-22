import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const routes = [
  { from: "Paradip Port", to: "Visakhapatnam Steel Plant", distance: "450 km", duration: "18 hours", status: "Active" },
  { from: "Mumbai Port", to: "Bhilai Steel Plant", distance: "1200 km", duration: "3 days", status: "Active" },
  { from: "Chennai Port", to: "Rourkela Steel Plant", distance: "950 km", duration: "2.5 days", status: "Active" },
  { from: "Kolkata Port", to: "Durgapur Steel Plant", distance: "280 km", duration: "12 hours", status: "Active" },
  { from: "Visakhapatnam Port", to: "Bokaro Steel Plant", distance: "850 km", duration: "2 days", status: "Active" },
];

const Routes = () => {
  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      <main className="container px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Route Data
          </h1>
          <p className="text-muted-foreground">
            Optimized shipping routes from ports to steel plants
          </p>
        </div>

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
      </main>
    </div>
  );
};

export default Routes;
