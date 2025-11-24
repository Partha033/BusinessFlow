import { Code, Cpu, Megaphone, Rocket, CreditCard, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Development That Ships",
      tagline: "Great ideas die in development hell.",
      description: "Endless revisions. Missed deadlines. Code that breaks. We build differently. Modern frameworks, no-code accelerators, battle-tested architecture. Products that work—on time, on budget, ready to scale.",
      offerings: [
        "Web applications, SaaS platforms, dashboards, and portals",
        "Mobile apps for iOS and Android, progressive web apps",
        "E-commerce systems, custom storefronts, marketplace platforms",
        "API development and third-party integrations",
      ],
      approach: "Start with an MVP that proves your core concept. Iterate based on real user feedback. No feature bloat. No over-engineering. Just working software that solves real problems.",
    },
    {
      icon: Cpu,
      title: "Automation That Thinks",
      tagline: "Your team drowns in manual work.",
      description: "Data entry. Report generation. Follow-up emails. Appointment scheduling. What if all that just... happened? We design intelligent automation that eliminates busywork, reduces errors, and frees your team for high-value work.",
      offerings: [
        "Customer onboarding and renewal automation",
        "Lead qualification and intelligent routing",
        "Inventory management and order processing",
        "Custom AI workflows and chatbot integration",
      ],
      approach: "Map your current workflows. Identify bottlenecks. Build automation that actually fits how you work—not generic templates that force you to adapt.",
    },
    {
      icon: Megaphone,
      title: "Marketing That Converts",
      tagline: "Most marketing is noise.",
      description: "You spend money. You get clicks. But do you get customers? We focus on strategies that drive real revenue: targeted campaigns, conversion optimization, retention systems that turn buyers into advocates.",
      offerings: [
        "SEO and content strategy that ranks and converts",
        "Performance marketing across Google, Meta, LinkedIn",
        "Email and SMS campaigns with proven frameworks",
        "Analytics setup and conversion rate optimization",
      ],
      approach: "Test fast. Learn faster. We don't chase vanity metrics. We build systems that predictably generate revenue at acceptable customer acquisition costs.",
    },
    {
      icon: Rocket,
      title: "Product Launch Excellence",
      tagline: "Launch day is make or break.",
      description: "You've built something great. Now the world needs to know. We create go-to-market strategies that generate momentum: positioning that resonates, messaging that sticks, launch coordination that creates traction from day one.",
      offerings: [
        "Market research and competitive positioning",
        "Launch strategy and timeline coordination",
        "Press outreach and influencer partnerships",
        "Community building and early adopter programs",
      ],
      approach: "Build anticipation before launch. Create urgency during launch. Maintain momentum after launch. Launch isn't an event—it's a process.",
    },
    {
      icon: CreditCard,
      title: "Payment Systems That Work",
      tagline: "Payments should be invisible.",
      description: "When they work. Subscriptions, one-time purchases, global currencies, multiple payment methods. We build, test, and monitor payment infrastructure so your customers can pay you without friction.",
      offerings: [
        "Stripe, PayPal, and multi-gateway integration",
        "Subscription billing and usage-based pricing",
        "International payment processing and compliance",
        "Revenue recovery and dunning management",
      ],
      approach: "Security first. Performance second. Flexibility third. Your payment system should never be why you lose a customer.",
    },
    {
      icon: Headphones,
      title: "Support That Scales",
      tagline: "Bad support kills businesses.",
      description: "Even great ones. We build customer success infrastructure that scales with you: helpdesk systems, AI-powered chatbots, knowledge bases, and SOPs that keep your customers happy as you grow.",
      offerings: [
        "Helpdesk setup with ticketing and SLA management",
        "AI chatbots for instant customer support",
        "Knowledge base and self-service portals",
        "Support team training and process documentation",
      ],
      approach: "Prevent problems before they happen. Solve them fast when they do. Turn support interactions into opportunities to build loyalty.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 relative">
      <AnimatedBackground />
      
      {/* Hero */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold animate-fade-up">
            Six core services. Infinite possibilities.
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
            Whether you need one service or the full stack, BusinessFlow delivers execution that moves your business forward.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl space-y-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="hover-lift overflow-hidden animate-fade-up glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-display font-bold">{service.title}</h2>
                    <p className="text-lg text-muted-foreground italic">{service.tagline}</p>
                  </div>
                </div>
                
                <p className="text-foreground/90 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">What We Deliver</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.offerings.map((offering, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Our Approach: </span>
                    {service.approach}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary-soft">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-display font-bold">Need help choosing?</h2>
          <p className="text-lg text-muted-foreground">
            Let's talk about your project and find the right solution.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;