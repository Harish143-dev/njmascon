import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import familyOfficeImage from "@/assets/family_Office.webp";
import privateWealthImage from "@/assets/Privaye wealth mgmt.webp";
import alternativeInvestmentsImage from "@/assets/alternative Investment.webp";
import auditingLegalImage from "@/assets/Auditing&Legal_02.webp";
import mediaAuditingImage from "@/assets/Media_Auditing.webp";
import logo from "/nj_macsonlogo.png";

const services = [
  {
    href: "/services/our-family-office",
    label: "Our Family Office",
    summary: "Family office support for wealth, legacy, lifestyle, and governance.",
    image: familyOfficeImage,
  },
  {
    href: "/services/private-wealth-management",
    label: "Private Wealth Management",
    summary: "Research-led financial planning and wealth advisory.",
    image: privateWealthImage,
  },
  {
    href: "/services/alternative-investments",
    label: "Alternative Investments",
    summary: "Private market and real asset opportunities with measured guidance.",
    image: alternativeInvestmentsImage,
  },
  {
    href: "/services/auditing-legal",
    label: "Auditing & Legal",
    summary: "Audit, tax, compliance, legal, and registration support.",
    image: auditingLegalImage,
  },
  {
    href: "/services/media-auditing",
    label: "Media Auditing",
    summary: "Production and media-spend audit systems for better control.",
    image: mediaAuditingImage,
  },
] as const;

const featuredServices = services.slice(0, 5);

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || servicesOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, servicesOpen]);

  const isServiceRoute = location.pathname.startsWith("/services/");

  const navLinkClassName = (isActive: boolean) =>
    cn(
      "relative py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-primary after:transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      isActive ? "text-primary" : "hover:text-primary",
      isActive ? "after:scale-x-100" : "hover:after:scale-x-100",
    );

  const mobileLinkClassName = (isActive: boolean) =>
    cn(
      "block border-b border-stone/70 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      isActive ? "text-primary" : "text-foreground hover:text-primary",
    );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10">
        <Link
          to="/"
          className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="NJ Macson home"
        >
          <img
            src={logo}
            alt="NJ Macson"
            className="h-10 w-auto md:h-12 lg:h-14"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {mainNavItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={navLinkClassName(location.pathname === item.href)}
              aria-current={location.pathname === item.href ? "page" : undefined}
              onMouseEnter={() => setServicesOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div onMouseEnter={() => setServicesOpen(true)}>
            <button
              type="button"
              className={cn(
                "relative flex items-center gap-1.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-primary after:transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isServiceRoute || servicesOpen ? "text-primary" : "hover:text-primary",
                isServiceRoute || servicesOpen ? "after:scale-x-100" : "hover:after:scale-x-100",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              aria-controls={servicesMenuId}
              aria-current={isServiceRoute ? "page" : undefined}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown className={cn("h-3 w-3 transition-transform", servicesOpen ? "rotate-180" : "")} />
            </button>
          </div>
          {mainNavItems.slice(2).map((item) => {
            const isActive = item.href === "/careers" ? location.pathname.startsWith("/careers") : location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={navLinkClassName(isActive)}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={() => setServicesOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className={cn(
              "rounded-sm border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              location.pathname === "/contact"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/35 hover:border-primary hover:bg-primary hover:text-primary-foreground",
            )}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
            onMouseEnter={() => setServicesOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-foreground/10 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuId}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {servicesOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close services navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 top-[65px] z-30 hidden cursor-default bg-foreground/10 backdrop-blur-sm lg:block"
              onClick={() => setServicesOpen(false)}
            />
            <motion.div
              id={servicesMenuId}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              role="menu"
              className="fixed left-0 right-0 top-[65px] z-40 hidden h-[calc(90vh-58px)] w-screen overflow-y-auto overflow-x-hidden border-y border-foreground/10 bg-background shadow-xl shadow-foreground/5 lg:block"
            >
              <button
                type="button"
                className="absolute right-10 top-8 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-foreground/10 bg-background transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setServicesOpen(false)}
                aria-label="Close services navigation"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="mx-auto grid min-h-full max-w-[1440px] grid-cols-12 gap-8 px-10 py-6 pr-24 xl:gap-12 xl:py-8">
                <div className="col-span-7 flex min-h-0 flex-col gap-5">
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Services</p>
                    <h2 className="max-w-2xl font-serif text-2xl font-light leading-tight xl:text-3xl">
                      Advisory built around clarity, discretion, and long-term control.
                    </h2>
                  </div>

                  <div className="grid min-h-0 grid-cols-2 gap-3">
                    {featuredServices.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        role="menuitem"
                        className={cn(
                          "group grid grid-cols-[80px_1fr] gap-3 border-t border-stone/80 pt-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          location.pathname === service.href ? "border-primary text-primary" : "hover:border-primary/60",
                        )}
                        aria-current={location.pathname === service.href ? "page" : undefined}
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-stone/30">
                          <img
                            src={service.image}
                            alt=""
                            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                          />
                        </div>
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.12em] transition-colors group-hover:text-primary">
                            {service.label}
                          </h3>
                          <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
                            {service.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-4 col-start-9 flex min-h-0 flex-col justify-center">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">All Services</p>
                  <div>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        role="menuitem"
                        className={cn(
                          "group flex items-center justify-between gap-6 border-b border-stone/80 py-3.5 font-serif text-2xl font-light leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background xl:text-[1.7rem]",
                          location.pathname === service.href ? "text-primary" : "hover:text-primary",
                        )}
                        aria-current={location.pathname === service.href ? "page" : undefined}
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>{service.label}</span>
                        <span className="transition-transform group-hover:translate-x-1">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id={mobileMenuId}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[65px] z-40 h-[calc(100vh-65px)] overflow-y-auto border-t border-foreground/5 bg-background px-4 py-6 sm:px-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-2xl">
              <div>
                {mainNavItems.slice(0, 2).map((item) => {
                  const isActive = item.href === "/careers" ? location.pathname.startsWith("/careers") : location.pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={mobileLinkClassName(isActive)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="my-8">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Services</p>
                <div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={mobileLinkClassName(location.pathname === service.href)}
                      aria-current={location.pathname === service.href ? "page" : undefined}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                {mainNavItems.slice(2).map((item) => {
                  const isActive = item.href === "/careers" ? location.pathname.startsWith("/careers") : location.pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={mobileLinkClassName(isActive)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className={cn(
                  "mt-8 flex min-h-12 items-center justify-center rounded-sm border px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  location.pathname === "/contact"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground",
                )}
                aria-current={location.pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
