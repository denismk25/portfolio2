/**
 * Single source of truth for every word on the site.
 * Edit here — the pages read from this file, nothing is hard-coded in markup.
 */

export const person = {
  name: "Denis Kagotho",
  title: "Digital Marketing Specialist & Paid Media Specialist",
  subline: ["Paid Media", "SEO", "Multi-Platform Web Development"],
  pitch:
    "I help U.S. service businesses generate leads and grow — running paid media and SEO, and building the pages that convert.",
  // Used in <title>, meta description and JSON-LD.
  metaTitle: "Denis Kagotho — Paid Media & SEO Specialist",
  metaDescription:
    "Digital marketing specialist running Google Ads and Meta Ads, technical SEO across 50+ sites, and high-converting web builds for U.S. service businesses.",
  languages: "English (fluent, professional) · Swahili (native)",
} as const;

/** Skimmable proof band under the hero. */
export const highlights = [
  { value: "−75%", label: "wasted ad spend", note: "paid search restructure" },
  { value: "2.5×", label: "qualified leads", note: "same budget, better intent" },
  { value: "+240%", label: "organic traffic", note: "paid-informed SEO strategy" },
  { value: "100K+", label: "monthly organic visitors", note: "grown from 30K" },
  { value: "50+", label: "client websites managed", note: "technical SEO at scale" },
] as const;

export const about = {
  lead: "Hi, I'm Denis — a Digital Marketing Specialist with close to four years of agency experience managing paid media, SEO, and web development for U.S.-based service businesses.",
  body: [
    "I run Google Ads and Meta Ads campaigns focused on lead generation and cost efficiency, manage technical SEO across 50+ client websites, and build high-performing pages on WordPress, Webflow, and other platforms.",
    "I'm comfortable across the full marketing stack — from writing and testing ad copy and tracking CPC, CTR, and CPL, to running site audits and keeping deliverables on schedule. My focus is always the same: turning data into clear, measurable outcomes.",
  ],
} as const;

export type Capability = {
  id: string;
  name: string;
  index: string;
  summary: string;
  detail: { label: string; text: string }[];
};

export const capabilities: Capability[] = [
  {
    id: "paid-advertising",
    name: "Paid Advertising",
    index: "01",
    summary:
      "Extensive paid media experience across Google Ads and Meta Ads, focused on lead generation and cost efficiency for local and service-based businesses.",
    detail: [
      {
        label: "Google Ads",
        text: "Search & Display campaigns, Responsive Search Ad (RSA) creation and testing, keyword and negative-keyword strategy, search-term audits, bid strategy, geo-radius and geo-fenced targeting, Local Services Ads, conversion tracking, and monthly PPC reporting.",
      },
      {
        label: "Meta Ads",
        text: "Extensive experience running Facebook & Instagram campaigns — audience building with custom and lookalike audiences, retargeting, creative A/B testing, and cross-channel budget management.",
      },
      {
        label: "Measurement",
        text: "Across both platforms I track the metrics that matter — CPC, CTR, CPL, conversion rate, impression share, and ROAS — and I use high-converting paid query data to inform the long-term SEO roadmap, connecting paid and organic into one acquisition strategy.",
      },
    ],
  },
  {
    id: "seo",
    name: "Search Engine Optimization",
    index: "02",
    summary:
      "Full-spectrum SEO across 50+ client websites — from technical audits to on-page optimization and local search.",
    detail: [
      {
        label: "Technical & on-page",
        text: "Diagnosing crawl inefficiencies, resolving indexation issues, refining metadata and content structure, implementing schema markup and structured data, and improving Core Web Vitals.",
      },
      {
        label: "Local search",
        text: "Managing Google Business Profiles — all to improve visibility, rankings, and organic traffic in a measurable way.",
      },
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    index: "03",
    summary:
      "Building and updating high-performing pages across a wide range of platforms, with design consistency on every one of them.",
    detail: [
      {
        label: "Platforms",
        text: "WordPress, Webflow, Wix, Bricks Builder, Elementor, WP Bakery, Duda, and Shopify.",
      },
      {
        label: "Build quality",
        text: "HTML/CSS, site-speed optimization, and design consistency across every platform.",
      },
    ],
  },
  {
    id: "content-strategy",
    name: "Content Strategy",
    index: "04",
    summary:
      "Developing content blueprints, managing editorial calendars, overseeing writers, and executing link-building.",
    detail: [
      {
        label: "Aligned to intent",
        text: "All aligned with E-E-A-T principles, search intent, and client objectives.",
      },
    ],
  },
  {
    id: "crm-automation",
    name: "CRM & Automation",
    index: "05",
    summary:
      "Building and managing email and CRM systems, plus applying AI tools to streamline marketing workflows.",
    detail: [
      {
        label: "Systems",
        text: "GoHighLevel, ActiveCampaign, Klaviyo, MailChimp, and HubSpot.",
      },
      {
        label: "AI workflows",
        text: "Applying AI tools to streamline marketing workflows from content ideation to task automation.",
      },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  discipline: "Paid Media" | "SEO" | "SEO & Web";
  title: string;
  kicker: string;
  meta: { label: string; value: string }[];
  objective: string;
  headline: { value: string; label: string }[];
  challenge: string;
  strategyLabel: string;
  strategy: { label: string; text: string }[];
  resultsLabel: string;
  results: string[];
  takeaway: string;
  /** Drop screenshots into /public/work/ and list the filenames here. */
  proof: { src: string; alt: string; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dumpster-broz",
    discipline: "Paid Media",
    title: "Dumpster Broz",
    kicker: "Full-funnel paid + organic",
    meta: [
      { label: "Industry", value: "Waste Management" },
      { label: "Location", value: "Lehi, Utah" },
      { label: "Channels", value: "Google Search · LSA · SEO" },
    ],
    objective:
      "Capture immediate local search demand and scale dumpster-rental bookings while long-term organic authority was being built.",
    headline: [
      { value: "+240%", label: "organic traffic in under 12 months" },
      { value: "4×", label: "ranking-keyword visibility" },
      { value: "Day 1", label: "high-intent calls from launch" },
    ],
    challenge:
      "Demand in waste management is immediate — customers need a container within days or hours. Relying on organic alone leaves near-term revenue on the table during the multi-month SEO ramp.",
    strategyLabel: "The Strategy",
    strategy: [
      {
        label: "High-intent search",
        text: 'Google Search on granular, bottom-of-funnel terms ("20 yard dumpster rental Lehi UT," "roll off dumpster near me").',
      },
      {
        label: "Call-first formats",
        text: "Call-only ads and Local Services Ads with business-hours call extensions to maximize immediate phone bookings.",
      },
      {
        label: "Hyper-local targeting",
        text: "Geo-fenced strictly to Lehi and surrounding service zones to protect spend efficiency and avoid out-of-boundary delivery costs.",
      },
      {
        label: "Cross-channel synergy",
        text: "Fed high-converting PPC query data into the SEO content and link roadmap, validating money keywords with real paid conversion data before targeting them organically.",
      },
    ],
    resultsLabel: "Results & Impact",
    results: [
      "Zero-lag lead generation — immediate high-intent phone calls and quote requests from day one, bridging the ~6-month SEO build period.",
      "+240% organic traffic in under 12 months.",
      "4x multiplied ranking-keyword visibility across Google.",
    ],
    takeaway:
      "Paid as the tip of the spear — immediate revenue while organic compounds, with PPC data de-risking the SEO strategy.",
    proof: [],
  },
  {
    slug: "az-advanced-dental",
    discipline: "Paid Media",
    title: "AZ Advanced Dental",
    kicker: "Paid search efficiency restructure",
    meta: [
      { label: "Industry", value: "Healthcare / Family Dentistry" },
      { label: "Location", value: "Mesa, Arizona" },
      { label: "Channels", value: "Google Search" },
    ],
    objective:
      "Eliminate wasteful spend on low-intent searchers and scale high-value patient bookings.",
    headline: [
      { value: "−75%", label: "reduction in wasted ad spend" },
      { value: "2.5×", label: "increase in qualified patient leads" },
      { value: "↑ ROAS", label: "budget redirected to converting streams" },
    ],
    challenge:
      'Broad terms like "dentist near me" pull in unqualified clicks, price shoppers, and out-of-network users — inflating customer acquisition cost. The practice was paying for high volumes of non-converting traffic.',
    strategyLabel: "The Strategy",
    strategy: [
      {
        label: "Targeting & audience refinement",
        text: "Negative-keyword lists and geo-radius targeting to restrict impressions to high-intent local prospective patients.",
      },
      {
        label: "High-intent restructuring",
        text: "Rebuilt campaign structures around high-value services (restorative care, family checkups, emergency appointments) that signal immediate intent to book.",
      },
      {
        label: "Copy & landing-page alignment",
        text: "Messaging around insurance options, local trust signals, and clear CTAs so clicks converted into calls and appointment requests.",
      },
    ],
    resultsLabel: "Results & Impact",
    results: [
      "−75% reduction in wasted ad spend.",
      "2.5x increase in qualified patient leads.",
      "Improved ROAS by redirecting wasted budget into high-converting search streams.",
    ],
    takeaway:
      "Efficiency-led paid management — cutting spend waste and lifting lead quality at the same time.",
    proof: [],
  },
  {
    slug: "hometheaterreview",
    discipline: "SEO",
    title: "HomeTheaterReview.com",
    kicker: "Keyword research & SEO strategy",
    meta: [
      { label: "Website", value: "hometheaterreview.com" },
      { label: "Scope", value: "Expanding into the home security content niche" },
    ],
    objective:
      "Expand an established home-entertainment authority site into the adjacent home security niche, targeting readers already interested in smart home technology.",
    headline: [
      { value: "28,078", label: "impressions from home-security queries" },
      { value: "258", label: "organic clicks from targeted content" },
      { value: "Pos 2.0", label: 'best-ranking cluster ("Ring doorbell camera")' },
    ],
    challenge:
      "Home security is highly competitive, dominated by large review sites and brand-owned content. The task was to find realistic opportunities where a niche-adjacent site could credibly compete — without diluting the brand or chasing terms too broad to rank for.",
    strategyLabel: "What I Did",
    strategy: [
      {
        label: "Brand review queries",
        text: "In-depth keyword research targeting brand-specific review queries — Vivint, Arlo, Wyze, Blink, Ring, Eufy, Nuki.",
      },
      {
        label: "Underserved comparisons",
        text: 'Versus queries with thin competition ("Eufy vs Wyze doorbell," "Arlo vs Tapo") and emerging smart-lock queries.',
      },
      {
        label: "Adjacent interest angles",
        text: "Angles like Roku security camera integration — prioritizing terms the site could realistically rank in positions 1–15 without building new domain authority.",
      },
    ],
    resultsLabel: "The Results (attributable to the home-security targeting)",
    results: [
      "28,078 impressions from home-security-specific queries.",
      "258 organic clicks from targeted home-security content.",
      'Multiple pages ranking strongly: "Ring doorbell camera" (Pos 2.0), "Reolink security camera" (Pos 2.7), "Lockzo smart lock reviews" (Pos 4.0), "Wyze Palm Lock" (Pos 3.5), "Vivint security system reviews" (Pos 10.0, 3,637 impressions), "Vivint home security reviews" (Pos 12.7, 8,010 impressions).',
    ],
    takeaway:
      "Strategic keyword research when expanding into a new niche — targeting specific, high-intent gaps rather than broad, unwinnable terms. The Vivint cluster alone represents a significant ranking opportunity with continued optimization.",
    proof: [],
  },
  {
    slug: "thehottubhotels",
    discipline: "SEO & Web",
    title: "TheHotTubHotels.com",
    kicker: "Programmatic SEO, built from scratch",
    meta: [
      { label: "Website", value: "thehottubhotels.com" },
      { label: "Timeline", value: "Nov 2025 – Feb 2026 (3 months)" },
      { label: "Tech stack", value: "Astro" },
    ],
    objective:
      "Build a brand-new niche site from scratch, get it indexed at scale, and compete for high-intent local search — in a short window.",
    headline: [
      { value: "+811%", label: "impressions in 3 months" },
      { value: "1,700+", label: "pages indexed" },
      { value: "62,173", label: "total search impressions" },
    ],
    challenge:
      "The hot tub / jacuzzi hotel niche is highly competitive, with SERPs dominated by aggregators like Booking.com and TripAdvisor.",
    strategyLabel: "What I Did",
    strategy: [
      {
        label: "Programmatic architecture",
        text: 'Built a niche travel site on Astro, architected around a programmatic SEO strategy targeting location-specific queries like "hotels with jacuzzi in room in [city/state]" at scale.',
      },
      {
        label: "Indexed at scale",
        text: "Over 1,700 pages indexed across US states and cities, combining informational content with transactional location pages.",
      },
    ],
    resultsLabel: "The Results (3 months from launch)",
    results: [
      "62,173 total impressions across Google Search; 347 organic clicks, accelerating month over month.",
      "Impressions +811% (5,138 → 46,833); Clicks +958% (24 → 254).",
      'Ranking for competitive queries: "hotels with jacuzzi in room" (avg pos 9.4), "hotel with private jacuzzi in room" (avg pos 7.4).',
      "Top page — Minnesota jacuzzi hotels — 30 clicks, 2,616 impressions.",
      "80% mobile traffic; organic traffic almost entirely US.",
    ],
    takeaway:
      "What's possible with programmatic SEO — from zero visibility to tens of thousands of monthly impressions in under 90 days, with growth still accelerating.",
    proof: [],
  },
];

/** Shorter proof points that don't warrant a full case study. */
export const additionalWork = {
  title: "Additional Paid Media & Social",
  items: [
    {
      value: "$3,000",
      label: "Cross-channel budget management",
      text: "Managed a paid budget across Google Ads and Meta Ads to promote a product — driving targeted traffic and supporting sales growth through audience testing and ad optimization.",
    },
    {
      value: "+170%",
      label: "Organic Meta growth",
      text: "Grew a brand's Facebook audience by 170% organically in under a year through consistent, on-brand content.",
    },
    {
      value: "20,900+",
      label: "Reach on a single post",
      text: "Designed an infographic content strategy that produced one of the page's best-ever posts — 20,900+ reach with strong engagement.",
    },
  ],
} as const;

/** Web builds. Add `url` and `image` once you have live links + screenshots. */
export const builds = [
  {
    name: "American Custom Closets",
    stack: "WordPress + Bricks Builder",
    url: "",
    image: "",
  },
  { name: "Spencer Printing", stack: "WordPress + Bricks Builder", url: "", image: "" },
  { name: "My Cottage Smith", stack: "WordPress + Bricks Builder", url: "", image: "" },
] as const;

export const credentials = [
  {
    kind: "Certification",
    name: "Google Ads Search & Display Certifications",
    issuer: "Google",
  },
  {
    kind: "Certification",
    name: "Social Media Marketing Certification",
    issuer: "HubSpot Academy",
  },
  {
    kind: "Education",
    name: "Bachelor of Business Information Technology",
    issuer: "Kirinyaga University",
  },
] as const;

export const toolkit = [
  {
    group: "Paid & Measurement",
    tools: [
      "Google Ads",
      "Meta Ads Manager",
      "Local Services Ads",
      "Google Tag Manager",
      "GA4",
      "Google Search Console",
    ],
  },
  {
    group: "SEO",
    tools: ["Screaming Frog", "Ahrefs", "SEMrush", "Surfer SEO", "Yoast", "Rank Math"],
  },
  {
    group: "CRM & Email",
    tools: ["GoHighLevel", "ActiveCampaign", "Klaviyo", "MailChimp", "HubSpot"],
  },
  {
    group: "Build",
    tools: [
      "WordPress",
      "Webflow",
      "Elementor",
      "Bricks Builder",
      "WP Bakery",
      "Wix",
      "Duda",
      "Shopify",
      "Astro",
    ],
  },
] as const;

/**
 * Analytics. Clarity project IDs are not secrets — they're visible in the page
 * source of every site running Clarity — so this lives in the repo rather than
 * in an env var, and there's no Vercel config step to forget.
 *
 * Leave blank and no script is emitted at all. The tag only loads in production
 * builds, so `npm run dev` never pollutes your session recordings.
 */
export const analytics = {
  clarityProjectId: "y3dvnjccgz",
} as const;

/**
 * Closing band. This site carries no contact details, no contact form and no
 * contact section by design — the outro closes the page on the work instead.
 */
export const outro = {
  heading: "Data into outcomes",
  body: "Paid media, SEO and the pages that carry them — run as one acquisition strategy, measured the whole way.",
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Toolkit", href: "/#toolkit" },
] as const;
