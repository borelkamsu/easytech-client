import { Link } from 'wouter';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppPromote = () => {
  const features = [
    "Book and manage service appointments",
    "Access your service history and invoices",
    "Chat with our AI assistant for quick tech help",
    "Access mini-tutorials and tech tips"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get the EasyTech App</h2>
            <p className="text-lg text-gray-600 mb-6">Take EasyTech with you wherever you go. Our mobile app makes it easy to book services, track appointments, and access tech support on the go.</p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.7 17.5c-.3.2-.7.3-1.1.3-.5 0-.9-.1-1.3-.4-.4-.3-.7-.6-.8-1.1-.1-.5-.1-.9 0-1.4.1-.5.3-.9.6-1.2.3-.3.7-.6 1.1-.7.4-.1.9-.1 1.3 0 .4.1.8.3 1.1.6.3.3.5.7.6 1.1H21c-.1-.9-.5-1.7-1.1-2.4-.6-.7-1.4-1.1-2.3-1.3-.9-.2-1.8-.2-2.7 0-.9.2-1.6.6-2.3 1.3-.6.7-1.1 1.5-1.3 2.4-.2.9-.2 1.8 0 2.7.2.9.6 1.6 1.3 2.3.7.6 1.5 1.1 2.4 1.3.9.2 1.8.2 2.7 0 .9-.2 1.6-.6 2.3-1.3.7-.7 1.1-1.5 1.3-2.4h-1.6c-.3.5-.6.9-1 1.2zM7.8 16c.6 0 1.1-.1 1.6-.4.5-.3.9-.7 1.1-1.2h1.3c-.3.9-.9 1.7-1.7 2.2-.8.5-1.7.7-2.6.7-1.8 0-3.1-.6-4-1.8-.9-1.2-1.1-2.6-.7-4.3.4-1.7 1.2-3 2.5-3.9 1.3-.9 2.7-1.1 4.2-.5 1.5.6 2.5 1.6 2.9 3.2h-1.2c-.4-.9-1-1.6-1.9-1.9-1-.4-1.9-.3-2.8.3-.9.6-1.5 1.5-1.8 2.8-.3 1.3-.2 2.3.3 3.1.6.8 1.5 1.2 2.8 1.2zM3 18.5V5.7h1v12.8H3z" />
                </svg>
                Download on Google Play
              </a>
              <a 
                href="#" 
                className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.94-3.08.43-1.09-.5-2.08-.48-3.25.03-1.47.67-2.2.53-3.08-.44C4.04 16.56 3.8 12.37 5.74 9.38c1.18-1.83 3.03-2.48 4.73-2.35 1.46.11 2.57.99 3.43 1 .91 0 2.1-.96 3.7-.83 1.26.1 2.42.55 3.27 1.61-2.92 1.68-2.44 5.35.75 6.59-.88 1.95-1.82 3.89-3.57 5.88zm-1.95-17.54c.05 1.87-1.53 3.33-3.26 3.43-1.01-1.77.17-3.83 3.26-3.43z" />
                </svg>
                Download on App Store
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=780" 
              alt="EasyTech mobile app" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromote;
