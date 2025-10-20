import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, Search, ArrowLeft, Plane } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full mb-6">
                <Plane className="w-16 h-16 text-blue-600 transform rotate-45" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                The page you're looking for seems to have taken off to a different destination. 
                Don't worry, we'll help you navigate back to familiar skies.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What happened?</h3>
              <p className="text-gray-600 mb-4">
                The page <code className="bg-gray-100 px-2 py-1 rounded text-sm">{location.pathname}</code> doesn't exist or may have been moved.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Check the URL for typos</p>
                <p>• The page may have been moved or deleted</p>
                <p>• Try using our navigation menu to find what you're looking for</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
              
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Blog
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>

            {/* Popular Pages */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Popular Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  to="/" 
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800">Home</h4>
                  <p className="text-sm text-gray-600">Return to our homepage</p>
                </Link>
                
                <Link 
                  to="/blog" 
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800">Blog</h4>
                  <p className="text-sm text-gray-600">Read our latest articles</p>
                </Link>
                
                <Link 
                  to="/jet-luxe" 
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800">Jet Luxe</h4>
                  <p className="text-sm text-gray-600">Explore our services</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
