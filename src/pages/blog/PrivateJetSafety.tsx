import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetSafety = () => {
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
                  Safety
                </div>
                <h1 className="font-serif text-5xl md:text-6xl mb-6">
                  Behind the Scenes: Private Jet Operations and Safety
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Safety is the cornerstone of private aviation, with rigorous standards and protocols that often exceed those of commercial airlines. Understanding the comprehensive safety measures in place provides confidence and peace of mind for private jet travelers.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 8, 2025
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    6 min read
                  </div>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-12">
                <img 
                  src="/assets/jet-engine.jpg" 
                  alt="Private Jet Safety"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Safety is the cornerstone of private aviation, with rigorous standards and protocols that often exceed those of commercial airlines. Understanding the comprehensive safety measures in place provides confidence and peace of mind for private jet travelers.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Pilot Training and Certification</h2>
                <p>
                  Private jet pilots undergo extensive training and certification processes that often exceed commercial airline requirements. They must maintain current certifications, undergo regular medical examinations, and participate in ongoing training programs to ensure peak performance.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Aircraft Maintenance and Inspections</h2>
                <p>
                  Private aircraft are subject to rigorous maintenance schedules and inspections that ensure optimal performance and safety. Every component is regularly checked, tested, and replaced according to strict manufacturer guidelines and regulatory requirements.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Weather Monitoring and Decision Making</h2>
                <p>
                  Private jet operations include sophisticated weather monitoring systems and decision-making protocols. Pilots have access to real-time weather data and make informed decisions about flight safety, including delays or route changes when necessary.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Emergency Procedures and Equipment</h2>
                <p>
                  All private aircraft are equipped with comprehensive emergency equipment and procedures. Crew members are trained in emergency response, and aircraft are equipped with the latest safety technology to handle any situation that may arise.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Regulatory Compliance and Oversight</h2>
                <p>
                  Private aviation operates under strict regulatory oversight from aviation authorities worldwide. Operators must maintain compliance with all applicable regulations, undergo regular audits, and maintain comprehensive safety management systems.
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

export default PrivateJetSafety;
