import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, ArrowRight, Phone } from "lucide-react";

const Footer = () => {
  return (
    // Added 'relative z-50' to ensure Footer sits ON TOP of previous page sections
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative z-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Acro<span className="text-[#007b78]">wth</span>
              </h3>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              From idea to revenue in weeks. We build the complete infrastructure for your digital business.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="mailto:hello@trybusinessflow.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#007b78] hover:text-white transition-all duration-300">
                <Mail size={18} />
              </a>
              <a href="tel:+919342352183" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#007b78] hover:text-white transition-all duration-300">
                <Phone size={18} />
              </a>
            </div>
            <a href="tel:+919342352183" className="block text-sm text-white/60 hover:text-[#007b78] font-medium transition-colors duration-200">
              +91 93423 52183
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/services#development" 
                  className="block text-sm text-white/60 hover:text-[#007b78] hover:opacity-100 transition-colors duration-200"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#automation" 
                  className="block text-sm text-white/60 hover:text-[#007b78] hover:opacity-100 transition-colors duration-200"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#marketing" 
                  className="block text-sm text-white/60 hover:text-[#007b78] hover:opacity-100 transition-colors duration-200"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#product-launch" 
                  className="block text-sm text-white/60 hover:text-[#007b78] hover:opacity-100 transition-colors duration-200"
                >
                  Product Launch
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/how-we-work" 
                  className="block text-sm text-white/60 hover:text-[#007b78] hover:opacity-100 transition-colors duration-200"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-sm text-white/60 hover:text-[#007b78] hover:opacity-100 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Get Started</h4>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Ready to move fast? Book your free consultation today.
            </p>
            
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#007b78] hover:text-white transition-colors duration-300"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-white/40 ">
            © {new Date().getFullYear()} ACROWTH. All rights reserved.
          </p>
          <div className="flex gap-6">
             {/* <Link to="/privacy" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Privacy Policy</Link> */}
             {/* <Link to="/terms" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;