import { motion } from 'framer-motion';
import { Workflow, Brain, Code, Phone, ArrowRight, Zap, CheckCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/site-data';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';

export function Services() {
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
              <span>CUSTOM AI CAPABILITIES & INTEGRATION</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-space-grotesk tracking-tight">
              AI Solutions Built for Your Requirements.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Comprehensive AI services designed to solve real business problems.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Start Your AI Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>


      {/* AI AUTOMATION */}
      <section id="ai-automation" className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pryonx-cyan rounded-xl flex items-center justify-center mr-4">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  AI Automation
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Automate repetitive workflows, connect systems, and create intelligent business processes that save time and reduce errors.
              </p>
              <div className="space-y-4 mb-8">
                {siteData.services[0].capabilities.map((capability) => (
                  <div key={capability} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pryonx-cyan mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
              <Button href={siteData.googleFormUrl}>
                Discuss Automation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold text-white mb-4">What It Solves</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">• Manual data entry and processing</li>
                  <li className="text-gray-400">• Repetitive administrative tasks</li>
                  <li className="text-gray-400">• Disconnected business systems</li>
                  <li className="text-gray-400">• Slow document processing</li>
                  <li className="text-gray-400">• Inefficient business processes</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CUSTOM AI SOLUTIONS */}
      <section id="custom-ai" className="py-20 md:py-32 bg-pryonx-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold text-white mb-4">What It Solves</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">• Complex business intelligence needs</li>
                  <li className="text-gray-400">• Unique data analysis requirements</li>
                  <li className="text-gray-400">• Specialized recommendation systems</li>
                  <li className="text-gray-400">• Custom machine learning models</li>
                  <li className="text-gray-400">• Industry-specific AI applications</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pryonx-cyan rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Custom AI Solutions
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                AI systems designed specifically around unique business requirements. We build intelligent solutions that address your specific challenges.
              </p>
              <div className="space-y-4 mb-8">
                {siteData.services[1].capabilities.map((capability) => (
                  <div key={capability} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pryonx-cyan mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
              <Button href={siteData.googleFormUrl}>
                Discuss Custom AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI PRODUCT DEVELOPMENT */}
      <section id="ai-products" className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pryonx-cyan rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  AI Product Development
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Turn AI ideas into complete AI-powered products. From concept to deployment, we build production-ready AI applications.
              </p>
              <div className="space-y-4 mb-8">
                {siteData.services[2].capabilities.map((capability) => (
                  <div key={capability} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pryonx-cyan mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
              <Button href={siteData.googleFormUrl}>
                Discuss Product Development
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold text-white mb-4">What It Solves</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">• Need for AI-powered SaaS products</li>
                  <li className="text-gray-400">• Internal AI platform development</li>
                  <li className="text-gray-400">• AI copilot implementation</li>
                  <li className="text-gray-400">• AI feature integration</li>
                  <li className="text-gray-400">• End-to-end AI product delivery</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI VOICE AGENTS */}
      <section id="ai-voice" className="py-20 md:py-32 bg-pryonx-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pryonx-red/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pryonx-red rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  AI Voice Agents
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Intelligent voice agents that can communicate naturally with customers and handle business conversations 24/7.
              </p>
              <div className="space-y-4 mb-8">
                {siteData.services[3].capabilities.map((capability) => (
                  <div key={capability} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pryonx-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
              <Button href={siteData.googleFormUrl}>
                Build Your AI Agent
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card featured className="h-full">
                <h3 className="text-xl font-bold text-white mb-4">What It Solves</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">• Missed customer calls</li>
                  <li className="text-gray-400">• High call center costs</li>
                  <li className="text-gray-400">• Inconsistent customer service</li>
                  <li className="text-gray-400">• Manual appointment scheduling</li>
                  <li className="text-gray-400">• Inefficient lead qualification</li>
                  <li className="text-gray-400">• Limited availability for support</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI INTEGRATION */}
      <section id="ai-integration" className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold text-white mb-4">What It Solves</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">• Disconnected business systems</li>
                  <li className="text-gray-400">• Manual data synchronization</li>
                  <li className="text-gray-400">• Lack of AI capabilities in existing tools</li>
                  <li className="text-gray-400">• Workflow inefficiencies</li>
                  <li className="text-gray-400">• Poor system interoperability</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pryonx-cyan rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  AI Integration
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Integrate AI capabilities into your existing systems and workflows. Enhance your current tools with intelligent automation and insights.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'API Integration',
                  'System Connectivity',
                  'Workflow Enhancement',
                  'Data Pipeline Integration',
                  'Legacy System Modernization',
                ].map((capability) => (
                  <div key={capability} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pryonx-cyan mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
              <Button href={siteData.googleFormUrl}>
                Discuss Integration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your project and let's explore how AI can help your business.
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
