import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 lg:pr-16 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-white leading-tight">
              Turn Unused Software <span className="text-primary">Into Revenue</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              SoftSell helps businesses recover value from unused or excess software licenses. Get instant valuations and quick payments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-orange-600 text-white"
                asChild
              >
                <a href="#contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-secondary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                asChild
              >
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Shield className="mr-2 h-4 w-4 text-primary" />
              <span>Secure, compliant, and trusted by leading enterprises</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 lg:pl-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileInView={{ y: [0, -10, 0] }}
            viewport={{ once: false }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
              alt="Software license exchange illustration" 
              className="w-full max-w-md mx-auto rounded-xl shadow-xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
