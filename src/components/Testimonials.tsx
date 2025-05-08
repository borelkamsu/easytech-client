import { Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Testimonial } from '@/types';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center mb-6">
        <div className="text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 inline-block" fill={i < testimonial.rating ? "currentColor" : "none"} />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
      <div className="flex items-center">
        <div className="mr-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-primary font-bold">{testimonial.initials}</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  // Fetch testimonials from API
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Fallback testimonials data in case of error or while loading
  const fallbackTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Miller",
      position: "Miller Accounting Services",
      content: "EasyTech transformed our small accounting firm's IT infrastructure. They simplified our systems, improved security, and provided training that actually made sense to our non-technical staff.",
      rating: 5,
      initials: "SM"
    },
    {
      id: "2",
      name: "James Davis",
      position: "Freelance Graphic Designer",
      content: "As a freelance designer, I was struggling with slow equipment and backup issues. EasyTech not only fixed my immediate problems but set me up with a system that prevents future issues. Worth every penny!",
      rating: 5,
      initials: "JD"
    },
    {
      id: "3",
      name: "Eleanor Johnson",
      position: "Retired Teacher",
      content: "I'm in my 70s and was intimidated by new technology. The team at EasyTech was patient, kind, and took the time to teach me at my pace. Now I can video chat with my grandchildren and manage my online banking with confidence.",
      rating: 5,
      initials: "EJ"
    }
  ];

  const displayTestimonials = testimonials || fallbackTestimonials;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about our services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
