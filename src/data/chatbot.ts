import {
  Boxes,
  Compass,
  Wallet,
  Users,
  Rocket,
  LifeBuoy,
  LucideIcon,
} from 'lucide-react';

export interface BotAnswer {
  id: string;
  question: string;
  answer: string;
  ctaHref?: 'form' | 'email' | 'contact' | 'team';
}

export interface BotTopic {
  id: string;
  label: string;
  icon: LucideIcon;
  questions: BotAnswer[];
}

export const botName = 'PRYONX Bot';

export const botGreeting =
  "Hi! I'm PRYONX Bot 👋 — I can answer quick questions about what we build, how we work, and how to start a project. Nothing you click leaves your browser — pick a topic below:";

export const botTopics: BotTopic[] = [
  {
    id: 'what-we-build',
    label: '🛠️ What we build',
    icon: Boxes,
    questions: [
      {
        id: 'services-overview',
        question: 'What services does PRYONX offer?',
        answer:
          'Four core services: AI Automation (workflows, documents, data processing), Custom AI Solutions (ML models, dashboards, recommendation systems), AI Product Development (AI SaaS, copilots, internal platforms), and AI Voice Agents (calls, support, lead qualification).',
        ctaHref: 'contact',
      },
      {
        id: 'voice-agents',
        question: 'What can an AI Voice Agent do?',
        answer:
          'Our voice agents answer customer calls, respond naturally to questions, qualify leads, book appointments, collect information, and route important conversations — so your phone calls are never left unanswered.',
        ctaHref: 'contact',
      },
      {
        id: 'custom-ai',
        question: 'Do you build custom AI for my specific problem?',
        answer:
          'Yes — that is the whole point of PRYONX. We design each system around your specific business requirements instead of forcing a one-size-fits-all template.',
        ctaHref: 'contact',
      },
      {
        id: 'ai-products',
        question: 'Can you build a complete AI product from my idea?',
        answer:
          'Yes. We take AI products from concept to production — design, AI integration, scalable architecture, and deployment.',
        ctaHref: 'contact',
      },
    ],
  },
  {
    id: 'how-we-work',
    label: '⚙️ How we work',
    icon: Compass,
    questions: [
      {
        id: 'process',
        question: 'What is your process?',
        answer:
          'Six steps: Discover → Analyze → Design → Build → Deploy → Improve. We start by understanding your business problem before touching any technology.',
      },
      {
        id: 'who-will-i-work-with',
        question: 'Who will I actually work with?',
        answer:
          'Directly with our founder, Er. Debadattaa Jena — an AI & ML developer who personally leads every engagement from discovery to deployment. No handoffs between account managers.',
      },
      {
        id: 'ai-everywhere',
        question: 'Do you push AI into every problem?',
        answer:
          'No — we are problem-first, not AI-first. If simple automation or a plain integration solves your problem better than AI, that is exactly what we build.',
      },
      {
        id: 'tech-stack',
        question: 'What technologies do you use?',
        answer:
          'LLMs, RAG, machine learning, voice AI, workflow automation, APIs, modern web and cloud infrastructure. We pick the technology that fits your requirement — we are technology independent.',
      },
    ],
  },
  {
    id: 'pricing',
    label: '💰 Pricing',
    icon: Wallet,
    questions: [
      {
        id: 'cost',
        question: 'How much does a project cost?',
        answer:
          'Every solution is custom-scoped, so pricing depends entirely on your problem and requirements. Share your business problem through the project form and you will get a scope-based quote.',
        ctaHref: 'contact',
      },
      {
        id: 'free-consult',
        question: 'Is the first consultation free?',
        answer:
          'Yes. Submitting your project request and the initial assessment are completely free and without obligation — you get clarity on whether AI is even the right answer for you.',
        ctaHref: 'contact',
      },
      {
        id: 'packages',
        question: 'Do you have fixed packages?',
        answer:
          'Not yet. PRYONX currently works on custom, scope-based quotes only, because real business problems rarely fit neat packages.',
      },
    ],
  },
  {
    id: 'who-we-are',
    label: '👥 Who we are',
    icon: Users,
    questions: [
      {
        id: 'company',
        question: 'What is PRYONX?',
        answer:
          'An AI company that builds custom AI solutions, intelligent automation, AI-powered products, and AI voice agents — designed around real business requirements.',
      },
      {
        id: 'founder',
        question: 'Who is behind PRYONX?',
        answer:
          'Er. Debadattaa Jena, CEO & Founder — an AI & ML developer, Python full-stack engineer, and cyber security practitioner. You can see the full profile on our Team page.',
      },
      {
        id: 'new-company',
        question: 'Are you an established company?',
        answer:
          'Honestly: PRYONX is a founding-stage, founder-led startup. We are now forming our Founding Client Program — the first projects will ship with senior founder-level attention, and we will publish verified case studies and benchmarks as they go live.',
        ctaHref: 'contact',
      },
    ],
  },
  {
    id: 'start-a-project',
    label: '🚀 Start a project',
    icon: Rocket,
    questions: [
      {
        id: 'how-to-start',
        question: 'How do I start?',
        answer:
          'Fill out the project intake form — describe your business problem in your own words. No technical details needed; figuring out the technology is our job.',
        ctaHref: 'contact',
      },
      {
        id: 'after-submit',
        question: 'What happens after I submit the form?',
        answer:
          'Every request is reviewed personally by our founder. You hear back directly from the engineer who would lead your project — not a sales queue.',
        ctaHref: 'contact',
      },
      {
        id: 'what-to-prepare',
        question: 'What should I prepare?',
        answer:
          'Just an honest description of the problem: what feels repetitive, slow, error-prone, or expensive in your business. Numbers you already know (calls per day, hours spent) help but are not required.',
      },
      {
        id: 'contact',
        question: 'How else can I contact you?',
        answer:
          'Email info@pryonx.in (main), support.pryonx@gmail.com (support), or call +91 7683886320 / +91 7815099648.',
        ctaHref: 'team',
      },
    ],
  },
  {
    id: 'support',
    label: '🛟 Support',
    icon: LifeBuoy,
    questions: [
      {
        id: 'live-support',
        question: 'Do you offer live chat or phone support?',
        answer:
          'Live consultation booking is coming soon. Today, email is the fastest official channel — write to info@pryonx.in or support.pryonx@gmail.com and it reaches the founder directly.',
        ctaHref: 'email',
      },
      {
        id: 'after-launch',
        question: 'Do you support the system after launch?',
        answer:
          'Every project ships with hands-on founder-level go-live support. Formal ongoing support & maintenance plans are coming soon as we grow.',
      },
      {
        id: 'your-data',
        question: 'Is this chat recorded?',
        answer:
          'No. This bot runs entirely inside your browser — your clicks are never sent anywhere. Close the chat or refresh and this conversation is gone. See our Privacy Policy for details.',
      },
    ],
  },
];
