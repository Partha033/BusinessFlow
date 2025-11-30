import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowWeWork from "./pages/HowWeWork";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 1. Place ScrollToTop here so it watches ALL route changes */}
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route 
            path="/services" 
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            } 
          />
          
          <Route 
            path="/how-we-work" 
            element={
              <>
                <Navbar />
                <HowWeWork />
                <Footer />
              </>
            } 
          />
          
          <Route 
            path="/portfolio" 
            element={
              <>
                <Navbar />
                <Portfolio />
                <Footer />
              </>
            } 
          />
          
          <Route 
            path="/contact" 
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;