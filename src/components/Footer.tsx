import { Link } from "react-router-dom";
import logo from "@/assets/njmacson-logo.webp";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-stone pt-16 pb-8 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="NJ Macson" className="h-14 w-auto" />
            </Link>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">From basic finance guidance to family office services, we are here.</p>
            <p className="text-primary text-sm font-medium">Plan for tomorrow, today..!</p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Services</h5>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/services/family-office" className="hover:text-primary transition-colors">Family Office</Link></li>
              <li><Link to="/services/private-wealth" className="hover:text-primary transition-colors">Private Wealth Management</Link></li>
              <li><Link to="/services/alternative-investments" className="hover:text-primary transition-colors">Alternative Investments</Link></li>
              <li><Link to="/services/auditing-legal" className="hover:text-primary transition-colors">Auditing and Legal</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Company</h5>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Contact Info</h5>
            <address className="not-italic text-sm font-light text-muted-foreground space-y-3">
              <p>Door No:43 Navarathna Garden 2nd Cross street, Defence Colony, Ekkaduthangal, Chennai 600032.</p>
              <p>044 43570713<br/>+91 739 59 11123</p>
              <p>writetous@njmacson.com</p>
            </address>
            <div className="mt-4 text-sm font-light text-muted-foreground">
              <p>Mon – Fri: 9am – 6pm</p>
              <p>Sat: By Appointment</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-stone flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
          <p>© 2025 NJ Macson. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <a 
              href="https://www.theeyelevelstudio.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors normal-case tracking-normal text-xs"
            >
              Website designed by <span className="text-primary">EyeLevel Growth Studio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
