import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessAviationTrends = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <article className="prose prose-lg max-w-none">
              {/* Header Section */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" />
                  Business
                </div>
                <h1 className="font-serif text-5xl md:text-6xl mb-6">
                  Business Aviation Trends: What Executives Need to Know
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Stay ahead of the curve with the latest trends shaping business aviation. From sustainability initiatives to technological innovations, discover what's driving the future of executive travel.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 15, 2025
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    7 min read
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop&crop=center"
                  alt="Business Aviation Trends"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  The business aviation landscape is rapidly evolving, driven by changing work patterns, technological advancements, and shifting corporate priorities. Understanding these trends is crucial for executives who rely on private aviation for their business operations.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">The Rise of Fractional Ownership</h2>
                <p>
                  Fractional ownership programs are becoming increasingly popular among business leaders who want the benefits of private aviation without the full commitment of aircraft ownership. These programs offer flexibility, cost predictability, and access to diverse aircraft types.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Technology-Enhanced Productivity</h2>
                <p>
                  Modern business aircraft are equipped with advanced connectivity solutions, allowing executives to maintain full productivity while in flight. High-speed internet, video conferencing capabilities, and secure communication systems have transformed business aviation into a mobile office.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Sustainability as a Business Imperative</h2>
                <p>
                  Corporate sustainability goals are driving demand for eco-friendly aviation solutions. Companies are increasingly choosing operators that offer carbon offset programs and sustainable aviation fuels, aligning their travel with their environmental commitments.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Flexible Booking and On-Demand Services</h2>
                <p>
                  The traditional model of booking flights weeks in advance is giving way to more flexible, on-demand services. Technology platforms now allow for last-minute bookings and real-time flight tracking, providing unprecedented convenience for busy executives.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessAviationTrends;
