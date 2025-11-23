import { Card, CardContent } from "@/components/ui/card";
import { Clock, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

const operationsTrend = [
  { hour: "6 AM", operations: 12 },
  { hour: "8 AM", operations: 18 },
  { hour: "10 AM", operations: 24 },
  { hour: "12 PM", operations: 28 },
  { hour: "2 PM", operations: 32 },
  { hour: "4 PM", operations: 26 },
  { hour: "6 PM", operations: 20 },
];

const Status = () => {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "medium":
        return <TrendingUp className="h-5 w-5 text-primary" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-primary/10 text-primary";
      default:
        return "bg-green-500/10 text-green-600";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Status Information</h1>
        <p className="text-muted-foreground">
          Live updates for all logistics operations
        </p>
      </div>

      {/* Operations Trend */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Operations Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={operationsTrend}>
              <defs>
                <linearGradient id="colorOps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px"
                }}
              />
              <Area type="monotone" dataKey="operations" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorOps)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Status Updates */}
      <div className="grid gap-4">
        {statusUpdates.map((update, index) => (
          <Card key={index} className="hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted/50">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="text-sm text-muted-foreground font-medium whitespace-nowrap pt-2">
                  {update.time}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getPriorityIcon(update.priority)}
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Status;
