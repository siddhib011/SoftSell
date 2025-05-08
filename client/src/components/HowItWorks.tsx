import { ArrowRight, Upload, Calculator, BanknoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="text-2xl text-primary" />,
      title: 'Upload License Details',
      description: 'Submit information about your unused software licenses through our secure platform.',
      delay: 0.1
    },
    {
      icon: <Calculator className="text-2xl text-primary" />,
      title: 'Get Instant Valuation',
      description: 'Our algorithm calculates the optimal market value for your licenses in real-time.',
      delay: 0.2
    },
    {
      icon: <BanknoteIcon className="text-2xl text-primary" />,
      title: 'Get Paid Quickly',
      description: 'Accept our offer and receive payment within 24-48 hours via your preferred method.',
      delay: 0.3
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-secondary dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How SoftSell Works
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process makes selling your unused software licenses quick and profitable
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-750 dark:bg-gray-900 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow dark:shadow-gray-900"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary dark:text-white text-center mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a 
            href="#contact" 
            className="inline-flex items-center text-primary hover:text-orange-600 font-medium transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Ready to get started? <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
