import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { ManageriusIcon } from "./ManageriusIcon";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <ManageriusIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-serif font-semibold">Managerius</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium private aviation services for discerning travelers worldwide. 
              Experience luxury, convenience, and unmatched service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/jet-luxe" className="hover:text-primary transition-colors">Jet Luxe</Link></li>
              <li><Link to="/villiers-jets" className="hover:text-primary transition-colors">Villiers Jets</Link></li>
              <li><Link to="/fast-private-jet" className="hover:text-primary transition-colors">Fast Private Jet</Link></li>
              <li><Link to="/air-acer" className="hover:text-primary transition-colors">Air Acer</Link></li>
              <li><Link to="/private-jet-finder" className="hover:text-primary transition-colors">Private Jet Finder</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5" />
                <div>
                  <p>hello@managerius.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5" />
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p>24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <p>Los Angeles, California</p>
                  <p>Global Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 Managerius. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
