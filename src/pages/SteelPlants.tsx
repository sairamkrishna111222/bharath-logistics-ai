import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import bhilaiLogo from "@/assets/bhilai-logo.png";
import rourkelaLogo from "@/assets/rourkela-logo.png";
import durgapurLogo from "@/assets/durgapur-logo.png";
import bokaroLogo from "@/assets/bokaro-logo.png";
import visakhapatnamLogo from "@/assets/visakhapatnam-logo.png";

const plants = [
  {
    id: "bhilai",
    name: "Bhilai Steel Plant",
    location: "Chhattisgarh",
    logo: bhilaiLogo,
    capacity: "7.5 MT/year",
  },
  {
    id: "rourkela",
    name: "Rourkela Steel Plant",
    location: "Odisha",
    logo: rourkelaLogo,
    capacity: "4.5 MT/year",
  },
  {
    id: "durgapur",
    name: "Durgapur Steel Plant",
    location: "West Bengal",
    logo: durgapurLogo,
    capacity: "2.2 MT/year",
  },
  {
    id: "bokaro",
    name: "Bokaro Steel Plant",
    location: "Jharkhand",
    logo: bokaroLogo,
    capacity: "4.6 MT/year",
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam Steel Plant",
    location: "Andhra Pradesh",
    logo: visakhapatnamLogo,
    capacity: "7.3 MT/year",
  },
];

const SteelPlants = () => {
  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      <main className="container px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Steel Plants
          </h1>
          <p className="text-muted-foreground">
            India's 5 major integrated steel plants
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <Link key={plant.id} to={`/plant/${plant.id}`}>
              <Card className="p-6 hover:shadow-elevated transition-all duration-300 border-border bg-card group cursor-pointer h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-steel flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={plant.logo} 
                      alt={`${plant.name} logo`} 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {plant.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {plant.location}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {plant.capacity}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SteelPlants;
