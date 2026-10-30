import { motion } from 'framer-motion';
import { ArrowRight, Search, Target, DraftingCompass, Code2, Rocket, TrendingUp, CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';
import { siteData } from '../data/site-data';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';

export function HowWeWork() {
  const detailedProcess = [
    {
      ...siteData.process[0],
      icon: Search,
      details: 'We begin by understanding your business, current workflows, pain points, and goals. This involves stakeholder interviews, process analysis, and requirement gathering.',
    },
    {
      ...siteData.process[1],
      icon: Target,
      details: 'We analyze the collected information to identify the root problems. We evaluate whether AI, automation, or traditional software is the appropriate solution for each challenge.',
    },
    {
      ...siteData.process[2],
      icon: DraftingCompass,
      details: 'We create a technical architecture and solution strategy. This includes technology selection, system design, data flow planning, and integration considerations.',
    },
    {
      ...siteData.process[3],
      icon: Code2,
      details: 'We develop the custom solution using agile methodologies. This includes iterative development, regular feedback loops, and continuous testing.',
    },
    {
      ...siteData.process[4],
      icon: Rocket,
      details: 'We integrate the solution into your existing systems and deploy it to production. This includes user training, documentation, and go-live support.',
    },
    {
      ...siteData.process[5],
      icon: TrendingUp,
      details: 'We monitor performance, gather feedback, and continuously optimize the system. This includes model refinement, process improvements, and feature enhancements.',
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
              <span>PROVEN AGILE AI DELIVERY METHODOLOGY</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-space-grotesk tracking-tight">
              How We Work
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              A proven process for building intelligent solutions that deliver real business value.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>


      {/* OUR PHILOSOPHY */}
      <section className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Philosophy
            </h2>
            <div className="bg-pryonx-dark-bg rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 text-lg mb-6">
                At PRYONX, we believe that technology should solve meaningful problems. We don't apply AI simply because it's trending—we evaluate whether AI is the right tool for your specific challenge.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Sometimes the best solution is traditional automation. Sometimes it's a simple integration. And sometimes, yes, it's a sophisticated AI system. Our job is to determine what actually works for your business.
              </p>
              <div className="flex items-start space-x-4 p-4 bg-pryonx-red/10 rounded-lg border border-pryonx-red/30">
                <AlertTriangle className="w-6 h-6 text-pryonx-red flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-2">We Don't Believe in AI-First</p>
                  <p className="text-gray-400 text-sm">
                    We believe in problem-first. The technology should serve the business requirement, not the other way around.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILED PROCESS */}
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
              Our Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A structured approach to building solutions that work.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {detailedProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <Card className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-16 h-16 bg-pryonx-cyan rounded-xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-pryonx-red font-bold text-lg mr-3">{step.step}</span>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-3">{step.description}</p>
                      <p className="text-gray-300">{step.details}</p>
                    </div>
                  </div>
                  {index < detailedProcess.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-pryonx-cyan to-transparent" />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
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
              What Makes Us Different
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our approach to AI development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pryonx-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Requirement-Driven</h3>
                    <p className="text-gray-400 text-sm">
                      We start with your business problem, not with a technology solution. Every decision is made based on what will actually work for your specific situation.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pryonx-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Honest Assessment</h3>
                    <p className="text-gray-400 text-sm">
                      We'll tell you if AI isn't the right solution. We prefer to deliver a working solution that doesn't use AI than an AI solution that doesn't work.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pryonx-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Production Focus</h3>
                    <p className="text-gray-400 text-sm">
                      We build systems for production, not for demos. Our solutions are designed to handle real workloads, real users, and real business requirements.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pryonx-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Long-Term Partnership</h3>
                    <p className="text-gray-400 text-sm">
                      We aim to stay with your solution beyond launch — monitoring, refining, and improving as your business evolves. Ongoing support &amp; maintenance plans are coming soon; today every project ships with hands-on founder-level go-live support.
                    </p>
                  </div>
                </div>
              </Card>
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
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your business challenge and determine the best path forward.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
