import { Link } from "react-router-dom";

import logo from "/nj_macsonlogo.png";

const services = [
  { to: "/services/our-family-office", label: "Family Office" },
  { to: "/services/private-wealth-management", label: "Private Wealth Management" },
  { to: "/services/alternative-investments", label: "Alternative Investments" },
  { to: "/services/auditing-legal", label: "Auditing and Legal" },
  { to: "/services/media-auditing", label: "Media Auditing" },
];

const company = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  const linkClassName =
    "block py-1.5 text-sm font-light text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <footer className="mt-16 border-t border-stone bg-background sm:mt-24">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16 xl:gap-24">
          <div className="lg:w-[34%]">
            <Link
              to="/"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="NJ Macson home"
            >
              <img src={logo} alt="NJ Macson" className="h-12 w-auto md:h-14" />
            </Link>

            <p className="mt-7 max-w-xl font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              Quiet advisory for wealth, legacy, and long-term clarity.
            </p>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
              Supporting private clients, families, founders, and institutions with considered financial and advisory
              services.
            </p>
          </div>

          <nav className="lg:w-[20%]" aria-label="Footer services">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-primary">Services</h5>
            <ul>
              {services.map((service) => (
                <li key={service.to}>
                  <Link to={service.to} className={linkClassName}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:w-[12%]" aria-label="Footer company">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-primary">Company</h5>
            <ul>
              {company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:w-[24%] lg:border-l lg:border-stone lg:pl-12">
            <h5 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-primary">Reach Us</h5>
            <address className="space-y-4 not-italic text-sm font-light leading-relaxed text-muted-foreground">
              <p>Door No:43 Navarathna Garden 2nd Cross Street, Defence Colony, Ekkaduthangal, Chennai 600032.</p>
              <p>
                044 43570713
                <br />
                +91 739 59 11123
              </p>
              <a className="block break-all transition-colors hover:text-primary" href="mailto:writetous@njmacson.com">
                writetous@njmacson.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 NJ Macson. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <a
              href="https://www.theeyelevelstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Website by EyeLevel Growth Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
