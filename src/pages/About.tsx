import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Shield, Users, Lightbulb, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { siteData } from '../data/site-data';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Problem-First',
      description: 'We start with understanding the business problem. Technology is a tool to solve problems, not an end in itself.',
    },
    {
      icon: Zap,
      title: 'Practical AI',
      description: 'We focus on practical applications that deliver real business value, not impressive demos that never see production.',
    },
    {
      icon: Shield,
      title: 'Honest Assessment',
      description: 'We provide honest recommendations. If AI isn\'t the right solution, we\'ll tell you and suggest alternatives.',
    },
    {
      icon: Users,
      title: 'Business-Focused',
      description: 'Every decision is made with business outcomes in mind. We measure success by the value we deliver to your business.',
    },
    {
      icon: Lightbulb,
      title: 'Custom Solutions',
      description: 'We avoid one-size-fits-all approaches. Every solution is designed around your specific requirements and constraints.',
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
              <span>THE PRYONX VISION & ETHOS</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-space-grotesk tracking-tight">
              Building Practical AI for Real Business Problems
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              We believe technology should solve meaningful problems. Our approach is grounded in practicality, not hype.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Work With Us
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
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold text-white mb-3">Technology Should Solve Problems</h3>
                <p className="text-gray-400">
                  We don't implement AI because it's trending. We implement AI when it's the right tool to solve a real business problem. Sometimes the best solution is simple automation. Sometimes it's process optimization. Sometimes it is AI. Our job is to figure out what actually works.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-3">AI Should Be Practical</h3>
                <p className="text-gray-400">
                  We focus on building systems that work in production, handle real workloads, and deliver measurable business value. We're not interested in impressive demos that never see the light of day. We're interested in solutions that actually help your business.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-3">Automation Should Reduce Work</h3>
                <p className="text-gray-400">
                  The goal of automation is to reduce unnecessary work, eliminate errors, and free up your team to focus on what matters. We automate processes that are repetitive, error-prone, or time-consuming—processes that actually benefit from automation.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions Should Fit Requirements</h3>
                <p className="text-gray-400">
                  Every business is different. Every challenge is unique. We don't believe in one-size-fits-all solutions. We design custom solutions around your specific requirements, constraints, and goals.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
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
              Our Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-pryonx-cyan rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
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
              What We Believe
            </h2>
            <div className="bg-pryonx-dark-bg rounded-2xl p-8 border border-gray-800 space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pryonx-cyan rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Business problems come first.</strong> We don't start with technology. We start with understanding what you're trying to achieve.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pryonx-cyan rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Simple solutions are often better.</strong> If a spreadsheet or a simple script solves the problem, we'll recommend that over a complex AI system.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pryonx-cyan rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Production matters more than demos.</strong> We build systems that work in the real world, not just in presentations.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pryonx-cyan rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Honesty builds trust.</strong> We'll tell you when an idea doesn't make sense, even if it means turning down work.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pryonx-cyan rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-gray-300">
                  <strong className="text-white">Long-term relationships beat short-term projects.</strong> We want to be your partner in building intelligent systems, not just a vendor.
                </p>
              </div>
            </div>
          </motion.div>
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
              Let's Build Something Practical
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your business challenge. Let's determine the best way to solve it.
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
