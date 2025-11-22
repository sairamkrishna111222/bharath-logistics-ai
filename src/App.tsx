import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SteelPlants from "./pages/SteelPlants";
import PlantDetail from "./pages/PlantDetail";
import Ports from "./pages/Ports";
import Vessels from "./pages/Vessels";
import RoutesPage from "./pages/Routes";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/steel-plants" element={<SteelPlants />} />
          <Route path="/plant/:plantId" element={<PlantDetail />} />
          <Route path="/ports" element={<Ports />} />
          <Route path="/vessels" element={<Vessels />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/status" element={<Status />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
