import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetSafety = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full">
                  Safety
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 8, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    6 min read
                  </div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Behind the Scenes: Private Jet Operations and Safety
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                An insider look at the rigorous safety standards and operational excellence in private aviation.
              </p>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=450&fit=crop&crop=center" 
                  alt="Private jet safety and operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  Private aviation operates under some of the most stringent safety standards in the industry. Behind every luxury flight is a complex web of safety protocols, maintenance procedures, and operational excellence that ensures passengers enjoy not just comfort, but absolute peace of mind.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Maintenance Excellence</h2>
                
                <p>
                  Private jets undergo more frequent and thorough maintenance than commercial aircraft. Each aircraft follows a strict maintenance schedule that includes daily inspections, routine servicing, and comprehensive overhauls. This proactive approach ensures that every flight begins with an aircraft in peak condition.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Pre-Flight Inspections</h3>
                
                <p>
                  Before every flight, pilots conduct detailed pre-flight inspections that go far beyond standard commercial procedures. These include thorough checks of all systems, fuel quality verification, weather analysis, and route planning with multiple backup options.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Crew Training and Certification</h3>
                
                <p>
                  Private jet pilots undergo rigorous training and maintain higher certification standards than commercial pilots. Many have military backgrounds or extensive experience with multiple aircraft types, ensuring they can handle any situation with expertise and calm professionalism.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Safety Technology</h2>
                
                <p>
                  Modern private jets are equipped with the latest safety technology, including advanced weather radar, terrain awareness systems, and automated safety features. These systems provide multiple layers of protection and early warning capabilities.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Weather Management</h3>
                
                <p>
                  Private aviation has the luxury of avoiding adverse weather conditions entirely. Flight planning includes detailed weather analysis, and routes are adjusted in real-time to ensure the smoothest and safest journey possible.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Operational Standards</h2>
                
                <p>
                  Every aspect of private jet operations follows strict protocols. From ground handling and security to in-flight service and emergency procedures, these standards ensure consistent excellence and safety across all aspects of the journey.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Security Protocols</h3>
                
                <p>
                  Private aviation terminals offer enhanced security with dedicated facilities, expedited screening processes, and controlled access. This not only provides convenience but also ensures the highest levels of security for passengers and crew.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Emergency Preparedness</h2>
                
                <p>
                  Every private jet operation maintains comprehensive emergency procedures and maintains constant communication with ground support. Crew members are trained in emergency response, and aircraft are equipped with the latest safety equipment and communication systems.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Human Factor</h2>
                
                <p>
                  Beyond technology and procedures, private aviation's safety record is built on the dedication and expertise of its people. From maintenance technicians to flight crews, every team member is committed to maintaining the highest standards of safety and service.
                </p>

                <p>
                  This commitment to safety excellence is what allows private aviation to offer not just luxury and convenience, but complete confidence in every aspect of the journey. When you choose private aviation, you're choosing an industry that puts safety first, every time.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Safety</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Operations</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Maintenance</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Industry</span>
              </div>
            </div>

            {/* Share Section */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
              <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivateJetSafety;
