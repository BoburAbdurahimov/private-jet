import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
const SpeedInsights = lazy(() => import("./components/SpeedInsights"));

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Affiliates = lazy(() => import("./pages/Affiliates"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const AirAcer = lazy(() => import("./pages/AirAcer"));
const PrivateJetFinder = lazy(() => import("./pages/PrivateJetFinder"));
const JetLuxe = lazy(() => import("./pages/JetLuxe"));
const DynamicBlogPost = lazy(() => import("./pages/DynamicBlogPost"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const SimpleAdminDashboard = lazy(() => import("./pages/SimpleAdminDashboard"));
const SimpleAdminBlogForm = lazy(() => import("./pages/SimpleAdminBlogForm"));
const AdvancedAdminBlogForm = lazy(() => import("./pages/AdvancedAdminBlogForm"));

// Lazy load blog pages
const SustainablePrivateAviation = lazy(() => import("./pages/blog/SustainablePrivateAviation"));
const LuxuryJetInteriors = lazy(() => import("./pages/blog/LuxuryJetInteriors"));
const BusinessAviationTrends = lazy(() => import("./pages/blog/BusinessAviationTrends"));
const PrivateJetEtiquette = lazy(() => import("./pages/blog/PrivateJetEtiquette"));
const GlobalHotspots2024 = lazy(() => import("./pages/blog/GlobalHotspots2024"));
const PrivateJetSafety = lazy(() => import("./pages/blog/PrivateJetSafety"));
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
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={null}>
            <SpeedInsights />
          </Suspense>
          <Analytics />
          <BrowserRouter>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading...</p>
                </div>
              </div>
            }>
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
            </Suspense>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
  );
};

export default App;
