import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SustainablePrivateAviation = () => {
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
                  Innovation
                </span>
                <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-4">
                  The Future of Sustainable Private Aviation
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 20, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center"
                  alt="Sustainable Private Aviation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  The private aviation industry is at a pivotal moment in its evolution. As environmental consciousness grows and technology advances, sustainable private aviation is no longer a distant dream but an emerging reality that's reshaping how we think about luxury travel.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Carbon-Neutral Flight Technologies</h2>
                <p>
                  Leading aircraft manufacturers are investing heavily in sustainable aviation fuels (SAFs) and electric propulsion systems. These innovations promise to reduce carbon emissions by up to 80% compared to traditional jet fuel, making private aviation more environmentally responsible.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Electric and Hybrid Aircraft</h2>
                <p>
                  The development of electric and hybrid-electric aircraft is accelerating rapidly. Companies like Eviation and Heart Aerospace are pioneering electric aircraft that could revolutionize short-haul private travel while maintaining the luxury and convenience that discerning travelers expect.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Carbon Offset Programs</h2>
                <p>
                  Many private aviation companies are implementing comprehensive carbon offset programs, allowing clients to neutralize their flight emissions through verified environmental projects. These programs range from reforestation initiatives to renewable energy investments.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">The Path Forward</h2>
                <p>
                  As we look toward the future, sustainable private aviation represents not just an environmental imperative but a competitive advantage. Clients increasingly value companies that demonstrate environmental responsibility while maintaining the highest standards of luxury and service.
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

export default SustainablePrivateAviation;
