import { motion } from 'framer-motion';
import { ArrowRight, Phone, FileText, Search, Mic, CheckCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/site-data';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ParticleBackground } from '../components/ui/ParticleBackground';

const iconMap: Record<string, any> = {
  Phone,
  FileText,
  Search,
  Mic,
};

const colorMap: Record<string, string> = {
  'pryonx-red': 'bg-pryonx-red',
  'pryonx-cyan': 'bg-pryonx-cyan',
  'pryonx-teal': 'bg-pryonx-teal',
  'pryonx-blue': 'bg-pryonx-blue',
};

export function Products() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-36 bg-pryonx-dark-bg overflow-hidden">
        <ParticleBackground particleCount={45} interactive={true} />
        
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pryonx-cyan/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10 max-w-9xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-pryonx-cyan/10 border border-pryonx-cyan/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-pryonx-cyan" />
              <span className="text-pryonx-cyan text-sm font-medium">Our Products</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PRYONX Products
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Powerful AI tools designed for security, privacy, and real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 md:py-36 bg-pryonx-surface">
        <div className="container-custom max-w-9xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {siteData.products.map((product, index) => {
              const Icon = iconMap[product.icon] || Phone;
              const colorClass = colorMap[product.color] || 'bg-pryonx-cyan';
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card featured={product.badge === 'Most Secure'} className="h-full" enable3D={false}>
                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 ${colorClass} text-white text-xs font-semibold rounded-full mb-4`}>
                        {product.badge}
                      </span>
                    </div>
                    
                    {/* Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{product.name}</h3>
                        <p className="text-pryonx-cyan text-sm">{product.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-6">{product.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-start">
                          <CheckCircle className={`w-4 h-4 ${colorClass.replace('bg-', 'text-')} mr-2 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Button href={siteData.googleFormUrl} size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-pryonx-surface to-pryonx-dark-bg">
        <div className="container-custom text-center max-w-9xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Try Our Products?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our AI products and how they can help your business.
            </p>
            <Button href={siteData.googleFormUrl} size="lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
