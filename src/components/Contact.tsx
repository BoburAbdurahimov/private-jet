import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { ManageriusIcon } from "./ManageriusIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// Removed EmailJS import

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using Nodemailer API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          message: data.message,
        }),
      });

      // Check if response is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      // Try to parse JSON response
      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('JSON Parse Error:', jsonError);
        throw new Error('Invalid response from server');
      }

      if (!result.success) {
        throw new Error(result.error || 'Failed to send email');
      }
      
      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setIsSubmitted(true);
      reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
      
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Let's take flight.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to experience luxury aviation? Contact our team to book your next journey or learn more about our services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@managerius.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+19295674215</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">63 N. Burritt Ave Room 100 East Buffalo, WY 82834 United States</p>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h3 className="font-serif text-xl mb-4">Quick Response Guarantee</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Response within 2 hours during business hours</li>
                <li>• 24/7 emergency charter assistance</li>
                <li>• Free consultation and quote</li>
                <li>• Personalized service recommendations</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary border border-border p-8 rounded-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input 
                    {...register("name")}
                    placeholder="Full Name" 
                    className="bg-background border-border"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Input 
                    {...register("email")}
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-background border-border"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Input 
                    {...register("phone")}
                    placeholder="Phone Number" 
                    className="bg-background border-border"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Select value={serviceType} onValueChange={(value) => setValue("serviceType", value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private-charter">Private Charter</SelectItem>
                      <SelectItem value="business-aviation">Business Aviation</SelectItem>
                      <SelectItem value="leisure-travel">Leisure Travel</SelectItem>
                      <SelectItem value="group-travel">Group Travel</SelectItem>
                      <SelectItem value="fractional-ownership">Fractional Ownership</SelectItem>
                      <SelectItem value="jet-card">Jet Card Program</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-sm text-red-500 mt-1">{errors.serviceType.message}</p>
                  )}
                </div>
                
                <div>
                  <Textarea 
                    {...register("message")}
                    placeholder="Tell us about your travel plans, dates, destinations, and any special requirements..." 
                    className="bg-background border-border min-h-[150px]"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="hero" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
