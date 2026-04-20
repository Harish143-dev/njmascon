import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "/nj_macsonlogo.png";

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
  { href: "/services/media-auditing", label: "Media Auditing" },
] as const;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const servicesMenuId = useId();
  const mobileMenuId = useId();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const isServiceRoute = location.pathname.startsWith("/services/");

  const navLinkClassName = (isActive: boolean) =>
    cn(
      "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      isActive ? "text-primary" : "hover:text-primary",
    );

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
          <Link to="/" className={navLinkClassName(location.pathname === "/")} aria-current={location.pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link
            to="/about"
            className={navLinkClassName(location.pathname === "/about")}
            aria-current={location.pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocusCapture={() => setServicesOpen(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isServiceRoute || servicesOpen ? "text-primary" : "hover:text-primary",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              aria-controls={servicesMenuId}
              aria-current={isServiceRoute ? "page" : undefined}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <svg
                className={cn("w-3 h-3 transition-transform", servicesOpen ? "rotate-180" : "")}
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
                  id={servicesMenuId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-stone bg-background py-2 shadow-lg"
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      role="menuitem"
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:bg-stone/50 focus-visible:text-primary hover:bg-stone/50 hover:text-primary",
                        location.pathname === s.href ? "text-primary" : "",
                      )}
                      aria-current={location.pathname === s.href ? "page" : undefined}
                      onClick={() => setServicesOpen(false)}
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
            className={navLinkClassName(location.pathname === "/team")}
            aria-current={location.pathname === "/team" ? "page" : undefined}
          >
            Team
          </Link>
          <Link
            to="/careers"
            className={navLinkClassName(location.pathname.startsWith("/careers"))}
            aria-current={location.pathname.startsWith("/careers") ? "page" : undefined}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-primary/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-sm p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuId}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-foreground/5 px-4 sm:px-6 py-6 space-y-4"
            aria-label="Mobile navigation"
          >
            <Link
              to="/"
              className="block text-sm"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-sm"
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              About
            </Link>
            <p className="block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block text-sm pl-4"
                aria-current={location.pathname === s.href ? "page" : undefined}
              >
                {s.label}
              </Link>
            ))}
            <Link
              to="/team"
              className="block text-sm"
              aria-current={location.pathname === "/team" ? "page" : undefined}
            >
              Team
            </Link>
            <Link
              to="/careers"
              className="block text-sm"
              aria-current={location.pathname.startsWith("/careers") ? "page" : undefined}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block text-sm text-primary"
              aria-current={location.pathname === "/contact" ? "page" : undefined}
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
