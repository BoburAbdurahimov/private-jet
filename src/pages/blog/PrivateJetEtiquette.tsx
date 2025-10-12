import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetEtiquette = () => {
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
              <div className="mb-8">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                  Travel Tips
                </span>
                <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-4">
                  The Art of Private Jet Etiquette
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 12, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=450&fit=crop&crop=center"
                  alt="Private Jet Etiquette"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Private jet travel offers unparalleled luxury and convenience, but it also comes with its own set of unwritten rules and expectations. Understanding proper etiquette ensures a smooth, enjoyable experience for everyone on board.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Boarding and Seating</h2>
                <p>
                  Arrive on time for your flight, but avoid arriving too early. The crew will be preparing the aircraft and may not be ready to receive guests. When boarding, follow the crew's guidance on seating arrangements, and always respect the designated seating plan.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Interacting with Crew</h2>
                <p>
                  Treat the crew with respect and professionalism. They are highly trained professionals dedicated to ensuring your safety and comfort. Address them by their names when possible, and always follow their safety instructions without question.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Personal Space and Privacy</h2>
                <p>
                  Respect other passengers' privacy and personal space. Avoid loud conversations or phone calls, and be mindful of noise levels. If you're traveling with business associates, maintain appropriate professional boundaries.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Dress Code and Presentation</h2>
                <p>
                  While private jets offer more flexibility than commercial flights, it's important to dress appropriately for the occasion. Business attire is typically expected for corporate flights, while leisure travel allows for more casual but still polished attire.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Technology and Connectivity</h2>
                <p>
                  Use technology respectfully and be mindful of others. Keep phone calls brief and quiet, and avoid playing music or videos without headphones. Remember that not everyone may want to engage in conversation, so respect others' preferences for quiet time.
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

export default PrivateJetEtiquette;
