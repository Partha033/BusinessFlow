import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Rocket, TrendingUp, CheckCircle2, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WarpBackground from "@/components/WarpBackground";
import { motion } from "framer-motion";
import Earth from "@/components/Earth"; 

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-[#007b78] selection:text-white">
      {/* Global Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <WarpBackground speed={0.5} active={true} />
      </div>
      
      {/* Hero Section */}
      <section className="py-24 px-6 relative z-10 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
        
        {/* Globe Background Element */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
           {/* Earth pushed lower to match Contact page aesthetic */}
           <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] z-10 opacity-60 mix-blend-screen translate-y-1/4">
              <Earth 
                dark={1}
                scale={1.1}
                diffuse={1.2}
                mapBrightness={6}
                baseColor={[0.1, 0.1, 0.1]} 
                glowColor={[0, 0.48, 0.47]} 
                markerColor={[0, 0.48, 0.47]} 
                className="w-full h-full"
              />
           </div>
           {/* Gradient overlay to blend bottom of globe */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-20" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto max-w-4xl text-center space-y-6 relative z-30"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#007b78] mb-4">
             <span className="text-sm font-medium tracking-wide uppercase">The Process</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
            How We <span className="text-[#007b78]">Work</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Simple, fast, transparent. From discovery to scale in four clear phases. We've optimized every step to respect your time and budget.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 relative z-10 bg-[#99cac9]/90 m-10 rounded-t-[7rem]">
        <div className="container mx-auto max-w-5xl relative">
          
          {/* Vertical Connecting Line (Hidden on mobile) */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#007b78]/0 via-[#007b78]/50 to-[#007b78]/0 hidden md:block"></div>

          <div className="space-y-20">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={phase.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-[27px] md:left-1/2 top-0 w-14 h-14 -translate-x-1/2 flex items-center justify-center bg-black border border-[#007b78] rounded-full z-20 shadow-[0_0_20px_rgba(0,123,120,0.3)] hidden md:flex">
                    <img 
                      src="/public/Logo.png" 
                      alt="Phase Icon" 
                      className="w-8 h-8 object-contain animate-spin-slow" 
                    />
                  </div>
                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 md:px-12 ">
                     <Card className="bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#007b78]/50 transition-colors duration-300 overflow-hidden group">
                        <CardContent className="p-8">
                           <div className="flex justify-between items-start mb-6">
                             <div className="w-12 h-12 rounded-xl bg-[#007b78]/20 flex items-center justify-center text-[#007b78]">
                               <phase.icon className="w-6 h-6" />
                             </div>
                             <span className="px-3 py-1 rounded-full bg-[#007b78]/10 text-[#007b78] text-xs font-bold uppercase tracking-wider border border-[#007b78]/20">
                               {phase.duration}
                             </span>
                           </div>
                           
                           <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                           <p className="text-white/70 text-sm leading-relaxed mb-6">
                             {phase.description}
                           </p>

                           <div className="space-y-3 pt-6 border-t border-white/10">
                             {phase.activities.slice(0, 3).map((activity, i) => (
                               <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[#007b78] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-white/60">{activity}</span>
                               </div>
                             ))}
                           </div>
                        </CardContent>
                        {/* Bottom Highlight Bar */}
                        <div className="h-1 w-full bg-[#007b78] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                     </Card>
                  </div>

                  {/* Empty Side for balance (or could be an image) */}
                  <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
                     <div className="text-[120px] font-bold text-white/30 select-none leading-none">
                       {phase.number}
                     </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 px-6 bg-[#99cac9] rounded-3xl m-10 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Principles</h2>
            <p className="text-white/60 max-w-2xl mx-auto">The rules we live by to ensure quality and speed.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const [title, description] = principle.split(' - ');
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/10 border border-white/10 hover:border-[#007b78]/50 transition-colors group"
                > 
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#007b78] transition-colors">{title}</h3>
                  <p className="text-black leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#007b78]/20 to-black border border-[#007b78]/30 p-12 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#007b78]/20 rounded-full blur-[100px] -z-10"></div>
            
            <Download className="w-12 h-12 text-[#007b78] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Preparation Checklist</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Before we start, it helps to be prepared. Download our free checklist to gather everything you need for a smooth kickoff.
            </p>
            <Button size="lg" className="rounded-full bg-[#007b78] text-white hover:bg-[#006865] px-8">
              Download Free Checklist
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;