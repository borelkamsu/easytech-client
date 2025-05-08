import ContactForm from '@/components/ContactForm';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | EasyTech</title>
        <meta name="description" content="Get in touch with EasyTech for IT support, website creation, equipment advice and more. We're here to help with all your tech needs." />
      </Helmet>
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.</p>
          </div>
        </div>
      </section>
      
      <ContactForm />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Find quick answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">What areas do you service?</h3>
                <p className="text-gray-600">We currently provide in-person services in the San Francisco Bay Area, including San Francisco, Oakland, San Jose, and surrounding cities. For remote services like website creation and virtual consultations, we serve clients nationwide.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Do you offer emergency support?</h3>
                <p className="text-gray-600">Yes, we offer emergency IT support for critical situations. Our emergency response team is available outside regular business hours for an additional fee. Please call our emergency support line at (555) 987-6543.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">What are your payment options?</h3>
                <p className="text-gray-600">We accept major credit cards, PayPal, and bank transfers. For business clients, we also offer invoicing with Net-15 or Net-30 terms upon approval. All payments are processed securely through our payment gateway.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Do you offer any guarantees?</h3>
                <p className="text-gray-600">Yes, we stand behind our work with a satisfaction guarantee. If you're not satisfied with the service provided, we'll work to resolve the issue at no additional cost. For website projects, we offer a 30-day support period for any fixes or adjustments needed.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Can you support Mac, PC, and mobile devices?</h3>
                <p className="text-gray-600">Absolutely! Our technicians are certified in supporting Windows PCs, Mac computers, iOS and Android mobile devices, as well as various tablets and smart home devices. We can help with virtually any consumer technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Our Location</h2>
                <p className="text-gray-600">Visit our office in San Francisco</p>
              </div>
              
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
                {/* Google Maps iframe would go here */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Map loading...</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">22 rue de Vigneron<br />Vincennes, France</p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">Hours:</span> Monday-Friday: 9AM-6PM, Saturday: 10AM-4PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
