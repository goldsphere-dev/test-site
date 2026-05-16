export interface PractitionerPricingConfig {
  sessionPrice?: number;
  sessionDuration?: string;
  sessionFeatures?: string[];
  showPackage?: boolean;
  packageSessions?: number;
  packagePrice?: number;
  packageSubtitle?: string;
  packageFeatures?: string[];
  showVoucher?: boolean;
  voucherPrice?: number;
  voucherFeatures?: string[];
}

const DEFAULT_SESSION_FEATURES = [
  "Full postural assessment",
  "Targeted spinal treatment",
  "Aftercare guidance",
  "Remain fully clothed",
  "By appointment",
];

const DEFAULT_PACKAGE_FEATURES = [
  "Everything in Single Session",
  "Progressive realignment and maintenance plan",
  "Priority appointment bookings",
  "Personalised care plan",
];

const DEFAULT_VOUCHER_FEATURES = [
  "Everything in Single Session",
  "Body Alignment Branded Physical or Digital Voucher",
  "Voucher valid for 12 months from purchase date",
  "The gift of a more pain free life",
];

// Per-practitioner overrides — leave empty to use defaults.
export const practitionerPricing: Record<string, PractitionerPricingConfig> = {};

export function getPricing(slug: string) {
  const o = practitionerPricing[slug] ?? {};
  const sessionPrice = o.sessionPrice ?? 500;
  return {
    sessionPrice,
    sessionDuration: o.sessionDuration ?? "45–60 min",
    sessionFeatures: o.sessionFeatures ?? DEFAULT_SESSION_FEATURES,
    showPackage: o.showPackage ?? true,
    packageSessions: o.packageSessions ?? 3,
    packagePrice: o.packagePrice ?? 1350,
    packageSubtitle: o.packageSubtitle ?? "best for chronic conditions",
    packageFeatures: o.packageFeatures ?? DEFAULT_PACKAGE_FEATURES,
    showVoucher: o.showVoucher ?? true,
    voucherPrice: o.voucherPrice ?? sessionPrice,
    voucherFeatures: o.voucherFeatures ?? DEFAULT_VOUCHER_FEATURES,
  };
}
