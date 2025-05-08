import { useQuery } from '@tanstack/react-query';
import { Service } from '@/types';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';
import Newsletter from '@/components/Newsletter';
import { Helmet } from 'react-helmet';

const ServiceDetail = ({ service }: { service: Service }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
      <div className="lg:w-1/2">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">What's included:</h3>
          <ul className="space-y-2">
            {service.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            )) || [
              'Initial consultation and needs assessment',
              'Professional service delivery',
              'Follow-up and support',
              'Quality guarantee'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-gray-600">Starting from</span>
            <p className="text-3xl font-bold text-primary">${service.priceFrom}<span className="text-lg">/{service.priceUnit}</span></p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-blue-600 text-white">
              Book This Service
            </Button>
          </Link>
        </div>
        <p className="text-sm text-gray-500">For custom requirements or more information, please <Link href="/contact" className="text-primary hover:underline">contact us</Link> directly.</p>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  // Fetch services from API
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Fallback services data in case of error or while loading
  const fallbackServices: Service[] = [
    {
      id: "1",
      title: "In-home IT Support",
      description: "Expert tech assistance in the comfort of your home. We diagnose and fix computer issues, set up networks, and install software. Our technicians are experienced in handling all kinds of technical problems and will ensure your home technology runs smoothly.",
      priceFrom: 75,
      priceUnit: "hour",
      imageUrl: "https://pixabay.com/get/g5da10b8711332057d9bd539f508a04f79095ac20d50b9630c333ad4db1703e359b1c3681a9dd2798bf1d1fc1d0d6485c4dfe006bc3e9476c5a9726db35c5d4e2_1280.jpg",
      features: [
        'PC and Mac troubleshooting',
        'Virus and malware removal',
        'Hardware installation and upgrades',
        'WiFi network setup and optimization',
        'Smart home device configuration'
      ]
    },
    {
      id: "2",
      title: "SME Maintenance",
      description: "Comprehensive IT support for small and medium businesses. Our maintenance plans include network setup, security implementation, hardware maintenance, and ongoing support to ensure your business technology operates efficiently with minimal downtime.",
      priceFrom: 499,
      priceUnit: "month",
      imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      features: [
        '24/7 helpdesk support',
        'Network monitoring and management',
        'Regular security updates',
        'Data backup and recovery solutions',
        'Monthly performance reports',
        'On-site technical support'
      ]
    },
    {
      id: "3",
      title: "Equipment Advice",
      description: "Expert guidance on technology purchases. We help you choose the right hardware and software for your specific needs, whether you're setting up a home office, upgrading your business infrastructure, or looking for the perfect personal device.",
      priceFrom: 99,
      priceUnit: "consultation",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      features: [
        'Personalized needs assessment',
        'Research of suitable technology options',
        'Budget planning assistance',
        'Vendor recommendations',
        'Future-proofing advice',
        'Implementation support'
      ]
    },
    {
      id: "4",
      title: "Website Creation",
      description: "Professional website development for businesses and individuals. Our services include responsive design, SEO optimization, and content management, creating a compelling online presence that effectively represents your brand and engages your audience.",
      priceFrom: 999,
      priceUnit: "project",
      imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      features: [
        'Custom design and development',
        'Mobile-responsive layouts',
        'Content management system setup',
        'SEO optimization',
        'E-commerce capabilities',
        'Analytics integration',
        'Post-launch support'
      ]
    },
    {
      id: "5",
      title: "IT Training",
      description: "Personalized or group training sessions on various technology topics. From basic computer skills to advanced software usage, our training programs are designed to enhance technical proficiency and boost productivity for individuals and teams.",
      priceFrom: 199,
      priceUnit: "session",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      features: [
        'Customized curriculum',
        'Hands-on practical exercises',
        'Remote or in-person sessions',
        'Training materials provided',
        'Progress assessment',
        'Follow-up support'
      ]
    },
    {
      id: "6",
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our comprehensive security services. We provide security audits, implementation of protective measures, and continuous monitoring to safeguard your personal and business data from cyber threats.",
      priceFrom: 349,
      priceUnit: "service",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      features: [
        'Security audit and assessment',
        'Firewall configuration',
        'Antivirus and anti-malware deployment',
        'Employee security training',
        'Data encryption setup',
        'Regular security scans',
        'Incident response planning'
      ]
    }
  ];

  const displayServices = services || fallbackServices;

  return (
    <>
      <Helmet>
        <title>Our Services | EasyTech</title>
        <meta name="description" content="Comprehensive tech solutions including in-home IT support, SME maintenance, equipment advice, website creation, and IT training." />
      </Helmet>
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Expert technology solutions tailored to your needs, whether you're an individual, small business, or growing enterprise.</p>
          </div>

          {displayServices.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </section>
      <CallToAction />
      <Newsletter />
    </>
  );
};

export default ServicesPage;
