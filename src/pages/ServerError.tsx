import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, RefreshCw, AlertTriangle, Plane, Wifi } from "lucide-react";

const ServerError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* 500 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-red-100 rounded-full mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">500</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Internal Server Error</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're experiencing some turbulence on our end. Our team has been notified and is working to get things back on track.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What's happening?</h3>
              <p className="text-gray-600 mb-4">
                Our servers are experiencing technical difficulties. This is a temporary issue and should be resolved shortly.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Our technical team has been automatically notified</p>
                <p>• We're working to resolve this as quickly as possible</p>
                <p>• Please try again in a few minutes</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleRefresh}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
            </div>

            {/* Status Information */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                  <Wifi className="w-6 h-6 mr-2 text-green-500" />
                  Service Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Website: Operational</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Server: Maintenance</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Support: Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                If this problem persists, please contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@managerius.com" 
                  className="inline-flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Plane className="w-4 h-4 mr-2" />
                  support@managerius.com
                </a>
                <a 
                  href="tel:+1-800-MANAGERIUS" 
                  className="inline-flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Wifi className="w-4 h-4 mr-2" />
                  +1-800-MANAGERIUS
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServerError;
