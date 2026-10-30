import { motion } from 'framer-motion';
import { ArrowRight, Zap, Workflow, Phone, Brain, Code, TrendingUp, FileText, Headphones, Sparkles, BarChart3, MessageSquare, Search, Cloud, Cpu, Linkedin, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { siteData } from '../data/site-data';
import founderPhoto from '../assets/team/debadattaa-jena.jpg';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { ParallaxContainer } from '../components/ui/ParallaxContainer';

import { VoiceAgentSimulator } from '../components/ui/VoiceAgentSimulator';
import { AutomationFlowSimulator } from '../components/ui/AutomationFlowSimulator';

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  FileText,
  Brain,
  TrendingUp,
  Sparkles,
  BarChart3,
  MessageSquare,
  Workflow,
  Search,
  Cloud,
  Code,
  Phone,
};

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,25,47,0.9),rgba(10,25,47,0.85)),linear-gradient(rgba(0,180,216,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,216,0.06)_1px,transparent_1px)] bg-[size:100%100%,60px_60px,60px_60px]" />
        
        {/* Dynamic 3D Particle Background */}
        <ParticleBackground particleCount={55} interactive={true} />
        
        {/* 3D Floating Orbs & Light Fields */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/6 w-80 h-80 bg-pryonx-red/15 rounded-full blur-[110px]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3], x: [-20, 20, -20] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-pryonx-cyan/15 rounded-full blur-[130px]"
            animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.2, 0.5, 0.2], y: [-30, 30, -30] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Animated 3D Cyber Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none">
            <motion.line
              x1="15%" y1="25%" x2="50%" y2="45%"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -40], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.line
              x1="85%" y1="35%" x2="50%" y2="45%"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, 40], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E63946" />
                <stop offset="100%" stopColor="#00B4D8" />
              </linearGradient>
            </defs>
          </svg>
        </div>



        <div className="container-custom relative z-10">
          <ParallaxContainer strength={0.04}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pryonx-surface/80 border border-pryonx-cyan/40 backdrop-blur-md mb-8 text-xs md:text-sm font-mono text-pryonx-cyan shadow-lg shadow-pryonx-cyan/10"
              >
                <Sparkles size={16} className="text-pryonx-red animate-pulse" />
                <span>INTELLIGENT AUTOMATION & ADVANCED AI</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight font-space-grotesk tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {siteData.tagline}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                PRYONX builds custom AI solutions, intelligent automation, AI-powered products, and AI voice agents designed around real business requirements.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button href={siteData.googleFormUrl} size="lg">
                  {siteData.cta.primary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/solutions" variant="outline" size="lg">
                  {siteData.cta.secondary}
                </Button>
              </motion.div>
            </motion.div>
          </ParallaxContainer>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="py-10 bg-pryonx-surface/90 border-y border-gray-800/80 relative backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {siteData.capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.08, color: '#00B4D8' }}
                className="text-gray-400 font-mono text-xs md:text-sm tracking-wider uppercase flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-pryonx-cyan/60" />
                <span>{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* COMPANY INTRODUCTION */}
      <section className="py-20 md:py-32 bg-pryonx-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI Built Around Real Business Requirements.
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              PRYONX does not simply apply AI everywhere. We first understand the business problem and then determine the appropriate technology and solution.
            </p>
          </motion.div>

          {/* Process Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Business Problem', icon: Zap },
                { label: 'Analysis', icon: Brain },
                { label: 'AI Architecture', icon: Code },
                { label: 'Custom Solution', icon: Workflow },
              ].map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-pryonx-surface rounded-xl flex items-center justify-center border border-gray-800">
                    <step.icon className="w-8 h-8 text-pryonx-cyan" />
                  </div>
                  <p className="text-white font-medium">{step.label}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pryonx-cyan to-transparent opacity-30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Core Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions designed for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card featured={service.featured} className="h-full">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.featured ? 'bg-pryonx-red' : 'bg-pryonx-cyan'}`}>
                      {service.id === 'ai-automation' && <Workflow className="w-6 h-6 text-white" />}
                      {service.id === 'custom-ai' && <Brain className="w-6 h-6 text-white" />}
                      {service.id === 'ai-products' && <Code className="w-6 h-6 text-white" />}
                      {service.id === 'ai-voice' && <Phone className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.capabilities.slice(0, 4).map((capability) => (
                      <li key={capability} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-pryonx-cyan rounded-full mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED AI VOICE AGENT */}
      <section className="py-20 md:py-32 bg-pryonx-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pryonx-red/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Never Miss Another Customer Call.
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                PRYONX AI Voice Agents can answer calls, communicate naturally, answer customer questions, qualify leads, schedule appointments, collect information, and route important conversations.
              </p>
              <Button href={siteData.googleFormUrl} size="lg">
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
              {/* Interactive AI Voice Agent Simulator Widget */}
              <VoiceAgentSimulator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT STAT METRICS SECTION */}
      <section className="py-16 bg-pryonx-surface/80 border-y border-gray-800 backdrop-blur-md">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '24/7', label: 'Inbound Availability', detail: 'Zero missed opportunities' },
              { stat: '10x', label: 'Faster Processing Speed', detail: 'Instant automated workflows' },
              { stat: '99.9%', label: 'System Reliability', detail: 'Enterprise SLA architecture' },
              { stat: '<180ms', label: 'AI Voice Latency', detail: 'Ultra-fast response feel' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-4 rounded-xl bg-pryonx-dark-bg/60 border border-gray-800/80 hover:border-pryonx-cyan/40 transition-colors"
              >
                <p className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pryonx-cyan via-white to-pryonx-red font-space-grotesk mb-2">
                  {item.stat}
                </p>
                <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-gray-400 text-xs font-mono">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE CAN BUILD */}
      <section className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Can Build
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From intelligent automation to custom AI products.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {siteData.solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-pryonx-dark-bg rounded-xl p-6 border border-gray-800 hover:border-pryonx-cyan/50 transition-all cursor-pointer group shadow-lg hover:shadow-pryonx-cyan/10"
              >
                {(() => {
                  const Icon = iconMap[solution.icon as keyof typeof iconMap] || Code;
                  return <Icon className="w-8 h-8 text-pryonx-cyan mb-3 group-hover:scale-110 transition-transform" />;
                })()}
                <p className="text-white font-medium text-sm group-hover:text-pryonx-cyan transition-colors">{solution.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI AUTOMATION WITH INTERACTIVE ENGINE SIMULATOR */}
      <section className="py-20 md:py-32 bg-pryonx-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Connect. Automate. Scale.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Streamline your business processes with intelligent automation.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Interactive Automation Simulator */}
            <AutomationFlowSimulator />
          </div>
        </div>
      </section>


      {/* HOW WE WORK */}
      <section className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven process for building intelligent solutions.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {siteData.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'} mb-8`}
                >
                  <div className="flex-1" />
                  <div className="w-12 h-12 bg-pryonx-red rounded-full flex items-center justify-center text-white font-bold z-10">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <Card className="ml-4">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRYONX */}
      <section className="py-20 md:py-32 bg-pryonx-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why PRYONX
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What sets us apart in AI development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.whyPryonx.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER LED */}
      <section className="py-20 md:py-28 bg-pryonx-dark-bg border-t border-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img
                  src={founderPhoto}
                  alt={`${siteData.founder.name} — ${siteData.founder.role} of PRYONX`}
                  width={160}
                  height={200}
                  loading="lazy"
                  className="w-32 h-40 md:w-40 md:h-52 object-cover rounded-2xl border border-gray-700/60 flex-shrink-0"
                />
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-pryonx-cyan font-mono text-xs uppercase tracking-widest">Founder-Led Engineering</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    PRYONX Was Founded by {siteData.founder.name}
                  </h2>
                  <p className="text-gray-300">
                    {siteData.founder.name} — {siteData.founder.role} — is an AI &amp; ML developer and
                    Python full-stack engineer who started PRYONX to build practical, production-ready
                    AI systems that solve real business problems.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-1">
                    <Link to="/team" className="inline-flex items-center space-x-2 text-pryonx-cyan font-medium hover:opacity-80 transition-opacity">
                      <span>Meet the Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={siteData.founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-300 font-medium hover:text-pryonx-cyan transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Technology Ecosystem
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern technologies for intelligent solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-pryonx-cyan mr-3" />
                  <h3 className="text-xl font-bold text-white">AI & Intelligence</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteData.technology.ai.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pryonx-dark-bg rounded-full text-sm text-gray-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <div className="flex items-center mb-4">
                  <Workflow className="w-8 h-8 text-pryonx-cyan mr-3" />
                  <h3 className="text-xl font-bold text-white">Automation</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteData.technology.automation.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pryonx-dark-bg rounded-full text-sm text-gray-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <div className="flex items-center mb-4">
                  <Cpu className="w-8 h-8 text-pryonx-cyan mr-3" />
                  <h3 className="text-xl font-bold text-white">Software</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteData.technology.software.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pryonx-dark-bg rounded-full text-sm text-gray-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-pryonx-surface to-pryonx-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-pryonx-red/10 to-transparent" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Intelligent?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your business challenge. Let's explore how AI and automation can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={siteData.googleFormUrl} size="lg">
                {siteData.cta.primary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href={siteData.googleFormUrl} variant="outline" size="lg">
                Talk to PRYONX
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
