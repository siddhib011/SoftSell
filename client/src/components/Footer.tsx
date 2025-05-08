import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    'Quick Links': [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Why Choose Us', href: '#why-choose-us' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact Us', href: '#contact' }
    ],
    'Software Types': [
      { name: 'Microsoft Licenses', href: '#' },
      { name: 'Adobe Creative Suite', href: '#' },
      { name: 'Enterprise Solutions', href: '#' },
      { name: 'CAD Software', href: '#' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Compliance', href: '#' },
      { name: 'License Agreements', href: '#' }
    ]
  };

  return (
    <footer className="bg-secondary dark:bg-gray-950 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-1">🔄</span>
              <span className="font-bold text-xl text-white">Soft<span className="text-primary">Sell</span></span>
            </div>
            <p className="text-gray-300 mb-4">
              The trusted platform for software license resale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            &copy; {currentYear} SoftSell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
