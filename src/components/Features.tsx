import { CheckCircle, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Expert Support",
      description: "Our certified technicians provide reliable solutions for all your tech problems with clear explanations."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Response",
      description: "We understand the urgency of tech issues. Our team responds promptly to minimize your downtime."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Affordable Solutions",
      description: "Quality tech support doesn't have to break the bank. We offer competitive prices with transparent pricing."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose EasyTech?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We make technology accessible and understandable for everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
