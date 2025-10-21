import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeedInsights from "./components/SpeedInsights";
import Index from "./pages/Index";
import Affiliates from "./pages/Affiliates";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
// Removed partner-specific pages that are no longer in use
import AirAcer from "./pages/AirAcer";
import PrivateJetFinder from "./pages/PrivateJetFinder";
import JetLuxe from "./pages/JetLuxe";
import SustainablePrivateAviation from "./pages/blog/SustainablePrivateAviation";
import LuxuryJetInteriors from "./pages/blog/LuxuryJetInteriors";
import BusinessAviationTrends from "./pages/blog/BusinessAviationTrends";
import PrivateJetEtiquette from "./pages/blog/PrivateJetEtiquette";
import GlobalHotspots2024 from "./pages/blog/GlobalHotspots2024";
import PrivateJetSafety from "./pages/blog/PrivateJetSafety";
import DynamicBlogPost from "./pages/DynamicBlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SimpleAdminDashboard from "./pages/SimpleAdminDashboard";
import SimpleAdminBlogForm from "./pages/SimpleAdminBlogForm";
import AdvancedAdminBlogForm from "./pages/AdvancedAdminBlogForm";
import AdminBlogForm from "./pages/AdminBlogForm";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import BadGateway from "./pages/BadGateway";
import ServiceUnavailable from "./pages/ServiceUnavailable";
import Forbidden from "./pages/Forbidden";
import TooManyRequests from "./pages/TooManyRequests";

const queryClient = new QueryClient();

const App = () => {
  // Debug logging for production
  console.log('App component rendering...');
  
  // Add a simple test to ensure the app is working
  if (typeof window !== 'undefined') {
    console.log('Window object available, app should render');
  }
  
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
      <div style={{ backgroundColor: 'red', padding: '20px', fontSize: '24px', textAlign: 'center' }}>
        APP IS LOADING - IF YOU SEE THIS, REACT IS WORKING
      </div>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <SpeedInsights />
            <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partners" element={<Affiliates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Partner routes */}
          <Route path="/air-acer" element={<AirAcer />} />
          <Route path="/private-jet-finder" element={<PrivateJetFinder />} />
          <Route path="/jet-luxe" element={<JetLuxe />} />
          {/* Legacy blog routes for existing posts */}
          <Route path="/blog/sustainable-private-aviation" element={<SustainablePrivateAviation />} />
          <Route path="/blog/luxury-jet-interiors" element={<LuxuryJetInteriors />} />
          <Route path="/blog/business-aviation-trends" element={<BusinessAviationTrends />} />
          <Route path="/blog/private-jet-etiquette" element={<PrivateJetEtiquette />} />
          <Route path="/blog/global-hotspots-2024" element={<GlobalHotspots2024 />} />
          <Route path="/blog/private-jet-safety" element={<PrivateJetSafety />} />
          {/* Dynamic blog post route */}
          <Route path="/blog/:id" element={<DynamicBlogPost />} />
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<SimpleAdminDashboard />} />
          <Route path="/admin/posts/new" element={<AdvancedAdminBlogForm />} />
          <Route path="/admin/posts/:id/edit" element={<AdvancedAdminBlogForm />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* Error Pages */}
          <Route path="/500" element={<ServerError />} />
          <Route path="/502" element={<BadGateway />} />
          <Route path="/503" element={<ServiceUnavailable />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/429" element={<TooManyRequests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
    </div>
  );
};

export default App;
