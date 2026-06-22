/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  // Base
  background: string;
  foreground: string;
  // Card
  card: string;
  cardForeground: string;
  // Popover
  popover: string;
  popoverForeground: string;
  // Primary
  primary: string;
  primaryForeground: string;
  // Secondary
  secondary: string;
  secondaryForeground: string;
  // Muted
  muted: string;
  mutedForeground: string;
  // Accent
  accent: string;
  accentForeground: string;
  // Destructive
  destructive: string;
  destructiveForeground: string;
  // Border / Input / Ring
  border: string;
  input: string;
  ring: string;
  // Charts
  chart1?: string;
  chart2?: string;
  chart3?: string;
  chart4?: string;
  chart5?: string;
  // Navbar
  navbarBackground: string;
  // Sidebar
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
};

export type TFont = {
  headingFont: string;
  textFont: string;
};

export type THeadline = {
  part1: string;
  part2: string;
  part3: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  font: TFont;
  headline: THeadline;
  // Mirror new schema fields here. Example:
  //   maxItemsPerPage?: number;
  //   enableNotifications?: boolean;
  //   featuredCategories?: string[];
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "We Love Meepo x QuantumByte",
  logoUrl: "",
  brandColor: {
    // Base
    background:        "#09090b",
    foreground:        "#fafafa",
    // Card
    card:              "#18181b",
    cardForeground:    "#fafafa",
    // Popover
    popover:           "#09090b",
    popoverForeground: "#fafafa",
    // Primary
    primary:           "#7c3aed",
    primaryForeground: "#ffffff",
    // Secondary
    secondary:           "#18181b",
    secondaryForeground: "#fafafa",
    // Muted
    muted:           "#27272a",
    mutedForeground: "#a1a1aa",
    // Accent
    accent:           "#7c3aed",
    accentForeground: "#ffffff",
    // Destructive
    destructive:           "#ef4444",
    destructiveForeground: "#ffffff",
    // Border / Input / Ring
    border: "#27272a",
    input:  "#27272a",
    ring:   "#7c3aed",
    // Charts
    chart1: "#f97316",
    chart2: "#0d9488",
    chart3: "#1e3a5f",
    chart4: "#d4a017",
    chart5: "#ea580c",
    // Navbar
    navbarBackground: "#09090b",
    // Sidebar
    sidebarBackground:        "#09090b",
    sidebarForeground:        "#fafafa",
    sidebarPrimary:           "#7c3aed",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent:            "#27272a",
    sidebarAccentForeground:  "#fafafa",
    sidebarBorder:            "#27272a",
    sidebarRing:              "#7c3aed",
  },
  font: {
    headingFont: "Space Grotesk",
    textFont: "Inter",
  },
  headline: {
    part1: "We Love",
    part2: "Meepo",
    part3: "x QuantumByte",
  },
  // ─────────────────────────────────────────────────────────────────────
  // Add new field defaults here. See RULES.md §5 for per-type shape.
  // ─────────────────────────────────────────────────────────────────────
};
