import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { siteData } from '../data/site-data';

export function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

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
              <span>LET'S START THE CONVERSATION</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-space-grotesk tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Tell us about your business challenge. Let's explore how AI and automation can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 md:py-32 bg-pryonx-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Start Your Project - Google Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-white mb-4">Start Your Project</h2>
                <p className="text-gray-400 mb-8">
                  Ready to build something intelligent? Fill out our project form and our AI architecture team will get back to you within 24 hours.
                </p>
                <Button href={siteData.googleFormUrl} size="lg" className="w-full">
                  Start Your AI Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch Directly</h3>
                
                <div className="space-y-6">
                  {/* Email blocks */}
                  {siteData.contact.emails.map((mail) => (
                    <div
                      key={mail.address}
                      className="flex items-start justify-between p-3 rounded-xl bg-pryonx-dark-bg/60 border border-gray-800/80"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-pryonx-cyan/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="w-6 h-6 text-pryonx-cyan" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1 text-sm">{mail.label}</h4>
                          <a 
                            href={`mailto:${mail.address}`}
                            className="text-gray-400 hover:text-pryonx-cyan transition-colors text-sm font-mono"
                          >
                            {mail.address}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(mail.address, mail.address)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        title="Copy Email"
                      >
                        {copiedText === mail.address ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                      </button>
                    </div>
                  ))}

                  {/* Phone block */}
                  <div className="flex items-start justify-between p-3 rounded-xl bg-pryonx-dark-bg/60 border border-gray-800/80">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-pryonx-cyan/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-pryonx-cyan" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1 text-sm">Phone Hotline</h4>
                        <div className="space-y-1 font-mono text-sm">
                          {siteData.contact.phones.map((phone) => (
                            <a 
                              key={phone}
                              href={`tel:${phone}`}
                              className="block text-gray-400 hover:text-pryonx-cyan transition-colors"
                            >
                              {phone.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location block */}
                  <div className="flex items-start p-3 rounded-xl bg-pryonx-dark-bg/60 border border-gray-800/80">
                    <div className="w-12 h-12 bg-pryonx-cyan/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pryonx-cyan" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 text-sm">Location</h4>
                      <p className="text-gray-400 text-sm font-mono">{siteData.contact.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
