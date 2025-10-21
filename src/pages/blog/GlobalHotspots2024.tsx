import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalHotspots2024 = () => {
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
                  Destinations
                </span>
                <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-4">
                  Global Hotspots: Where the Elite Are Flying in 2024
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 10, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    9 min read
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=center"
                  alt="Global Hotspots 2024"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  As the world continues to evolve and new destinations emerge, private jet travelers are discovering exciting new hotspots that offer unique experiences, exclusive access, and unparalleled luxury. Here are the destinations that are capturing the attention of the global elite in 2024.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Emerging Luxury Destinations</h2>
                <p>
                  From the pristine beaches of the Maldives to the cultural richness of Bhutan, emerging destinations are offering private jet travelers exclusive access to experiences that were previously inaccessible. These locations combine natural beauty with world-class hospitality and privacy.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Business Hubs and Economic Centers</h2>
                <p>
                  Traditional business destinations like London, New York, and Tokyo remain popular, but emerging economic centers in Asia, Africa, and South America are attracting increasing attention from business travelers seeking new opportunities and markets.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Wellness and Retreat Destinations</h2>
                <p>
                  Wellness-focused destinations are becoming increasingly popular among private jet travelers. From luxury wellness resorts in Costa Rica to meditation retreats in India, these destinations offer a perfect blend of relaxation, rejuvenation, and exclusive experiences.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Adventure and Exploration</h2>
                <p>
                  For those seeking adventure, destinations like Antarctica, the Galapagos Islands, and remote mountain ranges offer once-in-a-lifetime experiences that can only be accessed through private aviation. These expeditions combine luxury with exploration in the world's most remote locations.
                </p>

                <h2 className="font-serif text-2xl mt-8 mb-4">Cultural and Artistic Centers</h2>
                <p>
                  Cultural destinations continue to attract private jet travelers who seek authentic experiences and exclusive access to art, music, and cultural events. Cities like Florence, Kyoto, and Marrakech offer rich cultural experiences combined with luxury accommodations.
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

export default GlobalHotspots2024;
