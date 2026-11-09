import {
  Code,
  Smartphone,
  Cloud,
  ChartNoAxesCombined,
  Wallpaper,
  BrainCog,
} from 'lucide-react';

const navbarItems = [
  {
    id: 2,
    name: 'Services',
    link: '#services',
  },
  {
    id: 3,
    name: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 4,
    name: 'About',
    link: '#about',
  },
  {
    id: 5,
    name: 'Contact',
    link: '#contact',
  },
];

const services = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices.',
    features: [
      'React/Next.js',
      'Node.js/Laravel/.NET Backend',
      'Responsive Design',
      'SEO Optimized',
    ],
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: [
      'React Native',
      'Flutter',
      'Native iOS/Android',
      'App Store Deployment',
    ],
  },
  {
    id: 3,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    features: [
      'AWS/Azure/GCP',
      'Docker/Kubernetes',
      'CI/CD Pipeline',
      'Auto-scaling',
    ],
  },
  {
    id: 4,
    icon: ChartNoAxesCombined,
    title: 'SEO & Digital Marketing',
    description:
      'Data-driven digital marketing strategies to boost your online presence and drive organic growth.',
    features: [
      'Technical SEO Audit',
      'Keyword Strategy',
      'Google Analytics/GTM',
      'Conversion Rate Optimization',
    ],
  },
  {
    id: 5,
    icon: Wallpaper,
    title: 'Graphic Design',
    description:
      'Creative visual solutions that establish a strong brand identity and engage your audience.',
    features: [
      'Logo & Branding Identity',
      'UI/UX Design',
      'Social Media Assets',
      'Marketing Collateral',
    ],
  },
  {
    id: 6,
    icon: BrainCog,
    title: 'AI & Machine Learning',
    description:
      'Intelligent automation and predictive analytics to optimize business processes and decision-making.',
    features: [
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics',
      'Chatbot Development',
    ],
  },
];

const projects = [
  {
    id: 1,
    title: 'Velvet Vogue E-Commerce Platform',
    category: 'Web Development',
    image: '/images/velvet_vogue.webp',
    description:
      'A modern fashion e-commerce platform featuring dynamic product filtering, a real-time price slider, and a seamless shopping cart experience optimized for conversions.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2025',
  },
  {
    id: 2,
    title: 'Taskly.AI Content Generator',
    category: 'Web Development',
    image: '/images/tasklyai.webp',
    description:
      'A comprehensive SaaS platform empowering creators to generate articles and images instantly. Features include a premium subscription model, real-time AI processing, and a seamless content workflow.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Stripe'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Smart Wallet Dashboard',
    category: 'Web Development',
    image: '/images/smartwallet.webp',
    description:
      'A comprehensive personal finance tracker featuring real-time income and expense monitoring, interactive data visualization charts, and category management in a sleek dark mode interface.',
    stack: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    year: '2025',
  },
  {
    id: 4,
    title: 'Smart Nano film Landing Page',
    category: 'Web Development',
    image: '/images/smart-nano-web.png',
    description:
      'An elite automotive care and protection landing page featuring a high-impact visual hero, a categorized gallery of recent projects, and a streamlined real-time appointment booking system designed for maximum lead conversion',
    stack: ['React', 'Node.js', 'PrismaDB'],
    year: '2026',
    link: 'https://nanofilm.qa/',
  },
  {
    id: 5,
    title: 'Smart Nano Film System',
    category: 'Web Development',
    image: '/images/smart-nano-sys.png',
    description:
      'A comprehensive automotive service management dashboard featuring real-time revenue analytics, integrated inventory tracking, and automated workflows for professional quotation and invoice generation, designed to streamline branch-wide operations and customer bookings.',
    stack: ['React', 'Node.js', 'PrismaDB', 'ChartJs', 'MailService'],
    year: '2026',
  },
];

const leadershipTeam = [
  {
    img: '/images/t.jpeg',
    name: 'Themiya Kasun',
    role: 'CEO & Founder',
    expertise: 'Strategic Leadership & Business Growth',
  },
  {
    img: '/images/k.jpg',
    name: 'Kaveesha Waduge',
    role: 'Chief Technology Officer',
    expertise: 'Cloud Architecture & AI Innovation',
  },
  {
    img: '/images/a.jpg',
    name: 'Anush Manujaya',
    role: 'Head of Design',
    expertise: 'UX/UI Innovation',
  },
  {
    img: '/images/v.jpg',
    name: 'Vimukthi Dilshan',
    role: 'Lead Developer',
    expertise: 'Full-Stack Development',
  },
];

export { navbarItems, services, projects, leadershipTeam };
