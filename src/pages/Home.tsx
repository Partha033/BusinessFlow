import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import WarpBackground from "@/components/WarpBackground"; 
import { Code, Cpu, Megaphone, Rocket, CreditCard, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  // --- ANIMATION STATE ---
  // 0 = Initial Dashboard View
  // 1 = Zoom Out / Warp Speed Start
  // 2 = Final Text Reveal (Animation Finished)
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 1. Wait 2s, then trigger the zoom/warp
    const timer1 = setTimeout(() => setPhase(1), 2000);
    
    // 2. Wait another 1.5s (while warping), then show final text
    const timer2 = setTimeout(() => setPhase(2), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const services = [
    { icon: Code, title: "Development", description: "Web apps, mobile solutions, no-code platforms. Beautiful interfaces. Systems that don't break." },
    { icon: Cpu, title: "Automation", description: "AI-powered workflows that eliminate busywork. Connect your tools. Free your team for real work." },
    { icon: Megaphone, title: "Marketing", description: "Growth strategies that work. We turn attention into revenue—not vanity metrics." },
    { icon: Rocket, title: "Product Launch", description: "Go-to-market plans that create momentum. Positioning, messaging, coordination, traction." },
    { icon: CreditCard, title: "Payment Integration", description: "Payment systems that just work. Subscriptions, one-time, global currencies. Configured, tested, monitored." },
    { icon: Headphones, title: "Support Systems", description: "Customer success infrastructure that scales. Helpdesks, chatbots, SOPs. Keep customers happy." },
  ];

  const benefits = [
    "End-to-End Execution - From first wireframe to thousandth customer. No handoffs. One team owns your success.",
    "Speed Without Compromise - We launch MVPs in weeks. Fast doesn't mean sloppy. It means smart.",
    "Global Quality, Smart Pricing - World-class work without Valley rates. Same excellence everywhere.",
  ];

  return (
    // We lock scrolling (overflow-hidden) until phase 2 is reached
    <div className={`min-h-screen relative bg-background ${phase < 2 ? 'h-screen overflow-hidden' : 'overflow-auto'}`}>
      
      {/* --- BACKGROUND WARP EFFECT (Persistent) --- */}
      <div className="absolute inset-0 z-0 h-screen via-background top-0 pointer-events-none">
        <WarpBackground 
          speed={phase === 1 ? 40 : phase === 2 ? 2 : 0} 
          active={phase >= 1} 
        />
        {/* GREEN GRADIENT OVERLAY (Primary) */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/60 via-background to-primary-soft/60 -z-10 " /> */}
        {/* If #006865 is your 'primary' color */}
<div className="absolute inset-0 bg-gradient-to-br from-[#81daca]/60 via-background to-[#81daca]/50 -z-10" />
      </div>

      {/* --- HERO SECTION CONTAINER (First Image Area) --- */}
      <div className="relative z-10">
        
        {/* This section is 100vh to hold the animation perfectly in center */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
          
          <AnimatePresence mode="wait">
            
          

            {/* PHASE 2: The Final Hero Text (Reveals after warp) */}
            {phase === 2 && (
              <motion.div
                key="hero-content"
                className="container mx-auto max-w-4xl text-center space-y-8"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl text-primary font-medium tracking-tight text-[#006865]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  A World beyond Videos.
                </motion.h2>

                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground text-balance">
                  Your Imagination,{" "}
                  {/* Green Gradient for Engineered */}
                  <span className="inline-block text-[#006865]">
                    {Array.from("Engineered.").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.08, type: "spring" }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                   All under one roof. From idea to revenue in weeks.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 }}
                >
                  <Button asChild size="lg" className="rounded-full bg-[#007b78] text-primary-foreground hover:bg-primary/90 text-base px-8 shadow-shadow-glow transition-smooth">
                    <Link to="/contact">Book Your Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 text-primary hover:bg-primary-soft text-base px-8 transition-smooth">
                    <Link to="/how-we-work">See How We Work</Link>
                  </Button>
                </motion.div>

                {/* Scroll Indicator (Green) */}
                <motion.div 
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 1 }}
                >
                  {/* <ArrowRight className="w-6 h-6 rotate-90 animate-bounce" /> */}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* --- REST OF THE PAGE CONTENT --- */}
        <div className="bg-background relative rounded-t-[3rem] -mt-10 pt-20 shadow-shadow-soft border-t border-white">
          
          {/* Problem Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
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
          <section className="py-20 px-6 bg-muted/40">
            <div className="container mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Why BusinessFlow</h2>
                <p className="text-xl text-primary font-semibold">One Team. Complete Ownership. Lightning Fast.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => {
                  const [title, description] = benefit.split(' - ');
                  return (
                    <div 
                      key={index}
                      className="space-y-3 animate-fade-up"
                    >
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 px-6 relative overflow-hidden">
            {/* Green gradient glow in background */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto relative z-10">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">What We Do</h2>
                <p className="text-xl text-muted-foreground">Everything you need to go from zero to market.</p>
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
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary-soft text-primary hover:text-primary-glow">
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
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">How We Work</h2>
                <p className="text-xl text-muted-foreground">Simple, Fast, Transparent</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { num: "01", title: "Discovery", desc: "Understand your vision, customers, goals. One intensive session." },
                  { num: "02", title: "Blueprint", desc: "Complete roadmap with timelines within 48 hours." },
                  { num: "03", title: "Build & Launch", desc: "Weekly updates. Constant feedback. Rapid iteration." },
                  { num: "04", title: "Scale", desc: "Optimize, automate, grow alongside you." },
                ].map((step, index) => (
                  <div key={step.num} className="space-y-3">
                    <div className="text-4xl font-display font-bold text-primary/30">{step.num}</div>
                    <h3 className="text-xl font-display font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary-soft text-primary hover:text-primary-glow">
                  <Link to="/how-we-work">
                    Learn Our Process 
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-6 bg-primary-soft/50">
            <div className="container mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Ready to move fast?</h2>
              <p className="text-lg text-muted-foreground">
                Book a 30-minute consultation. No sales pressure. Just honest conversation about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 shadow-shadow-glow">
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
      </div>
    </div>
  );
};

export default Home;