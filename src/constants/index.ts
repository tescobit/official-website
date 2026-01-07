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
    image: './images/velvet_vogue.png',
    description:
      'A modern fashion e-commerce platform featuring dynamic product filtering, a real-time price slider, and a seamless shopping cart experience optimized for conversions.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2025',
  },
  {
    id: 2,
    title: 'Taskly.AI Content Generator',
    category: 'Web Development',
    image: '/images/tasklyai.png',
    description:
      'A comprehensive SaaS platform empowering creators to generate articles and images instantly. Features include a premium subscription model, real-time AI processing, and a seamless content workflow.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Stripe'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Smart Wallet Dashboard',
    category: 'Web Development',
    image: '/images/smartwallet.png',
    description:
      'A comprehensive personal finance tracker featuring real-time income and expense monitoring, interactive data visualization charts, and category management in a sleek dark mode interface.',
    stack: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    year: '2025',
  },
];

export { navbarItems, services, projects };
