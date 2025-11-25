import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Rocket, TrendingUp, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import WarpBackground from "@/components/WarpBackground";

const HowWeWork = () => {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      duration: "1 Day",
      description: "We don't start by building. We start by understanding. One intensive discovery session where we dive deep into your vision, your customers, your goals, and your constraints.",
      activities: [
        "Business model and revenue strategy discussion",
        "Target customer and market analysis",
        "Technical requirements and constraints mapping",
        "Success metrics and KPI definition",
      ],
      deliverable: "Clear project scope and shared understanding",
    },
    {
      number: "02",
      icon: FileText,
      title: "Blueprint",
      duration: "48 Hours",
      description: "Within 48 hours, you get a complete roadmap. Detailed breakdown of phases, timelines, deliverables, and costs. No surprises. No scope creep. Just clarity.",
      activities: [
        "Detailed project roadmap with milestones",
        "Technical architecture and stack decisions",
        "Design direction and brand guidelines",
        "Resource allocation and timeline commitments",
      ],
      deliverable: "Comprehensive project blueprint document",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Build & Launch",
      duration: "2-8 Weeks",
      description: "This is where we move fast. Weekly check-ins. Constant feedback loops. Rapid iteration. You see progress every week, not every quarter.",
      activities: [
        "Agile development with weekly sprint reviews",
        "Continuous testing and quality assurance",
        "Design implementation and refinement",
        "Integration of all systems and services",
      ],
      deliverable: "Fully functional product ready for market",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Scale",
      duration: "Ongoing",
      description: "Launch is just the beginning. We monitor performance, gather user feedback, identify optimization opportunities, and help you grow.",
      activities: [
        "Performance monitoring and optimization",
        "User feedback analysis and feature planning",
        "Marketing and growth strategy execution",
        "Technical infrastructure scaling",
      ],
      deliverable: "Continuous improvement and growth support",
    },
  ];

  const principles = [
    "Transparent Communication - No jargon. No hiding behind technical complexity. Plain language updates.",
    "Speed Without Sloppiness - Fast doesn't mean careless. We move quickly because we know what we're doing.",
    "Your Success Is Our Success - We don't just deliver and disappear. We're invested in your growth.",
    "No Surprises - Fixed timelines. Clear deliverables. Predictable costs.",
  ];

  return (
    <div className="min-h-screen pt-24 relative">
      {/* <AnimatedBackground /> */}
      <WarpBackground speed={1} active={true} />

      {/* Hero */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold animate-fade-up">
            Our Process
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
            Simple, fast, transparent. From discovery to scale in four clear phases.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <Card 
                key={phase.number}
                className="hover-lift animate-fade-up glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-[auto,1fr] gap-8">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-6xl font-display font-bold text-primary/20">{phase.number}</div>
                      <div className="w-16 h-16 rounded-2xl bg-primary-soft flex items-center justify-center">
                        <phase.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm font-semibold text-primary">{phase.duration}</div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-display font-bold mb-2">{phase.title}</h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                          Key Activities
                        </h3>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm">
                          <span className="font-semibold text-foreground">You Get: </span>
                          <span className="text-muted-foreground">{phase.deliverable}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Our Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const [title, description] = principle.split(' - ');
              return (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-2xl space-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-display font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloadable Checklist CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-primary-soft border-0 glass-effect">
            <CardContent className="p-12 text-center space-y-6">
              <Download className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-display font-bold">Get Our Project Preparation Checklist</h2>
              <p className="text-muted-foreground">
                Download our free checklist to prepare for your project kickoff. Everything you need to know before we start working together.
              </p>
              <Button size="lg" className="rounded-full">
                Download Free Checklist
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary-soft">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-display font-bold">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground">
            Book a free consultation and let's map out your project together.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href="/contact">Book Your Free Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;