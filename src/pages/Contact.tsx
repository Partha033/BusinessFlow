import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar"; 
import { MessageCircle, Mail, Twitter, MapPin, Calendar as CalendarIcon, Feather, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import WarpBackground from "@/components/WarpBackground"; 
import Earth from "@/components/Earth"; 

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [employeeCount, setEmployeeCount] = useState([10]);
  const [date, setDate] = useState(); 
  const [phase, setPhase] = useState(0); // For Hero Animation
  const containerRef = useRef(null);

  // Scroll Hooks for Parallax (Matching Home)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Hero Intro Animation
  useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 300);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const services = [
    "Development", "Automation", "Marketing",
    "Product Launch", "Payment Integration", "Support Systems"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative selection:bg-[#007b78] selection:text-white">
      
      {/* --- HERO SECTION (Consistent with Home) --- */}
      <motion.section 
        style={{ y, scale, opacity }}
        className="sticky top-0 h-[50vh] w-full overflow-hidden z-0 flex flex-col items-center justify-center pt-10"
      >
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 opacity-40">
             <WarpBackground speed={1} active={true} />
          </div>
          {/* Earth pushed lower to be visible at bottom of header */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        </div>

        <div className="relative z-20 px-4 text-center">
          <AnimatePresence mode="wait">
            {phase >= 1 && (
              <motion.div
                key="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 mx-auto">
                    <Feather className="w-4 h-4 text-[#007b78]" />
                    <span className="text-sm font-medium tracking-wide">Let's Build Together</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                  Contact <span className="text-[#007b78]">Us.</span>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT SHEET --- */}
      <div className="relative z-10 bg-[#99cac9] rounded-t-[7rem] mx-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/20 min-h-screen">
        
        <div className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* --- LEFT FORM (70%) --- */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full lg:w-[65%]"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/40">
                <div className="space-y-2 mb-10">
                  <h2 className="text-3xl font-display font-bold text-slate-900">Get in touch</h2>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="firstName"
                        className="h-12 rounded-xl border-slate-200 bg-white focus:border-[#007b78] focus:ring-[#007b78]"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="lastName"
                        className="h-12 rounded-xl border-slate-200 bg-white focus:border-[#007b78] focus:ring-[#007b78]"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">Work email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="hello@trybusinessflow.com"
                        className="h-12 rounded-xl border-slate-200 bg-white focus:border-[#007b78] focus:ring-[#007b78]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        className="h-12 rounded-xl border-slate-200 bg-white focus:border-[#007b78] focus:ring-[#007b78]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Calendar & Slider */}
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                     {/* Calendar */}
                     <div className="space-y-2 flex flex-col">
                        <Label className="text-sm font-medium text-slate-700">Preferred Kickoff Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "h-12 w-full justify-start text-left font-normal rounded-xl border-slate-200 bg-white hover:bg-slate-50 hover:border-[#007b78]",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-[#007b78]" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className="rounded-md border shadow-lg bg-white"
                            />
                          </PopoverContent>
                        </Popover>
                     </div>

                     {/* Slider */}
                     <div className="space-y-4 pt-1">
                        <div className="flex justify-between items-center">
                           <Label className="text-sm font-medium text-slate-700">Company Size</Label>
                           <span className="text-sm font-bold text-[#007b78] bg-[#007b78]/10 px-2 py-0.5 rounded-md">
                              {employeeCount} Employees
                           </span>
                        </div>
                        <Slider
                          defaultValue={[10]}
                          max={200}
                          step={5}
                          className="py-2 cursor-pointer"
                          onValueChange={(val) => setEmployeeCount(val)}
                        />
                     </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4 pt-2">
                    <Label className="text-sm font-medium text-slate-700">Services Required</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <div 
                          key={service} 
                          className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-[#007b78]/50 hover:bg-[#007b78]/5 cursor-pointer transition-all"
                          onClick={() => toggleService(service)}
                        >
                          <Checkbox 
                            id={service} 
                            checked={formData.services.includes(service)}
                            onCheckedChange={() => toggleService(service)}
                            className="border-slate-300 data-[state=checked]:bg-[#007b78] data-[state=checked]:border-[#007b78] h-5 w-5 rounded text-white"
                          />
                          <label
                            htmlFor={service}
                            className="text-sm font-medium text-slate-600 cursor-pointer select-none"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals, timeline, and budget..."
                      className="min-h-[120px] rounded-xl border-slate-200 bg-white focus:border-[#007b78] focus:ring-[#007b78] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl bg-[#007b78] hover:bg-[#006865] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* --- RIGHT INFO (35%) --- */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full lg:w-[35%] space-y-8"
            >
              {/* Info Card 1 */}
              {/* <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-lg">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#007b78] mb-4 shadow-sm">
                   <MessageCircle className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-slate-900 text-lg mb-1">Direct Chat</h3>
                 <p className="text-slate-600 text-sm mb-4">Ideally suited for quick questions.</p>
                 <a href="#" className="flex items-center gap-2 text-[#007b78] font-bold hover:underline">
                   Start Live Chat <ArrowRight className="w-4 h-4" />
                 </a>
              </div> */}

              {/* Info Card 2 */}
              <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-lg">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#007b78] mb-4 shadow-sm">
                   <Mail className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-slate-900 text-lg mb-1">Email Us</h3>
                 <p className="text-slate-600 text-sm mb-4">For detailed project inquiries.</p>
                 <a href="mailto:hello@businessflow.com" className="flex items-center gap-2 text-[#007b78] font-bold hover:underline">
                   hello@businessflow.com <ArrowRight className="w-4 h-4" />
                 </a>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-[2rem] overflow-hidden border border-white/20 shadow-xl h-[660px] relative group">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6958473697823!2d80.2626341!3d12.991295200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f62d078cd1%3A0x308f7bd126978164!2s17-16%2C%2017-16%2C%20Dr%20Ambedkar%20St%2C%20Lakshmipuram%2C%20Kalakshetra%20Colony%2C%20Neelankarai%2C%20Chennai%2C%20Tamil%20Nadu%20600041!5e0!3m2!1sen!2sin!4v1764505490319!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                 ></iframe>
                 
                 {/* Floating Pin */}
                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                    <div className="flex items-start gap-3">
                       <MapPin className="w-5 h-5 text-[#007b78] shrink-0 mt-1" />
                       <div>
                          <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">Headquarters</p>
                          <p className="text-sm text-slate-600">17/16, Dr Ambedkar St, Radhakrishnan Nagar, Thiruvanmiyur, Chennai, Tamil Nadu 600041</p>
                       </div>
                    </div>
                 </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;