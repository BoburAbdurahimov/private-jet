import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, Clock, AlertTriangle, Plane, Timer, RefreshCw } from "lucide-react";

const TooManyRequests = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* 429 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-orange-100 rounded-full mb-6">
                <Timer className="w-16 h-16 text-orange-600" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">429</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Too Many Requests</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                You've made too many requests in a short period. Please wait a moment before trying again.
              </p>
            </div>

            {/* Rate Limit Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-orange-600" />
                Rate Limit Exceeded
              </h3>
              <p className="text-gray-600 mb-4">
                To ensure fair usage and optimal performance for all users, we limit the number of requests per user.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Please wait before making another request</p>
                <p>• This limit resets automatically</p>
                <p>• Consider reducing the frequency of your requests</p>
              </div>
            </div>

            {/* Wait Time */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Wait Time</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">1-2 minutes</div>
              <p className="text-gray-600">Your rate limit will reset shortly</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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

            {/* Rate Limit Information */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Rate Limit Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Timer className="w-5 h-5 mr-2 text-blue-600" />
                    Current Limits
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 100 requests per minute</li>
                    <li>• 1000 requests per hour</li>
                    <li>• 10000 requests per day</li>
                    <li>• Limits reset automatically</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Plane className="w-5 h-5 mr-2 text-green-600" />
                    Best Practices
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Space out your requests</li>
                    <li>• Use caching when possible</li>
                    <li>• Avoid rapid-fire requests</li>
                    <li>• Consider API alternatives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Higher Limits?</h3>
                <p className="text-gray-600 mb-4">
                  For applications requiring higher rate limits, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:support@managerius.com" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plane className="w-4 h-4 mr-2" />
                    Email Support
                  </a>
                  <a 
                    href="tel:+1-800-MANAGERIUS" 
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Call Support
                  </a>
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

export default TooManyRequests;
