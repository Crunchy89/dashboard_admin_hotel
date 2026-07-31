export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
] as const;

export const stats = [
  { value: "12,486", label: "Connected users" },
  { value: "240+", label: "Affiliated hotels" },
  { value: "98%", label: "Guest satisfaction" },
  { value: "24/7", label: "Monitoring" },
];

export const features = [
  {
    title: "One room, one tap",
    description:
      "Guests control lights, climate, and door access from their phone the moment they check in.",
  },
  {
    title: "Points on every stay",
    description:
      "Every booking at an affiliated hotel earns points that guests can redeem on their next stay.",
  },
  {
    title: "Devices that report back",
    description:
      "Operators see device health per room and get maintenance alerts before guests notice.",
  },
  {
    title: "Built for property groups",
    description:
      "Run a single boutique inn or hundreds of rooms across regions from the same dashboard.",
  },
  {
    title: "Live installation tracking",
    description:
      "Schedule room setups, assign technicians, and track go-live status without spreadsheet chaos.",
  },
  {
    title: "Finance-ready reporting",
    description:
      "See package revenue, monthly payments, and property performance in one operator view.",
  },
];

export const pricing = [
  {
    name: "Small",
    price: "Rp 2.5 jt",
    cadence: "/ month",
    limit: "Under 100 rooms",
    perks: [
      "Room and device control",
      "Guest points program",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Medium",
    price: "Rp 6.5 jt",
    cadence: "/ month",
    limit: "100 – 300 rooms",
    perks: [
      "Everything in Small",
      "Maintenance scheduling",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    limit: "Over 500 rooms",
    perks: [
      "Everything in Medium",
      "Multi-property reporting",
      "Dedicated success manager",
    ],
    featured: false,
  },
];

export const reviews = [
  {
    quote:
      "Our guests stopped calling the front desk for the air conditioning. Check-in to lights-on is under a minute now.",
    name: "Rina Wijaya",
    role: "GM, Grand Horizon Hotel",
    initials: "RW",
  },
  {
    quote:
      "The points program brought repeat bookings we used to lose to the big travel sites. Direct stays are up meaningfully.",
    name: "James Tan",
    role: "Owner, Oceanview Suites",
    initials: "JT",
  },
  {
    quote:
      "We catch a failing thermostat before a guest ever files a complaint. Maintenance stopped being guesswork.",
    name: "Kenji Nakamura",
    role: "Ops Lead, Skyline Business Hotel",
    initials: "KN",
  },
  {
    quote:
      "Rollout across three properties took weeks, not months. The installation calendar kept every room on track.",
    name: "Putri Amelia",
    role: "Director, Nusantara Boutique Inn",
    initials: "PA",
  },
];

export const blogPosts = [
  {
    slug: "cut-maintenance-calls",
    category: "Operations",
    title: "How affiliated hotels cut maintenance calls by 40%",
    excerpt:
      "Proactive device alerts let ops teams fix rooms before guests arrive — and before reviews turn sour.",
    date: "18 Jul 2026",
    readTime: "5 min read",
  },
  {
    slug: "points-vs-otas",
    category: "Loyalty",
    title: "Why points keep direct bookings ahead of OTAs",
    excerpt:
      "Guests who earn on every stay come back without a third-party middleman. Here is what the data shows.",
    date: "9 Jul 2026",
    readTime: "4 min read",
  },
  {
    slug: "check-in-to-climate",
    category: "Product",
    title: "From check-in to climate control in under a minute",
    excerpt:
      "A look at the guest journey we designed for first-time smart room users across boutique and business hotels.",
    date: "28 Jun 2026",
    readTime: "6 min read",
  },
  {
    slug: "multi-property-reporting",
    category: "Insights",
    title: "What multi-property dashboards should actually show",
    excerpt:
      "Room count alone is not enough. Operators need device health, points redemption, and package revenue side by side.",
    date: "14 Jun 2026",
    readTime: "5 min read",
  },
];

export const faqs = [
  {
    question: "What counts as an affiliated hotel?",
    answer:
      "Any property on our network — boutique inns, business hotels, and partner homes. Guests earn points when they book and stay at those properties.",
  },
  {
    question: "How do guests earn and use points?",
    answer:
      "Points are credited after a completed stay. Guests redeem them for discounts or upgrades on future bookings at affiliated hotels and homes.",
  },
  {
    question: "Do I need hardware already installed?",
    answer:
      "No. We handle installation scheduling, room device setup, and ongoing monitoring. You choose a package by room count and we take it from there.",
  },
  {
    question: "Can I manage multiple properties from one account?",
    answer:
      "Yes. Medium and Enterprise plans support multi-property reporting so you can see rooms, devices, and revenue across your portfolio.",
  },
  {
    question: "What support do we get after go-live?",
    answer:
      "Small plans include email support. Medium adds priority response. Enterprise includes a dedicated success manager for rollouts and training.",
  },
  {
    question: "Is there a Smart Home plan separate from hotels?",
    answer:
      "Yes. Smart Home packages start at Rp 99 rb per month for a single unit, with the same app experience guests know from affiliated hotels.",
  },
];

export const sectionTone = {
  hero: "bg-[#0b1c24]",
  features: "bg-[#0f2a33]",
  pricing: "bg-[#143a42]",
  reviews: "bg-[#0c2431]",
  blog: "bg-[#17363f]",
  faq: "bg-[#102c36]",
  about: "bg-[#1a4048]",
} as const;
