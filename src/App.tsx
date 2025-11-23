import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import TopBar from "@/components/TopBar";
import GetStarted from "./pages/GetStarted";
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
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/*" element={
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                  <TopBar />
                  <main className="flex-1 overflow-auto">
                    <Routes>
                <Route path="/get-started" element={<GetStarted />} />
                      <Route path="/" element={<Index />} />
                      <Route path="/steel-plants" element={<SteelPlants />} />
                      <Route path="/plant/:plantId" element={<PlantDetail />} />
                      <Route path="/ports" element={<Ports />} />
                      <Route path="/vessels" element={<Vessels />} />
                      <Route path="/routes" element={<RoutesPage />} />
                      <Route path="/status" element={<Status />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
