import { Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bharath-sail-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Bharath Sail Logo" 
            className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent">
            Bharath Sail
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {!isHomePage && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
          {!isHomePage && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
