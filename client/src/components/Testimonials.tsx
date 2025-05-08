import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Siddhi Bhardwaj',
    role: 'IT Director',
    company: 'CloudNine Solutions',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&h=96',
    quote: '"SoftSell helped us recover over $85,000 from unused enterprise licenses during our digital transformation. The process was seamless and their valuation exceeded our expectations."',
    stars: 5
  },
  {
    name: 'David',
    role: 'CFO',
    company: 'Nexus Technologies',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&h=96',
    quote: '"As we migrated to cloud solutions, we had a substantial inventory of perpetual licenses. SoftSell provided a compliant way to recover value from these assets that would have otherwise gone unused."',
    stars: 4.5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    goToSlide(newIndex);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-primary text-primary" size={16} />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-gray-300" size={16} />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="fill-primary text-primary" size={16} />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={16} />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-secondary dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from businesses that have successfully recovered value from their unused software
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {isMobile ? (
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentIndex}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 w-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-14 h-14 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="mt-4 flex text-primary">
                  {renderStars(testimonials[currentIndex].stars)}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 lg:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-4 flex text-primary">
                  {renderStars(testimonial.stars)}
                </div>
              </motion.div>
            ))
          )}
        </div>
        
        {isMobile && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={goToPrevSlide}
              className="p-2 text-primary hover:text-orange-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 mx-4 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex 
                      ? 'bg-primary dark:bg-primary' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={goToNextSlide}
              className="p-2 text-primary hover:text-orange-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
