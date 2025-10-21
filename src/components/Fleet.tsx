import jetInterior from "@/assets/jet-interior.jpg";

const aircraft = [
  {
    name: "Light Jets",
    description: "Perfect for short trips and small groups",
    passengers: "6-8",
    range: "1,500 miles",
  },
  {
    name: "Midsize Jets",
    description: "Ideal balance of space and efficiency",
    passengers: "8-10",
    range: "2,500 miles",
  },
  {
    name: "Heavy Jets",
    description: "Ultimate luxury for long-haul flights",
    passengers: "12-16",
    range: "6,000+ miles",
  },
];

export const Fleet = () => {
  return (
    <section id="fleet" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated selection of aircraft, each offering unmatched comfort and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aircraft.map((jet, index) => (
            <div 
              key={index}
              className="group bg-background border border-border p-8 hover:border-accent transition-all duration-300"
            >
              <h3 className="text-3xl font-serif font-semibold mb-4">{jet.name}</h3>
              <p className="text-muted-foreground mb-6">{jet.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Passengers</span>
                  <span className="font-medium">{jet.passengers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Range</span>
                  <span className="font-medium">{jet.range}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <img 
            src={jetInterior} 
            alt="Luxury jet interior" 
            width={1200}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
            <div className="p-12">
              <h3 className="text-4xl font-serif font-bold mb-4">
                Crafted for comfort
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl">
                Every interior is meticulously designed with premium materials and cutting-edge amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
