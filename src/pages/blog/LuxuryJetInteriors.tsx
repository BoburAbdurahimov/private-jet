import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LuxuryJetInteriors = () => {
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
                  Luxury
                </span>
                <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-4">
                  Luxury Redefined: The Most Exclusive Private Jet Interiors
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 18, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    6 min read
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&crop=center"
                  alt="Luxury Jet Interiors"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  The world of private aviation has evolved far beyond simple transportation. Today's most exclusive private jets feature interiors that rival the finest luxury hotels and residences, creating truly bespoke environments that reflect the discerning tastes of their owners.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Bespoke Design Philosophy</h2>
                <p>
                  Leading aircraft interior designers work closely with clients to create completely custom environments. From handcrafted leather seating to rare wood veneers and precious metal accents, every element is carefully selected and meticulously crafted to create a unique flying experience.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Cutting-Edge Technology Integration</h2>
                <p>
                  Modern luxury jet interiors seamlessly integrate state-of-the-art technology with elegant design. Hidden entertainment systems, mood lighting, and climate control systems work together to create the perfect ambiance for any occasion, whether business or leisure.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Art and Craftsmanship</h2>
                <p>
                  Many private jet interiors feature original artwork, custom furniture pieces, and artisanal details that transform the aircraft into a flying gallery. These elements not only provide aesthetic pleasure but also serve as conversation pieces and status symbols.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">The Ultimate Expression of Success</h2>
                <p>
                  For those who have achieved the highest levels of success, a custom-designed private jet interior represents the ultimate expression of personal style and achievement. It's a mobile sanctuary that reflects their values, tastes, and aspirations.
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

export default LuxuryJetInteriors;
