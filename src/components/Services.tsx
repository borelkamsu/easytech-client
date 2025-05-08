import { Link } from 'wouter';
import { Home, Building, ShoppingBag, Globe, BookOpen, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { Service } from '@/types';

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg">
      <div className="h-56 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-primary font-medium">From ${service.priceFrom}/{service.priceUnit}</p>
      </div>
      <div className="px-6 pb-6">
        <Link href="/contact">
          <Button className="w-full bg-primary hover:bg-blue-600 text-white">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  // Fetch services from API
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Fallback services data in case of error or while loading
  const fallbackServices: Service[] = [
    {
      id: "1",
      title: "In-home IT Support",
      description: "Expert tech assistance in the comfort of your home. We diagnose and fix computer issues, set up networks, and install software.",
      priceFrom: 75,
      priceUnit: "hour",
      imageUrl: "https://pixabay.com/get/g5da10b8711332057d9bd539f508a04f79095ac20d50b9630c333ad4db1703e359b1c3681a9dd2798bf1d1fc1d0d6485c4dfe006bc3e9476c5a9726db35c5d4e2_1280.jpg"
    },
    {
      id: "2",
      title: "SME Maintenance",
      description: "Comprehensive IT support for small and medium businesses. Network setup, security implementation, hardware maintenance.",
      priceFrom: 499,
      priceUnit: "month",
      imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "3",
      title: "Equipment Advice",
      description: "Expert guidance on technology purchases. We help you choose the right hardware and software for your specific needs.",
      priceFrom: 99,
      priceUnit: "consultation",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "4",
      title: "Website Creation",
      description: "Professional website development for businesses and individuals. Responsive design, SEO optimization, and content management.",
      priceFrom: 999,
      priceUnit: "project",
      imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "5",
      title: "IT Training",
      description: "Personalized or group training sessions on various technology topics. From basic computer skills to advanced software usage.",
      priceFrom: 199,
      priceUnit: "session",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "6",
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our comprehensive security services. Includes security audits, implementation, and monitoring.",
      priceFrom: 349,
      priceUnit: "service",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const displayServices = services || fallbackServices;

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive tech solutions for individuals and small businesses.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
