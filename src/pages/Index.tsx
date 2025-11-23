import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, TrendingUp, TrendingDown, Activity, Package } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Index = () => {
  const shipTrackingData = [
    { month: "Jan", vessels: 28, cargo: 45 },
    { month: "Feb", vessels: 32, cargo: 52 },
    { month: "Mar", vessels: 35, cargo: 48 },
    { month: "Apr", vessels: 38, cargo: 61 },
    { month: "May", vessels: 42, cargo: 58 },
    { month: "Jun", vessels: 45, cargo: 65 },
    { month: "Jul", vessels: 48, cargo: 70 },
    { month: "Aug", vessels: 52, cargo: 68 },
    { month: "Sep", vessels: 55, cargo: 75 },
    { month: "Oct", vessels: 58, cargo: 72 },
    { month: "Nov", vessels: 60, cargo: 80 },
    { month: "Dec", vessels: 62, cargo: 85 },
  ];

  const deliveryData = [
    { name: "On Time", value: 450, fill: "hsl(var(--primary))" },
    { name: "Delayed", value: 120, fill: "hsl(var(--destructive))" },
    { name: "In Transit", value: 230, fill: "hsl(var(--accent))" },
  ];

  const stats = [
    {
      title: "Active Vessels",
      value: "62",
      change: "+12%",
      trend: "up",
      icon: Ship,
    },
    {
      title: "Total Cargo (MT)",
      value: "85K",
      change: "+8%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Deliveries",
      value: "450",
      change: "-3%",
      trend: "down",
      icon: Activity,
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of Bharath Sail logistics operations
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center gap-1 ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ship Tracking Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Ship Tracking & Cargo Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={shipTrackingData}>
              <defs>
                <linearGradient id="colorVessels" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCargo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="vessels" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorVessels)" name="Vessels" />
              <Area type="monotone" dataKey="cargo" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorCargo)" name="Cargo (1000 MT)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Delivery Status */}
      <Card>
        <CardHeader>
          <CardTitle>Delivery Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deliveryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
