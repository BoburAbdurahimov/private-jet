import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home, AlertTriangle, RefreshCw, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
          <Navigation />
          
          <main className="pt-32 pb-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                {/* Error Illustration */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-red-100 rounded-full mb-6">
                    <Bug className="w-16 h-16 text-red-600" />
                  </div>
                  <h1 className="text-8xl font-bold text-gray-800 mb-4">Oops!</h1>
                  <h2 className="text-3xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    We encountered an unexpected error. Our team has been notified and is working to fix this issue.
                  </p>
                </div>

                {/* Error Details */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                    Application Error
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The application encountered an unexpected error and couldn't continue.
                  </p>
                  
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg text-left">
                      <h4 className="font-semibold text-gray-800 mb-2">Error Details (Development):</h4>
                      <pre className="text-xs text-gray-600 overflow-auto">
                        {this.state.error.toString()}
                        {this.state.errorInfo?.componentStack}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={this.handleReset}
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

                {/* Contact Information */}
                <div className="mt-12">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                      If this error persists, please contact our support team with the error details.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="mailto:support@managerius.com" 
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Report Error
                      </a>
                      <a 
                        href="tel:+1-800-MANAGERIUS" 
                        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Home className="w-4 h-4 mr-2" />
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
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
