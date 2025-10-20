import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, Clock, AlertTriangle, Plane, Wrench, Calendar } from "lucide-react";

const ServiceUnavailable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* 503 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-purple-100 rounded-full mb-6">
                <Wrench className="w-16 h-16 text-purple-600" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">503</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Service Unavailable</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're currently performing scheduled maintenance to improve your experience. We'll be back online shortly.
              </p>
            </div>

            {/* Maintenance Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                Scheduled Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                We're performing essential updates to enhance our services and ensure optimal performance.
              </p>
              <div className="text-sm text-gray-500">
                <p>• This maintenance is scheduled and necessary</p>
                <p>• We're working to minimize downtime</p>
                <p>• All services will be restored shortly</p>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Estimated Restoration Time
              </h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">15-30 minutes</div>
              <p className="text-gray-600">We'll notify you as soon as services are restored</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
              
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Clock className="w-5 h-5 mr-2" />
                Check Again
              </button>
            </div>

            {/* What We're Working On */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">What We're Working On</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Plane className="w-5 h-5 mr-2 text-blue-600" />
                    System Updates
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Server performance optimization</li>
                    <li>• Security enhancements</li>
                    <li>• Database maintenance</li>
                    <li>• CDN configuration updates</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-purple-600" />
                    Feature Improvements
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enhanced booking system</li>
                    <li>• Improved user interface</li>
                    <li>• Faster page load times</li>
                    <li>• Better mobile experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent matters, our support team is still available during maintenance.
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

export default ServiceUnavailable;
