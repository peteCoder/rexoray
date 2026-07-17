import type { LucideIcon } from "lucide-react";
import {
  HardHat,
  Globe2,
  Fuel,
  Factory,
  Sofa,
  Truck,
  Landmark,
  Sprout,
  PartyPopper,
  Clapperboard,
  Handshake,
  Wrench,
  ShoppingBag,
} from "lucide-react";

export type ServiceOffering = {
  title: string;
  description: string;
};

export type ServiceInfo = {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  overview: string;
  offerings: ServiceOffering[];
  highlight?: boolean;
};

const rawServices: Omit<ServiceInfo, "image">[] = [
  {
    slug: "general-contracting",
    title: "General Contracting & Project Execution",
    tagline: "Built to spec, delivered on time.",
    icon: HardHat,
    overview:
      "From civil works to full-scale infrastructure, we take projects from drawing board to handover with the discipline of a structured Project Management Plan — clear governance, tracked milestones, and quality control at every phase.",
    offerings: [
      {
        title: "Civil and structural works",
        description:
          "Foundations, structural frames, and civil infrastructure built to engineering specification.",
      },
      {
        title: "Infrastructure development",
        description:
          "Roads, drainage, and public works delivered with a focus on durability and safety.",
      },
      {
        title: "Engineering, Procurement & Construction (EPC)",
        description:
          "End-to-end project delivery — design, sourcing, and construction — under one accountable team.",
      },
    ],
    highlight: true,
  },
  {
    slug: "international-domestic-trade",
    title: "International & Domestic Trade",
    tagline: "Sourcing and moving goods, without the friction.",
    icon: Globe2,
    overview:
      "We connect clients to reliable supply chains across borders — importing and exporting equipment, managing bulk procurement, and trading commodities with the logistics network to back it up.",
    offerings: [
      {
        title: "Import and export of goods & equipment",
        description:
          "Cross-border sourcing and shipment of equipment and materials, handled door to door.",
      },
      {
        title: "Bulk procurement and supply chain management",
        description:
          "Volume purchasing and supply coordination that keeps costs down and timelines tight.",
      },
      {
        title: "Commodities trading (agricultural, industrial, etc.)",
        description:
          "Trading across agricultural and industrial commodities with vetted, reliable partners.",
      },
    ],
  },
  {
    slug: "petroleum-products",
    title: "Petroleum Products & Services",
    tagline: "Reliable energy supply, end to end.",
    icon: Fuel,
    overview:
      "We supply and distribute refined petroleum products with the logistics and storage partnerships to keep them moving reliably, wherever they're needed.",
    offerings: [
      {
        title: "Supply and distribution of PMS, AGO, DPK and lubricants",
        description:
          "Consistent, quality-checked fuel and lubricant supply for commercial and industrial use.",
      },
      {
        title: "Oil and gas logistics",
        description:
          "Coordinated haulage and delivery that keeps supply chains moving without interruption.",
      },
      {
        title: "Storage and retail partnerships",
        description:
          "Storage and retail relationships that extend our reach and reliability nationwide.",
      },
    ],
    highlight: true,
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Industrial Processing",
    tagline: "From raw material to finished product.",
    icon: Factory,
    overview:
      "We produce and process consumer and industrial goods, adding value at every stage — from production through to packaging and distribution.",
    offerings: [
      {
        title: "Production of consumer and industrial goods",
        description:
          "Manufacturing capacity for both everyday consumer products and industrial goods.",
      },
      {
        title: "Value-added processing",
        description:
          "Processing raw inputs into higher-value, market-ready products.",
      },
      {
        title: "Product packaging and distribution",
        description:
          "Packaging and distribution handled in-house for consistent quality control.",
      },
    ],
    highlight: true,
  },
  {
    slug: "interior-landscape-design",
    title: "Interior & Landscape Design",
    tagline: "Spaces that work as well as they look.",
    icon: Sofa,
    overview:
      "A complete service package from concept to installation — we plan, source, and fit out interiors and landscapes, backed by our own furniture supply and procurement network.",
    offerings: [
      {
        title: "Interior design and consultancy",
        description:
          "Concept-to-completion interior design, tailored to how the space will actually be used.",
      },
      {
        title: "Landscape design and execution",
        description:
          "Landscape planning and groundworks that complement the building around them.",
      },
      {
        title: "Furniture supply and installation",
        description:
          "Sourcing and installing furniture as part of a single, coordinated service.",
      },
    ],
  },
  {
    slug: "transportation-logistics",
    title: "Transportation & Logistics",
    tagline: "Goods and fleets, moving on schedule.",
    icon: Truck,
    overview:
      "We manage fleets and haulage operations that keep goods moving — bulk or retail, warehoused or in transit — with the reliability that repeat clients depend on.",
    offerings: [
      {
        title: "Fleet management and haulage services",
        description:
          "Managed fleets and haulage capacity for reliable, on-schedule movement of goods.",
      },
      {
        title: "Bulk and retail goods transportation",
        description:
          "Transportation solutions scaled to bulk shipments or smaller retail loads alike.",
      },
      {
        title: "Warehousing and supply chain solutions",
        description:
          "Storage and distribution support that keeps inventory moving efficiently.",
      },
    ],
    highlight: true,
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    tagline: "Development, done right.",
    icon: Landmark,
    overview:
      "We develop and deliver residential and commercial real estate, applying the same project discipline we bring to every general contracting engagement.",
    offerings: [
      {
        title: "Residential and commercial development",
        description: "Ground-up development of residential and commercial properties.",
      },
      {
        title: "Site acquisition and planning support",
        description:
          "Support from site identification through planning and approvals.",
      },
      {
        title: "End-to-end project delivery",
        description:
          "The same project discipline we bring to general contracting, applied to real estate.",
      },
    ],
  },
  {
    slug: "agricultural-development",
    title: "Agricultural Development",
    tagline: "From the field to the market.",
    icon: Sprout,
    overview:
      "We support food security and economic growth through farming, agro-processing, and the supply of the inputs and machinery that keep production running.",
    offerings: [
      {
        title: "Crop farming and agribusiness",
        description:
          "Direct involvement in crop production and broader agribusiness ventures.",
      },
      {
        title: "Agro-processing and packaging",
        description:
          "Processing and packaging that adds value before produce reaches market.",
      },
      {
        title: "Supply of agricultural inputs and machinery",
        description:
          "Reliable access to the inputs and machinery farms depend on.",
      },
    ],
    highlight: true,
  },
  {
    slug: "event-management",
    title: "Event Management & Logistics",
    tagline: "Flawless execution, memorable results.",
    icon: PartyPopper,
    overview:
      "We plan and produce corporate and social events end-to-end — from stage design and audio-visual to hospitality coordination — so every detail lands.",
    offerings: [
      {
        title: "Corporate and social event planning",
        description:
          "Planning that covers every detail, from concept through to the final run sheet.",
      },
      {
        title: "Event production, branding and logistics",
        description:
          "Production, branding, and logistics coordinated under one team.",
      },
      {
        title: "Stage design, audio-visual and hospitality coordination",
        description:
          "Stage, sound, and hospitality delivered to a professional standard.",
      },
    ],
    highlight: true,
  },
  {
    slug: "media-creative-production",
    title: "Media & Creative Production",
    tagline: "Content that tells your story.",
    icon: Clapperboard,
    overview:
      "We produce video, audio and digital content, and provide the advertising and branding support that helps organizations put their best face forward.",
    offerings: [
      {
        title: "Video, audio and digital content production",
        description: "Original video, audio, and digital content produced in-house.",
      },
      {
        title: "Advertising and marketing support services",
        description:
          "Marketing support that helps organizations put their best face forward.",
      },
      {
        title: "Corporate media and branding materials",
        description:
          "Branding and corporate media assets built for consistency across channels.",
      },
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory & Strategic Sourcing",
    tagline: "Local expertise for global ambitions.",
    icon: Handshake,
    overview:
      "We help international partners enter the Nigerian market with confidence — sourcing vendors, managing procurement, and navigating regulatory compliance on their behalf.",
    offerings: [
      {
        title: "Market entry support for international partners",
        description:
          "Guidance for international partners navigating the Nigerian market for the first time.",
      },
      {
        title: "Vendor sourcing and procurement consulting",
        description:
          "Vendor sourcing and procurement advice grounded in local market knowledge.",
      },
      {
        title: "Regulatory compliance and documentation support",
        description:
          "Support navigating regulatory and documentation requirements with confidence.",
      },
    ],
  },
  {
    slug: "technical-services",
    title: "Technical Services",
    tagline: "Skilled hands, modern tools.",
    icon: Wrench,
    overview:
      "Our technical teams support infrastructure and industrial operations with precision — including the design and deployment of solar and hybrid power systems for homes, offices and remote sites.",
    offerings: [
      {
        title: "Electrical and mechanical installations",
        description:
          "Installation and maintenance of power systems, machinery, and building services.",
      },
      {
        title: "ICT & networking solutions",
        description:
          "Structured cabling, networking, and IT infrastructure set up and supported.",
      },
      {
        title: "Facility maintenance and construction support",
        description:
          "Ongoing maintenance and technical support for commercial and industrial facilities.",
      },
      {
        title: "Renewable and solar energy solutions",
        description:
          "Solar and hybrid power systems designed and deployed for homes, offices, and remote sites.",
      },
    ],
  },
  {
    slug: "general-supplies",
    title: "General Supplies",
    tagline: "Equipping offices, reliably.",
    icon: ShoppingBag,
    overview:
      "We procure and supply office equipment, stationery and furniture for government agencies, corporates, and institutions — backed by bulk sourcing, timely delivery, and after-sales support.",
    offerings: [
      {
        title: "Office equipment and technology",
        description:
          "Computers, printers, and office technology sourced from trusted brands.",
      },
      {
        title: "Stationery and branded supplies",
        description:
          "Everyday stationery and branded materials, supplied reliably and in bulk.",
      },
      {
        title: "Bulk procurement with volume pricing",
        description:
          "Volume-based pricing that makes recurring procurement more cost-effective.",
      },
    ],
  },
];

export const services: ServiceInfo[] = rawServices.map((service) => ({
  ...service,
  image: `/services/${service.slug}.jpg`,
}));

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
