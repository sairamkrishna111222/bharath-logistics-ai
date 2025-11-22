import { Anchor } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-gradient-primary shadow-card group-hover:shadow-elevated transition-all duration-300">
            <Anchor className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent">
            Bharath Sail
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
