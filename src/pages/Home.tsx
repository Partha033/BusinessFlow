import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import WarpBackground from "@/components/WarpBackground"; 
import Earth from "@/components/Earth"; 
import { 
  Code, Cpu, Megaphone, Rocket, CreditCard, Headphones, ArrowRight, 
  Workflow, Zap, Globe2, Layers, Feather 
} from "lucide-react";

// --- UPDATED CARD: Image First -> Text on Hover ---
const ImageToTextCard = ({ title, description, icon: Icon, image, delay, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.001, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer bg-black"
    >
      {/* 1. IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
      </div>

      {/* 2. INITIAL TITLE */}
      <div className="absolute bottom-0 left-0 p-8 z-10 transition-all duration-500 transform group-hover:translate-y-10 group-hover:opacity-0">
         <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white tracking-wide">{title}</h3>
         </div>
      </div>

      {/* 3. HOVER OVERLAY */}
      <div className="absolute inset-0 bg-[#007b78]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* 4. TEXT CONTENT */}
      <div className="absolute inset-0 z-30 p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
        
        <div className="mb-6 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-3xl font-display font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-white/90 text-lg font-light leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Link: USES THE 'href' PROP (hash string like "#development") */}
        <Link 
          to={{ pathname: "/services", hash: href }}
          className="flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-colors cursor-pointer"
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [phase, setPhase] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500);
    const timer2 = setTimeout(() => setPhase(2), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // --- SERVICES DATA WITH HASH LINKS (href is a hash string) ---
  const services = [
    { 
      icon: Code, 
      title: "Development", 
      description: "Web apps, mobile solutions, no-code platforms. Beautiful interfaces. Systems that don't break.",
      image: "https://i.pinimg.com/1200x/bc/5f/2e/bc5f2e71b57de80e0a8b40b759cb5291.jpg",
      href: "#development" 
    },
    { 
      icon: Cpu, 
      title: "Automation", 
      description: "AI-powered workflows that eliminate busywork. Connect your tools. Free your team for real work.",
      image: "https://i.pinimg.com/736x/02/fd/74/02fd74bb73038ed94563954400ae8ddf.jpg",
      href: "#automation" 
    },
    { 
      icon: Megaphone, 
      title: "Marketing", 
      description: "Growth strategies that work. We turn attention into revenue—not vanity metrics.",
      image: "https://i.pinimg.com/1200x/03/62/dd/0362dd85b61d9bea7a8026ad3f2d5771.jpg",
      href: "#marketing" 
    },
    { 
      icon: Rocket, 
      title: "Product Launch", 
      description: "Go-to-market plans that create momentum. Positioning, messaging, coordination, traction.",
      image: "https://i.pinimg.com/736x/72/8b/ab/728baba617c7d48b1f67c7d0a94ea90f.jpg",
      href: "#product-launch" 
    },
    { 
      icon: CreditCard, 
      title: "Payment Integration", 
      description: "Payment systems that just work. Subscriptions, one-time, global currencies. Configured, tested, monitored.",
      image: "https://i.pinimg.com/1200x/db/f1/fa/dbf1fa376b78438430d22d528bcec08d.jpg",
      href: "#payment-integration" 
    },
    { 
      icon: Headphones, 
      title: "Support Systems", 
      description: "Customer success infrastructure that scales. Helpdesks, chatbots, SOPs. Keep customers happy.",
      image: "https://i.pinimg.com/1200x/61/13/4e/61134eed775e7922d23ff7e4a8c21d06.jpg",
      href: "#support-systems" 
    },
  ];

  const benefitsData = [
    { 
      icon: Workflow, 
      title: "End-to-End Execution", 
      description: "From first wireframe to thousandth customer. No handoffs. One team owns your success." 
    },
    { 
      icon: Zap, 
      title: "Speed Without Compromise", 
      description: "We launch MVPs in weeks. Fast doesn't mean sloppy. It means smart." 
    },
    { 
      icon: Globe2, 
      title: "Global Quality, Smart Pricing", 
      description: "World-class work without Valley rates. Same excellence everywhere." 
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black relative selection:bg-[#007b78] selection:text-white"
    >
      
      {/* --- HERO SECTION --- */}
      <motion.section 
        style={{ y, scale, opacity }}
        className="sticky top-0 h-screen w-full overflow-hidden z-0 flex flex-col items-center justify-center pt-20"
      >
        <div className="absolute inset-0  pointer-events-none flex items-center justify-center">

          <div className="w-[600px] h-[600px] md:w-[780px] md:h-[780px] z-10 opacity-80 mix-blend-screen">
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
          <div className="absolute inset-0 opacity-100 -z-50">
             <WarpBackground speed={1} active={true} />
          </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        </div>

        <div className="relative z-20 px-4 mt-[-40px]">
          <AnimatePresence mode="wait">
            {phase >= 1 && (
              <motion.div
                key="hero-content"
                className="container mx-auto max-w-4xl text-center space-y-8"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 mb-4 mx-auto"
                >
                    <Feather className="w-4 h-4 text-[#007b78]" />
                    <span className="text-sm font-medium tracking-wide">Global Digital Services</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-white text-balance leading-[1.1] drop-shadow-2xl">
                  Your World,{" "}
                  <span className="text-[#007b78]">Engineered.</span>
                </h1>

                <motion.p 
                  className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                   All under one roof. From idea to revenue in weeks.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button asChild size="lg" className="rounded-full bg-[#007b78] text-white hover:bg-[#007b78]/90 text-lg px-10 py-6 shadow-[0_0_30px_rgba(0,123,120,0.4)] transition-all hover:scale-105">
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white bg-black/40 backdrop-blur-sm hover:bg-white/10 text-lg px-10 py-6 transition-all">
                    <Link to="/services">View Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* --- SCROLLING CONTENT --- */}
      <div className="relative z-10 bg-[#99cac9] mx-10 rounded-t-[7rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/20">
        {/* Problem Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Building a business shouldn't require managing five different agencies.
            </h2>
            <div className="w-20 h-1 bg-[#007b78] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              You hire developers. Then marketers. Then automation experts. Then payment specialists.
              Each handoff wastes time. Creates miscommunication. Delays your launch.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 bg-[#99cac9] relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Why BusinessFlow</h2>
              <p className="text-xl text-[#007b78] font-semibold tracking-wide">One Team. Complete Ownership.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefitsData.map((item, index) => {
                const IconComponent = item.icon; 
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{y: -20 }}
                    className="group p-10 bg-slate-50/50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#007b78]/10 hover:border-[#007b78]/20"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#007b78] mb-6 shadow-sm group-hover:bg-[#007b78] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- WHAT WE DO (UPDATED GRID) --- */}
        <section className="py-32 px-6 relative overflow-hidden bg-[#99cac9]">
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">What We Do</h2>
              <p className="text-xl text-muted-foreground">Everything you need to go from zero to market.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ImageToTextCard
                  key={service.title}
                  {...service}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        {/* <section className="py-24 px-6 bg-[#007b78] text-white rounded-t-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto max-w-3xl text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Ready to move fast?</h2>
            <p className="text-xl text-white/90 font-light">Stop waiting. Start building.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="rounded-full bg-white text-[#007b78] hover:bg-white/90 text-lg px-10 py-6 shadow-2xl hover:scale-105 transition-transform font-bold">
                <Link to="/contact">Book Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Home;
