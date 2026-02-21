export interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "head-private-estates",
    title: "Head of Private Estates",
    location: "London / Geneva",
    type: "Full-time",
    department: "Family Office",
    overview: "Lead the strategic management of ultra-high-net-worth family estates across Europe. You will oversee comprehensive wealth preservation, property management, and lifestyle services for our most distinguished clientele.",
    responsibilities: [
      "Direct oversight of multi-generational family estate portfolios",
      "Coordinate with legal, tax, and investment teams across jurisdictions",
      "Develop and implement estate succession and governance frameworks",
      "Manage relationships with external advisors and service providers",
      "Ensure compliance with regulatory requirements across multiple jurisdictions",
      "Provide strategic counsel to family principals on estate matters",
    ],
    qualifications: [
      "15+ years experience in private wealth or family office management",
      "Deep expertise in European estate planning and cross-border structures",
      "Fluency in English; French, German, or Italian strongly preferred",
      "Advanced degree in Law, Finance, or related field",
      "Proven track record with UHNW families",
      "Impeccable discretion and professional references",
    ],
    benefits: [
      "Competitive compensation with performance incentives",
      "Private health and wellness programs",
      "Flexible work arrangements across European offices",
      "Professional development and education allowances",
      "Exclusive networking opportunities",
    ],
  },
  {
    id: "legacy-wealth-architect",
    title: "Legacy Wealth Architect",
    location: "New York",
    type: "Full-time",
    department: "Private Wealth",
    overview: "Design and implement sophisticated wealth transfer and preservation strategies for multi-generational families. This role combines financial engineering with deep family advisory to create lasting legacies.",
    responsibilities: [
      "Develop comprehensive wealth transfer strategies across generations",
      "Structure complex investment vehicles and family holding structures",
      "Collaborate with external legal and tax counsel on planning matters",
      "Present strategic recommendations to family boards and principals",
      "Monitor and adjust strategies based on regulatory and market changes",
      "Build and maintain relationships with key family stakeholders",
    ],
    qualifications: [
      "10+ years in wealth management, private banking, or family office",
      "CFA, CFP, or JD with estate planning focus",
      "Experience with US and international tax structures",
      "Exceptional communication and presentation skills",
      "Demonstrated ability to navigate complex family dynamics",
      "Strong analytical and financial modeling capabilities",
    ],
    benefits: [
      "Base salary plus substantial bonus potential",
      "Comprehensive benefits including 401(k) match",
      "Manhattan office with hybrid flexibility",
      "Annual education and certification support",
      "Access to exclusive industry events",
    ],
  },
  {
    id: "senior-concierge-lead",
    title: "Senior Concierge Lead",
    location: "Singapore",
    type: "Full-time",
    department: "Lifestyle Services",
    overview: "Lead our Asia-Pacific lifestyle services team, delivering white-glove concierge experiences for ultra-high-net-worth clients. From exclusive travel arrangements to private events, you ensure every detail exceeds expectations.",
    responsibilities: [
      "Manage and mentor a team of lifestyle coordinators",
      "Curate exclusive experiences for UHNW clients across Asia-Pacific",
      "Develop relationships with luxury vendors and service providers",
      "Handle complex travel, event, and personal arrangements",
      "Ensure 24/7 availability and response for VIP client needs",
      "Maintain strict confidentiality and discretion at all times",
    ],
    qualifications: [
      "8+ years in luxury hospitality, private aviation, or concierge services",
      "Extensive network across luxury brands and exclusive venues in APAC",
      "Fluency in English and Mandarin; additional languages valued",
      "Experience serving UHNW or celebrity clientele",
      "Exceptional organizational and problem-solving abilities",
      "Available for travel and flexible scheduling",
    ],
    benefits: [
      "Competitive salary with service excellence bonuses",
      "Premium health and wellness package",
      "Travel perks and luxury brand partnerships",
      "Central Singapore office location",
      "Career growth within global family office network",
    ],
  },
  {
    id: "bespoke-philanthropy-advisor",
    title: "Bespoke Philanthropy Advisor",
    location: "Remote / Global",
    type: "Full-time",
    department: "Foundation",
    overview: "Guide families in creating meaningful philanthropic legacies. You will help design giving strategies, establish foundations, and measure impact to ensure charitable goals align with family values and create lasting positive change.",
    responsibilities: [
      "Develop customized philanthropic strategies aligned with family values",
      "Research and evaluate charitable organizations and initiatives",
      "Structure private foundations, donor-advised funds, and giving vehicles",
      "Coordinate with legal and tax advisors on charitable planning",
      "Measure and report on philanthropic impact and outcomes",
      "Facilitate family discussions around giving philosophy and priorities",
    ],
    qualifications: [
      "7+ years in philanthropy advisory, foundation management, or nonprofits",
      "Deep knowledge of global philanthropic structures and regulations",
      "Experience with impact measurement and reporting frameworks",
      "Strong relationship-building and facilitation skills",
      "Passion for social impact and sustainable giving",
      "Ability to work independently across time zones",
    ],
    benefits: [
      "Fully remote with quarterly team gatherings",
      "Competitive compensation with impact bonuses",
      "Comprehensive global benefits package",
      "Professional development in philanthropy and impact",
      "Opportunity to shape meaningful family legacies",
    ],
  },
];

export const getJobById = (id: string): JobPosition | undefined => {
  return jobPositions.find((job) => job.id === id);
};
