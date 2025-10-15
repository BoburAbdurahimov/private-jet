import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ManageriusIcon } from "./ManageriusIcon";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
            <ManageriusIcon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-serif font-semibold">Managerius</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              to={item.href} 
              className="text-sm hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a href="https://privatejetfinder.com" className="cta-track">
            <Button variant="hero" size="default">
              Book a demo
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                    <ManageriusIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg font-serif font-semibold">Managerius</span>
                </div>
                
                {navItems.map((item) => (
                  <Link 
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <a href="https://privatejetfinder.com" className="cta-track" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="hero" size="lg" className="mt-6">
                    Book a demo
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
