import { Link } from 'wouter';

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to simplify your tech experience?</h2>
            <p className="text-white/90 text-lg">Book a service today and experience hassle-free technology solutions.</p>
          </div>
          <div>
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium inline-block transition-colors duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
