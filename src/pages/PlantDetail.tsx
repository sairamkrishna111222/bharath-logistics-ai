import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import bhilaiLogo from "@/assets/bhilai-logo.png";
import rourkelaLogo from "@/assets/rourkela-logo.png";
import durgapurLogo from "@/assets/durgapur-logo.png";
import bokaroLogo from "@/assets/bokaro-logo.png";
import visakhapatnamLogo from "@/assets/visakhapatnam-logo.png";

const plantData = {
  bhilai: {
    name: "Bhilai Steel Plant",
    location: "Chhattisgarh",
    logo: bhilaiLogo,
    rawMaterials: [
      { material: "Iron Ore", maxCapacity: 15000, currentStock: 11200 },
      { material: "Coal", maxCapacity: 8000, currentStock: 6400 },
      { material: "Limestone", maxCapacity: 5000, currentStock: 3800 },
      { material: "Dolomite", maxCapacity: 3000, currentStock: 2100 },
    ],
  },
  rourkela: {
    name: "Rourkela Steel Plant",
    location: "Odisha",
    logo: rourkelaLogo,
    rawMaterials: [
      { material: "Iron Ore", maxCapacity: 12000, currentStock: 9500 },
      { material: "Coal", maxCapacity: 6500, currentStock: 5200 },
      { material: "Limestone", maxCapacity: 4000, currentStock: 3200 },
      { material: "Dolomite", maxCapacity: 2500, currentStock: 1900 },
    ],
  },
  durgapur: {
    name: "Durgapur Steel Plant",
    location: "West Bengal",
    logo: durgapurLogo,
    rawMaterials: [
      { material: "Iron Ore", maxCapacity: 8000, currentStock: 6800 },
      { material: "Coal", maxCapacity: 4500, currentStock: 3600 },
      { material: "Limestone", maxCapacity: 3000, currentStock: 2400 },
      { material: "Dolomite", maxCapacity: 1800, currentStock: 1400 },
    ],
  },
  bokaro: {
    name: "Bokaro Steel Plant",
    location: "Jharkhand",
    logo: bokaroLogo,
    rawMaterials: [
      { material: "Iron Ore", maxCapacity: 13000, currentStock: 10400 },
      { material: "Coal", maxCapacity: 7000, currentStock: 5600 },
      { material: "Limestone", maxCapacity: 4500, currentStock: 3600 },
      { material: "Dolomite", maxCapacity: 2800, currentStock: 2200 },
    ],
  },
  visakhapatnam: {
    name: "Visakhapatnam Steel Plant",
    location: "Andhra Pradesh",
    logo: visakhapatnamLogo,
    rawMaterials: [
      { material: "Iron Ore", maxCapacity: 14000, currentStock: 11900 },
      { material: "Coal", maxCapacity: 7500, currentStock: 6200 },
      { material: "Limestone", maxCapacity: 4800, currentStock: 3900 },
      { material: "Dolomite", maxCapacity: 2900, currentStock: 2300 },
    ],
  },
};

const PlantDetail = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const plant = plantData[plantId as keyof typeof plantData];

  if (!plant) {
    return (
      <div className="min-h-screen bg-gradient-steel">
        <Header />
        <div className="container px-6 py-12">
          <p className="text-center text-muted-foreground">Plant not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      <main className="container px-6 py-12">
        <div className="mb-8 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center shadow-card overflow-hidden">
            <img 
              src={plant.logo} 
              alt={`${plant.name} logo`} 
              className="w-16 h-16 object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {plant.name}
            </h1>
            <p className="text-muted-foreground">{plant.location}</p>
          </div>
        </div>

        <Card className="p-6 mb-6 bg-card border-border shadow-card">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Raw Material Inventory
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={plant.rawMaterials}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="material" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--foreground))" }}
                label={{ value: "Tonnes", angle: -90, position: "insideLeft", fill: "hsl(var(--foreground))" }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Legend />
              <Bar dataKey="maxCapacity" fill="hsl(var(--steel-primary))" name="Max Capacity" />
              <Bar dataKey="currentStock" fill="hsl(var(--steel-accent))" name="Current Stock" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {plant.rawMaterials.map((material) => {
            const utilizationPercent = ((material.currentStock / material.maxCapacity) * 100).toFixed(1);
            return (
              <Card key={material.material} className="p-6 bg-card border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {material.material}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Max Capacity:</span>
                    <span className="font-semibold text-foreground">{material.maxCapacity.toLocaleString()} tonnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Stock:</span>
                    <span className="font-semibold text-foreground">{material.currentStock.toLocaleString()} tonnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Utilization:</span>
                    <span className="font-semibold text-primary">{utilizationPercent}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-500 rounded-full"
                      style={{ width: `${utilizationPercent}%` }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default PlantDetail;
