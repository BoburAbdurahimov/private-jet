import React from 'react';
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, RefreshCw, AlertTriangle, ArrowLeft } from "lucide-react";

interface ErrorPageProps {
  errorCode: string;
  title: string;
  description: string;
  details?: string;
  showRefresh?: boolean;
  showBack?: boolean;
  customActions?: React.ReactNode;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  title,
  description,
  details,
  showRefresh = true,
  showBack = true,
  customActions
}) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-red-100 rounded-full mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-8xl font-bold text-gray-800 mb-4">{errorCode}</h1>
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">{title}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            </div>

            {/* Error Details */}
            {details && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What happened?</h3>
                <p className="text-gray-600">{details}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {showRefresh && (
                <button 
                  onClick={handleRefresh}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
              )}
              
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
              
              {showBack && (
                <button 
                  onClick={handleGoBack}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </button>
              )}
              
              {customActions}
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

export default ErrorPage;
