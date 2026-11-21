export const siteData = {
  name: 'PRYONX',
  tagline: 'Your Business Problem. Our AI Solution.',
  description: 'Custom AI solutions, intelligent automation, AI products, and AI voice agents built around real business requirements.',
  
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
  ],
  
  founder: {
    name: 'Er. Debadattaa Jena',
    role: 'CEO & Founder',
    linkedin: 'https://www.linkedin.com/in/er-debadattaa-jena-a13a72300',
    profileUrl: 'https://www.pryonx.in/team#debadattaa-jena',
  },

  social: {
    facebook: 'https://www.facebook.com/pryonx',
    instagram: 'https://www.instagram.com/pryonx',
    linkedinCompany: 'https://www.linkedin.com/company/pryonx',
  },

  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPAR3Kw95W62u8vshbVdSupdKbXAWUUHYhdLxNFIjVGWMTPg/viewform?usp=publish-editor',

  cta: {
    primary: 'Start Your AI Project',
    secondary: 'Explore Our Solutions',
  },
  
  capabilities: [
    'CUSTOM AI',
    'AI AUTOMATION',
    'AI PRODUCTS',
    'AI VOICE AGENTS',
    'AI INTEGRATION',
    'AI CONSULTING',
    'INTELLIGENT SYSTEMS',
  ],
  
  services: [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description: 'Automate repetitive workflows, connect systems, and create intelligent business processes.',
      capabilities: [
        'Workflow Automation',
        'Document Automation',
        'Business Process Automation',
        'Data Processing',
        'API Integration',
        'Intelligent Workflows',
      ],
    },
    {
      id: 'custom-ai',
      title: 'Custom AI Solutions',
      description: 'AI systems designed specifically around unique business requirements.',
      capabilities: [
        'Custom AI Applications',
        'Intelligent Dashboards',
        'Recommendation Systems',
        'Machine Learning Solutions',
        'Business Intelligence Tools',
      ],
    },
    {
      id: 'ai-products',
      title: 'AI Product Development',
      description: 'Turn AI ideas into complete AI-powered products.',
      capabilities: [
        'AI SaaS Products',
        'AI Applications',
        'AI Copilots',
        'Internal AI Platforms',
        'AI-Powered Software',
      ],
    },
    {
      id: 'ai-voice',
      title: 'AI Voice Agents',
      description: 'Intelligent voice agents that can communicate naturally with customers and handle business conversations.',
      capabilities: [
        'Incoming Call Handling',
        'Outbound Calls',
        'Customer Support',
        'Lead Qualification',
        'Appointment Booking',
        'Information Collection',
        'Call Routing',
      ],
      featured: true,
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting & Education',
      description: 'Get expert guidance on AI implementation, learn how to use AI effectively, and optimize your existing AI solutions.',
      capabilities: [
        'AI Implementation Strategy',
        'AI Use Case Identification',
        'AI Workflow Optimization',
        'AI Training & Workshops',
        'AI ROI Analysis',
        'AI Best Practices',
        'Existing AI Optimization',
        'AI Adoption Guidance',
      ],
    },
  ],
  
  solutions: [
    { name: 'AI Customer Support', icon: 'Headphones' },
    { name: 'AI Document Processing', icon: 'FileText' },
    { name: 'AI Knowledge Assistant', icon: 'Brain' },
    { name: 'AI Sales Automation', icon: 'TrendingUp' },
    { name: 'AI Recommendation Systems', icon: 'Sparkles' },
    { name: 'AI Analytics', icon: 'BarChart3' },
    { name: 'AI Chatbots', icon: 'MessageSquare' },
    { name: 'AI Workflow Automation', icon: 'Workflow' },
    { name: 'AI Research Assistants', icon: 'Search' },
    { name: 'AI SaaS Products', icon: 'Cloud' },
    { name: 'Custom AI Applications', icon: 'Code' },
    { name: 'AI Voice Agents', icon: 'Phone' },
  ],
  
  products: [
    {
      id: 'ai-call-agent',
      name: 'AI Call Agent',
      tagline: 'On-Premises AI Voice Agent',
      description: 'Enterprise-grade AI call agent that runs entirely on your local infrastructure. Most secure and reliable solution for business communications.',
      features: [
        'Runs 100% on-premises',
        'No cloud dependency',
        'Complete data privacy',
        'Custom voice training',
        'Multi-language support',
        'Enterprise security',
      ],
      badge: 'Most Secure',
      icon: 'Phone',
      color: 'pryonx-red',
    },
    {
      id: 'youdoc',
      name: 'YouDoc',
      tagline: 'Offline Document Converter',
      description: 'Convert your documents completely offline. No internet or cloud required - your documents stay in your hands, secure and reliable.',
      features: [
        '100% offline operation',
        'No cloud storage',
        'Multiple format support',
        'Batch processing',
        'Preserves formatting',
        'Data sovereignty',
      ],
      badge: 'Offline First',
      icon: 'FileText',
      color: 'pryonx-cyan',
    },
    {
      id: 'zero-cloud',
      name: 'Zero Cloud',
      tagline: 'Smart Document Extractor',
      description: 'Advanced document extraction tool with three versions: Lite for basic extraction, Standard for enhanced analysis, and Pro for comprehensive document intelligence.',
      features: [
        'Lite: Basic extraction',
        'Standard: Extract + Check + Analyze',
        'Pro: Full document intelligence',
        'Custom extraction rules',
        'Accuracy reporting',
        'Batch processing',
      ],
      badge: '3 Versions Available',
      icon: 'Search',
      color: 'pryonx-teal',
    },
    {
      id: 'meeting-analyzer',
      name: 'Meeting Analyzer Note Maker',
      tagline: 'Android Meeting Intelligence',
      description: 'AI-powered Android app that automatically takes notes from your conversations, captures thoughts in written form, and records meetings with person-wise attribution.',
      features: [
        'Automatic note taking',
        'Person-wise attribution',
        'Meeting recording',
        'Thought capture',
        'Android native',
        'Export capabilities',
      ],
      badge: 'Android App',
      icon: 'Mic',
      color: 'pryonx-blue',
    },
  ],
  
  process: [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand the business and requirements.',
    },
    {
      step: '02',
      title: 'Analyze',
      description: 'Identify the real problem and determine where AI or automation provides value.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Create the technical architecture and solution strategy.',
    },
    {
      step: '04',
      title: 'Build',
      description: 'Develop the custom AI system or automation.',
    },
    {
      step: '05',
      title: 'Deploy',
      description: 'Integrate and deploy the solution.',
    },
    {
      step: '06',
      title: 'Improve',
      description: 'Optimize and improve the system over time.',
    },
  ],
  
  whyPryonx: [
    {
      title: 'Requirement-Driven',
      description: 'Solutions are designed around the business problem.',
    },
    {
      title: 'Custom Built',
      description: 'Avoid one-size-fits-all solutions.',
    },
    {
      title: 'Automation Focused',
      description: 'Reduce repetitive work and improve efficiency.',
    },
    {
      title: 'Integration Ready',
      description: 'Build solutions that can connect with existing systems.',
    },
    {
      title: 'Technology Independent',
      description: 'Choose the appropriate technology for the requirement.',
    },
    {
      title: 'Production Mindset',
      description: 'Focus on practical systems rather than AI demonstrations.',
    },
  ],
  
  technology: {
    ai: ['LLMs', 'Machine Learning', 'RAG', 'AI Agents', 'Voice AI', 'Embeddings'],
    automation: ['Workflow Automation', 'APIs', 'Webhooks', 'System Integrations'],
    software: ['Modern Frontend', 'Backend APIs', 'Databases', 'Cloud Infrastructure'],
  },
  
  contact: {
    email: 'info@pryonx.in',
    emails: [
      { address: 'info@pryonx.in', label: 'General & Sales (Main)' },
      { address: 'support.pryonx@gmail.com', label: 'Support' },
      { address: 'info.pryonx@gmail.com', label: 'Alternate' },
    ],
    phones: ['7683886320', '7815099648'],
    location: 'Remote-First',
    projectTypes: [
      'Custom AI Solution',
      'AI Automation',
      'AI Product Development',
      'AI Voice Agent',
      'AI Integration',
      'AI Consulting',
      'AI Education',
      'AI Optimization',
      'Other',
    ],
  },
  
  footer: {
    links: {
      products: [
        { name: 'AI Call Agent', href: '/products#ai-call-agent' },
        { name: 'YouDoc', href: '/products#youdoc' },
        { name: 'Zero Cloud', href: '/products#zero-cloud' },
        { name: 'Meeting Analyzer', href: '/products#meeting-analyzer' },
      ],
      services: [
        { name: 'AI Automation', href: '/services#ai-automation' },
        { name: 'Custom AI Solutions', href: '/services#custom-ai' },
        { name: 'AI Product Development', href: '/services#ai-products' },
        { name: 'AI Voice Agents', href: '/services#ai-voice' },
        { name: 'AI Integration', href: '/services#ai-integration' },
        { name: 'AI Consulting & Education', href: '/services#ai-consulting' },
      ],
      company: [
        { name: 'About', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'How We Work', href: '/how-we-work' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
  },
  
  seo: {
    homepage: {
      title: 'PRYONX | Custom AI Solutions & AI Automation',
      description: 'PRYONX builds custom AI solutions, intelligent automation, AI-powered products, and AI voice agents designed around real business requirements.',
    },
  },
};
