import debadattaaPhoto from '../assets/team/debadattaa-jena.jpg';

export interface TeamMember {
  id: string;
  name: string;
  alternateNames: string[];
  role: string;
  headline: string;
  photo: string;
  linkedin: string;
  location: string;
  shortBio: string;
  bio: string[];
  expertise: string[];
  quote?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'debadattaa-jena',
    name: 'Er. Debadattaa Jena',
    alternateNames: ['Debdatta Jena', 'Debadattaa Jena'],
    role: 'CEO & Founder',
    headline: 'AI & ML Developer | Python Full Stack Developer | Cyber Security',
    photo: debadattaaPhoto,
    linkedin: 'https://www.linkedin.com/in/er-debadattaa-jena-a13a72300',
    location: 'India · Remote-First',
    shortBio:
      'AI & ML engineer and Python full-stack developer who founded PRYONX to build practical, production-ready AI systems for real business problems.',
    bio: [
      'Debadattaa Jena is an AI & Machine Learning developer and Python full-stack engineer with a B.Tech in Computer Science & Engineering. Before founding PRYONX, he worked as an AI & ML developer at WebDzen Technologies and built a strong foundation across machine learning, full-stack engineering, and cyber security.',
      'He founded PRYONX with one clear conviction: businesses do not need more AI hype — they need AI that actually works in production. Under his leadership, PRYONX designs custom AI solutions, intelligent automation, AI-powered products, and AI voice agents engineered around each client\'s real requirements rather than one-size-fits-all templates.',
      'He personally leads solution architecture — from discovering the true business problem, to choosing the right technology, to shipping systems that handle real workloads. His engineering mindset keeps PRYONX honest: if simple automation solves the problem better than AI, that is what we build.',
    ],
    expertise: [
      'AI & Machine Learning',
      'Python Full Stack Development',
      'LLMs, RAG & AI Agents',
      'AI Voice Agents',
      'Workflow & Business Process Automation',
      'Cyber Security',
      'Solution Architecture',
    ],
    quote:
      'Business problems come first. AI is the tool — never the goal.',
  },
];
