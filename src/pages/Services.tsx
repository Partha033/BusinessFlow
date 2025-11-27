import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import WarpBackground from "@/components/WarpBackground";
import { 
  Code, Cpu, Megaphone, Rocket, CreditCard, Headphones, 
  CheckCircle2, ArrowRight, Zap, Globe, BarChart3, Feather
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- NEW COMPONENT: ANIMATED INTRO CARD ---
const AnimatedIntroCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }} // Lifts up on hover
      className="group p-10 bg-slate-50/50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#007b78]/10 hover:border-[#007b78]/20"
    >
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#007b78] mb-6 shadow-sm group-hover:bg-[#007b78] group-hover:text-white group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-display font-bold text-xl mb-3 text-slate-900 group-hover:text-[#007b78] transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

// --- REUSABLE COMPONENT: ZIG-ZAG SERVICE SECTION ---
const ServiceSection = ({ service, index, headerOffsetPx = 92 }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      // --- ID ADDED HERE FOR NAVIGATION ---
      id={service.slug} 
      // ensure scroll margin top avoids sticky header
      style={{ scrollMarginTop: `${headerOffsetPx}px` }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 py-24 border-b border-slate-100 last:border-0`}
    >
      {/* --- TEXT SIDE --- */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#007b78]/10 flex items-center justify-center text-[#007b78]">
            <service.icon className="w-5 h-5" />
          </div>
          <span className="text-[#007b78] font-bold tracking-widest uppercase text-xs">
            Service {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
          {service.title}
        </h2>
        
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          {service.description}
        </p>

        <div className="pt-4 space-y-3">
          {service.offerings && service.offerings.slice(0, 3).map((offering, idx) => (
             <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#007b78]" />
                <span className="text-slate-700 text-sm font-medium">{offering}</span>
             </div>
          ))}
        </div>

        <div className="pt-6">
          <Button variant="link" className="text-[#007b78] p-0 font-bold text-lg hover:text-[#005a58] group">
            Explore {service.title} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* --- IMAGE SIDE --- */}
      <motion.div 
        className="flex-1 w-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 border-[3px] border-white/20 rounded-[2.5rem] z-20 pointer-events-none"></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#007b78]/20 group-hover:bg-[#007b78]/40 transition-colors duration-500 z-10"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesPage = () => {
  // 1. Hooks for Location and Scrolling
  const { pathname, hash } = useLocation();
  
  // 2. Scroll Logic: Handles both Top Scroll and Hash Scroll
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace('#', '');
    const maxAttempts = 30;
    let attempts = 0;

    // dynamic header offset: if you have a header element, use its height
    const computeHeaderOffset = () => {
      const headerEl = document.querySelector("header"); // change selector if your header differs
      return headerEl ? headerEl.offsetHeight : 92; // fallback to 92px
    };

    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = computeHeaderOffset();
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(elementPosition - headerOffset, 0);

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        setTimeout(scrollToElement, 80);
      } else {
        const fallback = document.getElementById(id);
        if (fallback) fallback.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    setTimeout(scrollToElement, 100);
    return () => {};
  }, [pathname, hash]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // --- DATA ---
  const services = [
    { 
      icon: Code, 
      title: "Development", 
      slug: "development",
      description: "Web apps, mobile solutions, no-code platforms. Beautiful interfaces. Systems that don't break. We engineer robust digital assets ready for scale.",
      image: "https://i.pinimg.com/736x/f7/f2/89/f7f2893e1b0890c36285e48b6dde0cf9.jpg",
      offerings: ["Custom Web Applications", "Mobile App Development", "Scalable Architecture"]
    },
    { 
      icon: Cpu, 
      title: "Automation", 
      slug: "automation",
      description: "AI-powered workflows that eliminate busywork. Connect your tools. Free your team for real work. We identify bottlenecks and deploy intelligent agents.",
      image: "https://i.pinimg.com/736x/ae/ad/fa/aeadfabf235a94b7a68a6f0fed7c9daf.jpg",
      offerings: ["Workflow Automation", "AI Integration", "Data Processing"]
    },
    { 
      icon: Megaphone, 
      title: "Marketing", 
      slug: "marketing",
      description: "Growth strategies that work. We turn attention into revenue—not vanity metrics. From acquisition to retention, we build the full funnel.",
      image: "https://i.pinimg.com/1200x/37/e1/89/37e189e31d55b76bb9b2c3bff26d5150.jpg",
      offerings: ["SEO & Content Strategy", "Performance Marketing", "Conversion Optimization"]
    },
    { 
      icon: Rocket, 
      title: "Product Launch", 
      slug: "product-launch",
      description: "Go-to-market plans that create momentum. Positioning, messaging, coordination, traction. We ensure your product makes noise on Day 1.",
      image: "https://i.pinimg.com/1200x/eb/b3/70/ebb370648d850a6ac25eef89daa8a00c.jpg",
      offerings: ["GTM Strategy", "Launch Management", "PR & Outreach"]
    },
    { 
      icon: CreditCard, 
      title: "Payment Integration", 
      slug: "payment-integration",
      description: "Payment systems that just work. Subscriptions, one-time, global currencies. Configured, tested, monitored for seamless revenue flow.",
      image: "https://i.pinimg.com/1200x/04/6a/18/046a1870d530f1c63e7d49c2a49c7644.jpg",
      offerings: ["Gateway Integration", "Subscription Logic", "Global Compliance"]
    },
    { 
      icon: Headphones, 
      title: "Support Systems", 
      slug: "support-systems",
      description: "Customer success infrastructure that scales. Helpdesks, chatbots, SOPs. Keep customers happy without burning out your team.",
      image: "https://i.pinimg.com/1200x/22/ba/eb/22baeb3fa4292ea57ec3b6188d4930f0.jpg",
      offerings: ["Helpdesk Setup", "AI Chatbots", "Knowledge Bases"]
    },
  ];

  // compute header offset to pass into ServiceSection so scrollMarginTop matches
  const computeHeaderOffsetPx = () => {
    if (typeof window === "undefined") return 92;
    const headerEl = document.querySelector("header");
    return headerEl ? headerEl.offsetHeight : 92;
  };

  const headerOffsetPx = computeHeaderOffsetPx();

  return (
    <div className="min-h-screen bg-black relative selection:bg-[#007b78] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <motion.section 
        ref={containerRef}
        style={{ y, opacity }}
        className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <WarpBackground speed={1} active={true} />
          <div className="absolute inset-0 bg-gradient-to-br to-black/90 via-black/50 from-[#006865]/20 -z-50" />
        </div>

        <div className="relative z-10 px-4 text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 mb-4"
          >
            <Feather className="w-4 h-4 text-[#007b78]" />
            <span className="text-sm font-medium tracking-wide">Modular Capabilities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">
            Our <span className="text-[#007b78]">Services.</span>
          </h1>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Select the specific modules you need to accelerate your roadmap.
          </p>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 bg-white rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] border-t border-white/20 min-h-screen">
        
        {/* Intro Grid */}
        <section className="py-24 px-6 border-b border-gray-100">
           <div className="container mx-auto max-w-6xl">
              <motion.div 
                className="grid md:grid-cols-3 gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                  <AnimatedIntroCard 
                    icon={Zap}
                    title="High Velocity"
                    description="We work in sprints, not marathons. Get tangible results every two weeks."
                  />
                  <AnimatedIntroCard 
                    icon={Globe}
                    title="Full Transparency"
                    description="No black boxes. You have access to our code, our boards, and our team."
                  />
                  <AnimatedIntroCard 
                    icon={BarChart3}
                    title="Data Driven"
                    description="Every decision we make is backed by data, not gut feelings."
                  />
              </motion.div>
           </div>
        </section>

        {/* --- DETAILED SERVICES LOOP --- */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            {services.map((service, index) => (
              <ServiceSection key={index} service={service} index={index} headerOffsetPx={headerOffsetPx} />
            ))}
          </div>
        </section>

        {/* --- CTA FOOTER --- */}
        <section className="py-24 px-6 bg-[#007b78] text-white rounded-t-[3rem]">
          <div className="container mx-auto max-w-3xl text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                Ready to start?
              </h2>
              <p className="text-xl text-white/90 font-light mb-8">
                Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-white text-[#007b78] hover:bg-white/90 text-lg px-10 py-6 shadow-2xl hover:scale-105 transition-transform font-semibold">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;