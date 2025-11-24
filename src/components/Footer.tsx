import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-primary">BusinessFlow</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From idea to revenue in weeks. Complete business solutions under one roof.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@businessflow.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Development</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Automation</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Marketing</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Product Launch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/how-we-work" className="text-sm text-muted-foreground hover:text-primary transition-colors">How We Work</Link></li>
              <li><Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to move fast? Book your free consultation.
            </p>
            <Link 
              to="/contact"
              className="inline-block text-sm font-medium text-primary hover:underline"
            >
              Book Consultation →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BusinessFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;