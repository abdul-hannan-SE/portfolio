/** ═══════════════════════════════════════════════════════════════════════════
 *  SINGLE SOURCE OF TRUTH — Edit this object only to update site content.
 *  ═══════════════════════════════════════════════════════════════════════════ */
const portfolioData = {
  /** Public site URL (Vercel) — used for LinkedIn Featured, Open Graph, canonical link */
  site: {
    url: "https://portfolio-fawn-omega-69.vercel.app/",
    ogImage: "/assets/og-cover.png",
    ogImageAlt: "Abdul Hannan — Full Stack Developer portfolio",
    locale: "en_US",
  },

  personal: {
    name: "Abdul Hannan",
    title: "Full Stack Developer",
    subtitle:
      "Node.js · Laravel · React & Next.js · REST APIs · Open to Freelance",
    email: "contact.hannan100@gmail.com",
    whatsapp: "+92 320 0071746",
    linkedin: "https://linkedin.com/in/abdul-hannan-choudhary-866a493bb",
    github: "https://github.com/abdul-hannan-SE",
    location: "Pakistan 🌍",
    bio: "I'm a Software Engineering graduate and full stack developer with hands-on experience shipping end-to-end products for logistics and business operations — APIs, admin dashboards, and customer-facing UIs. Over the past year I worked remotely with a Japanese forwarding company on services that handle complex shipment workflows: third-party integrations, database optimization, and deployments across AWS, cPanel, and Zoho servers.",
    companyName: "",
  },

  typedTexts: [
    "Full Stack Developer",
    "Node.js Engineer",
    "Laravel Developer",
    "React & Next.js",
    "Open to Freelance Work",
  ],

  stats: [
    { number: 1, suffix: "+", label: "Years Experience", icon: "fa-briefcase" },
    { number: 5, suffix: "+", label: "Projects Built", icon: "fa-code" },
    { number: 2, suffix: "", label: "Companies Worked", icon: "fa-building" },
  ],

  skills: {
    backend: [
      { name: "Node.js", icon: "fab fa-node-js", level: 85 },
      { name: "Express.js", icon: "fas fa-server", level: 80 },
      { name: "Laravel", icon: "fab fa-laravel", level: 80 },
      { name: "PHP", icon: "fab fa-php", level: 75 },
      { name: "REST API Design", icon: "fas fa-code-branch", level: 90 },
    ],
    frontend: [
      { name: "React.js", icon: "fab fa-react", level: 75 },
      { name: "Next.js", icon: "fas fa-bolt", level: 75 },
      { name: "JavaScript", icon: "fab fa-js-square", level: 85 },
      { name: "Tailwind CSS", icon: "fas fa-palette", level: 80 },
    ],
    database: [
      { name: "MongoDB", icon: "fas fa-database", level: 85 },
      { name: "MySQL", icon: "fas fa-database", level: 80 },
      { name: "Firebase", icon: "fas fa-fire", level: 70 },
    ],
    infrastructure: [
      { name: "AWS", icon: "fab fa-aws", level: 70 },
      { name: "cPanel", icon: "fas fa-server", level: 80 },
      { name: "Zoho Server", icon: "fas fa-cloud", level: 75 },
      { name: "Git", icon: "fab fa-git-alt", level: 85 },
    ],
    languages: [
      { name: "JavaScript", icon: "fab fa-js", level: 85 },
      { name: "PHP", icon: "fab fa-php", level: 75 },
      { name: "Python", icon: "fab fa-python", level: 70 },
      { name: "Dart", icon: "fab fa-google", level: 65 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Carrier Trip Management System",
      category: "Full Stack",
      description:
        "Production system managing carrier truck trips, drivers, vehicles, and financial records across multiple companies. Features PDF invoice generation, multi-company support, and real-time profit calculations.",
      longDescription:
        "A comprehensive management platform built for a car dealership to replace manual Excel-based workflows. Tracks vehicle shipments, manages driver assignments, handles financial transactions, and generates professional PDF invoices automatically.",
      image: "assets/carrier-trips/01-dashboard.png",
      imageAlt: "Carrier Trip Management System — truck dashboard with revenue, trips, and expenses",
      galleryOverview:
        "Carrier Trip Management ties together truck-level dashboards, trip manifests and nested car rows, driver records and rent history, invoice detail with PDF/Excel and payment tracking, receipts, per-truck expense ledgers with service intervals, and consolidated invoice search. The gallery samples the main surfaces teams use instead of scattered spreadsheets.",
      gallery: [
        "assets/carrier-trips/01-dashboard.png",
        "assets/carrier-trips/02-trips-list.png",
        "assets/carrier-trips/03-drivers.png",
        "assets/carrier-trips/04-invoice-detail.png",
        "assets/carrier-trips/05-payment-receipts.png",
        "assets/carrier-trips/06-truck-expenses.png",
        "assets/carrier-trips/07-invoices.png",
        "assets/carrier-trips/08-extra.png",
        "assets/carrier-trips/09-extra.png",
        "assets/carrier-trips/10-extra.png",
      ],
      technologies: ["Next.js", "MongoDB", "React.js", "Vercel", "Tailwind CSS"],
      github: "https://github.com/abdul-hannan-SE/Carrier-Trips-Management-System",
      live: null,
      features: [
        "Multi-company vehicle tracking",
        "Real-time profit calculations",
        "PDF invoice generation",
        "Driver and truck management",
        "Financial record tracking",
      ],
      year: 2024,
    },
    {
      id: 2,
      title: "Global Logistics Shipment Inventory",
      category: "Backend",
      description:
        "Enterprise logistics management system tracking vehicle shipments from storage yards to shipping ports. Integrated AWS cloud storage for scalable media management and optimized for high-volume operational data.",
      longDescription:
        "A robust backend system built to handle complex logistics operations for a Japanese forwarding company. Manages shipment tracking, integrates with multiple APIs, and provides real-time updates on vehicle locations and status.",
      image: "assets/global-logistics/01-shipments.png",
      imageAlt: "Global Logistics — admin shipments table with filters and yard status",
      galleryOverview:
        "The platform handles yard-to-port logistics at scale: filtered shipment grids with exports and photo counts, bulk assign-vessel and gate-out flows, customer and vessel administration, analytics from fleet KPIs to gate movement, customer-facing dashboards with Excel export, per-shipment photo libraries with upload limits, and multi-select downloads with progress. The screenshots illustrate those layers without walking every column.",
      gallery: [
        "assets/global-logistics/01-shipments.png",
        "assets/global-logistics/02-shipments-bulk.png",
        "assets/global-logistics/03-assign-vessel-modal.png",
        "assets/global-logistics/04-customers.png",
        "assets/global-logistics/05-vessels.png",
        "assets/global-logistics/06-analytics-overview.png",
        "assets/global-logistics/07-gate-analytics.png",
        "assets/global-logistics/08-manage-photos.png",
        "assets/global-logistics/09-customer-dashboard.png",
        "assets/global-logistics/10-bulk-download.png",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "REST API"],
      github: "https://github.com/abdul-hannan-SE/global_logistics_inventory",
      live: null,
      features: [
        "Real-time shipment tracking",
        "AWS cloud storage integration",
        "Multi-API integration",
        "High-volume data handling",
        "Port-to-yard automation",
      ],
      year: 2024,
    },
    {
      id: 3,
      title: "Hisab Nafay Motors",
      category: "Full Stack",
      description:
        "Multi-branch car dealership management system tracking vehicle stock and financial records. Auto-generates sales reports, supports currency conversion, and syncs inventory across all branches.",
      longDescription:
        "Complete dealership management solution handling inventory across multiple branches, with automated financial reporting and currency conversion support. Replaces multiple spreadsheets with a unified system.",
      image: "assets/hisab/main-dashboard.png",
      imageAlt: "Hisab Nafay Motors — main dashboard",
      galleryOverview:
        "Hisab is a multi-branch dealership backbone: main dashboard, operational terminal, stock and unit detail, sales and expenses, accounts with statements, and settings — so finance and the yard stay aligned.",
      gallery: [
        "assets/hisab/main-dashboard.png",
        "assets/hisab/terminal.png",
        "assets/hisab/stock.png",
        "assets/hisab/stock-details.png",
        "assets/hisab/sales.png",
        "assets/hisab/expenses.png",
        "assets/hisab/accounts_with_statement.png",
        "assets/hisab/settings.png",
      ],
      technologies: ["Next.js", "MongoDB", "React.js", "Tailwind CSS"],
      github: "https://github.com/abdul-hannan-SE/hisab",
      live: null,
      features: [
        "Multi-branch inventory management",
        "Automated sales reports",
        "Currency conversion",
        "Financial tracking",
        "Real-time stock updates",
      ],
      year: 2024,
    },
    {
      id: 4,
      title: "NS Forwarding Operations Platform",
      category: "Backend",
      description:
        "Operations platform for a Japanese forwarding company: master and house shipments, bills of lading, client statements, invoicing, payment history, and automated upcoming shipment reports (built remotely, production-grade).",
      longDescription:
        "An end-to-end forwarding operations system developed while working remotely with NS Forwarding (Japan). It connects master shipments, house and master BLs, client accounts, financial statements, invoices, and scheduled client reports so operations and finance share one source of truth instead of disconnected spreadsheets.",
      image: "assets/nsforwarding/dashboard with stats.png",
      imageAlt: "NS Forwarding — operations dashboard with statistics",
      demoVideo: null,
      galleryOverview:
        "Complete UI tour (16 screens): dashboard, master shipments and creation, vessel list and ETA updates, house shipments with house and master BL views, clients with statements and payment history, invoicing, upcoming shipment reports (prepare and send), and ANF notice handling.",
      gallery: [
        "assets/nsforwarding/dashboard with stats.png",
        "assets/nsforwarding/master_shipments.png",
        "assets/nsforwarding/create_master_shipment.png",
        "assets/nsforwarding/vessel_list.png",
        "assets/nsforwarding/update_ETA_Vessel.png",
        "assets/nsforwarding/house_shipments_or_bls.png",
        "assets/nsforwarding/house_bl.png",
        "assets/nsforwarding/master_bl.png",
        "assets/nsforwarding/clients.png",
        "assets/nsforwarding/client_details.png",
        "assets/nsforwarding/clients_statement.png",
        "assets/nsforwarding/clients_payment_hiustory.png",
        "assets/nsforwarding/invoice.png",
        "assets/nsforwarding/upcomming_shipment_report.png",
        "assets/nsforwarding/send_upcoming_shipment_reports.png",
        "assets/nsforwarding/ANF_NOTICE.png",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "REST API", "React.js"],
      github: "https://github.com/abdul-hannan-SE/nsforwarding",
      live: null,
      features: [
        "Master & house shipment management",
        "Vessel list & ETA updates",
        "Bill of lading (BL) workflows",
        "Client statements & payment history",
        "Invoicing tied to operations",
        "Upcoming shipment reports to clients",
        "Third-party API integrations",
      ],
      year: 2025,
    },
    /* ─── ADD NEW PROJECTS HERE ───
    {
      id: 4,
      title: "Your Project Title",
      category: "Full Stack",
      description: "Short description.",
      longDescription: "Detailed description.",
      image: "https://...screenshot.jpg",
      imageAlt: "Alt text",
      galleryOverview: "One paragraph explaining what the screenshots show as a whole.",
      gallery: ["assets/project/01.png", "assets/project/02.png"],
      technologies: ["Tech1", "Tech2"],
      github: "https://github.com/you/repo",
      live: null,
      features: ["Feature 1"],
      year: 2025,
    },
    */
  ],

  experience: [
    {
      id: 1,
      role: "Software Developer (Remote)",
      company: "NS Forwarding",
      location: "Japan (Remote from Pakistan)",
      startDate: "March 2025",
      endDate: "February 2026",
      duration: "1 Year",
      highlights: [
        "Built and maintained full stack features for logistics applications (APIs, dashboards, integrations)",
        "Integrated third-party APIs extending application functionality",
        "Optimized database queries improving performance and reliability",
        "Managed AWS, cPanel, and Zoho server infrastructure",
        "Collaborated with international Japanese stakeholders remotely",
      ],
    },
    {
      id: 2,
      role: "Web Application Developer",
      company: "Tech Legion",
      location: "Sialkot, Pakistan",
      startDate: "August 2024",
      endDate: "December 2024",
      duration: "5 Months",
      highlights: [
        "Developed web applications using JavaScript technologies",
        "Implemented features and maintained technical documentation",
        "Collaborated with senior developers on software components",
        "Improved code quality and application performance",
      ],
    },
    /* ─── ADD NEW EXPERIENCES HERE ─── */
  ],

  social: [
    { icon: "fab fa-github", url: "https://github.com/abdul-hannan-SE", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://linkedin.com/in/abdul-hannan-choudhary-866a493bb", label: "LinkedIn" },
    { icon: "fas fa-envelope", url: "mailto:contact.hannan100@gmail.com", label: "Email" },
    { icon: "fab fa-whatsapp", url: "https://wa.me/923200071746", label: "WhatsApp" },
  ],
};

window.portfolioData = portfolioData;
