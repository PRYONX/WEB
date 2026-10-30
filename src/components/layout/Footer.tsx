import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { siteData } from '../../data/site-data';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-pryonx-surface border-t border-gray-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-90 transition-opacity">
              <img 
                src={logo} 
                alt="PRYONX Logo - AI Automation | Advanced AI Solutions" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteData.description}
            </p>
            <p className="text-gray-400 text-sm">
              Founded &amp; led by{' '}
              <span className="text-white font-medium">{siteData.founder.name}</span>,{' '}
              {siteData.founder.role}
            </p>
            <a
              href={siteData.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-pryonx-cyan hover:opacity-80 transition-opacity text-sm font-medium"
            >
              <Linkedin size={16} />
              <span>Connect on LinkedIn</span>
            </a>
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PRYONX on Facebook"
                className="w-9 h-9 rounded-full bg-pryonx-dark-bg border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-pryonx-cyan hover:border-pryonx-cyan/50 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PRYONX on Instagram"
                className="w-9 h-9 rounded-full bg-pryonx-dark-bg border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-pryonx-cyan hover:border-pryonx-cyan/50 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteData.social.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PRYONX on LinkedIn"
                className="w-9 h-9 rounded-full bg-pryonx-dark-bg border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-pryonx-cyan hover:border-pryonx-cyan/50 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {siteData.footer.links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-pryonx-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {siteData.footer.links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-pryonx-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-pryonx-cyan transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${siteData.contact.phones[0]}`}
                  className="hover:text-pryonx-cyan transition-colors"
                >
                  +91 {siteData.contact.phones[0]}
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-pryonx-cyan hover:opacity-80 transition-opacity font-medium"
                >
                  Start Your AI Project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2026 PRYONX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
