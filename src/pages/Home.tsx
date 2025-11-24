import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Code, Cpu, Megaphone, Rocket, CreditCard, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Development",
      description: "Web apps, mobile solutions, no-code platforms. Beautiful interfaces. Systems that don't break.",
    },
    {
      icon: Cpu,
      title: "Automation",
      description: "AI-powered workflows that eliminate busywork. Connect your tools. Free your team for real work.",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Growth strategies that work. We turn attention into revenue—not vanity metrics.",
    },
    {
      icon: Rocket,
      title: "Product Launch",
      description: "Go-to-market plans that create momentum. Positioning, messaging, coordination, traction.",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Payment systems that just work. Subscriptions, one-time, global currencies. Configured, tested, monitored.",
    },
    {
      icon: Headphones,
      title: "Support Systems",
      description: "Customer success infrastructure that scales. Helpdesks, chatbots, SOPs. Keep customers happy.",
    },
  ];

  const benefits = [
    "End-to-End Execution - From first wireframe to thousandth customer. No handoffs. One team owns your success.",
    "Speed Without Compromise - We launch MVPs in weeks. Fast doesn't mean sloppy. It means smart.",
    "Global Quality, Smart Pricing - World-class work without Valley rates. Same excellence everywhere.",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-60 animate-float" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-balance">
              Build. Automate. Launch. Scale.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium text-balance">
              All under one roof.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From idea to revenue in weeks, not months. BusinessFlow handles development, automation, marketing, payments, and support. You focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="rounded-full text-base px-8">
                <Link to="/contact">Book Your Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8">
                <Link to="/how-we-work">See How We Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Building a business shouldn't require managing five different agencies.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You hire developers. Then marketers. Then automation experts. Then payment specialists.
            Each handoff wastes time. Creates miscommunication. Delays your launch.
          </p>
          <p className="text-xl font-semibold text-primary">
            What if one team did it all?
          </p>
        </div>
      </section>

      {/* Why BusinessFlow */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Why BusinessFlow</h2>
            <p className="text-xl text-primary font-semibold">One Team. Complete Ownership. Lightning Fast.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const [title, description] = benefit.split(' - ');
              return (
                <div 
                  key={index}
                  className="space-y-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-display font-semibold">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">What We Do</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to go from zero to market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">How We Work</h2>
            <p className="text-xl text-muted-foreground">Simple, Fast, Transparent</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Understand your vision, customers, goals. One intensive session." },
              { num: "02", title: "Blueprint", desc: "Complete roadmap with timelines within 48 hours." },
              { num: "03", title: "Build & Launch", desc: "Weekly updates. Constant feedback. Rapid iteration." },
              { num: "04", title: "Scale", desc: "Optimize, automate, grow alongside you." },
            ].map((step, index) => (
              <div 
                key={step.num}
                className="space-y-3 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-display font-bold text-primary/30">{step.num}</div>
                <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/how-we-work">
                Learn Our Process <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary-soft">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Ready to move fast?</h2>
          <p className="text-lg text-muted-foreground">
            Book a 30-minute consultation. No sales pressure. Just honest conversation about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full text-base px-8">
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Or email us at{" "}
            <a href="mailto:hello@businessflow.com" className="text-primary hover:underline font-medium">
              hello@businessflow.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;