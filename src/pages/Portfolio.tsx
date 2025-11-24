import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const caseStudies = [
    {
      title: "Healthcare Platform Launch",
      industry: "Healthcare",
      description: "Built and launched a telemedicine platform connecting patients with specialists. From concept to 1,000+ active users in 8 weeks.",
      metrics: [
        { label: "Time to Launch", value: "8 weeks", icon: Clock },
        { label: "Active Users", value: "1,000+", icon: Users },
        { label: "Revenue Growth", value: "300%", icon: TrendingUp },
      ],
      services: ["Development", "Launch", "Marketing"],
      challenge: "A healthcare startup needed to launch quickly in a highly regulated market while ensuring HIPAA compliance and building trust with both patients and providers.",
      solution: "We built a secure, compliant platform using modern web technologies. Implemented automated appointment scheduling, video consultations, and electronic prescriptions. Launched with targeted marketing to both patients and providers.",
      results: "Platform launched on time with full compliance. Acquired 1,000+ users in first 8 weeks. 4.8-star average rating. Now processing 200+ consultations per week.",
    },
    {
      title: "SaaS Onboarding Automation",
      industry: "SaaS",
      description: "Rebuilt onboarding flow and automated customer success processes. Reduced time-to-value by 65% and increased trial conversions by 40%.",
      metrics: [
        { label: "Time Saved", value: "65%", icon: Clock },
        { label: "Conversion Lift", value: "40%", icon: TrendingUp },
        { label: "Support Tickets", value: "-50%", icon: Users },
      ],
      services: ["Automation", "Development", "Support"],
      challenge: "A growing SaaS company struggled with complex onboarding. Users were confused, activation rates were low, and the support team was overwhelmed with basic questions.",
      solution: "We redesigned the entire onboarding experience with progressive disclosure. Built intelligent automation for account setup, integrated contextual help, and created an AI-powered chatbot for instant support.",
      results: "Onboarding time dropped from 45 minutes to 15 minutes. Trial-to-paid conversion increased 40%. Support tickets reduced by 50%. Customer satisfaction scores improved from 3.2 to 4.6.",
    },
    {
      title: "Marketplace Launch & Growth",
      industry: "E-commerce",
      description: "Launched a niche marketplace platform with integrated payments, vendor management, and marketing automation. Scaled to $500K GMV in 6 months.",
      metrics: [
        { label: "Time to Market", value: "12 weeks", icon: Clock },
        { label: "GMV (6 months)", value: "$500K", icon: TrendingUp },
        { label: "Active Vendors", value: "150+", icon: Users },
      ],
      services: ["Development", "Payments", "Marketing", "Launch"],
      challenge: "An entrepreneur wanted to launch a curated marketplace for artisan products but lacked technical expertise and didn't know where to start with payments, vendor management, or marketing.",
      solution: "We built a full marketplace platform with vendor onboarding, product management, integrated Stripe payments, automated commissions, and launched with a targeted influencer marketing campaign.",
      results: "Launched in 12 weeks with 50 vendors. Grew to 150+ vendors and $500K GMV in 6 months. 92% vendor satisfaction. Featured in major lifestyle publications.",
    },
  ];

  const industries = ["All", "Healthcare", "SaaS", "E-commerce"];

  const filteredCases = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === filter);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold animate-fade-up">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
            Real projects. Real results. From startups to established brands.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={filter === industry ? "default" : "outline"}
                onClick={() => setFilter(industry)}
                className="rounded-full"
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-5xl space-y-12">
          {filteredCases.map((study, index) => (
            <Card 
              key={study.title}
              className="hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 md:p-12 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                    {study.services.map((service) => (
                      <Badge key={service} variant="outline">{service}</Badge>
                    ))}
                  </div>
                  <h2 className="text-3xl font-display font-bold">{study.title}</h2>
                  <p className="text-lg text-muted-foreground">{study.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid md:grid-cols-3 gap-6 py-6 border-y border-border">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center space-y-2">
                      <metric.icon className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-3xl font-display font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Challenge</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Solution</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Results</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.results}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary-soft">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-display font-bold">Want results like these?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your project and create your success story.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href="/contact">Book Your Free Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;