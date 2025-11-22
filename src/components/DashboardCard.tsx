import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  link: string;
  description: string;
}

const DashboardCard = ({ title, icon: Icon, link, description }: DashboardCardProps) => {
  return (
    <Link to={link}>
      <Card className="p-6 hover:shadow-elevated transition-all duration-300 border-border bg-card group cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DashboardCard;
