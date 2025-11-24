import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    budget: "",
    message: "",
  });

  const services = [
    "Development",
    "Automation",
    "Marketing",
    "Product Launch",
    "Payment Integration",
    "Support Systems",
  ];

  const budgets = [
    "Under $10K",
    "$10K - $25K",
    "$25K - $50K",
    "$50K - $100K",
    "Over $100K",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      services: [],
      budget: "",
      message: "",
    });
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects launch in 2-8 weeks, depending on scope. We provide a detailed timeline in the Blueprint phase.",
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely. We've helped dozens of startups go from idea to launch. We understand moving fast on limited budgets.",
    },
    {
      question: "What if I only need one service?",
      answer: "No problem. While we excel at end-to-end execution, we're happy to help with individual services too.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes. Many clients stay with us in the Scale phase for ongoing optimization, feature development, and growth support.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold animate-fade-up">
            Let's Talk
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
            Book a free 30-minute consultation. No sales pressure. Just honest conversation about your project.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Project Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Services You're Interested In *</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Project *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What are you looking to build? What's your timeline? Any specific challenges you're facing?"
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Your Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alternative Contact */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">Email Us Directly</h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer email? Reach out anytime.
                  </p>
                  <a 
                    href="mailto:hello@businessflow.com" 
                    className="text-sm font-medium text-primary hover:underline inline-block"
                  >
                    hello@businessflow.com
                  </a>
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary-soft flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold">Book a Call</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a 30-minute call at your convenience.
                  </p>
                  <Button variant="outline" className="w-full rounded-full" size="sm">
                    View Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-primary-soft border-0">
              <CardContent className="p-6 text-center space-y-2">
                <MessageSquare className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-display font-semibold">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours on business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-display font-semibold">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;