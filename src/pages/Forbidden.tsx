import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, Lock, Shield, AlertTriangle, Plane } from "lucide-react";

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* 403 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-red-100 rounded-full mb-6">
                <Lock className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">403</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Access Forbidden</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                You don't have permission to access this resource. This area is restricted to authorized users only.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 mr-2 text-red-600" />
                Access Restricted
              </h3>
              <p className="text-gray-600 mb-4">
                This page or resource is protected and requires proper authorization to access.
              </p>
              <div className="text-sm text-gray-500">
                <p>• You may need to log in with proper credentials</p>
                <p>• This resource may be restricted to certain user types</p>
                <p>• Contact an administrator if you believe this is an error</p>
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
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Plane className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </div>

            {/* Authentication Options */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Need Access?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-blue-600" />
                    Already Have an Account?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    If you have an account, please log in to access this resource.
                  </p>
                  <Link 
                    to="/admin/login" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Log In
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Need Authorization?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact our support team to request access to this resource.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Request Access
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Support</h3>
                <p className="text-gray-600 mb-4">
                  If you believe you should have access to this resource, please contact our support team.
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
                    <Shield className="w-4 h-4 mr-2" />
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

export default Forbidden;
