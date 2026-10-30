import { motion } from 'framer-motion';
import { Shield, Mail } from 'lucide-react';
import { siteData } from '../data/site-data';

const POLICY_SECTIONS = [
  {
    title: 'What we collect',
    body: 'We only collect information you voluntarily give us: what you type into our project-intake Google Form (such as your name, company, email, phone number, and project details), and what you send us when you email or call us directly. The website itself does not ask for any personal information and does not track you across other sites.',
  },
  {
    title: 'Why we collect it',
    body: 'For one purpose only: to respond to your project inquiry and talk to you about the work you asked about. We do not use your information for marketing, we do not add you to mailing lists, and we do not sell or share it with third parties. The only external service involved is Google Forms, which hosts the intake form you fill out.',
  },
  {
    title: 'Cookies & analytics',
    body: 'This website does not place advertising or tracking cookies and does not use third-party analytics scripts. Only the technically necessary mechanisms required to serve and host the site (via our hosting provider) are in play.',
  },
  {
    title: 'How long we keep it',
    body: 'We keep inquiry information only as long as needed to respond to you and, if we work together, to deliver your project. If you reach out and we never start a project, you can ask us to delete your information at any time.',
  },
  {
    title: 'Your rights',
    body: 'You may request access to, correction of, or deletion of any personal information you have shared with us, at no cost. To exercise this, email us with the subject line "Data Request". Handling of personal data follows the principles of the Digital Personal Data Protection (DPDP) Act, 2023 of India.',
  },
  {
    title: 'Changes to this policy',
    body: 'PRYONX is a founder-led startup that is still growing. As our services evolve, this policy may be updated. Any changes will be posted on this page with a revised effective date.',
  },
];

export function PrivacyPolicy() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-pryonx-dark-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pryonx-cyan/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pryonx-surface/80 border border-pryonx-cyan/40 backdrop-blur-md mb-6 text-xs font-mono text-pryonx-cyan">
              <Shield size={14} className="text-pryonx-cyan" />
              <span>PRYONX PRIVACY POLICY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-space-grotesk tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm font-mono">
              Effective date: 30 October 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-16 md:py-24 bg-pryonx-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed border-l-2 border-pryonx-cyan pl-5"
            >
              Plain language, no fine print: this page explains what information PRYONX
              ("we", "us") collects from visitors of www.pryonx.in, why we collect it, and
              what you can ask us to do with it.
            </motion.p>

            {POLICY_SECTIONS.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-white mb-3 font-space-grotesk">
                  {section.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{section.body}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-pryonx-dark-bg border border-gray-800 p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-white mb-3">Contact us about privacy</h2>
              <p className="text-gray-400 mb-4">
                Questions, data requests, or concerns about this policy — write to us:
              </p>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="inline-flex items-center space-x-2 text-pryonx-cyan font-medium hover:opacity-80 transition-opacity"
              >
                <Mail size={18} />
                <span>{siteData.contact.email}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
