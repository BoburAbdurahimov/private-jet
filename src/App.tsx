import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Affiliates from "./pages/Affiliates";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import VilliersJets from "./pages/VilliersJets";
import JetLuxe from "./pages/JetLuxe";
import FastPrivateJet from "./pages/FastPrivateJet";
import AirAcer from "./pages/AirAcer";
import PrivateJetFinder from "./pages/PrivateJetFinder";
import SustainablePrivateAviation from "./pages/blog/SustainablePrivateAviation";
import LuxuryJetInteriors from "./pages/blog/LuxuryJetInteriors";
import BusinessAviationTrends from "./pages/blog/BusinessAviationTrends";
import PrivateJetEtiquette from "./pages/blog/PrivateJetEtiquette";
import GlobalHotspots2024 from "./pages/blog/GlobalHotspots2024";
import PrivateJetSafety from "./pages/blog/PrivateJetSafety";
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
          <Route path="/partners" element={<Affiliates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villiers-jets" element={<VilliersJets />} />
          <Route path="/jet-luxe" element={<JetLuxe />} />
          <Route path="/fast-private-jet" element={<FastPrivateJet />} />
          <Route path="/air-acer" element={<AirAcer />} />
          <Route path="/private-jet-finder" element={<PrivateJetFinder />} />
          <Route path="/blog/sustainable-private-aviation" element={<SustainablePrivateAviation />} />
          <Route path="/blog/luxury-jet-interiors" element={<LuxuryJetInteriors />} />
          <Route path="/blog/business-aviation-trends" element={<BusinessAviationTrends />} />
          <Route path="/blog/private-jet-etiquette" element={<PrivateJetEtiquette />} />
          <Route path="/blog/global-hotspots-2024" element={<GlobalHotspots2024 />} />
          <Route path="/blog/private-jet-safety" element={<PrivateJetSafety />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
