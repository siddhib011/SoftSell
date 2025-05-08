import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  content: string;
  isUser: boolean;
};

type SuggestionType = {
  text: string;
  response: string;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hi there! How can I help you with your software license resale today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const suggestions: SuggestionType[] = [
    { 
      text: "How do I sell my license?", 
      response: "To sell your software license, simply fill out our contact form with your license details. We'll review the information and provide you with a valuation within 24 hours."
    },
    { 
      text: "Which software types do you accept?", 
      response: "We accept licenses from major vendors including Microsoft, Adobe, Autodesk, Oracle, SAP, and many more. If you have a specific license type, please contact us for confirmation."
    },
    { 
      text: "How much are my licenses worth?", 
      response: "License values vary based on several factors including software type, version, quantity, and current market demand. Submit your license details through our form, and we'll provide a free valuation within 24 hours."
    }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { content: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Generate response based on user message
    setTimeout(() => {
      const response = generateResponse(inputValue);
      setMessages(prev => [...prev, { content: response, isUser: false }]);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: SuggestionType) => {
    // Add user message (the suggestion text)
    setMessages(prev => [...prev, { content: suggestion.text, isUser: true }]);
    
    // Add bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { content: suggestion.response, isUser: false }]);
    }, 500);
  };

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Check for keyword matches
    for (const suggestion of suggestions) {
      if (lowerMessage.includes(suggestion.text.toLowerCase())) {
        return suggestion.response;
      }
    }
    
    // Default response
    return "Thank you for your message. One of our license specialists will review your question and get back to you shortly. For immediate assistance, please call us at +1 (555) 123-4567.";
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="w-14 h-14 bg-primary rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        onClick={toggleChat}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute bottom-16 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-xl mr-2">🤖</span>
                <span className="font-semibold">SoftSell Assistant</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleChat} 
                className="text-white hover:text-gray-200 hover:bg-transparent"
              >
                <X size={18} />
              </Button>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.isUser ? 'justify-end' : 'items-start'}`}
                >
                  <div 
                    className={`${
                      message.isUser 
                        ? 'bg-primary/10 dark:bg-primary/20' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    } rounded-lg p-3 max-w-[80%]`}
                  >
                    <p className="text-gray-800 dark:text-gray-200">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-col space-y-2 mt-2">
                  {suggestions.map((suggestion, index) => (
                    <button 
                      key={index}
                      className="bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 text-left p-2 rounded border border-gray-200 dark:border-gray-600 text-sm transition-colors"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.text}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <form onSubmit={handleSendMessage} className="flex">
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                  placeholder="Type your message..."
                />
                <Button 
                  type="submit" 
                  className="px-4 py-2 rounded-r-lg bg-primary text-white hover:bg-orange-600 transition-colors"
                >
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
