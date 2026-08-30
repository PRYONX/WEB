import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Settings, BookOpen, MessageSquare, Code, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { RoiCalculator } from '../components/ui/RoiCalculator';
import { siteData } from '../data/site-data';

export function Solutions() {
  const solutions = [
    {
      category: 'Customer Experience',
      icon: Users,
      solutions: [
        {
          title: 'AI Customer Support',
          description: 'Intelligent support systems that handle customer inquiries 24/7.',
          approach: 'Natural language processing, knowledge base integration, and escalation workflows.',
          outcome: 'Faster response times, consistent service quality, and reduced support costs.',
        },
      ],
    },
    {
      category: 'Sales Automation',
      icon: TrendingUp,
      solutions: [
        {
          title: 'AI Sales Automation',
          description: 'Automate lead qualification, follow-ups, and sales processes.',
          approach: 'Lead scoring, automated outreach, and predictive analytics.',
          outcome: 'More qualified leads, faster conversion cycles, and improved sales efficiency.',
        },
        {
          title: 'AI Recommendation Systems',
          description: 'Personalized product and service recommendations.',
          approach: 'Collaborative filtering, content analysis, and user behavior modeling.',
          outcome: 'Higher conversion rates, increased average order value, and better customer retention.',
        },
      ],
    },
    {
      category: 'Business Operations',
      icon: Settings,
      solutions: [
        {
          title: 'AI Workflow Automation',
          description: 'Streamline business processes with intelligent automation.',
          approach: 'Process mapping, trigger-based automation, and system integration.',
          outcome: 'Reduced manual work, fewer errors, and faster process completion.',
        },
        {
          title: 'AI Analytics',
          description: 'Advanced analytics and insights from business data.',
          approach: 'Data processing, pattern recognition, and predictive modeling.',
          outcome: 'Better decision-making, identified opportunities, and improved forecasting.',
        },
      ],
    },
    {
      category: 'Knowledge Management',
      icon: BookOpen,
      solutions: [
        {
          title: 'AI Knowledge Assistant',
          description: 'Intelligent systems that organize and retrieve knowledge.',
          approach: 'Document processing, semantic search, and knowledge graph construction.',
          outcome: 'Faster information retrieval, better knowledge sharing, and improved decision support.',
        },
        {
          title: 'AI Document Processing',
          description: 'Automate document analysis and data extraction.',
          approach: 'OCR, natural language processing, and structured data extraction.',
          outcome: 'Reduced manual data entry, faster processing, and improved accuracy.',
        },
      ],
    },
    {
      category: 'Communication Automation',
      icon: MessageSquare,
      solutions: [
        {
          title: 'AI Chatbots',
          description: 'Conversational interfaces for customer and employee interactions.',
          approach: 'Intent recognition, context management, and multi-channel deployment.',
          outcome: 'Instant responses, 24/7 availability, and consistent communication.',
        },
        {
          title: 'AI Research Assistants',
          description: 'AI-powered tools for research and information gathering.',
          approach: 'Web scraping, information synthesis, and automated summarization.',
          outcome: 'Faster research, comprehensive analysis, and time savings.',
        },
      ],
    },
    {
      category: 'Custom AI Products',
      icon: Code,
      solutions: [
        {
          title: 'AI SaaS Products',
          description: 'Complete AI-powered software products for specific markets.',
          approach: 'Product design, AI integration, and scalable architecture.',
          outcome: 'New revenue streams, competitive differentiation, and market expansion.',
        },
        {
          title: 'Custom AI Applications',
          description: 'Tailored AI applications for unique business needs.',
          approach: 'Requirements analysis, custom development, and iterative refinement.',
          outcome: 'Solutions that fit specific workflows and address unique challenges.',
        },
      ],
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-36 bg-pryonx-dark-bg overflow-hidden">
        <ParticleBackground particleCount={45} interactive={true} />
        
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pryonx-cyan/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pryonx-surface/80 border border-pryonx-cyan/40 backdrop-blur-md mb-6 text-xs font-mono text-pryonx-cyan"
            >
              <Sparkles size={14} className="text-pryonx-red" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-space-grotesk tracking-tight">
              AI Solutions for Business Outcomes
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Practical AI solutions designed to solve real business challenges and deliver measurable results.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Discuss Your Solution
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE ROI CALCULATOR SECTION */}
      <section className="py-20 bg-pryonx-dark-bg border-b border-gray-800">
        <div className="container-custom">
          <RoiCalculator />
        </div>
      </section>



      {/* SOLUTIONS BY CATEGORY */}
      {solutions.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-20 md:py-32 ${categoryIndex % 2 === 0 ? 'bg-pryonx-surface' : 'bg-pryonx-dark-bg'}`}
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center mb-12"
            >
              <div className="w-16 h-16 bg-pryonx-cyan rounded-xl flex items-center justify-center mr-4">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {category.category}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.solutions.map((solution, solutionIndex) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: solutionIndex * 0.1 }}
                >
                  <Card className="h-full">
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-400 mb-4">{solution.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-pryonx-cyan mb-2">AI Approach</h4>
                        <p className="text-gray-400 text-sm">{solution.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-pryonx-cyan mb-2">Expected Outcome</h4>
                        <p className="text-gray-400 text-sm">{solution.outcome}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-pryonx-surface to-pryonx-dark-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Find Your Solution
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how AI can address your specific challenges.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Start Your AI Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
