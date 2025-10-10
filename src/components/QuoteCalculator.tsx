import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Calendar as CalendarIcon, Plane, MapPin, Users, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface QuoteData {
  departure: string;
  destination: string;
  passengers: string;
  aircraftType: string;
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  tripType: string;
}

const aircraftTypes = [
  { value: "light-jet", label: "Light Jet", basePrice: 5000, range: "1,500 miles" },
  { value: "midsize-jet", label: "Midsize Jet", basePrice: 8000, range: "2,500 miles" },
  { value: "heavy-jet", label: "Heavy Jet", basePrice: 12000, range: "6,000+ miles" },
  { value: "ultra-long-range", label: "Ultra Long Range", basePrice: 15000, range: "8,000+ miles" },
];

const popularDestinations = [
  "New York, NY", "Los Angeles, CA", "Miami, FL", "Las Vegas, NV",
  "Chicago, IL", "London, UK", "Paris, France", "Tokyo, Japan",
  "Dubai, UAE", "Monaco", "Aspen, CO", "Nantucket, MA"
];

export const QuoteCalculator = () => {
  const { toast } = useToast();
  const [quoteData, setQuoteData] = useState<QuoteData>({
    departure: "",
    destination: "",
    passengers: "",
    aircraftType: "",
    departureDate: undefined,
    returnDate: undefined,
    tripType: "one-way"
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [quote, setQuote] = useState<number | null>(null);

  const selectedAircraft = aircraftTypes.find(a => a.value === quoteData.aircraftType);

  const calculateQuote = async () => {
    if (!quoteData.departure || !quoteData.destination || !quoteData.aircraftType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate API call
    setTimeout(() => {
      const basePrice = selectedAircraft?.basePrice || 5000;
      const passengerMultiplier = parseInt(quoteData.passengers) > 8 ? 1.2 : 1;
      const tripMultiplier = quoteData.tripType === "round-trip" ? 1.8 : 1;
      const estimatedQuote = Math.round(basePrice * passengerMultiplier * tripMultiplier);
      
      setQuote(estimatedQuote);
      setIsCalculating(false);
      
      toast({
        title: "Quote Generated!",
        description: "Your personalized quote is ready.",
      });
    }, 2000);
  };

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Instant Quote
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Get Your Personalized Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Receive an instant estimate for your private jet charter. No commitment required.
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-primary" />
                Flight Details
              </CardTitle>
              <CardDescription>
                Enter your travel preferences to receive an instant quote
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Departure City
                  </label>
                  <Select value={quoteData.departure} onValueChange={(value) => 
                    setQuoteData(prev => ({ ...prev, departure: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select departure city" />
                    </SelectTrigger>
                    <SelectContent>
                      {popularDestinations.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Destination City
                  </label>
                  <Select value={quoteData.destination} onValueChange={(value) => 
                    setQuoteData(prev => ({ ...prev, destination: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination city" />
                    </SelectTrigger>
                    <SelectContent>
                      {popularDestinations.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Passengers
                  </label>
                  <Select value={quoteData.passengers} onValueChange={(value) => 
                    setQuoteData(prev => ({ ...prev, passengers: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Number of passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>{num} passenger{num > 1 ? 's' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    Aircraft Type
                  </label>
                  <Select value={quoteData.aircraftType} onValueChange={(value) => 
                    setQuoteData(prev => ({ ...prev, aircraftType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select aircraft type" />
                    </SelectTrigger>
                    <SelectContent>
                      {aircraftTypes.map((aircraft) => (
                        <SelectItem key={aircraft.value} value={aircraft.value}>
                          {aircraft.label} - {aircraft.range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Trip Type
                  </label>
                  <Select value={quoteData.tripType} onValueChange={(value) => 
                    setQuoteData(prev => ({ ...prev, tripType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-way">One Way</SelectItem>
                      <SelectItem value="round-trip">Round Trip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Departure Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !quoteData.departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {quoteData.departureDate ? format(quoteData.departureDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={quoteData.departureDate}
                        onSelect={(date) => setQuoteData(prev => ({ ...prev, departureDate: date }))}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {quoteData.tripType === "round-trip" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Return Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !quoteData.returnDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {quoteData.returnDate ? format(quoteData.returnDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={quoteData.returnDate}
                          onSelect={(date) => setQuoteData(prev => ({ ...prev, returnDate: date }))}
                          disabled={(date) => date < (quoteData.departureDate || new Date())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
              </div>

              <Button 
                onClick={calculateQuote} 
                className="w-full" 
                size="lg"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4 mr-2" />
                    Get Instant Quote
                  </>
                )}
              </Button>

              {quote && (
                <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="font-serif text-xl mb-2">Estimated Quote</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">${quote.toLocaleString()}</span>
                    <span className="text-muted-foreground">starting price</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    *This is an estimated quote. Final pricing may vary based on specific requirements, fuel costs, and availability.
                  </p>
                  <Button className="mt-4" variant="hero">
                    Book This Flight
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
