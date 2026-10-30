import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, MapPin, Quote, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { teamMembers } from '../data/team';
import { siteData } from '../data/site-data';

export function Team() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-pryonx-dark-bg overflow-hidden">
        <ParticleBackground particleCount={45} interactive={true} />
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
              <span>THE PEOPLE BEHIND PRYONX</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-space-grotesk tracking-tight">
              Meet Our Team
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Engineers and problem-solvers building practical, production-ready AI — led by an
              AI &amp; ML developer who believes business problems come first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM MEMBER PROFILES */}
      {teamMembers.map((member, memberIndex) => (
        <section
          key={member.id}
          id={member.id}
          className={`py-20 md:py-28 ${memberIndex % 2 === 0 ? 'bg-pryonx-surface' : 'bg-pryonx-dark-bg'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-4 mx-auto w-full max-w-sm"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pryonx-cyan/40 via-transparent to-pryonx-red/40 blur-lg" />
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.role} at PRYONX, ${member.headline}`}
                    width={480}
                    height={600}
                    className="relative rounded-2xl w-full object-cover border border-gray-700/60 shadow-2xl"
                  />
                </div>
                <div className="mt-5 flex flex-col items-center lg:items-start gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Linkedin size={16} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <p className="flex items-center space-x-2 text-gray-400 text-sm">
                    <MapPin size={14} className="text-pryonx-cyan" />
                    <span>{member.location}</span>
                  </p>
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-8 space-y-6"
              >
                <div>
                  <p className="text-pryonx-cyan font-mono text-sm uppercase tracking-widest mb-2">
                    {member.role}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk">
                    {member.name}
                  </h2>
                  <p className="text-gray-300 mt-2 text-lg">{member.headline}</p>
                </div>

                {member.quote && (
                  <blockquote className="flex items-start gap-3 border-l-2 border-pryonx-cyan bg-pryonx-dark-bg/60 rounded-r-xl p-5">
                    <Quote size={18} className="text-pryonx-cyan mt-1 flex-shrink-0" />
                    <p className="text-gray-200 italic text-lg">"{member.quote}"</p>
                  </blockquote>
                )}

                <div className="space-y-4">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">Expertise &amp; Focus Areas</h3>
                  <ul className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-pryonx-dark-bg border border-gray-700/60 text-gray-300 text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* JOIN / CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pryonx-surface to-pryonx-dark-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work Directly With Our Founder
            </h2>
            <p className="text-gray-300 text-lg mb-3">
              At PRYONX, you don't get handed off between account managers. You work directly with
              the engineer leading your AI project from discovery to deployment.
            </p>
            <p className="text-pryonx-cyan font-mono text-sm uppercase tracking-widest mb-8">
              PRYONX is now forming its founding-client cohort.
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
