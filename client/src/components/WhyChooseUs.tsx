import { Zap, TrendingUp, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="text-xl text-primary" />,
      title: 'Fast Turnaround',
      description: 'From valuation to payment in as little as 24 hours, maximizing your time efficiency.',
      delay: 0.1
    },
    {
      icon: <TrendingUp className="text-xl text-primary" />,
      title: 'Competitive Rates',
      description: 'Our extensive network ensures you get the best possible price for your licenses.',
      delay: 0.2
    },
    {
      icon: <Shield className="text-xl text-primary" />,
      title: 'Fully Compliant',
      description: 'Our process adheres to all legal requirements and software vendor guidelines.',
      delay: 0.3
    },
    {
      icon: <Headphones className="text-xl text-primary" />,
      title: 'Dedicated Support',
      description: 'Expert assistance throughout the entire process from our specialized team.',
      delay: 0.4
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-secondary dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer the most efficient, secure, and profitable way to resell your software licenses
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
