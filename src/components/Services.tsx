import { Globe, Clock, Shield, Zap } from "lucide-react";
import { ManageriusIcon } from "./ManageriusIcon";
import jetEngine from "@/assets/jet-engine.jpg";

const services = [
  {
    icon: ManageriusIcon,
    title: "Premium Fleet",
    description: "Access our exclusive collection of the world's finest private aircraft, meticulously maintained to the highest standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Fly anywhere, anytime. Our network spans the globe with priority access to over 5,000 airports worldwide.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Around-the-clock concierge service ensures your journey is seamless from booking to landing.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Industry-leading safety protocols and certified pilots guarantee peace of mind for every flight.",
  },
];

export const Services = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Redefining luxury travel.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every detail of your journey is crafted with precision and care. From the moment you book to the second you land, experience aviation at its finest.
            </p>
          </div>
          <div className="relative h-[500px] overflow-hidden">
            <img 
              src={jetEngine} 
              alt="Private jet engine detail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 border border-border hover:border-accent transition-all duration-300"
            >
              <service.icon className="w-12 h-12 mb-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-serif font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
