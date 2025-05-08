import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    },
  });
  
  const onSubmit = (data: ContactFormData) => {
    // In a real app, we would submit this data to an API endpoint
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  const licenseTypes = [
    { value: 'microsoft', label: 'Microsoft (Office, Windows, Server)' },
    { value: 'adobe', label: 'Adobe (Creative Cloud, Acrobat)' },
    { value: 'autodesk', label: 'Autodesk (AutoCAD, Revit)' },
    { value: 'oracle', label: 'Oracle (Database, Middleware)' },
    { value: 'sap', label: 'SAP' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
              Get a Free Valuation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Tell us about your unused software licenses, and we'll get back to you with a competitive offer within 24 hours.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-300">info@softsell.example.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Business professional analyzing software assets" 
              className="w-full rounded-xl shadow-md hidden md:block" 
            />
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@company.com" 
                          type="email" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Company Inc." 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="licenseType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">License Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white">
                            <SelectValue placeholder="Select license type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {licenseTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your licenses (quantity, version, purchase date, etc.)" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary hover:bg-orange-600 text-white font-medium rounded-md"
                >
                  Get Your Valuation
                </Button>
              </form>
            </Form>
            
            {isSubmitted && (
              <motion.div 
                className="bg-green-50 dark:bg-green-900 rounded-lg p-4 mt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-400 text-xl" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                      Message Sent Successfully
                    </h3>
                    <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                      <p>Thank you for contacting us. We'll get back to you with a valuation within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
