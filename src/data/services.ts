export const serviceInquiryServices = {
  familyOffice: {
    key: "family-office",
    label: "Family Office",
    path: "/services/our-family-office",
  },
  privateWealth: {
    key: "private-wealth-management",
    label: "Private Wealth Management",
    path: "/services/private-wealth-management",
  },
  alternativeInvestments: {
    key: "alternative-investments",
    label: "Alternative Investments",
    path: "/services/alternative-investments",
  },
  auditingLegal: {
    key: "auditing-legal",
    label: "Auditing and Legal",
    path: "/services/auditing-legal",
  },
  mediaAuditing: {
    key: "media-auditing",
    label: "Media Auditing",
    path: "/services/media-auditing",
  },
} as const;

export type ServiceInquiryService =
  (typeof serviceInquiryServices)[keyof typeof serviceInquiryServices];
