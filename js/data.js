/**
 * Edit site keys, social defaults, and all portfolio content here.
 * Loaded before main.js — exposes window.SITE_CONFIG & window.PORTFOLIO_DATA
 */

window.SITE_CONFIG = {
  emailJs: {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
  contactEmail: 'contact.hannan100@gmail.com',
  /** Digits only, country code without + e.g. 923001234567 */
  whatsappDigits: '923200071746',
  social: {
    linkedin: 'https://linkedin.com/in/abdul-hannan-choudhary-866a493bb',
    github: 'https://github.com/abdul-hannan-SE',
    email: 'mailto:contact.hannan100@gmail.com',
  },
};

/**
 * NEW PROJECT (copy & fill into `projects`):
 * {
 *   slug: 'my-app',
 *   title: 'Project Title',
 *   category: 'Backend' | 'Full Stack' | …,
 *   description: 'Short compelling description.',
 *   tech: ['Node.js', 'MongoDB'],
 *   links: { github: 'https://github.com/user/repo', live: '' },
 *   image: 'assets/projects/my-app.png',
 *   imageHint: 'my-app.png',
 * },
 */
window.PORTFOLIO_DATA = {
  heroTaglines: [
    'Backend Developer',
    'Node.js Engineer',
    'Laravel Developer',
    'REST API Specialist',
    'Open to Freelance',
  ],
  projects: [
    {
      slug: 'carrier-trip-management',
      title: 'Carrier Trip Management System',
      category: 'Full Stack',
      description:
        'Production system managing carrier truck trips, drivers, vehicles, and financial records across multiple companies. Features PDF invoice generation, multi-company support, and real-time profit calculations.',
      tech: ['Next.js', 'MongoDB', 'React.js', 'Vercel'],
      links: {
        github: 'https://github.com/abdul-hannan-SE/Carrier-Trips-Management-System',
        live: '',
      },
      image: 'assets/carrier-trips/01-dashboard.png',
      imageHint: 'carrier-trips.png',
    },
    {
      slug: 'global-logistics-inventory',
      title: 'Global Logistics Shipment Inventory',
      category: 'Backend',
      description:
        'Enterprise logistics management system tracking vehicle shipments from storage yards to shipping ports. Integrated AWS cloud storage for scalable media management and optimized for high-volume operational data.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'AWS'],
      links: {
        github: 'https://github.com/abdul-hannan-SE/global_logistics_inventory',
        live: '',
      },
      image: 'assets/global-logistics/01-shipments.png',
      imageHint: 'logistics-inventory.png',
    },
    {
      slug: 'hisab-nafay-motors',
      title: 'Hisab Nafay Motors',
      category: 'Full Stack',
      description:
        'Multi-branch car dealership management system tracking vehicle stock and financial records. Auto-generates sales reports, supports currency conversion, and syncs inventory across all branches.',
      tech: ['Next.js', 'MongoDB', 'React.js'],
      links: {
        github: 'https://github.com/abdul-hannan-SE',
        live: '',
      },
      image: 'assets/hisab/01-dashboard-home.png',
      imageHint: 'hisab-nafay.png',
    },
  ],
  skills: [
    { name: 'Node.js', icon: 'fa-brands fa-node-js', category: 'backend' },
    { name: 'Express.js', icon: 'fa-solid fa-server', category: 'backend' },
    { name: 'Laravel', icon: 'fa-brands fa-laravel', category: 'backend' },
    { name: 'PHP', icon: 'fa-brands fa-php', category: 'backend' },
    { name: 'REST API Design', icon: 'fa-solid fa-diagram-project', category: 'backend' },
    { name: 'React.js', icon: 'fa-brands fa-react', category: 'frontend' },
    { name: 'Next.js', icon: 'fa-solid fa-n', category: 'frontend' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', category: 'frontend' },
    { name: 'MongoDB', icon: 'fa-solid fa-database', category: 'database' },
    { name: 'MySQL', icon: 'fa-solid fa-database', category: 'database' },
    { name: 'Firebase', icon: 'fa-solid fa-fire', category: 'database' },
    { name: 'AWS', icon: 'fa-brands fa-aws', category: 'infra' },
    { name: 'cPanel', icon: 'fa-solid fa-cloud', category: 'infra' },
    { name: 'Zoho Server', icon: 'fa-solid fa-building', category: 'infra' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', category: 'infra' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', category: 'languages' },
    { name: 'PHP', icon: 'fa-brands fa-php', category: 'languages' },
    { name: 'Python', icon: 'fa-brands fa-python', category: 'languages' },
    { name: 'Dart', icon: 'fa-solid fa-d', category: 'languages' },
  ],
  skillBars: [
    { label: 'Node.js', pct: 85 },
    { label: 'Laravel', pct: 80 },
    { label: 'React/Next.js', pct: 75 },
    { label: 'MongoDB', pct: 85 },
    { label: 'REST API Design', pct: 90 },
    { label: 'AWS/Server Management', pct: 70 },
  ],
  experience: [
    {
      role: 'Software Developer (Remote)',
      company: 'NS Forwarding',
      location: 'Japan (Remote from Pakistan)',
      period: 'March 2025 – February 2026',
      highlights: [
        'Built and maintained backend services for logistics applications',
        'Integrated third-party APIs extending application functionality',
        'Optimized database queries improving performance and reliability',
        'Managed AWS, cPanel, and Zoho server infrastructure',
        'Collaborated with international Japanese stakeholders remotely',
      ],
    },
    {
      role: 'Web Application Developer',
      company: 'Tech Legion',
      location: 'Sialkot, Pakistan',
      period: 'August 2024 – December 2024',
      highlights: [
        'Developed web applications using JavaScript technologies',
        'Implemented features and maintained technical documentation',
        'Collaborated with senior developers on software components',
      ],
    },
  ],
  stats: [
    { id: 'stat-exp', value: 1, suffix: '+', label: 'Years Experience' },
    { id: 'stat-proj', value: 3, suffix: '+', label: 'Projects Built' },
    { id: 'stat-comp', value: 2, suffix: '', label: 'Companies Worked' },
  ],
};
