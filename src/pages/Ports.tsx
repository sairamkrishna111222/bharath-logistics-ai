import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Anchor, TrendingUp } from "lucide-react";

const ports = [
  { name: "Visakhapatnam Port", location: "Andhra Pradesh", vessels: 15, status: "Operational", capacity: 92 },
  { name: "Paradip Port", location: "Odisha", vessels: 10, status: "Operational", capacity: 78 },
  { name: "Haldia Port", location: "West Bengal", vessels: 7, status: "Operational", capacity: 72 },
];

const cargoData = [
  { port: "Vizag", cargo: 580 },
  { port: "Paradip", cargo: 410 },
  { port: "Haldia", cargo: 350 },
];

const cargoTypes = [
  { name: "Iron Ore", value: 45, fill: "hsl(var(--primary))" },
  { name: "Coal", value: 30, fill: "hsl(var(--accent))" },
  { name: "Limestone", value: 15, fill: "hsl(var(--secondary))" },
  { name: "Others", value: 10, fill: "hsl(var(--muted))" },
];

const Ports = () => {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Port Information</h1>
        <p className="text-muted-foreground">
          Major Indian ports handling steel raw materials
        </p>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cargo Handling by Port (MT/Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cargoData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="port" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }}
                />
                <Bar dataKey="cargo" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cargo Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={cargoTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {cargoTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Ports List */}
      <div className="grid gap-4">
        {ports.map((port) => (
          <Card key={port.name} className="hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Anchor className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {port.name}
                    </h3>
                    <p className="text-muted-foreground">{port.location}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{port.vessels}</p>
                    <p className="text-sm text-muted-foreground">Vessels</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{port.capacity}%</p>
                    <p className="text-sm text-muted-foreground">Capacity</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                      {port.status}
                    </div>
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

export default Ports;
