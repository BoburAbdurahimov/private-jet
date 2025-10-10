import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const SustainablePrivateAviation = () => {
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
                  Innovation
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                The Future of Sustainable Private Aviation
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Exploring eco-friendly innovations in private jet technology and carbon-neutral flight solutions that are revolutionizing the industry.
              </p>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center" 
                  alt="Sustainable private aviation"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  The private aviation industry is at a pivotal moment in its evolution. As environmental consciousness grows and regulatory pressures mount, the sector is embracing innovative technologies and sustainable practices that promise to revolutionize how we think about luxury air travel.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Current Landscape</h2>
                
                <p>
                  Traditional private jets, while offering unparalleled convenience and luxury, have faced criticism for their environmental impact. The industry has responded with unprecedented innovation, developing solutions that maintain the premium experience while dramatically reducing carbon footprints.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Electric Aviation Breakthroughs</h3>
                
                <p>
                  Leading manufacturers are investing heavily in electric and hybrid-electric propulsion systems. These technologies promise to deliver the same performance standards while eliminating direct emissions during flight. Companies like Eviation and Lilium are pioneering fully electric aircraft that could revolutionize short-haul private travel.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Sustainable Aviation Fuels (SAF)</h3>
                
                <p>
                  One of the most immediate solutions being adopted across the industry is Sustainable Aviation Fuel (SAF). Made from renewable sources like waste oils and agricultural residues, SAF can reduce lifecycle carbon emissions by up to 80% compared to conventional jet fuel, while being fully compatible with existing aircraft.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Carbon Offset Programs</h2>
                
                <p>
                  Many private aviation companies are implementing comprehensive carbon offset programs. These initiatives calculate the exact carbon footprint of each flight and invest in verified projects that remove or prevent equivalent amounts of CO2 from the atmosphere, making flights carbon-neutral.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Future Outlook</h2>
                
                <p>
                  Looking ahead, the industry is exploring hydrogen fuel cells, advanced battery technologies, and even hybrid systems that combine multiple sustainable power sources. These innovations promise to maintain the luxury and performance standards that private aviation clients expect while achieving true environmental sustainability.
                </p>

                <p>
                  The transformation is not just technological—it's cultural. Private aviation is evolving to become a leader in sustainable luxury travel, proving that environmental responsibility and premium service can coexist harmoniously.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Sustainability</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Innovation</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Green Aviation</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Future Technology</span>
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

export default SustainablePrivateAviation;
