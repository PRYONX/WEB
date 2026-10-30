export const SITE_URL = 'https://www.pryonx.in';
export const SITE_NAME = 'PRYONX';
export const DEFAULT_TITLE = 'PRYONX | Custom AI Solutions & AI Automation';
export const DEFAULT_DESCRIPTION =
  'PRYONX builds custom AI solutions, intelligent automation, AI-powered products, and AI voice agents. Founded by Er. Debadattaa Jena, CEO & Founder.';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  '/services': {
    title: 'AI Services | Automation, Custom AI, Voice Agents & Product Development - PRYONX',
    description:
      'Explore PRYONX services: AI automation, custom AI solutions, AI product development, and AI voice agents built around your business requirements.',
    path: '/services',
  },
  '/solutions': {
    title: 'AI Solutions | Customer Support, Document Processing, Chatbots & More - PRYONX',
    description:
      'Production-ready AI solutions from PRYONX: AI customer support, document processing, sales automation, recommendation systems, chatbots, and voice agents.',
    path: '/solutions',
  },
  '/how-we-work': {
    title: 'How We Work | Discover, Analyze, Build & Deploy AI - PRYONX',
    description:
      'See how PRYONX delivers custom AI: a six-step process of Discover, Analyze, Design, Build, Deploy, and Improve focused on real business outcomes.',
    path: '/how-we-work',
  },
  '/about': {
    title: 'About PRYONX | Founded by Er. Debadattaa Jena, CEO & Founder',
    description:
      'PRYONX was founded by Er. Debadattaa Jena (Debdatta Jena), an AI & ML developer building custom AI solutions around business problems - not one-size-fits-all tools.',
    path: '/about',
  },
  '/team': {
    title: 'Meet the Team | Er. Debadattaa Jena, CEO & Founder - PRYONX',
    description:
      'Meet the people behind PRYONX. Founder Er. Debadattaa Jena is an AI & ML developer and Python full-stack engineer building practical, production-ready AI solutions.',
    path: '/team',
  },
  '/contact': {
    title: 'Contact PRYONX | Start Your AI Project',
    description:
      'Talk to PRYONX about your AI project. Reach us by email or phone and share your business problem - we will design the AI solution around it.',
    path: '/contact',
  },
};
