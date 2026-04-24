
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import Index from "./pages/Index";
import About from "./pages/About";
import Exhibitors from "./pages/Exhibitors";
import Visitors from "./pages/Visitors";
import Program from "./pages/Program";
import Press from "./pages/Press";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Gallery from "./pages/Gallery";
import Archive from "./pages/Archive";
import AboutCompany from "./pages/AboutCompany";
import Subsidies from "./pages/Subsidies";
import Hotel from "./pages/Hotel";
import Dacha from "./pages/Dacha";
import ForExhibitor from "./pages/ForExhibitor";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/program" element={<Program />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/sub" element={<Subsidies />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/dacha" element={<Dacha />} />
          <Route path="/forexhibitor" element={<ForExhibitor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;