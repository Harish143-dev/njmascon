import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "/nj_macsonlogo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { href: "/services/our-family-office", label: "Our Family Office" },
    {
      href: "/services/private-wealth-management",
      label: "Private Wealth Management",
    },
    {
      href: "/services/alternative-investments",
      label: "Alternative Investments",
    },
    { href: "/services/auditing-legal", label: "Auditing & Legal" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="NJ Macson"
            className="h-10 md:h-12 lg:h-14 w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${location.pathname === "/" ? "text-primary" : "hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${location.pathname === "/about" ? "text-primary" : "hover:text-primary"}`}
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-[11px] font-semibold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1">
              Services
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-background border border-stone rounded-lg shadow-lg py-2"
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2 text-sm hover:bg-stone/50 hover:text-primary transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/team"
            className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${location.pathname === "/team" ? "text-primary" : "hover:text-primary"}`}
          >
            Team
          </Link>
          <Link
            to="/careers"
            className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${location.pathname === "/careers" ? "text-primary" : "hover:text-primary"}`}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="border border-primary/40 px-5 py-2 font-bold text-xs uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all rounded-sm"
          >
            Contact
          </Link>
        </nav>
        <button
          className="lg:hidden p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-foreground/5 px-4 sm:px-6 py-6 space-y-4"
          >
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm "
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm "
            >
              About
            </Link>
            <p className="block text-sm">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm pl-4"
              >
                {s.label}
              </Link>
            ))}
            <Link
              to="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm "
            >
              Team
            </Link>
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm "
            >
              Careers
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-primary "
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
