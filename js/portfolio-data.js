/** ═══════════════════════════════════════════════════════════════════════════
 *  SINGLE SOURCE OF TRUTH — Edit this object only to update site content.
 *  ═══════════════════════════════════════════════════════════════════════════ */
const portfolioData = {
  personal: {
    name: "Abdul Hannan",
    title: "Backend Developer",
    subtitle:
      "Node.js Engineer | Laravel Developer | REST API Specialist | Open to Freelance",
    email: "contact.hannan100@gmail.com",
    whatsapp: "+92 320 0071746",
    linkedin: "https://linkedin.com/in/abdul-hannan-choudhary-866a493bb",
    github: "https://github.com/abdul-hannan-SE",
    location: "Pakistan 🌍",
    bio: "I'm a Software Engineering graduate with hands-on experience building backend systems for real-world logistics and business operations. Over the past year, I worked remotely with a Japanese forwarding company developing services that handle complex shipment workflows — integrating third-party APIs, optimizing database queries, and managing infrastructure across AWS, cPanel, and Zoho servers.",
    companyName: "",
  },

  typedTexts: [
    "Backend Developer",
    "Node.js Engineer",
    "Laravel Developer",
    "REST API Specialist",
    "Open to Freelance Work",
  ],

  stats: [
    { number: 1, suffix: "+", label: "Years Experience", icon: "fa-briefcase" },
    { number: 4, suffix: "+", label: "Projects Built", icon: "fa-code" },
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
      image: "https://via.placeholder.com/500x300/0f172a/a855f7?text=Carrier+Trips",
      imageAlt: "Carrier Trip Management System",
      technologies: ["Next.js", "MongoDB", "React.js", "Vercel", "Tailwind CSS"],
      github: "https://github.com/abdul-hannan-SE/Carrier-Trips-Management-System",
      live: "https://nafaymotors-accounts-pkuc.vercel.app",
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
      image: "https://via.placeholder.com/500x300/0f172a/06b6d4?text=Logistics+Inventory",
      imageAlt: "Logistics Shipment Inventory",
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "REST API"],
      github: "https://github.com/abdul-hannan-SE",
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
      image: "https://via.placeholder.com/500x300/0f172a/ec4899?text=Nafay+Motors",
      imageAlt: "Hisab Nafay Motors",
      technologies: ["Next.js", "MongoDB", "React.js", "Tailwind CSS"],
      github: "https://github.com/abdul-hannan-SE",
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
    /* ─── ADD NEW PROJECTS HERE ───
    {
      id: 4,
      title: "Your Project Title",
      category: "Full Stack",
      description: "Short description.",
      longDescription: "Detailed description.",
      image: "https://...screenshot.jpg",
      imageAlt: "Alt text",
      technologies: ["Tech1", "Tech2"],
      github: "https://github.com/you/repo",
      live: "https://... or null",
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
        "Built and maintained backend services for logistics applications",
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
