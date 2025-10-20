import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, RefreshCw, AlertCircle, Plane, Server, Wifi } from "lucide-react";

const BadGateway = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* 502 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-yellow-100 rounded-full mb-6">
                <Server className="w-16 h-16 text-yellow-600" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">502</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Bad Gateway</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our servers are temporarily unable to process your request. This is usually a temporary issue that resolves itself quickly.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What's happening?</h3>
              <p className="text-gray-600 mb-4">
                The server received an invalid response from an upstream server. This is typically a temporary network issue.
              </p>
              <div className="text-sm text-gray-500">
                <p>• This is usually a temporary network issue</p>
                <p>• Our servers are working to restore normal service</p>
                <p>• Please try again in a few moments</p>
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

            {/* Network Status */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                  <Wifi className="w-6 h-6 mr-2 text-blue-500" />
                  Network Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>CDN: Operational</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Gateway: Issues</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>DNS: Resolved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting Tips */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Troubleshooting Tips</h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Try These Steps:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Refresh the page</li>
                      <li>• Clear your browser cache</li>
                      <li>• Check your internet connection</li>
                      <li>• Try a different browser</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">If Problem Persists:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Wait a few minutes and try again</li>
                      <li>• Contact our support team</li>
                      <li>• Check our status page</li>
                      <li>• Try accessing from a different network</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BadGateway;
